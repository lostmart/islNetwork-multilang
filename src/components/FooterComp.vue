<script setup>


</script>
<template>
	<footer class="footer mt-auto pt-3 bg-light">
		<!-- <img src="../assets/images/ingles-sin-limites-foot.jpg" alt="ingles sin limites logo" /> -->
		<!-- <ul>
			<li>
				<span style="bottom: 24px" class="footer-title">islNetwork &#169; 2024</span>
				<span class="footer-title">ruralgodparents@gmail.com</span>

			</li>
		</ul> -->
		<ul class="social_links">
			<li>
				<a href="mailto:">

					<svg xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
						<path
							d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
					</svg>
					ruralgodparents@gmail.com
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/inglessinlimitesuruguay?igsh=eHlmZzMxbTQ1bG1i" target="_blank">

					<svg xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
						<path
							d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
					</svg>
					@inglessinlimitesuruguay
				</a>
			</li>
			<li>
				<a href="https://www.facebook.com/inglessinlimitesuruguay/" target="_blank">

					<svg xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
						<path
							d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
					</svg>
					Inglés Sin Límites
				</a>

			</li>
		</ul>
		<p class="text-center">Inglés Sin Límites &copy; 2024</p>
	</footer>
</template>

<style scoped>
a,
p {
	text-decoration: none;
	color: white;
}

svg {
	width: 20px;
}

footer {
	background-image: url(/src/assets/images/ingles-sin-limites-foot.jpg);
	background-color: #f8f9fa;
	background-position: top center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	width: 100%;
	min-height: 150px;
	justify-content: center;
	flex-direction: column;
}

.footer-title {
	color: #fff;
	position: absolute;
	bottom: 0;
	left: 0;
	max-width: 100%;
	padding: 0.5rem 1rem;
}

ul,
li {
	list-style-type: none;
}

li {
	margin-bottom: 0.25em;
	width: fit-content;
	background: #524d4d2b;
	padding: 2px 10px;
	border-radius: 3px;
}

img {
	position: relative;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	max-height: 320px;
}

.social_links {
	padding: 1.5rem 1rem;
	margin-top: 3.7em;
	margin-bottom: 0;
}

@media only screen and (min-width: 600px) {
	.social_links {
		margin-top: 5.7em;
	}
}
</style>
