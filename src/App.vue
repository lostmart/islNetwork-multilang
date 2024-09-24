<script setup>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'
import detectLang from './composables/detectLanguage.js'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

/**
 * Set a commit "setSiteLang" to whatever language is stored in the browser's localStorage ("lang")
 * @see detectLang - composable (service fn)
 * @returns {void}
 */
onMounted(() => {
	detectLang()
	store.commit('setSiteLang', localStorage.getItem('lang'))
})
</script>
<template>
	<NavBar />
	<div class="container main-container">
		<div class="card">
			<div class="card-body">
				<router-view></router-view>
			</div>
		</div>
	</div>

	<FooterComp />
</template>

<style scoped>
.main-container {
	margin-top: 58px;
}
</style>