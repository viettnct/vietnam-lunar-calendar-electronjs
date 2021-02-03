import {
    IconButton,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import React from 'react';
import { MyStore } from '../../../models/MyStoreModel';
import { connect, useSelector, useDispatch } from 'react-redux';
import { IExample } from '../../../models/ExampleModel';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from './styles';
import { deleteData } from '../../../actions/ExampleAction';
import '../../../../styles.css';

const ExampleTable: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { data } = useSelector<MyStore, MyStore['data']>(
        (state: any) => state.exampleReducer
    )
    const onDelete = (element: IExample) => {
        dispatch(deleteData(element.id))
    }
    return (
        <div className="text-gray-900 bg-gray-200">
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Birth</th>
                            <th className="text-left p-3 px-5">Address</th>
                            <th className="text-left p-3 px-5">Delete</th>
                            <th />
                        </tr>
                        {data.map((dt: IExample) => (
                            <tr className="border-b hover:bg-orange-100">
                                <td className="p-3 px-5 text-left">{`${dt.lastName} ${dt.firstName}`}</td>
                                <td className="p-3 px-5">{dt.birth}</td>
                                <td className="p-3 px-5">{dt.address}</td>
                                <td className="p-3 px-5 flex justify-start">
                                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => { onDelete(dt) }} >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default connect()(ExampleTable);