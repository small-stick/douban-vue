<template>
<div class="con">
    <div class="aa">
<img :src="sondata.images.small">
       <p>{{sondata.title}}</p>
    </div>
   <p class="dd">{{sondata.group_topic.time}}:{{sondata.group_topic.title}}</p>

   </div>
</template>
<script>
export default {
    props:["sondata"]
}
</script>
<style scoped>
.con{
    border-bottom: 1px solid gainsboro;
    padding-bottom: 20px;
     padding-top: 20px;
}
.aa{
    display: flex;
    
}
.aa>p{
    margin-left: 20px;
}
.dd{
    font-size: 12px;
    color:grey;
    
}
</style>
