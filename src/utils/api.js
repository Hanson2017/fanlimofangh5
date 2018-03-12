'use strict';

var host = 'http://www.fanlimofang.com/DataApi/';
// const host = 'http://192.168.1.18:8083/DataApi/';

var domain = 'http://www.fanlimofang.com';

module.exports = {
    domain: domain,
    home: host + 'GetHome',
    list: host + 'GetActivityList',
    listTag: host + 'GetActivityList_tag',
    detail: host + 'GetActivityDetail',
    comment: host + 'GetCommentList',
    login: host + 'Login',
    addcommentone: host + 'Addcommentone',
    addcommentmulti: host + 'Addcommentmulti',
    getmemberlist: host + 'Getmemberlist',
    getmembercommentRow: host + 'GetmembercommentRow',
    membermodcomment: host + 'membermodcomment',
    memberModPass: host + 'memberModPass',
    memberSet: host + 'memberSet?memberid=',
    memberModSet: host + 'memberModSet',
    memberdelcomment: host + 'memberdelcomment', //删除留言
    getUserinfo: domain + '/member/Login/QQlogin_h5', //QQ,wechat 登录
    getInfoList: host + 'GetInfoList', //常用问答
    searchJson: host + 'Searchjson', //搜索简易列表
    searchActivity: host + 'SearchActivity' //搜索详细列表
}