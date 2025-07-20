<template>

	<section class="d-flex align-items-center pb-4">
		<h3 class="my-2">News Feed</h3>
		<a href="https://www.gub.uy/presidencia/comunicacion/noticias/alumno-escuela-rural-florida-obtuvo-primer-lugar-concurso-internacional"
			target="_blank" rel="noopener noreferrer">
			<article class="position-relative">
				<h4 class="position-absolute start-0 bottom-0">Alumno de escuela rural de Florida obtuvo primer lugar en
					concurso internacional</h4>

				<img src="https://medios.presidencia.gub.uy/tav_portal/2025/noticias/AN_823/fgr_05.jpg" alt="news feed"
					class="img-fluid">
			</article>
		</a>
	</section>
</template>
<script>
export default {
	name: 'NewsFeed',

}
</script>



<style scoped>
section {
	flex-direction: column;
}

a {
	text-decoration: none;
	color: white;
	text-shadow: 1px 1px black;
}

img {
	transition: all 250ms ease-in-out;
}

a:hover img {
	transform: scale(1.1);
	z-index: 0;
	position: relative;
}

article {
	overflow: hidden;
}

h4 {
	font-size: 20px;
	padding: 0.5em;
	max-width: 90%;
	position: relative;
	z-index: 2;
}

article::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #0D6EFD;
	background: linear-gradient(1deg, rgba(13, 103, 238, 0.596) 0%, rgba(255, 255, 255, 0.18) 47%);
	z-index: 1;
}

@media screen and (min-width: 992px) {
	section {
		flex-direction: row;
		width: 100%;
		gap: 1em;
	}

	h3 {
		min-width: 120px;
	}

	section a {
		width: 350px;
	}
}
</style>
