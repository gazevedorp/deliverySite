import React, { useState, useEffect } from 'react'

import { Container, ContainerSup, Box, BoxTitle, BoxText, BoxButton } from "./HomeStyles";

export default function Home() {

    const [categorias, setCategorias] = useState([
        {
            id: 1,
            nome: "Salgados",
            image: "./assets/catSalgado.png"
        },
        {
            id: 2,
            nome: "Doces",
            image: "./assets/catDoce.png"
        },
        {
            id: 3,
            nome: "Bebidas",
            image: "./assets/bebida.png"
        }
    ])

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Pamonha',
            descricao: 'Unidade de 500g',
            categoria: "Salgados",
            valor: 3,
            qtde: 0,
            image: "./assets/pamonha.jpeg"
        },
        {
            id: 2,
            nome: 'Milho Verde',
            descricao: 'Embalagem com 6 unidades',
            categoria: "Salgados",
            valor: 10,
            qtde: 0,
            image: "./assets/milho-verde.jpg"
        }, {
            id: 3,
            nome: 'Cural',
            descricao: 'Pote de 300g',
            categoria: "Doces",
            valor: 5,
            qtde: 0,
            image: "./assets/cural.jpg"
        }, {
            id: 4,
            nome: 'Suco de Milho',
            descricao: 'Garrafa de 1L',
            categoria: "Bebidas",
            valor: 5,
            qtde: 0,
            image: "./assets/suco-milho.jpg"
        }, {
            id: 5,
            nome: 'Sorvete de Milho',
            descricao: '500g',
            categoria: "Doces",
            valor: 15,
            qtde: 0,
            image: "./assets/sorvete-milho.jpg"
        }, {
            id: 6,
            nome: 'Coca Cola',
            descricao: 'Lata de 300ml',
            categoria: "Bebidas",
            valor: 4.5,
            qtde: 0,
            image: "./assets/coca-cola.jpg"
        },
    ])

    return (
            <Container>
                {produtos.map(item => (
                    <Box key={item.id} >
                        <BoxTitle>{item.nome}</BoxTitle>
                        <img style={{ width: 162.50, height: 97.5 }} src={item.image} />
                        <BoxText>{item.descricao}</BoxText>
                        <BoxText>Valor: R${item.valor}</BoxText>
                    </Box>
                ))}
            </Container>
    );
}