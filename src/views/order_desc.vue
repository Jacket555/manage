<template>
    <div class="bigbox orderbox">
         <div class="navv">
            <i class="el-icon-back" @click="goback"></i><span>订单详情</span>
        </div>
        <div class="orderaa">
            <div class="orderdesc">
                <span>订单号</span>
                <span>{{tableData.orderId}}</span>
            </div>
        </div>
        <div class="orderaa">
            <div class="orderdesc">
                <span>订单人</span>
                <span>{{tableData.recipient}}</span>
            </div>
        </div>
        <div class="orderaa">
            <div class="orderdesc">
                <span>创建时间</span>
                <span>{{tableData.create_time}}</span>
            </div>
        </div>
        <div class="orderaa">
            <div class="orderdesc">
                <span>订单状态</span>
                <span>{{tableData.status}}</span>
            </div>
        </div>
        <div class="orderaa">
            <div class="orderdesc">
                <span>商品价格</span>
                <span>{{tableData.allPrice}}</span>
            </div>
        </div>
        <div class="orderaa">
            <div class="orderdesc">
                <span>支付方式</span>
                <span>支付宝</span>
            </div>
        </div>
        <div class="linee"><i class="el-icon-picture-outline"></i></div>
         <el-table
                :data="tdata"
                border
                style="width: 100%">

                <el-table-column
                prop="name"
                label="商品名称"
                width="180">
                </el-table-column>

                <el-table-column
                label="商品图片">
                <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"></el-image>
                </el-table-column>

                <el-table-column
                prop="info"
                label="商品信息">
                </el-table-column>

                <el-table-column
                prop="price"
                 width='100px'
                label="单价">
                </el-table-column>

                <el-table-column
                prop="count"
                width='50px'
                label="数量">
                </el-table-column>

            </el-table>
    </div>

</template>

<script>
import {getOrderDesc} from '../api/common'
export default {
    data(){
        return{
            tableData:{orderId:'',recipient:'',allPrice:'',create_time:''},
                // {orderId recipient status allPrice create_time}
                // {orderId:1 ,recipient:2 ,status:3, allPrice:4, create_time:5}
            tdata:[],
            fit: 'fill',
            url: ''
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
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
    },
    mounted(){
        var that=this;
            getOrderDesc({id:this.$route.params.id}).then((res)=>{
                console.log(res,that)
            // {orderId recipient status allPrice create_time}
                var d=res.data.data;
                that.tableData.orderId=d.orderId
                that.tableData.recipient=d.recipient
                if(d.status==1){
                    that.tableData.status='未支付'
                }else{
                    that.tableData.status='已支付'
                }
                that.tableData.allPrice='￥'+d.allPrice
                that.tableData.create_time=this.gettime(d.create_time)
                // that.tableData._id=d._id;
                var a=[];
                a=d.details[0].imgs.map((r)=>{
                    return 'http://118.24.25.7:5000/upload/'+r
                })
                that.url=a[0];
                var obj={name:d.details[0].name,info:d.details[0].info,price:d.details[0].price,count:d.details[0].count}
                that.tdata=[obj]
        })
    }
}
</script>

<style>
.orderdesc{
    float: left;
}
.orderaa{
    overflow: hidden;
    width: 100%;
    height: 35px;
}
.orderdesc span:nth-of-type(1){
    padding: 5px 10px;
    background-color: #ecf5ff;
    color: #409eff;
    margin-right: 20px;
}
.orderbox .el-table{
    margin-top: 30px;
}
</style>