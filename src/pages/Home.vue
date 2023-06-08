<script setup>
	import { ref, onMounted } from 'vue'

	import engTxt from '../locale/en.json'
	import spanishTxt from '../locale/sp.json'

	/* tools   */
// import detectLang from '../utils/detectLanguage.js'
	
	const title = ref(null)
	onMounted(() => {
		const browserLocale = window.navigator.language.split('-')[0]

		if (browserLocale === 'en' && !localStorage.getItem('lang')) {
			title.value = engTxt.home.header
			localStorage.setItem('lang', 'en')
			return
		}

		if (browserLocale === 'es' && !localStorage.getItem('lang')) {
			title.value = spanishTxt.home.header
			localStorage.setItem('lang', 'sp')
			return
		}

		console.log(browserLocale)

		if (!localStorage.getItem('lang')) {
			title.value = engTxt.home.header
			localStorage.setItem('lang', 'en')
		} else if (localStorage.getItem('lang') === 'sp') {
			title.value = spanishTxt.home.header
		} else if (localStorage.getItem('lang') === 'en') {
			title.value = engTxt.home.header
		}
	})

	// console.log(engTxt.home.header)

	const changeLanguage = (val) => {
		console.log(val)
		localStorage.setItem('lang', val)
		if (val === 'sp') {
			title.value = spanishTxt.home.header
		} else {
			title.value = engTxt.home.header
		}
	}
</script>


<template>
	<h1>{{ title }}</h1>

		<div>
			<button @click="changeLanguage('en')">English</button>
			<button @click="changeLanguage('sp')">Spanish</button>
		</div>
</template>
