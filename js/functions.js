//Function to check the submited information is valid.
function submit_fun() {
  name_check();
  dob_check();
  email_check();
  phno_check();
  pass_check();
  username_check();
  gender_check();
  terms_check();
  if (
    name_check() == true &&
    dob_check() == true &&
    email_check() == true &&
    phno_check() == true &&
    pass_check() == true &&
    username_check() == true &&
    gender_check() == true &&
    terms_check() == true
  ) {
    return true;
  } else {
    return false;
  }
}
//Function to check the name was entered

function name_check() {
  var name_input = document.getElementById("name_input").value;
  if (name_input == "") {
    document.getElementById("name_msg").innerHTML = "Enter Your Name";
    document.getElementById("name_msg").classList.remove('valid');
    return false;
  } else {
    document.getElementById("name_msg").innerHTML = "Nice name ;)";
    document.getElementById("name_msg").classList.add('valid');
    return true;
  }
}
//Function to check the dob was entered

function dob_check() {
  var dob_input = document.getElementById("dob_input").value;
  if (dob_input == "") {
    document.getElementById("dob_msg").innerHTML = "Enter Your DOB";
    document.getElementById("dob_msg").classList.remove('valid');

    return false;
  } else {
    document.getElementById("dob_msg").innerHTML = "Validation Success";
    document.getElementById("dob_msg").classList.add('valid');
    return true;
  }
}
//Function to check the email was entered

function email_check() {
  var email_input = document.getElementById("email_input").value;
  var email =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email_input == "") {
    document.getElementById("email_msg").innerHTML = "Enter Your Email";
    document.getElementById("email_msg").classList.remove('valid');
    document.getElementById("email_msg").classList.remove('invalid');

    return false;
  } else if (email_input.match(email)) {
    document.getElementById("email_msg").innerHTML = "Validation Success";
    document.getElementById("email_msg").classList.remove('invalid');
    document.getElementById("email_msg").classList.add('valid');
    return true;
  } else {
    document.getElementById("email_msg").innerHTML = "Enter Your Valid Email";
    document.getElementById("email_msg").classList.add('invalid');
    document.getElementById("email_msg").classList.remove('valid');


    return false;
  }
}
//Function to check the phone was entered

function phno_check() {
  var phoneno = /^\d{10}$/;
  var phno_input = document.getElementById("phno_input").value;
  if (phno_input == "") {
    document.getElementById("phone_msg").innerHTML = "Enter Your Mobile Number";
    document.getElementById("phone_msg").classList.remove('valid');
    document.getElementById("phone_msg").classList.remove('invalid');
    return false;
  } else if (phno_input.match(phoneno)) {
    document.getElementById("phone_msg").innerHTML = "Validation Success";
    document.getElementById("phone_msg").classList.remove('invalid');
    document.getElementById("phone_msg").classList.add('valid');
    return true;
  } else {
    document.getElementById("phone_msg").innerHTML =
      "Enter 10 digit Mobile number";
      document.getElementById("phone_msg").classList.add('invalid');
      document.getElementById("phone_msg").classList.remove('valid');
    return false;
  }
}
//Function to check the password was entered

function pass_check() {
  var pass_input = document.getElementById("pass_input").value;
  var cpass_input = document.getElementById("cpass_input").value;
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var specialChar = /[$&+,:;=?@#|'<>.-^*()%!]/g;
  if (pass_input == "" && cpass_input == "") {
    document.getElementById("password_msg").innerHTML = "Create Your Password";
    document.getElementById("password_msg").classList.remove('valid');
    document.getElementById("password_msg").classList.remove('invalid');
    return false;
  } else if (pass_input != cpass_input) {
    document.getElementById("password_msg").innerHTML =
      "Your Password must be Same";
      document.getElementById("password_msg").classList.remove('valid');
      document.getElementById("password_msg").classList.remove('invalid');
    return false;
  } else if (
    pass_input.match(numbers) &&
    pass_input.match(specialChar) &&
    pass_input.match(upperCaseLetters) &&
    pass_input.match(lowerCaseLetters) &&
    pass_input.length >= 8 &&
    pass_input.length <= 20
  ) {
    document.getElementById("password_msg").innerHTML = "password is valid";
    document.getElementById("password_msg").classList.remove('invalid');
    document.getElementById("password_msg").classList.add('valid');
    return true;
  } else {
    document.getElementById("password_msg").innerHTML =
      "Password must contain one lowercase, one Uppercase, one numeric, password should be greater than 8 character and within 20 character and contain one special character";
      document.getElementById("password_msg").classList.add('invalid');
      document.getElementById("password_msg").classList.remove('valid');
    return false;
  }
}
//Function to check the username was entered

function username_check() {
  var username_input = document.getElementById("username_input").value;

  if (username_input == "") {
    document.getElementById("username_msg").innerHTML = "Create Your Username";
    document.getElementById("username_msg").classList.remove('valid');
    return false;
  } else {
    document.getElementById("username_msg").innerHTML = "Great Username ;)";
    document.getElementById("username_msg").classList.add('valid');
    return true;
  }
}
//Function to check the gender was entered
function gender_check() {
  var gender_input = document.getElementById("select_input").value;

  if ((gender_input == "select_your_gender")) {
    document.getElementById("gender_msg").innerHTML = "Select Your Gender";
    document.getElementById("gender_msg").classList.remove('valid');
    return false;
  } else {
    document.getElementById("gender_msg").innerHTML = "Validation Success";
    document.getElementById("gender_msg").classList.add('valid');
    return true;
  }
}
// Fucntion to check the terms and conditions was checked?
function terms_check() {
  var check_input = document.getElementById("check_input");
  if (check_input.checked == true) {
  document.getElementById("checkbox_msg").innerHTML = "";

    document.getElementById("checkbox_msg").classList.remove('invalid');
    return true;
  } else {
    document.getElementById("checkbox_msg").innerHTML =
      "Accept the Terms and Conditions";
    document.getElementById("checkbox_msg").classList.add('invalid');

    return false;
  }
}
// Function to reset all the error messages
function reset_all() {
  document.getElementById("email_msg").innerHTML = "";
  document.getElementById("gender_msg").innerHTML = "";
  document.getElementById("password_msg").innerHTML = "";
  document.getElementById("phone_msg").innerHTML = "";
  document.getElementById("name_msg").innerHTML = "";
  document.getElementById("username_msg").innerHTML = "";
  document.getElementById("checkbox_msg").innerHTML = "";
  document.getElementById("dob_msg").innerHTML = "";


}
// Fuction to set the date above 18 yrs old
function set_date_at_dob() {
  const today_date = new Date();
  var this_year = today_date.getFullYear() - 18;
  var this_mon = today_date.getMonth() + 1;
  var this_month;
  if (this_mon > 9) {
    this_month = this_mon;
  } else {
    this_month = "0" + this_mon;
  }
  var this_dat = today_date.getDate();
  var this_date;
  if (this_dat > 9) {
    this_date = this_dat;
  } else {
    this_date = "0" + this_dat;
  }
  var today_date_1 = this_year + "-" + this_month + "-" + this_date;
  var dob_max_date = document.getElementById("dob_input");
  const date_attribute = document.createAttribute("max");
  date_attribute.value = today_date_1;
  dob_max_date.setAttributeNode(date_attribute);
}
