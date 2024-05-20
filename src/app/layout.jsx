import { Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Tanishk Gupta | Portfolio",
	description: "This Portfolio website is created using Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<script
					src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
					type="module"
				></script>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
