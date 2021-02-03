import { Example } from "../constant/ExampleContant"
import { MyStore } from "../models/MyStoreModel";
import { ExampleTypes } from "../types/ExampleType"

const initialState = {
    data: [
        {
            id: 1611992816166,
            firstName: "Tran",
            lastName: "Long",
            address: "Can Tho",
            birth: "20-06-1996",
        },
        // {
        //     id: 1611992832094,
        //     firstName: "Bui",
        //     lastName: "Viet",
        //     address: "Can Tho",
        //     birth: "01-01-1994",
        // },
    ]
};

export const exampleReducer = (state: MyStore = initialState, action: ExampleTypes) => {
    switch (action.type) {
        case Example.LOAD_DATA:
            return {
                ...state.data
            }
        case Example.ADD_DATA:
            return {
                ...state,
                data: [...state.data, action.data]
            }
        case Example.DELETE_DATA:
            return {
                ...state,
                data: state.data.filter((x: any) => x.id !== action.id)
            }
        default:
            return state
    }
}
