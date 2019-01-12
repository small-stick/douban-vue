<template>
  <div class="aa">
<p>{{titleleft}}</p>
<p>{{titleright}}</p>
<div class="daddiv">
<movieb :sondata="daddata"></movieb>
</div>
</div>
</template>
<script>
import Movieb from"./movieb.vue"
  export default {
props:["daddata","titleleft","titleright"],
    components:{
      Movieb
    }
  
  }



</script>
<style scoped>
.aa>p:nth-child(1){
  height: 30px;
  float: left;
  margin-left: 10px;
}
  .aa>p:nth-child(2){
    height: 30px;
    float:right;
    margin-right: 10px;
  }
  .daddiv{
    width: 500px;
    overflow: auto;
  }
</style>
