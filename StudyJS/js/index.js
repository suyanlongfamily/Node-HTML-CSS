/**
 * Created by suyanlong on 2016/6/5.
 * 1、调用路由、服务模块。
 * 2、这样就让我感觉到做静态页面的请求。
 */
var route = require('./router');
var server = require('./server');
server.start(route.route);
