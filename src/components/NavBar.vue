<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

import ButtonGroup from './ButtonGroup.vue'

/*  locales  */
import engTxt from '../locale/en.json'
import spanishTxt from '../locale/sp.json'

const store = useStore()

const NavBar = ref({ home: '', about: '' })

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
		NavBar.value.home = spanishTxt.nav.home
		NavBar.value.about = spanishTxt.nav.about
	} else if (localStorage.getItem('lang') === 'en') {
		NavBar.value.home = engTxt.nav.home
		NavBar.value.about = engTxt.nav.about
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
				<img src="../assets/images/favicon-32x32.png" alt="padrinos sin limites" />
			</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<router-link class="nav-link text-white" aria-current="page" to="/">{{
						NavBar.home }}
					</router-link>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/about">{{ NavBar.about }}</router-link>
					</li>
				</ul>
				<ButtonGroup />
			</div>
		</div>
	</nav>
</template>
