<template>
  <div class="pege-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" alt height="39" />
      <div class="px-2 flex-1 pt-3 fs-lg">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2 text-white">攻略站</span>
      </div>
      <router-link to="/" tag="div" class="text-white mt-3">更多英雄 &gt;</router-link>
    </div>
    <div>
        
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
      return {
          model:null
      }
  },
  methods: {
     async fetch(){
        await this.$http.get(`heroes/${this.id}`).then(res => {
            this.model = res.data
        })
      }
  },
  created() {
      this.fetch()
  },
};
</script>