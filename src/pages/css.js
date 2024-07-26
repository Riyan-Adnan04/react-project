

import Footer from "../comp/Footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";
import { Helmet } from 'react-helmet-async';



const Css = () => {
    return (
      
        <>

<Helmet>
        <title>CSS Page</title>
        <meta name="description" content="Css Lang" />
      </Helmet>
        
      <Header />
      
      {/* <MainContent pageName="Css" designer="Sadaa AbdoAlqaui" /> */}
       <MainContent pageName="Css" />

        <Footer />
      </>
    );
}

export default Css;
