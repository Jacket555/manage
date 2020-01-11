<template>
  
    <el-container>
      <el-header>
        <img src="http://118.24.25.7:5000/img/logo.6f4321c1.png">
        <div>
          <span>{{$route.params.username }}</span>
          <el-button type="info" round>退出登录</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu  default-active="1"
                    class="el-menu-vertical-demo">
          <el-submenu index="1" >
              <el-menu-item slot="title" @click="souye"><i class="el-icon-menu"></i><span>首页</span></el-menu-item>
          </el-submenu>
          <el-submenu index="2">
              <template slot="title"><i class="el-icon-magic-stick"></i>商品</template>
                <el-menu-item index="2-1" @click="type"><i class="el-icon-sugar"></i>品类管理</el-menu-item>
                <el-menu-item index="2-2" @click="goods"><i class="el-icon-dessert"></i>商品管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
              <template slot="title"><i class="el-icon-s-custom"></i>用户</template>
                <el-menu-item index="3-1" @click="manageUser"><i class="el-icon-grape"></i>用户管理</el-menu-item>
                <el-menu-item index="3-2" @click="manegePower"><i class="el-icon-ice-tea"></i>权限管理</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
              <template slot="title"><i class="el-icon-setting"></i>订单</template>
                <el-menu-item index="4-1" @click="order"><i class="el-icon-ice-cream-round"></i>订单管理</el-menu-item>
          </el-submenu>
          </el-menu>
        </el-aside> 
        
        <el-container>
          <el-main>

            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>

        </el-container>
        
      </el-container>
    </el-container>
    
</template>

<script>
export default {
  methods:{
    souye(){
      // var user=this.$route.params.username
      this.$router.push({path:`/about/${this.$route.params.username}/home`})
      console.log(111)
    },
    type(){
      this.$router.push({path:`/about/${this.$route.params.username}/type`})
    },
    manageUser(){
       this.$router.push({path:`/about/${this.$route.params.username}/usermanage`})
    },
    manegePower(){
      this.$router.push({path:`/about/${this.$route.params.username}/powermanage`})
    },
    goods(){
      this.$router.push({path:`/about/${this.$route.params.username}/goodsmanage`})
    },
    order(){
      this.$router.push({path:`/about/${this.$route.params.username}/order`})
    }
  }
}
</script>>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .el-header,.el-footer {
    background-color: rgba(0, 0, 0, 0.705);
    color: white;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
    box-shadow: 0 2px 1px  black;
    display: flex;
    justify-content: space-between;
  }
  .el-footer{
    background-color:#E9EEF3;
    color: #333
  }
  .el-header img{
    height: 100%;
  }
  .el-header div>span{
      margin-right: 20px;
  }
  .el-aside {
    color: #333;
    text-align: left;
    line-height: 200px;
    height: 660px;
    width: 225px;
    background-color: #fff;
    box-shadow: 2px 0 1px -3px black;
  } 
  .el-submenu__title>li.el-menu-item{
    padding-left: 0px !important;
    padding-right: 0px !important;
    min-width: 180px !important; 
  }
  .el-submenu{
    background-color: #fff;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 20px;
    height: 500px;
    /* overflow: hidden; */
     /* overflow-y: scroll; */
  }
  .el-main>div{
    box-shadow: 0 0 1px 1px #0000002e;
  }
</style>
