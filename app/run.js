run.$inject = ['$compileProvider','$httpProvider'];
function run( $compileProvider, $httpProvider ){
	var reg = /^\s*(https?|ftp|blob|mailto|chrome-extension):/;

	$compileProvider.aHrefSanitizationWhitelist( reg );
	$compileProvider.preAssignBindingsEnabled( true );

	$httpProvider.defaults.withCredentials = true;
}

module.exports = run;