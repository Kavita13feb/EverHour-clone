let signup=document.querySelector("#signin")

signup.addEventListener("click",signupInputs)

function signupInputs (event){
    event.preventDefault()
    let user_eml=document.querySelector("#email").value
    // let user_eml=document.querySelector("#email").value
    user_eml.split()
if(user_eml==""){
    document.querySelector("#error").innerHTML="Please fill out this detail"
return false;

}
else if(user_eml.indexOf('@')==0){
// console.log(indexOf("@"))
    document.querySelector("#error").innerHTML="Please Enter a part followed by '@'"+" "+ user_eml+ " "+"is incomplete."
}
else if(user_eml.includes('@')==false){

 document.querySelector("#error").innerHTML="Please include an '@' in the email address"+" "+ user_eml+ " "+"is missing an '@'"
}
else{
    localStorage.setItem("user_eml",user_eml)
    alert("signup sussessful")
}
//  if( user_eml==localStorage.getItem("user_eml")){
//     document.querySelector("#registered").innerHTML="Sorry, the account with this email has been already registered"

// }



}


