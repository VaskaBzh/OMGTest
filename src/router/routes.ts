import { RouteRecord } from "vue-router";
import { RoutesMap } from "./map";

export const routes: RouteRecord[] = [
    {
        path: "/",
        name: "home",
        // @ts-ignore
        component: RoutesMap.public["home"],
    }
]