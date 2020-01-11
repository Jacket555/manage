<template>
    <div class="bigbox">
        <div class="nav">
            <template>
                <el-select v-model="value" placeholder="请选择" class="selbox">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </template>
            <el-input v-model="input" placeholder="请输入内容" class="inpbox"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
            <el-button type="primary" icon="el-icon-plus" @click="addgoods">添加分类</el-button>
        </div>
        <el-table
            :data="tableData"
            stripe
            border
            style="width: 100%">
            <el-table-column
            prop="name"
            label="商品名称"
            width="180">
            </el-table-column>

            <el-table-column
            prop="desc"
            label="商品描述">
            </el-table-column>

            <el-table-column
            prop="price"
            label="商品价格"
            width="180">
            </el-table-column>

            <el-table-column
            prop="state"
            label="商品状态"
            width="180">
            <template slot-scope="scope">
                <el-button size="mini" @click="changeState(scope.$index,scope.row)">{{scope.row.state.btn}}</el-button>
                <span>{{scope.row.state.sp}}</span>
            </template>
            </el-table-column>

            <!-- 按钮 -->
            <el-table-column label="操作选项" width="180">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="showgoods(scope.$index, scope.row)">详情</el-button>
                <el-button
                size="mini"
                @click="updatagoods(scope.$index, scope.row,scope)">修改</el-button>
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
</template>

<script>
import {getGoods,updateStatus,searchGoods} from '../api/common'
export default {
    data() {
      return {
        options: [{
          value: '1',
          label: '按照名称搜索'
        }, {
          value: '2',
          label: '按照描述搜索'
        },{
          value: '0',
          label: '无'
        }],
        value: '0',
        input:'',
        tableData:[
            // {name:'sosoos',descrip:'ssss',price:'213',state:{btn:'下架了',sp:'销售中'},stateus:0,}
        ],
        type:{
            pageNum:1,
            pageSize:5,
        },
        typetotal:10,
        list:[],
      }
    },
    methods:{
        changeState(a,b){
            console.log(a,b,this.list[a]._id)
            updateStatus({productId:this.list[a]._id,status:b.state.sp=='销售中'?0:1}).then((res)=>{
                console.log(res)
                this.tableData.forEach((v,i)=>{
                    if(i==a){
                        if(v.state.sp=='销售中'){
                            v.state={btn:'上架',sp:'已下架'}
                        }else{
                            v.state={btn:'下架',sp:'销售中'}
                        }
                    }
                })
            })
        },
        showgoods(a,b){
            console.log(a,b)
            this.$router.push({path:`/about/${this.$route.params.username}/goodsdesc/${this.list[a]._id}`})
        },
        updatagoods(a,b){
            console.log(a,b)
            this.$router.push({path:`/about/${this.$route.params.username}/updatagoods/${this.list[a]._id}`})
        },
        updataPageNum(e){
            this.type.pageNum=e;
            getGoods(this.type).then((res)=>{
                this.list=[];
                this.list=res.data.data.list
                var obj={}
                var d=res.data.data.list
                this.tableData=[]
                d.forEach((v)=>{
                    obj={}
                    obj={name:v.name,desc:v.desc,price:v.price}
                    if(v.status==1){
                        obj.state={btn:'下架',sp:'销售中'}
                    }else{
                        obj.state={btn:'上架',sp:'已下架'}
                    }
                    this.tableData.push(obj)
                })
            })
        },
        search(){
            var obj={pageNum:1,pageSize:5,productName:'',productDesc:''};
            if(this.value=='0'){
                obj.productName=this.input
                obj.productDesc=this.input
            }else if(this.value=='1'){
                obj.productName=this.input
            }else{
                obj.productDesc=this.input
            }
            searchGoods(obj).then((res)=>{
                console.log(res)
                this.typetotal=Math.ceil(res.data.data.total/this.type.pageSize)*10
                this.list=res.data.data.list
                var d=res.data.data.list
                var obj={}
                this.tableData=[]
                d.forEach((v)=>{
                    obj={}
                    obj={name:v.name,desc:v.desc,price:v.price}
                    if(v.status==1){
                        obj.state={btn:'下架',sp:'销售中'}
                    }else{
                        obj.state={btn:'上架',sp:'已下架'}
                    }
                    this.tableData.push(obj)
                })
            })
        },
        addgoods(){
            this.$router.push({path:`/about/${this.$route.params.username}/addgoods`})
        }
    },
    mounted(){
        getGoods(this.type).then((res)=>{
            console.log(res)
            this.typetotal=Math.ceil(res.data.data.total/this.type.pageSize)*10
            this.list=res.data.data.list
            var d=res.data.data.list
            //  {name:'sosoos',descrip:'ssss',price:'213',state:{btn:'下架了',sp:'销售中'},status:0,}
            var obj={}
            d.forEach((v)=>{
                obj={}
                obj={name:v.name,desc:v.desc,price:v.price}
                if(v.status==1){
                    obj.state={btn:'下架',sp:'销售中'}
                }else{
                    obj.state={btn:'上架',sp:'已下架'}
                }
                this.tableData.push(obj)
            })
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
    overflow: hidden;
    margin: 0 0 20px 0;
    padding-bottom: 10px;
    width: 100%;
    box-shadow: 0 2px 1px -2px ;
}
.nav .selbox{
    float: left;
    margin-right: 10px;
}
.nav div.el-input{
    float: left;
    width: 200px;
}
.nav .inpbox.el-input__inner{
    float: left;
    width: 200px;
}
.nav button:nth-of-type(1){
    float: left;
    margin-left: 10px;
}

</style>