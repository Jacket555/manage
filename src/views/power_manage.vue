<template>
    <div class="bigbox">
        <div class="btnbox">
            <el-button type="primary" @click="open">创建角色</el-button>
        </div>
        <template>
            <el-table
                :data="tableData"
                stripe
                border
                style="width: 100%">

                <el-table-column
                prop="username"
                label="角色名称"
                width="180">
                </el-table-column>

                <el-table-column
                prop="createtime"
                label="创建时间"
                width="180">
                </el-table-column>

                <el-table-column
                prop="authtime"
                label="授权时间">
                </el-table-column>

                <el-table-column
                prop="authname"
                label="授权人">
                </el-table-column>

                <el-table-column
                prop="handle"
                label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="setRole(scope.row)">设置权限</el-button>
                    <el-dialog title="设置权限" :visible.sync="dialogVisible">
                        <div style="text-align:center">
                            <el-tag>当前设置角色:{{setName}}</el-tag>
                        </div>
                        <div slot="footer" class="dialog-footer">
                            <!-- <el-tree :data="CheckRoleData" show-checkbox node-key="id"
                                    :default-checked-keys="defaultChecked" :props="defaultProps" ref="tree">
                            </el-tree> -->
                            <el-tree  show-checkbox  :data="CheckRoleData" node-key="id"
                                     ref="tree" :props="defaultProps">
                            </el-tree>
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="submitpower(scope.row)">确 定</el-button>
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
import {addRole,getRole,reqUpdateRole} from '../api/common'
import menuList from '../../role_menu' 
export default {
    data(){
        return{
            pagestate:{
                pageNum:1,
                pageSize:5,
            },
            tableData:[
                // {username:'admin',createtime:2131,authtime:'ses',authname:2133}
            ],
            typetotal:10,
            updatepower:[
                // {_id  menus auth_time  auth_name}
            ],
            dialogVisible:false,
            setName:'',
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            roles:{},
        }
    },
    methods:{
        handleEdit(a,b){
            console.log(a,b)
            this.dialogFormVisible=true,
            console.log(this.updatepower)
        },
        updataPageNum(e){
            this.pagestate.pageNum=e;
            var obj={};
            getRole(this.pagestate).then((res)=>{
                this.tableData=[]
                res.data.data.list.forEach((v)=>{
                    obj={};
                    obj.username=v.name;
                    obj.createtime=this.gettime(v.create_time)
                    obj.authtime=this.gettime(v.auth_time)
                    obj.authname=v.auth_name
                    this.tableData.push(obj)
                })
            })
        },
         gettime(num){
            if(!num){
                return ''
            }
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
        open() {
            this.$prompt('请输入角色名', '添加角色', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                }).then(({ value }) => {
                    console.log(value)
                    addRole({roleName:value}).then((res)=>{
                        console.log(res)
                        var d=res.data.data
                        this.tableData.push({username:d.name,createtime:d.create_time})
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });       
            });
        },
        //发送更改权限请求
        submitpower(e){
            console.log(e);
            this.roles.menus=this.$refs.tree.getCheckedKeys()
            reqUpdateRole(this.roles).then((res)=>{
                console.log(res)
            })
            this.dialogVisible = false;
        },
        //递归初始tree
        initCheckRoleData(menuList) {
            return menuList.map((item) => {
                if (item.children) {
                    let children = this.initCheckRoleData(item.children);
                    return {
                        id: item.key,
                        label: item.title,
                        children
                    }
                } else {
                    return {
                        id: item.key,
                        label: item.title
                    }
                }
            })
        },
        setRole(obj) {
                // this.defaultChecked = obj.menus;
                this.updatepower.forEach((value)=>{
                    if(value.name==obj.username){
                        this.defaultChecked = value.menus;
                    }
                    if(obj.username==value.name){
                        this.roles._id=value._id
                        this.roles.menus=value.menus
                        this.roles.auth_time=value.auth_time
                        this.roles.auth_name=value.auth_name
                    }
                })
                this.setName=obj.authname;
                this.$refs.tree.setCheckedKeys(this.defaultChecked);
                // this.role._id = obj._id;
                this.dialogVisible = true;
                console.log(obj) 
        },
    },
    mounted(){
        var obj={}
        // {username:'admin',createtime:2131,authtime:'ses',authname:2133}
        getRole(this.pagestate).then((res)=>{
            console.log(res) 
            // var d=res.data.data.list;
            res.data.data.list.forEach((v)=>{
                obj={};
                obj.username=v.name;
                obj.createtime=this.gettime(v.create_time)
                obj.authtime=this.gettime(v.auth_time)
                obj.authname=v.auth_name
                this.tableData.push(obj)

                // this.updatepower._id=v._id
                // this.updatepower.menus=v.menus
                // this.updatepower.auth_time=v.auth_time
                // this.updatepower.auth_name=v.auth_name
                this.updatepower.push({name:v.name,_id:v._id,menus:v.menus,auth_time:v.auth_time,auth_name:v.auth_name})
           })
           this.typetotal=Math.ceil(res.data.data.total/this.pagestate.pageSize)*10
            // {_id  menus auth_time  auth_name}
        })
        this.CheckRoleData = this.initCheckRoleData(menuList);
    }
}
</script>

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