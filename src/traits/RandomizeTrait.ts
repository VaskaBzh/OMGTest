export class RandomizeTrait {
    public static getRandomValue(minValue: number = 10, maxValue: number = 20): number {
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
}