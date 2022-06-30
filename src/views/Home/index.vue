<template>
  <div>
    <van-cell title="推荐歌单" />

    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
import { getRecommends } from '@/api/home'
export default {
  created() {
    this.getRecommendList()
  },
  methods: {
    async getRecommendList() {
      const res = await getRecommends(6)
      console.log(res.data.result)
    }
  }
}
</script>

<style scoped lang="less">
.van-cell {
  background-color: #eee;
  margin: 5px 0 10px;
  font-size: 16px;
}
</style>
