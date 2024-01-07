import $ from '../core';

$.prototype.addAttribute = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        // if (!this[i].getAttribute(name)) {
        //     continue;
        // };
        this[i].setAttribute(name, value);
    }
    return this;
};
$.prototype.removeAttribute = function(name) {
    for (let i = 0; i < this.length; i++) {
        // if (!this[i].getAttribute(name)) {
        //     continue;
        // };
        this[i].removeAttribute(name);
    }
    return this;
};
$.prototype.toggleAttribute = function(name) {
    for (let i = 0; i < this.length; i++) {
        // if (!this[i].getAttribute(name)) {
        //     continue;
        // };
        this[i].toggleAttribute(name);
    }
    return this;
};
