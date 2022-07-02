<template>
  <div>
    <!-- 推荐歌单 -->
    <van-cell title="推荐歌单" class="cell-model" />

    <!-- 推荐歌单列表 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="item in recommends"
        :key="item.id"
        :icon="item.picUrl"
        :text="item.name"
      />
    </van-grid>

    <!-- 最新音乐 -->
    <van-cell title="最新音乐" class="cell-model" />

    <!-- 最喜音乐列表 -->
    <!-- <van-cell
      :title="item.name"
      :label="item.song.artists[0].name + '-----' + item.name"
      center
      v-for="item in getSongs"
      :key="item.id"
      class="new-son"
    >
      <van-icon name="play-circle-o" />
    </van-cell> -->
    <SongItem
      v-for="item in getSongs"
      :key="item.id"
      :id="item.id"
      :title="item.name"
      :label="item.song.artists[0].name + '----' + item.name"
    ></SongItem>
  </div>
</template>

<script>
import { getRecommends, getNewSongs } from '@/api/home'
import SongItem from '@/components/SongItem.vue'
export default {
  components: {
    SongItem
  },
  data() {
    return {
      recommends: [],
      getSongs: []
    }
  },
  created() {
    this.getRecommendList()
    this.getNewSongs()
  },
  methods: {
    async getRecommendList() {
      const res = await getRecommends(6)
      // console.log(res.data.result)
      this.recommends = res.data.result
    },
    async getNewSongs() {
      const res = await getNewSongs()
      // console.log(res.data.result)
      this.getSongs = res.data.result
    }
  }
}
</script>

<style scoped lang="less">
.cell-model {
  background-color: #eee;
  margin: 5px 0 10px;
  font-size: 16px;
}

/deep/.van-icon__image {
  width: 121px;
  height: 100px;
}

/deep/.van-grid-item__content {
  padding: 0;
}

/deep/.van-grid-item__text {
  height: 36px;
  width: 120px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.new-son {
  .van-cell__title {
    flex: 4;
  }
}
</style>
