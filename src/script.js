// functional code for twoplayer starts here
function twoplayer_displayfunction1(event) {
  event.preventDefault();
  debugger;
  let csply1 = parseInt(document.getElementById("p1cs").textContent);
  console.log(csply1);
  let input1 = document.getElementById("input1").value;
  document.getElementById("ply1crntscr").innerHTML = input1;
  let cs = csply1 - input1;
  console.log(cs);
  let p1cs = document.getElementById("p1cs");
  p1cs.innerHTML = cs;
}
function twoplayer_displayfunction2(event) {
  event.preventDefault();
  let csply2 = parseInt(document.getElementById("p2cs").textContent);
  let input2 = document.getElementById("input2").value;
  document.getElementById("ply2crntscr").innerHTML = input2;
  let cs = csply2 - input2;
  console.log(cs);
  let p2cs = document.getElementById("p2cs");
  p2cs.innerHTML = cs;
}

let submitbutton1 = document.getElementById("submitbutton1");
submitbutton1.addEventListener("click", twoplayer_displayfunction1);

let submitbutton2 = document.getElementById("submitbutton2");
submitbutton2.addEventListener("click", twoplayer_displayfunction2);
// functional code for twoplayer ends here
