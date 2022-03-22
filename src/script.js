function oneplayer_displayfunction1(event) {
  let csply1 = parseInt(document.getElementById("ply1cs").textContent);
  let input1 = document.getElementById("input1").value;
  document.getElementById("plyone").innerHTML = input1;
  let cs = csply1 - input1;
  console.log(cs);
  let p1cs = document.getElementById("ply1cs");
  p1cs.innerHTML = cs;
  if (cs == 0) alert("Congratulations!You won!!!!");
  else if (cs < 0) alert("Score is negative, you cannot play further");
}

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
  if (cs == 0)
    alert(
      "Congratulations!You won!!!!, the other players can start playing now"
    );
  else if (cs < 0) alert("Score is negative, you cannot play further");
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
  if (cs == 0)
    alert(
      "Congratulations!You won!!!!, the other players can start playing now"
    );
  else if (cs < 0) alert("Score is negative, you cannot play further");
}
function threeplayer_displayfunction3(event) {
  event.preventDefault();
  let csply3 = parseInt(document.getElementById("p3cs").textContent);
  let input3 = document.getElementById("input3").value;
  document.getElementById("ply3crntscr").innerHTML = input3;
  let cs = csply3 - input3;
  console.log(cs);
  let p2cs = document.getElementById("p3cs");
  p2cs.innerHTML = cs;
  if (cs == 0)
    alert(
      "Congratulations!You won!!!!, the other players can start playing now"
    );
  else if (cs < 0) alert("Score is negative, you cannot play further");
}
// functions for two player
let submitbutton1 = document.getElementById("submitbutton1");
submitbutton1.addEventListener("click", twoplayer_displayfunction1);
submitbutton1.addEventListener("click", oneplayer_displayfunction1);

let submitbutton2 = document.getElementById("submitbutton2");
submitbutton2.addEventListener("click", twoplayer_displayfunction2);
// functional code for twoplayer ends here

let submitbutton3 = document.getElementById("submitbutton3");
submitbutton3.addEventListener("click", threeplayer_displayfunction3);
