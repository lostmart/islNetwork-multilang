<script setup>
	import FaqOneSp from '../components/faq-comps/FaqOneSp.vue'
	import FaqOneEng from '../components/faq-comps/FaqOneEng.vue'

	import FaqTwoSp from '../components/faq-comps/FaqTwoSp.vue'
	import FaqTwoEng from '../components/faq-comps/FaqTwoEng.vue'

	import FaqThreeSp from '../components/faq-comps/FaqThreeSp.vue'
	import FaqThreeEng from '../components/faq-comps/FaqThreeEng.vue'

	import FaqFourSp from '../components/faq-comps/FaqFourSp.vue'
	import FaqFourEng from '../components/faq-comps/FaqFourEng.vue'

	import FaqFiveSp from '../components/faq-comps/FaqFourSp.vue'
	import FaqFiveEng from '../components/faq-comps/FaqFourEng.vue'

	import FaqSixSp from '../components/faq-comps/FaqSixSp.vue'
import FaqSixEng from '../components/faq-comps/FaqSixEng.vue'
    
	import FaqSevenSp from '../components/faq-comps/FaqSevenSp.vue'
	import FaqSevenEng from '../components/faq-comps/FaqSevenEng.vue'
</script>

<template>
	<div class="accordion" id="FAQaccordion">
		<div class="accordion-item">
			<h2 class="accordion-header" :id="id">
				<button
					class="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					:data-bs-target="`#${collapsNo}`"
					aria-expanded="true"
					:aria-controls="collapsNo">
					{{ title }}
				</button>
			</h2>
			<div
				:id="collapsNo"
				class="accordion-collapse collapse"
				:class="{ show: show }"
				:aria-labelledby="id"
				data-bs-parent="#FAQaccordion">
				<div class="accordion-body">
					<ul class="nav nav-tabs">
						<li class="nav-item">
							<button
								@click="language = 'spanish'"
								class="nav-link"
								:class="{ active: language === 'spanish' }"
								aria-current="page">
								ES
							</button>
						</li>
						<li class="nav-item">
							<button
								@click="language = 'english'"
								:class="{ active: language === 'english' }"
								class="nav-link"
								aria-current="page">
								EN
							</button>
						</li>
					</ul>
					<FaqOneSp v-if="language === 'spanish' && id === 'headingOne'" />
					<FaqOneEng v-if="language === 'english' && id === 'headingOne'" />
					<FaqTwoSp v-if="language === 'spanish' && id === 'headingTwo'" />
					<FaqTwoEng v-if="language === 'english' && id === 'headingTwo'" />
					<FaqThreeSp v-if="language === 'spanish' && id === 'headingThree'" />
					<FaqThreeEng v-if="language === 'english' && id === 'headingThree'" />
					<FaqFourSp v-if="language === 'spanish' && id === 'headingFour'" />
					<FaqFourEng v-if="language === 'english' && id === 'headingFour'" />
					<FaqFiveSp v-if="language === 'spanish' && id === 'headingFive'" />
					<FaqFiveEng v-if="language === 'english' && id === 'headingFive'" />
					<FaqSixSp v-if="language === 'spanish' && id === 'headingSix'" />
					<FaqSixEng v-if="language === 'english' && id === 'headingSix'" />
					<FaqSevenSp v-if="language === 'spanish' && id === 'headingSeven'" />
					<FaqSevenEng v-if="language === 'english' && id === 'headingSeven'" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'id', 'collapsNo', 'show'],
		data() {
			return {
				language: 'spanish',
			}
		},
	}
</script>

<style scoped>
	.accordion-button {
		color: #ff5722 !important;
		caret-color: #ff5722 !important;
		font-weight: bold;
	}
</style>
