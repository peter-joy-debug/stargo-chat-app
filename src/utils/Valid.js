const valid = ({ firstname,lastname, email,gender,phone,username, password, cf_password }) => {
    const err = {};

    if(!firstname){
        err.firstname = "Please add firstname.";
    }else if(firstname.length > 30){
        err.firstname = "Firstname must be smaller than 30 characters.";
    }

    if(!lastname){
        err.lastname = "Please add lastname.";
    }else if(lastname.length > 30){
        err.lastname= "Lastname must be smaller than 30 characters.";
    }

    if (!email) {
        err.email = "Please add Email";
    }

    if (!gender) {
        err.gender = "Choose your gender.";
    }

    if (!phone) {
        err.phone = "Please add Phone Number.";
    }

    if (!username) {
      err.username = "Please add Username.";
    } else if (username.replace(/ /g, '').length > 25) {
      err.username = "Username must be smaller than 25 characters.";
    }



    if (!password) {
      err.password = "Please add Password.";
    } else if (password.length < 6) {
      err.password = "Password must be al least 6 characters long.";
    }

    if (password !== cf_password) {
      err.cf_password = "Password does not match.";
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length  
    }
};

export default valid;