"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaAddressCard } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail, MdWeb } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import emailjs from "emailjs-com";
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const sendVerificationEmail = (data) => {
    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "service_v0t3kb9", // 서비스 ID
        "template_hvv4rfe", // 템플릿 ID
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL // public-key
      )
      .then((response) => {
        console.log("이메일이 성공적으로 보내졌습니다:", response);
        reset();
        setIsEmailSent(true);
        alert("성공적으로 전송하였습니다");
        // 이메일 전송 성공 처리 로직 추가
      })
      .catch((error) => {
        console.error("이메일 보내기 실패:", error);
        reset();
        alert("전송실패");
        // 이메일 전송 실패 처리 로직 추가
      });
  };

  const handleVerification = (data) => {
    sendVerificationEmail(data);
  };
  return (
    <section className="section ContactContainer" id="contact">
      <div className="r-container">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col mb-3">
            <div className="divider mb-4">
              <span className="accent-color fs-5 me-3">GET IN TOUCH</span>
            </div>
            <h4 className="text-title text-white fw-bold font-1 lh-1 mb-5">
              Contact Us.
            </h4>
            <p className="text-gray">
              If you would like to inquire with Bora Media for various reasons
              such as consultation, production, etc., please contact us.
            </p>
            <div className="row row-cols-1 row-cols-lg-2 mt-5">
              <div className="col mb-3">
                <div className="d-flex flex-row align-items-center gap-3">
                  <IoMdPhonePortrait className="icon" />
                  <div className="d-flex flex-column">
                    <h6 className="text-white font-1">Phone</h6>
                    <span className="text-gray">82+ 01021661895</span>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-row align-items-center gap-3">
                  <MdWeb className="icon" />
                  <div className="d-flex flex-column">
                    <h6 className="text-white font-1">Site</h6>
                    <span className="text-gray">www.boramedia.co.kr</span>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-row align-items-center gap-3">
                  <MdEmail className="icon" />
                  <div className="d-flex flex-column">
                    <h6 className="text-white font-1">Email</h6>
                    <span className="text-gray">artinsky@boramedia.co.kr</span>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-row align-items-center gap-3">
                  <FaRegAddressCard className="icon" />
                  <div className="d-flex flex-column">
                    <h6 className="text-white font-1">Address</h6>
                    <span className="text-gray">
                      135 Misagangbyeonhangang-ro, Hanam-si, Gyeonggi-do
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 d-flex flex-column">
              <div
                className="success_msg toast align-items-center w-100 shadow-none mb-3 bg-transparent border border-success rounded-0 my-4"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="d-flex p-2">
                  <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-success">
                    <i className="fa-solid fa-check f-36 text-success"></i>
                    Your Message Successfully Send.
                  </div>
                  <button
                    type="button"
                    className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-success"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              <div
                className="error_msg toast align-items-center w-100 shadow-none border-danger mb-3 bg-transparent my-4 border rounded-0"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="d-flex p-2">
                  <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-danger">
                    <i className="fa-solid fa-triangle-exclamation f-36 text-danger"></i>
                    Something Wrong ! Send Form Failed.
                  </div>
                  <button
                    type="button"
                    className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-danger"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(handleVerification)}
                className="d-flex flex-column w-100 needs-validation mb-3 form"
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control p-3"
                    name="name"
                    id="name"
                    {...register("name")}
                    placeholder="Name"
                    required=""
                  />
                  <div className="invalid-feedback">The field is required.</div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control p-3"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    required=""
                  />
                  <div className="invalid-feedback">The field is required.</div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    {...register("message")}
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn submit_form font-1 py-3">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <iframe
          loading="lazy"
          className="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.069131781874!2d127.18892827651887!3d37.57698977203581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb100025a9587%3A0x9acca7fff69ceb6!2z67O0652866-465SU7Ja0!5e0!3m2!1sko!2skr!4v1709022899572!5m2!1sko!2skr"
          title="하남 미사 스카이폴리스"
          aria-label="London Eye, London, United Kingdom"
        ></iframe>
      </div>
      <div className="r-container footer">
        <div className="flex-box">
          <h4 className="text-white font-1 fw-bold fs-1">
            Thank you for watching this far
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Contact;
