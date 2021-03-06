'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/add', controller.home.add);

  // socket.io
  io.of('/').route('exchange', io.controller.nsp.exchange);
};
