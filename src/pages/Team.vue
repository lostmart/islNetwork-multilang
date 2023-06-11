<script setup>
	import { ref, onMounted, watch } from 'vue'
	import { useStore } from 'vuex'

	/*  locales  */
	import engTxt from '../locale/en.json'
	import spanishTxt from '../locale/sp.json'

	const store = useStore()
	const teamData = ref({ title: '', subTitle: '', paragraphs: [] })
</script>

<template>
	<div>
		<h2 class="card-title mt-4">Nuestro equipo</h2>
		<h3 class="card-title text-center">COORDINACIÓN</h3>
		<img
			class="img-laura img-thumbnail"
			src="../assets/images/laura-motta.jpg"
			alt="Laura Motta coordinadora" />
	</div>
</template>
