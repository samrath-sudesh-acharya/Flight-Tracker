function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function toggle() {
    let side = document.getElementById("sid");
    if (side.style.transform == 'translateX(-160%)') {
        side.style.transform = "translateX(0)";
    }
    else {
        side.style.transform = "translateX(-160%)";
    }
}
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let ul = document.querySelector('aside ul');

    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
    ul.classList.toggle('scrolling-aside', windowPosition);
})