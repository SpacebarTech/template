const path    = require( 'path' );

require( 'apprequire' )( __dirname );

const project = appRequire( '../../package.json' );

module.exports = {
	entry  : './public/js/feedback.js',
	mode   : 'development',
	output : {
		filename : 'bundle.js',
		path     : path.resolve( __dirname, `../../dist/${project.version}` ),
	}
};
