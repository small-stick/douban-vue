<template>
  <div>
    <Headerbar></Headerbar>
    <Home text1="影院热映" text2="欧美新碟榜"></Home>
    <Home text1="注册帐号" text2="登录豆瓣"></Home>
    <Hometwo v-for="v  in shuju" :title="v.title" :content="v.address" :imgurl="v.image_hlarge"></Hometwo>
  </div>

</template>
<script>
  import Headerbar from "../components/headerbar.vue"
  import Home from "../components/home.vue"
  import Hometwo from "../components/hometwo.vue"

  export default {
    components: {
      Headerbar,
      Home,
      Hometwo
    },
    data() {
      return {
        arr: []
      }
    },
    computed:{
      shuju(){
        return this.arr.slice(0,9)
      }
    },
    beforeCreate() {
      this.axios.get('/api/someApi').then((val) => {
        this.arr=val.data.shouye;
        console.log(this.arr);
      })
    }
  }
</script>
<style scoped>


</style>
