export function arraySorting(data) {
	if(!data) return "";
	const vals = data.split(",").map(Number);
	vals.sort((a, b) => a - b);
	return vals.join(",");
}
export function arrayFiltering(data) {
	return data.filter(num => num <= 100);
}
export function arrayPushing(array1, array2) {
	const result = [];
	for(let i = 0; i < 5; ++i) {
		result.push(array1[i]);
		result.push(array2[i]);
	}
	return result;
}
