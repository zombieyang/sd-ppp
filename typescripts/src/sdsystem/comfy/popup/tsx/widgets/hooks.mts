import { useMemo } from "react";
import { computeUIWeightCSS } from "../../../../../common/tsx/util.mts";

export function useUIWeightCSS(uiWeight: number) {
    return useMemo(() => computeUIWeightCSS(uiWeight), [uiWeight]);
}