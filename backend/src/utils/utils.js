import bcrypt from 'bcryptjs';

export function getAttributeValue(object, path, defaultValue = undefined) {
    try {
        const prop = getDescendantProp(object, path);
        if(!prop) return defaultValue;
        return prop;
    } catch (error) {
        return defaultValue;
    }
}

function getDescendantProp(object, path) {
    const array = path.split('.');
    while(array.length) object = object[array.shift()];
    return object;
}

export async function generateHash(value) {
    return await bcrypt.hash(value, 8);
}