import { Ref } from "vue";

export class LazyLoadTrait {
    public static loadList(
        dynamicalListLength: Ref<number>,
        listLength: number,
        timeout: number = 0,
        step: number = 5,
        isLoaded: boolean = false,
    ): void {
        if (isLoaded) {
            return;
        }

        const startIndex: number = dynamicalListLength.value;
        const endIndex: number = Math.min(startIndex + step, listLength - 1);

        while (dynamicalListLength.value < endIndex) {
            dynamicalListLength.value++
        }

        if (dynamicalListLength.value === listLength - 1) {
            isLoaded = true;
        }

        if (timeout) {
            setTimeout(() => {
                this.loadList(
                    dynamicalListLength,
                    listLength,
                    timeout,
                    step,
                    isLoaded
                )
            }, timeout)

            return;
        }

        this.loadList(dynamicalListLength, listLength, step);
    }
}