<template>
  <div class="person">
      <p class="title">修改头像</p>
       <div class="imgWarp">
            <div class="upWarp">
               <el-upload
                    class="upload-demo"
                    drag
                    :action='uploadUrl'
                    :on-success="uploadSuccess"
                    :on-error="uploadError"
                    :show-file-list="false"
                    :before-upload="beforeUplaod"
                    accept="image/gif, image/jpeg, image/png, image/bmp"
                    name="headImg"
                   >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将头像图片拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">仅支持JPG、GIF、PNG、JPEG、BMP格式，文件小于 4M</div>
                </el-upload>
            </div>

            <div class="imgShow">
                <div class="oneImg">
                   <p>
                     <img v-show="userImg.url" :src="userImg.url"/>
                   </p>
                   <p>100*100像素</p>
                </div>
                 <div class="twoImg">
                   <p>
                     <img v-show="userImg.url" :src="userImg.url"/>
                   </p>
                   <p>50*50像素</p>
                </div>
            </div>

      </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
    data() {
        return {
           userImg:{
               url:''
           },
           uploadUrl:'',
        }
    },
    created(){
        let upload = `/api/user/headImg?access_token=${sessionStorage.JRYG_TOKEN}`;
        this.uploadUrl = upload;
        this.uploadImg();
    },
    methods:{
        ...mapActions('center/user',['uploadImgRequest']),
        beforeUplaod(file){ // 上传之前
            let url = window.URL.createObjectURL(file)
             let type = file.type.split('/')[1];

            if(file.size>=4194304){
                this.$message({
                    type: 'warning',
                    message: '请上传小于4M的图片',
                    center:true,
                });

                return false;
            }else if(!/^(gif|jpeg|png|bmp)$/.test(type)){
                this.$message({
                    type: 'warning',
                    message: '请上传指定格式的图片',
                    center:true,
                });

                return false;
            }


        },
        uploadSuccess(response, file, fileLis){ // 图片上传成功时的钩子
            let urlImg = response.headImg + `?imgSum=${new Date().getTime()}`;
            this.userImg = Object.assign({},{
               url: urlImg
            });
            this.$message({
                type: 'success',
                message: '上传成功',
                center:true,
            });
        },
        uploadError(){
            this.$message({
                type: 'success',
                message: '上传失败',
                center:true,
            });
        },
        uploadImg(){
           this.uploadImgRequest().then(res=>{
               let urlImg = res.data.headImg + `?imgSum=${new Date().getTime()}`;
               this.userImg = Object.assign({},{
                  url: urlImg
               });
           })
        },

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
   .imgWarp{
       padding:30px 50px 50px 50px;
       display:flex;
       background:#f6f6f6;
       border-radius:5px;
       .upWarp{
            min-height:280px;
           /deep/.el-upload-dragger{
               width:540px;
               height:200px;
           }
           .el-upload-dragger .el-icon-upload{
               margin-top:55px;
           }
           .el-upload-dragger .el-upload__text em{
               color:@main-color;
           }
           /deep/.el-upload-dragger{
               &:hover{
                   border-color:@main-color;
               }
           }
           /deep/.el-progress-bar__inner{
               background-color:@main-color;
           }
       }
       .imgShow{
           padding:80px 100px;
           display:flex;
           align-items:flex-end;
           position:relative;
           &:before{
               position:absolute;
               top:40px;
               left:120px;
               content:'效果预览:';
               font-size:14px;

           }
           .oneImg{
               p:nth-of-type(1){
                   width:100px;
                   height:100px;
                   margin:0 20px;
                   background:url('../../assets/goodsBJ.jpg') no-repeat center center;
                   background-size:100% 100%;
                   img{
                       width:100%;
                       height:100%;
                   }
                   +p{
                     color:#999;
                   }
               }
           }
           .twoImg{
               p:nth-of-type(1){
                   width:50px;
                   height:50px;
                   background:url('../../assets/goodsBJ.jpg') no-repeat center center;
                   background-size:100% 100%;
                   img{
                       width:100%;
                       height:100%;
                   }
                   +p{
                     color:#999;
                   }
               }
           }
       }
   }
   .uploadBtn{
       padding:30px 0;
   }
}
</style>
