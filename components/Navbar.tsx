import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button"
const Navbar = () => {
	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<Link href="/">
				<Image
					src="/camp-traveller-logo.svg"
					alt="logo"
					width={74}
					height={29}
				/>
			</Link>
			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map((links, index) => (
					<Link
						href={links.href}
						key={links.key + index}
						className="regular-16 text-gary-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
					>
						{links.label}
					</Link>
				))}
			</ul>

			<div className="lg:flexCenter hidden">
				<Button
					type="button"
					title="Login"
					icon="/user.svg"
					variant="btn_dark_green"
				/>
			</div>

                     <Image
                            src='/menu.svg'
                            alt="menu"
                            height={32}
                            width={32}
                            className="inline-block cursor-pointer lg:hidden"
                     />
		</nav>
	);
};

export default Navbar;
