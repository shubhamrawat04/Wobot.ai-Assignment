let btns = document.querySelectorAll(".size-btn");
let sumbitBtn = document.querySelector(".get-started-btn");

btns.forEach(btn => {
    btn.addEventListener("click", function () {
        btns.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active")
    })
});

sumbitBtn.addEventListener("click", function () {
    if (document.forms["details"]["companyname"].value == "" || document.forms["details"]["industry"].value == "") {
        //If any field i.e companyname or indutry is empty then HTML form required attribute works.
    }
    else {
        alert('Demo completed, Thank you.');
    }

});
