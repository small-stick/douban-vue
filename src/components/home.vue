<template>
  <div class="homediv">
    <div class="one">
      <p>{{text1}}</p>
    </div>
    <div class="two">
      <p>{{text2}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props:["text1","text2"]
  }
</script>
<style scoped>
  .one{
    width: 48%;
    height: 50px;
    background-color: gainsboro;
    float: left;
    text-align: center;
    /*margin-right: 10px;*/
margin-top: 10px;

  }
  .two{
    width: 48%;
    height: 50px;
    background-color: gainsboro;
    float:right;
    text-align: center;
    margin-top: 10px;
    margin-left: 5px;
  }
</style>
