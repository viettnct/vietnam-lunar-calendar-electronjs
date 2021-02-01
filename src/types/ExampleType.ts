import { Example } from "../constant/ExampleContant";
import { IExample } from "../models/ExampleModel";

interface ILoadDataAction {
    type: typeof Example.LOAD_DATA;
}

interface IAddDataAction {
    type: typeof Example.ADD_DATA;
    data: IExample;
}

interface IDeleteDataAction {
    type: typeof Example.DELETE_DATA;
    data: number;
}

export type ExampleTypes = ILoadDataAction | IAddDataAction | IDeleteDataAction;