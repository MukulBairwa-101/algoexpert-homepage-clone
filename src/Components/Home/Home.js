import React from 'react'
import Banner from "./Banner/Banner";
import Features from './Features/Features';
import Categories from "./Features/Categories";
import Dsa from "./Features/Dsa";
import Big0 from "./Features/Big0";
import Customers from "./Customers";
import Video from './Video';
import Languages from "./Features/Languages";
import CodeEditor from "./Features/CodeEditor/CodeEditor";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer"; 

const Divider =()=>{
    return(
        <div className="divider">  
        </div>
    )
}
const Home = () => {




    return (
        <div className="">
                 <Banner />
                 <Features />

                 <Customers />
                 <Testimonial />
                 <Categories />
                 <Video />
                 <Divider />
                 <Dsa />
                 <Divider />
                 <Languages />
                 <CodeEditor /> 
                 <Big0 />
                 <Footer />
        </div>
    )
}

export default Home;
