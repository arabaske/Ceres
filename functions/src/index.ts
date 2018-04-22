//import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as mailer from 'nodemailer';


admin.initializeApp();
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().mail.address;
const gmailPassword = functions.config().mail.password;
const mailTransport = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

function displayDate(date: NgbDateStruct): string{
    var result:string = '';

    result += date.year + '-' + date.month + '-' + date.day;

    return result;
}

interface NgbDateStruct {
    /**
     * The year, for example 2016
     */
    year: number;
  
    /**
     * The month, for example 1=Jan ... 12=Dec
     */
    month: number;
  
    /**
     * The day of month, starting at 1
     */
    day: number;
  }

// Sends an email confirmation when a user changes his mailing list subscription.
exports.newReservationMail = functions.firestore.document('/reservations/{documentId}')
            .onCreate(async (snap, context) => {

                const mailOptions = {
                    from: '"martinestuga.com" <noreply@martinestuga.com>',
                    to: gmailEmail,
                    subject: 'New reservation ' + context.params.documentId,
                    text: 'Reservation infos: \n' + 
                    'Client: ' + snap.data().firstName + ' ' + snap.data().LastName + '\n' +
                    'Email:' + snap.data().email + '\n' +
                    'Phone:' + snap.data().phone + '\n' +
                    '----------------------------------- \n' +
                    'FROM: ' + displayDate(snap.data().fromDate) + '\n' +
                    'TO: ' + displayDate(snap.data().toDate) + '\n' +
                    '----------------------------------- \n' +
                    'Additionals informations:' + '\n' + snap.data().additionalInformation 
                  };


                  return mailTransport.sendMail(mailOptions)
                  .then(() => console.log(`New email sent to:`,
                  mailOptions.to))
                  .catch((error) => console.error('There was an error while sending the email:', error));
            }
         );
