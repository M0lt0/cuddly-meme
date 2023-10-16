const expandingButton = document.querySelector(".option-active");
const expandingList = document.querySelector(".list-cont list-cont-active");


expandingButton.addEventListener("click", e=>{

    console.log(e.target);
    expandingList.className.toggle("list-cont-active");


})

console.log(expandingList.class);