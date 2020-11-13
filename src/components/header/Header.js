import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider/StateProvider';

function Header() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="" className="header-logo"/>
            </Link>

            
            <div className="header-search">             
                <input type="text" className="header-search-input"/>
                <SearchIcon className="header-searchIcon" />
            </div>

            <div className="header-nav">
                <Link to="/login">
                    <div className="header-option">
                        <span className="header-option-LineOne">
                            Hello Guest
                        </span>
                        <span className="header-option-LineTwo">
                            Sign in
                        </span>
                    </div>
                </Link>
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
                <Link to="/checkout">
                    <div className="header-option-basket">
                        <ShoppingCartIcon />
    <span className="header-option-LineTwo header-basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
