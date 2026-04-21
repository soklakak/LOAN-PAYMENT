function login() {
    const name = document.getElementById("name").value;
    const pass = document.getElementById("pass").value;

    const loading = document.getElementById("loading");

    // show loading
    loading.style.display = "flex";

    setTimeout(() => {
        if (name === "Admin" && pass === "123") {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "navba.html";
        } else if (name !== "Admin") {
            loading.style.display = "none";
            alert("Wrong username");
        } else {
            loading.style.display = "none";
            alert("Wrong password");
        }
    }, 700); // 1.5 seconds loading
}