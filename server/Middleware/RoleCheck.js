module.exports = function(req, res, next) {
  if(req.session.user.role == 'admin') {
    next()
  }
  else {
    //TODO get this to redirect instead of sending 404
    res.status(404).send('user not an admin')
  }
}
