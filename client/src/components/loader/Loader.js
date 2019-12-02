import React from "react";
import "./loader.css";

const SpinnerPage = () => {
  return (

      <div id="loader" className="saving">
          <center>
            Loading <span>.</span><span>.</span><span>.</span>
              {/* <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span> */}
          </center>
      </div>
  );
}

export default SpinnerPage;