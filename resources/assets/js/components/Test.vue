<template>
	<div class="container">
		<h1>Test Route</h1>
		<div id="inner-div">
			<h2>Inner Div</h2>
			<router-link to="/">Go Home</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		mounted() {
			console.log(document.querySelector('#inner-div'));
		}
	}
</script>

<style lang="scss">
	
</style>
