import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHome } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slice';
import './navbar.css';

const Navbar = ({ totaleItems }) => {

  const location = useLocation();
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.user.isAuth)
  const user = useSelector((state) => state.user.user.username)
  const currentPath = location.pathname
  const [active, setacive] = useState(currentPath)

  const handlelogout = () => {
    dispatch(logout())
    if (isAuth) window.location = '/'
    else window.location = '/signin'
  }

  return (
    <>
      <div className='navbar'>
        <div className='logo'
          onClick={handlelogout}
        >
          <img src='/fab-top.png' alt="logo" className={isAuth ? "ac-logo" : "no-logo"} />
          {isAuth
            ? <p> Hi {user.split(' ')[0]}</p>
            : <p>signin</p>
          }
        </div>
        <div className='nav-lin'>
          <div
            className={active === "/" ? "lin-act list" : "list"}>
            <Link
              to={"/"}
              onClick={() => setacive('/')}
              className="links">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <div
            className={active === "/cart" ? "lin-act list" : "list"}>
            <Link
              to={"/cart"}
              onClick={() => setacive('/cart')}
              className="links">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            {(totaleItems > 0 && isAuth) && <span>{totaleItems}</span>}
          </div>
        </div>
      </div>
      <div className="custom-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
      {!["/signin","/signup","/cart" ,"/products","/ORDERS","/orders"].includes(location.pathname) &&
        <div className='introduction-detail'>
          <div className='nav-container'>
            <div className='store-title'>
              <span>I</span>
              <span>m</span>
              <span>a</span>
              <span>d</span>
              <span style={{ textDecorationLine: "none" }}>&nbsp;</span>
              <span>S</span>
              <span>t</span>
              <span>o</span>
              <span>r</span>
              <span>e</span>
            </div>
            <div className='store-introduction'>
              <div className='imad-store-right'>
                <img src="/intro.png" alt="intro1" />
              </div>
              <div className='imad-store-left'>
                Imad, barbier à Marrakech met un point d’honneur à fournir des soins qualitatifs à ses clients en les pratiquant avec une sélection de produits  tant pour la Barbe , les cheveux que les soins Visage , Pédicure et Manucure afin d’obtenir les meilleurs résultats .
                Nous mettons également tous nos produits  à la vente pour nos clients .
                Chers Messieurs ,Imad , votre barbier à Marrakech est là pour veiller à votre bien-être .
                Installez vous confortablement , nos mains expertes sauront bien s’occuper de vous !
              </div>
            </div>
          </div>
          <div className='sancronyser'>
            <div></div>
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;

