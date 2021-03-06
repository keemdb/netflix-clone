import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {

	const [show, handleShow] = useState(false);

	useEffect(()=>{
		window.addEventListener('scroll', ()=>{
			if(window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});
		return ()=>{
			window.removeEventListener('scroll');
		}
	}, []);


  return (
	<div className={`nav ${show && "nav__blank"}`}>
		<img 
			className="nav__logo"
			src="./logo.png"
			alt="netflix logo"
		/>
		<img 
			className="nav__avatar"
			src="./avatar.png"
			alt="netflix logo"
		/>
	</div>
  )
}

export default Nav;