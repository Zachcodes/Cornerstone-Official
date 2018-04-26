const app = require('../server.js');

module.exports = {
  //Get All Clients
  GetAllClients(req, res) {
    var db = app.get('db');

    db.getClients().then((dbRes, err) => {
      if(dbRes) {
        res.send(dbRes)
      } else {
        res.send(err)
      }
    })
  },

  //Get All AHJ
  GetAllAHJ(req, res) {
    var db = app.get('db');

    db.getAHJ().then((dbRes, err) => {
      if(dbRes) {
        res.send(dbRes)
      } else {
        res.send(err)
      }
    })
  },

  //Get All Projects
  GetAllProjects(req, res) {
    var db = app.get('db');

    db.getProjects().then((dbRes, err) => {
      if(dbRes) {
        res.send(dbRes)
      } else {
        res.send(err)
      }
    })
  },

  roleCheck(req, res) {
    if(req.session.user.role == 'admin') {
      res.status(200).send('user is admin');
    }
    else {
      res.status(404).send('user not an admin');
    }
  }

}
