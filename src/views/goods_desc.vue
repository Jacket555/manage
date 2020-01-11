<template>
    <div class="bigbox"> 
        <div class="navv">
            <i class="el-icon-back" @click="goback"></i><span>商品详情</span>
        </div>
        <div class="goodsdesc">
            <span>商品名称</span>
            <span>{{goods.name}}</span>
        </div>
        <div class="linee"><i class="el-icon-picture-outline-round"></i></div>
        <div class="goodsdesc">
            <span>商品描述</span>
            <span>{{goods.desc}}</span>
        </div>
        <div class="linee"><i class="el-icon-picture-outline"></i></div>
        <div class="goodsdesc">
            <span>商品价格</span>
            <span>{{goods.price}}</span>
        </div>
        <div class="linee"><i class="el-icon-goods"></i></div>
        <div class="goodsdesc">
            <span>所属分类</span>
            <span>{{goods.categoryName}}/</span>
        </div>
        <div class="linee"><i class="el-icon-s-promotion"></i></div>
        <div class="goodsdesc">
            <span>商品图片</span>
            <template v-for="(g,i) in goods.imgs"> 
                <img :src="g" alt="加载失败" :key="i">
            </template>
        </div>
        <div class="linee"><i class="el-icon-headset"></i></div>
        <div class="goodsdesc">
            <span>商品详情</span>
            <span v-html="goods.detail"></span>
        </div>
    </div>
</template>

<script>
import {getGoods,getInfo} from '../api/common'
export default {
    data(){
        return{
            goods:{name:'',detail:'',desc:'',imgs:[],price:'',categoryName:''},// detail  name  desc  imgs  price  categoryId
        } 
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    },
    mounted(){
        var that=this;
        getGoods(this.type).then((res)=>{
            console.log(res)
            var d=res.data.data.list
            //  {name:'sosoos',descrip:'ssss',price:'213',state:{btn:'下架了',sp:'销售中'},status:0,}
            d.forEach((v)=>{
               if(v._id==this.$route.params.id){
                   that.goods.detail=v.detail;
                   that.goods.name=v.name;
                   that.goods.desc=v.desc;
                   that.goods.imgs=v.imgs;
                   that.goods.price=v.price+'元';
                   that.goods.categoryId=v.categoryId;
                   that.goods.imgs=that.goods.imgs.map((value)=>{
                       return 'http://118.24.25.7:5000/upload/'+value
                   })
                   console.log(that.goods.imgs)
                    getInfo({categoryId:v.categoryId}).then((res)=>{
                        // console.log(res)
                        that.goods.categoryName=res.data.data.name
                    })
               }
            })
        })
    }
}
</script>

<style>
.bigbox{
        background-color: #fff;
        padding: 20px;
}
.navv{
    overflow: hidden;
    margin: 0 0 20px 0;
    padding-bottom: 10px;
    width: 100%;
    box-shadow: 0 2px 1px -2px ;
}
.navv i.el-icon-back{
    color:#409eff ;
    float: left;
    line-height: 40px;
    font-size: 18px;
}
.navv i.el-icon-back:hover{
    cursor: pointer;
}
.navv span{
    color: black;
    float: left;
    line-height: 40px;
    margin-left: 10px;
}
.goodsdesc{
    overflow: hidden;
    width: 100%;
    min-height: 36px;
    margin: 10px 0;
}
.goodsdesc>span{
    float: left;
}
.goodsdesc>span:nth-of-type(1){
    padding: 10px;
    background-color: #ecf5ff;
    color: #409eff;
}
.goodsdesc>span:nth-of-type(2){
    line-height: 36px;
    margin-left: 10px;
}
.linee{
    height: 1px;
    background-color: black;   
    position: relative; 
}
.linee i{
    position: absolute;
    left: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 10px;
}
.goodsdesc img{
    height: 100px;
    float: left;
    margin: 0 20px;
}
</style>