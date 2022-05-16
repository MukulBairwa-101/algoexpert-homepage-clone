import React from "react";
import { RiArrowUpLine } from "react-icons/ri";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-dark-alt ">
      <RiArrowUpLine className="white-text uparrow pointer" />
      <div className="footer-wrapper">
        <div className="footer-left ">

            <h1 className=" white-text ">
            A Better Way To Land Interviews.
        </h1>
        <p className="   white-text ">
        Earn the AlgoExpert Certificate. Get referred to tech companies.
        </p>
        <p className="   white-text ">
        No more InMail messages that get ignored.
        </p>
        <p className="   white-text ">
        No more cold emails that go nowhere.
        </p>
        <p className="   white-text ">
        No more job applications that get no attention.
        </p>
        <p className="   white-text ">
        No more referral programs that don't work.
        </p>
        <p className="   white-text ">
        No more recruiting agencies that cost a fortune.
        </p>
        <p className="   white-text ">
        With AlgoExpert, preparing for interviews helps you land interviews.
        </p>

        <button className="btn learnmore-btn pointer btn-primary">
          <span>Learn More</span>
        </button>
        </div>
        <div className="footer-right">
            <div className="del-basket">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="_2WOAptLMJ19Gg963wYvbPq del-svg-icon"><path d="M436 60h-75V45c0-24.813-20.187-45-45-45H196c-24.813 0-45 20.187-45 45v15H76c-24.813 0-45 20.187-45 45 0 19.928 13.025 36.861 31.005 42.761L88.76 470.736C90.687 493.875 110.385 512 133.604 512h244.792c23.22 0 42.918-18.125 44.846-41.271l26.753-322.969C467.975 141.861 481 124.928 481 105c0-24.813-20.187-45-45-45zM181 45c0-8.271 6.729-15 15-15h120c8.271 0 15 6.729 15 15v15H181V45zm212.344 423.246c-.643 7.712-7.208 13.754-14.948 13.754H133.604c-7.739 0-14.305-6.042-14.946-13.747L92.294 150h327.412l-26.362 318.246zM436 120H76c-8.271 0-15-6.729-15-15s6.729-15 15-15h360c8.271 0 15 6.729 15 15s-6.729 15-15 15z"></path><path d="M195.971 436.071l-15-242c-.513-8.269-7.67-14.558-15.899-14.043-8.269.513-14.556 7.631-14.044 15.899l15 242.001c.493 7.953 7.097 14.072 14.957 14.072 8.687 0 15.519-7.316 14.986-15.929zM256 180c-8.284 0-15 6.716-15 15v242c0 8.284 6.716 15 15 15s15-6.716 15-15V195c0-8.284-6.716-15-15-15zM346.927 180.029c-8.25-.513-15.387 5.774-15.899 14.043l-15 242c-.511 8.268 5.776 15.386 14.044 15.899 8.273.512 15.387-5.778 15.899-14.043l15-242c.512-8.269-5.775-15.387-14.044-15.899z"></path></svg>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
