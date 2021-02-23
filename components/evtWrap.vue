<template>
<div id="event-wrap">

   <!-- tab list -->
   <ul class="tabs">
      <li v-for="tab in tabs" :key="tab.id" :class="{tab, 'active': tab.active}" @click="tabAction(tab)">
         <a href="#none">{{tab.name}}</a>
      </li>
   </ul>

   <!-- tab cont1 -->
   <div v-show="tabs[0].active" :style="{'backgroundColor':tabs[0].bgColor}">

      <kv-title>
         <template #ttl>한우 먹고!<br>한우 인증 GO~!</template>
         <template #txt>
            <p>한우 인증점 방문하여 한우를 먹고</p>
            <p>한우 인증점 로고가 나온 인증샷을 찍어 업로드 해주세요.</p>
            <p>추첨을 통해 경품을 드립니다.</p>
         </template>
      </kv-title>

      <key-visual imgUrl="/_nuxt/assets/imgs/evt1_txt_bg.png" noticeType="type1">
         <template #during>1</template>
         <template #duedate>2</template>
         <template #gift>3</template>
      </key-visual>

      <button v-on:click="show = !show">
         Toggle
      </button>
      <transition name="fade">
         <p v-if="show">hello</p>
      </transition>

   </div>

   <!-- tab cont2 -->
   <div v-show="tabs[1].active" :style="{'backgroundColor':tabs[1].bgColor}">

      <kv-title>
         <template #ttl>내 마음 속의 최애<br>한우 인증점 Pick!</template>
         <template #txt>
            <p>한우 인증점 컨텐츠를 확인하고</p>
            <p>마음에 드는 최애 한우인증점에 좋아요 댓글을 남겨주세요.</p>
            <p>추첨을 통해 경품을 드립니다.</p>
         </template>
      </kv-title>

      <key-visual imgUrl="/_nuxt/assets/imgs/evt2_txt_bg.png" noticeType="type2">
         <template #during>1</template>
         <template #duedate>2</template>
         <template #gift>3</template>
      </key-visual>

   </div>

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
   Prop
} from 'vue-property-decorator';
import Component from 'vue-class-component';

@Component
export default class EvtWrap extends Vue {

   @Prop({
      default: ''
   }) bgColor ? : string

   show: boolean = false

   tabs: any[] = [{
      id: 1,
      bgColor: '#ffdb6f',
      name: 'tab1',
      active: true,
   }, {
      id: 2,
      bgColor: '#ffd6d6',
      name: 'tab2',
      active: false,

   }, ]

   async tabAction(tab: any) {
      await Promise.all(
            this.tabs.map((item: any, key: number) => {
               item.active = false
            })
         )
         .then(() => {
            tab.active = true;
         });
   }

}
</script>

<style lang="scss">
#event-wrap {
   width: 1024px;
   margin: 0 auto;
}

.tabs {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60px;
   position: relative;
   cursor: pointer;

   .tab {
      display: block;
      max-width: 100%;
      width: 512px;
      height: 100%;
      background: 0 0 no-repeat;
      background-image: url(~assets/imgs/tab.png);

      a {
         display: block;
         width: 100%;
         height: 100%;
      }
   }

   li {

      &:nth-child(1) {
         background-position: 0 0;

         &.active {
            background-position: 0 -60px;
         }
      }

      &:nth-child(2) {
         background-position: 0 -120px;

         &.active {
            background-position: 0 -180px;
         }
      }
   }
}
</style>
