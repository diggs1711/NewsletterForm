;
(function () {

    var formController = function ($scope, $http) {

        $scope.addNewsletter = function () {

            if ($scope.hasFormBeenCompleted()) {

                $http({
                    method: "POST",
                    url: 'Newsletters/Create',
                    data: {
                        Email: $scope.emailAddress,
                        HearAboutUs: $scope.hearAboutUs,
                        Reason: $scope.reason
                    }
                }).then(function success(resp) {
                  
                    if (resp.data === "Form Successful") {
                        $scope.formSuccessful(resp.data);
                    } else if (resp.data === "Email already in use, please use another") {
                        $scope.emailInUse(resp.data);
                    }
                    
                }, function error(resp) {

                });

            } else {
                alert("Form not complete, please fill in all fields");
            }

        };

        $scope.hasFormBeenCompleted = function () {
            return $scope.emailAddress != "" && $scope.hearAboutUs != "";
        }

        $scope.formSuccessful = function (result) {
            $scope.reInit();
            alert(result);
        };

        $scope.emailInUse = function (result) {
            alert(result);
        };

        $scope.init = function () {
            $scope.emailAddress = "";
            $scope.hearAboutUs = "";
            $scope.reason = "";
        };

        $scope.reInit = function () {
            $scope.init();
            $scope.$applyAsync();
        };

        $scope.init();
    };

    angular.module('NewsletterFormApp').controller('formController', ['$scope', "$http", formController]);
    module.exports = formController;

})();
