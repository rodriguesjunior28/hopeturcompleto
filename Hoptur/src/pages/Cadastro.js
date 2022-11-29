import { useState } from "react";
import axios from "axios";
import Footer from '../layout/Footer';
import { useNavigate } from "react-router-dom";
import React from "react";



function Cadastro() {

    const [name, setName] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [mensagemErro] = useState("mensagemErro");



    const navigate = useNavigate();  // tem que importar o navigate  { useNavigate }

    const logar = async (e) => {
        try {
            e.preventDefault();  // pra atulizar automaticamente
            await axios  // tem que importat o axios também 
                .api("https://localhost:7154/api", {
                    name: name,
                    senha: senha,
                    email: email,
                    endereco: endereco,
                    cidade: cidade,

                })
                .then((response) => {
                    localStorage.setItem('_usuario_logado', JSON.stringify(response.data))  // aqui é por questão de segurança obrigando o usuário está logado e não precisa ser colocado
                    navigate("/"); // o navegate te lança pra outra página quando vc está fazendo login
                });
        } catch (erro) {
            mensagemErro(erro.response.data);
        }

    };

    return (
        <>
            <main className="container main">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Favor preencher os campos abaixo:</h1><br></br>
                        <form>
                            <fieldset>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Nome Completo</label>
                                        <input type="text" name="nome" className="form-control" id="inputNome" placeholder="Digite o nome completo" onChange={(e) => setName(e.target.value)} value={name} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputPassword4">Senha</label>
                                        <input type="password" name="senha" className="form-control" id="inputPassword4" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} value={senha} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCEP">E-mail</label>
                                        <input type="text" name="email" className="form-control" id="inputEmail14" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAddress">Endereço</label>
                                    <input type="text" className="form-control" name="endereco" id="inputAddress" placeholder="Rua dos Bobos, nº 0" onChange={(e) => setEndereco(e.target.value)} value={endereco} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">Cidade</label>
                                        <input type="text" className="form-control" name="cidade" id="inputCity" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} value={cidade} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={logar}>Entrar</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </main><br></br><br></br>
            <Footer />
        </>
    )

}

export default Cadastro;





