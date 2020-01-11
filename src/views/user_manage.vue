<template>
    <div class="bigbox">
        <div class="btnbox">
            <el-button type="primary" @click="adduser">添加用户</el-button>
            <el-dialog title="创建用户" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="用户名" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" :label-width="formLabelWidth">
                        <el-input v-model="form.psd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" :label-width="formLabelWidth">
                        <el-input v-model="form.phone" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model="form.mail" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="角色" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择用户权限" style="float:left">
                        <template v-for="po in power">
                            <el-option :label="po.name" :value="po.id" :key="po.keys"></el-option>
                        </template> 
                    </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="handleadd">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <template>
            <el-table
                :data="tableData"
                stripe
                border
                style="width: 100%">

                <el-table-column
                prop="username"
                label="用户名"
                width="180">
                </el-table-column>

                <el-table-column
                prop="mail"
                label="邮箱"
                width="180">
                </el-table-column>

                <el-table-column
                prop="phone"
                label="电话">
                </el-table-column>

                <el-table-column
                prop="createtime"
                label="注册时间">
                </el-table-column>

                <el-table-column
                prop="poweruser"
                label="权限角色">
                </el-table-column>

                <el-table-column
                prop="handle"
                label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-dialog title="修改用户" :visible.sync="updialogFormVisible">
                        <el-form :model="upform">
                            <el-form-item label="用户名" :label-width="formLabelWidth">
                                <el-input v-model="upform.name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号" :label-width="formLabelWidth">
                                <el-input v-model="upform.phone" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱" :label-width="formLabelWidth">
                                <el-input v-model="upform.mail" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="角色" :label-width="formLabelWidth">
                            <el-select v-model="upform.region" placeholder="请选择用户权限">
                                <template v-for="po in power">
                                    <el-option :label="po.name" :value="po.id" :key="po.keys"></el-option>
                                </template> 
                            </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="handleEdit2">确 定</el-button>
                        </div>
                    </el-dialog>
                </template>
                </el-table-column>
            </el-table>
        </template>
        <div class="block">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="typetotal"
                    @current-change="updataPageNum"
                    :current-page="pagestate.pageNum"
                >
                </el-pagination>
            </div>
    </div>
</template>

<script>
import {getUser,addUser,updataUser,delUser} from '../api/common'
export default {
    data(){
        return{
            tableData:[
                // {username:'wo',mail:'www.ss.com',phone:'1828837891',createtime:'88149491',poweruser:'siis'}
            ],
            typetotal:10,
            dialogFormVisible:false,
            updialogFormVisible:false,
            pagestate:{
                pageNum:1,
                pageSize:5,
            },
            form: {
                name: '',
                psd:'',
                phone:'',
                mail:'',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            upform: {
                name: '',
                psd:'',
                phone:'',
                mail:'',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            power:[
                // {id:'',name:''},
            ],
            formLabelWidth: '120px'
        }
    },
    methods:{
        updataPageNum(e){
            var obj={}
            this.pagestate.pageNum=e;
            getUser(this.pagestate).then((res)=>{
                this.tableData=[];
                res.data.data.list.forEach((val)=>{
                    obj={}
                    obj.id=val._id;
                    obj.username=val.username;
                    obj.phone=val.phone;
                    obj.email=val.email;
                    obj.createtime=this.gettime(val.create_time)
                    res.data.data.roles.forEach((value)=>{
                        if(value._id==val.role_id){
                            obj.poweruser=value.name
                        }
                    })
                    // this.typetotal=Math.ceil(res.data.data.total/this.pagestate.pageSize)*10
                    this.tableData.push(obj);
                })
            })
        },
        gettime(num){
            var a=new Date(num);
            var hour=0;
            if(a.getHours()>12){
                hour=a.getHours()-12
                return a.getFullYear()+'/'+(a.getMonth()+1)+'/'+a.getDate()+" 下午 "+hour+':'+a.getMinutes()+':'+a.getSeconds()
            }else{
                hour=a.getHours()
                return a.getFullYear()+'/'+(a.getMonth()+1)+'/'+a.getDate()+" 上午 "+a.getHours()+':'+a.getMinutes()+':'+a.getSeconds()
            }
            // console.log(a.getFullYear()+'/'+(a.getMonth()+1)+'/'+a.getDate()+" 上午 "+hour+':'+a.getMinutes()+':'+a.getSeconds(),a)
        },
        adduser(){
            this.dialogFormVisible=true;
            
        },
        handleadd(){
            this.dialogFormVisible=false;
            addUser({username:this.form.name,password:this.form.psd,phone:this.form.phone,email:this.form.mail,role_id:this.form.region}).then((res)=>{
                console.log(res)             
            })
            console.log(this.form)
        },
        handleEdit(a,e){
            console.log(a,e)
            this.updialogFormVisible=true;
            this.upform.name=e.username
            this.upform.phone=e.phone
            this.upform.mail=e.email
            this.power.forEach((val)=>{
                if(val.name==e.poweruser){
                    this.upform.region= val.id
                }
            })  
            this.upform.id=e.id     
        },
        handleEdit2(){
            updataUser({_id:this.upform.id,username:this.upform.name,phone:this.upform.phone,email:this.upform.mail,role_id:this.upform.region}).then((res)=>{
                console.log(res)
                this.tableData.forEach((val)=>{
                    if(val.id==res.data.data._id){
                        val.username=res.data.data.username;
                        val.phone=res.data.data.phone;
                        val.email=res.data.data.email;
                        this.power.forEach((v)=>{
                            if(v.id==res.data.data.role_id){
                                val.poweruser=v.name;
                            }
                        })
                    }
                })
            })
            this.updialogFormVisible=false;
        },
        handleDelete(a,e){
            console.log(a,e)
            delUser({userId:e.id}).then((res)=>{
                console.log(res)
                this.tableData=this.tableData.filter((v)=>{
                    return v.id!=e.id
                })
            })
        }
    },
    mounted(){
        var obj={}
        getUser(this.pagestate).then((res)=>{
            console.log(res);
            this.power=[];
            res.data.data.list.forEach((val)=>{
                obj={}
                obj.id=val._id;
                obj.username=val.username;
                obj.phone=val.phone;
                obj.email=val.email;
                obj.createtime=this.gettime(val.create_time)
                res.data.data.roles.forEach((value)=>{
                    if(value._id==val.role_id){
                        obj.poweruser=value.name
                    }
                })
                this.typetotal=Math.ceil(res.data.data.total/this.pagestate.pageSize)*10
                this.tableData.push(obj);
            })
            res.data.data.roles.forEach((va)=>{
                    this.power.push({id:va._id,name:va.name,keys:new Date()+Math.random()*100})
            })
            // console.log(this.power)
        })
    }
}
</script>>

<style>
 .bigbox{
        background-color: #fff;
        padding: 20px;
    }
.btnbox{
    overflow: hidden;
    margin: 0 0 20px 0;
    padding-bottom: 10px;
    width: 100%;
    box-shadow: 0 2px 1px -2px ;
}
.btnbox>button{
    float: left;
}
</style>