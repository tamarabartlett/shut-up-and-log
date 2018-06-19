var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/skydives';
var db = pgp(connectionString);

function getAllJumps(req, res, next) {
  db.any('select * from jumps')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL jumps'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getJump(req, res, next) {
  var jumpID = parseInt(req.params.id);
  db.one('select * from jumps where id = $1', jumpID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE jump'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addJump(req, res, next) {
  req.body.jump_number = parseInt(req.body.jump_number);
  req.body.altitude = parseInt(req.body.altitude);
  db.none('insert into jumps(jump_number, jump_date, type, altitude, location)' +
      'values(${jump_number}, ${jump_date}, ${type}, ${altitude}, ${location})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one jump'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateJump(req, res, next) {
  console.log(req.body);
  db.none('update jumps set jump_number=$1, jump_date=$2, type=$3, altitude=$4, location=$5 where id=$6',
    [parseInt(req.body.jump_number), req.body.jump_date, req.body.type, parseInt(req.body.altitude),
      req.body.location, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated jump'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeJump(req, res, next) {
  var jumpID = parseInt(req.params.id);
  db.result('delete from jumps where id = $1', jumpID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} jump`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllJumps: getAllJumps,
  getJump: getJump,
  addJump: addJump,
  updateJump: updateJump,
  removeJump: removeJump
};
