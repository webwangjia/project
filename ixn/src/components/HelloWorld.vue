<template>
<el-form  label-width="200px" :model="loginData" status-icon :rules="rules2"  ref="loginRef" class="demo-ruleForm">
  <el-form-item label="身份证号 :" prop="usernumber">
    <el-input class="input" v-model="loginData.usernumber" ></el-input>
  </el-form-item>
  <el-form-item label="密码 :" prop="password">
    <el-input type="password" class="input"  v-model="loginData.password" ></el-input>
  </el-form-item>
   <el-button type="primary" @click="loginReq">登录</el-button>
</el-form>
</template>

<script>
import axios from 'axios'

export default {

  data () {
        var user = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('身份证号不能为空'));
        }
         let result =  /^[0-9]{18}$/.test(value); 
        if(!result){
          return callback(new Error('请输入正确手机号'));
        }
          callback();
       } 
        const  Password2 = (rule, value, callback) => { // 验证密码
        if(value == ''  || typeof value == "undefined"){
            return  callback(new Error('密码不能为空'))
        }
        
        let result = /^[0-9a-zA-Z]{6,18}$/.test(value); 
        if(!result){
            return callback(new Error('密码是由6-18位数字，字母组成'));
        }
        callback();      
    }
    return {
      loginData:{
        usernumber:"",
        password:"",
        
      },
      rules2:{
        usernumber:[{validator:user, trigger: 'blur'}],
        password:[{validator:Password2, trigger: 'blur'}]
      }
    }
  },
  created() {
    
  },
  methods:{
   loginReq(){ 
      this.$refs.loginRef.validate((valid) => {
        if(valid){
            axios({
              method:"get",
              url:"http://rongxin.ixiangni.cn/ixiangni/mbuser/loginNew.json",
              data:{ usernumber:"",
                     password:"",}

            }).then(res=>{
              console.log(res)
            }).catch(err=>{
              console.log(err)
            })
        }
      });
   }
  },
}
</script>
<style lang="less" scoped>
.input{
  display: inline-block;
  width:200px;
}
.el-button--primary{
  margin-left:200px;
}
</style>

