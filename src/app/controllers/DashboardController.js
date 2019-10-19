class DashboardController {
  async index (req, res) {
    const containers = [
      {
        path: '/home/wiltonsilva/workspace/environment/servers',
        alias: 'TomCat-1',
        Status: 'stop',
        alocatedIssue: 'SW-1',
        legalText: 'Teste de subida do tomcat'
      }
    ]
    res.render('dashboard', { containers })
  }
}

module.exports = new DashboardController()
