var r = new XMLHttpRequest();

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
//XMLHttpRequest.setRequestHeader(header, value)

/*
--header "Content-Type: application/x-www-form-urlencoded" \
--header "Accept: application/json" \
--data-urlencode "grant_type=urn:ibm:params:oauth:grant-type:apikey" \
--data-urlencode "apikey={apikey}" \
"https://iam.cloud.ibm.com/identity/token"
*/

/*
curl -k -X POST \
--header "Content-Type: application/x-www-form-urlencoded" \
--header "Accept: application/json" \
--data-urlencode "grant_type=urn:ibm:params:oauth:grant-type:apikey" \
--data-urlencode "apikey=wA8xDzf8eAA_yTcyKzFYXY7tkzeUqjycPfN2uhDfpgUC" \
"https://iam.cloud.ibm.com/identity/token"
*/

r.open("POST", "https://iam.cloud.ibm.com/identity/token", true);
r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
r.setRequestHeader('Accept', 'application/json');

r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  alert("Success: " + r.responseText);
};
//r.send(encodeURI("grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=wA8xDzf8eAA_yTcyKzFYXY7tkzeUqjycPfN2uhDfpgUC"));
r.send("grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=wA8xDzf8eAA_yTcyKzFYXY7tkzeUqjycPfN2uhDfpgUC");




// var IAM_access_token = 'wA8xDzf8eAA_yTcyKzFYXY7tkzeUqjycPfN2uhDfpgUC';
// var wsURI = 'wss://stream.watsonplatform.net/text-to-speech/api/v1/synthesize'
//   + '?access_token=' + IAM_access_token
//   + '&voice=en-US_AllisonVoice';
// var websocket = new WebSocket(wsURI);

// var messages;
// var audioStream;

// websocket.onopen = function(evt) { onOpen(evt) };
// websocket.onclose = function(evt) { onClose(evt) };
// websocket.onmessage = function(evt) { onMessage(evt) };
// websocket.onerror = function(evt) { onError(evt) };

// function onOpen(evt) {
//     var message = {
//       text: 'Hello world',
//       accept: '*/*'
//     };
//     websocket.send(JSON.stringify(message));
// }

// function onMessage(evt) {
//   if (typeof evt.data === string) {
//     messages += evt.data;
//   } else {
//     console.log('Received ' + evt.data.size() + ' binary bytes');
//     audioStream += evt.data;
//   }
// }

// function onClose(evt) {
//   // The audio stream is complete.
// }