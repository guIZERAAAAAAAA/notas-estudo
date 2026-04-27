Colocar na opção NODE em (ADD.gitignore)
COMO FAZER PARA CRIAR UM PROJETO ATUALIZADO 100% 

 criar um repositório 
colocar em publico
IMPORTANTE ( colocar o (ADD.gitignore) em NODE )
Vai no git bash e faz aquela bomba la 
Cd documents
Git clone ( Botão direito ) 
Cd Nome do repositório 
Code .

///////////VS CODE/////////|||||||||||||||||||||||||

Depois disso no Vs code 
Abre o terminal do vs code ( Ctrl+’ )
No canto em baixo direito vai ter um + com uma seta pra baixo ( clica ) 
Vai abrir algumas opções e clica em git bash 
Vai abrir o git bash , AI você via digitar 
$ npm create vite@latest .  ( ISSO É O MAIS IMPORTANTE ) 
Vai abaixar algumas coisas e depois vai aparecer pra você clicar (Y)
Vai aparecer package name 
Select a framewrok ( react ) 
Select variant ( JAVA SCRIPT ) 
E aceita tudo 
Depois disso coloca o npm I 
Npm I react-router-dom ( criar a pasta Jason ) 
Npm run dev ( pr aver se esta funcionando )

//////////////////////////////////////////////////

import { useState } from 'react'
import './style.css'
function Atividade2() {
const[numero1, setNumero1] =useState("")
const[numero2, setNumero2] =useState("")
const[resutado, setResultado] =useState("")
 
function handleSubmit() {
event.preventDefault()
console.log
setResultado (Number(numero1)+ Number(numero2))
 
}
    return(
    <>
   
<label htmlFor="text">Digite um numero</label>
<input
    type="text"
value={numero1
onch
}
/>
 
    </>
)
}
 
export default Atividade2