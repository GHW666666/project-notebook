'use strict';
const Controller = require('egg').Controller;

class PostController extends Controller {
  async index() {
    //this 指向当前控制器实例=request+response
    const { ctx } = this;
    ctx.body = 'post';
  }

}
module.exports = PostController;