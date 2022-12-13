const mdBtn01 = document.querySelector("#md-btn-01");
const mdBtn02 = document.querySelector("#md-btn-02");
const mdClose01 = document.querySelector("#md-close-01");
const mdClose02 = document.querySelector("#md-close-02");
const modal01 = document.querySelector("#modal-01");
const modal02 = document.querySelector("#modal-02");
const mdBg = document.querySelector(".md-bg");
const commonBtn = document.querySelectorAll(".btn");



mdBtn01.addEventListener("click", () => {
  modal01.classList.add("show");
  mdBg.classList.add("show");
});

mdBtn02.addEventListener("click", () => {
  modal02.classList.add("show");
  mdBg.classList.add("show");
});

mdClose01.addEventListener("click", () =>{
  modal01.classList.remove("show");
  mdBg.classList.remove("show");
});

mdClose02.addEventListener("click", () =>{
  modal02.classList.remove("show");
  mdBg.classList.remove("show");
});


