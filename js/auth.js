// TOGGLE PASSWORD

// ambil elemen icon mata & input password
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

// cek kalau elemennya ada (biar ga error di halaman lain)
if (togglePassword && password) {

    // ketika icon diklik
    togglePassword.addEventListener("click", function() {

        // cek tipe password sekarang (password / text)
        const type = password.type === "password" ? "text" : "password";

        // ubah tipe input
        password.type = type;

        // ganti icon sesuai kondisi
        this.src = type === "text" ?
            "img/eye-open.png" :
            "img/eye-close.png";
    });
}