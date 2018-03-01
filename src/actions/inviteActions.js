import axios from 'axios';




// send email to invite

export function inviteEmail(email) {
  const environment = process.env.NODE_ENV;
  let endpoint = 'http://localhost:8000/api/slack/invite';
  if(environment !== 'development') {
    endpoint = 'https://still-spire-83012.herokuapp.com/api/slack/invite';
  }
    axios.post(endpoint, {email: email})
    .then(res => {
      alert(res.data);
    })
    .catch(err => {
      alert(err);
    console.log(err);
    });
}
