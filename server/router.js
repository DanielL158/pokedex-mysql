const router = require('express').Router();
const controller = require('./controllers.js');

router
  .route('/')
  .get(controller.get)
  .post(controller.post)

router
  .route('/type')
  .get(controller.getType)

router
  .route('/:id')
  .patch(controller.update)
  .delete(controller.delete)

  module.exports = router;