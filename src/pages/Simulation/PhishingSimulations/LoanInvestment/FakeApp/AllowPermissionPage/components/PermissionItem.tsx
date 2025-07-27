import { Switch } from "../../../../../../../components/ui/switch";
import PermissionSwitch from "./PermissionSwitch";

interface PermissionItemProps {
    icon?: string;
    title: string;
    description: string;
    isToggled: boolean;
}

const PermissionItem = ({ icon = "123", title, description, isToggled }: PermissionItemProps) => {

    return (
        <div className="flex">
            <img src={icon} alt="아이콘" className="mr-11" />
            <div className="flex flex-col">
                <span>
                    {title}
                </span>
                <span>
                    {description}
                </span>
            </div>

            <PermissionSwitch/>
        </div>
    )
}

export default PermissionItem;