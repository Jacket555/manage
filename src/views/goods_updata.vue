<template>
    <div class="home">
        <div class="navv">
            <template v-if="a">
                <i class="el-icon-back" @click="goback"></i><span>添加商品</span>
            </template>
            <template v-else>
                <i class="el-icon-back" @click="goback"></i><span>修改商品</span>
            </template>
        </div>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item label="商品描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入商品描述"></el-input>
            </el-form-item>
            <el-form-item label="商品描述" prop="price">
                <el-input  v-model="ruleForm.price" placeholder="请输入商品价格"><template slot="append">元</template></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="categoryId">
                <el-select v-model="ruleForm.categoryId" placeholder="请选择"  style='float: left'>
                <el-option :label="value.name" :value="value.id" v-for="value in goodstype" :key="value.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="图片上传">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    style='float: left'>
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
            </el-form-item>
            <el-form-item>
                <editor
                    v-model="ruleForm.detail"
                    api-key="zmdjjvymz375zcnl647d8q7si4wxychsuaqeh1fc0ep3i3cd"
                    :init="{
                        height: 300,
                        menubar: true,
                        plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                    }"
                ></editor>
            </el-form-item>
            <el-form-item>
                <template v-if="a">
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                </template>
                <template v-else>
                    <el-button type="primary" @click="updataForm('ruleForm')">立即修改</el-button>
                </template>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import {getType,addGoods,getGoods,updataGoods} from '../api/common'
export default {
    data(){
        return{
            ruleForm: {
                name: '',
                categoryId: '',
                pCategoryId:'0',
                desc: '',
                price:'',
                detail:'',
                imgs:[],
                _id:'',
            },
            rules: {
                name: [
                    { required: true, message: '请输入商品名称', trigger: 'blur' },
                    { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                ],
                categoryId: [
                    { required: true, message: '请选择', trigger: 'change' }
                ],
                price: [
                    { required: true, message: '请输入金额', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写描述', trigger: 'blur' }
                ]
            },
            type:{
                parentId:'0',
                pageNum:1,
                pageSize:'',              
            },
            dialogImageUrl: '',
            dialogVisible: false,
            goodstype:[],
            a:true,
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }, 
        //重置添加商品  
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //添加商品
        submitForm(formName){
            // if(formName.categoryId)
            addGoods(this.ruleForm).then((res)=>{
                // console.log(res)
                if(res.data.data._id){
                    this.$message('成功！！！！');
                    this.$refs[formName].resetFields();
                }
                this.$router.push({path:`/about/${this.$route.params.username}/goodsmanage`})
            })
        },
        updataForm(){
            // console.log(formName)
            this.ruleForm._id=this.$route.params.id;
            updataGoods(this.ruleForm).then((res)=>{
                console.log(res)
            })
            this.$router.push({path:`/about/${this.$route.params.username}/goodsmanage`})
        },
        //图片上传
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
            console.log(file)
        }
    },
    components:{
         'editor': Editor
    },
    mounted(){
        var that=this;
        getType(this.type).then((res)=>{
            // console.log(res)
            var d=res.data.data.list
            d.forEach((v)=>{
                that.goodstype.push({id:v._id,name:v.name})
            })
        })
        if(this.$route.params.id){
            this.a=false;
            //     name: '',
            //     categoryId: '',
            //     pCategoryId:'0',
            //     desc: '',
            //     price:'',
            //     detail:'',
            //     imgs:[],
            getGoods({pageNum:1,pageSize:''}).then((res)=>{
                // console.log(res)
                var d=res.data.data.list;
                d.forEach((va)=>{
                    if(this.$route.params.id==va._id){
                        that.ruleForm.name=va.name
                        that.ruleForm.categoryId=va.categoryId
                        that.ruleForm.desc=va.desc
                        that.ruleForm.price=va.price
                        that.ruleForm.detail=va.detail
                        that.ruleForm.imgs=va.imgs.map((value)=>{
                            return 'http://118.24.25.7:5000/upload/'+value
                        })
                    }
                })
            })
        }else{
            this.a=true;
        }
    }   
}
</script>

<style>
/* .yuan{
    float:right;
} */
.home{
    background-color: #fff;
}
.el-select el-input input{
    float: left;
}
smeditor{
    height: 100px;
}
</style>