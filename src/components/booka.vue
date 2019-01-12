<template>
    <div class="aa">
   <p>{{titleleft}}</p>
 <p>{{titleright}}</p>
</div>
</template>
<script>

export default{
props:["titleleft","titleright"]

}
</script>


<style scoped>
.aa{
  width:100%;

}
.aa>p:nth-child(1){
  float: left;
}
.aa>p:nth-child(2){
  float: left;
}
</style>

