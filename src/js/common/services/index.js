'use strict';

import notifyService from './notify.service.js';

let myAppServices = angular.module('myApp.common.services', []);

myAppServices.factory('notify', ['$window', notifyService]);

export default myAppServices;
