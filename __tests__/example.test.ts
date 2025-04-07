import { calculateSum } from '@/utils/example'

describe('calculateSum Utility Function', () => {
    test('adds two positive numbers correctly', () => {
        expect(calculateSum(2, 3)).toBe(5)
    })

    test('adds negative numbers correctly', () => {
        expect(calculateSum(-2, -3)).toBe(-5)
    })

    test('adds mixed positive and negative numbers', () => {
        expect(calculateSum(5, -3)).toBe(2)
    })

    test('adds zero correctly', () => {
        expect(calculateSum(0, 5)).toBe(5)
    })
})
