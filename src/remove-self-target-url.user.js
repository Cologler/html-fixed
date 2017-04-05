// ==UserScript==
// @name                   html-fixed: remove-self-target-url
// @namespace              https://github.com/cologler/html-fixed
// @version                1.0
// @description            remove href which target to self
// @description:zh-CN      移除指向自身的超链接
// @author                 cologler
// @include                *
// @grant                  none
// ==/UserScript==

(function() {
    'use strict';

    var mainLogic = function() {
        let cur = location.href;
        let as = document.querySelectorAll('a');
        for (var i = 0; i < as.length; i++) {
            let a = as[i];
            if (a.hasAttribute('href') && a.href == cur) {
                a.removeAttribute('href');
            }
        }
    };

    mainLogic();
})();
