<template>
  <div class="agentWarp">
    <el-form :model="agent" status-icon :rules="agentRules" ref="agentForm">
        <el-form-item label="代理性质：" :label-width="formLabelWidth">
          <el-radio v-model="agent.type" label="1">个人代理</el-radio>
          <el-radio v-model="agent.type" label="2">公司代理</el-radio>
        </el-form-item>
        <el-form-item label="代理区域："  prop="area"  :label-width="formLabelWidth">
           <el-input v-model="agent.area" auto-complete="off" placeholder="请输入代理区域"></el-input>
        </el-form-item>
        <el-form-item label="联系人姓名："  prop="name"  :label-width="formLabelWidth">
           <el-input v-model="agent.name" auto-complete="off" placeholder="请填写联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话："  prop="phone"  :label-width="formLabelWidth">
           <el-input v-model="agent.phone" auto-complete="off" placeholder="请填写联系人手机号"></el-input>
        </el-form-item>
    </el-form>

     <div slot="footer" class="dialog-footer">
        <div  @click="close" class="closeBtn">
            <el-button type="danger" plain>取消</el-button> 
        </div>
        <div @click="agentReq">
            <el-button type="danger" plain :loading="isLoading">确定</el-button>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {Phone} from '@/public/rules'

export default {
    data(){
        return {
            formLabelWidth: '120px',
            isLoading:false,
            agentRules:{
               area:[{required:true,message:'请输入代区域', }], 
               name:[{required:true,message:'请填写联系人姓名', }],
               phone:[
                     {required:true,message:'手机号不能为空'},
                     {validator: Phone, trigger: 'blur'}
                   ],
            }
        }
    },
    computed:{
        ...mapState('product/agent',['agent'])
    },
    methods:{
        ...mapActions('product/agent',['agentRequest']),
       close(){
           this.$emit('childClose')
       },
       agentReq(){ // 代理请求
           this.$refs['agentForm'].validate((valid) => { 
               if (valid) {
                    this.isLoading = true;
                    this.agentRequest().then((res)=>{ 
                        if(res.status == 200){
                           this.close();

                           this.$message({
                                message: '代理成功,我们的工作人员会尽快与您联系，请保持电话畅通',
                                type: 'success',
                                center: true,
                                duration:4000,
                           });
                        }
                      this.isLoading = false;
                        
                    }).catch(error=>{
                        this.$message({
                            message: '代理失败',
                            type: 'error',
                            center: true,
                        });
                       this.isLoading = false;
  
                    })

               }
           })
       }
    },
}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

.agentWarp{
    width:90%;
    /deep/.el-radio__input.is-checked+.el-radio__label{
       color:@main-color;
    }
    /deep/.el-radio__input.is-checked .el-radio__inner{
       border-color:@main-color;
       background:@main-color;
    }
    .dialog-footer{
       display:flex;
       justify-content:center;
       div{
         margin-left:50px;
       }
       .el-button--danger.is-plain{
         color:#fff;
         background:@main-color;
       }
       .closeBtn{
           .el-button--danger.is-plain{
             color:@main-color;
             background:#fff;
             border-color:@main-color;
           }
       }
    }
}

</style>