const express = require('express')
const routes = express.Router()
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const userController = require('./app/controllers/UserController')
const sessionController = require('./app/controllers/SessionController')
const dashboardController = require('./app/controllers/DashboardController')
const fileController = require('./app/controllers/FileController')
const serverController = require('./app/controllers/ServerController')

routes.use('/app', authMiddleware)
routes.use((req, res, next) => {
  res.locals.flashSucess = req.flash('sucess')
  res.locals.flashError = req.flash('error')
  return next()
})

routes.get('/app/createUser', userController.create)
routes.post('/app/createUser', upload.single('avatar'), userController.post)
routes.get('/', guestMiddleware, sessionController.create)
routes.post('/', sessionController.login)
routes.get('/app/dashboard', dashboardController.index)
routes.get('/app/logout', sessionController.destroy)
routes.get('/file/:file', fileController.show)
routes.get('/app/serverManager', serverController.manager)

module.exports = routes
