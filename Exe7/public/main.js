$(document).ready(function () { 
    let userId = $('#userName').val();
    let pass = $('#password').val();
    let data = [{
        userName: userId,
        password: pass
    }]
    $('#submitBtn').on("click", function() {
        $.ajax({
            type: "POST",
            url: "http://localhost:5005/login",
            data,
            success: function (status) {
                console.log(status);
            }
        });
    })
})

