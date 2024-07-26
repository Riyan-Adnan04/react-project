

import Footer from "../comp/Footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";
import { Helmet } from 'react-helmet-async';




const Html = () => {
    return (
      
        <>
        <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTML Lang" />
        <style type="text/css">{`
     
    `}</style>
      </Helmet>
        
      <Header />
      
      {/* <MainContent pageName="Html" designer="Riyan Adnan" /> */}
       <MainContent pageName="Html" />

        <Footer />
        
      </>
    );
}

export default Html;
