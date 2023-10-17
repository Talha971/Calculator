function abc(e) {
  var a = (document.getElementById("inp").value += e);
}
function alclr() {
  var a = (document.getElementById("inp").value = "");
}
function del() {
  var a = document.getElementById("inp");
  a.value = a.value.slice(0, -1);
}
function eq() {
  var a = document.getElementById("inp");
  a.value = eval(a.value);
}