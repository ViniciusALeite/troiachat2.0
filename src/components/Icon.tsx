import * as bsIcons from "react-icons/bs";
import * as aiIcons from "react-icons/ai";
import * as biIcons from "react-icons/bi";
import * as giIcons from "react-icons/gi";
import * as faIcons from "react-icons/fa";
import * as fa6Icons from "react-icons/fa6";
import * as tbIcons from "react-icons/tb";
import * as fiIcons from "react-icons/fi";
import * as imIcons from "react-icons/im";
import * as ioIcons from "react-icons/io";
import * as io5Icons from "react-icons/io5";
import * as riIcons from "react-icons/ri";
import * as hiIcons from "react-icons/hi";
import * as goIcons from "react-icons/go";
import * as mdIcons from "react-icons/md";
import * as liaIcons from "react-icons/lia";
import * as luIcons from "react-icons/lu";
import * as siIcons from "react-icons/si";
import * as slIcons from "react-icons/sl";
import * as piIcons from "react-icons/pi";
import * as hi2Icons from "react-icons/hi2";
import * as tfiIcons from "react-icons/tfi";
import * as grIcons from "react-icons/gr";
import * as fcIcons from "react-icons/fc";
import * as tiIcons from "react-icons/ti";
import * as rxIcons from "react-icons/rx";
import * as vscIcons from "react-icons/vsc";
import * as cicIcons from "react-icons/ci";
import { IconType } from "react-icons";
interface IconProps {
  icon: string;
  className: string;
}

const Icon = ({ icon, className }: IconProps) => {
  const iconsMap = new Map();
  iconsMap.set("Bs", bsIcons);
  iconsMap.set("Ai", aiIcons);
  iconsMap.set("Bi", biIcons);
  iconsMap.set("Gi", giIcons);
  iconsMap.set("Fa", faIcons);
  iconsMap.set("Tb", tbIcons);
  iconsMap.set("Fi", fiIcons);
  iconsMap.set("Im", imIcons);
  iconsMap.set("Io", ioIcons);
  iconsMap.set("Io5", io5Icons);
  iconsMap.set("Ri", riIcons);
  iconsMap.set("Hi", hiIcons);
  iconsMap.set("Go", goIcons);
  iconsMap.set("Md", mdIcons);
  iconsMap.set("Lia", liaIcons);
  iconsMap.set("Lu", luIcons);
  iconsMap.set("Si", siIcons);
  iconsMap.set("Sl", slIcons);
  iconsMap.set("Hi2", hi2Icons);
  iconsMap.set("Tfi", tfiIcons);
  iconsMap.set("Fa6", fa6Icons);
  iconsMap.set("Gr", grIcons);
  iconsMap.set("Pi", piIcons);
  iconsMap.set("Fc", fcIcons);
  iconsMap.set("Ti", tiIcons);
  iconsMap.set("Rx", rxIcons);
  iconsMap.set("Vsc", vscIcons);
  iconsMap.set("Ci", cicIcons);
  
  if(!icon || icon.indexOf(" ") === -1) return null;

  const [iconFamily, iconFile] = icon.split(" ");
  const icons: any = iconsMap.get(iconFamily);
  const TheIcon: IconType = icons[iconFile] || faIcons.FaHome;
  return <TheIcon className={className} />;
};

export default Icon;

// Usage
{/* <Icon icon="Fi FiUser" className="h-4 w-4 text-red-500 drop-shadow" /> */}
