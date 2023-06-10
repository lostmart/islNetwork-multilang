<script setup>
	import { useStore } from 'vuex'

	const store = useStore()

	const changeLanguage = (val) => {
		console.log(val)
		store.commit('setSiteLang', val)
	}
</script>
<template>
	<div class="btn-group" role="group" aria-label="chose your language">
		<button
			@click="changeLanguage('sp')"
			type="button"
			class="btn btn-outline-primary text-white">
			Español
		</button>
		<button
			@click="changeLanguage('en')"
			type="button"
			class="btn btn-outline-primary text-white">
			Inglés
		</button>
	</div>
</template>
