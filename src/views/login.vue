<template>
    <el-container class="bigbox">
        <div class="form-box">
            <h1>登录</h1>
            <el-form :rules="rules" :model="form" status-icon  ref="loginForm">
                <el-form-item  prop="username">
                    <el-input 
                        placeholder="请输入账号" 
                        prefix-icon="el-icon-user" 
                        v-model="form.username">
                    </el-input>
                    </el-form-item>
                <el-form-item prop="password">
                    <el-input 
                        placeholder="请输入密码" 
                        show-password 
                        prefix-icon="el-icon-lock"
                        v-model="form.password">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button 
                        type="primary"
                        @click="handle('loginForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-container>
</template>

<script>
import {getLogin} from '../api/common'
    export default {
        data() {
            return {
                form:{
                    username:'admin',
                    password:'admin',
                },
                 rules:{
                    username:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'change' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'change' }
                    ]
                }
            }
        },
        methods:{
            handle(loginForm){
               this.$refs[loginForm].validate((valid)=>{
                   if(valid){
                       getLogin(this.form).then((res)=>{
                           if(!res.data.status){
                                this.$store.commit("userdata",res.data.data);
                                console.log(res.data.data,this.$store.state.user)

                                this.$router.push("./About/"+res.data.data.username+'/home')

                           }
                       })
                   }else{
                       this.$message.error('错了哦，这是一条错误消息');
                       return false
                   }
               })
                
            }
        }
    } 
</script>

<style>
    .bigbox{
        height: 100%;
    }
    .form-box{
        width: 400px;
        margin: 0 auto;
        padding: 20px 40px;
        box-sizing: border-box;
    }
      .form-box button{
          width: 100%
      }
</style>