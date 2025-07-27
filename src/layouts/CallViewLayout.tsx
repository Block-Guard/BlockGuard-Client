import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import LeftArrowIcon from "../assets/icons/arrow-left-white-icon.svg";
import CloseIcon from "../assets/icons/close-white-icon.svg";

const CallViewLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[linear-gradient(180deg,_#7374AE_0%,_#342929_100%)]">
      <Header
        leftChild={
          <img
            className="py-[5.5px] pr-1"
            src={LeftArrowIcon}
            onClick={() => navigate(-1)}
          />
        }
        rightChild={<img src={CloseIcon} onClick={() => navigate(-1)} />}
        bgColor="none"
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CallViewLayout;
