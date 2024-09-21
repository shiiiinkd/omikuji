function datetimeshow() {
    var datetime = new Date();
    alert(datetime);
    var object = document.getElementById("datetime");
    object.innerText = datetime;

}