import imcTable from "./imcTable";

export default function ImcTableComponent() {
	return (
		<div className="w-5/6 mb-6">
			{imcTable.map((item, index) => (
				<div
					key={item.imc}
					className={`flex text-md sm:text-lg justify-center items-center w-full ${item.color} h-12`}>
					{index === 0 ? (
						<div className="flex items-center justify-center w-24 gap-2">
							<span className=""></span>
						</div>
					) : (
						<div className="flex items-center justify-center w-24 gap-2">
							<span className="w-12 mr-2 text-right">{imcTable[index - 1].imc}</span>
							<span className="">&#60;</span>
						</div>
					)}

					<span className="w-64 text-center">
						<p className="font">{item.description}</p>
					</span>

					{index === 0 ? (
						<div className="flex items-center justify-center w-24 gap-2">
							<span className="">&#60;</span>
							<span className="w-12 ml-2 text-left">{imcTable[index].imc}</span>
						</div>
					) : index === imcTable.length - 1 ? (
						<div className="flex items-center justify-center w-24 gap-2">
							<span className=""></span>
						</div>
					) : (
						<div className="flex items-center justify-center w-24 gap-2">
							<span className="">&#60;</span>
							<span className="w-12 ml-2 text-left">{item.imc}</span>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
