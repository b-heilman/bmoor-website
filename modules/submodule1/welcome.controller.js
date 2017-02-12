class Module1Welcome {

	constructor( $scope ){
		$scope.youShouldNotDoThis = 'really';
		this.value = 'initial';
	}

	onClick(){
		this.value = 'clicked';
	}
}

Module1Welcome.$inject = [ '$scope' ];

module.exports = Module1Welcome;