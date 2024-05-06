export class RandomizeTrait {
    protected getRandomValue(minValue: number = 10, maxValue: number = 20): number {
        const randomValueByMax: number = Math.floor(Math.random() * maxValue);

        if (randomValueByMax < minValue) {
            return minValue;
        }

        return randomValueByMax;
    }
}