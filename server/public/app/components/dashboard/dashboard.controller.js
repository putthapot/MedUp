'use strict';

class DashboardController {
  constructor($state, $scope, AuthFactory) {
    this.scope = $scope;
    this.scope.name = 'dashboard';
    this.scope.state = $state;
    this.scope.state.go('dashboard.splash');
    this.scope.hasToken = AuthFactory.hasToken;
    console.log("Kayla" + AuthFactory.hasToken());
  }

}

export default DashboardController;
