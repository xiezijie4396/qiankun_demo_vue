<template>
  <div>
    <el-menu :router="true" mode="horizontal" default-active="/">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/vue">Vue</el-menu-item>
    </el-menu>
    <h1>主应用的state.num：{{$store.state.num}}</h1>
    <button @click="addNum(10)">主应用增加10</button>
    <router-view></router-view>
    <div id="vue"></div>
  </div>
</template>

<script>
export default {
  methods: {
    addNum(n) {
      this.$store.commit('addNum', 10)
    }
  }
}
</script>
