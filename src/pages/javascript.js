

import Footer from "../comp/Footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";
import { Helmet } from 'react-helmet-async';




const Javascript = () => {
    return (
      
        <>
        <Helmet>
        <title>JavaScript Page</title>
        <meta name="description" content="JavaScript Lang" />
      </Helmet>
       
       <Header />
      
       {/* <MainContent pageName="JavaScript" designer="Riyan Adnan" /> */}
       <MainContent pageName="JavaScript" />

        <Footer />
        
      </>
    );
}

export default Javascript;
