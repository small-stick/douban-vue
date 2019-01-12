
<template>
  <div >
    <Headerbar></Headerbar>
    <Groupa></Groupa>  
<Groupb :fudata="adata" titletop="租房找室友" titlebottom="更多相关小组"></Groupb>  
<Groupb :fudata="bdata" titletop="来聊5块钱" titlebottom="来聊五块钱"></Groupb>  
<Groupb :fudata="cdata" titletop="买买买" titlebottom="更多相关小组"></Groupb>  
<Footer></Footer>
  </div>

</template>
<script>
  import Headerbar from "../components/headerbar.vue"
  import Groupa from "../components/groupa.vue"
 import Groupb from "../components/groupb.vue"
  import Footer from "../components/footer.vue"
  export default {
  data() {
      return {
        adata:[],
        bdata:[],
        cdata:[]
      }
    },
 
    components:{
      Headerbar,
      Groupa,
     Groupb,
     Footer
    },
  beforeCreate() {
        this.axios.get('/api/someApi').then((val) => {
         this.adata=val.data.xiaozua;
          // console.log(val.data.xiaozua);
   this.bdata=val.data.xiaozub;
      this.cdata=val.data.xiaozuc;
        })
    } 
  }
</script>
<style scoped>


</style>
