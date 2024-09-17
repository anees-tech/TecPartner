import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Scroll to the top when the pathname changes (for navigation purposes)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show/Hide the "Scroll to Top" button based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true); // Show button when scrolled 300px down
      } else {
        setShowButton(false); // Hide button when near the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Scroll more slowly by adjusting the speed of scrolling
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-gray-50 text-black rounded-full py-3 px-4 hover:bg-[#15307c] hover:text-white shadow-xl transition-all duration-700 ease-in-out z-50"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
