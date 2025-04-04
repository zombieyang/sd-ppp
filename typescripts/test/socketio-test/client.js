const WebSocket = require('ws');

// 创建 WebSocket 客户端连接
// const ws = new WebSocket('wss://zombie202.devcloud.woa.com:8188/ws?clientId=d978c718029f4761a17d643b9730a99c', {
//   rejectUnauthorized: false
// });
const ws = new WebSocket('wss://zombie202.devcloud.woa.com:8080', {
    rejectUnauthorized: false
});

// 连接打开时的处理
ws.on('open', function open() {
  console.log('已连接到服务器');
  
  // 发送消息到服务器
  ws.send('你好，服务器！');
});

// 接收消息的处理
ws.on('message', function incoming(message) {
  console.log('收到服务器消息：', message.toString());
});

// 错误处理
ws.on('error', function error(error) {
  console.error('WebSocket 错误：', error);
});

// 连接关闭的处理
ws.on('close', function close() {
  console.log('连接已关闭');
});



// let ws = new WebSocket('https://zombie202.devcloud.woa.com/')

// ws.onopen = function (e) {
// 	console.log('Open: ',e);
// };

// ws.onmessage = function (e) {
// 	console.log("From Server:" + e);
// };

// ws.onerror = function (e) {
// 	console.log('Error: ', e);
// };