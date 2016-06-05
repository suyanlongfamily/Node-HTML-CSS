/**
 * Created by suyanlong on 2016/6/5.
 * 调用路由、服务模块。
 */
var route = require('./router');
var server = require('./server');

server.start(route.route);

