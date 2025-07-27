import { useNavigate } from "react-router-dom";
import Header from "../../../../../../components/Header/Header";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "@/assets/icons/close-darkblue-icon.svg";
import FakeBankApp from "@/assets/simulation/loan-investment/fake-bank-app-icon.svg";
import { permissionList } from "./constant";
import PermissionItem from "./components/PermissionItem";

const AllowPermissionPage = () => {
    const navigate = useNavigate();

    /** 이전 문자 메세지 페이지 퍼블리싱 후 수정할 것 */
    const handleBackClick = () => navigate("/simulation/loan-investment");
    const handleCloseClick = () => navigate("/simulation/loan-investment");
    return (
        <div className="flex flex-col justify-between w-full h-full overflow-y-scroll no-scrollbar">
            <Header
                leftChild={
                    <button onClick={handleBackClick}>
                        <img src={LeftArrowIcon} alt="뒤로가기"
                            className="py-[5.5px] pr-1" />
                    </button>
                }
                rightChild={
                    <button onClick={handleCloseClick}>
                        <img src={CloseIcon} alt="창닫기" />
                    </button>}
                bgColor="none"
            />

            <main className="p-6 ">
                <div className="flex items-center mt-[57px]">
                    <img src={FakeBankApp} alt="어플이미지" className="mr-6" />
                    <div className="w-52 h-14 justify-start text-black text-xl font-medium font-['Pretendard'] leading-normal">
                        XX은행에서 액세스하도록<br />
                        허용할 항목 선택
                    </div>
                </div>

                <div className="flex flex-col border-b-1">
                    {
                        permissionList.map((perm) => {
                            return <PermissionItem icon={perm.icon} title={perm.title} description={perm.description} isToggled={false} />
                        })
                    }
                </div>

                <div className="flex">
                    <div className="w-16 h-4 justify-start text-slate-950 text-base font-medium leading-normal">
                        모두 허용
                    </div>
                    <switch>
                        123
                    </switch>
                </div>

            </main>


        </div>
    )
}

export default AllowPermissionPage;