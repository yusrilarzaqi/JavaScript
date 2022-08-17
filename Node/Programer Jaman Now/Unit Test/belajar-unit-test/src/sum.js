/*
 * @param {number} first
 * @param {number} second
 * @return {number} first + second
 */
export const sum = (first, second) => first + second;

/*
 * @param {array} first
 * @return {number} first += first
 */
export const sumAll = (numbers) => {
	return numbers.reduce((sum, numCurrect) => (sum += numCurrect));
};
