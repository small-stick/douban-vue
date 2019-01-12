<template>
    <div class="aa">
      <div class="bb"><h3>{{titletop}}</h3></div>
       <Groupc v-for="v in fudata" :sondata="v"></Groupc>
        <!-- <Groupc></Groupc>
         <Groupc></Groupc> -->
      <div class="cc"><p>{{titlebottom}}</p></div>
     
    </div>
</template>
<script>
import Groupc from"./groupc.vue"
export default {
   props:["fudata","titletop","titlebottom"],
components:{
   Groupc
}
}
</script>
<style scoped>
.aa{
    width: 80%;
    height: 500px;
    margin: 0 auto;
/* border: 1px solid gainsboro; */
position: relative;
margin-top: 20px;
}
.bb{
    width: 100%;
    height: 50px;
}
.cc{
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: -30px;
    left:100px;
   color: green;
  
}
</style>
