<template>
<div>
   <slot name="imgUrl" />
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
</template>

<script lang="ts">
import Vue from 'vue';
import {
   Prop
} from 'vue-property-decorator'
import Component from 'vue-class-component';

@Component
export default class KvNotice extends Vue {
   @Prop({
      default: 'notice'
   }) noticeType ? : string

}
</script>

<style lang="scss">
// .notice {
//    &.type1 dt {
//       color: #e57507;
//    }

//    &.type2 dt {
//       color: #ff5f50;
//    }
// }

// dl {
//    display: flex;
// }
</style>
