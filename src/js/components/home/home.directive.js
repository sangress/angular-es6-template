'use strict';

export default function homeDirective() {
    return {
        replace: true,
        scope: {},
        templateUrl: 'components/home/home.view.html',
        controllerAs: 'home',
        link: function homeDirectiveLink(scope, element, attrs) {

        },
        controller: function homeDirectiveContoller($state) {
            this.greet = 'From home';
        }
    }
};
