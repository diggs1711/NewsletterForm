;
(function () {

    var formController = function ($scope, $http) {

        $scope.addNewsletter = function () {

            if ($scope.hasFormBeenCompleted()) {
                $.ajax({
                    method: "POST",
                    url: 'Newsletters/Create',
                    data: {
                        Email: $scope.emailAddress,
                        HearAboutUs: $scope.hearAboutUs,
                        Reason: $scope.reason
                    },
                    success: function (result) {
                        $scope.formSuccessful(result);
                    },
                    error: function () {

                    }
                });
            } else {
                alert("Form not complete, please fill in all fields");
            }
           
        };

        $scope.hasFormBeenCompleted = function () {
            return $scope.emailAddress != "" && $scope.hearAboutUs != "";
        }

        $scope.formSuccessful = function (result) {
            alert(result);
            $scope.init();
            $scope.$applyAsync();
        }

        $scope.init = function () {
            $scope.emailAddress = "";
            $scope.hearAboutUs = "";
            $scope.reason = "";
        };

        $scope.init();
    };

    angular.module('NewsletterFormApp').controller('formController', ['$scope', formController]);
    module.exports = formController;

})();
