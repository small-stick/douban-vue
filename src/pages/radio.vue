<template>
  <div >
    <Headerbar></Headerbar>
    <Radioa></Radioa>
    <Radiob></Radiob>  
      <Radiob></Radiob> 
        <Radiob></Radiob> 
          <Radiob></Radiob> 
            <Radiob></Radiob> 
             <p>显示更多广播</p>
             <Footer></Footer>
  </div>

</template>
<script>
  import Headerbar from "../components/headerbar.vue"
  import Radioa from "../components/radioa.vue"
  import Radiob from "../components/radiob.vue"
    import Footer from "../components/footer.vue"
  export default {

    components:{
      Headerbar,
       Radioa,
       Radiob,
       Footer
    }
  }
</script>
<style scoped>
p{
  color: green;
text-align: center;
margin-top: 20px;
}

</style>

