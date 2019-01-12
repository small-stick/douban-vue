<template>
    <div>
<div class="aa">
    <img src="../assets/images/ic_share_status.png">
    <p><strong> 豆瓣</strong>写了日志</p>
    <br>
    <span>2017-03-01 19:31:41</span>
    <div class="bb">
<strong>豆瓣app 4.12.0主要更新</strong>
<br>
<p>可以写读书笔记了，同时编辑，随时随地，摘动怦然心动的段落，写下阅读时的随感，来写笔记吧！你....</p>
    </div>
    <div class="cc">
       <div class="ee"> <img src="../assets/images/ic_thumb_profile.png" ><span>4</span>
        <img src="../assets/images/ic_album_photo_comment_normal.png"><span>0</span>
               <img src="../assets/images/ic_change_round.png"><span>1</span>
        </div>
    </div>
</div>
</div>
</template>
export default{

}
<style scoped>
.aa>img{
width: 30px;
height: 30px;
margin-left: 20px;
margin-top: 30px;
}
.aa>p{
    display: inline-block;
    margin-left: 20px;
}
.aa>span{
    margin-left: 70px;
 
}
.aa{
    border-bottom: 1px solid gray;
    padding-bottom: 50px;
}
.bb{
    width: 80%;
    height: 120px;
    margin: 0px auto;
    border: 1px solid gainsboro;
    margin-top: 20px;
padding-top: 20px;
}
.bb>strong{
    
padding-left: 20px;
}
.bb>p{
    text-align: center;
    line-height: 30px;
    color:gray;
}
.cc{
display: flex;
}
.ee>img{
    width: 30px;
    height: 30px;
    margin-left: 50px;
    margin-top: 20px;
}
.ee>span{
    color:gray;
  
}
</style>
