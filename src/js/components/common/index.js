'use strict';
import btnDirective from './btn/btn.directive.js';

let myAppCommonDirectives = angular.module('myApp.common.directives', []);

myAppCommonDirectives.directive('btn', btnDirective);

export default myAppCommonDirectives;
