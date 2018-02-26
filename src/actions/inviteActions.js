import axios from 'axios';




// send email to invite

export function inviteEmail(email) {
  let environment = 'prod';
  let current_url = 'localhost:8000/api/slack/invite';
  if(environment !== 'dev') {
    current_url = 'https://still-spire-83012.herokuapp.com/api/slack/invite';
  }
  console.log('EMAIL: ', email);
    console.log(current_url);
    axios.post(current_url, email)
    .then(res => {
      console.log(res.data);
      console.log('invitation success!');
    })
    .catch(err => {
    console.log(err);
    });
}
