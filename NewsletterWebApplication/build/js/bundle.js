/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

﻿;(function(angular) {
    angular.module('NewsletterFormApp',[]);
})(angular);

__webpack_require__(1);
__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

﻿;
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
            $scope.clearEmailField();

            alert(result);
        };

        $scope.clearEmailField = function () {
            $scope.emailAddress = "";
        }

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

﻿;
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


/***/ })
/******/ ]);