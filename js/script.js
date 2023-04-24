
function validateForm(){
    var fulln = document.getElementById("fulln").value;
    if(fulln != "/[^a-zA-Z]+/"){
        alert("Họ tên phải chỉ chứa chữ cái!");
        return false;
    }
    var usename = document.getElementById("use").value;
    if(usename != "/[^\w]+/"){
        alert("Tên đăng nhập kiểu chữ hoặc số!");
        return false;
    }
    var pass = document.getElementById("pwd").value;
    if(pass != "/[^\w|\S]+/"){
        alert("Mật khẩu phải chứa chữ,số và kí tự đặt biệt,không khoảng trắng");
        return false;
    }
  

    return true;
}
/*
function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList =[];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";

    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.fullname + "</td>";
        html += "<td>" + element.usename + "</td>";
        html += "<td>" + element.pass + "</td>"; 
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Them</button> ';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData(){
    if(validateForm() == true){
        var fulln = document.getElementById("fulln").value;
        var use = document.getElementById("use").value;
        var pwd = document.getElementById("pwd").value;
        
        var peopleList;
        if(localStorage.getItem("peopleList")==null){
            peopleList =[];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
        peopleList.push({
            fulln : fulln,
            use : use,
            pwd :pwd,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("fulln").value = "";
        document.getElementById("use").value = "";
        document.getElementById("pwd").value = "";
    }
}
*/