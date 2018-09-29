
const Phone = (rule, value, callback) => { // 验证手机号
    if (value === '' || typeof value == "undefined") {
      return callback(new Error('手机号不能为空'));
    }
    
    let result =  /^[1][0-9][0-9]{9}$/.test(value); 

    if(!result){
      return callback(new Error('请输入正确手机号'));
    }
    callback();
};

const  Password = (rule, value, callback) => { // 验证密码
    if(value == ''  || typeof value == "undefined"){
        return  callback(new Error('密码不能为空'))
    }
    
    let result = /^[0-9a-zA-Z]{6,18}$/.test(value); 
    if(!result){
        return callback(new Error('密码是由6-18位数字，字母组成'));
    }
    callback();
    
}

const Corde = (rule, value, callback) => {  // 手机验证码

    if(value == '' || typeof value == "undefined"){
        return  callback(new Error('验证码不能为空'))
    }

    let result = /^[0-9]*$/.test(value); 
    if(!result){
        return callback(new Error('验证码输入有误'));
    }
    callback();
    
}

const Required = (rule, value, callback) => {
    if(value == '' || typeof value == "undefined"){
        return  callback(new Error('该项为必填项'))
    }
    callback();
}
export {
    Phone,
    Password,
    Corde,
    Required
}