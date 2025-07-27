<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import NewsFeed from '../components/NewsFeed.vue'

// Content variables
const description = ref('')
const donateBtnTxt = ref('')
const homeTitle = ref('')
const btnTxt = ref('') // assuming this stays static or could be added to ACF later

const store = useStore()

const lang = ref(localStorage.getItem('lang') || 'en')

const fetchPageContent = async () => {
	try {
		const response = await axios.get('https://magenta-fox-373734.hostingersite.com/wp-json/wp/v2/pages?slug=home')
		const page = response.data[0]
		const acf = page.acf || {}

		// dynamically pick fields
		description.value = acf[`description_${langKey.value}`] || ''
		donateBtnTxt.value = acf[`donate_btn_${langKey.value}`] || ''
		btnTxt.value = lang.value === 'sp' ? 'Unirte' : 'Join Us' // fallback until moved to ACF
		homeTitle.value = acf[`title_${langKey.value}`] || ''
	} catch (error) {
		console.error('Error fetching page content:', error)
	}
}

const langKey = computed(() => {
	return lang.value === 'sp' ? 'es' : 'en'
})

// Watch language change from Vuex store
watch(
	() => store.state.siteLang,
	() => {
		lang.value = localStorage.getItem('lang') || 'en'
		fetchPageContent()
	}
)

// Initial fetch
onMounted(() => {
	fetchPageContent()
})
</script>

<template>
	<section class="home p-0 p-lg-5">
		<img src="../assets/images/bg-lines.png" alt="bg-lines" class="bg-lines">
		<div class="container main-container pt-5 position-relative">
			<div class="row">
				<div class="col-lg-6">
					<h1 class="card-title mt-4">{{ homeTitle }}</h1>
					<p v-html="description"></p>

					<div class="d-flex flex-column justify-content-center gap-4 flex-md-row mt-4">
						<a href="" class="btn d-block mx-auto w-50 text-white join">{{ btnTxt }}</a>
						<a href="" class="btn btn-primary d-block mx-auto w-50 donate">{{ donateBtnTxt }}</a>
					</div>

				</div>

				<div class="col-lg-6 p-4">
					<img class="img-fluid" src="../assets/images/Distribucion-mundial-2025.png" alt="god parrents logo">
				</div>

			</div>

		</div>

	</section>
	<section class="kaplan">



		<img class="img-fluid position-relative z-1" src="../assets/images/Kaplan-International-Languages-Logo.png"
			alt="kaplan internacional logo">

		<!-- <div class="orange-box"></div>
					<div class="position-relative blue-box">
						<h3>Los de Kaplan
							nos dan terrible mano !</h3>
						<p>Gente muy macanuda !! 🏅</p>
					</div> -->
	</section>

	<section class="newsFeed p-4">
		<h3 class="m-4">News Feed</h3>
		<div
			class="container main-container d-flex gap-4 flex-column justify-content-center align-items-center mb-5 flex-md-row jutify-content-md-center alig">
			<NewsFeed />
			<NewsFeed />
			<NewsFeed />
		</div>

	</section>
</template>

<style scoped>
.home {
	background-color: var(--prim-clr);
}

.home .bg-lines {
	mix-blend-mode: color-dodge;
	position: absolute;
	width: 100dvw;
	inset: 0;
	opacity: 0.4;
}

.home h1 {
	font-weight: normal;
	font-size: 52px;
	max-width: 540px;
}

.home p {
	color: var(--light);
	margin-top: 1em;
	line-height: 2;
}

.home .join {
	background-color: var(--accent);
	border-radius: 0;
	max-width: 204px;
	font-weight: 600;
}

.home .donate {
	background-color: var(--light);
	color: var(--prim-clr);
	border-radius: 0;
	max-width: 204px;
	font-weight: 600;

}

.kaplan {
	position: relative;
	max-width: 1140px;
	margin: auto;
	padding: 1.5em;
	display: flex;
	justify-content: center;
	align-items: center;
}

.kaplan img {
	width: 100%;
	max-width: 480px;
}

.orange-box {
	background-color: var(--accent);
	height: 562px;
	width: 268px;
	position: absolute;
	right: 1em;
	top: 1em;
}

.blue-box {
	background-color: var(--prim-clr);
	color: var(--light);
	padding: 2em 1em;
	max-width: 570px;
}

.newsFeed {
	background-color: var(--prim-clr);
}

.newsFeed h3 {
	color: var(--light);
	font-size: 48px;
	font-weight: bold;
}
</style>
