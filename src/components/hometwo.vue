<template>
  <div class="hometwo">
   <div class="leftdiv">
     <h6>{{title}}</h6>
     <p class="small">{{content}}</p>
   </div>
    <div class="rightdiv">
      <img :src="imgurl">
    </div>
  </div>
</template>
<script>
  export default {
props:["title","content","imgurl"]
  }
</script>
<style scoped>
  .hometwo{
    width: 100%;

    /*border-bottom: 1px solid gainsboro;*/
  }
  .rightdiv>img{
    width: 100px;
    height: 50px;
  }
.small{
  font-size: 12px;
}
.rightdiv{
  width: 50px;
  height: 50px;
  margin-top: 20px;
}
.leftdiv{
  width: 50%;
  margin-top: 20px;
  float: left;
  padding-left: 10px;
}
.rightdiv{
  width: 40%;
  margin-left: 20px;
  /*background-color: green;*/
  float: left;
}
</style>
