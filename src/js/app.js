'use strict';

import util from './util.js';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myAppServices from './common/services/index.js';
import myAppCommonComponents from './components/common/index.js';
import homeModule from './components/home/index.js';
import fooModule from './components/foo/index.js';


let myAppModule = angular.module('myApp', [
    'ui.router',
    'myApp.home',
    'myApp.foo',
    'templates',
    'myApp.common.services',
    'myApp.common.directives'
]).config(($stateProvider, $urlRouterProvider) => {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home></home>',
            onEnter: function () {
            },
            onExit: function () {
            }
        })
        .state('foo', {
            url: '/foo',
            template: '<foo></foo>',
            onEnter: function () {
            }
        });
});

export default myAppModule;
