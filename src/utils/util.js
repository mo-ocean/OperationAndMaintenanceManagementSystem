let util = {}
/**
 * @description 获得num位随机字符串
 * @param num 字符串位数
 */
util.getRandomString = function (num) {
    var x = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    var tmp = "";
    for (var i = 0; i < num; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    };
    return tmp
}
/**
 * @description 时间格式改为 YYYY-MM-DD hh:mm:ss
 */
util.formatDate = function (date) {
    let _date = date ? new Date(date) : new Date()
    return _date.getFullYear() + '-' + (_date.getMonth() + 1) + '-' + _date.getDate() + ' ' + _date.getHours() + ':' + _date.getMinutes() + ':' + _date.getSeconds();
}

export default util