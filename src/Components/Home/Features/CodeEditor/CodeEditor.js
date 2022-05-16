import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./Codeeditor.css";
import { RiArrowUpLine } from "react-icons/ri";

const CodeEditor = () => {
  return (
    <section id="" className="CodeEditor container-dark-alt">
      <RiArrowUpLine className=" uparrow pointer" />
      <div className="center inner-container">
        <h2 className="center white-text ">
          The Perfect Practice Environment.
        </h2>
        <p className="center white-text feature-section-text">
          In an ideal world, you'd prepare for coding interviews by writing out
          solutions to problems in your language of choice, getting some hints
          if necessary, running your code against test cases, and looking at
          solutions when done.
          <br /> <br />
          We've turned that ideal world into the real world. Pick a language.
          Read the prompt. Write your solution. Run your code. Get some hints.
          Run your code again. Check the output. Pass the tests. View our
          solution. Watch our video. All within the same workspace.
        </p>
      </div>

      <div className="CodeEditor-container  ">
        <div className="CodeEditor-tabs-wrapper flex justify-content">
          <div className="left-tabs flex">
            <button className=" btn-editor">
              <img src="/assets/logo.jpg" className="editor-logo-icon" />
              AlgoExpert
            </button>

            <Tippy content="tooltip">
              <button className="tab-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="_38MsEAc6a9scAiLTOkzRVr svg-editor-btn"
                >
                  <path d="M492 236H144.262c-11.046 0-20 8.954-20 20s8.954 20 20 20H492c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 86H144.262c-11.046 0-20 8.954-20 20s8.954 20 20 20H492c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 386H144.262c-11.046 0-20 8.954-20 20s8.954 20 20 20H492c11.046 0 20-8.954 20-20s-8.954-20-20-20z"></path>
                  <circle cx="27" cy="106" r="27"></circle>
                  <circle cx="27" cy="256" r="27"></circle>
                  <circle cx="27" cy="406" r="27"></circle>
                </svg>
              </button>
            </Tippy>

            <Tippy content="tooltip">
              <button className="tab-btn">
                Quad Layout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 292.362 292.362"
                  class="rgvbKjEltLhThY5J9ub-0 undefined ud-arrow "
                >
                  <path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path>
                </svg>
              </button>
            </Tippy>

            <Tippy content="tooltip">
              <button className="tab-btn">
                JavaScript
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 292.362 292.362"
                  class="rgvbKjEltLhThY5J9ub-0 undefined ud-arrow "
                >
                  <path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path>
                </svg>
              </button>
            </Tippy>

            <Tippy content="tooltip">
              <button className="tab-btn">
                14px
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 292.362 292.362"
                  class="rgvbKjEltLhThY5J9ub-0 undefined ud-arrow"
                >
                  <path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path>
                </svg>
              </button>
            </Tippy>

            <Tippy content="tooltip">
              <button className="tab-btn">
                Sublime
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 292.362 292.362"
                  class="rgvbKjEltLhThY5J9ub-0 undefined ud-arrow"
                >
                  <path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path>
                </svg>
              </button>
            </Tippy>

            <Tippy content="tooltip">
              <button className="tab-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 302.4 302.4"
                  class="_38MsEAc6a9scAiLTOkzRVr svg-editor-btn "
                >
                  <path
                    d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2z"
                    stroke="currentColor"
                    stroke-width="12"
                  ></path>
                  <path
                    d="M292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"
                    stroke="currentColor"
                    stroke-width="5"
                  ></path>
                </svg>
              </button>
            </Tippy>
          </div>
          <div className="right-tabs flex">
            <Tippy content="tooltip">
              <button className="tab-btn">
                <svg
                  viewBox="0 0 515.555 515.555"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="_38MsEAc6a9scAiLTOkzRVr svg-editor-btn"
                >
                  <path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path>
                </svg>
              </button>
            </Tippy>

            <Tippy content="tooltip">
              <button className="tab-btn">
                <svg
                  fill="currentColor"
                  viewBox="0 0 323.569 323.569"
                  xmlns="http://www.w3.org/2000/svg"
                  class="_3sRQZbRpTpCxpcGmMEqpdt svg-editor-btn"
                >
                  <path d="M161.785 53.928c-74.459 0-134.821 60.361-134.821 134.821S87.325 323.57 161.785 323.57s134.821-60.361 134.821-134.821c-.085-74.424-60.397-134.736-134.821-134.821zm13.482 241.74v-12.545c0-7.446-6.036-13.482-13.482-13.482s-13.482 6.036-13.482 13.482v12.538c-48.792-6.221-87.21-44.638-93.431-93.431H67.41c7.446 0 13.482-6.036 13.482-13.482s-6.036-13.482-13.482-13.482H54.872c6.221-48.792 44.638-87.21 93.431-93.431v12.538c0 7.446 6.036 13.482 13.482 13.482s13.482-6.036 13.482-13.482V81.836c48.795 6.218 87.216 44.636 93.437 93.431h-12.545c-7.446 0-13.482 6.036-13.482 13.482s6.036 13.482 13.482 13.482h12.538c-6.217 48.795-44.636 87.216-93.43 93.437z"></path>
                  <path d="M175.267 183.166v-34.863c0-7.446-6.036-13.482-13.482-13.482s-13.482 6.036-13.482 13.482v40.446a13.487 13.487 0 003.95 9.532l26.964 26.964c5.356 5.173 13.891 5.024 19.064-.332 5.046-5.225 5.046-13.507 0-18.732zM134.821 26.964h53.928c7.446 0 13.482-6.036 13.482-13.482S196.195 0 188.749 0h-53.928c-7.446 0-13.482 6.036-13.482 13.482s6.036 13.482 13.482 13.482zM314.314 74.348L276.185 36.22c-5.331-5.198-13.867-5.09-19.065.241-5.105 5.236-5.105 13.588 0 18.824l38.129 38.129c5.198 5.331 13.734 5.439 19.065.241s5.439-13.734.241-19.065a10.994 10.994 0 00-.241-.242zM66.449 55.285c5.331-5.198 5.439-13.734.241-19.065s-13.734-5.439-19.065-.241c-.081.079-.162.16-.241.241L9.256 74.348c-5.331 5.198-5.44 13.734-.242 19.065s13.734 5.44 19.065.242c.082-.08.162-.16.242-.242z"></path>
                </svg>
                <div>
                  <span>00:00:00</span> | <span>00:00:00</span>
                </div>
              </button>
            </Tippy>
            <Tippy content="tooltip">
              <button className="tab-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 98.023 98.023"
                  class="_38MsEAc6a9scAiLTOkzRVr svg-editor-btn"
                >
                  <path d="M49.011 8.689c-9.983 0-18.541 6.61-22.158 16.012h44.315C67.553 15.3 58.994 8.689 49.011 8.689z"></path>
                  <path d="M93.357 48.938H79.496a47.421 47.421 0 001.348-9.83c4.94-2.967 10.617-8.168 12.028-16.795a4.665 4.665 0 00-9.209-1.506c-.759 4.64-3.723 7.724-6.633 9.696H21.009c-2.915-1.974-5.892-5.058-6.65-9.696a4.664 4.664 0 00-5.357-3.851 4.665 4.665 0 00-3.852 5.357c1.411 8.626 7.087 13.828 12.028 16.795a47.354 47.354 0 001.348 9.83H4.665a4.666 4.666 0 000 9.332h17.322a39.081 39.081 0 004.602 7.083c-6.1 4.571-11.813 12.548-14.584 16.745a4.665 4.665 0 007.785 5.144c4.624-6.99 10.586-13.596 13.746-15.472 3.796 2.601 8.073 4.261 12.622 4.759V41.297h5.708v35.232c4.543-.498 8.813-2.153 12.608-4.748 3.195 1.89 9.146 8.483 13.76 15.461a4.665 4.665 0 007.784-5.144c-2.774-4.2-8.473-12.184-14.579-16.751a39.13 39.13 0 004.596-7.077h17.322a4.666 4.666 0 000-9.332z"></path>
                </svg>
              </button>
            </Tippy>
          </div>
        </div>
        <div className="codeWindow-container">
            <div className="window">
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default CodeEditor;
