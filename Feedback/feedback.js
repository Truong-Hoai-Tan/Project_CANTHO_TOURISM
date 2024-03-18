var curDate = new Date();

    var curDay = curDate.getDate();

    var curMonth = curDate.getMonth() + 1;

    var curYear = curDate.getFullYear();
 
    document.getElementById('current-time').innerHTML = curDay + "/" + curMonth + "/" + curYear;
    
    let stars = 
    document.getElementsByClassName("star");
    let output = 
    document.getElementById("output");

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

function validateForm() {
    var uname = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var msg = document.getElementById('msg').value;

    if (uname.trim() == "") {
        alert("Vui lòng nhập tên của bạn");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Vui lòng nhập một địa chỉ email hợp lệ");
        return false;
    }

    if (phone.trim() == "") {
        alert("Vui lòng nhập số điện thoại của bạn");
        return false;
    }

    if (msg.trim() == "") {
        alert("Vui lòng nhập nội dung phản hồi của bạn");
        return false;
    }

    return true;
}
