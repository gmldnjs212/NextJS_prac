"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    // "use client가 필요함, client에서만 작동"
    const path = usePathname(); 
    console.log(path);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🚩" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🚩" : ""}
                </li>
            </ul>
        </nav>
    )
}
