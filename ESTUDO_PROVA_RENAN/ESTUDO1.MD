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



////////////////////////////////////////////////

### 1. Criação e Instalação
npm create vite@latest .

npm i react-router-dom


### 2. http://main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)


### 3. http://App.jsx
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import EX1 from './Pages/EX1'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/ex1" element={<EX1/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App


### 4. Pages/Home.jsx
import { Link } from 'react-router-dom'
import './style.css'

function Home (){
  return(
    <>
      <h2>bem vindo ao meu sistema</h2>
      <Link to="/about">
        <button>navegar para exercicios = about</button>
      </Link>
    </>
  )
}
export default Home


### 5. Pages/About.jsx
import { Link } from 'react-router-dom'
import './style.css'

function About (){
  return (
    <>
      <h2>tela about</h2>
      <Link to="/">
        <button>voltar para tela inicial /home</button>
      </Link>
      <Link to="/ex1">
        <button>ir para exercicio 1</button>
      </Link>
    </>
  )
}
export default About

Corrigi: troquei to="/Ex1" por to="/ex1" pra bater com a rota do http://App.jsx.

### 6. Pages/EX1.jsx
import './style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function EX1() {
  const [numero1, setNumero1] = useState("")
  const [numero2, setNumero2] = useState("")
  const [resultado, setResultado] = useState()

  function handleSubmit(event){
    event.preventDefault()
    console.log()
    setResultado(Number(numero1) + Number(numero2))
  }

  return(
    <>
      <h1>atividade1</h1>
      <form onSubmit={handleSubmit}>
        <label>Digite outro numero:</label>
        <input
          type="text"
          value={numero1}
          onChange={(event)=> setNumero1(event.target.value)}
        />

        <label>Digite um outro numero:</label>
        <input
          type="number"
          value={numero2}
          onChange={(event)=> setNumero2(event.target.value)}
        />

        <label>somar os dois numeros</label>
        <button type="submit">somar</button>
      </form>
      <p>{resultado}</p>
    </>
  )
}
export default EX1

Corrigi: fechei o onChange do segundo input que estava cortado.

### 7. Componentes/Header.jsx
import './style.css'

function Header() {
  return (
    <>
      <header>
        <h1>Treino React</h1>
      </header>
    </>
  )
}
export default Header


### 8. Componentes/Footer.jsx
import './style.css'

function Footer() {
  return(
    <>
      <footer id="footer">
        <p>Minha primeira API React - &copy; Todos os direitos reservados</p>
      </footer>
    </>
  )
}
export default Footer