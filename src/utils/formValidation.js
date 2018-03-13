
import { Toast } from 'antd-mobile';

// 不为空验证
function empty(val, prompt) {
    if (val == '') {
        Toast.fail(prompt, 1);
        return false;
    }
}

function lengthValid(val, len, prompt) {
    if (val.length < len) {
        Toast.fail(prompt, 1);
        return false;
    }
}
function confirmPassword(newVal, confirmPassword, prompt) {
    if (newVal !== confirmPassword) {
        Toast.fail(prompt, 1);
        return false;
    }
}

// 手机格式验证
function phoneValid(val, text) {
    var reg = /^1[2|3|4|5|6|7|8|9]\d{9}$/; //手机正则

    var textT = text ? text : '';
    if (val == '') {
        Toast.fail(textT + '手机号不能为空', 2);
        return false;
    } else if (val.length !== 11) {
        Toast.fail(textT + '手机号位数为11', 2);
        return false;
    } else if (!reg.test(val)) {
        Toast.fail(textT + '手机号格式不正确', 2);
        return false;
    }
}

function emailVaild(val) {
    var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (val == '') {
        Toast.fail('邮箱不能为空', 1);
        return false;
    } else if (!reg.test(val)) {
        Toast.fail('邮箱格式不正确', 1);
        return false;
    }
}

module.exports = {
    empty: empty,
    phoneValid: phoneValid,
    emailVaild: emailVaild,
    lengthValid: lengthValid,
    confirmPassword: confirmPassword
};