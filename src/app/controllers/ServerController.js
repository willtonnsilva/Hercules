class ServerController {
  manager (req, res) {
    res.render('serverManager')
  }
}

module.exports = new ServerController()
