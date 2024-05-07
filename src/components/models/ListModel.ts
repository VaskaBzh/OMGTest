import { ListType } from "@/types";

export class ListModel<T> implements ListType<T> {
    public listSize!: number;
    public values: T[] = [];
}