import toast from "react-hot-toast";

export async function registerValidate(values){
    const errors = usernameVerify({},values);
      passwordVerify({}, values);
      emailVerify({}, values);

    return errors;
}



export function usernameVerify(errors = {}, values){
    if(!values.username){
        errors.username = toast.error("Username Required...");

    }else if(!values.username.includes()){
        errors.username = toast.success("Valid Username...");
    }
    return errors;
}

export function passwordVerify(error = {}, values){

    if(!values.password){
        error.password = toast.error("Password Required...");
    }else if(values.password.length < 6){
        error.password = toast.error("Password should contain minimum 6 character...");
    }else if(values.password.length >= 6){
        error.password = toast.success("Valid Password");
        
    }

    return error;
}

export function emailVerify( error = {} , values){

    if(!values.email){
        error.email = toast.error("Email Required...");
    }else if(values.email.includes("")){
        error.email = toast.success("Valid Email...");
    }
    
    return error;
}

