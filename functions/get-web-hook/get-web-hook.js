// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    console.log('hello world', event);

    const subject = event.queryStringParameters.name || 'World';

    let VERIFY_TOKEN = 'hello@328adasdasdadadad';

    // Parse the query params
    let mode = event.multiValueQueryStringParameters['hub.mode'];
    let token = event.multiValueQueryStringParameters['hub.verify_token'];
    let challenge = event.multiValueQueryStringParameters['hub.challenge'];
    // if (mode && token) {
    //   // Checks the mode and token sent is correct
    //   if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    //     // Responds with the challenge token from the request
    //     console.log('WEBHOOK_VERIFIED');
    //     res.status(200).send(challenge);
    //   } else {
    //     // Responds with '403 Forbidden' if verify tokens do not match
    //     res.sendStatus(403);
    //   }
    // }
    console.log(challenge);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
// let getWebhook = (req, res) => {
//   let VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

//   // Parse the query params
//   let mode = req.query['hub.mode'];
//   let token = req.query['hub.verify_token'];
//   let challenge = req.query['hub.challenge'];

//   // Checks if a token and mode is in the query string of the request
//   if (mode && token) {
//     // Checks the mode and token sent is correct
//     if (mode === 'subscribe' && token === VERIFY_TOKEN) {
//       // Responds with the challenge token from the request
//       console.log('WEBHOOK_VERIFIED');
//       res.status(200).send(challenge);
//     } else {
//       // Responds with '403 Forbidden' if verify tokens do not match
//       res.sendStatus(403);
//     }
//   }
// };
