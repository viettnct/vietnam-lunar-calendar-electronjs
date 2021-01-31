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
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Birth</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((dt: IExample) => (
                        <TableRow key={dt.id}>
                            <TableCell >
                                {`${dt.lastName} ${dt.firstName}`}
                            </TableCell>
                            <TableCell align="center">{dt.birth}</TableCell>
                            <TableCell>{dt.address}</TableCell>
                            <TableCell>
                                <IconButton aria-label="delete" 
                                onClick={() => { onDelete(dt) }}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default connect()(ExampleTable);