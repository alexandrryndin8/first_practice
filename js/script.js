const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

document.getElementById("burger2").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("open")
    })