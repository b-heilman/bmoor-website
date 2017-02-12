var subModules = [];

module.exports = angular.module( require('./info.js').name, subModules )
	.component( 'submodule1Welcome', require('./welcome.component.js') )
	.name;