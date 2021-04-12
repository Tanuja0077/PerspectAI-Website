function submitform () {
  full_name = document.getElementById ('text').value;
  mobile_no = document.getElementById ('pwd').value;
  email_id = document.getElementById ('email').value;
  message = document.getElementById ('exampleFormControlTextarea1').value;

  form_data = {
    full_name: full_name,
    mobile_no: mobile_no,
    email_id: email_id,
    message: message,
  };
  // console.log(form_data)

  var request = new XMLHttpRequest ();

  request.open (
    'POST',
    'https://appapi.perspect.ai/sendmails/trigger_mail/perspectai/contact_us',
    true
  );

  request.onload = function () {
    var data = JSON.parse (this.response);
    // console.log(data['message'])
    if (data['message'] == 'Success') {
      location.href = '../thank_you.html';
    }
  };

  request.send (JSON.stringify (form_data));

  console.log (request.response);

  // document.getElementById("contact_form").reset();
  // location.href = "../thank_you.html"
}

function submitCTA () {
  email_id = document.getElementById ('ctamail').value;

  form_data = {
    email_id: email_id,
  };

  valid_email = ValidateEmail (email_id);

  // console.log(form_data)

  var request = new XMLHttpRequest ();

  request.open (
    'POST',
    'https://appapi.perspect.ai/sendmails/trigger_mail/perspectai/cta',
    true
  );

  if (valid_email == true) {
    request.onload = function () {
      var data = JSON.parse (this.response);
      // console.log(data['message'])
      if (data['message'] == 'Success') {
        location.href = '../thank_you.html';
      }
    };
    request.send (JSON.stringify (form_data));
  }

  // document.getElementById("ctamail").reset();
}

function ValidateEmail (mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test (mail)) {
    return true;
  }
  alert ('You have entered an invalid email address!');
  return false;
}
