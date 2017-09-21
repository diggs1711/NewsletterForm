;
(function () {

	var formInput = function () {

		return {
			templateUrl: './Components/Form/form.html',
			restrict: 'E',
			controller: 'formController'
		};

	};

	angular.module('NewsletterFormApp').directive('formInput', formInput);
	module.exports = formInput;
})();
