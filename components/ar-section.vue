<template>
	<section>
		<img :src="backgroundImg">
		<slot />
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import {Prop} from 'vue-property-decorator'
import Component from 'vue-class-component';

	@Component
	export default class ArButton extends Vue {
		@Prop() backgroundImg?: string;

	}
</script>

<style lang="scss" scoped>
	section {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
	}
</style>
