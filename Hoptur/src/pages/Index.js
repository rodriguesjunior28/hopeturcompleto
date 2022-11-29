import React, { Component } from "react";
import Footer from '../layout/Footer';
import carnaval from '../img/Outras/carnaval1.jpg';
import berimbau from '../img/Outras/berimbau1.jpg';
import morro from '../img/Outras/morrodesaopaulo1.jpg';


class Index extends Component {
    render() {
        return (
            <>   
                <body className="bg">
                    <main className="container main">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="card text-center">
                                    <div className="card-header text-center">
                                        <h5 className="mb-0">QUEM SOMOS</h5>
                                    </div>
                                    <div className="card-body">
                                        <img src={carnaval} />
                                    </div>
                                    <div className="card-footer bg-transparent">
                                        <a href='./QuemSomos' className="btn btn-primary btn-block">Clique Aqui</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card text-center">
                                    <div className="card-header text-center">
                                        <h5 className="mb-0">NOSSA MISSÃO</h5>
                                    </div>
                                    <div className="card-body">
                                        <img src={berimbau} />
                                    </div>
                                    <div className="card-footer bg-transparent">
                                        <a href='./NossaMissao' className="btn btn-primary btn-block">Clique Aqui</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card text-center">
                                    <div className="card-header text-center">
                                        <h5 className="mb-0">NOSSA VISÃO</h5>
                                    </div>
                                    <div className="card-body">
                                        <img src={morro} />
                                    </div>
                                    <div className="card-footer bg-transparent">
                                        <a href='./Visao' className="btn btn-primary btn-block">Clique Aqui</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
                <Footer />
            </>
        )
    }
}

export default Index