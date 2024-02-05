import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-24 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-indigo-500 ">Testimonials
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500">
          Hear how our exceptional recruiting and consultation services have made a difference in the lives of job seekers and employers.
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          <div className="p-6 bg-gray-100 rounded-lg md:p-8">
            <p className="leading-loose text-gray-500">
              Robbert seamlessly joined our recruiting process midway and adeptly comprehended our requirements, swiftly sifting through a substantial volume of applicants. They excelled in aiding us to pinpoint and engage with numerous high-calibre candidates. Their adaptability to changes and effective communication at every stage was commendable. If the need for assistance arises again, we would certainly seek their expertise.”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm text-gray-500 ">CTO, Robert Consultancy</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="leading-loose text-gray-500 ">
            We assigned Easetalent the task of sourcing profiles for JavaScript Developers open to new opportunities. They performed exceptionally well, by delivering 5 profiles within a day. Among these, we shortlisted 3 as they best aligned with the requirements. We are content with this collaboration and wholeheartedly endorse Easetalent to all employers seeking recruiting services.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                <span className="text-sm text-gray-500 ">Marketing Manager at Stech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
