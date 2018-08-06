var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./mail.config')

smtpTransport = nodemailer.createTransport(smtpTransport({
    host: config.email.host,
    port: config.email.port,
    secureConnection: config.email.secureConnection, // 使用 SSL
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
const sendMail = (recipient, subject, html) => {
    smtpTransport.sendMail({
        from: config.email.user,
        to: recipient,
        subject: subject,
        html: html
    }, (error, response) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('发送成功')
    });
}

module.exports = sendMail;