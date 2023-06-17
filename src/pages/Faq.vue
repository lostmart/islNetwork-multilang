<script setup>
import AccordeonComp from '../components/AccordeonComp.vue'
</script>
<template>
	<div class="container">
		<h2 class="text-center">FAQ</h2>
		<AccordeonComp
			title="What is Inglés Sin Límites? / ¿Qué es Inglés Sin Límites?"
			id="headingOne"
			collapsNo="collapseOne"
			show="true" />
		<AccordeonComp
			title="What is the Godparents Project? / ¿Qué es el Proyecto de
								Padrinos y Madrinas?"
			id="headingTwo"
			collapsNo="collapseTwo" />
		<AccordeonComp
			title="How is ISL implemented? / ¿Cómo se implementa ISL?"
			id="headingThree"
			collapsNo="collapseThree" />
		<AccordeonComp
			title="How is ISL fully implemented in the classroom? ¿Cómo se implementa ISL en el aula al 100%?"
			id="headingFour"
			collapsNo="collapseFour" />
		<AccordeonComp
			title="What does a Godparent do? / ¿Qué hace un Godparent?"
			id="headingFive"
			collapsNo="collapseFive" />
		<AccordeonComp
			title="How much time does being a Godparent involve *? / ¿Cuánto tiempo
								le dedica un Godparent a la tarea*?"
			id="headingSix"
			collapsNo="collapseSix" />
		<AccordeonComp
			title="Where can ISL materials be found? / ¿Dónde se encuentran los
								materiales de ISL?"
			id="headingSeven"
			collapsNo="collapseSeven" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'ISL network FAQ',
			}
		},
	}
</script>
