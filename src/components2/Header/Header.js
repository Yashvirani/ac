import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../Firebase/Firebase';
import { Drawer } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

function Header() {
    const [{basket,user}] = useStateValue();
    console.log(basket);
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <>
        
        <nav className="header">
            <Link to="/">
            <img 
                className="header__logo"
                src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
                alt=""></img>
            </Link>
            
            {/*Logo*/ }
            {/*Search Box*/ }
            <div className="header__search"> 
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon"/>
            </div>
            

            {/*3 Links*/ }
            
            <div className="header__nav">
                <Link to={!user && '/login'} className="header__link"> 
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link"> 
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link"> 
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link"> 
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            {/*Basket Icon*/ }
            
         
        </nav>
        
         <div className="navbar">
            <HomeIcon className="icon"/>
         </div>
         

        </>
    )
}

export default Header;
