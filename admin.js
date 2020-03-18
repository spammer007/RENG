const express = require('express');
const router = express.Router();

var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    // ReplSetServers = require('mongodb').ReplSetServers,
    // ObjectID = require('mongodb').ObjectID,
    // Binary = require('mongodb').Binary,
    // GridStore = require('mongodb').GridStore,
    // Grid = require('mongodb').Grid,
    // Code = require('mongodb').Code,
    // BSON = require('mongodb').pure().BSON,
    assert = require('assert');

  // Set up the connection to the local db
  var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});

  // Open the connection to the server
  mongoclient.open(function(err, mongoclient) {
    // Get the first db and do an update document on it
    var db = mongoclient.db("admin");
    db.collection('user').insert({a:1}, {b:1}, {upsert:true}, function(err, result) {
      assert.equal(null, err);
      assert.equal(1, result);
    });
  });

router.get('/user/:id', (req, res) => {
  return res.send({ data: {user_id: +req.params.id}, status: { code: 1 } })
});

router.post('/user', (req, res) => {
  if(!req.body.name) return res.status(404).send({status: { code: 404 }});
  return res.send({ data: [], status: { code: 1 } });
});

module.exports = router;