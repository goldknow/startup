<template>
	<!-- 루트 엘리먼트 -->
	<div>
		<send-button></send-button>
		<hr>
		<default-input
			placeholder="이름"
			width = "500px"
		></default-input>
		<hr>
		<default-button
			btnType = "btn-type1"
			width = "200px"
		>버튼</default-button>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({

	})

	export default class index extends Vue {

	}

</script>

<style lang="scss" scoped>
	hr {margin: 20px 0;}

</style>
