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

    var child_process = require('child_process'),
        chai = require('chai'),
        expect = chai.expect;


    describe('Module Config', function () {
        var CoreModule = null;
        var ConfigModule = null;
        var configModule = null;

        beforeEach(function () {
            CoreModule = require('../../../modules/core');

            ConfigModule = require('../../../modules/config');
            configModule = new ConfigModule();
        });

        it('Loads module', function () {
            expect(ConfigModule).to.not.equal(null);
            expect(ConfigModule).to.not.equal(undefined);
        });

        it('Creates Instance', function () {
            expect(configModule).to.not.equal(null);
            expect(configModule).to.not.equal(undefined);
        });

        it('Is subclass of CoreModule', function () {
            expect(configModule instanceof CoreModule).to.equal(true);
        });

        it('Is subclass of ConfigModule', function () {
            expect(configModule instanceof ConfigModule).to.equal(true);
        });
    });
}());

