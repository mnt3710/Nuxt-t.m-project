const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const mademailer = require('nodemailer')
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const adminEmail = functions.config().admin.email

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

const adminContents = (data) => {
  return `ホームページにお問い合わせがありました。`
}

exports.sendMail = functions.https.onCall(async (data, context) => {
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: 'ホームページお問い合せ',
    text: adminContents(data),
  }

  try {
    await mailTransport.sendMail(adminMail)
  } catch (e) {
    return e.massage
  }
})
