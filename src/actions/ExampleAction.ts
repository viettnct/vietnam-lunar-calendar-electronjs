import { Example } from "../constant/ExampleContant";
import { IExample } from "../models/ExampleModel";
import { ExampleTypes } from "../types/ExampleType";

// TypeScript infers that this function is returning load data
export function loadData(): ExampleTypes {
    return {
        type: Example.LOAD_DATA,
    }
}

// TypeScript infers that this function is returning add data
export function addData(example: IExample): ExampleTypes {
    return {
        type: Example.ADD_DATA,
        data: example
    }
}

// TypeScript infers that this function is returning delete data
export function deleteData(id: number): ExampleTypes {
    return {
        type: Example.DELETE_DATA,
        id
    }
}
