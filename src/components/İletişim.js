import React from 'react'

const İletişim = () => {
    return (
        <div className="iletişim" id="contact">
            
        <footer className="p-5 mainfooter" role="contentinfo">
          <div className="footer-middle">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="text-center col-md-6 col-sm-12">
                  <div className="footer-pad">
                    <ul className=" p-4 list-unstyled">
                      <li>
                        <a className="text-decoration-none text-light" name="call me" href="tel:+905459456044">
                          <i className="fa fa-phone fa-2x ">
                            &nbsp;&nbsp; Call Me
                          </i>
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="text-decoration-none text-light" name="email" href="mailto:karaahmethkn@gmail.com">
                          <i className="fa fa-envelope fa-2x">
                            &nbsp;&nbsp;&nbsp; E-mail
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center col-md-6 col-sm-12">
                  <h4>Follow Me</h4>
                  <ul style={{ listStyleType: "none" }} className="list-inline">
                    <li className="p-3 list-inline-item">
                      <a
                      className="text-decoration-none text-light"
                        rel="noreferrer"
                        target="_blank"
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/hakan-karaahmeto%C4%9Flu-9988171b3/"
                      >
                        <i className="fab fa-linkedin fa-3x"></i>
                      </a>
                    </li>
                    <li className="p-3 list-inline-item">
                      <a
                      className="text-decoration-none text-light"
                        rel="noreferrer"
                        target="_blank"
                        title="GitHub"
                        href="https://github.com/hakankaraahmet"
                      >
                        <i className="fab fa-github fa-3x"></i>
                      </a>
                    </li>
                    <li className="p-3 list-inline-item">
                      <a
                      className="text-decoration-none text-light"
                        rel="noreferrer"
                        target="_blank"
                        title="Twitter"
                        href="https://twitter.com/karaahmetogluhk"
                      >
                        <i className="fab fa-twitter fa-3x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 copy">
                  <p className="text-center">
                    &copy; Copyright 2021 - Hakan Karaahmetoğlu. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default İletişim;