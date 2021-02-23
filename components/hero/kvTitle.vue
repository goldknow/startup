<template>
   <article>
      <h1>
         <slot name="ttl" />
      </h1>
      <div>
         <slot name="txt" />
      </div>
   </article>
</template>

<script lang="ts">
import Vue from 'vue';
import {
   Prop
} from 'vue-property-decorator'
import Component from 'vue-class-component';

@Component
export default class KvTitle extends Vue {
   @Prop({
      default: ''
   }) fontColor ? : string
}
</script>

<style lang="scss" scoped>
article {
   padding-top: 50px;
   text-align: center;

   h1 {
      font-size: 40px;
   }

   div {
      padding-top: 30px;
      font-size: 18px;
   }
}
</style>
