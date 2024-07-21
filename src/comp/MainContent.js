


import React from 'react';
import './MainContent.css';

const MainContent = ({pageName, designer}) => {
    return (
        <main>
       {pageName} Page
       <br />
       Designed By {designer}
       </main>
    );
}

export default MainContent;
