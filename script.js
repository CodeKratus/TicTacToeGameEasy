var pt1 = document.getElementById("pt1");
var pt2 = document.getElementById("pt2");

var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
var d = document.getElementById("d").value;
var e = document.getElementById("e").value;
var f = document.getElementById("f").value;
var g = document.getElementById("g").value;
var h = document.getElementById("h").value;
var i = document.getElementById("i").value;
var el ;


// Disabilita gli input appena li clicchiamo
function disable( el) {
    document.getElementById(el).disabled = true;
  }

//Point
var sd = 0;
var dd= 0;

//Win

//Variabile booleana che ci permette di alternare i turni tra player
var check = false;
//Round check function

function checK() {
  check = !check;
  if(check){
    document.getElementById("turno").textContent ="Turno di 0";
  }
  else{
    document.getElementById("turno").textContent ="Turno di X";
  }
 
}

//Function for p1 and p2
function first() {
  checK();

  if (check == true && a == "") {
    document.getElementById("a").value = "X";
    a = "X";
    disable("a");
    winR();
  } else if (check == false && a == "") {
    document.getElementById("a").value = "0";
    a = "0";
    disable("a");
    winR();
  } else {
    return null;
  }
}

function second() {
  checK();

  if (check == true && b == "") {
    document.getElementById("b").value = "X";
    b = "X";
    disable("b");
    winR();
  } else if (check == false && b == "") {
    document.getElementById("b").value = "0";
    b = "0";
    disable("b");
    winR();
  } else {
    return null;
  }
}

function third() {
  checK();

  if (check == true && c == "") {
    document.getElementById("c").value = "X";
    c = "X";
    disable("c");
    winR();
  } else if (check == false && c == "") {
    document.getElementById("c").value = "0";
    c = "0";
    disable("c");
    winR();
  } else {
    return null;
  }
}

function fourth() {
  checK();

  if (check == true && d == "") {
    document.getElementById("d").value = "X";
    d = "X";
    disable("d");
    winR();
  } else if (check == false && d == "") {
    document.getElementById("d").value = "0";
    d = "0";
    disable("d");
    winR();
  } else {
    return null;
  }
}

function fifth() {
  checK();

  if (check == true && e == "") {
    document.getElementById("e").value = "X";
    e = "X";
    disable("e");
    winR();
  } else if (check == false && e == "") {
    document.getElementById("e").value = "0";
    e = "0";
    disable("e");
    winR();
  } else {
    return null;
  }
}

function sixth() {
  checK();

  if (check == true && f == "") {
    document.getElementById("f").value = "X";
    f = "X";
    disable("f");
    winR();
  } else if (check == false && f == "") {
    document.getElementById("f").value = "0";
    f = "0";
    disable("f");
    winR();
  } else {
    return null;
  }
}

function seventh() {
  checK();

  if (check == true && g == "") {
    document.getElementById("g").value = "X";
    g = "X";
    disable("g");
    winR();
  } else if (check == false && g == "") {
    document.getElementById("g").value = "0";
    g = "0";
    disable("g");
    winR();
  } else {
    return null;
  }
}

function eighth() {
  checK();

  if (check == true && h == "") {
    document.getElementById("h").value = "X";
    h = "X";
    disable("h");
    winR();
  } else if (check == false && h == "") {
    document.getElementById("h").value = "0";
    h = "0";
    disable("h");
    winR();
  } else {
    return null;
  }
}

function ninth() {
  checK();

  if (check == true && i == "") {
    document.getElementById("i").value = "X";
    i = "X";
    disable("i");
    winR();
  } else if (check == false && i == "") {
    document.getElementById("i").value = "0";
    i = "0";
    disable("i");
    winR();
  } else {
    return null;
  }
}


//IF WIN
function winR(){
    if(a == "X" && b == "X" && c == "X"){
    
        sd += 1; 
pt1.textContent  = sd;
winner();
resetIfWIN();
document.getElementById("wr").textContent ="Player 1 Vince!";


    }else if
    (a == "X" && d == "X" & g =="X"){
        sd += 1; 
pt1.textContent  = sd;
winner();

resetIfWIN();
document.getElementById("wr").textContent ="Player 1 Vince!";
    }
    else if(a == "X" && e == "X" && i == "X"){
        sd += 1; 
pt1.textContent  = sd;
winner();
resetIfWIN();
document.getElementById("wr").textContent ="Player 1 Vince!";
    }
    else if(b == "X" && e == "X" && h == "X"){
        sd += 1; 
        pt1.textContent  = sd;
        winner();
        resetIfWIN();
        document.getElementById("wr").textContent ="Player 1 Vince!";
    }
    else if(c == "X" && e == "X" && g == "X"){
        sd += 1; 
        pt1.textContent  = sd;
        winner();
        resetIfWIN();
        document.getElementById("wr").textContent ="Player 1 Vince!";
    }
    else if(c == "X" && f == "X" && i == "X"){
        sd += 1; 
        pt1.textContent  = sd;
        winner();
        resetIfWIN();
        document.getElementById("wr").textContent ="Player 1 Vince!";
    }
    else if(d == "X" && e == "X" && f == "X"){
        sd += 1; 
        pt1.textContent  = sd;
        winner();
        resetIfWIN();
        document.getElementById("wr").textContent ="Player 1 Vince!";
    }
    else if(g == "X" && h == "X" && i == "X"){
        sd += 1; 
        pt1.textContent  = sd;
        winner();
        resetIfWIN();
        document.getElementById("wr").textContent ="Player 1 Vince!";
    }else if
    (a == "X" && d == "X" & g =="X"){
        sd += 1; 
pt1.textContent  = sd;
resetIfWIN();
document.getElementById("wr").textContent ="Player 2 Vince!";
    }else if(a == "0" && b == "0" && c == "0"){
        dd += 1; 
        pt2.textContent  = dd;
        winner();
        resetIfWIN();
        document.getElementById("wr").textContent ="Player 2 Vince!";
    }

    else if(a == "0" && e == "0" && i == "0"){
        dd += 1; 
        pt2.textContent  = dd;
        winner();
        resetIfWIN();
        document.getElementById("wr").textContent ="Player 2 Vince!";
    }
    else if(b == "0" && e == "0" && h == "0"){
        dd += 1; 
        pt2.textContent  = dd;
        winner();
        resetIfWIN();;
        document.getElementById("wr").textContent ="Player 2 Vince!";
    }
    else if(c == "0" && e == "0" && g == "0"){
        dd += 1; 
        pt2.textContent  = dd;
        winner();
        resetIfWIN();
        document.getElementById("wr").textContent ="Player 2 Vince!";
    }
    else if(c == "0" && f == "0" && i == "0"){
        dd += 1; 
    pt2.textContent  = dd;
    winner();
    resetIfWIN();
    document.getElementById("wr").textContent ="Player 2 Vince!";
    }
    else if(d == "0" && e == "0" && f == "0"){
        dd += 1; 
        pt2.textContent  = dd;
        winner();
        resetIfWIN();
        document.getElementById("wr").textContent ="Player 2 Vince!";
    }
    else if(g == "0" && h == "0" && i == "0"){
        dd += 1; 
    pt2.textContent  = dd;
    winner();
    resetIfWIN();
    
    document.getElementById("wr").textContent ="Player 2 Vince!";
    }
  else if(a!= "" & b != "" && c !="" && d!="" && e!="" && f!="" && g!="" && h!="" && i!=""){
    winner();
    resetIfWIN();
   
    document.getElementById("wr").textContent ="Pareggio!";
   
  }
else{}

}

//
function winner(){

  if(sd == 5){
    pt1.textContent  = 0;
    pt2.textContent  = 0;
    return 0;
    
}
else if (dd == 5){
    pt2.textContent  = 0;
    pt1.textContent  = 0;
    return 0;
    

}


}


function resetIfWIN(){

    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("d").value = "";
    document.getElementById("e").value = "";
    document.getElementById("f").value = "";
    document.getElementById("g").value = "";
    document.getElementById("h").value = "";
    document.getElementById("i").value = "";
    a ="";
    b ="";
    c ="";
    d ="";
    e ="";
    f ="";
    g ="";
    h ="";
    i= "";
    document.getElementById("a").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("c").disabled = false;
    document.getElementById("d").disabled = false;
    document.getElementById("e").disabled = false;
    document.getElementById("f").disabled = false;
    document.getElementById("g").disabled = false;
    document.getElementById("h").disabled = false;
    document.getElementById("i").disabled = false;
    setTimeout(resetWinner,2000);
    }
    


function resetWinner(){
    document.getElementById("wr").textContent ="";
}