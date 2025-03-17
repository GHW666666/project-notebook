//sql 服务
'use strict'
const Service = require('egg').Service
class HomeService extends Service {
    async user() {
        return {
            name: 'egg',
            age: 18,
        }
    }
}
module.exports = HomeService;