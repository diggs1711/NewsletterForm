;
(function () {

    var formController = function ($scope, $http) {

        $scope.addNewsletter = function () {

            $.ajax({
                method: "POST",
                url: 'Newsletters/Create',
                data: {
                    Email: $scope.emailAddress,
                    HearAboutUs: $scope.hearAboutUs,
                    Reason: $scope.reason
                },
                success: function (data) {
                    $scope.formSuccessful(data);
                },
                error: function () {

                }
            });

        };

        $scope.formSuccessful = function (result) {
            console.log("Form Created!", result)
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
