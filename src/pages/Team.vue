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
		<div class="col-md-6 col-lg-4" v-for="(member, indx) in teamData.teamMembers" :key="member.userName">
			<TeamMember class="m-4 card-enter" :title="member.userName" :description="member.description"
				:imgUrl="member.imgUrl" :linkedIn="member.linkedIn" :rol="member.rol" :order="indx + 1" />
		</div>
		<div class="legend-titles">
			<span><strong>Legenda: </strong> </span>
			<div class="coord"></div>
			Cordinación |
			<div class="team"></div>
			Equipo ISL |
			<div class="reference"></div>
			Referente
		</div>
	</div>
</template>

<style scoped>
img {
	max-height: 265px;
	object-fit: contain;
}

.card-title {
	animation-name: titleAnim;
	animation-duration: 900ms;
	animation-iteration-count: 1;
	position: relative;
	animation-timing-function: ease-in;
}

.card-enter {
	animation-name: cardEnter;
	animation-duration: 1.4s;
	animation-iteration-count: 1;
	position: relative;
}

@keyframes cardEnter {
	0% {
		top: 100px;
		opacity: 0;
	}

	100% {
		top: 0px;
	}
}

@keyframes titleAnim {
	0% {
		transform: scale(0);
		opacity: 0;
	}

	100% {
		transform: scale(1);
	}
}

.legend-titles {
	display: flex;
	align-items: center;
	gap: 7px;
	flex-wrap: wrap;
}

.legend-titles div {
	height: 20px;
	width: 20px;
}

.coord {
	background-color: rgb(48 102 152 / 70%);
}

.team {
	background-color: rgb(237 143 21 / 60%);
}

.reference {
	background-color: rgb(21 154 73 / 50%);
}
</style>
