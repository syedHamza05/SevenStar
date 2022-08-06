const router = require('express').Router()
const controllers = require('../controllers/controllers')



router.post('/task', controllers.Task)
router.put('/task/:id', controllers.updateTask)
router.get('/task', controllers.getTask)
router.get('/task/:id', controllers.getOneTask)
router.get('/task/search/:key', controllers.getByTitle)
router.delete('/task/:id', controllers.removeTask)
router.delete('/task', controllers.removeManyTask)


module.exports= router