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
    <div v-else class="search-result">
      <van-list
        @load="onLoad"
        offset="1"
        v-model="loading"
        :immediate-check="false"
        :finished="isFinished"
        finished-text="没有更多了~"
      >
        <SongItem
          v-for="item in searchs"
          :key="item.id"
          :id="item.id"
          :title="item.name"
          :label="item.ar[0].name + '----' + item.name"
        ></SongItem>
      </van-list>
    </div>
  </div>
</template>

<script>
// load页面触底时触发的事件
import { getHots, songSearch } from '@/api'
import SongItem from '@/components/SongItem'
export default {
  components: {
    SongItem
  },
  data() {
    return {
      value: '',
      hots: [],
      limit: 10,
      searchs: [],
      loading: false,
      page: 1,
      isFinished: false
    }
  },
  created() {
    this.getHots()
  },
  methods: {
    // 获取热搜列表
    async getHots() {
      const { data } = await getHots()
      // console.log(data)
      this.hots = data.result.hots
    },
    // 获取搜索结果
    songSearch() {
      // 判断value里面有没有值，如果有就不让发送请求
      if (this.value.trim() === '') return
      // 重置page(每一次发送请求 page需要重置page)
      this.page = 1
      // 防抖处理
      // 先清空上次的定时器，在开启定时器
      clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        const res = await songSearch(this.value, this.limit)
        this.searchs = res.data.result.songs
      }, 300)
    },
    async onLoad() {
      // 分页功能
      // 1：发送请求
      const res = await songSearch(
        this.value,
        this.limit,
        this.page * this.limit
      )
      // 判断是否有数据
      if (!res.data.result.songs) {
        // 结束加载，显示完成加载
        this.isFinished = true
        return
      }
      // 2：将下一页的数据添加到search
      this.searchs.push(...res.data.result.songs)

      // 3:加一页
      this.page += 1
      // 4:loading 重置false
      this.loading = false
    }
  },
  watch: {
    value() {
      this.songSearch()
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 5px 10px;
}
</style>
