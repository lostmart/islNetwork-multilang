<script setup>
import { ref, onMounted, watch } from "vue"
import { useStore } from "vuex"

/*  locales  */
import engTxt from "../locale/en.json"
import spanishTxt from "../locale/sp.json"

const materials = ref(null)
const btnTxt = ref(null)
const store = useStore()

// Watch for changes in the store state siteLang
watch(
	() => store.state.siteLang,
	() => {
		setPageLang()
	},
)

/**
 * Sets the page language based on the value stored in localStorage.
 * If the language is set to 'sp', => Spanish
 * If the language is set to 'en', => English
 * @returns {void}
 */
const setPageLang = () => {
	if (localStorage.getItem("lang") === "sp") {
		materials.value = spanishTxt.materials
	} else if (localStorage.getItem("lang") === "en") {
		materials.value = engTxt.materials
	}
}

onMounted(() => {
	setPageLang()
})
</script>

<template>
	<section v-if="materials" class="container">
		<h2 class="text-center mt-4">{{ materials.title }}</h2>
		<div v-if="show" class="p-4">
			<div class="list-group mx-auto">
				<a target="_blank" v-for="book in books" :key="book.link" :href="book.link"
					class="list-group-item list-group-item-action text-center" aria-current="true">
					{{ book.title }}
				</a>
			</div>
		</div>
		<div v-else>
			<h3 class="text-center mt-4">{{ materials.subTitle }}</h3>
			<form ref="formPass" class="mx-auto bg-primary p-4" @submit.prevent="handleSubmit">
				<label for="inputPassword" class="form-label mb-3">Password</label>
				<div class="input-group mb-3">
					<input :type="inputType" class="form-control" id="inputPassword" v-model="input" />
					<button class="btn btn-light" type="button" id="button-addon2" @click="togglePassVis">
						<i v-if="!passShw" class="far fa-eye-slash"></i>
						<i v-else class="far fa-eye"></i>
					</button>
				</div>
				<button type="submit" class="btn btn-secondary d-block">Submit</button>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	name: "materials",
	data() {
		return {
			books: [], // remove hardcoded array
			cogin: "Gdp2019",
			show: false,
			input: "",
			passShw: false,
		}
	},
	methods: {

		handleSubmit() {
			this.input === this.cogin ? (this.show = true) : this.handleError()
		},
		handleError() {
			this.$refs.formPass.classList.add("shake")
			setTimeout(() => {
				this.$refs.formPass.classList.remove("shake")
				this.input = ""
			}, 450)
		},
		togglePassVis() {
			this.passShw = !this.passShw
		},
	},
	async mounted() {
		try {
			const res = await fetch("https://script.google.com/macros/s/AKfycbyTRvYx5xDFborUn7Rjz55LdCkSaj6R1vE1-rKm7CU5D75cSu0HWQStqiZFcUhUnCsKJQ/exec")
			this.books = await res.json()
		} catch (err) {
			console.error("Failed to fetch materials:", err)
		}
	},
	computed: {
		inputType: function () {
			if (!this.passShw) return "password"
			else return "text"
		},
	},
}
</script>

<style scoped>
form {
	color: white;
	max-width: 500px;
}

.list-group {
	max-width: 500px;
}

.list-group-item {
	color: #418bd0;
}

.bg-primary {
	background-color: #418bd0 !important;
	border-radius: 0.375rem;
}

.btn-secondary {
	background-color: #f09f06 !important;
}

a {
	text-decoration: none;
}

.shake {
	animation: shake 0.17s infinite;
}

@keyframes shake {
	0% {
		transform: translateX(0);
	}

	25% {
		transform: translateX(-15px);
	}

	50% {
		transform: translateX(0);
	}

	75% {
		transform: translateX(10px);
	}

	100% {
		transform: translateX(0);
	}
}
</style>
