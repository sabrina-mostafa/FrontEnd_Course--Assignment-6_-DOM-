// Step 1: Read email and password  values from input
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("pass");


document.getElementById("loginBtn").addEventListener("click", verifyUser);

// Step 2: verify email and password
function verifyUser() {
    let emailValue = emailInput.value ;
    let passwordValue = passwordInput.value ;

    // Optional - for debugging
    console.log(emailInput.value);
    console.log(passwordInput.value);

    // show alert
    if(emailValue=='secret@gmail.com' && passwordValue=='secret'){
        // alert("WOW! user is VALID");
        
// Step 3: Redirect to dashboard
        window.location.href = "dashboard.html";
    }
    else{
        alert('Beaware! You are unauthorized');
    }

}



