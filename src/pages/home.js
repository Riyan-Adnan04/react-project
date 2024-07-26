


import Footer from "../comp/Footer";
import Header from "../comp/header";
import MainContent from "../comp/MainContent";
import { Helmet } from 'react-helmet-async';




const Home = () => {
    return (
      
        <>
        <Helmet>
        <title>Homeee Page</title>
        <meta name="description" content="Homeeeeeeeeeeee" />
        <style type="text/css">{`
        
    `}</style>
      </Helmet>
        

        <Header />
      
        {/* <MainContent pageName="Home" designer="Riyan Adnan" /> */}
       <MainContent pageName="Home" />

        <Footer />


      </>
    );
}

export default Home;
