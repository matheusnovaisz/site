import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});
const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
});

export const metadata: Metadata = {
	title: "Matheus Novais Website",
	description: "Site portfólio de Matheus Novais",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${outfit.variable} ${inter.variable}`}>
			<body className="antialiased">{children}</body>
		</html>
	);
}
