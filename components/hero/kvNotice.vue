<template>

	<div>

	</div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Prop} from 'vue-property-decorator'
import Component from 'vue-class-component';

@Component
export default class KvTitle extends Vue {
   @Prop({default: ''}) fontColor ? : string
}
</script>

<style lang="scss">

</style>
