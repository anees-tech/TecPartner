import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ""
    );
    setIsButtonDisabled(!allFieldsFilled);
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true); // Disable the button immediately after form submission

    emailjs
      .sendForm(
        "service_nugbu5h",
        "template_h0i4efh",
        form.current,
        "PCfsq0WoNEqmJ5Prw"
      )
      .then(
        () => {
          alert("Email Sent Successfully!");
          setFormValues({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => {
            setIsButtonDisabled(false);
          }, 2000); // Re-enable the button after 2 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsButtonDisabled(false); // Re-enable the button if there's an error
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <section className="flex flex-col-reverse gap-12 py-12 md:p-20 md:flex-row items-center bg-gray-100 ">
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center items-center gap-[1.5rem] w-[40%] -mt-12"
          >
            <img src="/images/logo.png" alt="LOGO" className="h-48 w-48" />
          </div>

          <div className="w-[60%]" data-aos="fade-up">
            <div className="flex flex-wrap gap-4">
              <div className="w-full flex gap-4 lg:flex-nowrap flex-wrap">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  className="w-full lg:w-[47.5%] py-5 px-4 border-2 text-gray-700 border-gray-300 bg-gray-300 rounded-md"
                  value={formValues.user_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  name="user_email"
                  className="w-full lg:w-[50%] py-5 px-4 border-2 text-gray-700 border-gray-300 bg-gray-300 rounded-md"
                  value={formValues.user_email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="w-full py-5 px-4 border-2 text-gray-700 border-gray-300 bg-gray-300 rounded-md"
                value={formValues.subject}
                onChange={handleChange}
              />
              <textarea
                id="textMessage"
                placeholder="Message"
                name="message"
                className="w-full max-w-[40] py-5 px-4 border-2 text-gray-700 border-gray-300 bg-gray-300 rounded-md"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                value="Send"
                className={`px-4 py-4 delay-75 rounded-full text-gray-100 ${
                  isButtonDisabled
                    ? "bg-[#6a8dee] cursor-not-allowed"
                    : "bg-[#15307c] cursor-pointer"
                }`}
                disabled={isButtonDisabled}
              >
                SEND EMAIL
              </button>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Form;
