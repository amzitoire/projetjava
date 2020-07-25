    
 var i =0 ;
 var images=['number/0.png','number/1.png','number/2.png','number/3.png',
 'number/4.png','number/5.png','number/6.png','number/7.png',
 'number/8.png','number/9.png','number/10.png','number/11.png',
 'number/12.png','number/13.png','number/14.png','number/15.png',
 'number/16.png','number/17.png','number/18.png','number/19.png',
 'number/20.png','number/21.png', 'number/22.png','number/23.png',
 'number/24.png','number/25.png','number/26.png','number/27.png',
 'number/28.png','number/29.png','number/30.png','number/31.png',
 'number/32.png','number/33.png','number/34.png','number/35.png',
 'number/36.png'];
 
 function nb_aleatoire()
    
{
    var nombreroulette=Math.random();
    return Math.floor(nombreroulette*36);
}  
  var nombreroulette = nb_aleatoire(nombreroulette) ;
    
  
  function diapo()
{    
    document.slide.src=images[i]; 
    document.getElementById("i3").src=images[i]; 
    var a;
    
    if(i<images.length-1)
    {
        i++;
    }
    else 
    {
        i=0;
    }
   
    a = setTimeout("diapo()",100);
   
        
    if(document.images.slide.src=="roulette/number/"+ nombreroulette +".png")
    {  
        clearTimeout(a);
        i=0;
        setTimeout("roulette()",200);
    }
    
   
    
}




function roulette()

{
    var b = document.querySelector("#pmj").value ;
    var c = document.querySelector("#pmo").value ;
    
    var a = document.querySelector(".pari:checked").value;
    var d = document.querySelector("#number").value ;
    if(1*d>1*b)
    {
        d=b;
        alert("Mise supérieure à la valeur du porte monnaie, la mise sera donc maximale !")
    }
    if (a==nombreroulette)
    {
        alert("Vous avez gagné "+35*d+" mille francs !");
        b=1*b+36*d;
        c=1*c-1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = c;
    }
    
    else if ((a=="pair" && nombreroulette%2==0 ) || (a=="impair" && nombreroulette%2==1)) 
    {
        alert("Vous avez gagné "+d+" mille francs !");
        b=1*b+1*d;
        c=1*c-1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = c;
    }
    else
    {
        alert("Mise perdue");
        b=1*b-1*d;
        c=1*c+1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = c;
    }
    
    if(b==0)
        {
            alert("Echec cuisant ! Rafraîchissez la page pour rejouer .");
            document.querySelector("#number").disabled=true;
            document.querySelector("#number").value=0;
            
        }
    nombreroulette=nb_aleatoire(nombreroulette);
    
        
    
}
