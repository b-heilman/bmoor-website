var angular = require('angular'),
	subModules = [
		require('angular-ui-router'),
		require('oclazyload')		
	];

module.exports = angular.module( require('./info.js').name, subModules )
	.config( require('./routing.js') )
	.config( require('./routing.submodule1.js') )
	.config( require('./run.js') )
	.component( 'body', require('./body.component.js') )
	.component( 'coreFooter', require('./core/footer.component.js') )
	.component( 'coreHeader', require('./core/header.component.js') )
	.component( 'coreWelcome', require('./core/welcome.component.js') )
	.name;