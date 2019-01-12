<template>

  <div>
    <Headerbar></Headerbar>
    <Moviea :daddata="shuju" titleleft="影院热映" titleright="更多"></Moviea>
        <Moviea :daddata="shujua" titleleft="免费在线观影" titleright="更多"></Moviea>
           <Moviea :daddata="shujub" titleleft="新片速递" titleright="更多"></Moviea>
<Moviea titleleft="发现好电影" titleright="更多"></Moviea>
          
   <div class="aa">
      <Moviec></Moviec>
     </div>  
    <div>
      <Movied></Movied>
    </div>
   <div><Footer></Footer></div>  
    </div>
</template>
<script>
  import Headerbar from "../components/headerbar.vue"
  import Moviea from "../components/moviea.vue"
   import Moviec from "../components/moviec.vue"
   import Movied from "../components/movied.vue"
   import Footer from"../components/footer.vue"
  export default {
    components:{
      Headerbar,
      Moviea,
      Moviec,
      Movied,
      Footer
    },
    data() {
      return {
        moviedata: []
      }
    },
    computed:{
      shuju(){
        return this.moviedata.slice(0,8);
     },  shujua(){
        return this.moviedata.slice(8,17);
     },  shujub(){
        return this.moviedata.slice(17,26);
     }
    
    },
      beforeCreate() {
        this.axios.get('/api/someApi').then((val) => {
         this.moviedata=val.data.movie
          // console.log(val.data.movie);
        })
    }
  }
</script>
<style scoped>
.aa{
  width: 100%;
  overflow: auto;
}

</style>
