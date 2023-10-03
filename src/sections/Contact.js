import React from "react";

const Contact = () => {
  return (
    <div className=" mt-8 mb-2" id="contact">
      <h1 className=" text-6xl md:text-8xl mb-4 leading-tight">
        Contact Us
      </h1>
      <h3 className=" text-3xl text-blue-600">
        We look forward to hearing from you!
      </h3>
      <br></br>
      <div className=" flex flex-row flex-wrap-reverse justify-center m-auto text-left">
        <div className=" m-4">
          <p>
            <strong>Phone:</strong> (661) 387-8333
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:Info@WhatCares.org">
              <strong>Info@WhatCares.org</strong>
            </a>
          </p>
          <p>
            <strong>Address:</strong> 4901 Centennial Plaza Way, Bakersfield CA.
            93312{" "}
          </p>
        </div>
        <div className=" m-4">
          <p>
            <strong>Hao Bui, MD</strong> / President<br></br>
            <a href="mailto:Hao@WhatCares.org">
              <strong className=" text-blue-500">Hao@WhatCares.org </strong>
            </a>
          </p>
          <p>
            <strong>Allan Greenberg</strong> / Treasurer
          </p>
          <p>
            <a href="mailto:Allan@WhatCares.org">
              <strong className=" text-blue-500">Allan@WhatCares.org</strong>
            </a>
            <br></br>
            <strong>Tatiana Zimmerman, RVT</strong> - Secretary
          </p>
          <p>
            <a href="mailto:Tatiana@WhatCares.org">
              <strong className=" text-blue-500">Tatiana@WhatCares.org</strong>
            </a>
            <br></br>
            <strong>Lindy McHutchison, MD</strong> / Development
          </p>
          <p>
            <a href="mailto:Lindy@WhatCares.org">
              <strong className=" text-blue-500">Lindy@WhatCares.org</strong>
            </a>
          </p>
          <p>
            <strong>Melissa Sandman</strong> / Development
          </p>
          <p>
            <a href="mailto:Melissa@WhatCares.org">
              <strong className=" text-blue-500">Melissa@WhatCares.org</strong>
            </a>
            <br></br>
            <strong>Valeria Montoya, MD</strong> / Outreach
          </p>
          <p>
            <a href="mailto:Valeria@WhatCares.org">
              <strong className=" text-blue-500">Valeria@WhatCares.org</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
