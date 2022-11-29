import React, { Component } from "react";
import Footer from "../layout/Footer";
import trancoso from '../img/Quemsomos/trancoso';
import arembepe from '../img/Quemsomos/arembepe.jpg';
import portoseguro from '../img/Quemsomos/portoseguro.jpg';

class QuemSomos extends Component {
    render() {
        return (
            <>
                <main className="container main">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-center">
                                <h1>
                                    "Somos uma empresa de turismo local, voltada para explorar as
                                    belezas e encantos da Bahia.
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={trancoso} alt="Card image cap" />
                                <div className="card-body">
                                    <h1 className="card-title text-center">TRANCOSO</h1>
                                </div>
                            </div>
                            <div className="card p-3">
                                <blockquote className="blockquote mb-0 card-body text-center">
                                    <p>
                                        "Mesmo não sabendo que era amor, sentiam que era bom"(Jorge
                                        Amado)
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={arembepe} alt="Card image cap" />
                                <div className="card-body">
                                    <h1 className="card-title text-center">AREMBEPE</h1>
                                </div>
                            </div>
                            <div className="card bg-primary text-white text-center p-3">
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        "Quem é essa ai papai? Tá cheia de assunto, hein?"<br />(Ivete
                                        Sangalo)
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img" src={portoseguro} alt="Card image" />
                            </div>
                            <div className="card p-3 text-right text-center">
                                <blockquote className="blockquote mb-0">
                                    <p></p>
                                    <h1>PORTO SEGURO</h1>
                                    <p></p>
                                </blockquote>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-text text-center">
                                        "Êta, mainha! Danaaada!!!."<br />(Compadre Washington)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main><br></br>
                <Footer />
            </>
        )
    }
}

export default QuemSomos;