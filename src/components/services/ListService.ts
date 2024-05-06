import { ListContract } from "../contracts";
import { RandomizeTrait } from "@/traits";

export class ListService<T> implements ListContract {
    private listModel: T;

    private constructor(
        listModel: T
    ) {
        this.listModel = listModel;
    }

    public get list(): undefined[] | number[] {
        return Array.from(this.listModel.listSize);
    }

    protected initVerticalList<L>(
        minListSize: number = 100,
        maxListSize: number = 200,
        listType: string
    ): ListContract {
        const ownListModel: T = new listModel();

        ownListModel.listSize = RandomizeTrait.getRandomValue(minListSize, maxListSize);

        return new ListService(
            ownListModel
        )<L>;
    }
}