import React from "react";

export default function NutritionValues({ item, index }) {

    const [grams, setGrams] = React.useState(1);

	return (
		<div className="text-lg mb-5" key={index}>
			<div className="grid grid-cols-7 gap-5">
				<p className="card-text">{item.name}</p>
				<input
                    onChange={e => setGrams(e.target.value)}
                    value={grams}
					type="number"
					className="bg-white p-1 rounded text-black"
					name="grams"
				/>

				<p className="card-text">{item.kcal * grams}</p>
				<p className="card-text">{item.fat * grams}</p>
				<p className="card-text">{item.saturatedFat * grams}</p>
				<p className="card-text">{item.carbs * grams}</p>
				<p className="card-text">{item.protein * grams}</p>
			</div>
		</div>
	);
}
