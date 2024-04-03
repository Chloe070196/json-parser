const isValid = require('../lib/inputChecker.js')

// unit tests
describe("inputChecker: ", () => {
    it("returns true if the input is a string starting and ending with a curly brace", () => {
        expect(isValid("{}")).toBeTrue()
        expect(isValid("{svrshbvhbelbvgovbrtbhntrhb}")).toBeTrue()
        expect(isValid("{ message : hello }")).toBeTrue()
    })
    it("returns false if the input is invalid", () => {
        expect(isValid()).toBeFalse()
        expect(isValid("")).toBeFalse()
        expect(isValid("{svrshbvhbelbvgovbrtbhntrhb")).toBeFalse()
        expect(isValid("{ message : hello } sggt")).toBeFalse()
    })
})