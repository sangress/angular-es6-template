'use strict';

import fooDirective from './foo.directive.js';
import barDirective from './bar/bar.directive.js';

let fooModule = angular.module('myApp.foo', []);

fooModule.directive('foo', fooDirective);
fooModule.directive('bar', barDirective);

export default fooModule;
