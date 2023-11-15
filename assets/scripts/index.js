let json;

async function fetchJson()
{
    const response = await fetch("./assets/JSON/Text.JSON")
    const data = await response.json();
    json = await data;
}

async function StartUp() 
{
    await fetchJson();
    addEventListener("DOMContentLoaded", renderLanding());  
}

function renderLanding() 
{
    let blurbP = document.createElement("p");
    let blurbDiv = document.createElement("div");
    let heading = document.getElementsByClassName("heading")[0];
    let subHeading = document.getElementsByClassName("sub")[0];
    let text = document.getElementById("text");

    heading.innerHTML = "";
    subHeading.innerHTML = "";
    text.innerHTML = "";

    heading.innerHTML = "Welcome To BBQCookingSchool.com";

    subHeading.innerHTML = "The only website dedicated to advanced education of the worlds BBQ cooks through home-study!";
    
    blurbDiv.className = "container";
    
    blurbDiv.id = "landing-blurb";
    
    blurbP.className = "blurb";
    
    blurbP.innerHTML = formatTextArray(json["landing"]["blurb"]);
    
    blurbDiv.appendChild(blurbP);
    
    text.appendChild(blurbDiv);
}

function renderAbout() 
{
    let heading = document.getElementsByClassName("heading")[0];
    let subHeading = document.getElementsByClassName("sub")[0];
    let text = document.getElementById("text");

    heading.innerHTML = "";
    subHeading.innerHTML = "";
    text.innerHTML = "";

    heading.innerHTML = "About Us"
    
    let whoDiv = document.createElement("div");
    let whoP = document.createElement("p");

    whoDiv.className = "container";
    whoDiv.appendChild(whoP);
    whoP.innerHTML = formatTextArray(json["about"]["who"]["instructor"]);
    text.appendChild(whoDiv);
}

function renderContact() 
{
    let heading = document.getElementsByClassName("heading")[0];
    let subHeading = document.getElementsByClassName("sub")[0];
    let text = document.getElementById("text");

    heading.innerHTML = "";
    subHeading.innerHTML = "";
    text.innerHTML = "";
}

function formatTextArray(toBeFormatted) {
    let body = "";
    toBeFormatted.forEach(string => {
        body = body + "<br>" + string;
    });
    
    return body;
}

StartUp();