export const setErrors =(name,dateOfBirth,gender,salary)=>{
    let errors ={};
    errors.name = name?"":"Name Is Required!"
    errors.dateOfBirth = dateOfBirth?"":"Date Of Birth Is Required!"
    errors.gender = gender?"":"Gender Is Required!"
    errors.salary = dateOfBirth?"":"Salary Is Required!"
    return errors;
}
