import "./footer.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-">

        <div className="container text-center text-md-left">

            <div className="row text-center text-md-left">

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold">Company Name</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas.</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold">Products</h5>
                    <p>
                        <a href="#!" className="text-white">Product 1</a>
                    </p>
                    <p>
                        <a href="#!" className="text-white">Product 2</a>
                    </p>
                    <p>
                        <a href="#!" className="text-white">Product 3</a>
                    </p>
                    <p>
                        <a href="#!" className="text-white">Product 4</a>
                    </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold">Useful Links</h5>
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
                        <i className="fas fa-home mr-3"></i> Belém, PA 2299, BR</p>
                    <p>
                        <i className="fas fa-envelope mr-3"></i> mrobot@gmail.com</p>
                    <p>
                        <i className="fas fa-phone mr-3"></i> + 55 234 567 88</p>
                    <p>
                        <i className="fas fa-print mr-3"></i> + 55 234 567 89</p>
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
                                <a className="btn-floating btn-sm text-white" href="#!">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm text-white" href="#!">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm text-white" href="#!">
                                    <i className="fab fa-google"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn-floating btn-sm text-white" href="#!">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>

    </footer>
  )
}

export default Footer