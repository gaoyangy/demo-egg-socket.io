'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home', {egg: 1111111});
  };
  async add() {
    this.ctx.body = {
      add: 111111
    }
  }
}

module.exports = HomeController;
