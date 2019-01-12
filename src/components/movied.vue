<template>
    <div>
        <p>分类浏览</p>
        <ul class="two">
            <li>经典</li>  
            <li>豆瓣高分</li>  
            <li>喜剧</li>  
            <li>悬疑</li>  
            <li>科幻</li>  
            <li>文艺</li>  
            <li>动画</li>  
            <li>欧美</li>  
            <li>日本</li>  
        </ul>
<ul class="three">
    <li>冷门佳片</li>  
            <li>动作</li>  
            <li>爱情</li>  
            <li>恐怖</li>  
            <li>治愈</li>  
            <li>成长</li>  
            <li>华宇</li>  
            <li>韩国</li>  
</ul>
<div class="clear"></div> 
    </div>
</template>
export default{

}
<style scoped>


.three{
    width: 50%;
     display: inline-block;
    width: 50%;
    float: right;
    
}
.two{
     display: inline-block;
    width: 50%;
    margin-top: 10px;
    float: left;
      /* border:1px solid gainsboro; */
}
ul>li{
    display: inline-block;
    width: 50%;
    
    line-height: 30px;
    border:1px solid gainsboro;
    /* margin-left: 20px; */
    padding-left: 20px;
    list-style-type: none;
    color: green;
}
.clear{
    clear:both;
}
</style>
