const structuralCharsMap = {
    "{": { "name": "beginObject", "enum": 1 },
    "}": { "name": "endObject", "enum": 2 },
    "[": { "name": "beginArray", "enum": 3 },
    "]": { "name": "endArray", "enum": 4 },
    ":": { "name": "nameSeparator", "enum": 5 },
    ",": { "name": "lineSeperator", "enum": 6 },
}

const chunkTypeMap = {
    "string": { "name": "string", "enum": 7 },
    "number": { "name": "number", "enum": 8 },
}

const litteralsMap = {
    "true" : { "name": "true", "enum": 9 },
    "false" : { "name": "false", "enum": 10 },
    "null" : { "name": "null", "enum": 11 },
}

function assignTokenEnum(chunk) {
    const structuralChars = Object.keys(structuralCharsMap)
    const litterals = Object.keys(litteralsMap)
    if (structuralChars.includes(chunk)) {
        return structuralCharsMap[chunk].enum
    }
    if (litterals.includes(chunk)) {
        return litteralsMap[chunk].enum
    }
    if (Number(chunk)) {
        return chunkTypeMap.number.enum
    }
    return chunkTypeMap.string.enum
    
}

function tokenize(dataStr) {
    dataStr.replace(/\n/g, "")
    const arr = dataStr.split('"')
    const tokens = arr.map(chunk => ({enum: assignTokenEnum(chunk), value: chunk}))
    return tokens
}

module.exports = tokenize