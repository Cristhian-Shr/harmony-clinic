import Link from "next/link";

const CallToActionBtn: React.FC = ({}) => {
  return (
    <Link href="https://wa.me/5553999097340?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Harmony%20Clinic%20Bag%C3%A9..."
    className="mt-10 group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 
    focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"></span>

      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-brownBgNav px-8 py-3 text-sm 
      font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-gray-800/90">
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="mr-2 h-5 w-5 text-writingOne transition-transform group-hover:-translate-x-1 group-hover:text-brownBgNav duration-300"
        >
          <path
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>

        <span className="relative bg-clip-text text-writingOne hover:text-brownBgNav duration-300 font-semibold group">
          Converse conosco agora!
        </span>

        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="ml-2 h-5 w-5 text-writingOne transition-transform group-hover:translate-x-1 group-hover:text-brownBgNav duration-300"
        >
          <path
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </span>
    </Link >
  );
};

export default CallToActionBtn;
