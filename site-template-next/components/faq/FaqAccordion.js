import React, { Component } from "react";
import makeFaq from "./Faq";
import faqDetail from "./FaqDetail";

class FaqAccordion extends Component {
  componentDidMount() {
    //document.querySelector("#homeLink").classList.remove("active");
  }

  render() {
    return (
      <div id="faq-accordion" className="row">
        <div className="col-md-12">
          <div className="accordion" id="accordionExample">
            {faqDetail.map((obj) => (
              <div className="accordion-item" key={obj.key}>
                {makeFaq(obj)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FaqAccordion;