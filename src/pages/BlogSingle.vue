<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// const BASE_URL = "https://islbackoffice.devmartin.site/";
const BASE_URL = "https://magenta-fox-373734.hostingersite.com/"

const route = useRoute()

const loading = ref(false)
const error = ref(false)

const postData = ref(null)
const publishDate = ref(null)
const postId = ref(null)

const featuredMedia = ref(null)


const formatDate = (dateString) => {
    const date = new Date(dateString)

    // Format the date in a human-readable form
    const readableDate = date.toLocaleDateString("en-US", {
        year: 'numeric', // e.g., 2024
        month: 'long', // e.g., May
        day: 'numeric', // e.g., 6
    })
    publishDate.value = readableDate

}


async function fetchSinglePost(POST_URL) {
    loading.value = true
    try {
        const res = await fetch(POST_URL)
        // console.log(res.status);
        if (res.status === 404) {
            error.value = "Post not found..."
            throw new Error("Post not found...")
        }
        if (!res.ok) {
            error.value = `HTTP error! status: ${res.status}`
            loading.value = false
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        // console.log(data);
        postData.value = data
        loading.value = false
        formatDate(data.date)
        // si  no tiene featured_image le damos un dummy placeholder
        if (data.featured_media == 0) {
            return featuredMedia.value = "/team/placeholder-image.webp"
        }
        // const POSTS_URL = "https://islbackoffice.devmartin.site/wp-json/wp/v2/posts";



        bringFeatured_media(`${BASE_URL}/wp-json/wp/v2/media/${data.featured_media}`)
        //console.log(data);
    } catch (error) {
        console.error('Error fetching posts:', error)
        error.value = error
        loading.value = false
    }
}

async function bringFeatured_media(dataUrl) {
    try {
        const mediaRes = await fetch(dataUrl)
        if (!mediaRes.ok) {
            throw new Error(`HTTP error! status: ${mediaRes.status}`)
        }
        const mediaData = await mediaRes.json()
        featuredMedia.value = mediaData.source_url
        console.log(mediaData.source_url)
    } catch (error) {
        console.error('Error fetching media:', error)

    }
}

onMounted(() => {

    postId.value = route.params.id
    // console.log(postId.value);

    const SINGLE_POST_URL = `${BASE_URL}/wp-json/wp/v2/posts/${postId.value}`
    fetchSinglePost(SINGLE_POST_URL)
}
)


</script>
<template>
    <article class="error-art" v-if="error">
        <h2 class="display-2">{{ error }}</h2>
        <img class="not-found" src="/team/404.png" alt="not found error" />
    </article>
    <div v-if="loading" class="alert alert-info" role="alert">
        loading ...
    </div>
    <article v-if="postData" class="m-2 p-2">
        <figure>
            <img :src="featuredMedia" :alt="postData.title.rendered">
            <figcaption>
                <h2>{{ postData.title.rendered }}</h2>
            </figcaption>
        </figure>


        <div v-html="postData.content.rendered"></div>
        <div class=" m-4 text-end blockquote-footer">{{ publishDate }}</div>
        <hr>
    </article>
    <footer>
        <nav class="nav nav-pills nav-fill">
            <router-link class="nav-link" to="/blog">Blog Home</router-link>
            <router-link class="nav-link" to="/">Home</router-link>
        </nav>
    </footer>
</template>



<style scoped>
.error-art {
    height: 63dvh;
}

.not-found {
    max-width: 300px;
    display: block;
    margin: auto;
}

h2 {
    font-size: 7dvw;
    text-align: center;
}

figure {

    position: relative;
}

img {
    width: 100%;
}

figcaption h2 {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 10;
    padding: 10px;
    text-shadow: 1px 1px 2px white;
}

figcaption h2:before {
    content: '';
    position: absolute;
    left: 0;
    background: #418bd01c;
    background: linear-gradient(180deg, rgb(65 139 208 / 0%) 0%, rgb(116 161 203 / 62%) 100%);
    width: 100%;
    height: 88%;
    z-index: -1;
    backdrop-filter: blur(4px);
    bottom: -8px;
    opacity: 0.9;
}
</style>
