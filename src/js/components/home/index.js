'use strict';
import homeService from './home.service.js';
import homeDirective from './home.directive.js';

let homeModule = angular.module('myApp.home', []);

homeModule.directive('home', homeDirective);
homeModule.factory('home', homeService);

export default homeModule;
