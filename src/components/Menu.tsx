import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {Users} from "lucide-react";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: <Image src="/home.png" alt="Home" width={20} height={20} />,
                label: "Home",
                href: "/admin",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <Users size={20} />,
                label: "Lidlar",
                href: "/list/lid",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <Image src="/teacher.png" alt="Teachers" width={20} height={20} />,
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: <Image src="/student.png" alt="Students" width={20} height={20} />,
                label: "Students",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: <Image src="/parent.png" alt="Parents" width={20} height={20} />,
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: <Image src="/class.png" alt="Classes" width={20} height={20} />,
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: <Image src="/lesson.png" alt="Lessons" width={20} height={20} />,
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },

        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: <Image src="/profile.png" alt="Profile" width={20} height={20} />,
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <Image src="/setting.png" alt="Settings" width={20} height={20} />,
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <Image src="/logout.png" alt="Logout" width={20} height={20} />,
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

const Menu = () => {
    return (
        <div className="mt-4 text-sm">
            {menuItems.map((section) => (
                <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>
                    {section.items.map((item) => {
                        if (item.visible.includes(role)) {
                            return (
                                <Link
                                    href={item.href}
                                    key={item.label}
                                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                                    aria-label={item.label}
                                >
                                    {item.icon}
                                    <span className="hidden lg:block">{item.label}</span>
                                </Link>
                            );
                        }
                    })}
                </div>
            ))}
        </div>
    );
};

export default Menu;

