<script setup>
	import { ref, onMounted, watch } from 'vue'
	import { useStore } from 'vuex'

	/*  locales  */
	import engTxt from '../locale/en.json'
	import spanishTxt from '../locale/sp.json'

	const aboutData = ref({ title: '', firstParagraphs: [] })

	const store = useStore()

	// Watch for changes in the store state siteLang
	watch(
		() => store.state.siteLang,
		() => {
			setPageLang()
		}
	)

	const setPageLang = () => {
		if (localStorage.getItem('lang') === 'sp') {
			aboutData.value = spanishTxt.about
			console.log(aboutData)
		} else if (localStorage.getItem('lang') === 'en') {
			aboutData.value = engTxt.about
			console.log(aboutData)
		}
	}

	onMounted(() => {
		setPageLang()
	})
</script>

<template>
	<h2 class="card-title mt-4">{{ aboutData.title }}</h2>
	<p
		class="card-text"
		v-for="paragraph in aboutData.firstParagraphs"
		:key="paragraph"
		v-html="paragraph"></p>

	<h2 class="card-title mt-4">{{ aboutData.secondTitle }}</h2>
	<p
		class="card-text"
		v-for="paragraph in aboutData.secondParagraphs"
		:key="paragraph"
		v-html="paragraph"></p>
	<img
		style="max-width: 250px"
		class="rounded mx-auto d-block"
		src="../assets/images/organizacion-centrada-en-alumno-islnetwork.jpg"
		alt="oranizacion centrada en el alumno" />
	<a
		class="btn btn-lg btn-primary mt-4 d-block mx-auto w-50"
		href="https://docs.google.com/forms/d/e/1FAIpQLSfEukFLvxJvAOq7UqLXDBiMVTsljGST9EDPUllONK7Z_JtK6w/viewform?usp=send_form"
		target="_blank">
		{{ aboutData.btnTxt }}
	</a>
</template>
