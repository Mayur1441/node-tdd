class StringCalculatorService {
    stringCalculator(string = '0') {
        try {
            // console.log(string);
            return string.match(/\d+/g).reduce((a, b) => Number(a) + (Number(b) < 1000 ? Number(b) : 0), 0);
        } catch (e) {
            console.log('stringCalculator error', e);
            return 0;
        }
    }
}

module.exports = new StringCalculatorService();
