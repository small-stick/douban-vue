<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate() {
    this.$router.push("/shouye");
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
.el-rate__icon{
  font-size:12px;
} 
.el-rate__item{
  font-size: 12px;
}
</style>
