"use client";
import PillNav from './PillNav';

export default function PillNavWrapper() {
	const items = [
		{ label: 'Home', href: '/' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: '#contact' },
	];

	return (
			<PillNav
			// logo="/file.svg"
			items={items}
			activeHref={typeof window !== 'undefined' ? window.location.pathname : '/'}
			baseColor="#ffffff"
			pillColor="#000000"
			hoveredPillTextColor="#000000"
					pillTextColor="#ffffff"
				onMobileMenuClick={() => {}}
		/>
	);
}
