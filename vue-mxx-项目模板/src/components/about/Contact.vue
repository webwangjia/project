<template>
  <div class="contactWarp">
    <h3 class="title">联系我们<span>Contact us</span></h3>
      <div class="infobor">
        <p class="ppad"><strong>● 北京今日易购电子商务有限公司</strong></p>
        <p>公司地址：北京市丰台区广安路9号国投财富广场5号楼7层</p>
        <p>联系电话：400-991-0388</p>
        <p>企业邮箱：service@jregou.com</p>
      </div>
      <div class="infobor">
          <p class="ppad"><strong>● 人工服务</strong></p>
          <p>联系电话：400-991-0388</p>
          <p>客服邮箱：service@jregou.com；</p>
      </div>
      <div class="infobor">
          <p class="ppad"><strong>● 商务合作</strong></p>
          <p>如果您有意向与我们合作，请将合作意向文档发送至邮箱地址：bd@jregou.com，我司工作人员会尽快和您联系；</p>
          <p>商务活动合作请联系商务BD，邮箱地址：hwzhao@jregou.com；</p>
          <p>线上推广合作请联系商务BD，邮箱地址：xyli@jregou.com。</p>
          <p>如果您有采访需求或品牌合作意向，请将采访提纲或合作方式等资料发送到邮箱地址：pli@jregou.com,我们会尽快与您联系。</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

.contactWarp{
    text-align:left;
    font-weight:normal;
    padding-bottom:20px;
    .title{
        font-weight:normal;
        font-size:32px;
        padding:0 0 30px;
        span{
            display:block;
            font-size:12px;
            padding:5px 0;
            color:#999;
            text-transform:uppercase;
        }
    }
    .infobor{
      border-bottom:1px solid #e1e1e1;
      padding-bottom:20px;
      font-size:16px;
      font-weight:normal;
      line-height:28px;
      p{
          text-indent:20px;
      }
      .ppad{
        font-size:19px;
        font-weight:normal;
        margin:10px 0;
        text-indent:0px;
        padding-top:20px;
      }
    }

}

</style>

