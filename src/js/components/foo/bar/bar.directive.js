'use strict';

export default function barDirective() {
    return {
        scope: {},
        replace: true,
        templateUrl: 'components/foo/bar/bar.view.html',
        controllerAs: 'bar',
        controller: function () {
            this.name = 'bar component';
        }
    };
};
