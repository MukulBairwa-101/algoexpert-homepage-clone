import React, { useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";
import { Codelanguages } from "../../Assets/data";

const RotatingCube = () => {
  return (
    <div className="cube-container">

   
    <div className="cube-wrapper">
    <div className="cube">
      <div className="cube-side cube-front">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAAE5pE7RAAADAFBMVEX///+AvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQGAvQEc0sD/AAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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"
          alt="language-image"
        />
      </div>
      
      <div className="cube-side cube-back">
          <img
          src="https://assets.algoexpert.io/spas/main/prod/gda9155f528-prod/dist/images/pythonLogo.png?d36eea0d"
          alt="language-image"
        />
      </div>
      <div className="cube-side cube-top"></div>
      <div className="cube-side cube-bottom"></div>
      <div className="cube-side cube-right">
          <img
          src="https://assets.algoexpert.io/spas/main/prod/gda9155f528-prod/dist/images/cppLogo.png?f2d6c3f7"
          alt="language-image"
        />
      </div>
      <div className="cube-side cube-left">
          <img
          src=" https://assets.algoexpert.io/spas/main/prod/gda9155f528-prod/dist/images/goLogo.png?ddcc76d9"
          alt="language-image"
        />
      </div>
      
    
     
     
   
     
    </div>
  </div>
  </div>

  );
};


const InterviewTab =()=>{
  return(
    <div className="Interview-tab-wrapper container-mbt-30">
      <div className="Question-tab">
      Hey there! Do you want to ace your upcoming coding interviews?
      <span className="blink">|</span>
      </div>
      <div className="btn-tab flex justify-content">
        <button className="btn-ternary" >Of course!</button>
        <button className="btn-ternary" >Nope.</button>
      </div>
    </div>
  )
}

const Languages = () => {
  const [codeLanguages, setCodelanguages] = useState(Codelanguages);
  return (
    <>
      <RiArrowUpLine className=" uparrow pointer" />
      <section
        id="languages"
        className="container-mbt-30 flex justify-content video-container"
      >
        <div className="left-chapters-div">
          <h1 className=" heading-text-h2">We Speak 9 Languages.</h1>
          <p className="head-subtext-p ">
            There's nothing more frustrating than opening an interview prep
            book, only to find a bunch of solutions in a programming language
            that you don't know. That's why all of our questions come with
            complete written solutions in 9 popular languages.
          </p>

          <div className="code-languages-container">
            {codeLanguages.map((lang) => {
              return (
                <div className="code-language flex">
                  {lang.id === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 295.238 295.238"
                      fill="currentColor"
                      className="_3m5xwODW7JjWd-oSeRunYM language-svg-icon"
                    >
                      <path d="M276.19 26.189H19.048C8.543 26.189 0 34.732 0 45.237v171.429c0 10.505 8.543 19.048 19.048 19.048h85.714v23.81H71.429v9.524h152.38v-9.524h-33.333v-23.81h85.714c10.505 0 19.048-8.543 19.048-19.048V45.237c0-10.505-8.543-19.048-19.048-19.048zm-95.238 233.334h-66.667v-23.81h66.667v23.81zm104.762-42.857c0 5.252-4.271 9.524-9.524 9.524H19.048c-5.252 0-9.524-4.271-9.524-9.524V45.237c0-5.252 4.271-9.524 9.524-9.524H276.19c5.252 0 9.524 4.271 9.524 9.524v171.429z"></path>
                      <path d="M19.048 216.666H276.19V45.237H19.048v171.429zm9.523-161.904h238.095v152.381H28.571V54.762z"></path>
                      <circle cx="42.857" cy="69.048" r="4.762"></circle>
                      <circle cx="57.143" cy="69.048" r="4.762"></circle>
                      <circle cx="71.429" cy="69.048" r="4.762"></circle>
                      <path d="M38.095 140.476h66.667V83.333H38.095v57.143zm9.524-47.62h47.619v38.095H47.619V92.856zM114.286 140.476h66.667V83.333h-66.667v57.143zm9.524-47.62h47.619v38.095H123.81V92.856zM190.476 140.476h66.667V83.333h-66.667v57.143zM200 92.856h47.619v38.095H200V92.856zM38.095 149.999h142.857v9.524H38.095zM38.095 169.047h142.857v9.524H38.095zM38.095 188.094h142.857v9.524H38.095zM195.238 149.999h61.905v9.524h-61.905zM195.238 169.047h61.905v9.524h-61.905zM195.238 188.094h61.905v9.524h-61.905z"></path>
                    </svg>
                  ) : lang.id === 2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="_3m5xwODW7JjWd-oSeRunYM language-svg-icon"
                    >
                      <path d="M288 240a8 8 0 00-8 8 24 24 0 01-48 0 8 8 0 00-16 0 40 40 0 0080 0 8 8 0 00-8-8z"></path>
                      <path d="M256 16C123.055 16 16 173.555 16 304c0 120.223 89.719 192 240 192s240-71.777 240-192c0-130.445-107.055-288-240-288zm0 16c73.358 0 138.265 52.017 179.078 120H400a8 8 0 00-8-8H280a8 8 0 00-8 8h-32a8 8 0 00-8-8H120a8 8 0 00-8 8H76.922C117.735 84.017 182.642 32 256 32zm32 136v-8h29.394l-11.757 41.149A39.991 39.991 0 01288 168zm46.035-8h15.719l-12 48H328a40.056 40.056 0 01-7.477-.711zm32.211 0H384v8a40.064 40.064 0 01-29.395 38.562zm-220.492 0l11.64 46.562A40.065 40.065 0 01128 168v-8zm28.492 48l-12-48h15.719l13.512 47.289A40.056 40.056 0 01184 208zm32.117-6.851L194.606 160H224v8a39.989 39.989 0 01-17.637 33.149zM256 480c-140.258 0-224-65.793-224-176 0-44.743 13.189-92.858 35.919-136H112a56.063 56.063 0 0055.869 56H184a56.064 56.064 0 0056-56h32a56.063 56.063 0 0056 56h16a56.063 56.063 0 0056-56h44.081C466.811 211.142 480 259.257 480 304c0 110.207-83.742 176-224 176z"></path>
                    </svg>
                  ) : lang.id === 3 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 470 470"
                      fill="currentColor"
                      className="_3m5xwODW7JjWd-oSeRunYM language-svg-icon"
                    >
                      <path d="M250.893 173.727l29.224 16.873a7.499 7.499 0 0010.245-2.745 7.5 7.5 0 00-2.745-10.245l-29.224-16.873a7.5 7.5 0 00-10.245 2.745 7.498 7.498 0 002.745 10.245zM166.489 210.628a7.5 7.5 0 00-7.5 7.5v33.745a7.5 7.5 0 0015 0v-33.745a7.5 7.5 0 00-7.5-7.5zM280.118 279.4l-29.224 16.873a7.5 7.5 0 007.5 12.99l29.224-16.873a7.5 7.5 0 00-7.5-12.99z"></path>
                      <path d="M432.021 321.25c-7.437 0-14.19 2.973-19.145 7.786l-52.702-30.428c.545-2.156.837-4.411.837-6.733 0-12.563-8.472-23.178-20-26.452v-60.846c11.528-3.274 20-13.889 20-26.452 0-2.323-.292-4.578-.837-6.734l52.702-30.427c4.955 4.814 11.708 7.786 19.146 7.786 15.164 0 27.5-12.336 27.5-27.5s-12.336-27.5-27.5-27.5-27.5 12.336-27.5 27.5c0 2.323.292 4.578.837 6.734l-52.702 30.428c-4.955-4.814-11.708-7.786-19.145-7.786-7.437 0-14.19 2.973-19.145 7.786l-52.702-30.427c.545-2.156.837-4.411.837-6.733 0-12.563-8.472-23.178-20-26.452V7.5a7.5 7.5 0 00-15 0v87.298c-11.528 3.274-20 13.889-20 26.452 0 2.323.292 4.578.837 6.734l-52.702 30.427c-4.955-4.813-11.708-7.786-19.145-7.786s-14.19 2.973-19.145 7.786l-52.702-30.428c.545-2.156.837-4.411.837-6.733 0-15.164-12.336-27.5-27.5-27.5s-27.5 12.336-27.5 27.5 12.336 27.5 27.5 27.5c7.438 0 14.19-2.973 19.146-7.786l52.702 30.428a27.441 27.441 0 00-.837 6.734c0 12.563 8.472 23.178 20 26.452v60.846c-11.528 3.274-20 13.889-20 26.452 0 2.323.292 4.578.837 6.734l-52.702 30.428c-4.955-4.814-11.708-7.786-19.145-7.786-15.164 0-27.5 12.336-27.5 27.5s12.336 27.5 27.5 27.5 27.5-12.336 27.5-27.5c0-2.323-.292-4.578-.837-6.734l52.702-30.428c4.955 4.814 11.708 7.786 19.145 7.786s14.19-2.973 19.145-7.786l52.702 30.427a27.441 27.441 0 00-.837 6.734c0 12.563 8.472 23.178 20 26.452V462.5a7.5 7.5 0 0015 0v-87.298c11.528-3.274 20-13.889 20-26.452 0-2.323-.292-4.578-.837-6.734l52.702-30.427c4.955 4.814 11.708 7.786 19.145 7.786 7.438 0 14.19-2.973 19.146-7.786l52.702 30.428a27.441 27.441 0 00-.837 6.734c0 15.164 12.336 27.5 27.5 27.5s27.5-12.336 27.5-27.5-12.339-27.501-27.503-27.501zm0-212.5c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5-12.5-5.607-12.5-12.5 5.607-12.5 12.5-12.5zm-394.042 25c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.607 12.5-12.5 12.5zm0 227.5c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.607 12.5-12.5 12.5zM333.51 165.625c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5-12.5-5.607-12.5-12.5 5.608-12.5 12.5-12.5zM235 108.75c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5-12.5-5.607-12.5-12.5 5.607-12.5 12.5-12.5zm-111.01 69.375c0-6.893 5.607-12.5 12.5-12.5s12.5 5.607 12.5 12.5-5.607 12.5-12.5 12.5-12.5-5.607-12.5-12.5zm12.5 126.25c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.608 12.5-12.5 12.5zM235 361.25c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.607 12.5-12.5 12.5zm71.01-69.375c0 2.323.292 4.578.837 6.734l-52.702 30.427c-4.955-4.813-11.708-7.786-19.145-7.786s-14.19 2.973-19.145 7.786l-52.702-30.427c.545-2.156.837-4.411.837-6.734 0-12.563-8.472-23.178-20-26.452v-60.846c11.528-3.274 20-13.889 20-26.452 0-2.323-.292-4.578-.837-6.734l52.702-30.427c4.955 4.814 11.708 7.786 19.145 7.786 7.438 0 14.19-2.973 19.146-7.786l52.702 30.427a27.441 27.441 0 00-.837 6.734c0 12.563 8.472 23.178 20 26.452v60.846c-11.529 3.274-20.001 13.889-20.001 26.452zm27.5 12.5c-6.893 0-12.5-5.607-12.5-12.5 0-6.891 5.605-12.497 12.495-12.5 6.9.003 12.505 5.609 12.505 12.5 0 6.893-5.607 12.5-12.5 12.5zm98.511 56.875c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.607 12.5-12.5 12.5z"></path>
                    </svg>
                  ) : lang.id === 4 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="_3m5xwODW7JjWd-oSeRunYM language-svg-icon"
                    >
                      <path d="M298.667 25.6h-85.333a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h85.333a8.536 8.536 0 008.533-8.533 8.536 8.536 0 00-8.533-8.533zM358.4 25.6h-8.533a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h8.533a8.536 8.536 0 008.533-8.533A8.536 8.536 0 00358.4 25.6zM266.598 435.2H245.41c-12.979 0-23.543 10.564-23.543 23.543v4.122c0 12.979 10.564 23.535 23.535 23.535h21.188c12.979 0 23.543-10.556 23.543-23.535v-4.122c0-12.979-10.564-23.543-23.535-23.543zm6.469 27.665a6.475 6.475 0 01-6.468 6.468H245.41c-3.575 0-6.477-2.901-6.477-6.468v-4.122a6.48 6.48 0 016.477-6.477h21.18a6.478 6.478 0 016.477 6.477v4.122z"></path>
                      <path d="M370.227 0H141.781c-17.007 0-30.848 13.841-30.848 30.848v450.304c0 17.007 13.841 30.848 30.848 30.848h228.437c17.007 0 30.848-13.841 30.848-30.839V30.848C401.067 13.841 387.226 0 370.227 0zM384 481.152c0 7.595-6.178 13.781-13.773 13.781H141.781c-7.603 0-13.781-6.187-13.781-13.773V30.848c0-7.595 6.178-13.781 13.781-13.781h228.437c7.603 0 13.781 6.187 13.781 13.781v450.304z"></path>
                      <path d="M392.533 51.2H119.467a8.536 8.536 0 00-8.533 8.533v358.4a8.536 8.536 0 008.533 8.533h273.067a8.536 8.536 0 008.533-8.533v-358.4c0-4.71-3.823-8.533-8.534-8.533zM384 409.6H128V68.267h256V409.6z"></path>
                    </svg>
                  ) : lang.id === 5 ? (
                    <svg
                      viewBox="-23 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="_3m5xwODW7JjWd-oSeRunYM language-svg-icon"
                    >
                      <path d="M367.664 34.137a23.54 23.54 0 001.149-18.102c-2.047-5.988-6.301-10.824-11.985-13.613-11.734-5.754-25.957-.895-31.715 10.836L301.207 61.98c-20.227-10.765-43.289-16.878-67.758-16.878s-47.531 6.113-67.758 16.878l-23.906-48.722c-5.758-11.73-19.984-16.594-31.715-10.836-5.683 2.789-9.937 7.621-11.984 13.613-2.047 5.988-1.64 12.418 1.148 18.098l28.145 57.355c-23.965 25.832-38.64 60.39-38.64 98.32a7.565 7.565 0 007.566 7.567h274.289a7.564 7.564 0 007.562-7.566c0-37.93-14.676-72.489-38.636-98.32zm-28.969-14.219c2.078-4.238 7.227-6 11.47-3.918 4.241 2.082 6 7.227 3.917 11.473L328.094 80.43a145.111 145.111 0 00-13.875-10.633zM116.735 16c4.242-2.082 9.39-.324 11.468 3.918l24.477 49.879c-4.84 3.27-9.477 6.82-13.88 10.637l-25.984-52.961c-2.086-4.246-.324-9.391 3.918-11.473zm-12.65 166.246c3.93-67.945 60.45-122.02 129.364-122.02s125.434 54.075 129.363 122.02zm0 0M431.098 214.516c-19.739 0-35.797 16.058-35.797 35.8v121.008c0 19.742 16.058 35.801 35.797 35.801 19.742 0 35.8-16.059 35.8-35.8V250.315c0-19.742-16.058-35.8-35.8-35.8zm20.675 156.808c0 11.403-9.273 20.676-20.675 20.676-11.399 0-20.672-9.273-20.672-20.676V250.316c0-11.402 9.273-20.675 20.672-20.675 11.402 0 20.675 9.273 20.675 20.675zm0 0M370.594 214.516h-39.328a7.564 7.564 0 000 15.125h31.765v178.492h-32.773a7.561 7.561 0 00-7.563 7.562v60.508c0 11.399-9.273 20.672-20.672 20.672-11.402 0-20.675-9.273-20.675-20.672v-60.508a7.561 7.561 0 00-7.563-7.562h-80.672a7.561 7.561 0 00-7.562 7.562v60.508c0 11.399-9.274 20.672-20.676 20.672-11.398 0-20.672-9.273-20.672-20.672v-60.508a7.561 7.561 0 00-7.562-7.562h-32.774V229.64h190.59a7.562 7.562 0 100-15.125H96.305a7.561 7.561 0 00-7.563 7.562v193.617a7.559 7.559 0 007.563 7.563h32.773v52.945c0 19.738 16.059 35.797 35.797 35.797 19.742 0 35.8-16.059 35.8-35.797v-52.945h65.548v52.945c0 19.738 16.058 35.797 35.8 35.797 19.739 0 35.797-16.059 35.797-35.797v-52.945h32.774a7.559 7.559 0 007.562-7.563V222.078a7.564 7.564 0 00-7.562-7.562zm0 0M35.8 214.516c-19.741 0-35.8 16.058-35.8 35.8v121.008c0 19.742 16.059 35.801 35.8 35.801 19.74 0 35.798-16.059 35.798-35.8V250.315c0-19.742-16.059-35.8-35.797-35.8zm20.673 156.808C56.473 382.727 47.199 392 35.8 392c-11.403 0-20.676-9.273-20.676-20.676V250.316c0-11.402 9.273-20.675 20.676-20.675 11.398 0 20.672 9.273 20.672 20.675zm0 0"></path>
                      <path d="M168.91 117.707c-13.066 0-23.7 10.633-23.7 23.7s10.634 23.698 23.7 23.698 23.7-10.632 23.7-23.699-10.633-23.699-23.7-23.699zm0 32.27c-4.726 0-8.57-3.844-8.57-8.57s3.844-8.571 8.57-8.571c4.727 0 8.57 3.844 8.57 8.57s-3.843 8.57-8.57 8.57zm0 0M297.988 117.707c-13.066 0-23.699 10.633-23.699 23.7s10.633 23.698 23.7 23.698c13.066 0 23.698-10.632 23.698-23.699s-10.632-23.699-23.699-23.699zm0 32.27c-4.726 0-8.57-3.844-8.57-8.57s3.844-8.571 8.57-8.571c4.727 0 8.57 3.844 8.57 8.57s-3.843 8.57-8.57 8.57zm0 0"></path>
                    </svg>
                  ) : lang.id === 6 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 57 57"
                      fill="currentColor"
                      className="_3m5xwODW7JjWd-oSeRunYM language-svg-icon"
                    >
                      <path d="M53.5 13.5c0-2.481-2.019-4.5-4.5-4.5h-1.551c-.503-5.046-4.773-9-9.949-9h-18c-5.177 0-9.446 3.954-9.949 9H8a4.505 4.505 0 00-4.5 4.5c0 1.951 1.255 3.599 2.995 4.222-.009 6.706-.029 30.277-.029 30.277a5.006 5.006 0 005 5.001h3.032v1.694A2.309 2.309 0 0016.804 57h23.389a2.308 2.308 0 002.305-2.306V53h2.968c2.757 0 5-2.243 5-4.999 0 0 .032-23.571.034-30.277 1.742-.621 3-2.271 3-4.224zM19.5 2h18c4.072 0 7.436 3.06 7.931 7H11.569c.495-3.94 3.859-7 7.931-7zm20.998 52.694a.306.306 0 01-.305.306H16.804a.307.307 0 01-.306-.306V53h24v1.694zM45.466 51h-34c-1.654 0-3-1.346-3-2.999 0 0 .019-22.942.028-30.001H48.5c-.002 7.063-.034 29.999-.034 29.999a3.004 3.004 0 01-3 3.001zm3.673-35.014c-3.7.019-37.633.017-41.289-.001A2.496 2.496 0 015.5 13.5C5.5 12.121 6.622 11 8 11h41c1.378 0 2.5 1.121 2.5 2.5a2.496 2.496 0 01-2.361 2.486z"></path>
                      <path d="M38.876 23.303c-3.105 0-5.779 1.852-6.995 4.505a4.582 4.582 0 00-3.308-1.414c-1.299 0-2.47.546-3.308 1.414-1.216-2.654-3.89-4.505-6.995-4.505-4.244 0-7.697 3.453-7.697 7.697s3.453 7.697 7.697 7.697 7.697-3.453 7.697-7.697c0-1.438 1.169-2.606 2.606-2.606s2.606 1.169 2.606 2.606c0 4.244 3.453 7.697 7.697 7.697s7.697-3.453 7.697-7.697-3.452-7.697-7.697-7.697zM18.271 36.697c-3.142 0-5.697-2.556-5.697-5.697s2.556-5.697 5.697-5.697 5.697 2.556 5.697 5.697-2.556 5.697-5.697 5.697zm20.605 0c-3.142 0-5.697-2.556-5.697-5.697s2.556-5.697 5.697-5.697 5.697 2.556 5.697 5.697-2.555 5.697-5.697 5.697zM22.5 42a1 1 0 100 2c7.072 0 12 1.581 12 3a1 1 0 102 0c0-4.759-11.662-5-14-5z"></path>
                      <path d="M18.126 21.197l6 3a1 1 0 00.895-1.79l-6-3a1.001 1.001 0 00-.895 1.79zM32.574 24.303c.15 0 .303-.034.446-.105l6-3a1 1 0 00-.895-1.789l-6 3a1 1 0 00.449 1.894z"></path>
                    </svg>
                  ) : lang.id === 7 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="_3m5xwODW7JjWd-oSeRunYM language-svg-icon"
                    >
                      <path d="M372.853 23.594C341.774 7.594 306.681 0 271.853 0 161.063 0 52.618 76.766 82.173 204.133l-19.469 23.555-34.406 62.984 33.469 26.609-1.383 44.734 13.367 19.172s-15.93 59.844 8.422 68.328c22.883 8 47.82 9.969 66.922 9.969 18.812 0 31.977-1.906 31.977-1.906L183.728 512H409.65s-22.344-112.828 11.594-160.766c33.968-47.937 144.718-228.226-48.391-327.64zm-271.29 111.007c4.024-18.304 12.102-35.195 24.016-50.187 15.352-19.32 37.109-35.359 62.922-46.391 25.555-10.922 54.375-16.688 83.352-16.688 32.703 0 64.266 7.336 91.234 21.227 28.266 14.555 50.781 31.656 66.938 50.828 13.922 16.523 23.453 35.031 28.344 55.008 7.422 30.43 4.531 65-8.609 102.867-4.031-6.031-9.891-12.852-19.125-19.117l-28.766-43.125 33.438-13.844-48.891-32.75 25.578-25.586-57.688-11.539 13.844-33.43-57.734 11.422V47.109l-48.97 32.641-13.844-33.43-32.75 48.898-25.586-25.586-11.539 57.703-33.43-13.844 11.422 57.727h-28.984c-16.445-13.492-23.93-26.203-26.281-30.812.328-1.945.688-3.891 1.109-5.805zm75.079 32.477l-3.68-18.625 20.594 8.531 5.094-25.461 3.719-18.617 15.766 15.758 14.445-21.578 10.57-15.773 8.523 20.594L273.282 97.5l15.797-10.531v22.297l25.477-5.039 18.625-3.688-8.531 20.594 25.469 5.094 18.609 3.719-15.766 15.766 21.594 14.445 15.766 10.562-20.594 8.531 14.391 21.609 10.547 15.797H392.4c-19.875-4.453-46.188-6.453-81.328-3.961-70.821 5.016-118.407-6.234-149.344-20.14h19.953l-5.039-25.477zm204.757 283.344c.594 15.141 1.969 29.109 3.375 40.25H204.048l-1.672-34.156-1.117-23.453-23.242 3.391c-.117.016-12.086 1.703-28.922 1.703-15.32 0-37.562-1.422-57.805-8.078-.914-2.719-2.039-9.625-.695-22.234 1.211-11.375 3.758-21.109 3.773-21.172l2.547-9.562-5.664-8.125-9.328-13.375 1.172-37.672.328-10.703-8.383-6.656-19.414-15.438 24.82-45.43 18.172-21.984 6.719-8.141-2.383-10.273c-1.961-8.438-3.25-16.719-3.891-24.812 6.578 7.055 15.164 14.75 26.219 22.203 5.82 3.93 12.008 7.57 18.516 10.914l.43.641 1.984.586c15.086 7.5 31.898 13.461 50.258 17.789 33.695 7.945 72.758 10.414 116.117 7.336 44.312-3.141 77.594.781 98.875 11.641 16.062 8.188 21.312 18.188 25.156 25.469 1.031 1.984 1.969 3.781 3.062 5.406-12.5 27.781-27.312 50.375-35.844 62.406-16.843 23.81-24.405 61.341-22.437 111.529z"></path>
                    </svg>
                  ) : lang.id === 8 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 291.346 291.346"
                      fill="currentColor"
                      className="_3m5xwODW7JjWd-oSeRunYM language-svg-icon"
                    >
                      <path
                        d="M117.547 266.156L0 249.141v-94.296h117.547v111.311z"
                        data-original="#26A6D1"
                        data-old_color="#26A6D1"
                      ></path>
                      <path
                        d="M291.346 136.51H136.31l.055-114.06L291.346.009V136.51z"
                        data-original="#3DB39E"
                        data-old_color="#3DB39E"
                      ></path>
                      <path
                        d="M291.346 291.337l-155.091-22.459.182-114.015h154.909v136.474z"
                        data-original="#F4B459"
                        className="active-path"
                        data-old_color="#F4B459"
                      ></path>
                      <path
                        d="M117.547 136.51H0V42.205l117.547-17.024V136.51z"
                        data-original="#E2574C"
                        data-old_color="#E2574C"
                      ></path>
                    </svg>
                  ) : lang.id === 9 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.001 512.001"
                      fill="currentColor"
                      className="_3m5xwODW7JjWd-oSeRunYM language-svg-icon"
                    >
                      <path d="M74.301 202.311l25.6-25.6a8.532 8.532 0 000-12.068 8.532 8.532 0 00-12.068 0l-25.6 25.6a8.534 8.534 0 0012.068 12.068zM328.933 333.73c-42.546 21.535-88.107 21.499-128.695.068-6.872-3.629-14.622 3.069-12.028 10.395 12.285 34.689 40.583 56.885 76.311 56.885 35.727 0 64.026-22.196 76.31-56.885 2.57-7.258-5.028-13.94-11.898-10.463zm-16.682 27.522c-11.676 14.452-28.262 22.759-47.731 22.759-20.596 0-37.965-9.295-49.708-25.329 32.268 11.125 66.539 11.016 99.664-.342l-2.225 2.912z"></path>
                      <path d="M490.382 198.917c.272-1.588 1.243-4.686 3.025-7.663 2.538-4.239 5.74-6.496 10.275-6.61a8.533 8.533 0 008.318-8.531v-28.689a8.535 8.535 0 00-4.954-7.747c-1.411-.652-3.972-1.709-7.636-3.034-5.979-2.162-12.961-4.313-20.897-6.313-9.648-2.432-19.656-4.417-29.99-5.928l29.029-78.775c2.517-6.831-4.126-13.475-10.957-10.958L360.208 73.868c-29.178-14.676-61.786-22.659-95.69-22.659-33.898 0-66.501 7.981-95.678 22.654L62.455 34.673C55.624 32.157 48.981 38.8 51.498 45.63l28.303 76.822c-16.204 1.512-31.669 4.188-46.313 7.879-7.936 2-14.918 4.151-20.897 6.313-3.664 1.325-6.226 2.383-7.636 3.034A8.533 8.533 0 000 147.425v28.689a8.534 8.534 0 008.318 8.531c4.534.114 7.736 2.371 10.275 6.61 1.782 2.977 2.753 6.075 3.05 7.815 4.004 26.351 10.838 46.682 22.081 62.01-18.498 4.802-33.201 12.798-41.882 23.77a8.534 8.534 0 0013.384 10.59c6.508-8.224 19.393-14.841 36.336-18.708a213.293 213.293 0 004.99 35.376c-23.385 6.023-43.16 17.597-54.759 32.537a8.533 8.533 0 001.508 11.973 8.533 8.533 0 0011.973-1.508c9.196-11.846 25.765-21.433 45.723-26.531 27.197 86.563 108.061 149.297 203.524 149.297 93.626 0 173.156-60.314 201.876-144.205 12.997 5.372 23.625 12.803 30.33 21.439a8.533 8.533 0 0011.973 1.508 8.533 8.533 0 001.508-11.973c-8.871-11.427-22.528-20.882-38.921-27.395a212.855 212.855 0 005.857-35.294c8.735 3.644 15.481 8.237 19.632 13.484a8.534 8.534 0 0013.384-10.59c-7.127-9.007-18.305-16.012-32.312-20.891-.017-5.82-.294-11.703-.801-17.679 6.233-13.004 10.494-28.666 13.335-47.363zm-35.238-141.84l-24.053 65.273a322.98 322.98 0 00-8.21-.642 214.264 214.264 0 00-43.302-36.789l75.565-27.842zm-99.653 33.55c.058.032.107.073.166.104 15.46 8.124 29.766 18.344 42.575 30.32-31.685.304-65.761 5.018-101.818 15.224-.335.094-.669.185-1.004.281-1.905.544-3.817 1.11-5.733 1.685-.67.201-1.338.392-2.008.597-1.841.562-3.69 1.148-5.54 1.738-.617.197-1.231.38-1.849.58-7.866 2.542-16.07 3.843-24.278 3.843s-16.411-1.301-24.281-3.845a448.591 448.591 0 00-6.909-2.172c-.819-.251-1.633-.485-2.45-.73-1.339-.401-2.679-.807-4.014-1.193-30.906-8.964-60.369-13.888-88.14-15.46 12.956-12.211 27.471-22.617 43.184-30.873.071-.037.129-.085.198-.124 27.573-14.451 58.607-22.326 90.928-22.326 32.341-.001 63.391 7.885 90.973 22.351zM73.904 57.078l75.565 27.836a214.297 214.297 0 00-42.718 36.133c-3.09.034-6.148.123-9.191.24L73.904 57.078zM33.236 182.487c-3.873-6.468-9.265-11.28-16.169-13.52V153.18c.419-.156.862-.318 1.327-.486 5.453-1.972 11.892-3.955 19.264-5.813 16.509-4.161 34.146-6.974 52.807-8.155a8.537 8.537 0 001.785.096c6.049-.329 12.1-.499 18.216-.499.022 0 .043-.003.064-.003 31.857.023 65.299 4.514 100.075 14.284.376.106.75.208 1.126.315 1.796.51 3.599 1.045 5.402 1.584.736.22 1.469.431 2.206.656 1.62.493 3.247 1.011 4.873 1.528.752.239 1.5.466 2.254.71 9.564 3.091 19.538 4.673 29.533 4.673s19.97-1.582 29.53-4.672a445.083 445.083 0 017.426-2.327c1.732-.527 3.459-1.04 5.181-1.541.994-.288 1.986-.568 2.978-.848.843-.238 1.685-.474 2.526-.707 40.446-11.123 78.921-15.076 114.977-13.217h.007c5.852.306 11.573.764 17.222 1.372.527.057 1.049.06 1.563.021 12.856 1.494 25.181 3.768 36.932 6.73 7.373 1.858 13.811 3.841 19.264 5.813.466.168.908.331 1.327.486v15.787c-6.904 2.24-12.296 7.052-16.169 13.52-3.051 5.096-4.61 10.071-5.231 13.714-2.74 18.025-6.678 32.585-12.608 44.279-.055.098-.114.191-.166.293-11.7 22.742-31.968 35.426-68.226 40.595-.471.066-.939.134-1.416.197a219.546 219.546 0 01-6.183.752c-.24.026-.473.055-.714.081-10.19 1.073-19.772.651-28.647-1.002-15.929-2.967-29.567-9.913-40.29-19.376-14.044-12.395-23.09-29.102-25.734-46.831-1.812-12.123-6.178-21.173-12.553-27.282-.041-.039-.084-.074-.125-.113-.416-.394-.837-.78-1.269-1.149-.477-.407-.964-.8-1.46-1.177-6.322-4.804-12.845-6.391-18.141-6.254-5.296-.137-11.819 1.45-18.141 6.254-3.117 2.369-5.838 5.337-8.126 8.897-3.533 5.495-6.026 12.416-7.282 20.822-2.714 18.2-12.172 35.325-26.86 47.812-11.139 9.468-25.286 16.266-41.778 18.846-.163.025-.324.055-.487.079l-.104.014c-7.964 1.192-16.468 1.404-25.442.459-29.182-3.076-48.915-10.474-62.268-22.679a8.833 8.833 0 00-1.194-.91c-13.921-13.534-21.43-33.527-25.827-62.457-.645-3.793-2.204-8.768-5.255-13.864zm421.766 129.507c-11.608-2.949-24.09-4.539-36.905-4.485a8.533 8.533 0 00.072 17.067c11.167-.047 21.992 1.315 31.992 3.795-26.489 77.059-99.591 132.438-185.641 132.438-87.085 0-160.959-56.75-186.591-135.347a133.272 133.272 0 0115.901-.886 8.534 8.534 0 00.072-17.067c-6.991-.03-13.882.435-20.589 1.335a195.779 195.779 0 01-4.121-25.294c13.743 7.757 30.939 12.687 52.401 15.317l.082.01c1.424.174 2.859.342 4.321.495 10.089 1.061 19.695.868 28.747-.391 22.371-3.109 41.333-12.762 55.675-26.323 15.671-14.814 25.833-34.283 28.915-54.95.898-6.018 2.483-10.548 4.575-13.882 1.255-1.998 2.692-3.566 4.272-4.766 2.847-2.163 5.692-2.838 7.431-2.779 2.521-.059 5.363.616 8.209 2.778.262.199.521.409.775.629 3.83 3.315 6.723 8.994 8.069 18.019 2.964 19.873 12.475 38.637 27.134 53.221 14.509 14.437 34.066 24.77 57.314 28.032 9.093 1.277 18.747 1.478 28.888.411 30.925-3.257 53.337-10.977 69.501-24.616a8.486 8.486 0 003.464 1.635c.485.105.955.22 1.434.329a195.79 195.79 0 01-5.397 35.275z"></path>
                    </svg>
                  ) : (
                    ""
                  )}
                  <p className="head-subtext-p ">
                    <b className="language-bold-text">{lang.boldText}, </b>{" "}
                    {lang.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="video-block">
          <RotatingCube />
        </div>
      </section>
      <InterviewTab />
    </>
  );
};

export default Languages;
