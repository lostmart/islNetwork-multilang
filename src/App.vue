<script setup>
	import NavBar from './components/NavBar.vue'
	import FooterComp from './components/FooterComp.vue'
	import detectLang from './composables/detectLanguage.js'
	import { onMounted } from 'vue'

	onMounted(() => {
		detectLang()
	})
</script>
<template>
	<NavBar />
	<router-view></router-view>
	<FooterComp />
</template>
