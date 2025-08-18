import { useNavigate } from "react-router-dom";
import { withdrawUserApi } from "../../../apis/mypage";
import Button from "../../../components/Button/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "../../../components/ui/dialog";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const WithdrawalModal = ({ isOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();
  const withdrawUser = async () => {
    try {
      await withdrawUserApi();
      navigate("/login");
    } catch (error) {
      console.error("회원탈퇴 시 클라 측 에러 메시지", error);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="w-76 h-65 border border-white rounded-[15px] bg-monochrome-200 p-4 items-start"
        showCloseButton={false}
      >
        <div className="flex flex-col justify-center gap-[10px] mt-13">
          <h2 className="text-primary-400 font-semibold text-xl leading-6 text-center">
            정말 계정을 탈퇴하시겠습니까?
          </h2>
          <DialogTitle className="text-monochrome-600 text-[15px] font-medium leading-5 text-center">
            탈퇴시 계정 및 이용기록은 모두 삭제되며, 삭제된 데이터는 복구가
            불가능합니다.
          </DialogTitle>
        </div>
        <div className="absolute w-full px-4 bottom-7.5 flex flex-row gap-3">
          <Button
            className="font-medium rounded-[10px]"
            size="sm"
            onClick={withdrawUser}
          >
            탈퇴하기
          </Button>
          <DialogClose className="w-full">
            <Button
              className="bg-[#E9E9EB] font-medium text-[#797C7B] rounded-[10px]"
              size="sm"
            >
              취소
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawalModal;
