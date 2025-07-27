import { useEffect, useState } from "react";
import OnThePhoneComponent from "../../components/OnThePhoneComponent";
import { formatCallTime } from "../../../../utils/formatCallTime";

const CallViewLoan = () => {
  const [callTime, setCallTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCallTime((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [callTime]);

  return (
    <div className="h-dvh flex flex-col justify-between items-center px-8 pb-[34px]">
      <div className="pt-18 flex flex-col text-monochrome-100 text-center">
        <span className="text-2xl font-medium h-[29px]">
          {formatCallTime(callTime)}
        </span>
        <span className="text-[44px] font-semibold">02-851-5396</span>
      </div>
      <OnThePhoneComponent needsKeypad={true} />
    </div>
  );
};

export default CallViewLoan;
