document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";

document.body.style.backgroundColor = "#66d7d1";

let obj = 1;

async function load() {
  let request = new Request("index.json");
  let response = await fetch(request);

  let json_obj = await response.json();
  // CreateNavbar(json_obj);
  // CreateCard(json_obj);
  // obj = json_obj;

  let object = new ind;
  object.CreateNavbar(json_obj);
  object.CreateCard(json_obj);
}

/////////////////// --------------   ###############  N A V B A R    IN      P R O G R E S S   ###########  -----------/////////

class ind{

CreateNavbar(json_obj) {

  



  let header = document.createElement("header");
  let navbar = document.createElement("navbar");
  let ul = document.createElement("ul");
  header.append(navbar);
  navbar.append(ul);

  let imgg = document.createElement('img');
  imgg.src = json_obj.img14;
  navbar.append(imgg);
  imgg.style.position = "absolute";
  imgg.style.right = "15rem";
  imgg.style.width = "2.4rem";
  imgg.style.height = "2.4rem";
  imgg.style.cursor = "pointer";
  imgg.addEventListener('click' , ()=>{window.open('Sign_In.html' , '_self')});

  let h1 = document.createElement("h1");
  h1.innerHTML = json_obj.logo;
  navbar.append(h1);
  h1.style.fontSize = "30px";
  h1.style.marginLeft = "12px";
  h1.style.marginRight = "3px";
  h1.addEventListener("click", () => {
    window.open("/", "_self");
  });
  h1.style.cursor = "pointer";

  let span = document.createElement("span");
  span.innerHTML = json_obj.nav1;
  navbar.append(span);
  span.addEventListener("click", () => {
    window.open("Contact_Us.html", "_self");
  });
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
}

CreateCard(json_obj) {
  let card_container = document.createElement("div");
  card_container.style.width = "99%";
  card_container.style.height = "35rem";
  card_container.style.position = "relative";
  card_container.style.top = "2rem";
  card_container.style.display = "flex";
  card_container.style.justifyContent = "space-evenly";
  card_container.style.alignItems = "center";
  card_container.style.cursor = "pointer";
  card_container.style.margin = "4rem 0";
  // card_container.style.border = "4px solid black";

  let card = document.createElement("div");
  card.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card.style.backgroundColor = "#f2efea";
  card.style.width = "20rem";
  card.style.height = "33rem";
  card.style.borderRadius = "1rem";
  card.style.textAlign = "center";
  card.style.fontSize = "1.7rem";
  card.style.fontWeight = "700";
  card.style.border = "2px solid grey";

  let div_img = document.createElement("div");
  div_img.style.width = "100%";
  div_img.style.height = "55%";
  div_img.style.borderRadius = "1rem";
  div_img.style.display = "flex";
  div_img.style.justifyContent = "center";
  div_img.style.overflow = "hidden";
  div_img.style.alignItems = "center";
  // div_img.style.outline = "1px solid black";

  card.append(div_img);
  card_container.append(card);
  document.body.append(card_container);

  let i1 = document.createElement("img");
  i1.src = json_obj.img25;
  i1.style.width = "15rem";
  i1.style.height = "15rem";
  i1.style.borderRadius = "50%";
  div_img.append(i1);

  let p1 = document.createElement("p");
  p1.innerHTML = json_obj.cont25;
  card.append(p1);

  let p2 = document.createElement("p");
  p2.innerHTML = json_obj.cont26;
  card.append(p2);

  let p3 = document.createElement("p");
  p3.innerHTML = json_obj.cont27;
  p3.style.position = "relative";
  p3.style.left = "-2rem";
  card.append(p3);

  let span = document.createElement("span");
  span.innerHTML = json_obj.cont28;
  span.style.position = "relative";
  span.style.top = "-3.6rem";
  span.style.left = "9.6rem";
  span.style.textDecoration = "line-through";
  span.style.fontWeight = "500";
  card.append(span);

  let span1 = document.createElement("span");
  span1.innerHTML = json_obj.cont29;
  span1.style.position = "relative";
  span1.style.top = "-3.6rem";
  span1.style.left = "10.5rem";
  card.append(span1);

  let a = document.createElement("a");
  a.href = "#";
  a.innerHTML = json_obj.button7;
  a.style.textDecoration = "none";
  a.style.color = "white";
  a.style.backgroundColor = "#2F4858";
  a.style.padding = "0 3rem";
  a.style.position = "relative";
  a.style.left = "-2rem";
  a.style.borderRadius = "1rem";
  a.style.fontWeight = "500";
  card.append(a);

  let card1 = document.createElement("div");
  card1.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card1.style.backgroundColor = "#f2efea";
  card1.style.width = "20rem";
  card1.style.height = "33rem";
  card1.style.borderRadius = "1rem";
  card1.style.textAlign = "center";
  card1.style.fontSize = "1.7rem";
  card1.style.fontWeight = "700";
  card1.style.border = "2px solid grey";

  let div_img1 = document.createElement("div");
  div_img1.style.width = "100%";
  div_img1.style.height = "55%";
  div_img1.style.borderRadius = "1rem";
  div_img1.style.display = "flex";
  div_img1.style.justifyContent = "center";
  div_img1.style.overflow = "hidden";
  div_img1.style.alignItems = "center";

  card1.append(div_img1);
  card_container.append(card1);

  let i2 = document.createElement("img");
  i2.src = json_obj.img27;
  i2.style.width = "15rem";
  i2.style.height = "15rem";
  i2.style.borderRadius = "50%";
  div_img1.append(i2);

  let p4 = document.createElement("p");
  p4.innerHTML = json_obj.cont30;
  card1.append(p4);

  let p5 = document.createElement("p");
  p5.innerHTML = json_obj.cont26;
  card1.append(p5);

  let p6 = document.createElement("p");
  p6.innerHTML = json_obj.cont27;
  p6.style.position = "relative";
  p6.style.left = "-2rem";
  card1.append(p6);

  let span3 = document.createElement("span");
  span3.innerHTML = json_obj.cont28;
  span3.style.position = "relative";
  span3.style.top = "-3.6rem";
  span3.style.left = "9.6rem";
  span3.style.textDecoration = "line-through";
  span3.style.fontWeight = "500";
  card1.append(span3);

  let span4 = document.createElement("span");
  span4.innerHTML = json_obj.cont29;
  span4.style.position = "relative";
  span4.style.top = "-3.6rem";
  span4.style.left = "10.5rem";
  card1.append(span4);

  let a1 = document.createElement("a");
  a1.href = "#";
  a1.innerHTML = json_obj.button7;
  a1.style.textDecoration = "none";
  a1.style.color = "white";
  a1.style.backgroundColor = "#2F4858";
  a1.style.padding = "0 3rem";
  a1.style.position = "relative";
  a1.style.left = "-2rem";
  a1.style.borderRadius = "1rem";
  a1.style.fontWeight = "500";
  card1.append(a1);

  let card2 = document.createElement("div");
  card2.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card2.style.backgroundColor = "#f2efea";
  card2.style.width = "20rem";
  card2.style.height = "33rem";
  card2.style.borderRadius = "1rem";
  card2.style.textAlign = "center";
  card2.style.fontSize = "1.7rem";
  card2.style.fontWeight = "700";
  card2.style.border = "2px solid grey";

  let div_img2 = document.createElement("div");
  div_img2.style.width = "100%";
  div_img2.style.height = "55%";
  div_img2.style.borderRadius = "1rem";
  div_img2.style.display = "flex";
  div_img2.style.justifyContent = "center";
  div_img2.style.overflow = "hidden";
  div_img2.style.alignItems = "center";

  card2.append(div_img2);
  card_container.append(card2);

  let i3 = document.createElement("img");
  i3.src = json_obj.img28;
  i3.style.width = "15rem";
  i3.style.height = "15rem";
  i3.style.borderRadius = "50%";
  div_img2.append(i3);

  let p8 = document.createElement("p");
  p8.innerHTML = json_obj.cont31;
  card2.append(p8);

  let p9 = document.createElement("p");
  p9.innerHTML = json_obj.cont26;
  card2.append(p9);

  let p7 = document.createElement("p");
  p7.innerHTML = json_obj.cont27;
  p7.style.position = "relative";
  p7.style.left = "-2rem";
  card2.append(p7);

  let span6 = document.createElement("span");
  span6.innerHTML = json_obj.cont28;
  span6.style.position = "relative";
  span6.style.top = "-3.6rem";
  span6.style.left = "9.6rem";
  span6.style.textDecoration = "line-through";
  span6.style.fontWeight = "500";
  card2.append(span6);

  let span5 = document.createElement("span");
  span5.innerHTML = json_obj.cont29;
  span5.style.position = "relative";
  span5.style.top = "-3.6rem";
  span5.style.left = "10.5rem";
  card2.append(span5);

  let a2 = document.createElement("a");
  a2.href = "#";
  a2.innerHTML = json_obj.button7;
  a2.style.textDecoration = "none";
  a2.style.color = "white";
  a2.style.backgroundColor = "#2F4858";
  a2.style.padding = "0 3rem";
  a2.style.position = "relative";
  a2.style.left = "-2rem";
  a2.style.borderRadius = "1rem";
  a2.style.fontWeight = "500";
  card2.append(a2);

  CreateCard1(json_obj);
}

CreateCard1(json_obj) {
  let card_container = document.createElement("div");
  card_container.style.width = "99%";
  card_container.style.height = "35rem";
  card_container.style.position = "relative";
  card_container.style.top = "2rem";
  card_container.style.display = "flex";
  card_container.style.justifyContent = "space-evenly";
  card_container.style.alignItems = "center";
  card_container.style.cursor = "pointer";
  card_container.style.margin = "4rem 0";
  // card_container.style.border = "4px solid black";

  let card = document.createElement("div");
  card.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card.style.backgroundColor = "#f2efea";
  card.style.width = "20rem";
  card.style.height = "33rem";
  card.style.borderRadius = "1rem";
  card.style.textAlign = "center";
  card.style.fontSize = "1.7rem";
  card.style.fontWeight = "700";
  card.style.border = "2px solid grey";

  let div_img = document.createElement("div");
  div_img.style.width = "100%";
  div_img.style.height = "55%";
  div_img.style.borderRadius = "1rem";
  div_img.style.display = "flex";
  div_img.style.justifyContent = "center";
  div_img.style.overflow = "hidden";
  div_img.style.alignItems = "center";
  // div_img.style.outline = "1px solid black";

  card.append(div_img);
  card_container.append(card);
  document.body.append(card_container);

  // let card_container1 = document.createElement("div");
  // card_container1.style.width = "99%";
  // card_container1.style.height = "35rem";
  // card_container1.style.position = "relative";
  // card_container1.style.top = "6rem";
  // card_container1.style.display = "flex";
  // card_container1.style.justifyContent = "space-evenly";
  // card_container1.style.alignItems = "center";
  // card_container1.style.cursor = "pointer";
  // card_container1.style.margin = "4rem 0";
  // card_container1.style.border = "4px solid black";
  // document.body.append(card_container1);

  let i1 = document.createElement("img");
  i1.src = json_obj.img26;
  i1.style.width = "15rem";
  i1.style.height = "15rem";
  i1.style.borderRadius = "50%";
  div_img.append(i1);

  let p1 = document.createElement("p");
  p1.innerHTML = json_obj.cont32;
  card.append(p1);

  let p2 = document.createElement("p");
  p2.innerHTML = json_obj.cont26;
  card.append(p2);

  let p3 = document.createElement("p");
  p3.innerHTML = json_obj.cont27;
  p3.style.position = "relative";
  p3.style.left = "-2rem";
  card.append(p3);

  let span = document.createElement("span");
  span.innerHTML = json_obj.cont28;
  span.style.position = "relative";
  span.style.top = "-3.6rem";
  span.style.left = "9.6rem";
  span.style.textDecoration = "line-through";
  span.style.fontWeight = "500";
  card.append(span);

  let span1 = document.createElement("span");
  span1.innerHTML = json_obj.cont29;
  span1.style.position = "relative";
  span1.style.top = "-3.6rem";
  span1.style.left = "10.5rem";
  card.append(span1);

  let a = document.createElement("a");
  a.href = "#";
  a.innerHTML = json_obj.button7;
  a.style.textDecoration = "none";
  a.style.color = "white";
  a.style.backgroundColor = "#2F4858";
  a.style.padding = "0 3rem";
  a.style.position = "relative";
  a.style.left = "-2rem";
  a.style.borderRadius = "1rem";
  a.style.fontWeight = "500";
  card.append(a);

  let card1 = document.createElement("div");
  card1.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card1.style.backgroundColor = "#f2efea";
  card1.style.width = "20rem";
  card1.style.height = "33rem";
  card1.style.borderRadius = "1rem";
  card1.style.textAlign = "center";
  card1.style.fontSize = "1.7rem";
  card1.style.fontWeight = "700";
  card1.style.border = "2px solid grey";

  let div_img1 = document.createElement("div");
  div_img1.style.width = "100%";
  div_img1.style.height = "55%";
  div_img1.style.borderRadius = "1rem";
  div_img1.style.display = "flex";
  div_img1.style.justifyContent = "center";
  div_img1.style.overflow = "hidden";
  div_img1.style.alignItems = "center";

  card1.append(div_img1);
  card_container.append(card1);

  let i2 = document.createElement("img");
  i2.src = json_obj.img29;
  i2.style.width = "15rem";
  i2.style.height = "15rem";
  i2.style.borderRadius = "50%";
  div_img1.append(i2);

  let p4 = document.createElement("p");
  p4.innerHTML = json_obj.cont30;
  card1.append(p4);

  let p5 = document.createElement("p");
  p5.innerHTML = json_obj.cont26;
  card1.append(p5);

  let p6 = document.createElement("p");
  p6.innerHTML = json_obj.cont27;
  p6.style.position = "relative";
  p6.style.left = "-2rem";
  card1.append(p6);

  let span3 = document.createElement("span");
  span3.innerHTML = json_obj.cont28;
  span3.style.position = "relative";
  span3.style.top = "-3.6rem";
  span3.style.left = "9.6rem";
  span3.style.textDecoration = "line-through";
  span3.style.fontWeight = "500";
  card1.append(span3);

  let span4 = document.createElement("span");
  span4.innerHTML = json_obj.cont29;
  span4.style.position = "relative";
  span4.style.top = "-3.6rem";
  span4.style.left = "10.5rem";
  card1.append(span4);

  let a1 = document.createElement("a");
  a1.href = "#";
  a1.innerHTML = json_obj.button7;
  a1.style.textDecoration = "none";
  a1.style.color = "white";
  a1.style.backgroundColor = "#2F4858";
  a1.style.padding = "0 3rem";
  a1.style.position = "relative";
  a1.style.left = "-2rem";
  a1.style.borderRadius = "1rem";
  a1.style.fontWeight = "500";
  card1.append(a1);

  let card2 = document.createElement("div");
  card2.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card2.style.backgroundColor = "#f2efea";
  card2.style.width = "20rem";
  card2.style.height = "33rem";
  card2.style.borderRadius = "1rem";
  card2.style.textAlign = "center";
  card2.style.fontSize = "1.7rem";
  card2.style.fontWeight = "700";
  card2.style.border = "2px solid grey";

  let div_img2 = document.createElement("div");
  div_img2.style.width = "100%";
  div_img2.style.height = "55%";
  div_img2.style.borderRadius = "1rem";
  div_img2.style.display = "flex";
  div_img2.style.justifyContent = "center";
  div_img2.style.overflow = "hidden";
  div_img2.style.alignItems = "center";

  card2.append(div_img2);
  card_container.append(card2);

  let i3 = document.createElement("img");
  i3.src = json_obj.img30;
  i3.style.width = "15rem";
  i3.style.height = "15rem";
  i3.style.borderRadius = "50%";
  div_img2.append(i3);

  let p8 = document.createElement("p");
  p8.innerHTML = json_obj.cont33;
  card2.append(p8);

  let p9 = document.createElement("p");
  p9.innerHTML = json_obj.cont26;
  card2.append(p9);

  let p7 = document.createElement("p");
  p7.innerHTML = json_obj.cont27;
  p7.style.position = "relative";
  p7.style.left = "-2rem";
  card2.append(p7);

  let span6 = document.createElement("span");
  span6.innerHTML = json_obj.cont28;
  span6.style.position = "relative";
  span6.style.top = "-3.6rem";
  span6.style.left = "9.6rem";
  span6.style.textDecoration = "line-through";
  span6.style.fontWeight = "500";
  card2.append(span6);

  let span5 = document.createElement("span");
  span5.innerHTML = json_obj.cont29;
  span5.style.position = "relative";
  span5.style.top = "-3.6rem";
  span5.style.left = "10.5rem";
  card2.append(span5);

  let a2 = document.createElement("a");
  a2.href = "#";
  a2.innerHTML = json_obj.button7;
  a2.style.textDecoration = "none";
  a2.style.color = "white";
  a2.style.backgroundColor = "#2F4858";
  a2.style.padding = "0 3rem";
  a2.style.position = "relative";
  a2.style.left = "-2rem";
  a2.style.borderRadius = "1rem";
  a2.style.fontWeight = "500";
  card2.append(a2);

  CreateCard2(json_obj);
}

CreateCard2(json_obj) {
  let card_container = document.createElement("div");
  card_container.style.width = "99%";
  card_container.style.height = "35rem";
  card_container.style.position = "relative";
  card_container.style.top = "2rem";
  card_container.style.display = "flex";
  card_container.style.justifyContent = "space-evenly";
  card_container.style.alignItems = "center";
  card_container.style.cursor = "pointer";
  card_container.style.margin = "4rem 0";
  // card_container.style.border = "4px solid black";

  let card = document.createElement("div");
  card.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card.style.backgroundColor = "#f2efea";
  card.style.width = "20rem";
  card.style.height = "33rem";
  card.style.borderRadius = "1rem";
  card.style.textAlign = "center";
  card.style.fontSize = "1.7rem";
  card.style.fontWeight = "700";
  card.style.border = "2px solid grey";

  let div_img = document.createElement("div");
  div_img.style.width = "100%";
  div_img.style.height = "55%";
  div_img.style.borderRadius = "1rem";
  div_img.style.display = "flex";
  div_img.style.justifyContent = "center";
  div_img.style.overflow = "hidden";
  div_img.style.alignItems = "center";
  // div_img.style.outline = "1px solid black";

  card.append(div_img);
  card_container.append(card);
  document.body.append(card_container);

  let i1 = document.createElement("img");
  i1.src = json_obj.img25;
  i1.style.width = "15rem";
  i1.style.height = "15rem";
  i1.style.borderRadius = "50%";
  div_img.append(i1);

  let p1 = document.createElement("p");
  p1.innerHTML = json_obj.cont25;
  card.append(p1);

  let p2 = document.createElement("p");
  p2.innerHTML = json_obj.cont26;
  card.append(p2);

  let p3 = document.createElement("p");
  p3.innerHTML = json_obj.cont27;
  p3.style.position = "relative";
  p3.style.left = "-2rem";
  card.append(p3);

  let span = document.createElement("span");
  span.innerHTML = json_obj.cont28;
  span.style.position = "relative";
  span.style.top = "-3.6rem";
  span.style.left = "9.6rem";
  span.style.textDecoration = "line-through";
  span.style.fontWeight = "500";
  card.append(span);

  let span1 = document.createElement("span");
  span1.innerHTML = json_obj.cont29;
  span1.style.position = "relative";
  span1.style.top = "-3.6rem";
  span1.style.left = "10.5rem";
  card.append(span1);

  let a = document.createElement("a");
  a.href = "#";
  a.innerHTML = json_obj.button7;
  a.style.textDecoration = "none";
  a.style.color = "white";
  a.style.backgroundColor = "#2F4858";
  a.style.padding = "0 3rem";
  a.style.position = "relative";
  a.style.left = "-2rem";
  a.style.borderRadius = "1rem";
  a.style.fontWeight = "500";
  card.append(a);

  let card1 = document.createElement("div");
  card1.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card1.style.backgroundColor = "#f2efea";
  card1.style.width = "20rem";
  card1.style.height = "33rem";
  card1.style.borderRadius = "1rem";
  card1.style.textAlign = "center";
  card1.style.fontSize = "1.7rem";
  card1.style.fontWeight = "700";
  card1.style.border = "2px solid grey";

  let div_img1 = document.createElement("div");
  div_img1.style.width = "100%";
  div_img1.style.height = "55%";
  div_img1.style.borderRadius = "1rem";
  div_img1.style.display = "flex";
  div_img1.style.justifyContent = "center";
  div_img1.style.overflow = "hidden";
  div_img1.style.alignItems = "center";

  card1.append(div_img1);
  card_container.append(card1);

  let i2 = document.createElement("img");
  i2.src = json_obj.img27;
  i2.style.width = "15rem";
  i2.style.height = "15rem";
  i2.style.borderRadius = "50%";
  div_img1.append(i2);

  let p4 = document.createElement("p");
  p4.innerHTML = json_obj.cont30;
  card1.append(p4);

  let p5 = document.createElement("p");
  p5.innerHTML = json_obj.cont26;
  card1.append(p5);

  let p6 = document.createElement("p");
  p6.innerHTML = json_obj.cont27;
  p6.style.position = "relative";
  p6.style.left = "-2rem";
  card1.append(p6);

  let span3 = document.createElement("span");
  span3.innerHTML = json_obj.cont28;
  span3.style.position = "relative";
  span3.style.top = "-3.6rem";
  span3.style.left = "9.6rem";
  span3.style.textDecoration = "line-through";
  span3.style.fontWeight = "500";
  card1.append(span3);

  let span4 = document.createElement("span");
  span4.innerHTML = json_obj.cont29;
  span4.style.position = "relative";
  span4.style.top = "-3.6rem";
  span4.style.left = "10.5rem";
  card1.append(span4);

  let a1 = document.createElement("a");
  a1.href = "#";
  a1.innerHTML = json_obj.button7;
  a1.style.textDecoration = "none";
  a1.style.color = "white";
  a1.style.backgroundColor = "#2F4858";
  a1.style.padding = "0 3rem";
  a1.style.position = "relative";
  a1.style.left = "-2rem";
  a1.style.borderRadius = "1rem";
  a1.style.fontWeight = "500";
  card1.append(a1);

  let card2 = document.createElement("div");
  card2.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card2.style.backgroundColor = "#f2efea";
  card2.style.width = "20rem";
  card2.style.height = "33rem";
  card2.style.borderRadius = "1rem";
  card2.style.textAlign = "center";
  card2.style.fontSize = "1.7rem";
  card2.style.fontWeight = "700";
  card2.style.border = "2px solid grey";

  let div_img2 = document.createElement("div");
  div_img2.style.width = "100%";
  div_img2.style.height = "55%";
  div_img2.style.borderRadius = "1rem";
  div_img2.style.display = "flex";
  div_img2.style.justifyContent = "center";
  div_img2.style.overflow = "hidden";
  div_img2.style.alignItems = "center";

  card2.append(div_img2);
  card_container.append(card2);

  let i3 = document.createElement("img");
  i3.src = json_obj.img28;
  i3.style.width = "15rem";
  i3.style.height = "15rem";
  i3.style.borderRadius = "50%";
  div_img2.append(i3);

  let p8 = document.createElement("p");
  p8.innerHTML = json_obj.cont31;
  card2.append(p8);

  let p9 = document.createElement("p");
  p9.innerHTML = json_obj.cont26;
  card2.append(p9);

  let p7 = document.createElement("p");
  p7.innerHTML = json_obj.cont27;
  p7.style.position = "relative";
  p7.style.left = "-2rem";
  card2.append(p7);

  let span6 = document.createElement("span");
  span6.innerHTML = json_obj.cont28;
  span6.style.position = "relative";
  span6.style.top = "-3.6rem";
  span6.style.left = "9.6rem";
  span6.style.textDecoration = "line-through";
  span6.style.fontWeight = "500";
  card2.append(span6);

  let span5 = document.createElement("span");
  span5.innerHTML = json_obj.cont29;
  span5.style.position = "relative";
  span5.style.top = "-3.6rem";
  span5.style.left = "10.5rem";
  card2.append(span5);

  let a2 = document.createElement("a");
  a2.href = "#";
  a2.innerHTML = json_obj.button7;
  a2.style.textDecoration = "none";
  a2.style.color = "white";
  a2.style.backgroundColor = "#2F4858";
  a2.style.padding = "0 3rem";
  a2.style.position = "relative";
  a2.style.left = "-2rem";
  a2.style.borderRadius = "1rem";
  a2.style.fontWeight = "500";
  card2.append(a2);

  CreateCard3(json_obj)
}


 CreateCard3(json_obj) {
  let card_container = document.createElement("div");
  card_container.style.width = "99%";
  card_container.style.height = "35rem";
  card_container.style.position = "relative";
  card_container.style.top = "2rem";
  card_container.style.display = "flex";
  card_container.style.justifyContent = "space-evenly";
  card_container.style.alignItems = "center";
  card_container.style.cursor = "pointer";
  card_container.style.margin = "4rem 0";
  // card_container.style.border = "4px solid black";

  let card = document.createElement("div");
  card.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card.style.backgroundColor = "#f2efea";
  card.style.width = "20rem";
  card.style.height = "33rem";
  card.style.borderRadius = "1rem";
  card.style.textAlign = "center";
  card.style.fontSize = "1.7rem";
  card.style.fontWeight = "700";
  card.style.border = "2px solid grey";

  let div_img = document.createElement("div");
  div_img.style.width = "100%";
  div_img.style.height = "55%";
  div_img.style.borderRadius = "1rem";
  div_img.style.display = "flex";
  div_img.style.justifyContent = "center";
  div_img.style.overflow = "hidden";
  div_img.style.alignItems = "center";
  // div_img.style.outline = "1px solid black";

  card.append(div_img);
  card_container.append(card);
  document.body.append(card_container);

  // let card_container1 = document.createElement("div");
  // card_container1.style.width = "99%";
  // card_container1.style.height = "35rem";
  // card_container1.style.position = "relative";
  // card_container1.style.top = "6rem";
  // card_container1.style.display = "flex";
  // card_container1.style.justifyContent = "space-evenly";
  // card_container1.style.alignItems = "center";
  // card_container1.style.cursor = "pointer";
  // card_container1.style.margin = "4rem 0";
  // card_container1.style.border = "4px solid black";
  // document.body.append(card_container1);

  let i1 = document.createElement("img");
  i1.src = json_obj.img26;
  i1.style.width = "15rem";
  i1.style.height = "15rem";
  i1.style.borderRadius = "50%";
  div_img.append(i1);

  let p1 = document.createElement("p");
  p1.innerHTML = json_obj.cont32;
  card.append(p1);

  let p2 = document.createElement("p");
  p2.innerHTML = json_obj.cont26;
  card.append(p2);

  let p3 = document.createElement("p");
  p3.innerHTML = json_obj.cont27;
  p3.style.position = "relative";
  p3.style.left = "-2rem";
  card.append(p3);

  let span = document.createElement("span");
  span.innerHTML = json_obj.cont28;
  span.style.position = "relative";
  span.style.top = "-3.6rem";
  span.style.left = "9.6rem";
  span.style.textDecoration = "line-through";
  span.style.fontWeight = "500";
  card.append(span);

  let span1 = document.createElement("span");
  span1.innerHTML = json_obj.cont29;
  span1.style.position = "relative";
  span1.style.top = "-3.6rem";
  span1.style.left = "10.5rem";
  card.append(span1);

  let a = document.createElement("a");
  a.href = "#";
  a.innerHTML = json_obj.button7;
  a.style.textDecoration = "none";
  a.style.color = "white";
  a.style.backgroundColor = "#2F4858";
  a.style.padding = "0 3rem";
  a.style.position = "relative";
  a.style.left = "-2rem";
  a.style.borderRadius = "1rem";
  a.style.fontWeight = "500";
  card.append(a);

  let card1 = document.createElement("div");
  card1.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card1.style.backgroundColor = "#f2efea";
  card1.style.width = "20rem";
  card1.style.height = "33rem";
  card1.style.borderRadius = "1rem";
  card1.style.textAlign = "center";
  card1.style.fontSize = "1.7rem";
  card1.style.fontWeight = "700";
  card1.style.border = "2px solid grey";

  let div_img1 = document.createElement("div");
  div_img1.style.width = "100%";
  div_img1.style.height = "55%";
  div_img1.style.borderRadius = "1rem";
  div_img1.style.display = "flex";
  div_img1.style.justifyContent = "center";
  div_img1.style.overflow = "hidden";
  div_img1.style.alignItems = "center";

  card1.append(div_img1);
  card_container.append(card1);

  let i2 = document.createElement("img");
  i2.src = json_obj.img29;
  i2.style.width = "15rem";
  i2.style.height = "15rem";
  i2.style.borderRadius = "50%";
  div_img1.append(i2);

  let p4 = document.createElement("p");
  p4.innerHTML = json_obj.cont30;
  card1.append(p4);

  let p5 = document.createElement("p");
  p5.innerHTML = json_obj.cont26;
  card1.append(p5);

  let p6 = document.createElement("p");
  p6.innerHTML = json_obj.cont27;
  p6.style.position = "relative";
  p6.style.left = "-2rem";
  card1.append(p6);

  let span3 = document.createElement("span");
  span3.innerHTML = json_obj.cont28;
  span3.style.position = "relative";
  span3.style.top = "-3.6rem";
  span3.style.left = "9.6rem";
  span3.style.textDecoration = "line-through";
  span3.style.fontWeight = "500";
  card1.append(span3);

  let span4 = document.createElement("span");
  span4.innerHTML = json_obj.cont29;
  span4.style.position = "relative";
  span4.style.top = "-3.6rem";
  span4.style.left = "10.5rem";
  card1.append(span4);

  let a1 = document.createElement("a");
  a1.href = "#";
  a1.innerHTML = json_obj.button7;
  a1.style.textDecoration = "none";
  a1.style.color = "white";
  a1.style.backgroundColor = "#2F4858";
  a1.style.padding = "0 3rem";
  a1.style.position = "relative";
  a1.style.left = "-2rem";
  a1.style.borderRadius = "1rem";
  a1.style.fontWeight = "500";
  card1.append(a1);

  let card2 = document.createElement("div");
  card2.style.boxShadow = "-30px 30px 20px rgba(0,0,0,0.3)";
  card2.style.backgroundColor = "#f2efea";
  card2.style.width = "20rem";
  card2.style.height = "33rem";
  card2.style.borderRadius = "1rem";
  card2.style.textAlign = "center";
  card2.style.fontSize = "1.7rem";
  card2.style.fontWeight = "700";
  card2.style.border = "2px solid grey";

  let div_img2 = document.createElement("div");
  div_img2.style.width = "100%";
  div_img2.style.height = "55%";
  div_img2.style.borderRadius = "1rem";
  div_img2.style.display = "flex";
  div_img2.style.justifyContent = "center";
  div_img2.style.overflow = "hidden";
  div_img2.style.alignItems = "center";

  card2.append(div_img2);
  card_container.append(card2);

  let i3 = document.createElement("img");
  i3.src = json_obj.img30;
  i3.style.width = "15rem";
  i3.style.height = "15rem";
  i3.style.borderRadius = "50%";
  div_img2.append(i3);

  let p8 = document.createElement("p");
  p8.innerHTML = json_obj.cont33;
  card2.append(p8);

  let p9 = document.createElement("p");
  p9.innerHTML = json_obj.cont26;
  card2.append(p9);

  let p7 = document.createElement("p");
  p7.innerHTML = json_obj.cont27;
  p7.style.position = "relative";
  p7.style.left = "-2rem";
  card2.append(p7);

  let span6 = document.createElement("span");
  span6.innerHTML = json_obj.cont28;
  span6.style.position = "relative";
  span6.style.top = "-3.6rem";
  span6.style.left = "9.6rem";
  span6.style.textDecoration = "line-through";
  span6.style.fontWeight = "500";
  card2.append(span6);

  let span5 = document.createElement("span");
  span5.innerHTML = json_obj.cont29;
  span5.style.position = "relative";
  span5.style.top = "-3.6rem";
  span5.style.left = "10.5rem";
  card2.append(span5);

  let a2 = document.createElement("a");
  a2.href = "#";
  a2.innerHTML = json_obj.button7;
  a2.style.textDecoration = "none";
  a2.style.color = "white";
  a2.style.backgroundColor = "#2F4858";
  a2.style.padding = "0 3rem";
  a2.style.position = "relative";
  a2.style.left = "-2rem";
  a2.style.borderRadius = "1rem";
  a2.style.fontWeight = "500";
  card2.append(a2);

}

};

load();
