<template>
 <div >
<Headerbar></Headerbar>
<Moviea :daddata="shuju" titleleft="最受关注图书|虚拟类" titleright="更多"></Moviea>
        <Moviea :daddata="shujua" titleleft="最受关注图书|非虚拟类" titleright="更多"></Moviea>
           <Moviea :daddata="shujub" titleleft="豆瓣纸书" titleright="更多"></Moviea>
<Moviea titleleft="发现好书" titleright="更多"></Moviea>
  
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
  import Moviea from "../components/moviea"
   import Moviec from "../components/moviec.vue"
   import Movied from "../components/movied.vue"
   import Footer from "../components/footer.vue"
export default{
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
         this.moviedata=val.data.books;
          console.log(val.data.books);
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