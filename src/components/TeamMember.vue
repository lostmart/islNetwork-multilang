<script setup>
import { defineProps, reactive, computed, ref } from 'vue'

import LinkedInIcon from './LinkedInIcon.vue'
// Props declaration
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: 'Hello, World!',
	},
	imgUrl: {
		type: String,
	},
	linkedIn: {
		type: String,
	},
	rol: {
		type: String,
	},
})

const reactiveProps = reactive(props)

// a computed ref colors
const laberlColor = computed(() => ({

	'legend-coord': props.rol === "coordination",
	'legend-team': props.rol === 'islTeam',
	'legend-ref': props.rol === 'referent'

}))

console.log(props)
</script>

<template>
	<div class="p-3 mx-auto" style="max-width: 320px">
		<img v-if="props.imgUrl" :src="`../assets/images/team-members/${imgUrl}`" :alt="props.title" />

		<img v-else src="../assets/images/team-members/null-member-2.png" :alt="props.title" />

		<div class="text-center py-1 legend" :class="laberlColor">
			<h5 class="me-2 text-uppercase">
				{{ title }}

				<a v-if="reactiveProps.linkedIn" :href="reactiveProps.linkedIn" target="_blank">
					<LinkedInIcon />
				</a>
			</h5>
			<h6 class="px-2">{{ description }}</h6>
		</div>
	</div>
</template>

<style scoped>
h5 {
	text-shadow: 0px 1px 1px #ffffff7d;
	font-size: 1.1em;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #ffffff61;
	min-height: 2em;
	margin-top: 3px;
	width: 100%;
}

h6 {
	font-size: 0.8em;
}

h5,
h6,
p {
	position: inherit;
	z-index: 1;
}

h5 a {
	padding-right: 5px;
}

img {
	display: block;
	margin: auto;
	width: 100%;
	box-shadow: 0 4px 4px #00000017, 1px 7px 27px #0000001a;
	border: 1px solid rgba(255, 255, 255, 0.18);
}

.legend {
	z-index: 1;
	position: relative;
	min-height: 98px;
	min-width: 230px;
	width: 85%;
	margin: -52px auto 0 auto;
	box-shadow: 0 4px 4px #00000017, 1px 7px 27px #0000001a;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.3rem;
}

.legend::before {
	content: '';
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 0;
	background: rgb(252, 252, 252, 0.2);
	background: linear-gradient(181deg,
			rgba(252, 252, 252, 0.1) 0%,
			rgba(255, 255, 255, 1) 100%);
	backdrop-filter: blur(1px);
	-webkit-backdrop-filter: blur(3px);
	border: 1px solid rgba(255, 255, 255, 0.4);
}

.legend::after {
	content: '';
	position: absolute;
	/* background-color: rgba(255, 0, 0, 0.481);  */
	height: 7px;
	width: 100%;
	top: 0;
	left: 0;
}

.legend-coord:after {
	background-color: rgb(48 102 152 / 70%);
}

.legend-team:after {
	background-color: rgb(237 143 21 / 60%);
}

.legend-ref:after {
	background-color: rgb(21 154 73 / 50%);
}
</style>
