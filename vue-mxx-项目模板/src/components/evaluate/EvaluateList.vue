<template>
  <div class="evaluateListWarp">
     <div class="evaluateType">
          <el-radio-group v-model="evaluateListReq.type"
            @change="changeEvaluate" 
            text-color="#ea2225" fill="#ea2225">
            <el-radio  label="0" border size="medium">全部 ({{evaluateData.allCount}})</el-radio>
            <el-radio  label="1" border size="medium">好评 ({{evaluateData.goodCount}})</el-radio>
            <el-radio  label="2" border size="medium">差评 (({{evaluateData.badCount}})</el-radio>
        </el-radio-group>
     </div>
     <div class="evaluateList">
        <el-table 
            :data="evaluateData.comments.list" style="width: 100%"
            v-loading="isLoading"
            element-loading-text="拼命加载中..."
            customClass="activeClass">
            <el-table-column width="130" prop="name">
                <template slot-scope="scope">
                   <div class="evaluateUser">
                      <div class="evaluateImg">
                         <img v-show="scope.row.headImg" :src="scope.row.headImg"/>
                      </div>
                      <p class="evaluatePhone">{{scope.row.phone.replace(/^(\d{3})(\d{4})(\d{4})/,"$1****$3")}}</p>
                   </div>
                </template>
            </el-table-column>
            <el-table-column prop="data">
                <template slot-scope="scope">
                   <div class="evaluateMsg">
                      <div class="star">
                        <el-rate
                            v-model="scope.row.grade"
                            disabled
                            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                            </el-rate>
                      </div>
                      <div class="evaluateContent">{{scope.row.info}}</div>
                      <div class="specs">{{scope.row.specs }}  <span>{{ scope.row.createTime}}</span> </div>
                   </div>
                </template>
            </el-table-column>
        </el-table>
     </div>
     <div class="evalutatePage" v-show="evaluateData.comments.list.length !== 0">
        <el-pagination
            @current-change="changeEvaluate"
            :current-page.sync="evaluateListReq.pageNum"
            :page-size="evaluateListReq.pageSize"
            layout="total, prev, pager, next, jumper"
            :total="Number(evaluateData.comments.total)"
            :background="true">
        </el-pagination>
     </div>

  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
    data() {
        return {
          isLoading: true,    
        }
    },
    props:['productId'],
    computed:{
      ...mapState('evaluate/evaluateList',['evaluateData','evaluateListReq',]),
    },
    created(){
        this.isLoading = true;
        this.evaluateListRequest(this.productId).then(rse=>{
            this.isLoading = false;
        }) 
    },
    methods:{
      ...mapActions('evaluate/evaluateList',['evaluateListRequest']),
        changeEvaluate(a) { // 评价种类选择
             this.isLoading = true;
             this.evaluateListRequest(this.productId).then(rse=>{
                this.isLoading = false;
             }) 
        }
    }
}
</script>


<style lang="less" scoped>
@import url("../../theme/base.less");


.evaluateListWarp{
    .evaluateType{
        border-bottom:1px solid #ccc;
        padding-bottom:20px;
        display:flex;
        align-items:center;
        /deep/.el-radio.is-bordered.is-checked{
           border-color:@main-color;
        }
        /deep/.el-radio__input.is-checked+.el-radio__label{
            color:@main-color;
        }
        /deep/.el-radio__input.is-checked .el-radio__inner{
            border-color:@main-color;
            background:@main-color;
        }
    }
    // 评论列表
    .evaluateList{
        // loading 加载
        /deep/.el-loading-spinner .path{
            stroke:@main-color;
        }
        /deep/.el-loading-spinner .el-loading-text{
            color:@main-color;
        }
      .evaluateUser{
          .evaluateImg{
              width:36px;
              height:36px;
              background:url('../..//assets/peopleBg.jpg');
              border-radius:50%;
              margin-left:20px;
              img{
                  width:100%;
                  height:100%;
                  border-radius:50%;
              }
          }
          P{
              margin-top:10px;
              text-align:left;
              font-size:14px;
          }
      }
      .evaluateMsg{
          text-align:left;  
          .evaluateContent{
              margin-top:6px;
          }
          .specs{
              text-align:right;
              color:@minor-color;
              font-size:13px;
              span{
                  margin-left:15px;
              }
          }
      }

    }

    .evalutatePage{
        padding:50px 0 20px;
        /deep/.el-pagination.is-background .el-pager li.active{
            background:@main-color;
        }
    }
}
</style>