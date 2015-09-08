'use strict';

export default function btnDirective() {
    return {
        scope: {
            txt: '=',
            eventHandler: '&ngClick'
        },
        replace: true,
        templateUrl: 'components/common/btn/btn.view.html',
        controllerAs: 'btn',
        link: function (scope, element, attrs) {
        },
        controller: function () {
            if (!this.txt) this.txt = 'button text';
        }
    };
};
