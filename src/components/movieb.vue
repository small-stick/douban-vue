<template>
<div class="com">
    <div class="item" v-for="v in sondata">
      <img :src="v.images.large">
      <p>{{v.title}}</p>
      <el-rate
  v-model="v.rating.average"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
</div>
<div class="clear"></div>
</div>

</template>
<script>
export default {
     data() {
      return {
        // value5: 3.7
      }
    },
    props:["sondata"]

}
</script>
<style scoped>
.com{
    width:2200px;
     /* margin-top: 20px; */
}
.item{
    float: left;
    margin-left: 10px;
   
}
.clear{
    clear: both;
}
.item>img{
   width: 100px;
   height: 150px; 
}
</style>
