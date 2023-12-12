let form = document.getElementById("myform");
let first = document.getElementById("firstName");
let second = document.getElementById("SecondName");
let email = document.getElementById("email");
let freq = document.getElementById("fir");
let seq = document.getElementById("se");
let ee = document.getElementById("emaid");
let createPassword = document.getElementById("createPassword");
let cp = document.getElementById("cp");
let confirmPassword = document.getElementById("confirmPassword");
let con = document.getElementById("con");
let submits = document.getElementById("submit");
let err = document.getElementById("error");


first.addEventListener("blur", function() {
    let fir = first.value;
    if (fir === "") {
        freq.textContent = "*Required";
        freq.classList.add("required");
    } else {
        freq.textContent = "";
    }

})

second.addEventListener("blur", function() {
    let sec = second.value;
    if (sec === "") {
        seq.textContent = "*Required";
        seq.classList.add("required");

    } else {
        seq.textContent = "";
    }

})

email.addEventListener("blur", function() {
    let em = email.value;
    if (em === "") {
        ee.textContent = "*Required";
        ee.classList.add("required");
    } else {
        ee.textContent = "";
    }

})
let cpr = createPassword.value;

createPassword.addEventListener("blur", function() {
    let cpr = createPassword.value;
    if (cpr === "") {
        cp.textContent = "*Required";
        cp.classList.add("required");
    } else {
        cp.textContent = "";
        if (cpr.length < 8) {
            alert("Password Must Contain More than 8 Characters");
        }
    }

})



function validate() {
    if (email.value === "" || createPassword.value === "" || confirmPassword.value === "") {
        return false;
    } else {
        console.log(createPassword.value)
        if (createPassword.value !== confirmPassword.value) {
            console.log(createPassword.value)
            err.textContent = "Please Enter Correct Password";
            err.style.color = "red";
        } else {
            err.textContent = "Thank You For Submitting ";
            err.style.color = "green";
        }
    }
}
confirmPassword.addEventListener("blur", function() {
    let cprs = createPassword.value;
    if (cprs === "") {
        cp.textContent = "*Required";
        cp.classList.add("required");
    } else {
        con.textContent = "";
        if (cprs.length < 8) {
            alert("Password Must Contain More than 8 Characters");

        }
    }
})



form.addEventListener("submit", function(event) {
    event.preventDefault();
    let val = validate();
    if (val === false) {
        alert("Please Enter Required details to proceed Further");
    }

})