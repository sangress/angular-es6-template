'use strict';

import fooDirective from './foo.directive.js';

let fooModule = angular.module('myApp.foo', []);

fooModule.directive('foo', fooDirective);

export default fooModule;
