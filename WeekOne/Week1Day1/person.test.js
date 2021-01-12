const { expect } = require('@jest/globals');
const person = require('./person'); /* specifies what file this test would be focused on */
const archieWindsor = require('./person')

describe('person', () => {

    test('check person', () => {
        expect(person.name).toEqual('testPerson');
      });

});

describe('archieWindsor', () => {

    test('check Windsor', () => {
        expect(archieWindsor.name).toEqual('Archie')
      });

});