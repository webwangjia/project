
const API_PREFIX = '/api'; // api 前缀 （也是首页api）


// 登录注册忘记密码API

const loginUrl = {
    LOGIN:'/login',
    REFIST_IMG_CODE:'/regist/sms', // 注册图片验证api
    FORGET_IMG_CODE:'/forget/sms', //忘记密码图片验证api
    FORGET_PASSWORD:'/forget',  // 忘记密码
    REGISTER:'/regist'  // 注册
}



// 商品
const productUrl = {
    PRODUCTS:'/products/{0}', // 商品详情
    PRODUCTS_SPECS:'/products/{0}/specs', // 商品规格信息
}

// 代理商

const agentUrl = {
    AGENT: '/agent', // 代理申请
}

// 评论
const evaluateUrl = {
    EVALUATE_LIST:'/comments/{0}',
    CREATED_EVALUATE:'/comments' // 创建评论
}

// 收货人管理
const shippingUrl = {
    SHIPPING:'/shipping',  // 获取/创建（get/post)收货地址列表
    DELETE_EDIT_SHIPPING:'/shipping/{0}', // 删除/修改（delete/put）收货地址
    GOODS_LIST:'/shipping/items/{0}',  // 查询送货清单信息
    CALCULATE:'/shipping/calculate/{0}', // 运费计算
}

// 订单
const orderUrl = {
    CREATED_ORDERS:'/orders', // 创建订单
    INQUERY_ORDER_STATUS:'/orders/{0}',  // 查询订单状态
    ORDERS:'/orders',   // 查询订单
    CONFIRMATION_ORDER:'/orders/confirmationDelivery/{0}',  // 确认收货
}

// 支付
const payUrl = {
     CREATE_PAY:'/pay', // 创建支付订单
     REFUND_PAY:'/pay/refund/{0}',  // 申请退款/取消订单
}


// 个人信息
const userUrl = {
    CHANGE_PASSWORD:'/user/password', // 修改密码
    UPLOAD_IMG:'/user'
}

export {API_PREFIX,loginUrl,productUrl,agentUrl,evaluateUrl,shippingUrl,orderUrl,payUrl,userUrl}
