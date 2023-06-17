<script setup>
	import { ref, onMounted, watch } from 'vue'
	import { useStore } from 'vuex'

	import TeamMember from '../components/TeamMember.vue'

	/*  locales  */
	import engTxt from '../locale/en.json'
	import spanishTxt from '../locale/sp.json'

	const store = useStore()
	const teamData = ref({ title: '', teamMembers: [] })

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
			teamData.value = spanishTxt.team
		} else if (localStorage.getItem('lang') === 'en') {
			teamData.value = engTxt.team
		}
	}

	onMounted(() => {
		setPageLang()
	})
</script>

<template>
	<div class="row container">
		<h2 class="card-title text-center mt-4">{{ teamData.title }}</h2>
		<div
			class="col-md-6 col-lg-4"
			v-for="member in teamData.teamMembers"
			:key="member.userName">
			<TeamMember
				class="m-4"
				:title="member.userName"
				:description="member.description"
				:imgUrl="member.imgUrl"
				:linkedIn="member.linkedIn"
				:rol="member.rol" />
		</div>
	</div>
</template>
