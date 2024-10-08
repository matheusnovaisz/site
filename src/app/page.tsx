import Experiences from "@/components/home/Experiences";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-12 lg:p-24">
			<div>
				<h2 className="text-6xl ">Olá, eu sou</h2>
				<h1 className="text-8xl">Matheus Novais</h1>
			</div>
			<Experiences />
		</main>
	);
}
