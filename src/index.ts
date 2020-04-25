import typeOf from 'typeof-util';

/**
 * Generate a HashCode for a given string
 * @param value
 */
const HashCodeFromString = (value: string): number => {
    let result = 0;

    for (let i = 0; i < value.length; i++) {
        result = (((result << 5) - result) + value.charCodeAt(i)) & 0xFFFFFFFF;
    }

    return result;
};

/**
 * Generate a HashCode for a given object
 * @param value
 */
const HashCodeFromObject = (value: object): number => {
    if (typeOf((value as Date).getTime) === 'function') {
        return (value as Date).getTime();
    }

    let result = 0;
    for (let property in value) {
        if (Object.prototype.hasOwnProperty.call(value, property)) {
            result += HashCodeFromString(property + HashCode(value[property]))
        }
    }

    return result;
};

/**
 * Generate a HashCode for a given value
 * @param value
 */
const HashCode = (value: any): number => {
    const type = typeOf(value);

    if (type === 'string' || type === 'number' || type === 'boolean') {
        return HashCodeFromString(value.toString())
             + HashCodeFromString(type);
    } else if (type === 'object' || type === 'array') {
        return HashCodeFromObject(value as object)
             + HashCodeFromString(type);
    } else {
        return 0;
    }
};

export default HashCode;
