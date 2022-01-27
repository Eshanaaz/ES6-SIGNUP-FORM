var color=document.documentElement.style;
function light(){
    color.setProperty('--bg1', '#c2c2c4');
    color.setProperty('--bg2', '#e2e2e4');
    color.setProperty('--boxShadow',' #a1a1a3');
    color.setProperty('--Shadow1', '#848486');
    color.setProperty('--Shadow2', '#fcfcfe');
    color.setProperty('--SforIcon1', '#ececee');
    color.setProperty('--SforIcon2', '#8a8b8e');
document.getElementById('lt').style.display="none";
document.getElementById('dk').style.display="block";
}

function dark(){
    color.setProperty('--bg1', '#040406');
    color.setProperty('--bg2', '#323234');
    color.setProperty('--boxShadow',' #010203');
    color.setProperty('--Shadow1', '##040406');
    color.setProperty('--Shadow2', '#444446');
    color.setProperty('--SforIcon1', '#2a2b2c');
    color.setProperty('--SforIcon2', '#020305');
    document.getElementById('lt').style.display="block";
    document.getElementById('dk').style.display="none";
}


const username = document.getElementById ("username");
const email = document.getElementById ("email1");
const pswd = document.getElementById( "pswd1");
const phone = document.getElementById( "phone1");
const address = document.getElementById( "address1");


const signUp = () =>{

    // console.log (username.value);
    // console.log (email.value);
    // console.log (pswd.value);

if  (email.value ==="" || pswd.value === ""  || username.value === "" || phone.value === "" || address.value === "" ){
   alert ("INCORRECT INFORMATION")
}
else {

    const obj= {
        username: username.value,
        email: email.value,
        pswd  : pswd.value,
        phone : phone.value,
        address : address.value
    
    }
    
    
    const user = JSON.parse(localStorage.getItem("users")) || []
    console.log(user)
    
    const userIndex = user.findIndex((value, ind) => {
        return value.email === obj.email || value.username === obj.username
    })
    console.log(userIndex);
    
    if (userIndex === -1) {
        user.push(obj)
        localStorage.setItem("users", JSON.stringify(user))
        alert(" Successfully Signup :)  \n\n ENJOY ! YOUR ACCOUNT HAS BEEN CREATED")
        window.location.assign("./login.html")
    
    } 
    else {
        alert("Email or pswd already exist")
    
    }
    
    }


}





const login = () => {
    const email = document.getElementById("email1")
    const pswd = document.getElementById("pswd1")
    const userData = JSON.parse(localStorage.getItem("users"))
    console.log(userData)
    const checkUser = userData.find((value) => {
        return value.email === email.value && value.pswd === pswd.value
    })

    console.log(checkUser);

    
    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        alert("THANKS FOR LOGGING IN :)");
        window.location.assign("./dash.html")

    } 
    
    else {
        alert("invalid")
    }

}

const dashData = () =>{
    // console.log ( "hello")

let dashUser = document.getElementById ("dashUser")
let dashEmail = document.getElementById ("dashEmail")
let dashMob = document.getElementById ("dashMob")
let dashAdres = document.getElementById ("dashAdres")



let {username ,email , phone, address} = JSON.parse(localStorage.getItem("currentUser"));
dashUser.innerHTML = `Hello  ${username}`
dashEmail.innerHTML = `EMAIL :  ${email}`
dashMob.innerHTML = `MOBILE NUMBER :  ${phone}`
dashAdres.innerHTML = `ADDRESS :  ${address}`

}


const logout = () => {

    // localhost.removeItem("currentUser")
    // window.location.assign("./logi.html")


//     window.localhost.clear("currentUser");
// //   window.location.reload(true);
  window.location.assign("./login.html");
}

