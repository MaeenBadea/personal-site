import React from 'react';
import './styles.css';
import logo from './logo.svg';


export default function index() {
    return (
	<footer class="footer_area">
		<div class="container">
			<div class="row footer_center">
				<div class="col-lg-12">
					<div class="footer_top flex-column">
						<div class="footer_logo">
													
							<div className="App">
								<div className="App-header">
									<img src={logo} className="App-logo" alt="logo" />
								</div>
							</div>
							<h3>Get in touch!</h3>
							<h4>I would love to hear from you.</h4>
							<div style={{fontWeight: 'bold'}}><i class="fa fa-call"></i>  +(249) 926622193</div>
						</div>
						<div class="footer_social">
							<a target="_blank" href="https://web.facebook.com/maeen.badea"><i class="fa fa-facebook"></i></a>
							<a target="_blank" href="https://twitter.com/maeen_badea"><i class="fa fa-twitter"></i></a>
							<a target="_blank" href="https://github.com/MaeenBadea"><i class="fa fa-github"></i></a>
							<a target="_blank" href="https://www.linkedin.com/in/maeen-alikarrar/"><i class="fa fa-linkedin"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="row footer_bottom footer_center">
				<p class="col-lg-8 col-sm-12 footer-text">
                Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a target="_blank" href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
			</div>
		</div>
	</footer>
    )
}
