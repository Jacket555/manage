<template>
    <div class="bigbox">
        <div class="nav">
            <span @click="typeinit">一级商品分类列表</span>
            <span class="el-icon-right" v-show="bool">{{typename}}</span>
            <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisiblechild=true" style="float:right">添加分类</el-button>
            <el-dialog title="收货地址" :visible.sync="dialogFormVisiblechild">
            <el-form :model="formchild">
                <el-form-item label="分类名称" :label-width="formLabelWidthchild">
                <el-input v-model="formchild.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类列表" :label-width="formLabelWidthchild">
                <el-select v-model="formchild.region" placeholder="请选择活动区域" style="float:left">
                    <el-option label="当前父类id" :value="currentParentId"></el-option>
                    <el-option label="第一分类父类id" :value="0"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisiblechild = false">取 消</el-button>
                <el-button type="primary" @click="handleEditchild(formchild)">确 定</el-button>
            </div>
            </el-dialog>
        </div>

            <el-table
                :data="tableData"
                stripe
                border
                style="width: 100%">
                <el-table-column
                prop="type"
                label="商品分类"
                width="900">
                </el-table-column>

                <!-- 按钮 -->
                <el-table-column label="操作选项">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleupdate(scope.$index, scope.row)">修改分类</el-button>
                    <el-button
                    size="mini"
                    @click="handleSee(scope.$index, scope.row,scope)" v-show="childType">查看子类</el-button>
                    <el-dialog title="修改分类" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="请输入新分类名" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="handleEdit">确 定</el-button>
                    </div>
                    </el-dialog>
                </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="typetotal"
                    @current-change="updataPageNum"
                    :current-page="type.pageNum"
                   >
                </el-pagination>
            </div>
    </div>
</template>>

<script>
import {getType,updataType,addtype} from '../api/common'
export default {
    data(){
        return{
            tableData: [
                // {type: '2016-05-02',}, 
            ],
            dialogFormVisible: false,
            dialogFormVisiblechild:false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formchild:{
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '' 
            },
            formLabelWidth: '120px',
            formLabelWidthchild: '120px',
            typetotal:10,
            currentIndex:'',//当前商品的index，第几个，从0开始
            currentParentId:'0',
            childType:true, //查看子类按钮的显示与隐藏
            type:{
                pageNum:1,
                pageSize:5,
                parentId:0,
            },
            typename:'',
            bool:false,
        }
    },
    methods:{
        handleEdit(){
            this.tableData.forEach((value,ind)=>{
                if(ind == this.currentIndex){
                    console.log(value,ind)
                    value.type=this.form.name;
                    updataType({"categoryId":value.id,"categoryName":this.form.name}).then((res)=>{
                    console.log(res)
            })
                }
            })
            this.dialogFormVisible = false;
        },
        handleEditchild(a){
            this.dialogFormVisiblechild = false;
            console.log(a)
            addtype({parentId:this.formchild.region,categoryName:this.formchild.name}).then((res)=>{
                console.log(res)
                this.tableData.push({type:this.formchild.name,id:res.data.data._id})
            })
        },
        updataPageNum(e){
            this.type.pageNum=e;
            this.tableData=[];
            getType(this.type).then((res)=>{
            // console.log(res)
            // //渲染初始页数
            // this.typetotal=Math.ceil(res.data.data.total/this.type.pageSize)*10
                res.data.data.list.forEach((value)=>{
                    this.tableData.push({type:value.name,id:value._id})
                })
                this.$store.commit('typedata',res.data.data)
            })
        },  
        handleSee(e,a,b){
            console.log(e,a,b);
            getType({'pageNum':1,'pageSize':5,'parentId':a.id}).then((res)=>{
                this.childType=false;
                this.tableData=[];
                this.currentParentId=a.id;
                res.data.data.list.forEach((value)=>{
                    this.tableData.push({type:value.name,id:value._id})
                })  
                this.$store.commit('typedata',res.data.data)
                this.typetotal=Math.ceil(res.data.data.total/this.type.pageSize)*10
            })
            this.typename=a.type;
            this.bool=true;
        },
        handleupdate(index){
            this.dialogFormVisible = true;
            this.currentIndex=index;
        },
        typeinit(){
            this.tableData=[];
            this.type.pageNum=1;
            this.childType=true;
            this.currentParentId='0';
            this.typename='';
            this.bool=false;
            getType({ pageNum:1,pageSize:5,parentId:0,}).then((res)=>{
                res.data.data.list.forEach((value)=>{
                    this.tableData.push({type:value.name,id:value._id})
                })           
                this.$store.commit('typedata',res.data.data)
                this.typetotal=Math.ceil(res.data.data.total/this.type.pageSize)*10
            })
        }
    },
    mounted(){
        getType(this.type).then((res)=>{
            console.log(res)
            //渲染初始页数
            this.typetotal=Math.ceil(res.data.data.total/this.type.pageSize)*10
            res.data.data.list.forEach((value)=>{
                this.tableData.push({type:value.name,id:value._id})
            })           
            this.$store.commit('typedata',res.data.data)
            // console.log(this.$store.state)
        })
    }
}
</script>>

<style>
    .bigbox{
        background-color: #fff;
        padding: 20px;
    }
    .nav{
        box-shadow: 0 2px 1px -2px ;
        overflow: hidden;
        margin-bottom: 5px;
    }
    .nav>span:nth-of-type(1){
        float: left;
        vertical-align: middle;
        line-height: 40px;
        color: #409eff;
    }
    .nav>span:nth-of-type(2){
        float: left;
        line-height: 40px
    }
    .nav>span:nth-of-type(1):hover{
        cursor: pointer;
    }
    .nav>button{
        float: right;
        vertical-align: middle;
        padding: 5px ;
        margin: 8px 0 0;
    }
</style>