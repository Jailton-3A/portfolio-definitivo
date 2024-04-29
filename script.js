const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
for(let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let j=0; j<totalNavList; j++){
            navList[j].querySelector("a").classList.remove("ativo")
        }
        this.classList.add("ativo")
        showSection(this)
    })
}
function showSection(element){
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("ativo")
}