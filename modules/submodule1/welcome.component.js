require('./welcome.scss');

module.exports = {
	controller: require('./welcome.controller.js'),
	controllerAs: 'welcome',
	template: require('./welcome.html')
};