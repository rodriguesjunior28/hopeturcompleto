import React, { Component } from 'react';
import { HeaderContainer, Naveg, H1, Span, Hover } from '../components/styles';


class Header extends Component {
    render() {
        return (
            <>
                <HeaderContainer>
                    <Naveg className="navbar navbar-expand-md fixed-top navbar-light bg-pastel site-header">
                        <Hover className="navbar-brand" href='/'><H1>HopeTur</H1></Hover>
                        <button
                            class="navbar-toggler collapsed mr-3"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse justify-content-end" id="navbarCollapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Hover className="nav-link" href='/destino'>
                                        <Span>Destino</Span>
                                    </Hover>
                                </li>
                                <li className="nav-item">
                                    <Hover className="nav-link" href='/promocao'>
                                        <Span>Promoção</Span>
                                    </Hover>
                                </li>
                                <li className="nav-item">
                                    <Hover className="nav-item nav-link active" href='/contato'>
                                        <Span>Contato</Span>
                                    </Hover>
                                </li>
                            </ul>
                        </div>
                    </Naveg>
                </HeaderContainer>
            </>
        )
    }
}

export default Header;







