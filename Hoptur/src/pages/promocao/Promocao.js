import React, { Component } from "react";
import Footer from "../../layout/Footer";
import portoseguro3 from '../../img/Promocao/portoseguro3.jpg';
import morro from '../../img/Promocao/morro de são paulo.jpg';
import chapada from '../../img/Promocao/chapada diamantina.jpg';

class Promocao extends Component {
  render() {
      return(
          <><br></br>
              <main className="container main">
                  <div className="row">
                      <div className="col-md-12 mb-3">
                          <div className="text-center">
                              <h1>Uma seleção de promoções para você, confira:</h1>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card">
                              <img className="card-img-top" src={portoseguro3} />
                              <div className="card-body">
                                  <h5 className="card-title">PORTO SEGURO</h5>
                                  <p className="card-text">
                                      <strong>Saindo de Salvador</strong><br />Hospedagem<br />3 Diárias<br />
                                      <small className="text-muted">apenas</small><br /><strong>R$ 1.758</strong>
                                  </p>
                              </div>
                              <div className="card-footer">
                                  <a href="#" className="btn btn-primary">CONFIRA</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card">
                              <img className="card-img-top" src={morro} />
                              <div className="card-body">
                                  <h5 className="card-title">MORRO DE SÃO PAULO</h5>
                                  <p className="card-text">
                                      <strong>Saindo de Salvador</strong><br />Hospedagem<br />3 Diárias<br />
                                      <small className="text-muted">apenas</small><br /><strong>R$ 1.339</strong>
                                  </p>
                              </div>
                              <div className="card-footer">
                                  <a href="#" className="btn btn-primary">CONFIRA</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card">
                              <img className="card-img-top" src={chapada} />
                              <div className="card-body">
                                  <h5 className="card-title">CHAPADA DIAMANTINA</h5>
                                  <p className="card-text">
                                      <strong>Saindo de Salvador</strong><br />Hospedagem<br />3 Diárias<br />
                                      <small className="text-muted">apenas</small><br /><strong>R$ 1.578</strong>
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

export default Promocao;