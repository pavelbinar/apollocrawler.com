// Copyright, 2013-2014, by Tomas Korcak. <korczis@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

(function () {
    'use strict';

    if (typeof define !== 'function') {
        var define = require('amdefine')(module);
    }

    define(['../core', 'deferred', 'util'], function(core, deferred, util) {
        /**
         * sockets.io wrapper
         * @type {Sockets}
         */
        var exports = module.exports = function Sockets(config) {
            this.config = config;
        };

        /**
         * Config to be used
         * @type {object}
         */
        exports.prototype.config = null;

        /**
         * Application to be used
         * @type {object}
         */
        exports.prototype.app = null;

        /**
         * Initializes Mongo wrapper
         * @returns {*} Promise
         */
        exports.prototype.initialize = function (app) {
            var d = deferred();

            this.app = app;

            var socketOptions = {
                log: this.config.verbose
            };

            this.io = require('socket.io').listen(this.app.server, socketOptions);

            var self = this;

            this.io.sockets.on('connection', function (socket) {
                socket.on('msg', function (data) {
                    // TODO: Process here
                });
            });

            return deferred(this);
        };
    });

}());