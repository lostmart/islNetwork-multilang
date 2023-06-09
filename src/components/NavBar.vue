<script setup>
	import ButtonGroup from './ButtonGroup.vue'
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-primary">
		<div class="container">
			<router-link to="/" class="navbar-brand text-white">
				<img
					src="../assets/images/favicon-32x32.png"
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
					<router-link class="nav-link text-white" aria-current="page" to="/"
						>INICIO</router-link
					>
					<li class="nav-item">
						<router-link class="nav-link text-white" to="/about"
							>QUIÉNES SOMOS</router-link
						>
					</li>
				</ul>
				<ButtonGroup />
			</div>
		</div>
	</nav>
</template>
