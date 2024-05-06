import { RouteRecord } from "vue-router";
import { RoutesMap } from "./map";

export const routes: RouteRecord[] = [
    {
        path: "/",
        name: "home",
        component: RoutesMap.public.home,
    }
]