import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Div, Img, ButtonCat, DivHor, DivButton, DivBar, DivAlpha, ButtonBar, ButtonProd } from './styles';

function Produtos() {

  const history = useHistory();
  const selectProduct = "select-product";
  const selectSend = "select-send";
  const finalTanks = "final-tanks";
  const insertEnd = "insert-end";

  const [show, setShow] = useState(false);
  const handleShow = () => valor > 0 ? setShow(true) : toast.info("Selecione ao menos 1 produto para continuar!", {
    toastId: selectProduct
  });
  const [showProd, setShowProd] = useState(false);
  const [contador, setContador] = useState(0)
  const [valor, setValor] = useState(0)
  const [endereco, setEndereco] = useState(false)
  const [dinheiro, setDinheiro] = useState(true)
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Salgados")
  const [entrega, setEntrega] = useState(false)
  const [retirar, setRetirar] = useState(false)
  const [enderecoCliente, setEnderecoCliente] = useState('')
  const [troco, setTroco] = useState('0')
  const [valorEntrega, setValorEntrega] = useState(3)
  const [idProd, setIdProd] = useState(0)

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
    }, {
      id: 4,
      nome: "Camisetas",
      image: "./assets/catSalgado.png"
    },
    {
      id: 5,
      nome: "Calças",
      image: "./assets/catDoce.png"
    },
    {
      id: 6,
      nome: "Shorts",
      image: "./assets/bebida.png"
    }, {
      id: 7,
      nome: "Banho",
      image: "./assets/catSalgado.png"
    },
    {
      id: 8,
      nome: "Higiene",
      image: "./assets/catDoce.png"
    },
    {
      id: 9,
      nome: "Decorações",
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
    }, {
      id: 7,
      nome: 'Pamonha',
      descricao: 'Unidade de 500g',
      categoria: "Salgados",
      valor: 3,
      qtde: 0,
      image: "./assets/pamonha.jpeg"
    },
    {
      id: 8,
      nome: 'Milho Verde',
      descricao: 'Embalagem com 6 unidades',
      categoria: "Salgados",
      valor: 10,
      qtde: 0,
      image: "./assets/milho-verde.jpg"
    }, {
      id: 9,
      nome: 'Cural',
      descricao: 'Pote de 300g',
      categoria: "Doces",
      valor: 5,
      qtde: 0,
      image: "./assets/cural.jpg"
    }, {
      id: 10,
      nome: 'Suco de Milho',
      descricao: 'Garrafa de 1L',
      categoria: "Bebidas",
      valor: 5,
      qtde: 0,
      image: "./assets/suco-milho.jpg"
    }, {
      id: 11,
      nome: 'Sorvete de Milho',
      descricao: '500g',
      categoria: "Doces",
      valor: 15,
      qtde: 0,
      image: "./assets/sorvete-milho.jpg"
    }, {
      id: 12,
      nome: 'Coca Cola',
      descricao: 'Lata de 300ml',
      categoria: "Bebidas",
      valor: 4.5,
      qtde: 0,
      image: "./assets/coca-cola.jpg"
    },
  ])

  useEffect(() => {
    setProdutos(produtos);
  }, [produtos])

  useEffect(() => {
    setCategorias(categorias);
  }, [categorias])

  useEffect(() => {
    setContador(contador);
  }, [contador])

  useEffect(() => {
    setRetirar(retirar);
  }, [retirar])

  useEffect(() => {
    setEntrega(entrega);
  }, [entrega])

  useEffect(() => {
    check()
  }, [entrega])

  useEffect(() => {
    check2()
  }, [retirar])

  useEffect(() => {
    setValor(valor)
  }, [valor])

  function diminuir(index) {
    setProdutos(
      produtos.map(item =>
        item.id === index && item.qtde !== 0
          ? { ...item, qtde: item.qtde - 1 }
          : item
      ));
    produtos.map(item =>
      item.id === index && item.qtde !== 0
        ? setValor(valor - item.valor)
        : item
    );
  }

  function aumentar(index) {
    setProdutos(
      produtos.map(item =>
        item.id === index
          ? { ...item, qtde: item.qtde + 1 }
          : item
      ));
    produtos.map(item =>
      item.id === index
        ? setValor(valor + item.valor)
        : item
    );

  }

  function sair() {
    setShow(false);
    setRetirar(false);
    setEntrega(false);
    setEndereco(false);
    setValor(valor - valorEntrega)
  }

  function sairProd(){
    setShowProd(false);
  }

  const finalizar = () => {
    if (enderecoCliente !== '') {
      //Insert no banco de dados
      toast.success('O Ministério Batista Nova Aliança agradeçe seu pedido!', {
        toastId: selectSend
      });
      setTimeout(function () { history.push("/"); }, 2500);
    } else {
      toast.info('Digite o endereço de entrega!', {
        toastId: insertEnd
      });
    }
  }

  function voltar() {
    if (valor > 0) {
      window.confirm("Todos os dados selecionados serão perdidos!", history.push("/"))
    } else {
      history.push("/")
    }
  }

  function check() {
    if (entrega === true) {
      setEndereco(true);
      setRetirar(false);
      setValor(valor + valorEntrega)
    } else {
      setEndereco(false)
      setValor(valor - valorEntrega)
    }
  }

  function check2() {
    if (retirar === true) {
      setEndereco(false);
      setEntrega(false);
    }
  }

  function openProd(index) {
    setShowProd(true)
    setIdProd(index)
  }

  return (
    <>
    <DivAlpha>
    <div>
        <h3 style={{ textAlign: "center", color: "white", backgroundColor: "#5b5b58", paddingTop: 20, paddingBottom: 10 }}>Ministério Batista Nova Aliança
      </h3>
      </div>
      <DivHor>
        {categorias.map(item => (
          <DivButton>
            <ButtonCat style={item.nome === categoriaSelecionada ? { backgroundColor: "#B22222", color: "white", border: "2px solid white" } : null} onClick={() => setCategoriaSelecionada(item.nome)}>{item.nome}</ButtonCat>
          </DivButton>
        ))}
      </DivHor>
      </DivAlpha>
      <Container>
        {produtos.filter(item => item.categoria === categoriaSelecionada).map(item => (
          <Div>
          <ButtonProd onClick={() => openProd(item.id)}>{item.nome}</ButtonProd>
          </Div>
          /*<Div>
            /*<Card style={{ boxShadow: '2px 2px 2px black', border: '1px solid black', textAlign: 'center' }}>
              <Card.Body >
                <Card.Title style={{ color: 'black', height: 50 }} >{item.nome}</Card.Title>
                <Img src={item.image} />
                <Card.Text style={{ color: 'black', height: 50 }} >{item.descricao}</Card.Text>
                <Card.Text style={{ color: 'black', fontSize: 20 }} >R${item.valor}</Card.Text>
                <Card.Text>
                  <Button onClick={() => diminuir(item.id)} style={{ padding: 10, backgroundColor: '#5b5b58' }}>-</Button>
                  <text style={{ padding: 5, fontSize: 20 }}>{item.qtde}</text><Button onClick={() => aumentar(item.id)} style={{ padding: 10, backgroundColor: '#5b5b58', border: 0 }}>+</Button></Card.Text>
              </Card.Body>
            </Card>
          </Div>*/
        ))}
        </Container>
      <DivBar>
        <div style={{ textAlign: "center" }}>
          <ButtonBar onClick={voltar} >Cancelar</ButtonBar>
        </div>
        <div >
          <p style={{ fontSize: 26, textAlign: 'center', color: "white" }}>Valor Total: <b>R${valor}</b></p>
        </div>
        <div style={{ textAlign: "center" }}>
          <ButtonBar onClick={handleShow} >Prosseguir</ButtonBar>
        </div>
      </DivBar>
      <div>
        <Row>
          <Modal backdrop="static" show={show} onHide={sair}>
            <Modal.Header closeButton>
              <Modal.Title>Resumo do Pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>{produtos.filter(a => a.qtde > 0).map(item => (<p>{item.qtde} x {item.nome} - R${item.qtde * item.valor}</p>))}</Modal.Body>
            {entrega === true ? <Modal.Body >Taxa de entrega: <b>R${valorEntrega}</b></Modal.Body> : <></>}
            <Modal.Body style={{ fontSize: 20 }}>Total: <b>R${valor}</b></Modal.Body>
            <Modal.Body>
              <Row>
                <Col>
                  <Form.Check type="checkbox" checked={retirar} onChange={() => retirar === false ? setRetirar(true) : setRetirar(false)} label="Retirar no local" />
                </Col>
                <Col>
                  <Form.Check checked={entrega} onChange={() => entrega === false ? setEntrega(true) : setEntrega(false)} type="checkbox" label="Entrega" />
                </Col>
              </Row>
              {retirar === true ? <div><br /><p>Endereço de retirada:</p><p>Av. Virgílio Soeira, 805 - Planalto Verde, Ribeirão Preto - SP</p></div> : <></>}
              {endereco === true ? <div><br /><p>Digite seu endereco:<Form.Control type="text" onChange={event => setEnderecoCliente(event.target.value)} /></p><Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Forma de pagamento</Form.Label>
                <Form.Control onChange={event => event.target.value === "Dinheiro" ? setDinheiro(true) : setDinheiro(false)} as="select">
                  <option>Dinheiro</option>
                  <option>Cartao de Credito</option>
                  <option>Cartao de Debito</option>
                  <option>Ticket Alimentacao</option>
                </Form.Control>
                {dinheiro === true ? <div><br /><p>Precisa de troco?<Form.Control onChange={event => setTroco(event.target.value)} type="number" defaultValue="0" /></p>
                </div> : <></>}</Form.Group></div> : <></>}
            </Modal.Body>
            <Modal.Footer>
              <Button style={{ border: 0, textAlign: 'center' }} variant="secondary" onClick={sair}>
                Voltar
          </Button>
              <Button style={{ backgroundColor: '#800000', border: 0, textAlign: 'center' }} onClick={() => retirar || entrega === true ? finalizar() : toast.info("Selecione a forma de retirada!", {
                toastId: finalTanks
              })}>
                Finalizar Pedido
          </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showProd} onHide={sairProd}>
          {produtos.filter(item => item.id === idProd).map(item => (
            <>
            <Modal.Header closeButton>
              <Modal.Title style={{fontWeight: 400}}>DETALHES DO PRODUTO</Modal.Title>
            </Modal.Header>
            <Modal.Body ><Img src={item.image} /></Modal.Body>
            <Modal.Body ><b>{item.nome}</b></Modal.Body>
            <Modal.Body >{item.descricao}</Modal.Body>
            <Modal.Body ><b style={{color: "#800000"}}>R${item.valor}</b></Modal.Body>
            <Modal.Body style={{textAlign: "center"}}>
                  <Button onClick={() => diminuir(item.id)} style={{ padding: 10, backgroundColor: '#5b5b58' }}>-</Button>
                  <text style={{ padding: 5, fontSize: 20 }}>{item.qtde}</text><Button onClick={() => aumentar(item.id)} style={{ padding: 10, backgroundColor: '#5b5b58', border: 0 }}>+</Button>
            </Modal.Body>
            </>
          ))}
          </Modal>
        </Row>
        <ToastContainer hideProgressBar={true} pauseOnHover style={{ width: 450 }} />
      </div>
    </>
  )
}

export default Produtos;