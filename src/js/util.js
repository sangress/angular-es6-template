'use strict';

Element.prototype.addClass = function(className) {
    if (this.classList)
        this.classList.add(className);
    else
        this.className += ' ' + className;

    return this;
};

Element.prototype.removeClass = function (className) {
    if (this.classList)
        this.classList.remove(className);
    else
        this.className = this.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

