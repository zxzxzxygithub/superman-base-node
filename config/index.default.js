/**
 * Created by xiaobxia on 2017/7/26.
 */
const path = require('path');
module.exports = {
  project: {
    //务必修改
    projectName: ""
  },
  server: {
    //默认
    debug: true,
    root: path.resolve(__dirname, '../'),
    port: 8080,
    //务必修改
    session_secret: "secret"
  },
  //mysql配置
  mysql: {
    //默认
    connectionLimit: 10,
    dateStrings: true,
    //务必修改
    host: "",
    user: "",
    password: "",
    database: "",

  },
  logger: {
    //默认
    dir: path.resolve(__dirname, '../logs/'),
    fileName: 'cheese.log',
    debugLogLevel: 'ALL',
    productLogLevel: 'ERROR'
  },
  qiniu: {
    //例子：华南就填写'Zone_z2'
    zone: ''
  }
};
