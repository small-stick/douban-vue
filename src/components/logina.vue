<template>
    <div>
        <div class="con">
         <span>取消</span>
        <h3>登录豆瓣</h3>
        </div>
      <div class="aa">
          <input type="text" placeholder="邮箱">
          <br/>
            <input type="text" placeholder="Token">
            <br/>
           <button>登录</button>
           <p class="cc">使用其它方法登录&找回密码</p>
           <p class="dd">注册豆瓣账号 下载豆瓣App</p>
      </div>
    </div>
</template>
<script>
export default {
    

}
</script>
<style scoped>

.con{
    display: flex;
    margin-top: 20px;
    margin-left: 30px;
    border-bottom: 1px solid gray;
    padding-bottom: 30px;
}
span{
    color:green;
}
h3{
    text-align: center;
    margin-left: 100px;
    font-style:"微软雅黑"；
    
}
.aa{
    margin-top: 30px;
    margin-left: 60px;
}
input{
    width: 250px;
    height: 50px;
    text-align: center;
 border: 1px solid grey;
}
.dd{
    margin-left: 25px;
    color:green;
    margin-top: 10px;
}
button{
    width: 250px;
    height: 50px;
   margin-top: 20px;
    background-color: green;
    color:wheat;
     text-align: center;
}
.cc{
  margin-left: 25px;
    margin-top: 20px;
    color: grey;
}
</style>

