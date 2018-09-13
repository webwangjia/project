<template>
  <div class="person">
      <p class="title">修改密码</p>
       <div class="passwordWarp">
            <div class="inputWarp">
                <el-form :model="changePassword" status-icon :rules="rulesPassword" ref="ruleFormPassword" label-width="100px" class="demo-ruleForm">
                   <el-form-item label="旧密码：" prop="oldPassword">
                        <el-input type="password" v-model="changePassword.oldPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码：" prop="newPassword">
                        <el-input type="password" v-model="changePassword.newPassword" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" prop="repeatPassword">
                        <el-input type="password" v-model="changePassword.repeatPassword" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>   
      </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {Password } from '@/public/rules'


export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.changePassword.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        rulesPassword: {
          oldPassword: [
            { validator: Password, trigger: 'blur' }
          ],
          newPassword: [
            { validator: Password, trigger: 'blur' }
          ],
          repeatPassword: [
            { validator: validatePass, trigger: 'blur' }
          ],
         
        }
      };
    },
    computed:{
        ...mapState('center/user',['changePassword']),
    },
    methods:{
       ...mapActions('center/user',['changePasswordRequest','resetPassword']),
       submitForm(formName) { // 提交表单
        this.$refs.ruleFormPassword.validate((valid) => {
          if (valid) {
             this.changePasswordRequest().then(res=>{
                   if(res.status == 200){
                        this.$message({
                            type: 'success',
                            message: '修改密码成功，请重新登录',
                            center:true,
                        });

                        setTimeout(()=>{
                             sessionStorage.clear();
                             this.resetPassword();
                             this.$router.push({path:'/login'})
                        },1200)
                       
                   }
                   
             }).catch(error=>{
                  this.$message({
                     type: 'error',
                     message: error.data.message,
                     center:true,
                  });
             })
          }
        });
      },
      resetForm(formName) { // 重置表单
        this.$refs.ruleFormPassword.resetFields();
      }
    }
}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

.person{
    padding:20px;
    min-height:600px;
   .title{
       width:100%;
       text-align:left;
       padding:0 0 30px;
       font-size:18px;
   }
   .passwordWarp{
       padding:30px 50px 50px 50px;
       display:flex;
       justify-content:center;
       background:#f6f6f6;
       border-radius:5px;
       .inputWarp{
           width:500px;
           .el-button--primary{
               background-color:@main-color;
               border-color:@main-color;
               &:hover{
                   background-color:@hover-color;
                   border-color:@hover-color;
               }
           }
           .el-button--default{
               &:hover{
                   background-color:#fff;
                   border-color:@hover-color;
                   color:@hover-color;
               }
           }
       }
           
       
   }
}
</style>