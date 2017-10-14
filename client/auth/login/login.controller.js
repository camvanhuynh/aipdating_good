// Controller for Login view
angular.module('aipdatingApp')
  .controller('LoginCtrl', function($location, authentication) {
    var vm = this;
    vm.formLogin = {};

    vm.submit = function () {
      authentication.login(vm.formLogin).then(
        function() {
          $location.path('profile');
        },
        function (err) {
          alert(err);
        }
      );
    };
  });
