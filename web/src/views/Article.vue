<template>
  <div class="article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="back mr-2" ></div>
      <strong class="flex-1 text-ellipsis mr-5" style="color:#4394e4">{{model.title}}</strong>
      <div class="text-grey fs-xs">{{model.createdAt | date}}</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div>
        <i class="iconfont icon-menu"></i>
        <strong class="fs-lg ml-1" style="color:#4394e4">相关资讯</strong>
      </div>
      <div class="pt-2 fs-lg">
        <router-link class="py-2 mt-2" tag="div" :to="`/articles/${item._id}`" v-for="(item,i) in model.related" :key="i">
          {{item.title}}
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters:{
    date(val){
      return dayjs(val).format('YYYY-MM-DD')
    }
    
  },
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  methods: {
    async fetch() {
      await this.$http.get(`articles/${this.id}`).then(res => {
        this.model = res.data;
      });
    }
  },
  watch: {
    id:'fetch'
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="less">
.back {
  width: 0.6667rem;
  background: url("../assets/images/backBg.png") no-repeat;
  background-size: 100%;
}
.article {
  .body {
    img{
      max-width: 100%;
      height: auto;
    }
    iframe{
      width: 100%;
      height: auto;
    }
    .ql-align-center{
      text-align: center;
    }
  }
}
</style>
