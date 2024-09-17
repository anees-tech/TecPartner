import React from "react";

const SocialLinks = ({color, width, heightAndWidth}) => {
  return (
    <div>
      <div className="flex my-4 gap-4 text-gray-500">
        <a
          href="mailto:info@tecpartner.net"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 hover:underline flex gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={heightAndWidth}
            height={heightAndWidth}
            viewBox="0 0 24 24"
            color={color}
            fill="none"
            stroke="currentColor"
            stroke-width={width}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/company/tec-partner/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 hover:underline flex gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={heightAndWidth}
            height={heightAndWidth}
            viewBox="0 0 24 24"
            fill="none"
            color={color}
            stroke="currentColor"
            stroke-width={width}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 hover:underline flex gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={heightAndWidth}
            height={heightAndWidth}
            viewBox="0 0 24 24"
            fill="none"
            color={color}
            stroke="currentColor"
            stroke-width={width}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/tec.partner?utm_source=qr&igsh=Nnhncm0zcXNndzJu"
          className="hover:text-gray-700 hover:underline flex gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={heightAndWidth}
            height={heightAndWidth}
            viewBox="0 0 24 24"
            fill="none"
            color={color}
            stroke="currentColor"
            stroke-width={width}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=923335535234"
          className="hover:text-gray-700 hover:underline flex gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={heightAndWidth}
            height={heightAndWidth}
            viewBox="0 0 24 24"
            fill="none"
            color={color}
            stroke="currentColor"
            stroke-width={width}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-whatsapp"
          >
            <path d="M17.472 14.474c-.297-.149-1.759-.868-2.03-.968-.273-.101-.472-.149-.671.149-.198.297-.768.968-.94 1.167-.173.198-.347.223-.644.075-.297-.149-1.255-.461-2.39-1.473-.883-.787-1.48-1.76-1.653-2.057-.173-.297-.018-.458.13-.606.134-.134.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.671-1.612-.919-2.209-.242-.579-.488-.502-.671-.502-.173-.008-.372-.009-.571-.009-.198 0-.52.075-.793.372-.273.297-1.04 1.015-1.04 2.474s1.065 2.872 1.213 3.07c.149.198 2.1 3.204 5.09 4.492.711.307 1.264.49 1.696.628.713.226 1.36.194 1.871.118.571-.085 1.759-.719 2.008-1.413.248-.694.248-1.29.173-1.413-.075-.123-.272-.198-.571-.347zM12 2.002c-5.523 0-10 4.478-10 9.998 0 1.766.467 3.49 1.352 4.998L2 22l5.154-1.348c1.474.797 3.101 1.212 4.846 1.212 5.522 0 10-4.477 10-9.998 0-5.522-4.478-9.998-10-9.998z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
