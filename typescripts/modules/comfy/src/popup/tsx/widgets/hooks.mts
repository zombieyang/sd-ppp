import { useMemo } from "react";
import { computeUIWeightCSS } from "../../../../../../src/common/tsx/util";

export function useUIWeightCSS(uiWeight: number) {
    return useMemo(() => computeUIWeightCSS(uiWeight), [uiWeight]);
}