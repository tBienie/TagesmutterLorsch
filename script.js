function showOrHideMenu(){
    var menu = document.getElementById("navigation");
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
    }
    else{
        menu.classList.add("show");
    }
}
