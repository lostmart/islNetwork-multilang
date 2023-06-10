<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

/*  locales  */
import engTxt from '../locale/en.json'
import spanishTxt from '../locale/sp.json'

const descrption = ref(null)
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
	} else if (localStorage.getItem('lang') === 'en') {
		descrption.value = engTxt.home.description
	}
}

onMounted(() => {
	setPageLang()
})
</script>

<template>
	<div class="container main-container">
		<div class="card">
			<div class="card-body">
				<div class="row">
					<h1 class="card-title">Godparents Network Uruguay</h1>
					<div class="col-lg-6">
						<p v-html="descrption"></p>
					</div>
					<div class="col-lg-6 col-md-12 d-flex align-items-center">
						<img src="../assets/images/Godparents_2022.jpg" alt="godparents around the world" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
img {
	width: 100%;
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
</style>
