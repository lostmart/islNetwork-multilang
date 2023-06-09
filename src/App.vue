<script setup>
 import NavBar from './components/NavBar.vue';

</script>
<template>
	<NavBar />
	<!-- <nav class="navbar navbar-expand-lg navbar-light bg-primary">
		<div class="container">
			<router-link to="/" class="navbar-brand text-white">
				<img
					src="./assets/images/favicon-32x32.png"
					alt="padrinos sin limites" />
			</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link text-white" aria-current="page" to="/"
							>INICIO</router-link
						>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/about"
							>QUIÉNES SOMOS</router-link
						>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/team"
							>EQUIPO</router-link
						>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/faq"
							>PREGUNTAS</router-link
						>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/voices"
							>VOCES</router-link
						>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/materials"
							>MATERIALES</router-link
						>
					</li>

					<li class="nav-item">
						<a
							class="nav-link text-white"
							href="mailto: ruralgodparents@gmail.com"
							>CONTACTO</a
						>
					</li>
				</ul>
			</div>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</div>
	</nav> -->
	<router-view></router-view>
</template>
