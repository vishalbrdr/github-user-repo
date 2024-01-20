const toggleBtn = document.querySelector("[data-theme-toggle-btn]")
const body = document.body
toggleBtn.addEventListener("click",()=>{
    body.dataset.theme = (body.dataset.theme === "dark") ? "" : "dark"
    const theme = body.dataset.theme
    if(theme==="dark"){
        toggleBtn.innerHTML = `<i class="fa-regular fa-sun"></i> light`;
    }else {
        toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i> dark`;
    }
})