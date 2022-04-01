const sizes = ["Regular","Medium","Large"];
const crusts = ["New Hand Tossed","Wheat Thin Crust","Cheese Burst","Fresh Pan Pizza","Classic HandTossed"];
const Items =[
	{"id":"MIR101","image":"https://i.ibb.co/SR1Jzpv/mirinda.png","type":"Beverage","name":"Mirinda","desc":"Mirinda","veg":"Yes"},
	{"id":"PEP001","image":"https://i.ibb.co/3vkKqsF/pepsiblack.png","type":"Beverage","name":"Pepsi Black Can","desc":"Pepsi Black Can","veg":"Yes"},
	{"id":"LIT281","image":"https://i.ibb.co/27PvTng/lit.png","type":"Beverage","name":"Lipton IcedTea","desc":"Lipton Iced Tea","veg":"Yes"},
	{"id":"PEP022","image":"https://i.ibb.co/1M9xDZB/pepsi-new20190312.png","type":"Beverage","name":"Pepsi New","desc":"Pepsi New","veg":"Yes"},
	{"id":"BPCNV1","image":"https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png","type":"Burger Pizza","name":"Classic Non Veg","desc":"Oven-baked buns with cheese, peri-peri chicken, tomato & capsicum in creamy mayo","veg":"No"},
	{"id":"BPCV03","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Classic Veg","desc":"Oven-baked buns with cheese, tomato &capsicum in creamy mayo","veg":"Yes"},
	{"id":"BPPV04","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Premium Veg","desc":"Oven-baked buns with cheese, paneer,tomato, capsicum & red paprika in creamy mayo","veg":"Yes"},
	{"id":"DIP033","image":"https://i.ibb.co/0mbBzsw/new-cheesy.png","type":"SideDish","name":"Cheesy Dip","desc":"An all-time favorite with your Garlic Breadsticks & Stuffed GarlicBread for a Cheesy indulgence","veg":"Yes"},
	{"id":"DIP072","image":"https://i.ibb.co/fY52zBw/new-jalapeno.png","type":"SideDish","name":"Cheesy Jalapeno Dip","desc":"A spicy, tangy flavored cheese dip is a an absolutedelight with your favourite Garlic Breadsticks","veg":"Yes"},
	{"id":"GAR952","image":"https://i.ibb.co/BNVmfY9/Garlic-bread.png","type":"SideDish","name":"Garlic Breadsticks","desc":"Baked to perfection. Your perfect pizza partner! Tastesbest with dip","veg":"Yes"},
	{"id":"PARCH1","image":"https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png","type":"SideDish","name":"Chicken Parcel","desc":"Snacky bites! Pizza rolls with chicken sausage & creamyharissa sauce","veg":"No"},
	{"id":"PARVG7","image":"https://i.ibb.co/JHhrM7d/Parcel-Veg.png","type":"SideDish","name":"VegParcel","desc":"Snacky bites! Pizza rolls with paneer & creamy harissa sauce","veg":"Yes"},
	{"id":"PATNV7","image":"https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png","type":"SideDish","name":"White Pasta Italiano Non-Veg","desc":"Creamy white pasta with pepper barbecuechicken","veg":"No"},
	{"id":"PATVG4","image":"https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png","type":"SideDish","name":"White Pasta Italiano Veg","desc":"Creamy white pasta with herb grilledmushrooms","veg":"Yes"},
	{"id":"DES044","image":"https://i.ibb.co/gvpDKPv/Butterscotch.png","type":"Dessert","name":"Butterscotch Mousse Cake","desc":"Sweet temptation! Butterscotch flavored mousse","veg":"Yes"},
	{"id":"DES028","image":"https://i.ibb.co/nm96NZW/ChocoLava.png","type":"Dessert","name":"Choco Lava Cake","desc":"Chocolate lovers delight! Indulgent,gooey molten lava inside chocolate cake","veg":"Yes"},
	{"id":"PIZVDV","image":"https://i.ibb.co/F0H0SWG/deluxeveg.png","type":"Pizza","name":"DeluxeVeggie","desc":"Veg delight - onion, capsicum, grilled mushroom, corn & paneer","veg":"Yes"},
	{"id":"PIZVFH","image":"https://i.ibb.co/4mHxB5x/farmhouse.png","type":"Pizza","name":"Farmhouse","desc":"Delightful combination of onion, capsicum, tomato & grilled mushroom","veg":"Yes"},
	{"id":"PIZVIT","image":"https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png","type":"Pizza","name":"Indi Tandoori Paneer","desc":"It is hot. It is spicy. It is oh-soIndian. Tandoori paneer with capsicum, red paprika & mint mayo","veg":"Yes"},
	{"id":"PIZVMG","image":"https://i.ibb.co/MGcHnDZ/mexgreen.png","type":"Pizza","name":"Mexican Green Wave","desc":"Mexican herbs sprinkled on onion, capsicum, tomato &jalapeno","veg":"Yes"},
	{"id":"PIZVPP","image":"https://i.ibb.co/cb5vLX9/peppypaneer.png","type":"Pizza","name":"PeppyPaneer","desc":"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika","veg":"Yes"},
	{"id":"PIZVVE","image":"https://i.ibb.co/gTy5DTK/vegextra.png","type":"Pizza","name":"VegExtravaganza","desc":"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese","veg":"Yes"},
	{"id":"PIZNCP","image":"https://i.ibb.co/b5qBJ9d/cheesepepperoni.png","type":"Pizza","name":"Chicken Pepperoni","desc":"A classic American taste! Relish the delectable flavor of Chicken Pepperoni,topped with extra cheese","veg":"No"},
	{"id":"PIZNCD","image":"https://i.ibb.co/GFtkbB1/ChickenDominator10.png","type":"Pizza","name":"Chicken Dominator","desc":"Loaded with double pepperbarbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers","veg":"No"},
	{"id":"PIZNPB","image":"https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png","type":"Pizza","name":"Pepper Barbecue & Onion","desc":"A classic favourite with pepperbarbeque chicken & onion","veg":"No"},
	{"id":"PIZNIC","image":"https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png","type":"Pizza","name":"Indi Chicken Tikka","desc":"The wholesome flavour of tandoorimasala with Chicken tikka, onion, red paprika & mint mayo","veg":"No"}
];



function plus(idd){
	let ind=BillDB.findIndex(pro=>pro.id==idd);
	BillDB[ind].quantity+=1;
	addToCartForm();
	document.getElementById('q'+idd+'').innerHTML=BillDB[ind].quantity;
}
function minus(idd){
	//console.log(idd);
	let ind=BillDB.findIndex(pro=>pro.id==idd);
	if(BillDB[ind].quantity==1){
		BillDB.splice(ind,1);
		addToCartForm();
		changeBtn(idd,'ag');
		cartHeading();
	}else{
		BillDB[ind].quantity-=1;
		addToCartForm();
		document.getElementById('q'+idd+'').innerHTML=BillDB[ind].quantity;
	}
}
let BillDB=[];
function changeBtn(idd,ig=''){
	if(ig=='ag'){
		let ele=document.getElementById('b'+idd+'');
		if(ele!=null){
			ele.innerHTML='<a href="#" class="btn btn-primary" onclick="addToCart(\''+idd+'\')">Add To Cart</a>';
			let sele=document.getElementById('selectSize'+idd+'');
				if(sele!=null){
				sele.value='0';
				sele.disabled=false;
			}
			let cele=document.getElementById('selectCrust'+idd+'');
				if(cele!=null){
				cele.value='0';
				cele.disabled=false;
			}
		}
	}else{
		let ele=BillDB.findIndex(p=>p.id==idd);
		let txt='<button class="btn btn-sm btn-danger" onclick="minus(\''+idd+'\')">-</button> ';
    	txt+='<button class="mr-2 btn btn-sm btn-secondary " disabled id="q'+idd+'">'+BillDB[ele].quantity+'</button>';
    	txt+='<button class="mr-2 btn btn-sm btn-success " onclick="plus(\''+idd+'\')">+</button>';
    	document.getElementById('b'+idd+'').innerHTML=txt;
	}
	
}
function addBillTable(size,crust){
	//console.log(size,crust);
	if(BillDB.length==0)return '';
	let arr=BillDB.map(pro=>{
		
		let {id,image,desc,size,crust,quantity,name}=pro;
		let cl=(size=='0' && crust=='0')?'':'pt-5';
		let txt='<div class="card mb-3" style="max-width: 540px;">';
 		txt+=' <div class="row ">';
    	txt+='<div class="col-md-4 pt-5">';
      	txt+='<img src="'+image+'" class="card-img pl-2 '+cl+'" alt="...">';
    	txt+='</div>';
    	txt+='<div class="col-md-8">';
        txt+='<div class="card-body">';
        txt+='<h5 class="card-title">'+name+'</h5>';
        txt+='<p class="card-text">'+desc+'</p>';
        let msg=(size=='0' && crust=='0')?'': (size+' | '+crust);
		txt+='<p class="card-text"><b>'+msg+'</b></p>';
		txt+='<button class="btn btn-sm btn-danger" onclick="minus(\''+id+'\')">-</button> ';
    	txt+='<button class="mr-2 btn btn-sm btn-secondary " disabled >'+quantity+'</button>';
    	txt+='<button class="mr-2 btn btn-sm btn-success " onclick="plus(\''+id+'\')">+</button>';
     	txt+='</div>';
    	txt+='</div>';
  		txt+='</div>';
		txt+='</div>';
		return txt;
	});

	return arr.join('');
}
function addToCart(idd){
	
	let siz=document.getElementById('selectSize'+idd+'').value;
	let crus=document.getElementById('selectCrust'+idd+'').value;
	let sizEle=document.getElementById('selectSize'+idd+'');
	let crusEle=document.getElementById('selectCrust'+idd+'');
	console.log(sizEle.hidden);
	if(siz=="0" && sizEle.hidden==false){
		alert('Choose the Size before adding to Cart');
	}else if(crus=="0" && crusEle.hidden==false){
		alert('Choose the Crust before adding to Cart');
	}else{
		let ind=BillDB.findIndex(pro=>pro.id==idd);

	if(ind==-1){
		let pro=Items.find(pro=>pro.id==idd);
		let {id,image,type,name,desc,veg}=pro;
		let json={"id":idd,"image":image,"desc":desc,"size":siz,"crust":crus,'quantity':1,'name':name};
		BillDB.push(json);
	}else{
		BillDB[ind].quantity=BillDB[ind].quantity+1;
	}

	addToCartForm(siz,crus);
	document.getElementById('selectSize'+idd+'').disabled=true;
	document.getElementById('selectCrust'+idd+'').disabled=true;
	changeBtn(idd);
	cartHeading();
	}
}


function changeBtn2(){
	

	for(let i=0;i<BillDB.length;i++){

		let idd=BillDB[i].id;
		let sele=document.getElementById('selectSize'+idd+'');
		if(sele!=null){
			sele.value=BillDB[i].size;
			sele.disabled=true;
		}
		let cele=document.getElementById('selectCrust'+idd+'');
		if(cele!=null){
			cele.value=BillDB[i].crust;
			cele.disabled=true;
		}
	
		let txt='<button class="btn btn-sm btn-danger" onclick="minus(\''+idd+'\')">-</button> ';
    	txt+='<button class="mr-2 btn btn-sm btn-secondary " disabled id="q'+idd+'">'+BillDB[i].quantity+'</button>';
    	txt+='<button class="mr-2 btn btn-sm btn-success " onclick="plus(\''+idd+'\')">+</button>';
    	let ele=document.getElementById('b'+idd+'');
    	if(ele!=null){
    		ele.innerHTML=txt;
    	}
	}
}

function addToCartForm(size='',crust=''){
	let str='';
	str+=addBillTable(size,crust);
	document.getElementById('cart').innerHTML=str;
}

function cartHeading(){
	if(BillDB.length==0)
		document.getElementById('hea').innerHTML='<h3>Card is empty</h3>';
	else
		document.getElementById('hea').innerHTML='<h3>Card</h3>';
}


function getNonVegPizza(){
	let arr=Items.filter(itm=>{
		if((itm.type=='Pizza' || itm.type=="Burger Pizza") && itm.veg=='No')return true;
		return false;;
	});
	getPizzaForm(arr);
	changeBtn2();
	navbarShow('2');
	cartHeading();
}

function getSideDishes(){
	let arr=Items.filter(itm=>{
		if(itm.type=="SideDish")return true;
		return false;;
	});
	getPizzaForm(arr,'hidden');
	navbarShow('3');
	changeBtn2();
	cartHeading();
}

function getOtherItems(){
	let arr=Items.filter(itm=>{
		if(itm.type=="Beverage" || itm.type=="Dessert" )return true;
		return false;;
	});
	getPizzaForm(arr,'hidden');
	navbarShow('4');
	changeBtn2();
	cartHeading();
}
function getVegPizza(){
	let arr=Items.filter(itm=>{
		if((itm.type=='Pizza' || itm.type=="Burger Pizza") && itm.veg=='Yes')return true;
		return false;
	});
	
	getPizzaForm(arr);
	navbarShow('1');
	changeBtn2();
	cartHeading();
}
function getPizzaForm(arr,cl='') {
	//console.log(arr);
	let Pizaa=arr.map(itm=>{
		let {id,image,type,name,desc,veg}=itm;
		let txt='<div class="col-md-6">';
		txt+='<div class="card text-center bg-light" style="width: 22rem;">';
  		txt+='<div class="pr-3 pl-3 pt-1" style="">';
  		txt+='<img src="'+image+'" class="card-img-top" alt="...">';
  		txt+='</div>';
  		txt+='<div class="card-body">';
    	txt+='<h5 class="card-title">'+name+'</h5>';
    	txt+='<p class="card-text">'+desc+'</p>';
    	txt+='<form>';
  		txt+='<div class="row">';
    	txt+='<div class="col">';
    	txt+='<select  class="form-control " '+cl+' id="selectSize'+id+'">';
    	txt+='<option selected value="0">Select Size</option>';
    	let sarr=sizes.map(ss=>'<option value="'+ss+'">'+ss+'</option>');
    	txt+=sarr.join('');
    	txt+='</select>';
    	txt+='</div>';
    	txt+='<div class="col">';
    	txt+='<select  class="form-control " '+cl+' id="selectCrust'+id+'">';
   		txt+='<option selected value="0" >Select Crust</option>';
		let carr=crusts.map(ss=>'<option value="'+ss+'">'+ss+'</option>');
    	txt+=carr.join('');
    	txt+='</select>';
    	txt+='</div>';
  		txt+='</div>';
		txt+='</form>';
    	txt+='<div id="b'+id+'"><a href="#" class="btn btn-primary" onclick="addToCart(\''+id+'\')">Add To Cart</a></div>';
  		txt+='</div>';
		txt+='</div>';
		txt+='</div>';
		return txt;
	});

	document.getElementById('pizza').innerHTML=Pizaa.join('');
	
}


function navbarShow(val=''){
	let v1=v2=v3=v4='';
	v1= (val=='1')?'active':'';
	v2= (val=='2')?'active':'';
	v3= (val=='3')?'active':'';
	v4= (val=='4')?'active':'';
	let txt='<nav class="navbar navbar-expand-lg navbar-light bg-light">';
 	txt+='<a class="navbar-brand" href="#">MyFavPizza</a>';
  	txt+='<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    txt+='<span class="navbar-toggler-icon"></span>';
  	txt+='</button>';

  	txt+='<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    txt+='<ul class="navbar-nav mr-auto">';
    txt+='<li class="nav-item '+v1+'">';
    txt+='<a class="nav-link" href="#" onclick="getVegPizza()">Veg Pizza<span class="sr-only">(current)</span></a>';
    txt+='</li>';
    txt+='<li class="nav-item"  '+v2+'>';
    txt+='<a class="nav-link" href="#" onclick="getNonVegPizza()">Non-Veg Pizza</a>';
    txt+='</li>';
    txt+='<li class="nav-item" '+v3+'>';
    txt+='<a class="nav-link" href="#" onclick="getSideDishes()">Side Dishes</a>';
    txt+='</li>';
    txt+='<li class="nav-item" '+v4+'>';
    txt+='<a class="nav-link" href="#" onclick="getOtherItems()">Other Items</a>';
    txt+='</li>';
	txt+='</ul>';
    txt+='</form>';
  	txt+='</div>';
	txt+='</nav>';
	document.getElementById('nav1').innerHTML=txt;
}


navbarShow();












