<script setup>
	import { ref, onMounted } from 'vue'

	import engTxt from '../locale/en.json'
	import spanishTxt from '../locale/sp.json'

	/* tools   */
	import detectLang from '../composables/detectLanguage.js'
	const descrption = ref(null)

	const setPageLang = () => {
		if (localStorage.getItem('lang') === 'sp') {
			descrption.value = spanishTxt.home.header
		} else if (localStorage.getItem('lang') === 'en') {
			descrption.value = engTxt.home.header
		}
	}

	onMounted(() => {
		detectLang()
		setPageLang()
	})

	// console.log(engTxt.home.header)

	const changeLanguage = (val) => {
		console.log(val)
		localStorage.setItem('lang', val)
		if (val === 'sp') {
			descrption.value = spanishTxt.home.header
		} else {
			descrption.value = engTxt.home.header
		}
	}
</script>

<template>
	<h1>{{ descrption }}</h1>

	<div>
		<button @click="changeLanguage('en')">English</button>
		<button @click="changeLanguage('sp')">Spanish</button>
	</div>
</template>
