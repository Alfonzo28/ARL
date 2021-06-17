const {
    SEND_CONTACT_INFORMATION
} = require('../constants/endpointConstants');
const {
    SENDGRID_API_KEY,
    TO_EMAIL,
    FROM_EMAIL,
} = require('../constants/environmentVariables');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

module.exports = (app) => {
    app.post(SEND_CONTACT_INFORMATION, async (req, res) => {
        const { firstName, lastName, phoneNumber, message } = req.body
        const msg = {
            to: TO_EMAIL,
            from: FROM_EMAIL,
            subject: 'Portfolio Contact Info',
            text: firstName + ' ' + lastName + ', ' + message,
            html: '<strong>First Name: </strong>' + firstName + ' <br> <strong>Last Name: </strong>' + lastName + ' <br> <strong>Phone number: </strong>' + phoneNumber + ' <br> <strong>Message: </strong>' + message,
          };
          
          sgMail
            .send(msg)
            .then(() => {
              res.status(200).send({ message: 'Contact information sent' });
            }, error => {
              console.error(error);
          
              if (error.response) {
                console.error(error.response.body)
              }

              res.status(200).send({ message: 'Could not send contact information sent' });
        });
    });
}