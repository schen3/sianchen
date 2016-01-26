(function() {
    'use strict';

    angular.module('main')
        .controller('LoginCtrl', ['$scope', '$http', 'LoginService','$sce',
            function(scope, $http, LoginService,$sce) {
                scope.signup = function(user) {
                    $http.post('/api/login', user).success(function(user) {
                        scope.username = user.name;
                    });
                }

                scope.login = function(user) {
                    user.isLogin = true;
                    $http.post('/api/login', user).success(function(info) {
                        if (info.status) {
                            LoginService.loginModal.close({
                                username: user.name
                            });
                            scope.username = user.name;

                        }else{ //TODO: show err ms in login modal
                            scope.errmsg=$sce.trustAsHtml('<i>login fail:'+(info.err || 'unknow error')+'</i>')
                        }
                    });
                };


            }
        ])

})();
