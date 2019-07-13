<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header pt-2 pb-2">
      <div class="d-flex mb-3">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="fs-xl flex-1 px-2">{{title}}</div>
        <i class="iconfont icon-menu1"></i>
      </div>
      <div class="text-center" v-show="title=='英雄列表'">
        <img src="../assets/images/newHero.jpg" alt width="98%" />
      </div>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  },
  
  
};
</script>

<style lang="less">
.card-header {
  border-bottom: 1px solid #d4d9de;
}
</style>
