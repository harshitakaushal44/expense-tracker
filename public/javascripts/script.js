let toggle = document.querySelector("#toggle");
let sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click",function(){
    if( toggle.firstElementChild.classList.contains("ri-menu-fill")){
        toggle.firstElementChild.classList.replace("ri-menu-fill","ri-close-line");

    }
     else{
        toggle.firstElementChild.classList.replace("ri-close-line","ri-menu-fill");

    }
    
    sidebar.classList.toggle("show_sidebar");
})
