import { parseAsString, useQueryState } from "nuqs";

export const useSearchParams = () => {
    return useQueryState(
        "search",
        parseAsString.withDefault("").withOptions({ clearOnDefault: true })
    );
};

// export function useSearchParams(){
//     return useQueryState(
//         "search",
//         parseAsString.withDefault("").withOptions({ clearOnDefault: true })
//     );
// }