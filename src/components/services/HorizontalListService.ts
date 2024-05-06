import { ListWithValueType } from "@/types";
import { ListWithValueModel } from "../models";
import { HorizontalListContract } from "../contracts";
import { RandomizeTrait } from "@/traits";
import { BaseListService } from "./base/BaseListService";

export class HorizontalListService extends BaseListService implements HorizontalListContract {
    private listModel: ListWithValueType;

    private constructor(
        listModel: ListWithValueType
    ) {
        super(listModel);
    }

    public get list(): number[] {
        return Array.from(this.listModel.listSize);
    }

    protected initVerticalList(
        minListSize: number = 10,
        maxListSize: number = 20,
        listModel: typeof ListWithValueModel = ListWithValueModel
    ): HorizontalListContract {
        const ownListModel: ListWithValueType = new listModel();

        ownListModel.listSize = RandomizeTrait.getRandomValue(minListSize, maxListSize)

        return new HorizontalListService(
            ownListModel
        )
    }
}