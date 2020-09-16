import React from 'react';
import PropTypes from 'prop-types';
const Header = ({title}) => {
     return (
          <header className="header py-4">
               <div className="container">
                    <div className="row ">
                         <div className="col text-white">
                              <h1 className="display-4 text-center">{title}</h1>
                         </div>
                    </div>
               </div>
          </header> 
     );
}
Header.propTypes = {
     title: PropTypes.string.isRequired
}
export default Header;