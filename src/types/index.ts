import { ListType } from "./ListType";
import { ListWithValueType } from "./ListWithValueType";

export type UnionListType = ListType | ListWithValueType;

export {
    ListType,
    ListWithValueType
}