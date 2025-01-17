
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="myheader">            
            <header className="hide-when-mobile riyan">

          <h1>
            <Link to="/">
            Riyan Courses
            </Link>
           </h1>
          <ul className="flex">
            <li className="main-list">
              <NavLink className="main-link" to="/html">
                
                HTML
              </NavLink>

              <ul className="sub-ul">
                <li>
                  <NavLink to="/html">Full Course</NavLink>
                </li>
                <li>
                  <NavLink to="#">Crash Course</NavLink>
                </li>
                <li>
                  <NavLink to="#">learn in 1h</NavLink>
                </li>
              </ul>
            </li>

            <li className="main-list">
              <NavLink className="main-link" to="/css">
                
                CSS
              </NavLink>
              
              <ul className="sub-ul">
                <li>
                  <NavLink to="/css">Full Course</NavLink>
                </li>
                <li>
                  <NavLink to="#">CSS Examples</NavLink>
                </li>
                <li className="mini-projects">
                  <NavLink to="">mini projects&nbsp; + </NavLink>
                  <ul className="sub-sub-ul">
                    <li>
                      <NavLink to="#">project 1</NavLink>
                    </li>
                    <li>
                      <NavLink to="">project 2</NavLink>
                    </li>
                    <li>
                      <NavLink to="">project 3</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>

            </li>
            <li className="main-list">
              <NavLink className="main-link" to="/javascript">
                
                JavaScript
              </NavLink>

              <ul className="sub-ul sub-of-js">
                <li>
                  <NavLink to="#">coming soon🔥</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </header>
         
        <header  className="show-when-mobile riyan">
          <h1>Riyan Courses</h1>
          <label className="absolute" htmlFor="burger">
            <i className="fas fa-bars" />
          </label>
          <input id="burger" type="checkbox" />
          <div className="show-on-click">
            <div className="main-div">
              <label htmlFor="html">
                HTML <i className="fas fa-plus" />
              </label>
              <input id="html" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <Link to="#">Full Course</Link>
                </li>
                <li>
                  <Link to="#">Crash Course</Link>
                </li>
                <li>
                  <Link to="#">learn in 1h</Link>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="css">
                CSS <i className="fas fa-plus" />
              </label>
              <input id="css" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <Link to="#">Full Course</Link>
                </li>
                <li>
                  <Link to="#">CSS Examples</Link>
                </li>
                <li>
                  <label className="mini-projects" htmlFor="mini">
                    mini projects <i className="fas fa-plus" />
                  </label>
                  <input id="mini" type="checkbox" />
                  <ul className="sub-sub-div">
                    <li>
                      <Link to="#">project 1</Link>
                    </li>
                    <li>
                      <Link to="#">project 2</Link>
                    </li>
                    <li>
                      <Link to="#">project 3</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="main-div">
              <label htmlFor="js">
                JavaScript <i className="fas fa-plus" />
              </label>
              <input id="js" type="checkbox" />
              <ul className="sub-div">
                <li>
                  <Link to="#">coming soon🔥</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        
        </div>
    );
}

export default Header;
