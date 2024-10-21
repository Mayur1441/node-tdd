const StringCalculatorService = require("../services/StringCalculatorService");

class DashboardController {
    index(req, res) {
        return res.status(200).send();
    }

    stringCalculator(req, res) {
        try {
            return res.status(200).send(StringCalculatorService.stringCalculator(req.params.str ? req.params.str : null));
        } catch (e) {
            return res.status(400).send({"error": e.stack});
        }
    }
}

module.exports = new DashboardController();
