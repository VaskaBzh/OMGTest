import { Ref } from "vue";

export interface ListContract<T> {
    isComplete: Ref<boolean>;
    get list(): T[];
    get length(): number;
}