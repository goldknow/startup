<template>
	<button class="ar-button">
		<slot />
	</button>
</template>

<script>
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ArButton extends Vue {


	}

</script>

<style lang="scss" scoped>
	button {
		background-color: red;
	}

</style>
