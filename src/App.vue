<template>
  <div>
    <h1>
      你好，vue

      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </h1>
  </div>
</template>

<script>
import axios from './utils/request'
export default {
  created() {
    console.log(axios.defaults)
  }
}
</script>

<style></style>
