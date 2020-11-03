import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="" className="header-logo"/>
            
            <div className="header-search">             
                <input type="text" className="header-search-input"/>
                <SearchIcon className="header-searchIcon" />
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-LineOne">
                        Hello Guest
                    </span>
                    <span className="header-option-LineTwo">
                        Sign in
                    </span>
                </div>

                <div className="header-option">
                     <span className="header-option-LineOne">
                        Returns
                    </span>
                    <span className="header-option-LineTwo">
                        &Orders
                    </span>
                </div>

                <div className="header-option">
                    <span className="header-option-LineOne">
                        Your
                    </span>
                    <span className="header-option-LineTwo">
                        Prime
                    </span>
                </div>

                <div className="header-option-basket">
                    <ShoppingCartIcon />
                    <span className="header-option-LineTwo header-basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
