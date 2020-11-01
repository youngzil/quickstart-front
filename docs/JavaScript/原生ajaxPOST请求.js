var data = {//这种格式是需要转成jsonstring的
  action: action,
  diyid: diyid,
  do: _do,
  dede_fields: dede_fields,
  dede_fieldshash: dede_fieldshash,
  city: escape(city),
  area: area,
  model: escape(room + sitting + bathroom + kitchen + balcony),
  phone: phone
}
var data = 'action=' + action + '&do=' + _do + '&dede_fields=' + dede_fields
    + '&dede_fieldshash=' + dede_fieldshash + '&city=' + city + '&area=' + area
    + '&diyid=' + diyid + '&model=' + room + sitting + bathroom + kitchen
    + balcony + '&phone=' + phone;

var XHR = null;
if (window.XMLHttpRequest) {
  // 非IE内核
  XHR = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE内核,这里早期IE的版本写法不同,具体可以查询下
  XHR = new ActiveXObject("Microsoft.XMLHTTP");
} else {
  XHR = null;
}

if (XHR) {
  XHR.open("POST", "../plus/diy.php", true);
  XHR.onreadystatechange = function () {
    // readyState值说明
    // 0,初始化,XHR对象已经创建,还未执行open
    // 1,载入,已经调用open方法,但是还没发送请求
    // 2,载入完成,请求已经发送完成
    // 3,交互,可以接收到部分数据

    // status值说明
    // 200:成功
    // 404:没有发现文件、查询或URl
    // 500:服务器产生内部错误
    if (XHR.readyState == 4 && XHR.status == 200) {
      // 这里可以对返回的内容做处理
      // 一般会返回JSON或XML数据格式
      console.log(XHR.responseText);
      // 主动释放,JS本身也会回收的
      XHR = null;
    }
  };
  // XHR.setRequestHeader("Content-type","application/json");
  XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // XHR.send(JSON.stringify(data));  //如果是对象格式的数据就要转换成jsonstring
  XHR.send(data);
}


