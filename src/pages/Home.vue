<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

/*  locales  */
import engTxt from '../locale/en.json'
import spanishTxt from '../locale/sp.json'
import NewsFeed from '../components/NewsFeed.vue'

const descrption = ref(null)
const btnTxt = ref(null)
const donateBtnTxt = ref(null)
const store = useStore()

// Watch for changes in the store state siteLang
watch(
	() => store.state.siteLang,
	() => {
		setPageLang()
	}
)

/**
 * Sets the page language based on the value stored in localStorage.
 * If the language is set to 'sp', => Spanish
 * If the language is set to 'en', => English
 * @returns {void}
 */
const setPageLang = () => {
	if (localStorage.getItem('lang') === 'sp') {
		descrption.value = spanishTxt.home.description
		btnTxt.value = spanishTxt.about.btnTxt
		donateBtnTxt.value = spanishTxt.home.donateBtn
	} else if (localStorage.getItem('lang') === 'en') {
		descrption.value = engTxt.home.description
		btnTxt.value = engTxt.about.btnTxt
		donateBtnTxt.value = engTxt.home.donateBtn
	}
}

onMounted(() => {
	setPageLang()
})
</script>

<template>
	<section class="home p-0 p-lg-5">
		<img src="../assets/images/bg-lines.png" alt="bg-lines" class="bg-lines">
		<div class="container main-container pt-5">
			<div class="row">
				<div class="col-lg-6">
					<h1 class="card-title mt-4">Godparents Network Uruguay</h1>
					<p v-html="descrption"></p>

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
		<div class="container main-container pt-5">

			<div class="row">
				<div class="col-lg-6 p-4 positioin-relative d-flex align-items-center h-full">

					<img class="img-fluid position-relative z-1"
						src="../assets/images/Kaplan-International-Languages-Logo.png" alt="kaplan internacional logo">
				</div>
				<div class="col-lg-6 p-2 positioin-relative d-flex align-items-center h-full">

					<div class="orange-box"></div>
					<div class="position-relative blue-box">
						<h3>Los de Kaplan
							nos dan terrible mano !</h3>
						<p>Gente muy macanuda !! 🏅</p>
					</div>

				</div>
			</div>
		</div>
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
}

.kaplan .row {
	min-height: 550px;
}

.kaplan h3 {
	font-size: 35px;
	font-weight: bold;
}

@media screen and (min-width: 992px) {
	.kaplan h3 {
		font-size: 48px;
		font-weight: bold;
	}
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
