    
  var a;
  var b;
  var c;
  var p;
  document.querySelector("#pmj").value = 100;
  document.querySelector("#pmo").value = 0;
  var i =0 ;
 var tab=['roulette/number/0.png','roulette/number/1.png','roulette/number/2.png','roulette/number/3.png',
 'roulette/number/4.png','roulette/number/5.png','roulette/number/6.png','roulette/number/7.png',
 'roulette/number/8.png','roulette/number/9.png','roulette/number/10.png','roulette/number/11.png',
 'roulette/number/12.png','roulette/number/13.png','roulette/number/14.png','roulette/number/15.png',
 'roulette/number/16.png','roulette/number/17.png','roulette/number/18.png','roulette/number/19.png',
 'roulette/number/20.png','roulette/number/21.png', 'roulette/number/22.png','roulette/number/23.png',
 'roulette/number/24.png','roulette/number/25.png','roulette/number/26.png','roulette/number/27.png',
 'roulette/number/28.png','roulette/number/29.png','roulette/number/30.png','roulette/number/31.png',
 'roulette/number/32.png','roulette/number/33.png','roulette/number/34.png','roulette/number/35.png',
 'roulette/number/36.png'];



 function nb_aleatoire()
    
{
    var nombreroulette=Math.random();
    return Math.floor(nombreroulette*36);
}  
  var nombreroulette = nb_aleatoire(nombreroulette) ;
    
function go() {

     a = setTimeout("diapo()",20);
     document.querySelector("#stop").disabled=false;
     document.querySelector("#go").disabled=true;
}
function stop() {
    clearTimeout(a);
    c = setTimeout("roulette()",500)
    
    document.getElementById("i3").src=tab[nombreroulette]; 
    document.querySelector("#stop").disabled=true;
    document.querySelector("#go").disabled=false;
}

  function diapo()
{       
    document.getElementById("i3").src='roulette/roue/casino-roulette.gif'; 
   
}




function roulette()

{
    var b = document.querySelector("#pmj").value ;
    var p = document.querySelector("#pmo").value ;
    var a = document.querySelector(".pari:checked").value;
    var d = document.querySelector("#number").value ;
    if(1*d>1*b)
    {
        d=b;
        alert("Mise supérieure à la valeur du porte monnaie, la mise sera donc maximale !")
    }
    if (a==0)
    {
        alert("Mise perdue");
        b=1*b-1*d;
        p=1*p+1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = p ;
    }
    else if (a==nombreroulette)
    {
        alert("Vous avez gagné "+35*d+" mille francs !");
        b=1*b+36*d;
       
        document.querySelector("#pmj").value = b ;
       
    }
    
    else if ((a=="pair" && nombreroulette%2==0 ) || (a=="impair" && nombreroulette%2==1)) 
    {
        alert("Vous avez gagné "+2*d+" mille francs !");
        b=1*b+1*d;
       
        document.querySelector("#pmj").value = b ;
       
    }
    else
    {
        alert("Mise perdue");
        b=1*b-1*d;
        p=1*p+1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = p ;
        
    }
    
    if(b==0)
        {
            alert("Echec cuisant ! rejouer .");
           
            document.querySelector("#number").value=0;
            document.querySelector("#pmj").value = 100;
        }
        nombreroulette = nb_aleatoire(nombreroulette)
    
        
    
}
