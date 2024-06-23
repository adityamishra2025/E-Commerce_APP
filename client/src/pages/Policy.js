import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Information You Provide: We may collect personal information that you voluntarily 
            provide when you use the App, such as your name, email address, shipping address, payment 
            information, and any other information you choose to provide.</p>
          <p>Automatically Collected Information: When you use the App, we may automatically collect 
            certain information, including your device type, IP address, operating system, unique device 
            identifiers, mobile network information, and usage data.</p>
          <p>Data Security: We take reasonable measures to protect the security of your personal information 
            and implement appropriate technical and organizational safeguards to prevent unauthorized access, 
            disclosure, alteration, or destruction.</p>
          <p>Children's Privacy: The App is not intended for use by individuals under the age of 13. We do 
            not knowingly collect personal information from children under 13 years of age. If you believe 
            that we have inadvertently collected information from a child under 13, please contact us 
            immediately.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;