
function Support() {

  return (
    <div className="h-[92vh] flex flex-row items-center justify-center p-10 bg-black">
        <div className="w-1/3  text-white">
        <h2 className="text-5xl font-bold  mb-4">Get in Touch</h2>
        <div className=" w-2/3 text-gray-300 flex flex-wrap h-48 text-sm">
           <p>Need help? Our support team is here to assist with your questions, concerns, or 
            feedback. Whether it's about bookings, cars, or anything else, we're just a message 
            away. Submit the form or use the contact details below to reach out to us anytime! 
            Your satisfaction is our priority.</p>

        </div>
        
        <p className="text-gray-500 mb-2">
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <p className="text-gray-500 mb-2">
          <strong>Email:</strong> support@wheels4rent.com
        </p>
        <p className="text-gray-500">
          <strong>Address:</strong> 1234 Elm Street, Cityville, Country
        </p>
      </div>


      <div className="w-2/5  h-2/3 mb-20">
          <img src="/support.png" alt="support" className="object-cover"/>
       </div>
      
    </div>
  );
}

export default Support;
