let $ = window.$;

$(document).ready(() => {
  let loginForm = $('form.login');
  let emailInput = $('input#email-input');
  let passwordInput = $('input#password-input');

  loginForm.on('submit', event => {
    event.preventDefault();
    let userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    loginUser(userData.email, userData.password);
    emailInput.val('');
    passwordInput.val('');
  });

  let loginUser = (email, password) => {
    $.post('/api/login', {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace('/home');
      })
      .catch(err => {
        console.log(err);
      });
  };
});
