//to store the username and password locally
//and automatically fill in the blanks and log in next time

{
    var password = document.querySelector('[name="i_pass"]')
    var username = document.querySelector("[name='i_user']")
    var button = document.querySelector(["#loginButtonId"])

    let logintab = document.querySelector([".log-box"])
    $(logintab).append(`<input type='checkbox' id='login_checkbox'> 
                            <label for='login_checkbox'> 自动登录 </label>`)

    button.addEventListener("click", function () {
        if (document.querySelector("#login_checkbox").checked) {
            localStorage.setItem("n", username.value)
            localStorage.setItem("p", password.value)
            localStorage.setItem("l", "true")
        }
    })

    if (document.querySelector(".show-zero2") != null) {
        localStorage.setItem("l", "false")
    }

    if (localStorage.getItem("l") == "true") {
        username.value = localStorage.getItem("n")
        password.value = localStorage.getItem("p")
        button.click()
    }
}