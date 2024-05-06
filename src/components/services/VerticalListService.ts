import { ListContract } from "../contracts";
import { RandomizeTrait } from "@/traits";
import { ListModel } from "../models";
import { ListType } from "@/types";
import { BaseListService } from "./base/BaseListService";

export class VerticalListService extends BaseListService implements ListContract {
    private listModel: ListType;

    private constructor(
        listModel: ListType
    ) {
        super(listModel);
    }

    public get list(): undefined[] {
        return Array.from(this.listModel.listSize);
    }

    protected initVerticalList(
        minListSize: number = 100,
        maxListSize: number = 200,
        listModel: typeof ListModel = ListModel
    ): ListContract {
        const ownListModel: ListType = new listModel();

        ownListModel.listSize = RandomizeTrait.getRandomValue(minListSize, maxListSize)

        return new VerticalListService(
            ownListModel
        )
    }
}