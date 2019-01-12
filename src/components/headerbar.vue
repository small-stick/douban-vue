<template>
  <div class="header">
    <div class="imgdiv">
      <img src="../assets/images/logo.png">
    </div>
    <div class="lidiv">
      <ul>
        <li>
          <router-link to="/movie" class="blue">电影</router-link>
        </li>
        <li>
          <router-link to="/book" class="yellow">图书</router-link>
        </li>
        <li>
          <router-link to="/radio" class="gb">广播</router-link>
        </li>
        <li>
          <router-link to="/group" class="green">小组</router-link>
        </li>
        <li>
          <router-link to="/login" class="qq">登录</router-link>
        </li>
      </ul>
      <!--<router-view></router-view>-->
    </div>
  </div>


</template>
<script>
  export default {

  }
</script>
<style scoped>
  .header{
    padding-top: 30px;
    padding-left: 30px;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid gainsboro;
  }
.imgdiv{
  width: 20%;
  float: left;
}
.imgdiv img{
  text-align: center;
}
ul>li{
  display: inline-block;

  text-align: center;
}
  .lidiv{
    width: 50%;
     float: left;
    margin: 50px;
  }
  a{
    text-decoration: none;
    /*padding-left: 5px;*/

  }


  .blue{
    color: blue;
  }
  .yellow{
    color: burlywood;
  }
  .gb{
    color: darkkhaki;
  }
  .green{
    color: darkseagreen;
  }
    .qq{
    color: rgb(25, 158, 25);
  }
</style>
