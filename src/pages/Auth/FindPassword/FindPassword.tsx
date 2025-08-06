import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Toaster } from "../../../components/ui/sonner";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import InputBar from "../../../components/InputBar/InputBar";
import FailedIcon from "@/assets/fail-find-auth.png";
import { findPasswordApi } from "../../../apis/auth";

const FindPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [failToSearch, setFailToSearch] = useState(false);

  const handleToFindPassword = async () => {
    try {
      await findPasswordApi(email);
      toast("전송이 완료되었습니다.");
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timer);
    } catch (error) {
      setFailToSearch(true);
      console.error("비밀번호 찾기 클라쪽 에러메시지", error);
    }
  };

  const retryInput = () => {
    setEmail("");
    setFailToSearch(false);
  };
  return (
    <div className="h-[100vh]">
      <Toaster />
      <Header
        leftChild={<img src={LeftArrowIcon} onClick={() => navigate(-1)} />}
        title={<span className="text-[20px] font-bold">비밀번호 찾기</span>}
      />
      <div className="relative h-full mx-4">
        {failToSearch ? (
          <>
            <div className="h-full flex flex-col items-center gap-20 pt-40">
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold">비밀번호 찾기 실패</h1>
                <p className="text-[20px]">존재하지 않는 아이디에요</p>
              </div>
              <img className="w-60" src={FailedIcon} alt="실패 아이콘" />
            </div>
            <div className="absolute w-full bottom-20">
              <Button onClick={retryInput}>다시 입력하기</Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-8 pt-45">
              <p className="text-lg font-semibold">
                비밀번호 찾기를 위해 가입 시 등록했던
                <br />
                아이디(이메일)정보를 입력해주세요.
              </p>
              <InputBar
                type="text"
                input={email}
                onChangeInput={(e) => setEmail(e.target.value)}
                placeholder="아이디 (이메일) 입력"
              />
            </div>
            <div className="absolute w-full bottom-20">
              <Button onClick={handleToFindPassword}>
                임시 비밀번호 전송하기
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FindPassword;
