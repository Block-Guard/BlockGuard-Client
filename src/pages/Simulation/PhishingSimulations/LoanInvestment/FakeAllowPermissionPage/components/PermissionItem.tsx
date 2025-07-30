import PermissionSwitch from "./PermissionSwitch";

interface PermissionItemProps {
    icon?: string;
    title: string;
    description: string;
    isChecked: boolean;
    handleCheck:()=>void;
}

const PermissionItem = ({ icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlcnZlci1jcmFzaC1pY29uIGx1Y2lkZS1zZXJ2ZXItY3Jhc2giPjxwYXRoIGQ9Ik02IDEwSDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnY0YTIgMiAwIDAgMS0yIDJoLTIiLz48cGF0aCBkPSJNNiAxNEg0YTIgMiAwIDAgMC0yIDJ2NGEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMmgtMiIvPjxwYXRoIGQ9Ik02IDZoLjAxIi8+PHBhdGggZD0iTTYgMThoLjAxIi8+PHBhdGggZD0ibTEzIDYtNCA2aDZsLTQgNiIvPjwvc3ZnPg==", 
    title, description, isChecked, handleCheck }: PermissionItemProps) => {
    const onErrorImg = (e) => {
        e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlcnZlci1jcmFzaC1pY29uIGx1Y2lkZS1zZXJ2ZXItY3Jhc2giPjxwYXRoIGQ9Ik02IDEwSDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnY0YTIgMiAwIDAgMS0yIDJoLTIiLz48cGF0aCBkPSJNNiAxNEg0YTIgMiAwIDAgMC0yIDJ2NGEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMmgtMiIvPjxwYXRoIGQ9Ik02IDZoLjAxIi8+PHBhdGggZD0iTTYgMThoLjAxIi8+PHBhdGggZD0ibTEzIDYtNCA2aDZsLTQgNiIvPjwvc3ZnPg=="
    }
    return (
        <div className="flex pl-[20px] pr-[5px] justify-between mb-8">
            <img src={icon} alt="아이콘" className="mr-11" onError={onErrorImg} />
            <div className="flex flex-col w-full gap-3">
                <span className="h-3.5 text-slate-950 text-base font-medium leading-normal">
                    {title}
                </span>
                <span className="h-3.5 text-gray-500 text-xs font-medium leading-none">
                    {description}
                </span>
            </div>

            <PermissionSwitch isChecked={isChecked} handleCheck={handleCheck} />
        </div>
    )
}

export default PermissionItem;