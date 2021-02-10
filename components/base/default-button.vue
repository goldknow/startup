<template>
	<button 
		:class="btnType" 
		:style="{'width' : width}">
        <slot />
    </button>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {Prop} from 'vue-property-decorator'
	import Component from 'vue-class-component';

	@Component
	export default class defaultButton extends Vue {

		@Prop({default: '250px'}) 	width?: string
		@Prop({default: 'button-type'}) 	btnType?: string
	}

</script>

<style lang="scss" scoped>
button {
	width: 100%;
	height: 60px;
	background-color: #f3f3f3;
}

.btn-type1 {
	border: 1px solid #ddd;
}
</style>
