 import menu1 from '/src/components/menuimages/menu1.jpg'
 import menu2 from '/src/components/menuimages/menu2.jpg'
import menu3 from  '/src/components/menuimages/menu3.jpg'
import menu4 from  '/src/components/menuimages/menu4.jpg'
import menu5 from  '/src/components/menuimages/menu5.jpg'



function Menu(){
    let menu=[{food:"chicken",price:400,avialble:"Availabel",imgs:menu1},
        {food:"pasta",price:400,avialble:"Availabel",imgs:menu2},
        {food:"noodles",price:450,avialble:"Availabel",imgs:menu3},
        {food:"cubcake",price:300,avialble:"Availabel",imgs:menu4},
        {food:"samosa",price:100,avialble:"Availabel",imgs:menu5}]
     let contain= document.getElementById('menucon')
     contain.style.display='flex'
    document.getElementById('first').style.display='none'
    document.getElementById('content').style.display='none'

   
        

  let cl=menu.map((e,i)=>{
        return  (`<div class="card">
            <img src=${e.imgs} alt="img">
           <h3>food: ${e.food}</h3><p>price: ${e.price}</p><p>${e.avialble}</p></div>`)
      }).join('')
      
contain.innerHTML=cl



    }
export default Menu


