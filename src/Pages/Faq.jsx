import "../styles/faq.css";

const Faq = () => {
  return (
    <div className="faq_ptn">
      <>
        <h2 className="title_faq">FAQ</h2>
      </>
      <div className="faq_padding">
        <div className="first_side">
          <h2 className="ques">YOU QUESTION, WE ANSWER.</h2>
          <div className="question_tag">
            We have questions coming from all angle of the city, your questions
            are valid at Arti-Reach and will be answered as soon as we can get
            to them.
          </div>
        </div>
        <div className="second_slide">
          <div className="margin_padding">
            <div>01 How does Arti-Reach work?</div>
            <p className="p_tag">
              A landing page is simply another URL on a website or platform that
              can explain how our services work.
            </p>
          </div>
          <div className="margin_padding">
            02 What type of services can i get from Arti-Reach?{" "}
          </div>
          <div className="margin_padding">
            03 How will the Artisan know my location?
          </div>
          <div className="margin_padding">
            04 How does the payment structure work?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
