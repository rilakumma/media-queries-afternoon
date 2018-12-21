import React, {Component} from 'react';

export default class Header extends Component{
    
    render(){
    return(
        <header>
            <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet"/>
            <div>
                <div className='left'>
                    <a href='#/services'>Start Bootstrap</a>
                </div>
                <button><p>MENU</p></button>
                <nav>
                    <ul>
                        <li><a href='#/services'>Services</a></li>
                        <li><a href='#/services'>Portfolio</a></li>
                        <li><a href='#/services'>About</a></li>
                        <li><a href='#/services'>Team</a></li>   
                        <li><a href='#/services'>Contact</a></li>                      
                    </ul>
                </nav>
            </div>
        </header>
    );
}
}