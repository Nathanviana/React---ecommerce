import "./footer.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-">

        <div className="container text-center text-md-left">

            <div className="row text-center text-md-left">

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold">E-commerce</h5>
                    <p>Um e-commerce, ou comércio eletrônico, é um modelo de negócios que permite a compra e venda de produtos ou serviços pela internet. A loja virtual geralmente inclui funcionalidades como catálogos de produtos, carrinho de compras, formas de pagamento e métodos de envio. Esse tipo de comércio tem crescido devido à conveniência e à facilidade de acesso, permitindo que empresas alcancem uma audiência global e consumidores encontrem uma ampla variedade de opções em um só lugar.</p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold">Links</h5>
                    <p>
                        <a href="#!" className="text-white">About Us</a>
                    </p>
                    <p>
                        <a href="#!" className="text-white">Contact Us</a>
                    </p>
                    <p>
                        <a href="#!" className="text-white">Privacy Policy</a>
                    </p>
                    <p>
                        <a href="#!" className="text-white">Terms of Service</a>
                    </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
                    <p>
                        <i className="bi bi-house mr-3"></i> Av. Alcindo Cacela, 287 - Umarizal, Belém - PA, 66060-902</p>
                    <p>
                        <i className="bi bi-envelope mr-3"></i> mrobot@gmail.com</p>
                    <p>
                        <i className="bi bi-phone mr-3"></i> + 55 919 567 88</p>
                </div>

            </div>

            <hr className="mb-4" />

            <div className="row align-items-center">

                <div className="col-md-7 col-lg-8">
                    <p>Copyright ©2024 All right reserved by: 
                        <a href="https://mdbootstrap.com/"><strong>The Providers</strong></a>
                    </p>
                </div>

                <div className="col-md-5 col-lg-4">

                    <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm text-white" href="https://facebook.com">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm text-white" href="https://github.com/Nathanviana/React-ecommerce">
                                    <i className="bi bi-github"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm text-white" href="https://google.com">
                                    <i className="bi bi-google"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm text-white" href="https://www.linkedin.com/in/douglas-baker-neto-592a2430a/">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </li>
                            <div className="mt-6">
					            <img className="mx-auto md:mx-0" src="https://i.ibb.co/Qfvn4z6/payment.png"     alt="payment providers" />
				        </div>
                        </ul>
                    </div>

                </div>

            </div>

        </div>

    </footer>
  )
}

export default Footer