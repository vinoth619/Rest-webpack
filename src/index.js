import Menu from "./hello"
import imgapp from "./images"
import './components/example.css'
import contact from "./contact"
// 
 import h3m from "/src/home3.webp"
 import h2m from "/src/home2.webp"
 import h1m from "/src/home1.jpg"









let men=document.getElementById('Menu')
men.addEventListener('click',Menu)
let hom=document.getElementById('home')
 hom.addEventListener('click',Home)
 let consss=document.getElementById('cons')
     consss.addEventListener('click',contact)
      document.getElementById('menucon').style.display='none'
 document.getElementById('content').style.display='none'


function Home(){
 document.getElementById('menucon').style.display='none'
 document.getElementById('content').style.display='none'
 document.getElementById('first').style.display='block'


}
imgapp()


let first=document.getElementById('first');
const images=[h3m,h1m,h3m,h2m]

const keyframes=images.map((e)=>{
   return  {backgroundImage:`url(${e})`}
})
const option={
    duration:15000,iteration:Infinity
}



function  set(){
   
}


first.animate(keyframes,option)

     first.style.backgroundSize='cover'
     first.style.backgroundPosition='center'

 const cl=setInterval(() => {
    first.animate(keyframes,option)
 }, 15000);

 export default cl




