import React from "react";
import { FaCheckCircle } from "react-icons/fa";
// import {MdDone} from "react-icons/md"
import { RiArrowUpLine } from "react-icons/ri";
// import {AiOutlineArrowUp} from "react-icons/ai";
// import {FiArrowUp} from "react-icons/fi";

const Categories = () => {
  return (
    <section id="questions" className="container-dark-alt">
      {/* <img src="/assets/arrow.jpg" alt="arrow" /> */}
      <RiArrowUpLine className="white-text uparrow pointer" />
      <div className="inner-container">
        <h2 className="center white-text ">
          160 Questions Spanning 15 Categories.
        </h2>
        <p className="center white-text feature-section-text">
          If you want to ace the coding interviews, being well-versed in all
          common data structures and popular problem-solving methods is
          paramount. With 160 questions spanning 15 categories and 4 difficulty
          levels, we've got you covered.
        </p>
        <div className="flex justify-content-center">
          <button className="btn flex justify-content-center align-items pointer btn-primary">
            <span>Explore Questions</span>
          </button>
        </div>

        <div className="category-container ">
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                <FaCheckCircle className="checkcircle" />

                <p>Arrays</p>
              </div>
              <div className="category-card-back">Harder than they seem.</div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Graphs</p>
              </div>
              <div className="category-card-back">Easier than they seem.</div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                <FaCheckCircle className="checkcircle" />

                <p>Tries</p>
              </div>
              <div className="category-card-back">
                {/* Yes. <b><i>Tries</i></b>. Not a typo. */}
                <span>
                  Yes.<span className="ib-text"> Tries. </span> Not a typo.
                </span>
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}
                <FaCheckCircle className="checkcircle" />

                <p>Linked Lists</p>
              </div>
              <div className="category-card-back">Reverse them.</div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Binary Trees</p>
              </div>
              <div className="category-card-back">Invert Them.</div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}
                <FaCheckCircle className="checkcircle" />

                <p>Strings</p>
              </div>
              <div className="category-card-back">"This is a string."</div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Dynamic Programming</p>
              </div>
              <div className="category-card-back">Everyone hates it.</div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Searching</p>
              </div>
              <div className="category-card-back">
                Searching for the Purchase button?
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Sorting</p>
              </div>
              <div className="category-card-back">
                array = [3, 1, 2] <br />
                sort(array) <br />
                array == [1, 2, 3]
              </div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Greedy Alogorithms</p>
              </div>
              <div className="category-card-back">Not too greedy.</div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Recursion</p>
              </div>
              <div className="category-card-back">
                [[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Famous Alogorithms</p>
              </div>
              <div className="category-card-back">ヽ( ͡° ͜ʖ ͡°)ﾉ</div>
            </div>
          </div>

          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Heaps</p>
              </div>
              <div className="category-card-back">Fancy trees.</div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Binary Search Trees</p>
              </div>
              <div className="category-card-back">BS trees.</div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-card-inner">
              <div className="category-card-front center white-text">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_3xe9KKNFyE4heA7Dr2wiPS"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" stroke-width="5"></path></svg> */}

                <FaCheckCircle className="checkcircle" />
                <p>Stacks</p>
              </div>
              <div className="category-card-back">
                Push. Pop.
                <br />
                That's about it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
