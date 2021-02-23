<template>
<section>

   <div class="notice-wrap">
      <!-- <img :src="tabs[0].imgUrl" alt=""> -->
      <img :src="imgUrl" alt="">

      <!-- <kv-notice noticeType="type1"></kv-notice> -->
      <div class="notice" :class="noticeType">
         <dl>
            <dt>이벤트 기간 :</dt>
            <dd>
               <slot name="during" />
            </dd>
            <dt>당첨자 발표 :</dt>
            <dd>
               <slot name="duedate" />
            </dd>
            <dt>이벤트 경품 :</dt>
            <dd>
               <slot name="gift" />
            </dd>
         </dl>
      </div>
   </div>
</section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
   Prop
} from 'vue-property-decorator'
import Component from 'vue-class-component';

@Component
export default class KeyVisual extends Vue {
   @Prop({
      default: ''
   }) imgUrl ? : string

   @Prop({
      default: 'notice'
   }) noticeType ? : string

}
</script>

<style lang="scss">
.notice-wrap {
   position: relative;

   .notice {
      position: absolute;
      top: 72%;
      left: 22%;

      &.type1 dt {
         color: #e57507;
      }

      &.type2 dt {
         color: #ff5f50;
      }
   }

   dl {
      display: flex;
      flex-wrap: wrap;

      dt {
         width: 100px;
      }

      dd {
         width: calc(100% - 100px);
      }
   }
}
</style>
