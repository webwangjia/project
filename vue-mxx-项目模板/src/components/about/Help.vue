<template>
  <div class="hellpWarp">
     <h3 class="title">常见问题<span>common problem</span></h3>
     <div>
        <el-collapse  accordion>
            <el-collapse-item title="一、账户问题" name="1">
                <div>
                    <p class="subTitle">1、如何更换手机号？</p>
                    <p>目前今日易购暂不支持用户更换手机号，如您有需要，可致电今日易购客服400-991-0388，我们会协助您解决。</p>
                    <p class="subTitle">2、忘记登录密码怎么办？</p>
                    <p>请您点击首页右上方"登录"，进入"登录"页，请您点击"忘记密码"，根据页面提示填写信息，可通过手机号来重新设置登录密码。</p>
                    <p class="subTitle">3、提示“账号存在安全风险”怎么办？</p>
                    <p>由于您的账号存在风险，为避免损失，今日易购将您的账号进行锁定，请您根据页面提示填写信息，重新修改密码即可登录，部分情况需绑定手机号先收取验证码短信并回填。</p>
                </div>
            </el-collapse-item>
            <el-collapse-item title="二、支付问题" name="2">
                <div>
                    <p class="subTitle">1、今日易购支持哪些支付方式？</p>
                    <p>今日易购支持如下支付方式：支付宝、微信。如有其它支付方式，我们会第一时间通知大家。</p>
                    <p class="subTitle">2、支付宝/微信已扣款，今日易购订单仍显示未付款</p>
                    <p>出现此问题，可能是支付宝/微信的数据没有即时传输至今日易购，请您不要担心，稍后刷新页面查看。</p>
                    <p>如半小时后仍显示"未付款"，请先联系支付宝/微信客服，获取您扣款的交易号，然后致电今日易购客服400-991-0388，我们会协助您解决。</p>
                    <p class="subTitle">3、用户支付完成后，在哪里可以查看订单详情？</p>
                    <p>用户支付完成后，可登录“个人中心”-“我的订单”查看商品具体进度。</p>
                </div>
            </el-collapse-item>
            <el-collapse-item title="三、评价问题" name="3">
                <div>
                    <p class="subTitle">1、如何发表评价？</p>
                    <p>为保证评价的真实性，订单购买成功后才能评价。请进入"个人中心-我的订单”,选择相应商品发表评价。</p>
                    <p class="subTitle">2、如何修改评价？</p>
                    <p>目前，平台用户暂时无法修改评价。如果你想删除的话，您可以致电今日易购客服400-991-0388，我们会协助您解决。</p>
                    <p class="subTitle">3、如何查看我的的评价？</p>
                    <p>请您登录今日易购"个人中心-我的订单-所有订单"页面，选择相应商品，进入详情页查看。</p>
                </div>
            </el-collapse-item>
            <el-collapse-item title="四、商品邮寄问题" name="4">
                <div>
                    <p class="subTitle">1、如何修改邮寄商品类订单？</p>
                    <p>目前，今日易购暂不支持用户进行订单修改。如果你的订单未发货，可以“取消订单”，再次浏览今日易购网站进行商品购买。</p>
                    <p class="subTitle">2、如何查询快递信息？</p>
                    <p>请您登录今日易购账户，进入"个人中心-我的订单"，找到您购买的邮寄商品，查看订单状态。如显示"待发货"，商品还未发货，请您耐心等待；如显示"已发货"，点击“查看物流”即可查看物流信息。因快递信息存在一定延时，您可使用快递单号至快递官网查询最新信息。</p>
                    <p class="subTitle">3、如何取消订单？</p>
                    <p>请您登录今日易购账户，进入"个人中心-我的订单"，找到您购买的邮寄商品，查看商品是否发货。如果商品还未发货，可以点击“取消订单“即可；如果已经发货的商品，则无法取消订单。</p>
                </div>
            </el-collapse-item>
        </el-collapse>

     </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created(){

    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

.hellpWarp{
    text-align:left;
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
    /deep/.el-collapse-item__header{
       font-size:16px;
       font-weight:bold;
    }
    .subTitle{
        font-size:16px;
        padding:8px 0;
        text-indent:8px;
    }
    p{
        text-indent:28px;
        padding:0 30px;
    }
}

</style>
