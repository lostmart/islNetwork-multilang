import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
	state() {
		return {
			siteLang: null,
		}
	},
	mutations: {
		setSiteLang(state, payload) {
			localStorage.setItem('lang', payload)
			state.siteLang = payload
		},
	},
})

export default store
