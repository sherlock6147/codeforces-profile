var request = new XMLHttpRequest();
function getInput() {
    var inputHandle = document.getElementById('user-handle').value;
    console.log(inputHandle);
    request.open('GET', 'https://codeforces.com/api/user.info?handles=' + inputHandle + ';');
    request.onload = function () {
        var data = JSON.parse(this.response);
        var ans = document.getElementById('answer');
        console.log(data);
        ans.innerHTML = JSON.stringify(data);
    };
    request.send();
}