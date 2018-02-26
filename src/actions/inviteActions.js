import axios from 'axios';




// send email to invite

export function inviteEmail(email) {
  let environment = 'prod';
  let current_url = 'https://still-spire-83012.herokuapp.com/api/slack/invite';
    axios.post(current_url, email)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
    console.log(err);
    });
}
