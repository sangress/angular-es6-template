'use strict';

export default function fooDirective() {
      return {
          scope: {},
          replace: true,
          templateUrl: 'components/foo/foo.view.html',
          controllerAs: 'foo',
          controller: function () {
              this.name = 'foo component';
          }
      };
};
