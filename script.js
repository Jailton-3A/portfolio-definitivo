const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length
for(let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                console.log(navList[j].querySelector("a"))
            }
            navList[j].querySelector("a").classList.remove("ativo");
        }
        this.classList.add("ativo")
        showSection(this);
    })
}
function showSection(element) {
    for(let i=0; i<totalNavList; i++){
        allSection[i].classList.remove("ativo");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("ativo")
}
