import { useState } from "react";
import "../styles/faq.css";
import character from "../assets/images/Character (23).png";
import helmet from "../assets/images/Helmet (2).png";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Arti-Reach all about?",
      answer:
        "Arti-Reach provides major and popular services for the masses and ensures that people attended to irrespective of the job task. At Arti-Reach we look out to ensure our clients are satisfied with our services and pleased at all times.",
    },
    {
      question: "What type of services can I get from Arti-Reach?",
      answer:
        "Arti-Reach provides major and popular services for the masses and ensures that people are attended to irrespective of the job task. At Arti-Reach we look out to ensure our clients are satisfied.",
    },
    {
      question: "How will the Artisans know my location?",
      answer:
        "Arti-Reach provides major and popular services for job masses and ensure that people are attended to irrespective of the job task. At Arti-Reach we look out to ensure our clients are satisfied.",
    },
    {
      question: "How does the payment structure work?",
      answer:
        "Arti-Reach provides major and popular services for masses and ensure that people are attended to irrespective of the job task. At Arti-Reach we look out to ensure our clients are satisfied with our services and pleased at all times.",
    },
  ];

  return (
    <div className="faqcon">
      <div className="faq-container">
        <span className="faqh1">Frequently Asked Questions</span>
        <div className="faqp1">
          <span className="fa_1">You have Questions, We have Answers</span>
          <br />
          <span className="fa_2">
            At Arti-Reach we reserve the space for all questions to come in, we
            have answers Ready.
          </span>
        </div>
        {/* <div className="mainImg_fa">
          <img src={character} alt="" className="img_fa22" />
          <img src={helmet} alt="" className="img_fa3" />
        </div> */}
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="fa_3">
                {index + 1}. {faq.question}
                <span className="fa_4">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
        <div className="fa_6">
          <h2 className="fa_5">Ask Arti-Reach, We Answer.</h2>
          <div className="fa_6">
            We have questions coming from all angle of the city, your questions
            are valid at Arti-Reach and will be answered as soon as we can get
            to them.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
