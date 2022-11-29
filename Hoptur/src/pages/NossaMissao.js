import React, { Component } from "react";
import Footer from "../layout/Footer";
import imagem11 from '../img/Missao/imagem11.jpg';
import imagem7 from '../img/Missao/imagem7.jpg';
import imagem5 from '../img/Missao/imagem5';


class NossaMissao extends Component {
    render() {
        return (
            <>
                <main className="container main">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-center">
                                <h2 className="text-justify">
                                    "É oferecer um serviço de atendimento diferenciado, criando
                                    vínculos de amizade com seus clientes, procurando se colocar no
                                    lugar do cliente e buscando oferecer qualidade nos serviços
                                    prestados antes, durante e depois de cada evento realizado."
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={imagem11} alt="missão" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={imagem7} alt="missão" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={imagem5} alt="missão" />
                            </div>
                        </div>
                    </div>
                </main><br></br>
                <Footer />
            </>
        )
    }
}

export default NossaMissao;