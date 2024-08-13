import { Link } from "react-router-dom";

const Card = (props) => {
  const { svg, heading, para } = props;

  return (
    <div className="group flex flex-col max-w-sm p-6 shadow-2xl shadow-indigo-300 bg-gray-100 border hover:border-[3px] transition duration-300 hover:zoom hover:border-indigo-500 border-gray-200 rounded-lg h-auto sm:h-[27rem] md:h-[27rem] lg:h-[27rem] xl:h-[27rem]">
      <div
        className="text-[#15307c] py-4"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      <div lassName="mt-auto">
        <h5 className="mb-2 text-2xl font-medium group-hover:text-indigo-600 transition duration-300">
          {heading}
        </h5>
      </div>
      <p className="mb-3 font-normal text-gray-500">{para}</p>
      <div className="flex-grow"></div>
      <Link to="/Services">
        <svg
          className="text-gray-400 hover:text-[#15307c] lucide lucide-arrow-right-circle"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="m12 16 4-4-4-4" />
        </svg>
      </Link>
    </div>
  );
};

export default Card;
