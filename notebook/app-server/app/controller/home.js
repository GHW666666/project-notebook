const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.query;
    ctx.body = `hi, egg${id}`;

  }
  async user() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = `hi, egg${id}`
  }
  async add() {
    const { ctx } = this;
    //请求体 post请求
    const { title } = ctx.request.body;
    const {name,age}=await ctx.service.home.user()
    ctx.body = {
      title,
      name,
      age
    }
  }
}

module.exports = HomeController;
