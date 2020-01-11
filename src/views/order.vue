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
            <el-input v-model="input" placeholder="订单号" class="inpbox"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </div>
        <template>
            <el-table
                :data="tableData"
                border
                style="width: 100%">

                <el-table-column
                prop="orderId"
                label="订单号"
                width="180">
                </el-table-column>

                <el-table-column
                prop="recipient"
                label="收件人"
                width="180">
                </el-table-column>

                <el-table-column
                prop="status"
                label="订单状态">
                </el-table-column>

                <el-table-column
                prop="allPrice"
                label="订单总价">
                </el-table-column>

                <el-table-column
                prop="create_time"
                label="创建时间">
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="seeorder(scope.$index, scope.row)">查看详情</el-button>
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
                :current-page="type.pageNum"
                >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import {getOrder,searchOrder} from '../api/common'
export default {
    data(){
        return{
            options:[
                {value:'0',label:'按照订单号搜索'},
                {value:'1',label:'按照收件人搜索'}
            ],
            value:'0',
            input:'',
            tableData:[
                // {orderId recipient status allPrice create_time}
                // {orderId:1 ,recipient:2 ,status:3, allPrice:4, create_time:5}
            ],
            type:{
                pageNum:1,
                pageSize:5,
            },
            typetotal:10,
        }
    },
    methods:{
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
        updataPageNum(e){
            this.type.pageNum=e;
            var that=this;
            var obj={}
            getOrder(this.type).then((res)=>{
                console.log(res)
                // {orderId recipient status allPrice create_time}
                var d=res.data.data.list;
                that.tableData=[]
                d.forEach((v)=>{
                    obj={}
                    obj.orderId=v.orderId
                    obj.recipient=v.recipient
                    if(v.status==1){
                        obj.status='未支付'
                    }else{
                        obj.status='已支付'
                    }
                    obj.allPrice=v.allPrice
                    obj.create_time=this.gettime(v.create_time)
                    that.tableData.push(obj)
                })
            })
        },
        search(){
            var obj={}
            var that=this;
            if(this.value=='0'){
                obj.type='orderId'
            }else{
                obj.type='recipient'
            }
            obj.value=this.input
            obj.pageNum=1
            obj.pageSize=5
            searchOrder(obj).then((res)=>{
                that.tableData=[]
                obj={}
                var d=res.data.data.list;
                d.forEach((v)=>{
                    obj={}
                    obj.orderId=v.orderId
                    obj.recipient=v.recipient
                    if(v.status==1){
                        obj.status='未支付'
                    }else{
                        obj.status='已支付'
                    }
                    obj.allPrice=v.allPrice
                    obj.create_time=this.gettime(v.create_time)
                    that.tableData.push(obj)
                    this.typetotal=Math.ceil(res.data.data.total/this.type.pageSize)*10
                })
            })
        },
        seeorder(a,b){
            console.log(a,b)
            this.$router.push({path:`/about/${this.$route.params.username}/order/${this.tableData[a]._id}`})
        }
    },
    mounted(){
        var that=this;
        var obj={}
        getOrder(this.type).then((res)=>{
            console.log(res)
             // {orderId recipient status allPrice create_time}
            var d=res.data.data.list;
            d.forEach((v)=>{
                obj={}
                obj.orderId=v.orderId
                obj.recipient=v.recipient
                if(v.status==1){
                    obj.status='未支付'
                }else{
                    obj.status='已支付'
                }
                obj.allPrice=v.allPrice
                obj.create_time=this.gettime(v.create_time)
                obj._id=v._id;
                that.tableData.push(obj)
                this.typetotal=Math.ceil(res.data.data.total/this.type.pageSize)*10
            })
        })
    }
}
</script>

<style>

</style>