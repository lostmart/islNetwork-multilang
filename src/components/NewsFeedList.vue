<script setup>
import { ref, onMounted } from 'vue'
import NewsFeed from '../components/NewsFeed.vue'

const newsList = ref([])
const isLoading = ref(true)
const hasError = ref(false)


const lang = ref(localStorage.getItem('lang') || 'en')
const langKey = lang.value === 'sp' ? 'es' : 'en'

onMounted(async () => {

    isLoading.value = true
    hasError.value = false

    try {
        const res = await fetch('https://magenta-fox-373734.hostingersite.com/wp-json/wp/v2/news')
        const data = await res.json()

        newsList.value = data.map(item => ({
            id: item.id,
            title: item.title.rendered,
            summary: item.acf?.[`summary_${langKey}`] || '',
            content: item.content.rendered || '',
            image: item.acf?.thumbnail || '',
            link: item.acf?.link,
            date: item.acf?.date
        }))
    } catch (error) {
        console.error('Failed to fetch news:', error)
    } finally {
        isLoading.value = false
    }
})
</script>



<template>
    <div
        class="container main-container d-flex gap-4 flex-column justify-content-center align-items-center mb-5 flex-md-row jutify-content-md-center alig">
        <div v-if="isLoading">Loading news...</div>
        <div v-else-if="hasError">Failed to load news. Please try again later.</div>
        <div v-else-if="newsList.length === 0">No news available at the moment.</div>
        <div v-else
            class="d-flex gap-4 flex-column justify-content-center align-items-center mb-5 flex-md-row justify-content-md-center">
            <NewsFeed v-for="news in newsList" :key="news.id" :title="news.title" :summary="news.summary"
                :date="news.date" :image="news.image" :link="news.link" />
        </div>
    </div>
</template>