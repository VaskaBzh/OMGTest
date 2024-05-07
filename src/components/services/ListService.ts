import { ListContract } from "../contracts";
import { RandomizeTrait } from "@/traits";
import { ListModel } from "../models";
import { ListType } from "@/types";
import { ListTypesEnum } from "@/enums";
import { Ref, ref } from "vue";

export class ListService<T> implements ListContract<T> {
    private listModel: ListType<T>;
    public isComplete: Ref<boolean> = ref(false);

    private constructor(
        listModel: ListType<T>,
        type: string
    ) {
        this.listModel = listModel;

        this.fillList(type)
    }

    public get list(): T[] {
        return this.listModel.values;
    }

    public get length(): number {
        return this.listModel.listSize;
    }

    private fillList(type: string): this {
        if (!this.checkCurrentType(type)) {
            return this;
        }

        const minNumberListValue: number = 10 ** (this.length - 1);
        const maxNumberListValue: number = (10 ** this.length) - 1;

        const randomJoinedSimpleNumbers: number = RandomizeTrait.getRandomValue(minNumberListValue, maxNumberListValue);

        this.listModel.values = String(randomJoinedSimpleNumbers).split('') as T[];

        return this;
    }

    private async checkCurrentType(type: string): Promise<boolean> {
        if (type === ListTypesEnum.ListModel) {
            const promises: Promise<string[]>[] = [];

            for (let i: number = 0; i < this.length; i++) {
                promises.push(
                    new Promise((resolve) => {
                        const newList: ListContract<string> = ListService.initList<string>(10, 20, ListTypesEnum.number);
                        resolve(newList.list);
                    })
                );
            }

            this.listModel.values = await Promise.all(await promises) as T[];

            this.isComplete.value = true;

            return false;
        }

        return true;
    }

    public static initList<L>(
        minListSize: number = 100,
        maxListSize: number = 200,
        type: string = "ListModel",
        listModel: typeof ListModel = ListModel
    ): ListContract<L> {
        const ownListModel: ListType<L> = new listModel();

        ownListModel.listSize = RandomizeTrait.getRandomValue(minListSize, maxListSize);

        return new ListService<L>(
            ownListModel,
            type,
        );
    }
}