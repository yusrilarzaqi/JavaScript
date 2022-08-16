beforeEach(() => console.info('Before Each outer'));
afterEach(() => console.info('After Each outer'));

describe('Inner Scope 1', () => {
	beforeEach(() => console.info('Before Each inner 1'));
	afterEach(() => console.info('After Each inner 1'));
	describe('Inner innner Scope 2', () => {
		beforeEach(() => console.info('Before Each inner inner 1'));
		afterEach(() => console.info('After Each inner inner 1'));
		it('test 1', () => console.info('test 1'));
		it('test 2', () => console.info('test 2'));
	});
});
