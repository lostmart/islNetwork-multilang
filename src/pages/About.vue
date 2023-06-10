<script setup>

import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

/*  locales  */
import engTxt from '../locale/en.json'
import spanishTxt from '../locale/sp.json'

const text = ref("")
const title = ref('')

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
		text.value = spanishTxt.about.text
		title.value = spanishTxt.about.title
	} else if (localStorage.getItem('lang') === 'en') {
		text.value = engTxt.about.text
		title.value = spanishTxt.about.title

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
				<h2 class="card-title mt-4">{{ "peliculas" }}</h2>
				<p class="card-text" v-html="text"></p>
			</div>
		</div>
	</div>
</template>
