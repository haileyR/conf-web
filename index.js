/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

var bodyParser = require('body-parser');

// create a new express server
var app = express();


var cors = function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(cors);

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// get the app environment from Cloud Foundry

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var sql = require('mssql');

sql.connect("mssql://@mssql.ksea.org/kseadb_member").then(function(firstResponse) {
    // Query
    console.log(firstResponse);
    new sql.Request().query('select * from ukc_2016_abstracts').then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        // ... query error checks
    });

    // Stored Procedure

    new sql.Request()
    .input('input_parameter', sql.Int, value)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name').then(function(recordsets) {
        console.dir(recordsets);
    }).catch(function(err) {
        // ... execute error checks
    });
}).catch(function(err) {
    // ... connect error checks
});

app.listen(3000, function(){
  console.log('listening on *:3000');
});

