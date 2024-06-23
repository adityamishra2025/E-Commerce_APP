import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Arrow Cart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Arrow Cart is a cutting-edge e-commerce application designed to revolutionize the online 
            shopping experience. With a sleek interface and intuitive features, Arrow Cart aims to 
            streamline the process of browsing, selecting, and purchasing products from a wide range of 
            categories.
          </p>
          <p className="text-justify mt-2">
            Overall, Arrow Cart sets itself apart in the competitive e-commerce landscape by prioritizing 
            user experience, security, and convenience. Whether shopping for everyday essentials or 
            indulging in luxury items, users can rely on Arrow Cart to deliver a seamless and enjoyable 
            online shopping experience from start to finish.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;