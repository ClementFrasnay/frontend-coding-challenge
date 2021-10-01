const createTournament = require('./createTournament');

module.exports = (req, _res, next) => {
  if (req.method === 'POST') {
    console.log('req : ', req.body);
    req.body = createTournament(req.body.name);
  }

  next();
};
