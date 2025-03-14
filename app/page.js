"use client";

import Form from "./components/Form";
import NutritionValues from "./components/NutritionValues";

export default function Home() {

	let nutritionObject = null;
	
	if (typeof window !== "undefined") {
		const nutrition = localStorage.getItem("nutrition");
		nutritionObject = JSON.parse(nutrition);
	}

	return (
		<div className="">
			<Form />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
				<div className="text-lg font-bold">
					<div className="grid grid-cols-7 gap-5">
						<p className="font-bold mb-5">Product name</p>
						<p className="font-bold mb-5">Gram</p>
						<p className="font-bold mb-5">KCal</p>
						<p className="font-bold mb-5">Fat</p>
						<p className="font-bold mb-5">Saturated fat</p>
						<p className="font-bold mb-5">Carbs</p>
						<p className="font-bold mb-5">Protein</p>
					</div>
				</div>

				{nutritionObject &&
					nutritionObject.map((item, index) => (
						<NutritionValues key={index} item={item} index={index} />
					))}
			</div>
		</div>
	);
}
