import { useState } from "react";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black h-[92vh] w-full items-centre flex">
      <div className="w-4/5 lg:w-3/4 xl:w-2/3 flex flex-row justify-between gap-6 mx-auto">
        {/* Left Column with Title */}
        <div className="flex flex-col justify-center items-start w-2/3  text-3xl poppins-medium text-gray-300 ">
          <h1>Got Any Questions?</h1>
          <h1>Checkout Some of</h1>
          <h1>Our Frequently Asked</h1>
          <h1>Questions.</h1>
          <p className="text-sm mt-4 text-gray-400">Our FAQs cover everything you need to know about booking, renting, and using our services. 
          If you don’t find the answer here, feel free to reach out to our support team!</p>
        </div>

        {/* Right Column with FAQs  */}
        <div className="faq_container w-full  p-8 mt-28">
          {[
            {
              question: "How do I book a car?",
              answer:
                "To book a car, simply browse our listings, select the desired car, and click on 'Rent Now'. Complete the form with your details to confirm your booking.",
            },
            {
              question: "What documents do I need to rent a car?",
              answer:
                "You need a valid driver’s license, a government-issued ID, and a credit/debit card for payment.",
            },
            {
              question: "Are there any age restrictions for renting a car?",
              answer:
                "Yes, renters must be at least 21 years old. Some premium cars may require renters to be 25 or older.",
            },
            {
              question: "Can I cancel or modify my booking?",
              answer:
                "Yes, you can cancel or modify your booking up to 24 hours before the start date. Visit your dashboard for more details.",
            },
            {
              question: "What happens if the car breaks down during my rental?",
              answer:
                "In case of a breakdown, contact our support team immediately. We will provide roadside assistance or a replacement vehicle if needed.",
            },
            {
              question: "Do you offer insurance for rentals?",
              answer:
                "Yes, all rentals include basic insurance coverage. Additional insurance options are available during the booking process.",
            },
            {
              question: "How do I contact customer support?",
              answer:
                "You can reach our support team through the 'Support' page, by email, or by calling our hotline. We're here to help!",
            },
          ].map((faq, index) => (
            <div className="faq mb-4" key={index}>
              <div
                className="faq_question text-white text-sm cursor-pointer border border-slate-400 p-2 w-5/8"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </div>
              <div
                className="faq_answer_container"
                style={{
                  height: openIndex === index ? "auto" : "0",
                  overflow: "hidden",
                  padding: openIndex === index ? "10px 0" : "0",
                  transition: "height 0.5s ease",
                }}
              >
                <div className="faq_answer text-slate-400 text-xs">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
