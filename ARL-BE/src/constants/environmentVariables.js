require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    METHODS: process.env.METHODS,
    ORIGIN: process.env.ORIGIN,
    LOG_DIRECTORY: process.env.LOG_DIRECTORY,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    TO_EMAIL: process.env.TO_EMAIL,
    FROM_EMAIL: process.env.FROM_EMAIL,
}
