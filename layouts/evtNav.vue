<template>
<nav>
   <ul>
      <!-- key == index -->
      <li v-for="item in items" :key="item.id">
         <!-- a태그에는 {{}} 사용 불가 / v-bind 사용. v-bind 삭제 가능 -->
         <a :href="item.link" target="_blank">{{item.name}}</a>
      </li>
   </ul>
</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class EvtNav extends Vue {

   items: any[] = [{
      id: 1,
      name: '다음',
      link: 'https://www.daum.net/'
   }, {
      id: 2,
      name: '네이버',
      link: 'https://www.naver.com/'
   }, ]
}
</script>

<style lang="scss" scoped>
nav {
   position: fixed;
   top: 50%;
   left: 10px;
   background: #fff;
   z-index: 10;
   border-radius: 7px;
   box-shadow: 2px 2px 8px rgb(0 0 0 / 40%);
   transform: translateY(-50%);

   ul {

      li {
         padding: 10px 20px;

         &:hover {
            color: pink;
         }
      }
   }
}
</style>
