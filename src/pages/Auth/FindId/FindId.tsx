import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import LabeledInput from "../../../components/LabeledInput/LabeledInput";
import Button from "../../../components/Button/Button";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import FailedIcon from "@/assets/fail-find-auth.png";
import { formatPhoneNumber } from "../../../utils/authUtils";
import { findIdApi } from "../../../apis/auth";

// 초기 상태 상수
const initialFindIdContents = {
  name: "",
  phoneNumber: "",
  birthDate: "",
};

// 유틸: 이메일 아이디 마스킹
const formatFoundId = (foundId: string) => {
  const [idPart, domainPart] = foundId.split("@");
  if (!idPart || !domainPart) return foundId;

  const visiblePart = idPart.length > 2 ? idPart.slice(0, -2) : "";
  const maskedPart = "*".repeat(Math.min(2, idPart.length));

  return `${visiblePart}${maskedPart}@${domainPart}`;
};

const FindId = () => {
  const navigate = useNavigate();

  const [findIdContents, setFindIdContents] = useState(initialFindIdContents);
  const [foundId, setFoundId] = useState("");
  const [tryToSearch, setTryToSearch] = useState(false);
  const [failToSearch, setFailToSearch] = useState(false);

  // Input 변경 핸들러
  const handleChangeInput = (
    key: keyof typeof findIdContents,
    value: string
  ) => {
    setFindIdContents((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // 아이디 검색 요청
  const handleToSearchId = async () => {
    try {
      const response = await findIdApi(findIdContents);
      setFoundId(response);
      setFailToSearch(false);
    } catch (error) {
      console.error("아이디 찾기 실패", error);
      setFailToSearch(true);
    } finally {
      setTryToSearch(true);
    }
  };

  // 재입력
  const retryInput = () => {
    setFindIdContents(initialFindIdContents);
    setTryToSearch(false);
    setFailToSearch(false);
  };

  // 결과 렌더링
  const renderResultView = () => {
    if (failToSearch) {
      return (
        <>
          <div className="h-full flex flex-col items-center gap-20 pt-40">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">아이디 찾기 실패</h1>
              <p className="text-[20px]">해당하는 사용자를 찾을 수 없어요</p>
            </div>
            <img className="w-60" src={FailedIcon} alt="실패 아이콘" />
          </div>
          <div className="absolute w-full bottom-20">
            <Button onClick={retryInput}>다시 입력하기</Button>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="h-full flex flex-col items-center gap-15 pt-40">
          <h1 className="text-2xl font-bold">아이디 찾기 완료!</h1>
          <div className="w-full py-5 flex justify-center border border-[#b2b2b2] rounded-[12px] text-monochrome-700 text-[20px]">
            {formatFoundId(foundId)}
          </div>
        </div>
        <div className="absolute w-full flex flex-col bottom-20 gap-4">
          <Button onClick={() => navigate("/login")}>로그인</Button>
          <Button isWhite onClick={() => navigate("/auth/find-password")}>
            비밀번호 찾기
          </Button>
        </div>
      </>
    );
  };

  return (
    <div className="h-[100vh]">
      <Header
        leftChild={<img src={LeftArrowIcon} onClick={() => navigate(-1)} />}
        title={<span className="text-[20px] font-bold">아이디 찾기</span>}
      />

      <div className="relative h-full mx-4">
        {tryToSearch ? (
          renderResultView()
        ) : (
          <>
            <div className="flex flex-col gap-5 pt-38">
              <LabeledInput
                label="이름"
                type="text"
                input={findIdContents.name}
                onChangeInput={(e) => handleChangeInput("name", e.target.value)}
                placeholder="ex) 홍길동"
              />
              <LabeledInput
                label="생년월일"
                type="number"
                input={findIdContents.birthDate}
                onChangeInput={(e) =>
                  handleChangeInput("birthDate", e.target.value)
                }
                placeholder="ex) 20010101"
              />
              <LabeledInput
                label="휴대폰 번호"
                type="text"
                input={formatPhoneNumber(findIdContents.phoneNumber)}
                onChangeInput={(e) =>
                  handleChangeInput("phoneNumber", e.target.value)
                }
                placeholder="ex) 010XXXXXXXX"
              />
            </div>
            <div className="absolute w-full bottom-20">
              <Button onClick={handleToSearchId}>아이디 찾기</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FindId;
