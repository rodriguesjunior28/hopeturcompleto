import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <>
                <footer className="navbar fixed-bottom navbar-light w-100">
                    <div className="d-flex justify-content-around align-items-center w-100 footer-container">

                        <a className="text-decoration-none rodape-logo" href="./"> HopeTur</a>
                        <div className="footer-text-title">
                            <h6>Todos os Direitos Reservados</h6>
                            <h6> &copy; HopeTur</h6>
                        </div>
                        <div className="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer




