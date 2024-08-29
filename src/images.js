import imge from '/src/head-logo.webp'
import img2 from '/src/pay.jpg'


function imgapp(){
    const element=document.createElement('img')
    const ele2= document.getElementById('cv')
    const get=document.getElementById("logo")
      element.src=imge
      ele2.src=img2
      get.append(element)
    
}
export default  imgapp