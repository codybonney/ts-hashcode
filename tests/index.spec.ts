import 'jasmine';
import HashCode from '../src/';

describe('SinglyLinkedList', () => {
    it(`should return 0 for null values`, () => {
        expect(HashCode(null)).toEqual(0);
    });

    it(`should return 0 for function values`, () => {
        expect(HashCode((() => {}))).toEqual(0);
    });

    it(`should return 0 for undefined values`, () => {
        expect(HashCode(undefined)).toEqual(0);
    });

    it(`should handle boolean values`, () => {
        expect(HashCode(true)).toEqual(68280758);
        expect(HashCode(false)).toEqual(161908043);
    });

    it(`should handle empty object values`, () => {
        expect(HashCode({})).toEqual(-1023368385);
    });

    it(`should handle object values`, () => {
        expect(HashCode({
            foo: 'bar'
        })).toEqual(-1271284534);
    });

    it(`should handle object with inherited properties`, () => {
        class TestObject {
            foo: string;
            constructor() {
                this.foo = 'bar';
            }
        }
        TestObject.prototype = ({bar: 'baz'} as any);

        expect(HashCode(new TestObject())).toEqual(-1271284534);
    });


    it(`should handle deep object values`, () => {
        expect(HashCode({
            foo: {
                bar: {
                    hello: 'world'
                }
            }
        })).toEqual(-1783273289);
    });

    it(`should handle Date values`, () => {
        const date = new Date('July 20, 69 00:20:18 GMT+00:00');
        expect(HashCode(date)).toEqual(-15278150385);
    })
});
