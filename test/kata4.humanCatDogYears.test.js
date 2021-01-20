const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("Returns an array of three numbers human cat and dog when passed", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
        expect(humanCatDogYears(8)).toEqual([8, 48, 54]);
    });
});


// Look Ma, no handlebars!!!
