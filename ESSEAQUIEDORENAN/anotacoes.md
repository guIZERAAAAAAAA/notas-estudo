COISAS QUE O RENAN EXPLICOU 

PARA FAZER UM REPOSITIRIO 
-FAÇA UM REPOSITORIO NOVO NO GIT HUB
-VAI NA PASTA DO QUE VOCE CRIOU E VAI LA EM CODIGO E COPIA O SSH
-DEPOIS DISSO VAI LA NO GIT BASH E DIGITA 
- $ CD DOCUMENTS/ E CLICA ENTER 
-DEPOIS VAI ENTRA ~/DOCUMENTS/= $ GIT CLONE 
-DEPOIS DISSO VAI PARA O VS CODE 
-VAI LA EM CIMA NO CANTO DIRETO LA EM CIMA 
-CLICA EM FILE / OPEN FOLDER 
-DEPOIS VAI NA PASTA QUE VOÇÊ CRIOU NO VS CODE 
-E PRONTO 
///////////////////////////////////////////////////////////////////////////////////////////
23/2/26 
“Computador em si não faz nada sozinho “
Html – é a parte mais crua possível 
Css – é so cor 
Java script – é a maquina ou motor da coisa 

//////

Vamos para  parte do index agora no vs code 

-Vai no vs code escolhe a pasta de java script 
-Depois vai na no file botão direito e vai em new file 
-depois clica exclamação enter 

//////

-Nessa pasta do vs code vai na parte esquerda da tela e vai ter o README.MD
-Depois disso você vai criar uma ( FILE chamada INDEX.HTML ) 
- depois clica em EXCLAMSÇÃO ENTER , vai abri um script base 
Deois vai em um folder e cria a pasta script depois cria uma FILE depois escreve script.js 



/////////////////////////

Para lembrar a ( // ) COLOCAR uma descrição do que fazer  

Como fazemos isso em JS? 
 alert e prompt são o primeiro diálogo entre o código e o usuário
Alert Serve para exibir uma mensagem.
 Não recebe resposta Bloqueia a tela até o usuário confirmar Ideal para exemplos simples e aprendizado
 Detalhe importante: O código para e espera o usuário
Alert Serve para exibir uma mensagem. 
Não recebe resposta Bloqueia a tela até o usuário confirmar Ideal para exemplos simples e aprendizado Detalhe importante:
 O código para e espera o usuário
Prompt Ele irá nos permitir realizar duas ações:
 Mostrar uma pergunta Receber uma resposta do usuário Detalhe Importante: 
Toda resposta do prompt é texto (string), mesmo que o usuário digite um número

\identificar as coisas ( PEMSA NAS COISA ) 
////////////////////////////////////////////////////////////////////////////////////
26/2
Exericios do vs code 
Entrada 
Processamento 
Saída 

Aspas : tem a ver com escrever texto



Toda atividade você vai usar o alert , pompt , variável 

Const – algo que é constante, uma variável constante 

Se for 10 grau vai ser 50 graus em fire hit 
//////////////////////////
///////////////////////////////////////////////


2/3/26  

FUNÇÕES JAVA SCRIPT 

Interatividade e dinamismo 
Manipulação de DOM

DOM manipulação do html

FUNÇÃO Sincorá : ele esta falando e preto atenção 
Função asincora : é quando ele fica esperando
Fizemos o stles.css
Mudamos o index 
Main- oara um asasunto so 
Secchom ( acho que é assim ) 

Função Sincorá: é quando ele esta programando 



GetElement : puxa um elemento do html 
(EVENT) = Add.EventListener : ele vai ter 2 pareametros 
Mouseover = passa o mouse por cima e aparece a mensagem 
////////////////////////////////////////////////////////////
5/03/36       FUNÇÕES
renanponick (Renan)

Muito importante 
('', () => {})
 Usa-se as aspas porque ele é um texto zenum 
addEventListener 




function exercicios2 ()  {
    const hora = Number(prompt("digite uma hora: "))
    const valor = Number(prompt("digite um valor por hora: "))
    alert("resultado de "+ hora + " * " + valor + " = " + (hora * valor ))

}
const buttonexercicios2 = document.getElementById("Exercicio2-salario") 
buttonexercicios2.addEventListener('click', () => {exercicios2()})
/////////////////////////////////////////////////////////////
12/3/26

Operadores relacionais 
= é atribuição 
== È comparação 

! = é diferemte de 

Operadores lógicos 

( && ) condições / Verificação = && ( se todas as condições forem verdade )

|| ( ou ) inverte o valor 

If - condição 

Else – não atendeu a condição 








///////////////////////////////////////
16/3/26

Alert , prompt e variáveis 
Manipulação do DOM ( document) = 3 comandos 
Faça um programa ( nota de aluno ) 
Estrutura 

/////////////////////////////
9/4 react 

Agora você usa o command Prompt ( porque o meu deu merda )

 


Componentes
React-router-dom 

Ela é responsável pra facilitar a navegações entre diferentes paginas ou componentes sem carregar a pagina inteira 

Ele permite criar uma experiencia de “single page “ 

Instalando  

Vamos criar uma estrutura ( page )

Criar uma pasta no pages 

Pages ( folder )

Home (folder)

Index.jsx ( File )
Style.css( File )

About

Index.jsx( File )
Style.css( File )



///////////////////////////////////
16/4/26 

O que é react ?

React é uma biblioteca Javascript para construir interfaces de usuários 
Desenvolvimento pelo facebook 
Facilita a criação de componentes reutilizáveis 

Porque usar react ? 

Componentização ; 
Desempenho ;
Comunidade;

 Criar um projeto 

Npm create vite@lateste

Voce precisa criar um repositório no github obrigatoriamente 
E clonar 

Colocar na opção NODE em (ADD.gitignore)
COMO FAZER PARA CRIAR UM PROJETO ATUALIZADO 100% 

 criar um repositório 
colocar em publico
IMPORTANTE ( colocar o (ADD.gitignore) em NODE 
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




/////////////////////////////////////////////////////////
23/4/26 

Usestates 
Sintaxe 

( Precisa diso ai de Cima pra alguma coisa )


Hoje nao vamos mexer nas pastas home e about

Criamos uma pasta signUP
Index.jsx 
Style.css 

Sempre que a tela estiver dando branco no index ( inpeciona a pagina ) 

Fizemos essa bomba aqui ( la em baixo )


Criamos a const para podermos colocar nosso nome la no site, porém,precisamos colocar o value e o onChange para conseguirmos digitar e armazenar nosso nome 


Voce vai ter o <P> { resultado}<P>

O que eu preciso lembrar 

Rpm 
Rpm I react-router-dom


Npm create 



