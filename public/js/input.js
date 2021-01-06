$(document).ready(() => {
  const inputForm = $('form.input');
  const storeInput = $('input#store-input');
  const cityInput = $('input#city-input');
  const stateInput = $('input#state-input');
  const zipCodeInput = $('input#zip-code-input');

  inputForm.on('submit', event => {
    event.preventDefault();
    const itemData = {
      store: storeInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      zipcode: zipCodeInput.val().trim()
    };

    if (!itemData.store || !itemData.city || !itemData.state || !itemData.zipcode) {
      return;
    }
    inputData(itemData.store, itemData.city, itemData.state, itemData.zipcode);
    storeInput.val('');
    cityInput.val('');
    stateInput.val('');
    zipCodeInput.val('');
  });

  const inputData = (store, city, state, zipcode) => {
    $.post('api/input', {
      store: store,
      city: city,
      state: state,
      zipcode: zipcode
    })
      .then(() => {
        window.location.replace('/input');
      })
      .catch(handleInputErr);
  };

  const handleInputErr = err => {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  };

  $('.sidenav').sidenav();
});

/* eslint-disable */ 
function checkText () {
  if (
    $('#store-input')
      .val()
      .trim() === '' ||
    $('#city-input')
      .val()
      .trim() === '' ||
    $('#state-input')
      .val()
      .trim() === '' ||
    $('#zip-code-input')
      .val()
      .trim() === ''
  ) {
    document.getElementById('submit-btn').disabled = true;
  } else {
    document.getElementById('submit-btn').disabled = false;
  }
}
/* eslint-enable */ 