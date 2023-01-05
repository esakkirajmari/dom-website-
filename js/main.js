let food=[
    {
        name:"Puducherry Sri",
        imageurl:"https:res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y9lb8tqd3ilkjfhhjosy",
        cuisine:"South Indian, Chinese",
        value:"4.2",
        time:"22 Mins",
        amount:"₹ 300 for two",
        code:"50% off/Use WELCOME50",
    },
    {
        name:"Hyderabad Briyani",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/njqtgcdmse85dblw0liq",
        cuisine:"North Indian, South Indian",
        value:"4.4",
        time:"29 Mins",
        amount:"₹ 300 for two",
        code:"50% off/Use WELCOME50",
    },
    {
        name:"Mani's Dum Biryani",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sxsgyafmg99w0cecedip",
        cuisine:"Andhra, Biryani",
        value:"4.4",
        time:"27 Mins",
        amount:"₹ 500 for two",
        code:"50% off/Use WELCOME50",
    },
    {
        name:"Salem RR Biriyani ",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rtyhj7atqdexb03ss1r9",
        cuisine:"Biryani, Chettinad",
        value:"3.6",
        time:"26 Mins",
        amount:"₹ 400 for two",
        code:"50% off/Use WELCOME50",
    },
];


let cont=document.querySelector(".container");

let cards=document.createElement("div");
cards.classList.add("row");
cont.appendChild(cards);

food.forEach(e=>{
    let div=document.createElement("div");
    div.classList.add("col");
    cards.appendChild(div);

    let div2=document.createElement("div");
    div2.classList.add("col-cards");
    div.appendChild(div2);

    let img=document.createElement("img");
    img.src=e.imageurl;
    div2.appendChild(img);

    let head=document.createElement("h2");
    head.innerHTML=e.name;
    div2.appendChild(head);

    let para=document.createElement("p");
    para.innerHTML=e.cuisine;
    div2.appendChild(para);

    let div3=document.createElement("div");
    div3.classList.add("col-1");
    div2.appendChild(div3);

    let div4=document.createElement("div");
    div4.classList.add("icon");
    div3.appendChild(div4);

    let icons=document.createElement("i");
    icons.setAttribute("class","fa fa-star-o")
    div4.appendChild(icons);

    let ratings=document.createElement("span");
    ratings.innerHTML=e.value;
    div4.appendChild(ratings);

    let div5=document.createElement("div");
    div5.classList.add("time");
    div3.appendChild(div5);

    let para1=document.createElement("p");
    para1.innerHTML=e.time;
    div5.appendChild(para1);
  
    let div6=document.createElement("div");
    div6.classList.add("rupees");
    div3.appendChild(div6);

    let amounts=document.createElement("p");
    amounts.innerHTML=e.amount;
    div6.appendChild(amounts);

    let div8=document.createElement("div");
    div8.classList.add("col-3");
    div2.appendChild(div8);

    let codes=document.createElement("p");
    codes.innerHTML=e.code;
    div8.appendChild(codes);



    
    let addCart=document.createElement("div");
    addCart.classList.add("addCart");
    div2.appendChild(addCart);

    let cartLabel=document.createElement("div");
    cartLabel.classList.add("cartLabel");
    addCart.appendChild(cartLabel);
    cartLabel.innerHTML="ADD TO CART";

    let cartInp=document.createElement("div");
    cartInp.classList.add("cartInp");
    addCart.appendChild(cartInp);

    let decrease=document.createElement("button");
    decrease.setAttribute("id","btn1");
    decrease.innerHTML="-";
    cartInp.appendChild(decrease);

    let input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","number");
    cartInp.appendChild(input1);

    let increase=document.createElement("button");
    increase.setAttribute("id","btn2");
    increase.innerHTML="+";
    cartInp.appendChild(increase);

    
    decrease.addEventListener("click",function(){
     if(input1.value>0){
        input1.value--;
    }
});
    increase.addEventListener("click",function(){
        input1.value++;  

     let name=document.querySelector(".name");

    let para4=document.createElement("p");
    para4.innerHTML=e.name;
    name.appendChild(para4);
});

    
})



