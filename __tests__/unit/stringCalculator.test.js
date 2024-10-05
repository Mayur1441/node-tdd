const truncate = require("../utils/truncate");
const StringCalculatorService = require("../../src/app/services/StringCalculatorService");

describe("String Calculator", () => {
    beforeEach(async () => {
        await truncate();
    });

    it("should return 9", async () => {
        let string = ',1100sac$^&s-2cas!@)(cas3c&^%as4c)(&as';
        const response = await StringCalculatorService.stringCalculator(string);
        expect(response).toBe(9);
    });

    it("should return 0", async () => {
        const response = await StringCalculatorService.stringCalculator();
        expect(response).toBe(0);
    });

    it("should return 1", async () => {
        let string = '-1';
        const response = await StringCalculatorService.stringCalculator(string);
        expect(response).toBe(1);
    });

    it("should return 3", async () => {
        let string = '“//;\\n1;2”';
        const response = await StringCalculatorService.stringCalculator(string);
        expect(response).toBe(3);
    });
});
