import Header from "../../components/Header/Header";
import ArrowBackIcon from "../../assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "../../assets/icons/close-darkblue-icon.svg";

const Signup = () => {
  return (
    <div>
      <Header
        title={
          <span className="font-bold text-xl leading-[30px]">회원가입</span>
        }
        leftChild={<img className="py-[5.5px] pr-1" src={ArrowBackIcon} />}
        rightChild={<img src={CloseIcon} alt="회원가입 닫기" />}
      />
    </div>
  );
};

export default Signup;
