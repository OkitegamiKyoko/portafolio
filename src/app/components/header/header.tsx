import Image from "next/image";
import Link from "next/link";
import { JSX } from "react"
import school_icon from "@/app/icons/school_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"

function Header(): JSX.Element {
    return (
            <ul className="menu">
                <li className="option-menu">
                    < Image
                        className="redound"
                        src="/me.webp"
                        alt="ITT logo"
                        width={35}
                        height={35}
                        priority
                    />
                </li>
                <li className="option-menu">
                    < Image
                        className="redound"
                        src={school_icon}
                        alt="ITT logo"
                        width={35}
                        height={35}
                        priority
                    />
                    School
                </li>
                <li className="option-menu">
                    < Image
                        className="redound"
                        src="/me.webp"
                        alt="ITT logo"
                        width={35}
                        height={35}
                        priority
                    />
                    Skills
                </li>
            </ul>
    )
}
export default Header;