const CallToActionBtn: React.FC = ({}) => {
  return (
    <section className="mt-16">
      <button className="cursor-pointer bg-customMarron2 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 
      shadow-[0.5rem_0.5rem_#6d5860,-0.5rem_-0.5rem_#6d5860] hover:shadow-[0.5rem_0.5rem_#ffffff,-0.5rem_-0.5rem_#ffffff] transition 
      hover:text-[#6d5860] font-semibold duration-300">
        Converse com a Harmony agora
      </button>
    </section>
  );
};

export default CallToActionBtn;
