import 'jasmine';
import HashCode from '../src/';

describe('SinglyLinkedList', () => {
    it(`should return 0 for null values`, () => {
        expect(HashCode(null)).toEqual(0);
    });

    it(`should return 0 for function values`, () => {
        expect(HashCode((() => {}))).toEqual(0);
    });

    it(`should handle object values`, () => {
        expect(HashCode({
            foo: 'bar'
        })).toEqual(-1271284534);
    });
});
