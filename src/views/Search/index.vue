<template>
  <div>
    <!-- 搜索框 -->
    <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" />

    <!-- 热门搜索和搜索结果的互斥效果 -->
    <div v-if="value.trim() === ''" class="hot-search">
      <van-cell title="热门搜索" />

      <van-button
        type="default"
        round
        v-for="(item, index) in hots"
        :key="index"
        class="btn"
        @click="value = item.first"
        >{{ item.first }}</van-button
      >
    </div>
    <div v-else class="search-result">搜索结果</div>
  </div>
</template>

<script>
import { getHots } from '@/api'
export default {
  data() {
    return {
      value: '',
      hots: []
    }
  },
  created() {
    this.getHots()
  },
  methods: {
    async getHots() {
      const { data } = await getHots()
      // console.log(data)
      this.hots = data.result.hots
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 5px 10px;
}
</style>
