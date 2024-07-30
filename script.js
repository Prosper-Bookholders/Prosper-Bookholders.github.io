'use-strict';

const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".name").classList.add("activeLink");
}

else if(pageName === "projects.html"){
    document.querySelector(".projects").classList.add("activeLink");
}

else if(pageName === "donate.html"){
    document.querySelector(".donate").classList.add("activeLink");
}

else if(pageName === "drop-off.html"){
    document.querySelector(".drop-off").classList.add("activeLink");
}

else{
    document.querySelector(".contact").classList.add("activeLink");
}