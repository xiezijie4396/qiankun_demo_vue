<template>
  <div class="child-app">
    <el-menu :router="true" default-active="/" class="child-menu">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="about">About</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<style scoped>
.child-app {
  width: 400px;
  display: flex;
  border: 1px solid black;
  margin-top: 20px;
  padding: 10px;
}
.child-menu {
  margin-right: 20px;
}
</style>
