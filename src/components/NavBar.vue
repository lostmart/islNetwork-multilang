<script setup>
	import { ref, onMounted, watch } from 'vue'
	import { useStore } from 'vuex'

	import ButtonGroup from './ButtonGroup.vue'

	/*  locales  */
	import engTxt from '../locale/en.json'
	import spanishTxt from '../locale/sp.json'

	const store = useStore()

	const NavBarData = ref({
		home: '',
		about: '',
		team: '',
		faq: '',
		voices: '',
		materials: '',
		contact: '',
	})

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
			NavBarData.value = spanishTxt.nav
		} else if (localStorage.getItem('lang') === 'en') {
			NavBarData.value = engTxt.nav
		}
	}

	onMounted(() => {
		setPageLang()
	})
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-primary">
		<div class="container">
			<router-link to="/" class="navbar-brand text-white">
				<img
					src="../assets/images/godparents-logo.png"
					alt="padrinos sin limites" />
			</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link text-white" aria-current="page" to="/"
							>{{ NavBarData.home }}
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/about">{{
							NavBarData.about
						}}</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/team">{{
							NavBarData.team
						}}</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/faq">{{
							NavBarData.faq
						}}</router-link>
					</li>
					<li v-if="store.state.siteLang === 'sp'" class="nav-item">
						<router-link class="nav-link text-white" to="/voices">{{
							NavBarData.voices
						}}</router-link>
					</li>
					<li v-else class="nav-item">
						<router-link class="nav-link text-white" to="/voices-en">{{
							NavBarData.voices
						}}</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/materials">{{
							NavBarData.materials
						}}</router-link>
					</li>
					<li class="nav-item">
						<a
							class="nav-link text-white"
							href="mailto: ruralgodparents@gmail.com"
							>{{ NavBarData.contact }}</a
						>
					</li>
				</ul>
				<ButtonGroup />
			</div>
		</div>
	</nav>
</template>

<style scoped>
	img {
		width: 42px;
	}
</style>
