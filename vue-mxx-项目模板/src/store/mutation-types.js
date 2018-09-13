


const globalVar = { // 全局 Mutation
    IS_HEADER:' IS_HEADER', // 判读是否时登录页面  
    IS_LOGIN:' IS_LOGIN', // 是否登录
}


const homeMutation = { // 首页 Mutation
   HOME:'HOME', // 首页商品 和 规格信息
}


const loginAllMutation = {
    // 登录页面
    LOADING_TRUE:'LOADING_TRUE', // 打开loading
    LOADING_FALSE:'LOADING_FALSE', // 关闭loading

    // 注册页面
    REGISTER_IMG_URL:'REGISTER_IMG_URL', // 改变图片验证码

    // 重置数据
    RESET_DATA:'RESET_DATA',
}

// 商品Mutation
const productMutation = { 
    PRODUCTS: 'PRODUCT',  //商品信息
    PRODUCT_SPECS: 'PRODUCT_SPECS', // 商品规格信息 
    RESET_AGENT: 'RESET_AGENT' // 重置代理数据

}


// 评论Mutation
const evaluateMutation = { 
      EVALUATE_LIST:'EVALUATE_LIST', //评论列表
      RESET_EVALUATE_DATA:'RESET_EVALUATE_DATA', // 重置列表请求数据
}


// 下单支付Mutation

const payMutation = { 
    SHIPPING_LIST:'SHIPPING_LIST', // 收货人列表
    EDIT_INIT_DATA:'EDIT_INIT_DATA', // 编辑收货地址时，初始化数据
    RESET_SHIPPING:'RESET_SHIPPING', //初始化收货地址
    EDIT_SHIPPING:'EDIT_SHIPPING', // 编辑收货地址
    GOODS_LIST:'GOODS_LIST',  // 货物配送清单
    
    PAY_IMG:'PAY_IMG', // 获取支付图片
}

// 订单Mutation

const orderMutation = {
    ORDER_LIST:'ORDER_LIST',  // 订单列表
}

// 个人信息Mutation

const userMutation  ={
    CHANGE_PASSWORD:'CHANGE_PASSWORD',
    RESET_PASSWORD:'RESET_PASSWORD', //清除密码
}

export {globalVar,homeMutation,loginAllMutation,productMutation,evaluateMutation,payMutation,orderMutation,userMutation}