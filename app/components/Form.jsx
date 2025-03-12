"use client";

import React from "react";

export default function Form() {
	if (typeof window !== 'undefined' && !localStorage.getItem('count')) {
		localStorage.setItem('count', 0);
	}

	async function onSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
        const data = {
            name: formData.get('product-name'),
            kcal: formData.get('kcal'),
            fat: formData.get('fat'),
            saturatedFat: formData.get('saturated-fat'),
            carbs: formData.get('carbs'),
            protein: formData.get('protein'),
        }

		const nutrition = JSON.parse(localStorage.getItem('nutrition')) || [];
		nutrition.push(data);
		localStorage.setItem('nutrition', JSON.stringify(nutrition));

        event.target.reset();
	}

	return (
		<form onSubmit={onSubmit} className="w-full flex gap-5 p-8 bg-[#0f0f0f] border-b border-[#1f1f1f] rounded-lg">
			<div className="flex -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						htmlFor="product-name"
					>
						Product Name
					</label>
					<input
						className="appearance-none block w-full text-black bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="product-name"
                        name="product-name"
						type="text"
						placeholder="Enter product name"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						htmlFor="grams"
					>
						Grams
					</label>
					<p className="text-white text-2xl">1</p>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						htmlFor="kcal"
					>
						Kcal
					</label>
					<input
						className="appearance-none block w-full text-black bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="kcal"
                        name="kcal"
						type="number"
						placeholder="Enter kcal"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						htmlFor="fat"
					>
						Fat
					</label>
					<input
						className="appearance-none block w-full text-black bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="fat"
                        name="fat"
						type="number"
						placeholder="Enter fat"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						htmlFor="saturated-fat"
					>
						Saturated Fat
					</label>
					<input
						className="appearance-none block w-full text-black bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="saturated-fat"
                        name="saturated-fat"
						type="number"
						placeholder="Enter saturated fat"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						htmlFor="carbs"
					>
						Carbs
					</label>
					<input
						className="appearance-none block w-full text-black bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="carbs"
                        name="carbs"
						type="number"
						placeholder="Enter carbs"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						htmlFor="protein"
					>
						Protein
					</label>
					<input
						className="appearance-none block w-full text-black bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="protein"
                        name="protein"
						type="number"
						placeholder="Enter protein"
					/>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
