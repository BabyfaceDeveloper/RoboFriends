import { CHANGE_SEARCH_FIELD } from "./constants";

export const setSearchfield = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}