let btnPlus=document.querySelector('.plus');
let btnMoins=document.querySelector('.moins');

let btnAdd=document.querySelector('.Ajout-Article');



btnPlus.addEventListener('click', increasequantity);
btnPlus.addEventListener('click', stotal);

function increasequantity () {

    this.previousElementSibling.value= parseInt (this.previousElementSibling.value) +1;
    
}

function stotal(){

  let soustotal=document.querySelector('.stA');
  let prixunitaire=document.querySelector('.prixA');
  let quantity=document.querySelector('.Qproduct');

  soustotal.value= parseInt(quantity.value) * parseInt(prixunitaire.value)+ 'fr';
  
  //soustotal.value= parseInt(quantity.value) * parseInt(soustotal.previousElementSibling.value)+ 'fr';

}

btnMoins.addEventListener('click',reducequantity);

function reducequantity(){

    this.nextElementSibling.value= parseInt (this.nextElementSibling.value) -1;

    let soustotal=document.querySelector('.stA');
    let prixunitaire=document.querySelector('.prixA');
    let quantity=document.querySelector('.Qproduct');

   soustotal.value= parseInt(quantity.value) * parseInt(prixunitaire.value)+ 'fr';


}

btnAdd.addEventListener('click', Addarticle);

function Addarticle(params) {

  console.log(this); 
    let name=document.querySelector('.search-product');
    let price=document.querySelector('.search-price');
    let Newarticle=document.querySelector('.contenans');
    
   
    Newarticle.innerHTML= Newarticle.innerHTML +  ' <div class="contener"> <div class="article"> <div class="image-article"> <img class="img-article"  src="panier.png">  </div> <div class="info-article"> <p class="info">' + name.value + '</p> <button class="btn-sup">Supprimer</button> </div></div><div class="quantite"> <div class="Q-article"> <div class="moins"><button class="btn-moins" >-</button></div> <input class="Qproduct" value="1" > <div class="plus"> <button class="btn-plus">+</button> </div> </div></div><div class="prix-unitaire"><input class="prixA" value='+ price.value +'><input class="stA" value=' + price.value +'></div></div>';
 
    let btnPlusAll = document.querySelectorAll('.plus');
 
    btnPlusAll.forEach(btn => btn.addEventListener('click', increasequantity));
    btnPlusAll.forEach(btn => btn.addEventListener('click', stotal));
     
    
    let btnMoinsAll = document.querySelectorAll('.moins');
 
    btnMoinsAll.forEach(btn => btn.addEventListener('click', reducequantity));
    
}
   




 
 






   
   

 
