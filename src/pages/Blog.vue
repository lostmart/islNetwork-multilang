<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

// const POSTS_URL = "http://localhost:10070/wp-json/wp/v2/posts";



const store = useStore()

const POSTS_URL = ref("")
const loading = ref(false)
const error = ref(false)

const postsArray = ref([])
// const mediaArray = ref([])

async function fetchPosts() {
    loading.value = true
    try {
        const res = await fetch(POSTS_URL.value, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (!res.ok) {
            error.value = true
            loading.value = false
            throw new Error(`HTTP error! :o status: ${res.status}`)
        }
        const data = await res.json()

        // console.log(data[0].title);
        console.log(data)

        postsArray.value = data
        error.value = false
        loading.value = false
        postsArray.value.forEach((post, i) => {
            // console.log(post._links['wp:featuredmedia'][0].href);
            if (post.featured_media === 0) {
                bringmedia(null, i)
            } else {
                bringmedia(post._links['wp:featuredmedia'][0].href, i)
            }
        })
    } catch (err) {
        error.value = err.message
        //console.error(error.value);
        loading.value = false
    }
}

async function bringmedia(dataUrl, index) {
    // wp:featuredmedia"
    if (!dataUrl) {
        return postsArray.value[index].mainPhoto = "./team/placeholder-image.webp"
    }
    try {
        const mediaRes = await fetch(dataUrl)
        if (!mediaRes.ok) {
            throw new Error(`HTTP error! status: ${mediaRes.status}`)
        }
        const mediaData = await mediaRes.json()
        postsArray.value[index].mainPhoto = mediaData.source_url
        error.value = null
        // mediaArray.value.push(mediaData.source_url)
        // console.log(mediaData)
    } catch (error) {
        console.error('Error fetching media:', error)
        //mediaArray.value.push("https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")

    }
}

const setPageLang = (callback) => {
    if (localStorage.getItem('lang') === 'sp') {
        // old rest api POSTS_URL.value = `https://islbackoffice.devmartin.site/wp-json/wp/v2/posts?categories=7`
        POSTS_URL.value = `http://isl-blog.great-site.net/index.php?rest_route=/wp/v2/posts`
    } else {
        POSTS_URL.value = `http://isl-blog.great-site.net/index.php?rest_route=/wp/v2/posts`
    }
    callback()
}

// Watch for changes in the store state siteLang
watch(
    () => store.state.siteLang,
    () => {
        setPageLang(fetchPosts)
    }
)


onMounted(() => {
    setPageLang(fetchPosts)
    //fetchPosts()
}
)


</script>


<template>

    <h2 class="m-2">Blog site</h2>
    <!-- error -->
    <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
        <img src="../assets/images/alert-circle.svg" alt="godparents around the world" />
        <p>hay un error con la conexion de posts ....</p>
    </div>
    <div v-if="loading" class="alert alert-info" role="alert">
        loading ...
    </div>
    <div v-if="!postsArray.length && !loading">
        <p>no se ha encontrado ni un solo post ...</p>
        <img src="../assets/images/nothing.gif" alt="" />
    </div>
    <article class="p-2" v-if="postsArray" v-for="(post, indx) in postsArray" :key="post.id">
        <router-link class="" :to="`/blog/${post.id}`">
            <div class="row g-0">
                <div class="col-md-4 img-cont">
                    <img :src="post.mainPhoto" alt="nothing found image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title.rendered }}</h5>
                        <div v-html="post.excerpt.rendered"></div>
                    </div>
                </div>
            </div>
        </router-link>
    </article>
</template>


<style scoped>
a {
    text-decoration: none;
    color: inherit;
}

article {
    border: 1px solid #d4d0d0;
    border-radius: 0.375rem;
    ;
    max-width: 670px;
    margin: 1.2em auto;
    transition: all 250ms ease-in-out;
}

article .img-cont {
    overflow: hidden;
    max-height: 180px;
    display: flex;
    align-items: center;
}

article img {
    transition: all 250ms ease-in-out;
}

article:hover {
    background-color: #418bd01c;
}

article:hover img {
    transform: scale(1.1);
}
</style>