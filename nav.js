// menu on click fuctionality
function menutopen(){
 
    document.getElementById("sidemenu").style.right="0px";
    document.getElementById("blurbg").style.display="block";

}
function menuclose(){
  
    blurbg.className="backdropDeactive";
    document.getElementById("sidemenu").style.right="-320px";
    document.getElementById("blurbg").style.display="none";

}



//nav menu on mousenter mouseleave functionality

function showvehicles(){
    document.getElementById("nav1").style.display="flex";
    document.getElementById("header").style.backgroundColor="white";
    document.getElementById("header").style.height="400px";
    document.getElementById("blurbg").style.display="block";
    document.getElementById("nav2").style.display="none";
}
function hidevehicles(){
    document.getElementById("nav1").style.display="none";
    document.getElementById("header").style.backgroundColor="rgba(0,0,0,0.0)";
    document.getElementById("blurbg").style.display="none";
    document.getElementById("header").style.height="100px";
    
}

function showenergy(){
    document.getElementById("nav2").style.display="flex";
    document.getElementById("header").style.backgroundColor="white";
    document.getElementById("header").style.height="400px";
    document.getElementById("blurbg").style.display="block";
    document.getElementById("nav1").style.display="none";
    document.getElementById("nav3").style.display="none";
}
function hideenergy(){
    document.getElementById("nav2").style.display="none";
    document.getElementById("header").style.backgroundColor="rgba(0,0,0,0.0)";
    document.getElementById("blurbg").style.display="none";
    document.getElementById("header").style.height="100px";
}

function showcharging(){
    document.getElementById("nav3").style.display="flex";
    document.getElementById("header").style.backgroundColor="white";
    document.getElementById("blurbg").style.display="block";
    document.getElementById("nav2").style.display="none";
    document.getElementById("nav4").style.display="none";
    document.getElementById("header").style.height="400px";
    
}
function hidecharging(){
    document.getElementById("nav3").style.display="none";
    document.getElementById("header").style.backgroundColor="rgba(0,0,0,0.0)";
    document.getElementById("blurbg").style.display="none";
    document.getElementById("header").style.height="100px";
}
function showdiscover(){
    document.getElementById("nav4").style.display="flex";
    document.getElementById("header").style.backgroundColor="white";
    document.getElementById("blurbg").style.display="block";
    document.getElementById("nav3").style.display="none";
    document.getElementById("nav5").style.display="none";
    document.getElementById("header").style.height="400px";

}
function hidediscover(){
    document.getElementById("nav4").style.display="none";
    document.getElementById("header").style.backgroundColor="rgba(0,0,0,0.0)";
    document.getElementById("blurbg").style.display="none";
    document.getElementById("header").style.height="100px";

}

function showshop(){
    document.getElementById("nav5").style.display="flex";
    document.getElementById("header").style.backgroundColor="white";
    document.getElementById("blurbg").style.display="block";
    document.getElementById("nav4").style.display="none";
    document.getElementById("header").style.height="400px";

}
function hideshop(){
    document.getElementById("nav5").style.display="none";
    document.getElementById("header").style.backgroundColor="rgba(0,0,0,0.0)";
    document.getElementById("blurbg").style.display="none";
    document.getElementById("header").style.height="100px";

}

//car design
//color change functionality
function red(){
    document.getElementById("carimg").src="./images/red car.png";
     document.getElementById("colortex").innerText="Ultra Red";

}

function white(){
    document.getElementById("carimg").src="./images/white car.png";
    document.getElementById("colortex").innerText="Pearl White Multi-Coat";
}

function blue(){
    document.getElementById("carimg").src="./images/blue car.png";
    document.getElementById("colortex").innerText="Deep Blue Metallic";
}

function grey(){
    document.getElementById("carimg").src="./images/grey car.png" ;
    document.getElementById("colortex").innerText="Midnight Silver Metallic";
}
function black(){
    document.getElementById("carimg").src="./images/black car.png" ;
    document.getElementById("colortex").innerText="Solid Black";
}

//price change functionality

function p1() {
    document.getElementById("showprice").innerText="$71,090 vehicle price";
    
}
function p2() {
    document.getElementById("showprice").innerText="$86,090 vehicle price";
    
}

//place order

function placeorder(){
    confirm("Are you sure?");
    alert("order placed successfully");
     window.location="index.html";
}

//message blinking functionality

timer();

function timer(){
    let blink= document.getElementById("blink");
    blink.style.opacity= blink.style.opacity==0? 1:0;
    setTimeout(timer,500);
}
