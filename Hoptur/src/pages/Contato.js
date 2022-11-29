import React, { Component } from "react";
import Footer from "../layout/Footer";


class Contato extends Component {
    render() {
        return (
            <>
                <main className="container main">
                    <div className="row">
                        <div className="col-md-12">
                            <form>
                                <p><strong>Clique aqui para se cadastrar em nosso site, e receber nossas promoções e eventos:</strong></p>
                                <a href='./cadastro' className="btn btn-primary">Cadastro</a>
                                <p><strong>Fale Conosco</strong></p>
                                <p><strong>(71) 9999-9999 E-mail: hopetur@hopetur.com.br</strong></p>

                                <div className="form-group"><br></br>
                                    <label for="exampleFormControlInput1">E-mail</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInputInput1">Nome</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Escreva</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea><br></br>
                                    <button type="submit" className="btn btn-primary">Entrar</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </main><br></br>
                <Footer />
            </>
        )
    }
}

export default Contato