
document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";
document.body.style.fontFamily = 'Baloo 2, cursive ';

document.body.style.backgroundColor = "#f2efea";

let bg = document.createElement("div");
bg.style.width = "100%";
bg.style.height = "100%";
bg.style.clipPath = "polygon(100% 0, 0 100%, 0 0)";
bg.style.position = "absolute";
bg.style.zIndex = "-1";
bg.style.backgroundColor = "#66d7d1";
bg.style.top = "0px";

document.body.append(bg);


  
 async function load() {
  let request = new Request("index.json");
  let response = await fetch(request);

  let json_obj = await response.json();
  let obj = new index;
  obj.CreateNavbar(json_obj);
}

class index{

/////////////////// --------------   ###############  N A V B A R    IN      P R O G R E S S   ###########  -----------/////////

 CreateNavbar(json_obj) {
  let header = document.createElement("header");
  let navbar = document.createElement("navbar");
  header.append(navbar);

  let h1 = document.createElement("h1");
  h1.innerHTML = json_obj.logo;
  navbar.append(h1);
  h1.style.fontSize = "30px";
  h1.style.marginLeft = "12px";
  h1.style.marginRight = "3px";

  let imgg = document.createElement('img');
  imgg.src = json_obj.img14;
  imgg.style.position = "absolute";
  imgg.style.right = "15rem";
  imgg.style.top = "1.2rem";
  imgg.style.width = "2.4rem";
  imgg.style.height = "2.4rem";
  imgg.style.cursor = "pointer";
  imgg.addEventListener('click' , ()=>{window.open('Sign_In.html' , '_self')});
  navbar.append(imgg);

  let span = document.createElement("span");
  span.innerHTML = json_obj.nav1;
  navbar.append(span);
  span.addEventListener("click" , ()=>{window.open("Contact_Us.html" , "_self")});
  span.style.position = "absolute";
  span.style.top = "19px";
  span.style.left = "230px";
  span.style.fontSize = "30px";
  span.style.margin = "0 4px";
  span.style.transition = "1s";
  span.onmouseenter = enter;
  span.onmouseleave = leave;
  span.style.cursor = "pointer";
  // span.style.transitionTimingFunction ="ease-in-out"

  function enter() {
    span.style.backgroundColor = "bisque";
    span.style.borderRadius = "12px";
    span.style.padding = "0.4px 5px";
  }

  function leave() {
    span.style.backgroundColor = "#66d7d1";
  }

  let span1 = document.createElement("span");
  span1.innerHTML = json_obj.nav2;
  navbar.append(span1);
  span1.style.position = "absolute";
  span1.style.top = "19px";
  span1.style.left = "430px";
  span1.style.fontSize = "30px";
  span1.style.margin = "0 4px";
  span1.style.transition = "1s";
  span1.onmouseenter = enter1;
  span1.onmouseleave = leave1;
  span1.style.cursor = "pointer";
  span1.addEventListener('click' , ()=>{window.open('About_us.html' , '_self')});
  // span.style.transitionTimingFunction ="ease-in-out"

  function enter1() {
    span1.style.backgroundColor = "bisque";
    span1.style.borderRadius = "12px";
    span1.style.padding = "0.4px 5px";
  }

  function leave1() {
    span1.style.backgroundColor = "#66d7d1";
  }

  let currph = [];

  let ph = [];
  ph.push(json_obj.logo);

  let i = 0;
  let j = 0;

  let isDel = false;

  function loop() {
    h1.innerHTML = currph.join("");

    if (i < ph.length) {
      if (!isDel && j <= ph[i].length) {
        currph.push(ph[i][j]);
        j++;
        h1.innerHTML = currph.join("");
      }
    }

    if (isDel && j <= ph[i].length) {
      currph.pop(ph[i][j]);
      j--;
      h1.innerHTML = currph.join("");
    }

    if (j == ph[i].length) {
      isDel = true;
    }

    if (isDel && j === 0) {
      i++;
      isDel = false;
      currph = [];
      // let img3 = document.createElement("img");
      // img3.src = json_obj.img3;
      // h1.innerHTML = img3;
    }

    if (i == ph.length) {
      i = 0;
    }

    setTimeout(loop, 450);
  }

  // loop();

  let input = document.createElement("input");
  input.type = "search";
  input.style.width = "15rem";
  input.style.height = "2rem";
  input.style.boxShadow = "0px 0px 1px 1px #7f7d9c";
  input.style.borderRadius = "0.3rem";
  input.style.padding = "0.2rem";
  input.style.position = "absolute";
  input.style.top = "23px";
  input.style.right = "40rem";
  input.style.outline = "0rem";
  input.placeholder = "Search";

  navbar.append(input);

  let img1 = document.createElement("img");
  img1.src = json_obj.img1;
  img1.style.position = "absolute";
  img1.style.top = "66px";
  img1.style.left = "-9rem";

  document.body.append(img1);

  let span2 = document.createElement("span");
  span2.style.height = "15rem";
  span2.style.width = "48rem";
  span2.style.position = "absolute";
  span2.style.top = "16rem";
  span2.style.left = "22rem";
  span2.style.fontSize = "1.9rem";
  span2.innerHTML = json_obj.cont1;
  span2.style.fontFamily = "'Baloo 2',sans-serif";
  span2.style.textAlign = "justify";
  span2.style.fontWeight = "600";

  // span2.style.border = "1px solid black";
  document.body.append(span2);

  let img2 = document.createElement("img");
  img2.src = json_obj.img2;
  img2.style.position = "absolute";
  img2.style.right = "0rem";
  img2.style.width = "29rem";
  img2.style.height = "38rem";
  img2.style.bottom = "1rem";

  document.body.append(img2);

  let a = document.createElement("a");
  a.href = "#";
  a.innerHTML = json_obj.button1 + "&#8594";
  a.style.textDecoration = "none";
  a.style.color = "#f2efea";
  a.style.backgroundColor = "#2F4858";
  a.style.padding = "1.4rem 2.5rem";
  a.style.height = "1.7rem";
  a.style.width = "4.8rem";
  a.style.textAlign = "center";
  a.style.position = "absolute";
  a.style.bottom = "7rem";
  a.style.left = "36rem";
  a.style.fontSize = "1.3rem";
  a.style.borderRadius = "1.2rem";
  a.style.transition = "1s";
  a.addEventListener("click" , ()=>{window.open("Explore.html" , "_self")});
  a.onmouseenter = enter2;
  a.onmouseleave = leave2;

  function enter2() {
    // rgba(0,0,0,0.3)
    a.style.textDecoration = "underline";
    a.style.boxShadow = "0 3px 7rem rgba(0,0,0,0.3)";
  }

  function leave2() {
    a.style.textDecoration = "none";
    a.style.boxShadow = "0px 0px 0px #f2efea";
  }

  document.body.append(a);

  // let heart = document.createElement("span");
  // heart.innerHTML = "&#xe87d";

  // navbar.append(heart);

  header.style.height = "65px";
  header.style.width = "100%";
  header.style.boxShadow = "0 3px 20px rgba(0,0,0,0.3)";
  header.style.position = "absolute";
  header.style.top = "0px";
  document.body.append(header);
}

};
/////////////////// --------------   ###############  N A V B A R    IS      F I N I S H E D  ###########  -----------/////////

load();
