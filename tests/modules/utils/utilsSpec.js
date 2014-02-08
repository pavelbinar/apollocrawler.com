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


    describe('Module Utils', function () {
        var UtilsModule = null;

        beforeEach(function () {
            UtilsModule = require('../../../modules/utils');
        });

        it('Loads Utils module', function () {
            expect(UtilsModule).to.not.equal(null);
            expect(UtilsModule).to.not.equal(undefined);
        });

        it('Has \'loadConfig\' method', function () {
            expect(UtilsModule.loadConfig instanceof Function).to.equal(true);
        });

        it('Has \'setObjectProperty\' method', function () {
            expect(UtilsModule.setObjectProperty instanceof Function).to.equal(true);
        });

        it('setObjectProperty 1st level property', function () {
            var obj = {
                name: "tomas"
            };

            UtilsModule.setObjectProperty(obj, 'name', 'korczis');
            expect(obj.name).to.equal('korczis');
        });

        it('setObjectProperty 2nd level property', function () {
            var obj = {
                address: {
                    country: "Czech Republic"
                }
            };

            UtilsModule.setObjectProperty(obj, 'address.country', 'USA');
            expect(obj.address.country).to.equal('USA');
        });

        it('Has \'timestamp\' method', function () {
            expect(UtilsModule.timestamp instanceof Function).to.equal(true);
        });

        it('Has \'generateUUID\' method', function () {
            expect(UtilsModule.generateUUID instanceof Function).to.equal(true);
        });

        it('Has \'getPathNodes\' method', function () {
            expect(UtilsModule.getPathNodes instanceof Function).to.equal(true);
        });

        it('Has \'printFileTree\' method', function () {
            expect(UtilsModule.printFileTree instanceof Function).to.equal(true);
        });

        it('Has \'preprocessFile\' method', function () {
            expect(UtilsModule.preprocessFile instanceof Function).to.equal(true);
        });

        it('Has \'merge\' method', function () {
            expect(UtilsModule.merge instanceof Function).to.equal(true);
        });
    });
}());

