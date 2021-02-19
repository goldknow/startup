<template>

<section class="kv" :class="bgColor">

   <kv-title>
      <template v-slot:ttl>한우 먹고! 한우 인증 GO~</template>
      <template v-slot:txt>
         <p>한우 인증점 방문하여 한우를 먹고</p> 
         <p>한우 인증점 로고가 나온 인증샷을 찍어 업로드 해주세요.</p> 
         <p>추첨을 통해 경품을 드립니다.</p> 
      </template>
   </kv-title>

</section>

</template>

<script lang="ts">
import Vue from 'vue';
import {Prop} from 'vue-property-decorator'
import Component from 'vue-class-component';

@Component
export default class KeyVisual extends Vue {

   @Prop({default: ''}) bgColor ? : string
}
</script>

<style lang="scss">
.kv {
   &.type1 {
      background-color: #ffdb6f;
   }

   &.type2 {
      background-color: #ffcece;
   }
}
</style>
