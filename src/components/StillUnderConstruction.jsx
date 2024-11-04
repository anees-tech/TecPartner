import React from 'react'

function StillUnderConstruction() {
    return (
            <div className="flex items-center p-20 gap-8 justify-center bg-gray-100">
                <div className="w-1/2">
                    <img
                        data-aos="fade-right"
                        src="images/underConstruction.svg"
                        alt="Page Under Construction"
                        className="w-full h-auto rounded-3xl"
                    />
                </div>
                <div data-aos="fade-up" className="w-1/2 p-4">
                    <div className="text-center">
                        <h3
                            data-aos="fade-up"
                            className="text-4xl delay-200 font-bold text-[#15307c] mb-4"
                        >
                            🚧 Oops! This Page is Under Construction
                        </h3>
                        <p data-aos="fade-up" className="text-gray-700 delay-300">
                            We're working hard to bring you something amazing! This page is
                            currently in the workshop and will be ready for you soon. In the
                            meantime, if you have any inquiries about available jobs, feel
                            free to reach out to us at{" "}
                            <a
                                href="mailto:careers@tecpartner.net"
                                className="text-indigo-600 underline"
                            >
                                careers@tecpartner.net
                            </a>{" "}
                            or connect with us on LinkedIn. You can also send us a message
                            through the Contact section.
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default StillUnderConstruction