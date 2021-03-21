<template>
	<!-- 루트 엘리먼트 -->
	<div>
		<evt-wrap></evt-wrap>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		layout:'evtMain'
	})

	export default class Index extends Vue {

	}

</script>

<style lang="scss" scoped>
	button {
		position: absolute !important;
		bottom: 40px;
		left: 330px;
	}

</style>
