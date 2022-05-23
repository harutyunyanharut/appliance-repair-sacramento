export const validationMessages = {
  'email': [
    {type: 'required', message: 'Please enter your email.'},
    {type: 'pattern', message: 'Please enter a valid email.'},
    {type: 'not-exist', message: 'Email address does not exist.'},
    {type: 'email_already_exist', message: 'User with this email already exist.'}
  ],
  'name': [
    {type: 'required', message: 'Enter your name'},
    {type: 'minlength', message: 'Name must be at least 2 characters in length'},
    {type: 'pattern', message: 'User name must contain only letters, numbers, spaces, or the underscore'}
  ],
  'address': [
    {type: 'required', message: 'Please enter an address'},
    {type: 'minlength', message: 'Address must be at least 4 characters in length'},
  ],
  'phone_number': [
    {type: 'required', message: 'Please enter phone number'},
    {type: 'pattern', message: 'Please enter valid phone number'}
  ],
  'message': [
    {type: 'required', message: 'Please enter description for more information.'},
    {type: 'maxlength', message: 'Description should not exceed 2000 symbols.'}
  ],
  'date': [
    {type: 'required', message: 'Please enter a valid date.'},
  ]
};
export let emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export let namePattern: RegExp = /^[a-zA-Z-' ]*$/;
export let phonePattern: RegExp = /^[0-9\-\+]{9,15}$/;

