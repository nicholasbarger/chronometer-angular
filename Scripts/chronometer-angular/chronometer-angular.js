angular.module('chronometer', [])
    .directive('chronometer', function () {
        return {
            template: function (elem, attrs) {
                return '<input type="text" id="' + attrs.id + '_inner" ng-model="model" class="chronometer" />'
            },
            scope: {
                date: '=',
                inputformat: '@',
                outputformat: '@',
                includetime: '@',
                model: '='
            },
            link: function (scope, elem, attrs) {
                var options = {
                    inputFormat: attrs.inputformat,
                    outputFormat: attrs.outputformat,
                    includeTime: (attrs.includetime === "true")
                };

                scope[attrs.id] = $('#' + attrs.id + '_inner').chronometer(scope.date, options);

                document.addEventListener(attrs.id + "_inner_updated", function (e) {
                    console.log(e);
                    scope.model = e.val;
                    scope.$apply(); 
                });
            }
    }
});