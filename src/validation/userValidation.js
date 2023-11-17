export const validationUserData = (users)=>{
    
    let errors = {};

    if(users.name.trim() == ""){
        errors.name = "username is required";
    }else if(users.name.trim().length < 3){
        errors.name = "username must be at least 3 character";
    }
    if(users.email.trim() == ""){
        errors.email ="useremail is required";
    }else if(users.email.trim().length < 9){
        errors.name = "useremail must be at least 9 character";
    }
    if(users.password.trim() == ""){
        errors.password ="userpassword is required";
    }else if(users.password.trim().length < 3){
        errors.password = "userpassword must be at least 3 character";
    }
    return errors;

}