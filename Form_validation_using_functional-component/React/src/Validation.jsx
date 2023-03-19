const validation=(values)=>{
    let errors={}
    if(!values.name){
        errors.name="enter the name"
    }
    if(!values.password){
        errors.password="enter the password"
    }
    return errors;
}
export default validation;