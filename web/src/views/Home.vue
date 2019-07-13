<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/banner/1.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/banner/2.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/banner/3.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- swiper end -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-story"></i>
          <div class="py-2">故事站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-shop"></i>
          <div class="py-2">周边商城</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-experience"></i>
          <div class="py-2">体验服</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-newPerson"></i>
          <div class="py-2">新人专区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-glory"></i>
          <div class="py-2">荣耀·传承</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-samePerson"></i>
          <div class="py-2">同人社区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-camp"></i>
          <div class="py-2">王者营地</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-wechat"></i>
          <div class="py-2">公众号</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-news"></i>
          <div class="py-2">版本介绍</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-list-card title="新闻资讯" icon="menu" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex" v-for="(news,i) in category.newsList" :key="i">
              <span class="text-grey">[{{news.categoryName}}]</span>
              <span class="px-2">|</span>
              <span class="text-ellipsis pr-2 flex-1">{{news.title}}</span>
              <span class="text-grey fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card title="英雄列表" icon="card-hero" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem;">
          <router-link :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width:20%" v-for="(hero,i) in category.heroList" :key="i">
              <img :src="hero.avatar" alt="" class="w-100">
              <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-card title="图文攻略" icon="menu"></m-card>


  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters:{
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
        autoplay: true,
        loop: true,
        swiperSlides: [1, 2, 3]
      },
      newsCats:[],
      heroCats:[],
    };
  },methods: {
    async fetchNewsCats(){
      await this.$http.get('/news/list').then(res => {
        this.newsCats = res.data;
      })
    },
    async fetchHeroCats(){
      await this.$http.get('/heroes/list').then(res => {
        this.heroCats = res.data;
      })
    }
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
  },
};
</script>

<style lang="scss">
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    background: #fff;
    border-radius: 2px;
    &.swiper-pagination-bullet-active {
      background: #4b67af;
    }
  }
}
.nav-icons {
  border-bottom: 1px solid #d4d9de;
  border-top: 1px solid #d4d9de;
  .nav-item {
    width: 25%;
    border-left: 1px solid #d4d9de;
    &.nav-item:nth-child(4n + 1) {
      border: none;
    }
  }
}

</style>
