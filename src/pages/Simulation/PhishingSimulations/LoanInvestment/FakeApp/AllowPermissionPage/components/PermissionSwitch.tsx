import { Switch } from "../../../../../../../components/ui/switch";

interface PermissionSwitchProps{
    isChecked:boolean;
    handleCheck:()=>void;
}

const PermissionSwitch = ({isChecked, handleCheck}: PermissionSwitchProps) =>{
    return(
        <Switch checked={isChecked} onCheckedChange={handleCheck} className="w-[38px] h-[18px] shadow-[inset_0.5px_0.5px_1px_0px_rgba(0,0,0,0.16)] outline-0 border-0
        data-[state=checked]:bg-[#D5E3FF] data-[state-unchecked]:bg-[#EDEDED]"
        thumbClassName="size-[18px] data-[state=checked]:bg-[#437EFC] data-[state=unchecked]:bg-[#C9CDD7]
        data-[state=checked]:translate-x-[20px] " />
    )
}

export default PermissionSwitch;