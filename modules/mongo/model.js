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

(function() {
    'use strict';

    if (typeof define !== 'function') {
        var define = require('amdefine')(module);
    }

    define(['events', 'mongoose', 'mongoose-times', 'util'], function(events, mongoose, timestamps, util) {
        var exports = module.exports = function Model(mongo) {
            this.mongo = mongo;
        };

        util.inherits(exports, events.EventEmitter);

        exports.prototype.mongo = null;

        exports.prototype.schema = null;

        exports.prototype.wirePlugin = function(schema, plugin) {
            var p = require(plugin.path);
            schema.plugin(p, plugin.options);

        };

        exports.declare = function(name, schema) {
            /**
             * Client Schema
             */
            var objectSchema = new  mongoose.Schema(schema);

            objectSchema.plugin(timestamps, {
                created: "createdAt",
                lastUpdated: "updatedAt"
            });

            mongoose.model(name, objectSchema);

            this.schema = objectSchema;

            return this.schema;
        };
    });

})();
