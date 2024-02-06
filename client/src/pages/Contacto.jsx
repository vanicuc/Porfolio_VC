import React, { useState } from "react";
import "./Contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // manejar la lógica para enviar el formulario, por ejemplo, enviar un correo electrónico o almacenar los datos.
    console.log("Formulario enviado:", formData);
    // resetear el estado del formulario después de manejar los datos si es necesario.
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="form_wrap">
        <div className="cantact_info">
          <div className="info_title">
            <span className="fa fa-user-circle"></span>
            <h2>
              For More Details <br />
              Contact Me!
            </h2>
          </div>
          <div className="info_items">
            <p>
              <span className="fa-mobile"></span>Thank you for visiting my
              portfolio
            </p>
            <p>
              <span className="fa-mobile"></span>I'm excited to connect with
              you. If you are interested in discussing potential projects,
              creative collaborations, or if you are looking for new talents for
              your team, I would love to hear from you!
            </p>
            <img src="porfolio.jpeg" width={350} />
          </div>
        </div>

        <form action="" className="form_contact" onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          <div className="user_info">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone">Mobile</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email *</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="mensaje">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <input type="submit" value="Submit" id="btnSend" />

            {/* <input type="button" value="Submit" id="btnSend"/> */}
          </div>
        </form>
      </div>
    </>
  );
}

// <!-- */
// para mail puesto nuevo OJO -->

// <body>
//  <p>Gmail API Quickstart</p>

//  <!--Add buttons to initiate auth sequence and sign out-->
//  <button id="authorize_button" onclick="handleAuthClick()">Authorize</button>
//  <button id="signout_button" onclick="handleSignoutClick()">Sign Out</button>

//  <pre id="content" style="white-space: pre-wrap;"></pre>

//  <script type="text/javascript">
//    /* exported gapiLoaded */
//    /* exported gisLoaded */
//    /* exported handleAuthClick */
//    /* exported handleSignoutClick */

//    // TODO(developer): Set to client ID and API key from the Developer Console
//    const CLIENT_ID = '1076926002731-s5up228v4d6tlkpau5s5f1n0bvo5u7aq.apps.googleusercontent.com ';
//    const API_KEY = 'OCSPX-3pDHRT_9dNCwFRiVbp9YURjItKT_';

// // 1076926002731-s5up228v4d6tlkpau5s5f1n0bvo5u7aq.apps.googleusercontent.com
// //id cliente

// //secreto cliente
// // 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

//    // Discovery doc URL for APIs used by the quickstart
//    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';

//    // Authorization scopes required by the API; multiple scopes can be
//    // included, separated by spaces.
//    const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

//    let tokenClient;
//    let gapiInited = false;
//    let gisInited = false;

//    document.getElementById('authorize_button').style.visibility = 'hidden';
//    document.getElementById('signout_button').style.visibility = 'hidden';

//    /**
//     * Callback after api.js is loaded.
//     */
//    function gapiLoaded() {
//      gapi.load('client', initializeGapiClient);
//    }

//    /**
//     * Callback after the API client is loaded. Loads the
//     * discovery doc to initialize the API.
//     */
//    async function initializeGapiClient() {
//      await gapi.client.init({
//        apiKey: API_KEY,
//        discoveryDocs: [DISCOVERY_DOC],
//      });
//      gapiInited = true;
//      maybeEnableButtons();
//    }

//    /**
//     * Callback after Google Identity Services are loaded.
//     */
//    function gisLoaded() {
//      tokenClient = google.accounts.oauth2.initTokenClient({
//        client_id: CLIENT_ID,
//        scope: SCOPES,
//        callback: '', // defined later
//      });
//      gisInited = true;
//      maybeEnableButtons();
//    }

//    /**
//     * Enables user interaction after all libraries are loaded.
//     */
//    function maybeEnableButtons() {
//      if (gapiInited && gisInited) {
//        document.getElementById('authorize_button').style.visibility = 'visible';
//      }
//    }

//    /**
//     *  Sign in the user upon button click.
//     */
//    function handleAuthClick() {
//      tokenClient.callback = async (resp) => {
//        if (resp.error !== undefined) {
//          throw (resp);
//        }
//        document.getElementById('signout_button').style.visibility = 'visible';
//        document.getElementById('authorize_button').innerText = 'Refresh';
//        await listLabels();
//      };

//      if (gapi.client.getToken() === null) {
//        // Prompt the user to select a Google Account and ask for consent to share their data
//        // when establishing a new session.
//        tokenClient.requestAccessToken({prompt: 'consent'});
//      } else {
//        // Skip display of account chooser and consent dialog for an existing session.
//        tokenClient.requestAccessToken({prompt: ''});
//      }
//    }

//    /**
//     *  Sign out the user upon button click.
//     */
//    function handleSignoutClick() {
//      const token = gapi.client.getToken();
//      if (token !== null) {
//        google.accounts.oauth2.revoke(token.access_token);
//        gapi.client.setToken('');
//        document.getElementById('content').innerText = '';
//        document.getElementById('authorize_button').innerText = 'Authorize';
//        document.getElementById('signout_button').style.visibility = 'hidden';
//      }
//    }

//    /**
//     * Print all Labels in the authorized user's inbox. If no labels
//     * are found an appropriate message is printed.
//     */
//    async function listLabels() {
//      let response;
//      try {
//        response = await gapi.client.gmail.users.labels.list({
//          'userId': 'me',
//        });
//      } catch (err) {
//        document.getElementById('content').innerText = err.message;
//        return;
//      }
//      const labels = response.result.labels;
//      if (!labels || labels.length == 0) {
//        document.getElementById('content').innerText = 'No labels found.';
//        return;
//      }
//      // Flatten to string to display
//      const output = labels.reduce(
//          (str, label) => `${str}${label.name}\n`,
//          'Labels:\n');
//      document.getElementById('content').innerText = output;
//    }
//  </script>
//  <script async defer src="https://apis.google.com/js/api.js" onload="gapiLoaded()"></script>
//  <script async defer src="https://accounts.google.com/gsi/client" onload="gisLoaded()"></script>
// </body> -->
