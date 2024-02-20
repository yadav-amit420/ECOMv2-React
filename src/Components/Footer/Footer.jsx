import React from 'react'
import './Footer.css'
import f_logo from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram_icon.png'
import p_icon from '../Assets/pintester_icon.png'
import W_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-logo">
				<img src={f_logo} alt=""/>
				<p>SHOPPER</p>
			</div>
			<div>
				<ul className="footer-links">
					<li>Company</li>
					<li>Products</li>
					<li>Offices</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="footer-social-icon">
				<div className="footer-icons-container">
					<img src={insta_icon} alt="" />
				</div>
				<div className="footer-icons-container">
					<img src={p_icon} alt="" />
				</div>
				<div className="footer-icons-container">
					<img src={W_icon} alt="" />
				</div>
			</div>
			<div className="footer-cp">
					<hr />
					<p>Copyright @2024 - All Right Reserved</p>
			</div>
		</div>
	)
}

export default Footer


