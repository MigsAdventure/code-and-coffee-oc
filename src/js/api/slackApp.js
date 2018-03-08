import axios from 'axios';

// This will wake up the heroku server which takes a few seconds to start up.
// I only did this because its my own personal server on the free plan
$('.slack-btn').on('click', function() {
  axios.get('https://still-spire-83012.herokuapp.com/api/wakeme')
  .then(res => {
      console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
});


// gathers form data (email address) and sends to server to access the slack api for an invite
$('.slack-invite-form').on('submit', function(e) {
  e.preventDefault();
  const target = e.target;
  const userEmail = target.email.value;
  slackInviteEmail(userEmail);
})

// send email to invite
function slackInviteEmail(email) {
  const environment = process.env.NODE_ENV;
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
