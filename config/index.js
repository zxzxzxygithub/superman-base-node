/**
 * Created by xiaobxia on 2017/6/30.
 */
const path = require('path');
module.exports = {
  project: {
    // projectName: "your-business"
    projectName: "codi-admin"
  },
  server: {
    debug: true,
    port: 8080,
    session_secret: 'codi',
    root: path.resolve(__dirname, '../')
  },
  mysql: {
    host: "localhost",
    user: "root",
    password: "chenlingjie214",
    database: "test",
    connectionLimit: 10,
    //使返回的date为字符串
    dateStrings: true
  }
};
