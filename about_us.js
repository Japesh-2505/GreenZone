document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.width = "100%";
document.body.style.height = "100%";
document.body.style.overflow = "hidden";
document.body.style.fontFamily = "Poppins";

document.body.style.backgroundColor = "#f2efea";

let bg = document.createElement("div");
bg.style.width = "100%";
bg.style.height = "100%";
bg.style.clipPath = " polygon(0 0, 100% 0, 100% 40%, 0 40%)";
bg.style.position = "absolute";
bg.style.zIndex = "-1";
bg.style.backgroundColor = "#66d7d1";
bg.style.top = "0px";
// bg.style.boxShadow = "-10rem 20rem 30rem 30rem red";

document.body.append(bg);

async function load() {
  let request = new Request("index.json");
  let response = await fetch(request);

  let json_obj = await response.json();
  let obj = new about;
  obj.About_Us(json_obj);
}

class about{

 About_Us(json_obj) {
  let h1 = document.createElement("h1");
  h1.innerText = json_obj.cont17;
  h1.style.textAlign = "center";
  h1.style.fontSize = "2.4rem";
  h1.style.margin = "3rem auto";
  h1.style.fontWeight = "700";
  h1.style.color = "white";
  document.body.append(h1);

  let p = document.createElement("p");
  p.innerHTML = json_obj.cont18;
  p.style.color = "white";
  p.style.fontSize = "1.2rem";
  p.style.fontWeight = "500";
  p.style.textAlign = "center";
  document.body.append(p);

  let p1 = document.createElement("p");
  p1.innerHTML = json_obj.cont19;
  p1.style.color = "white";
  p1.style.fontSize = "1.2rem";
  p1.style.fontWeight = "500";
  p1.style.textAlign = "center";
  document.body.append(p1);

  let div_container = document.createElement("div");
  // div_container.style.border = "3px solid black";
  div_container.style.width = "100%";
  div_container.style.height = "25rem";
  div_container.style.position = "relative";
  div_container.style.top = "4rem";
  div_container.style.zIndex = "-1";
  document.body.append(div_container);

  let heading = document.createElement("div");
  heading.style.fontSize = "2rem";
  heading.style.width = "100%";
  heading.style.height = "3rem";
  heading.style.margin = "0";
  // heading.style.border = "3px solid red";
  heading.style.display = "flex";
  heading.style.justifyContent = "center";
  heading.style.fontWeight = "700";
  heading.innerHTML = json_obj.cont20;
  div_container.append(heading);

  let div_inside = document.createElement("div");
  div_inside.style.width = "100%";
  div_inside.style.height = "21rem";
  // div_inside.style.border = "3px solid blue";
  div_inside.style.display = "flex";
  div_inside.style.justifyContent = "space-evenly";
  div_inside.style.alignItems = "center";
  div_container.append(div_inside);

  let button = document.createElement('button');
  button.innerText = json_obj.cont15;
  button.style.width = "23rem";
  button.style.height = "2rem";
  button.style.fontSize = "1.2rem";
  button.style.backgroundColor = "#2F4858";
  button.style.color = "white";

  let p2 = document.createElement('p');
  p2.innerText = json_obj.cont24;
  

  let p3 = p2.cloneNode(true);
  let p4 = p2.cloneNode(true);

  let bt1 = button.cloneNode(true);
  let bt2 = button.cloneNode(true);

  let card = document.createElement("div");
  card.style.width = "25rem";
  card.style.height = "15rem";
  card.style.overflow = "hidden"
  // card.style.border = "3px solid green";
  card.innerText = json_obj.cont21;
  card.append(p2);
  card.append(bt1);
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.justifyContent = "center";
  card.style.alignItems = "center";
  card.style.fontSize = "1.6rem";
  card.style.backgroundColor = "white";
  card.style.boxShadow = "-5px 5px 15px  black";
  card.style.fontWeight = "700";
  div_inside.append(card);

  let card1 = document.createElement("div");
  card1.style.width = "25rem";
  card1.style.height = "15rem";
  // card1.style.border = "3px solid green";
  card1.innerText = json_obj.cont22;
  card1.style.overflow = "hidden"
  card1.append(p3);
  card1.append(bt2);
  card1.style.display = "flex";
  card1.style.flexDirection = "column";
  card1.style.justifyContent = "center";
  card1.style.alignItems = "center";
  card1.style.fontWeight = "700";
  card1.style.fontSize = "1.6rem";
  card1.style.backgroundColor = "white";
  card1.style.boxShadow = "-5px 5px 15px  black";
  div_inside.append(card1);

  let card2 = document.createElement("div");
  card2.style.width = "25rem";
  card2.style.height = "15rem";
  // card2.style.border = "3px solid green";
  card2.innerText = json_obj.cont23;
  card2.append(p4);
  card2.append(button);
  card2.style.display = "flex";
  card2.style.flexDirection = "column";
  card2.style.justifyContent = "center";
  card2.style.alignItems = "center";
  card2.style.fontSize = "1.6rem";
  card2.style.overflow = "hidden"
  card2.style.backgroundColor = "white";
  card2.style.boxShadow = "-5px 5px 15px  black";
  card2.style.fontWeight = "700";
  div_inside.append(card2);

  // ! Logo

  // let img2 = document.createElement("img");
  // img2.src = json_obj.img24;
  // img2.style.width = "5rem";
  // img2.style.height = "5rem";
  // img2.style.position = "absolute";
  // img2.style.top = "0.3rem";
  // img2.style.left = "0.3rem";
  // img2.style.backgroundColor = "#f2efea";
  // img2.style.borderRadius = "50%";
  // img2.style.padding = "0.2rem";
  // img2.style.boxShadow = "-10px 10px 15px black";
  // img2.addEventListener("click" , ()=>{window.open("index.html" , "_self")});
  // document.body.append(img2);

  
  
}

};

load();