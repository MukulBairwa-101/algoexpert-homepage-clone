import React from "react";
import {RiArrowUpLine} from "react-icons/ri";


const Dsa = () => {
  return (
    <>
    <RiArrowUpLine className=" uparrow pointer" />
    <section id="dsa" className="flex container-mbt-30 dsa-container">


      <div className="left-image-div">
        <img src="/assets/dsa.webp" alt="dsa" className="left-image" />
      </div>
      <div className="right-text-div">
        <h2 className="heading-text-h2">Data Structures Crash Course.</h2>
        <p className="head-subtext-p">
          Algorithms and data structures go hand in hand; the solution to
          virtually any coding interview problem will require the implementation
          of some kind of abstract data type in order to access and manipulate
          information.<br /> <br /> Our video series on data structures is the ultimate crash
          course on this important topic. We cover fundamental concepts
          pertaining to memory, complexity analysis, and Big O notation, and
          then break down popular data structures to give you a detailed look at
          how these concepts are applied under the hood. Linked Lists and Binary
          Trees will never instill fear in your heart again.
        </p>

        <div className="flex justify-content-center centerd-btn-mob">
          <button className="btn flex justify-content-center align-items pointer btn-primary">
            <span>Start the Course</span>
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Dsa;
