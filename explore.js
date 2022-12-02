document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";
document.body.style.overflow = "hidden";

document.body.style.backgroundColor = "#f2efea";

let bg = document.createElement("div");
bg.style.width = "100%";
bg.style.height = "100%";
bg.style.clipPath = "polygon(0 0, 100% 0, 100% 54%, 0 55%)";
bg.style.position = "absolute";
bg.style.zIndex = "-1";
bg.style.backgroundColor = "#66d7d1";
bg.style.top = "0px";

document.body.append(bg);

async function load() {
  let request = new Request("index.json");
  let response = await fetch(request);

  let json_obj = await response.json();
  let obj = new ind;
  obj.CreateNavbar(json_obj);
  obj.F_Half(json_obj);
  obj.S_Half(json_obj);
}

class ind{

/////////////////// --------------   ###############  N A V B A R    IN      P R O G R E S S   ###########  -----------/////////

 CreateNavbar(json_obj) {
  let header = document.createElement("header");
  let navbar = document.createElement("navbar");
  let ul = document.createElement("ul");
  header.append(navbar);
  navbar.append(ul);

  let h1 = document.createElement("h1");
  h1.innerHTML = json_obj.logo;
  navbar.append(h1);
  h1.style.fontSize = "30px";
  h1.style.marginLeft = "12px";
  h1.style.marginRight = "3px";
  h1.addEventListener("click" , ()=>{window.open("/" , "_self")});
  h1.style.cursor = "pointer"

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

  header.style.height = "65px";
  header.style.width = "100%";
  header.style.boxShadow = "0 3px 20px rgba(0,0,0,0.3)";
  header.style.position = "absolute";
  header.style.top = "0px";
  document.body.append(header);

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
}

 F_Half(json_obj) {
  let div2 = document.createElement("div");
  div2.style.height = "12rem";
  div2.style.width = "100%";
//   div2.style.border = "5px solid red";
  div2.style.position = "absolute";
  div2.style.top = "4.3rem";

  

  let div = document.createElement("div");
  div.style.height = "19.7rem";
  div.style.width = "100%";
//   div.style.border = "8px solid black";
  div.style.position = "absolute";
  div.style.top = "4.3rem";

  document.body.append(div);

  let img1 = document.createElement("img");
  img1.src = json_obj.img4;
  img1.style.position = "absolute";
  img1.style.top = "5rem";
  img1.style.left = "6rem";
  img1.style.height = "11.5rem";

  document.body.append(img1);

  let img2 = document.createElement("img");
  img2.src = json_obj.img5;
  img2.style.position = "absolute";
  img2.style.top = "8.3rem";
  img2.style.left = "29rem";
  img2.style.height = "8.5rem";

  document.body.append(img2);

  let img3 = document.createElement("img");
  img3.src = json_obj.img6;
  img3.style.position = "absolute";
  img3.style.top = "7.2rem";
  img3.style.left = "53rem";
  img3.style.height = "9.5rem";

  document.body.append(img3);

  let img4 = document.createElement("img");
  img4.src = json_obj.img7;
  img4.style.position = "absolute";
  img4.style.top = "7.2rem";
  img4.style.left = "75rem";
  img4.style.height = "9.5rem";

  document.body.append(img4);

  let a = document.createElement("a");
  a.href = "#";
  a.innerHTML = json_obj.button2;
  a.style.textDecoration = "none";
  a.style.color = "#f2efea";
  a.style.backgroundColor = "#2F4858";
  a.style.padding = "1.4rem 2.5rem";
  a.style.height = "1.7rem";
  a.style.width = "4.8rem";
  a.style.textAlign = "center";
  a.style.position = "absolute";
  a.style.top = "18rem";
  a.style.left = "5rem";
  a.style.fontSize = "1.3rem";
  a.style.borderRadius = "1.2rem";
  a.style.transition = "1s";
  a.onmouseenter = enter2;
  a.onmouseleave = leave2;
  a.addEventListener('click' , ()=>{window.open('card.html' , '_self')});


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

  let a1 = document.createElement("a");
  a1.href = "#";
  a1.innerHTML = json_obj.button3;
  a1.style.textDecoration = "none";
  a1.style.color = "#f2efea";
  a1.style.backgroundColor = "#2F4858";
  a1.style.padding = "1.4rem 2.5rem";
  a1.style.height = "1.7rem";
  a1.style.width = "4.8rem";
  a1.style.textAlign = "center";
  a1.style.position = "absolute";
  a1.style.top = "18rem";
  a1.style.left = "29rem";
  a1.style.fontSize = "1.3rem";
  a1.style.borderRadius = "1.2rem";
  a1.style.transition = "1s";
//   a1.onmouseenter = enter2;
//   a1.onmouseleave = leave2;
  
  document.body.append(a1);

  let a2 = document.createElement("a");
  a2.href = "#";
  a2.innerHTML = json_obj.button4;
  a2.style.textDecoration = "none";
  a2.style.color = "#f2efea";
  a2.style.backgroundColor = "#2F4858";
  a2.style.padding = "1.4rem 2.5rem";
  a2.style.height = "1.7rem";
  a2.style.width = "4.8rem";
  a2.style.textAlign = "center";
  a2.style.position = "absolute";
  a2.style.top = "18rem";
  a2.style.left = "53rem";
  a2.style.fontSize = "1.3rem";
  a2.style.borderRadius = "1.2rem";
  a2.style.transition = "1s";
//   a2.onmouseenter = enter2;
//   a2.onmouseleave = leave2;
  
  document.body.append(a2);

  let a3 = document.createElement("a");
  a3.href = "#";
  a3.innerHTML = json_obj.button5;
  a3.style.textDecoration = "none";
  a3.style.color = "#f2efea";
  a3.style.backgroundColor = "#2F4858";
  a3.style.padding = "1.4rem 2.5rem";
  a3.style.height = "1.7rem";
  a3.style.width = "4.8rem";
  a3.style.textAlign = "center";
  a3.style.position = "absolute";
  a3.style.top = "18rem";
  a3.style.left = "76rem";
  a3.style.fontSize = "1.3rem";
  a3.style.borderRadius = "1.2rem";
  a3.style.transition = "1s";
//   a2.onmouseenter = enter2;
//   a2.onmouseleave = leave2;
  
  document.body.append(a3);

}

 S_Half(json_obj)
{
  let div = document.createElement("div");
  div.style.height = "19.7rem";
  div.style.width = "100%";
  div.style.position = "absolute";
  div.style.top = "24.5rem";
  
  // div.style.outline = "8px solid black";
  document.body.append(div);

  let div1 = document.createElement("div");
  div1.style.height = "17rem";
  div1.style.width = "27rem";
  div1.style.position = "absolute";
  div1.style.top = "25.9rem";
  div1.style.left = "3rem";
  div1.style.outline = "2px solid red";
  div1.style.borderRadius = "1.3rem"

  document.body.append(div1);

  let div2 = document.createElement("div");
  div2.style.height = "17rem";
  div2.style.width = "27rem";
  div2.style.position = "absolute";
  div2.style.top = "25.9rem";
  div2.style.left = "34.5rem";
  div2.style.outline = "2px solid red";
  div2.style.borderRadius = "1.3rem"
  
  document.body.append(div2);

  let div3 = document.createElement("div");
  div3.style.height = "17rem";
  div3.style.width = "27rem";
  div3.style.position = "absolute";
  div3.style.top = "25.9rem";
  div3.style.left = "66rem";
  div3.style.outline = "2px solid red";
  div3.style.borderRadius = "1.3rem";

  document.body.append(div3);

  let img5 = document.createElement("img");
  img5.src = json_obj.img8;
  img5.style.height = "10rem";
  img5.style.position = "absolute";
  img5.style.top = "29rem";
  img5.style.left = "4.5rem";
  img5.style.outline = "1px solid gold";
  img5.style.borderRadius = "50%"
  document.body.append(img5);

  let span1 = document.createElement("span");
  span1.innerHTML = json_obj.cont2;
  span1.style.position = "absolute";
  span1.style.top = "29rem";
  span1.style.left = "17rem";
  span1.style.fontSize = "2rem";
  span1.style.fontWeight = "600";
  span1.style.textDecoration = "underline"
  
  document.body.append(span1);

  let span2 = document.createElement("span");
  span2.innerHTML = json_obj.cont5 + "&#8594";
  span2.style.position = "absolute";
  span2.style.top = "34rem";
  span2.style.left = "17rem";
  span2.style.fontSize = "2rem";
  span2.style.cursor = "pointer";
  span2.addEventListener("click" , ()=> {window.open("https://en.wikipedia.org/wiki/Floriculture" , "_blank")});
  
  document.body.append(span2);

  let img6 = document.createElement("img");
  img6.src = json_obj.img10;
  img6.style.height = "10rem";
  img6.style.position = "absolute";
  img6.style.top = "29rem";
  img6.style.left = "35.5rem";
  img6.style.outline = "1px solid gold";
  img6.style.borderRadius = "50%"
  document.body.append(img6);  

  let span3 = document.createElement("span");
  span3.innerHTML = json_obj.cont3;
  span3.style.position = "absolute";
  span3.style.top = "29rem";
  span3.style.left = "45.6rem";
  span3.style.fontSize = "2rem";
  span3.style.fontWeight = "600";
  span3.style.textDecoration = "underline"
  
  document.body.append(span3);

  let span4 = document.createElement("span");
  span4.innerHTML = json_obj.cont6 + "&#8594";
  span4.style.position = "absolute";
  span4.style.top = "34rem";
  span4.style.left = "48rem";
  span4.style.fontSize = "2rem";
  span4.style.cursor = "pointer";
  span4.addEventListener("click" , ()=> {window.open("https://www.youtube.com/watch?v=i810CxN5Q6Q&ab_channel=8KVIDEOSULTRAHD" , "_blank")});
  
  document.body.append(span4);

  let img7 = document.createElement("img");
  img7.src = json_obj.img9;
  img7.style.height = "10rem";
  img7.style.position = "absolute";
  img7.style.top = "29rem";
  img7.style.right = "18.5rem";
  img7.style.outline = "1px solid gold";
  img7.style.borderRadius = "50%"
  document.body.append(img7);  

  let span5 = document.createElement("span");
  span5.innerHTML = json_obj.cont4;
  span5.style.position = "absolute";
  span5.style.top = "29rem";
  span5.style.right = "3.6rem";
  span5.style.fontSize = "2rem";
  span5.style.fontWeight = "600";
  span5.style.textDecoration = "underline";
  
  document.body.append(span5);

  let span6 = document.createElement("span");
  span6.innerHTML = json_obj.cont5 + "&#8594";
  span6.style.position = "absolute";
  span6.style.top = "34rem";
  span6.style.right = "5rem";
  span6.style.fontSize = "2rem";
  span6.style.cursor = "pointer"
  span6.addEventListener("click" , ()=> {window.open("https://www.finegardening.com/" , "_blank")});
  
  document.body.append(span6);
}
};

load();
