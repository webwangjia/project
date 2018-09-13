<template>
   <div class="registerWarp">
   <h2 class="h2">忘记密码</h2>
      <div class="refisterCenter">
          <el-form :model="forgetData" 
                    status-icon 
                    :rules="rulesRegister" 
                    validateField
                    ref="forgetData"  
                    class="demo-ruleForm">
            <el-form-item prop="phone" :error="showError.showErrorPhone">
              <el-input type="text" v-model="forgetData.phone"   placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item  id="inlineYz" v-show="isShow" :error="showError.showErrorImgCode">
              <div class="inlineWarp">
                  <div class="inlineInput" >
                    <el-input type="text" v-model="forgetData.captcha" @blur="examine"  placeholder="请输入图片验证码" ></el-input>
                  </div>
                  <div class="inlineBtn">
                    <div class="imgDiv" @click="changeImg">
                       <img :src="imgUrl"/>
                    </div>
                  </div>
              </div>              
            </el-form-item>
            <el-form-item  prop="code" :error="showError.showErrorCode">
              <div class="inlineWarp">
                  <div class="inlineInput">
                    <el-input type="text" v-model="forgetData.code"   placeholder="请输入手机验证码" ></el-input>
                  </div>
                  <div class="inlineBtn">
                    <el-button v-show="isPhonecode"  @click="reqYz">获取验证码</el-button>
                    <el-button v-show="!isPhonecode" disabled type="info" class="timeBtn">{{time}}</el-button>
                  </div>
              </div>
            </el-form-item>
             <el-form-item  prop="password" >
              <el-input type="password" v-model="forgetData.password"   placeholder="请输入6-18位数字和字母组合密码"></el-input>
            </el-form-item>
             <el-form-item  prop="repeatPassword">
              <el-input type="password" v-model="forgetData.repeatPassword"   placeholder="请重复输入密码"></el-input>
            </el-form-item>

            <el-button :loading="isLoading"  @click="changePassword('loginData')" size="medium">确定修改</el-button>
          </el-form>
      </div>  

   </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import {Phone,Password,Corde} from '@/public/rules'

  export default {
    data() {
       let PasswordAgain = (rule, value, callback)=>{
           if (value == '' || value == "underfind") {
              return callback(new Error('请重复输入密码'));
           }
           
           if(value !== this.forgetData.password){
              return callback(new Error('两次密码输入不一致'));
           }
          callback();
       }
       let imgCorde = (rule, value, callback)=> {
          if (value == '' || value == "underfind") {
              return callback(new Error('图片验证码不能为空'));
          }
          callback();
       }
       return {
          rulesRegister: {
              phone: [
                { validator: Phone, trigger: 'blur' }
              ],
              code:[
                { validator: Corde, trigger: 'blur' }
              ],
              password: [
                { validator: Password, trigger: 'blur' }
              ],
              repeatPassword:[
                { validator: PasswordAgain, trigger: 'blur' }
              ],
              imgCorde:[
                { required: true, trigger: 'blur' }
              ]
          },
          isShow:false, // 图片验证码是否显示
          showError:{ // 图片验证
            showErrorPhone:'',
            showErrorImgCode:'',
            showErrorCode:'',
          },
          isPhonecode:true,
          time:60, // 计时器
          isLoading: false, // 加载状态
       }
    },
    methods:{
      ...mapActions('login/forget',['imgUrlRequest','imgCodeRequest','forgetPasswordRequest','resetData']),
      reqYz(){ // 获取手机验证码
         this.$refs['forgetData'].validateField('phone',(prop)=>{
            if(!prop){
               this.imgUrlRequest(this.forgetData.phone)
               this.isShow = true;
            }
         }) 
      },
      changeImg(){ // 改变验证码
         this.imgUrlRequest(this.forgetData.phone)
      },
      examine(){ // 验证码检验
        if(this.forgetData.captcha){ // 已经输入图片验证码
          this.imgCodeRequest().then(res=>{
              this.showError.showErrorImgCode = '';
              this.isPhonecode = false;
              this.isShow = false;
              let time = 60;              
              let timeSet = setInterval(()=>{
                  if(this.time > 1){
                     --time;
                     this.time = time; 
                  }else{
                     this.isPhonecode = true;
                     clearInterval(timeSet)
                  }
                 
              },1000)  
              
          }).catch(error =>{
            let data =  error.response.data;
            if(data.message == "手机号未注册"){
               this.showError.showErrorPhone = data.message
            }else{
               this.showError.showErrorImgCode = data.message
            }
              this.imgUrlRequest(this.forgetData.phone)            
          })
        }else{
           this.showError.showErrorImgCode = "请输入图片验证码";
        }
      },
      changePassword(){ // 修改密码
         this.$refs['forgetData'].validate((prop)=>{
            if(prop){
                this.isLoading = true;
                let obj = {
                    code:this.forgetData.code,
                    phone:this.forgetData.phone,
                    password:this.forgetData.password,
                }
               this.forgetPasswordRequest(obj).then(res=>{
                  this.$message({
                    type:'success',
                    message:'修改密码成功',
                    center:true,
                  })
                  this.isLoading = false;
                  sessionStorage.clear();
                  this.resetData(); // 重置数据
                  let setTime = setTimeout(()=>{
                     clearTimeout(setTime);
                     this.$router.push('/login')
                  },1500)
               }).catch(error=>{
                  // console.log(error.response.data.message)
                  this.showError.showErrorCode = error.response.data.message;
                  this.$message({
                    type:'error',
                    message:'修改密码失败',
                    center:true,
                  })
                  this.isLoading = false;
               })
            }
         }) 
      }
    },
    computed:{
      ...mapState('login/forget',['forgetData','imgUrl',])
    }
  }
</script>


<style lang="less" scoped>
  @import url("../theme/base.less");

.registerWarp{
    background:#fff;
    padding:0 20px 20px 20px;
    border-radius:5px;
  .h2{
    margin:0px;
    padding:20px 20px 20px 0;
    text-align:left;
    color:@main-color;
  }
  .refisterCenter{
         width:290px;
       
          // element style
         .el-button--medium{ 
           width:100%;
           background:@main-color;
           color:#fff;
           border-color:@main-color;
           transition:all .2s linear;
           &:hover{
             background:@hover-color-two;
             border-color:@hover-color-two;
           }
         }
         .el-form-item{
            /deep/.el-form-item__content{
              line-height:20px;
           }
         }

        .inlineWarp{
          display:flex;
          justify-content:space-between;
          .inlineInput {
          display:inline-block;
          width:60%;
          }
          .inlineBtn{
            .imgDiv{
              img{
                height:40px;
                width: 110px;
              }
            }
            .el-button--default{ 
              width:100%;
              background:@main-color;
              color:#fff;
              border-color:@main-color;
              transition:all .2s linear;
              &:hover{
                background:@hover-color-two;
                border-color:@hover-color-two;
              }
            }
            .timeBtn{
              width:110px;

            }
          }
        }
       .radioWarp{
         margin-bottom:0px;
         text-align:left;
         .radioTxt{
           margin:0;
         }
         .is-checked{
           .radioTxt{
             color:@main-color;
           }
           
         }

       }
   } 
   
}
</style>