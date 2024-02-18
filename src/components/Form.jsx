import React from 'react'

const Form = () => {
  return (
    <>
      <section className="flex p-20 flex-wrap bg-gray-100">
        <div className="flex flex-col gap-[1.5rem] w-[40%] py-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-[#15307c] h-[44px] w-[44px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h4 className="text-[18px] font-medium mb-2">Location:</h4>
              <p className="text-[14px] text-gray-500">Lahore, Pakistan</p>
              <button className="btn glass">Glass button</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-[#15307c] h-[44px] w-[44px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-history"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h4" />
                <path d="M12 7v5l4 2" />
              </svg>
            </div>
            <div>
              <h4 className="text-[18px] font-medium mb-2">Open Hours:</h4>
              <p className="text-[14px] text-gray-500">24 / 7 </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-[#15307c] h-[44px] w-[44px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-[18px] font-medium mb-2">Email:</h4>
              <a
                href="mailto:support@tecpartner.co"
                className="text-[14px] text-gray-500"
              >
                support@tecpartner.co
              </a>
            </div>
          </div>
        </div>

        <div className="w-[60%]">
          <form action="#">
            <div className="flex flex-wrap gap-4">
              <div className="w-full flex flex-wrap gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[47.5%] py-5 px-4 border-2 text-gray-500 border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-[50%] py-5 px-4 border-2 text-gray-500 border-gray-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full py-5 px-4 border-2 text-gray-500 border-gray-300"
              />
              <textarea
                name="textMessage"
                id="textMessage"
                cols="100"
                placeholder="Message"
                rows="6"
                className="w-full max-w-[40] h-auto resize-y-none py-5 px-4 border-2 text-gray-500 border-gray-300"
              ></textarea>

              <button
                type="submit"
                className="px-4 py-4 bg-[#15307c] text-gray-100 rounded-full "
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form