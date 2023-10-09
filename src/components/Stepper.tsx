import checked from "../assets/checked.png";

const Stepper = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <span
          className={`w-[16px] h-[16px] flex justify-center items-center 
            bg-[#F3344A]
         rounded-full cursor-pointer`}
        >
          <img src={checked} alt="checked" />
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span className="w-[2px] h-[50px] bg-[#F3344A]"></span>
      </div>
      <div className="flex justify-center items-center">
        <span
          className={`w-[16px] h-[16px] flex justify-center items-center
            bg-[#F3344A]
           rounded-full cursor-pointer`}
        >
          <img src={checked} alt="checked" />
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span className="w-[2px] h-[50px] bg-[#F3344A]"></span>
      </div>

      <div className="flex justify-center items-center">
        <span
          className={`w-[16px] h-[16px] flex justify-center items-center 
           bg-[#F4D7DA]
            rounded-full cursor-pointer border-[1px] border-[#F3344A]`}
        ></span>
      </div>
      <div className="flex justify-center items-center">
        <span className="w-[2px] h-[50px]"></span>
      </div>
      <div className="flex justify-center items-center">
        <span
          className={`w-[16px] h-[16px] flex justify-center items-center 
            bg-[#EBF0F1]
           rounded-full cursor-pointer border-[1px] border-[#678C94]`}
        ></span>
      </div>
    </div>
  );
};

export default Stepper;
