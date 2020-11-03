<template>
  <div class="home">
    <h2>子应用 Home</h2>
    <h2>主应用的state.num：{{$store.state.global.num}}</h2>
    <button @click="addNum(10)">主应用增加20</button>
  </div>
</template>

<script>
export default {
  methods: {
    addNum() {
      this.$store.commit('global/addNum', 20)
    }
  }
}
</script>