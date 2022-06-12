$(document).ready(function() {}) block, after the $('#first_form').submit(function(e) {}) block.

$('form[id="second_form"]').validate({
  rules: {
    fname: 'required',
    lname: 'required',
    user_email: {
      required: true,
      email: true,
    },
    psword: {
      required: true,
      minlength: 8,
    }
  },
  messages: {
    fname: 'This field is required',
    lname: 'This field is required',
    user_email: 'Enter a valid email',
    psword: {
      minlength: 'Password must be at least 8 characters long'
    }
  },
  submitHandler: function(form) {
    form.submit();
  }
});