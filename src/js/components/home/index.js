'use strict';

import homeDirective from './home.directive.js';

let homeModule = angular.module('myApp.home', []);

homeModule.directive('home', homeDirective);

export default homeModule;
