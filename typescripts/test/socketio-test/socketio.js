// const { io } = require("socket.io-client");

// // 创建 Socket.IO 客户端实例
// const socket = io("https://zombie202.devcloud.woa.com:8188/", {
//     origin: "https://zombie202.devcloud.woa.com:8188/",
//     autoConnect: false,
//     transports: ["websocket"],
//     path: "/sd-ppp/",
//     query: {
//         api_level: "410"
//     },
//     rejectUnauthorized: false
// });

// // 监听连接成功事件
// socket.on("connect", () => {
//     console.log("Connected to server");
//     console.log("Socket ID:", socket.id);
    
//     // 发送消息到服务器
//     socket.emit("hello", "Hello from client!");
// });

// // 监听服务器发来的消息
// socket.on("welcome", (data) => {
//     console.log("Received message from server:", data);
// });

// // 监听连接错误
// socket.on("connect_error", (error) => {
//     console.log("Connection error:", error);
// });

// // 监听断开连接事件
// socket.on("disconnect", (reason) => {
//     console.log("Disconnected from server:", reason);
// });

// socket.connect()