<template>

	<input
		:type="type"
		:name="name"
		:id="id"
		:placeholder="placeholder"
		:readonly="disabled"
		:value="value"
		:style="{'width' : width}">

</template>

<script lang="ts">
	import Vue from 'vue';
	import {Prop} from 'vue-property-decorator'
	import Component from 'vue-class-component';

	@Component
	export default class DefaultInput extends Vue {

	@Prop ({default: 'text'}) type?:    string
	@Prop ({default: ''}) name?:    	string
	@Prop ({default: ''}) id?:	     	string
	@Prop ({default: ''}) placeholder?: string
	@Prop ({default: ''}) value?:    	string
	@Prop ({default: false}) disabled!: boolean
	@Prop({default: '250px'}) 	width?: string
	

	}

</script>

<style lang="scss" scoped>
input {
	width: 100%;
	height: 60px;
	background-color: #f3f3f3;
}

.input-type {
	&.border {
		border-radius: 30px;
	}
}
</style>
