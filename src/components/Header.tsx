export default function Header() {
	return (
		<section className="flex flex-col items-center sm:flex-row">
			<img
				className="max-w-36 opacity-70 rounded-3xl"
				src="bg.jpg"
				alt=""
			/>
			<div className="flex flex-col items-center mt-4 text-4xl font-bold sm:ml-8">
				<h1>Calcule seu IMC</h1>
				<h3 className="mt-3 text-3xl">Cuide de sua saúde!</h3>
			</div>
		</section>
	);
}
