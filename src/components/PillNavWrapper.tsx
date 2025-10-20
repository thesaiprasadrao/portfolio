"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PillNav from './PillNav';

export default function PillNavWrapper() {
	const items = [
			{ label: 'Home', href: '/' },
			{ label: 'Projects', href: '/projects' },
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: '/contact' },
		];

	const pathname = usePathname();
	const [activeHref, setActiveHref] = useState(pathname);

	useEffect(() => {
		setActiveHref(pathname);
	}, [pathname]);

	return (
			<PillNav
			// logo="/file.svg"
			items={items}
			activeHref={activeHref}
			baseColor="#ffffff"
			pillColor="#000000"
			hoveredPillTextColor="#000000"
					pillTextColor="#ffffff"
				onMobileMenuClick={() => {}}
		/>
	);
}
