module.exports = {
    setDate: function (date) {
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        return year + '-' + month + '-' + day
    },
    formatDate: function (date) {
        let d = this.setDate(new Date(parseInt(date.replace("/Date(", "").replace(")/", ""))));
        return d;
    },
    // 去掉所有的html标记
    delHtmlTag(str) {
        var strH = str.replace(/<[^>]+>/g, "");
        var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
        strH = strH.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
        return strH;
    },
    GetQueryString: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);return null;
    },
    formatSymbol(str) {
        let strs;
        strs = str.replace('，', ',')
        return strs.split(',');
    },
    risklevel(val) {
        // 风险等级
        let risklevel;
        switch (val) {
            case 1:
                risklevel = '风险极低'
                break;

            case 2:
                risklevel = '风险偏低'
                break;
            case 3:
                risklevel = '风险一般'
                break;
            case 4:
                risklevel = '风险偏高'
                break;
            case 5:
                risklevel = '风险极高'
                break;
        }
        return risklevel;
    },
    investType(val) {
        // 风险等级
        let investType;
        switch (val) {
            case 1:
                investType = '风控分'
                break;

            case 2:
                investType = '黄金类产品'
                break;
            case 3:
                investType = '基金类产品'
                break;
            case 4:
                investType = '固收类产品'
                break;
            case 5:
                investType = '风险极高'
            default:
                investType = '其他类产品'
        }
        return investType;
    },
}