$(document).on('keypress',function(e) {
    if(e.which == 13) {
        var inputpin = $(".password--input").val();
        if (inputpin === "536702") {
            window.location.replace("index.html");
            localStorage.PIN = "536702";
        } else {
            alert("PIN Salah")
        }
    }
});