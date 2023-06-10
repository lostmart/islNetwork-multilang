<script setup>
import { ref, onMounted, watch } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

/*  locales  */
import engTxt from '../locale/en.json'
import spanishTxt from '../locale/sp.json'

const store = useStore()

const BtnsLang = ref([])

// Watch for changes in the store state siteLang
watch(
	() => store.state.siteLang,
	() => {
		setPageLang()
	}
)

const setPageLang = () => {
	if (localStorage.getItem('lang') === 'sp') {
		BtnsLang.value.sp = spanishTxt.locale.sp
		BtnsLang.value.en = spanishTxt.locale.en
	} else if (localStorage.getItem('lang') === 'en') {
		BtnsLang.value.sp = engTxt.locale.sp
		BtnsLang.value.en = engTxt.locale.en
	}
}

// a computed ref
const spanishSite = computed(() => {
	if (store.state.siteLang === "sp") {
		return true
	} else {
		return false
	}
})

const changeLanguage = (val) => {
	console.log(val)
	store.commit('setSiteLang', val)
}
</script>
<template>
	<div class="btn-group" role="group" aria-label="chose your language">
		<button @click="changeLanguage('sp')" type="button" class="btn btn-outline-primary text-white"
			:class="{ active: spanishSite }">
			{{ BtnsLang.sp }}
		</button>
		<button @click="changeLanguage('en')" type="button" class="btn btn-outline-primary text-white"
			:class="{ active: !spanishSite }">
			{{ BtnsLang.en }}
		</button>
	</div>
</template>
