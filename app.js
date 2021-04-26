//. app.js
var express = require( 'express' ),
    { exec } = require( 'child_process' ),
    app = express();
var command = '/home/dotnsf/src/hello/hello';

app.use( express.Router() );

app.get( '/', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  
  exec( command, function( err, result, stderr ){
    if( err ){
      res.status( 400 );
      res.write( err.message );
      res.end();
    }else if( stderr ){
      res.status( 400 );
      res.write( stderr );
      res.end();
    }else{
      res.write( result );
      res.end();
    }
  });
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starging on " + port + " ..." );



