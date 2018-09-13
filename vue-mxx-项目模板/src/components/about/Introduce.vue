<template>
  <div class="introduceWarp">
    <h2 class="title">企业简介<span>COMPANY PROFILE</span></h2>
    <div class="introInfo clearfix">
      <div class="imgWarp"><img src="../../assets/img06.jpg"/></div>
      <div class="conInfo">
        <div class="text">
          <p>今日易购是专注“新零售、新生活”的互联网赋能、共享平台。</p>
          <p>今日易购以“建设新时代幸福生活共享圈”为发展目标，紧紧围绕“服务赢得信任，整合创造价值”的经营宗旨，坚持“技术赋能、产业赋能、生态赋能、财富赋能”的发展使命，通过互联网、大数据、人工智能等技术，搭建包括信息分享、融资服务、电商、分销、信用保障及客户服务等系统和功能为一体的互联网平台，为企业提供生产融资、销售拓展、品牌传播等综合营销服务，为消费者提供高品质消费，从而实现供需的精准、有效匹配。</p>
          <p>今日易购将长期专注特色农牧产品领域，为“精准扶贫”、“乡村振兴”等提供包括资金、技术和人才等各个方面的支持，实现企业和平台的社会价值，为建设“富强、民主、文明、和谐、美丽”的社会主义强国，贡献绵薄之力。</p>
         </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {

}
</script>


<style lang="less" scoped>
@import url("../../theme/base.less");


.introduceWarp{
    text-align:justify;
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
    .introInfo{
       display:flex;
       flex-direction:column;
       padding:0 25px;
       .imgWarp{
        width:800px;
        margin:0 auto 20px auto;
            img{
            width:100%;
            height:auto;
            }
        }
        .conInfo{
            font-size:16px;
            line-height:28px;
            P{
                text-indent:32px;
                margin:10px 0;
            }
        }
    }
}


</style>

