
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
        window.location.replace('/input')
    })
      .cath(handleInputErr);
  }

  const handleInputErr = err => {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  };
});
