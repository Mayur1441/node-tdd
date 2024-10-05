const StringCalculatorService = require("../services/StringCalculatorService");

class DashboardController {
    index(req, res) {
        return res.status(200).send();
    }

    stringCalculator(req, res) {
        // console.log('req.params.stringText', req.body.stringText);
        return res.status(200).send({"sum": StringCalculatorService.stringCalculator(req.body.stringText)});
    }
}

module.exports = new DashboardController();
