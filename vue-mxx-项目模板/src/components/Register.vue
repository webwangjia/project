<template>
   <div class="registerWarp">
    <h2 class="h2">账户注册</h2>
      <div class="refisterCenter">
          <el-form :model="registerData"
                    status-icon
                    :rules="rulesRegister"
                    validateField
                    ref="registerData"
                    class="demo-ruleForm">
            <el-form-item prop="username" :error="showErrorPhone.msg">
              <el-input type="text" v-model="registerData.username"   placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item   id="inlineYz" v-show="isShow" :error="showErrorImgCode">
              <div class="inlineWarp">
                  <div class="inlineInput" >
                    <el-input type="text" v-model="registerData.imgCorde" @blur="examine"  placeholder="请输入图片验证码" ></el-input>
                  </div>
                  <div class="inlineBtn">
                    <div class="imgDiv" @click="changeImg">
                       <img :src="imgUrl"/>
                    </div>
                  </div>
              </div>
            </el-form-item>
            <el-form-item  prop="code" :error="showErrorCode">
              <div class="inlineWarp">
                  <div class="inlineInput">
                    <el-input type="text" v-model="registerData.code"   placeholder="请输入手机验证码" ></el-input>
                  </div>
                  <div class="inlineBtn">
                    <el-button v-show="isPhonecode" :disabled = "false" @click="reqYz">获取验证码</el-button>
                    <el-button v-show="!isPhonecode" disabled type="info" class="timeBtn">{{time}}</el-button>
                  </div>
              </div>
            </el-form-item>
             <el-form-item  prop="password" >
              <el-input type="password" v-model="registerData.password"   placeholder="请输入6-18位数字和字母组合密码"></el-input>
            </el-form-item>
             <el-form-item  prop="repeatPassword">
              <el-input type="password" v-model="registerData.repeatPassword"   placeholder="请重复输入密码"></el-input>
            </el-form-item>
            <el-form-item class="radioWarp">
              <div >
                <el-checkbox-group v-model="registerData.type" >
                  <el-checkbox name="type">
                    <p class="radioTxt" @click="checkState">同意 《今日易购注册协议》<span>{{radioMsg}}</span></p>
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </el-form-item>
            <el-button :loading="isLoading"  @click="registerClick('loginData')" size="medium">注册</el-button>
          </el-form>
      </div>

      <div>
          <el-dialog title="《今日易购注册协议》" top="30px" width="65%" :visible.sync="dialogFormVisible">
             <div>
                <Agreement></Agreement>
             </div>
          </el-dialog>
      </div>
   </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import {Phone,Password,Corde} from '@/public/rules'
  import Agreement from './other/Agreement'

  export default {
    data() {
       let PasswordAgain = (rule, value, callback)=>{
           if (value == '' || value == "underfind") {
              return callback(new Error('请重复输入密码'));
           }

           if(value !== this.registerData.password){
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
              username: [
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
          radioMsg:'', // 协议提示
          isShow:false, // 图片验证码是否显示
          showErrorPhone:{
            msg:''
          },
          showErrorImgCode:'',
          showErrorCode:'',
          isPhonecode: true, // 是否能够获取验证码
          time:60, // 计时器
          isLoading:false, // 是否显示加载
          dialogFormVisible:false,

       }
    },
    methods:{
      ...mapActions('login/register',['imgUrlRequest','imgCodeRequest','registerRequest','resetData']),
      reqYz(){ // 获取手机验证码
         this.$refs['registerData'].validateField('username',(prop)=>{
            console.log(prop)
            if(!prop){
               this.imgUrlRequest(this.registerData.username)
               this.isShow = true;
            }
         })
      },
      changeImg(){
         this.imgUrlRequest(this.registerData.username)
      },
      checkState(){ // 注册协议提醒检查
         if(!this.registerData.type){
           this.radioMsg = "" ;
         }
         this.dialogFormVisible = true;
      },
      examine(){ // 图片验证码验证
        if(this.registerData.imgCorde){
          this.imgCodeRequest((res)=>{

             if(res.status == 200){
                      this.showErrorImgCode = '';
                      this.isPhonecode = false;
                      this.isShow = false;
                      this.$message({
                            type:'warning',
                            message:'请注意查收手机验证码',
                            center:true,
                      })

                      let time = 60;
                      let timeSet = setInterval(()=>{
                          if(this.time > 0){
                            --time;
                            this.time = time;
                          }else{
                            this.isPhonecode = true;
                            clearInterval(timeSet)
                          }

                      },1000)
             }else{
                    let data =  res.data;

                    if(data.message == "手机号已注册"){
                      this.$message({
                            type:'error',
                            message:'手机号已注册',
                            center:true,
                      })
                    }else{
                      this.$message({
                            type:'error',
                            message:data.message,
                            center:true,
                      })
                    }

                     this.imgUrlRequest(this.registerData.username)

             }

          })

        }else{
           this.showErrorImgCode = "请输入图片验证码";
        }
      },
      registerClick(){ // 注册
          this.$refs['registerData'].validate((prop)=>{
            if(prop){
              if(!this.registerData.type){
                this.radioMsg = "请勾选注册协议"
                return false;
              }
               this.isLoading = true;
               this.registerRequest().then(res=>{
                  this.$message({
                    type:'success',
                    message:'注册成功',
                    center:true,
                  })
                  this.isLoading = false;
                  sessionStorage.clear();
                  this.resetData(); // 数据重置

                  let setTime = setTimeout(()=>{
                     clearTimeout(setTime);
                     this.$router.push('/login')
                  },1500)
               }).catch(error=>{
                  this.showErrorCode = error.response.data.message;
                  this.$message({
                    type:'error',
                    message:'注册失败',
                    center:true,
                  })
                  this.isLoading = false;
               })
            }
         })
      }
    },
    computed:{
      ...mapState('login/register',['registerData','imgUrl',])
    },
    components:{
      Agreement,
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
           span{
             color:@hover-color-two;
           }
         }
         .is-checked{
           .radioTxt{
             color:@main-color;
           }
           /deep/.el-checkbox__inner{
             background:@main-color;
             border-color:@main-color;
           }
           /deep/.is-focus{
             border-color:@main-color;
           }
         }

       }
   }

}
</style>
