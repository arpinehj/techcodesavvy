// navbar height on mobile
function openNav() {
    document.getElementById("navbar").style.height = "60px";
};
// navbar toggler and overlay - open, active - icon changes into 'x'
$(document).ready(function () {
    $(".navbar-toggler, #overlay").on("click", function () {
        $(".mobileMenu, #overlay").toggleClass("open")
        $(".navbar-toggler").toggleClass("active");
    })
});

// Trigger the search button click on keyboard "enter"
const input = document.getElementById("search");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

// search bar - takes an input and sends the user to a specific page
function sendToPage(){
    const input = document.getElementById("search").value;
    
    switch(input) {
        case 'Home': case 'home':
            location.href = "index.html";
            break;
        case 'About': case 'about':
            location.href = "about.html";
            break;
        case 'Web Development': case 'web development':
        case 'Web': case 'web':
        case 'Web Dev': case 'web dev':
            location.href = "webdevelopment.html";
            break;
        case 'Python Programming': case 'python programming':
        case 'Python': case 'python':
            location.href = 'pythonprogramming.html';
            break;
        case 'Data & SQL': case 'Data and SQL':
        case 'Data & sql': case 'data and sql':
        case 'Data sql': case 'data sql':
        case 'Data SQL': case 'data SQL':
        case 'Data': case 'data':
        case 'SQL': case 'sql':
            location.href = "datasql.html";
            break;
        case 'CFGDegree': case 'cfgdegree': case 'degree': case 'Degree':
        case 'nanodegree': case 'Nanodegree': case 'Nano': case 'nano':
            location.href = 'cfgdegree.html';
            break;
        case 'Privacy Policy': case 'privacy policy':
        case 'Privacy': case 'privacy':
        case 'Policy': case 'policy':
            location.href = "privacypolicy.html";
            break;
        case 'Tips': case 'tips':
        case 'Tip': case 'tip':
            location.href = "tips.html";
            break;
        default:
            alert('Invalid Input! You can only search keywords that are related to this website.');
    }
};

// another way of putting value into input (taking user to a specific page) using if else
/*if (input === "Home" || input === "home") {
        location.href = "index.html";
    }
    else if (input ===  "About" || input === "about"){
        location.href = "about.html";
    }
    else if (input ===  "Web Development" 
    || input === "web development" 
    || input === "web" 
    || input === "Web" 
    || input === "web dev" 
    || input === "Web Dev") {
        location.href = "webdevelopment.html";
    }
    else if (input === "python programming" 
    || input === "Python Programming" 
    || input === "Python" 
    || input === "python") {
        location.href = "pythonprogramming.html";
    }
    else if (input === "Data & SQL" 
    || input === "data & sql" 
    || input === "data and sql" 
    || input === "Data and sql"
    || input === "Data and SQL"
    || input === "Data SQL"
    || input === "Data sql"
    || input === "Data"
    || input === "data"
    || input === "sql"
    || input === "SQL") {
        location.href = "datasql.html";
    }
    else if (input ===  "privacy policy" 
    || input === "Privacy Policy" 
    || input === "Privacy" 
    || input === "privacy"
    || input === "Policy"
    || input === "policy"){
        location.href = "privacypolicy.html";
    }
    else if (input ===  "tips" 
    || input === "tip" 
    || input === "Tips" 
    || input === "Tip"){
        location.href = "tips.html";
    }
    else {
        alert('Invalid Input.');
    }*/