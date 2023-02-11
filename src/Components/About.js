import React from "react";
import "../App.css";

export default function About(props) {
  let myStyle = {
    color : props.mode === 'dark' ? 'white' : 'rgb(49, 49, 49)' ,
    backgroundColor : props.mode === 'dark' ?'rgb(49, 49, 49)'  :  'white',
    transition : "all 0.4s ease"
  }
  return (
    <div className="container my-3">
      <h1 className="text-center" style={{color : props.mode === 'dark' ? 'white' : 'rgb(49, 49, 49)'}}>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Power of Text Utilities</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This is a Text Utilities Website, where you can provide any text and then clicking on the Following buttons will provide the updated text. Here manipulation of text occurs such as Converting any Text to Uppercase, Lowercase, Text to Speech feature, Removing Extra Spaces from the Text, Copying the text and Clearing the Text if you want to rewrite some text here and also there is a counter for Number of words and Number of characters as well. It also provides counter for How much average time is needed to read the text written in the Textbox, So this Website is overall Optimized.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
              
            >
            <strong>Check out my Projects</strong>  
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-center" style={myStyle}>
              Here are some of my Projects using HTML, CSS & JS which you may find pretty Interesting (Some might be done only using CSS & HTML)
              <div>
                <b><a href="https://cara-ecommerce-website-remo.netlify.app/">Cara - Ecommerce Website</a></b>
              </div>
              <div>
                <b><a href="https://moving-car-animation-remo.netlify.app/">Moving Car Animation</a></b>
              </div>
              <div>
                <b><a href="https://food-delivery-remo.netlify.app/">Food Delivery Website</a></b>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong>Browser Compatibility</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
