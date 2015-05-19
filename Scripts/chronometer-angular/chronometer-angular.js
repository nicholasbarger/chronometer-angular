angular.module('chronometer', [])
    .directive('chronometer', function () {
        return {
            restrict: 'E',
            require: '?ngModel',
            scope: {
                id: '=',
                inputformat: '@',
                outputformat: '@',
                includetime: '@'
            },
            template: function (elem, attrs) {
                return '<input type="text" id="' + attrs.id + '_inner" class="chronometer form-control" />';
            },
            link: function (scope, elem, attrs, ngModelCtrl) {
                var options = {
                    inputFormat: attrs.inputformat,
                    outputFormat: attrs.outputformat,
                    includeTime: (attrs.includetime === "true")
                };

                scope[attrs.id] = $('#' + attrs.id + '_inner').chronometer(ngModelCtrl.$modelValue, options);

                document.addEventListener(attrs.id + "_inner_updated", function (e) {
                    console.log(e);
                    scope.model = e.val;
                    scope.$apply();
                });
            }
        }
    });