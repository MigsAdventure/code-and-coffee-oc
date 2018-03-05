import axios from 'axios';

$('.slack-invite-form').on('submit', function(e) {
  e.preventDefault();
  const target = e.target;
  const userEmail = target.email.value;
  slackInviteEmail(userEmail);
})

// send email to invite
function slackInviteEmail(email) {
  const environment = process.env.NODE_ENV;
  console.log(environment);
  let endpoint = 'http://localhost:8000/api/slack/invite';
  if(environment !== 'dev') {
    endpoint = 'https://still-spire-83012.herokuapp.com/api/slack/invite';
  }
  axios.post(endpoint, {email: email})
  .then(res => {
    alert(res.data.error || 'Check Your Email!');
  })
  .catch(err => {
    console.log(err);
    alert(err);
    console.log(err);
  });
}
