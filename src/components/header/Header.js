import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsGraphUp } from 'react-icons/bs';
import { links } from './links';
import './header.scss';

export const Header = () => {
    const data = JSON.parse(localStorage.getItem('data'));

    return(
        <div>
            <header className = 'header'>
                <div className = 'icon'>
                    {/* <BsGraphUp size={35}/> */}
                    {/* <img src={`${process.env.PUBLIC_URL}/img/rxicon.png`}
                         alt='rxicon'
                         className='rxIcon'/> */}
                    <p> RxHelper </p>
                    <BsGraphUp size={33}/>
                </div>
                <div className = 'menu'>
                    {links.map((link, index) => {
                        if (link.path === '/signin') {
                            if (data) {
                                return(
                                    <Link key = {index} to = '/logout' className = 'menuLinkText'> Logout </Link>
                                );
                            } else {
                                return (
                                    <Link key = {index} to = {link.path} className = 'menuLinkText'> {link.text} </Link>
                                );
                            }
                        } else {
                            return (
                                <Link key = {index} to = {link.path} className = 'menuLinkText'> {link.text} </Link>
                            );
                        }
                        
                    })}
                </div>
            </header>
        </div>
    );
};