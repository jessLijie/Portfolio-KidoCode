const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
      btn.addEventListener("click", function() {
        if (theme.getAttribute("href") == "light.css") {
          theme.href = "dark.css";
        } else {
          theme.href = "light.css";
        }

      });

let menu = document.querySelector('.main');
let navbar = document.querySelector('.sidenav');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}
