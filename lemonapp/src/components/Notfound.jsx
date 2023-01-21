/* NotFound component */

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="container">
        <div className="content">
          <h1>Oops! Something is wrong ...</h1>
          <h2>404: Page not found</h2>
          <button>
            <Link to="/">Go back in initial page, is better.</Link>
          </button>
         </div>
      </div>
    </section>
  );
};

export default NotFound;
