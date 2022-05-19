const router = require('express').Router();
const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.getAll);
router.post('/', TaskController.create);
router.put('/', TaskController.edit);
router.delete('/:id', TaskController.exclude);
router.put('/status', TaskController.changeStatus);

module.exports = router;
