import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';

export default function Header() {
    const [{basket},dispatch]=useStateValue();
  return (
    <div className='header'>
        <Link to='/'>
            <img className='header_logo'
            src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1"/>
        </Link>
        

        <div className='header_search'>
            <input className='header_searchInput' type='text'/> {/*Logo*/}
            <SearchIcon className='header_searchIcon'/>

        </div>

        <div className='header_nav'>
            <Link to='/login'>
                <div className='header_option'>
                    <span className='header_optionOne'>Hello Guest </span>
                    <span className='header_optionTwo'>Sign In </span>

                </div>
            </Link>
            

            <div className='header_option'>
                <span className='header_optionOne'>Returns </span>
                <span className='header_optionTwo'>&Orders </span>

            </div>

            <div className='header_option'>
                <span className='header_optionOne'>Your </span>
                <span className='header_optionTwo'>Prime </span>

            </div>

            
            <Link to="/checkout">
                <div className='header_optionBasket'>
                <ShoppingBasket />
                <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                 </div>
            </Link>
                
            
        </div>
    
    
    
    
    
    
    </div>
  )
}
