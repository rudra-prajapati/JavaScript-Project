function runCode() {
  let html = document.getElementById("htmlCode").value;
  let css = "<style>" + document.getElementById("cssCode").value + "</style>";
  let js = "<script>" + document.getElementById("jsCode").value + "<\/script>";

  let output = document.getElementById("output");
  output.srcdoc = html + css + js;
}