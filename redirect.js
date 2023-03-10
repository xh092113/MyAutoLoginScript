//to redirect to the login page from the timeout page

{
    let timeout = document.querySelector(".infoo")
    if (timeout != null && timeout.textContent == "您未登录或登录失效") {
        window.location.replace("https://learn.tsinghua.edu.cn/f/login")
    }
}