const SHIVA = require("./handlers/Client");
const { TOKEN } = require("./settings/config");
require("ffmpeg-static");
const client = new SHIVA();
module.exports = client;

require("./Dashboard/server");

client.start(TOKEN);

// process.on("unhandledRejection", (reason, p) => {
//   console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
//   console.log(reason, p);
// });

// process.on("uncaughtException", (err, origin) => {
//   console.log(" [Error_Handling] :: Uncaught Exception/Catch");
//   console.log(err, origin);
// });

// process.on("uncaughtExceptionMonitor", (err, origin) => {
//   console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
//   console.log(err, origin);
// });

// process.on("multipleResolves", (type, promise, reason) => {
//   console.log(" [Error_Handling] :: Multiple Resolves");
//   console.log(type, promise, reason);
// });
