import { info } from 'console';

beforeAll(() => info('Before All outer'));
afterAll(() => info('After All outer'));
beforeEach(() => info('Before Each outer'));
afterEach(() => info('After Each outer'));
test('test outer 1', () => info('Test Outer 1'));
test('test outer 2', () => info('Test Outer 2'));
describe('inner scope 1', () => {
	beforeAll(() => info('Inner Before All 1'));
	afterAll(() => info('Inner After All 1'));
	beforeEach(() => info('Inner Before Each 1'));
	afterEach(() => info('Inner After Each 1'));
	test('test inner 1', () => info('Test inner 1'));
});

describe('inner scope 2', () => {
	beforeAll(() => info('Inner Before All 2'));
	afterAll(() => info('Inner After All 2'));
	beforeEach(() => info('Inner Before Each 2'));
	afterEach(() => info('Inner After Each 2'));
	test('test inner 2', () => info('Test inner 2'));
});
