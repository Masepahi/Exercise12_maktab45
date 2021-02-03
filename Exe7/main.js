function validation() {
    let user = $("#userName").val()
    let password = $("#password").val()
    let rePassword = $("#rePass").val()
    let userAlert = $(".alert")
    let passAlert = $(".pass")
    let letters = /^[A-Za-z]+$/;
    let numbers = /[0-9]/g;
    let text;

    if (password !== rePassword) {
        passAlert.html()
        passAlert.html('Password and its Repeated are not the same')
    } else if (password && rePassword && !password.match(letters) && !rePassword.match(letters, numbers)) {
        passAlert.html()
        passAlert.html('Password must contain at least one letter and one number')
    }
}
