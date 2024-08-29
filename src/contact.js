 import imgs from '/src/contactback.webp'
let arr=['']
let ss=`display:flex;justify-content:start
;align-items:end; min-height: 440px;
`;


let ac=`background-image:url(${imgs});background-repeat: no-repeat;background-size:cover ;background-position:center;`

function contact(){
 
document.getElementById('first').style.display='none'
 document.getElementById('menucon').style.display='none'
let con=document.getElementById('content')
    

let m=arr.map((e,i)=>{

    return (`<div class="condiv">
            <label>Name:<br><input type="text"><label/><br>
            <label>Mail:<br><input type="text"><label/><br>
            <label>Contact:<br><input type="text"><label/><br>
            <label>message:<br><textarea id="w3review" name="w3review" rows="4" cols="30"></textarea>
            <label/>
            <br>
            <button>send</button>
            </div>`)
  }).join('')
  con.innerHTML=m
  con.style=ss+ac



}
export default contact