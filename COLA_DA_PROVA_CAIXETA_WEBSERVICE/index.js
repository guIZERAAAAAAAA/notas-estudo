const express = require('express');
const app = express();

app.use(express.json());

//Buscar todos
app.get('/status', (req, res) => {
    res.status(200).json({ status: "ok , funcionou !!" })
})
////////////////////////////////PRODUTOS////////////////////////////////
const produtos = [
    {
        id: 1,
        nome: "sabão em pó",
        marca: "Homo"
    },
    {
        id: 2,
        nome: "sabão",
        marca: "Homo"
    },
    {
        id: 3,
        nome: "bolo em pó",
        marca: "Nestle"
    },
    {
        id: 4,
        nome: "Bolacha",
        marca: "nestle "
    },
    {
        id: 5,
        nome: "Arroz",
        marca: "Kika"
    },
    {
        id: 6,
        nome: "Feijão",
        marca: "Caldão "
    },
]
///////////////////////////////PRODUTOS//////////////////////////////////////////////////////

// buscar por id dos outros 
app.get('/produtos', (req, res) => {
    const { marca, nome } = req.query;
    if (marca || nome) {
        const produtosFiltrados = produtos.filter(item => item.marca.
            includes(marca) || item.nome.includes(nome))
        res.status(200).json(produtosFiltrados);

    } else {

    }
    res.status(200).json(produtos);
})

app.get('/produtos/:id', (req, res) => {
    const produto = produtos.find(p => p.id === Number(req.params.id));
    if (!produto) {
        return res.status(404).json({erro : 'roduto não encontrado '});
    }
    res.status(200).json(produto);
});

app.post('/produtos', (req,res) => {
    const nome = req?.body?.nome || null
    const marca= req?.body?.marca || null

    if(!marca){
        res.status(400).json({error:'Marcar é obrigatorio '})
    }
     if(!nome){
        res.status(400).json({error:'Marcar é obrigatorio '})
    }

    const novoProduto = {
         id:produtos.length + 1,
        nome:nome ,
        marca:marca
    }
      produtos.push(novoProduto);
      res.status(201).json(novoProduto);
})

app.put("/produtos/:id", (req, res ) =>{
    const produto = produtos.find((p) =>p.id === Number(req.params.id));

    if(!produto) {
        return res.status(404).json({erro :" Produto não encontrado "})
    };
    if (req?.body?.nome && req.body.marca != "") {
        produto.nome = req.body.nome;

    }
    if (req?.body?.marca && req.body.marca != ""){""
        produto.marca = req.body.marca ;
    }
    res.status(200).json(produto);
});


// app.delete("/produtos/:id ", (req, res ) => {
//     const indice = produtos.findIndex((p) => p.id === Number (req.params.id));
//     if(indice === -1)
//         return res.status(404).json({erro : "produto nao encontrado "});
//     produtos.splice(indice, 1 );
//     res.status(204).send();
// })

app.delete ("/batatinha/:id", ( req,res ) =>{
 const indice = produtos.findIndex((p) => p.id === Number (req.params.id));
    if(indice === -1)
        return res.status(404).json({erro : "produto nao encontrado "});
    produtos.splice(indice, 1 );
    res.status(204).send();
})
  // rotas em xml //////////////////////////////////////////////////////////////////////

app.get('/produtos/:id/xml', (req, res) => {
    const produto = produtos.find(p => p.id === Number(req.params.id));
    if (!produto) {

         res.status(404).type('application/xml').send('<erro>Produto não encontrado </erro>');
    }

    res.status(200).type('application/xml').send(`<id>${produto.id}<id><nome>${produto.nome}</nome><marca>${produto.marca}</marca>`);//essa bomba aqui é o xml 
});


const porta = 3000
app.listen(3000, () => console.log('servidor rodando na porta 3000')
)

export default app;