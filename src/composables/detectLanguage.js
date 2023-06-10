/**
 * Detects the language based on the user's browser locale and sets it in the local storage if not already set.
 * if it's English or Spanish
 * it saves the langueg on localStorage
 * if it's not any of the two (French, for ex) it will
 * default to Spanish
 * @returns {void}
 */
const detectLang = () => {
	const browserLocale = window.navigator.language.split("-")[0]

	if (localStorage.getItem("lang")) {
		localStorage.setItem("lang", localStorage.getItem("lang"))
	} else if (browserLocale === "en" && !localStorage.getItem("lang")) {
		localStorage.setItem("lang", "en")
		return
	} else if (browserLocale === "es" && !localStorage.getItem("lang")) {
		localStorage.setItem("lang", "sp")
		return
	}

	// console.log(browserLocale)
}

export default detectLang
