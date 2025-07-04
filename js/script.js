//Greeting Name
window.addEventListener('DOMContentLoaded',()=>{
    const name = prompt("Masukkan namamu :");
    document.getElementById("username").textContent = name || "Guest";
});

//Form Submit
const form = document.getElementById("orderForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Form berhasil")

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const size = document.getElementById("size").value;
    const color = document.querySelector("input[name='color']:checked");
    const note = document.getElementById("note").valu;

    if (!name || !email || !size ||!color) {
    confirmation.textContent = "Lengkapi dulu formulirnya! Take your time:)";
    confirmation.style.color = "red";
    return;
    }
    confirmation.textContent = `Terimakasih sudah memesan, ${name}! Kami akan menghubungimu lewat email!`;
    confirmation.style.color = "green"
});