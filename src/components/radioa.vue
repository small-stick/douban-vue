<template>
    <div>
<div class="aa">
    <img src="../assets/images/bg_admire_success.png">
</div>

<p>打开App 浏览更多</p>
<button class="bb">极速下载</button>
  <button class="cc">打开</button>
   
  <div class="one">
  <img src="../assets/images/ic_avatar_default.png"><span>请先登录</span>
  <img src="../assets/images/ic_posted_group_topics.png" class="img01">
  <img src="../assets/images/ic_photo_camera.png" class="img02" >
  </div>

    </div>
       
</template>
<script>
// import Groupa from "./groupa.vue"
export default {
    components:{
        // Groupa
    }
}
</script>
<style scoped>

.aa>img{
    width: 80%;
    height: 100px;
     margin-left:50px;
    position:relative;

}
p{
    position: absolute;
    top:190px;
    left:30px;
    color: green;
}
.bb{
background-color: green;
color:white;
position: absolute;
left:230px;
top:190px;
}
.cc{
    position:absolute;
    top:190px;
    left:300px;
}
span{
    color: gray;
}
.one{

    margin-top: 10px;
    margin-left: 30px;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 20px;
 
}
.img01{
width: 40px;
height: 40px;
margin-left: 70px;
padding-top: 20px;
}
.img02{
width: 30px;
height: 30px;

}
</style>

