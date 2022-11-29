import React, { Component } from 'react';
import Footer from '../layout/Footer';
import nanobeachclub_alo_alo_bahia from '../img/Destino/nanobeachclub_alo_alo_bahia.jpeg';
import ilhadasneves from '../img/Destino/ilhadasneves.jpg';
import Boipeba from '../img/Destino/Boipeba-2.jpg';

class Destino extends Component {
    render() {
        return(
            <><br></br><br></br>
                <main className="container main">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-center">
                                <h1>Uma seleção de promoções para você, confira:</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src={nanobeachclub_alo_alo_bahia} />
                                <div className="card-body">
                                    <h5 className="card-title">NANO BEACH PARK</h5>
                                    <p className="card-text">
                                        <strong>Saindo de Salvador</strong><br />Bate volta<br />Exclusiva<br />
                                        <small className="text-muted">apenas</small><br /><strong>R$ 125,00</strong>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">CONFIRA</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src={ilhadasneves} />
                                <div className="card-body">
                                    <h5 className="card-title">ILHA DAS NEVES</h5>
                                    <p className="card-text">
                                        <strong>Saindo de Salvador</strong><br />Bate volta<br />Imperdível<br />
                                        <small className="text-muted">apenas</small><br /><strong>R$ 90,00</strong>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">CONFIRA</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src={Boipeba} />
                                <div className="card-body">
                                    <h5 className="card-title">BOIPEBA</h5>
                                    <p className="card-text">
                                        <strong>Saindo de Salvador</strong><br />Excursão<br />3 Diárias<br />
                                        <small className="text-muted">a partir de</small><br /><strong>R$ 449,00</strong>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">CONFIRA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main><br></br><br></br><br></br><br></br>
                <Footer />
            </>
        )
    }
}

export default Destino;