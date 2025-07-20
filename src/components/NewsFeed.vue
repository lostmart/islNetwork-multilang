<template>


	<a href="https://www.gub.uy/presidencia/comunicacion/noticias/alumno-escuela-rural-florida-obtuvo-primer-lugar-concurso-internacional"
		target="_blank" rel="noopener noreferrer" class="news bg-white">
		<article class="d-flex flex-column">

			<img src="https://medios.presidencia.gub.uy/tav_portal/2025/noticias/AN_823/fgr_05.jpg" alt="news feed"
				class="img-fluid">
			<h4>Alumno de escuela rural de Florida</h4>
			<span class="text-muted text-end">23 de Julio, 2025</span>
		</article>
	</a>

</template>
<script>
export default {
	name: 'NewsFeed',

}
</script>



<style scoped>
.news {
	max-width: 314px;
	padding: 1em;
	display: block;
}



a {
	text-decoration: none;
	color: rgb(31, 31, 31);
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
	font-size: 18px;
	padding: 0.5em 0;
	max-width: 90%;
	position: relative;
	z-index: 2;
	margin-bottom: 0;
}

/*
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
	*/

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
