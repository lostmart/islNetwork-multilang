<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

/*  locales  */
import engTxt from '../locale/en.json'
import spanishTxt from '../locale/sp.json'

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
	<div class="row">
		<h1 class="card-title mt-4">Godparents Network Uruguay</h1>
		<div class="col-lg-6">
			<p v-html="descrption"></p>
			<a class="btn btn-lg btn-primary my-5 d-block mx-auto w-50"
				href="https://docs.google.com/forms/d/e/1FAIpQLSe8VSDWwS83qQBVjqY9t1pLzoggbC82IVRagmmxk4km_aaEDg/viewform"
				target="_blank">
				{{ btnTxt }}
			</a>
			<a class="btn btn-lg btn-success my-5 d-block mx-auto w-50" href="https://gofund.me/8926b9c2"
				target="_blank">
				{{ donateBtnTxt }}
			</a>
		</div>
		<div class="col-lg-6 col-md-12 d-flex align-items-center flex-column">
			<img src="../assets/images/Distribucion-mundial-2024.png" alt="godparents around the world" />
			<figure class="d-flex flex-column align-items-center m-2">
				<figcaption>In partnership with</figcaption>
				<img class="kaplan-logo" src="../assets/images//Kaplan-International-Languages-Logo.png"
					alt="kaplan logo" />
			</figure>
		</div>
	</div>
</template>

<style scoped>
figcaption {
	font-family: system-ui;
	color: #240f6e;
	font-size: .8em;
}

img {
	width: 100%;
}

.kaplan-logo {
	max-width: 260px;
}

.card {
	position: relative;
	min-height: 400px;
	border: transparent !important;
}

.card .card-title {
	font-size: 2.2rem;
	text-shadow: 1px 2px grey;
	z-index: 1;
	text-align: center;
}

.card .card-text {
	font-size: 1.2rem;
}

.card .eng {
	top: 22rem !important;
}

@media (min-width: 768px) {
	.card .card-title {
		font-size: 2.9rem;
	}
}

.btn-primary {
	min-width: fit-content;
}
</style>
