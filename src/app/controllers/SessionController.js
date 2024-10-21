const Mail = require("../services/MailService");
const {User} = require("../models");

class SessionController {
    async store(req, res) {
        try {
            const {email, password} = req.body;
            const user = User.findOne({where: {'email': email}})
                .then(function (doc) {
                    // doc.middleName = 'delano';
                    return doc.save();
                })
                .then(console.log)
                .catch(function (err) {
                    handleError(err);
                });
            console.log('user', user);
            if (!user) {
                return res.status(401).json({message: "User not found"});
            }
            if (!(await user.checkPassword(password))) {
                return res.status(401).json({message: "Incorrect password"});
            }
            await Mail.send({
                from: "Noreply <noreply@noreply.com>",
                to: `${user.name} <${user.email}>`,
                subject: "New access",
                text: "Hello, we have identified a new access to your account."
            });
            return res.json({
                user,
                token: user.generateToken()
            });
        } catch (e) {
            return res.json({'e': e.stack});
        }
    }
}

module.exports = new SessionController();
