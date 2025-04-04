const WebSocket = require('ws');
const http = require('http');

// 创建 HTTP 服务器
const server = http.createServer();

// 创建 WebSocket 服务器，将其附加到 HTTP 服务器
const wss = new WebSocket.Server({ server });

// 监听连接事件
wss.on('connection', function connection(ws) {
  console.log('新的客户端已连接');

  // 监听消息事件
  ws.on('message', function incoming(message) {
    console.log('收到消息：', message.toString());
    
    // 发送消息回客户端
    ws.send('服务器收到消息：' + message);
  });

  // 发送欢迎消息
  ws.send('欢迎连接到WebSocket服务器！');
});

// 启动服务器，监听 8188 端口
server.listen(8188, () => {
  console.log('WebSocket 服务器运行在 ws://localhost:8188');
});



// const WebSocket = require('ws');
// const https = require('https');
// const fs = require('fs');

// // 读取证书文件
// const serverConfig = {
//   cert: fs.readFileSync('/data/workspace/SD/comfy-cert.pem'),
//   key: fs.readFileSync('/data/workspace/SD/comfy-key.pem')
// };

// // 创建 HTTPS 服务器
// const server = https.createServer(serverConfig);

// // 创建 WSS 服务器，将其附加到 HTTPS 服务器
// const wss = new WebSocket.Server({ server });

// // 监听连接事件
// wss.on('connection', function connection(ws) {
//   console.log('新的客户端已连接');

//   // 监听消息事件
//   ws.on('message', function incoming(message) {
//     console.log('收到消息：', message.toString());
    
//     // 发送消息回客户端
//     ws.send('服务器收到消息：' + message);
//   });

//   // 发送欢迎消息
//   ws.send('欢迎连接到WebSocket服务器！');
// });

// // 启动服务器，监听 8080 端口
// server.listen(8188, () => {
//   console.log('WSS 服务器运行在 wss://localhost:8188');
// });
