import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';
import { IExample } from '../../../models/ExampleModel';
import { connect, useSelector, useDispatch } from 'react-redux';
import { FormStyle } from './styles';
import { addData } from '../../../actions/ExampleAction';
import { MyStore } from '../../../models/MyStoreModel';
import { bindActionCreators } from 'redux';




const Form: React.FC = () => {
    const classes = FormStyle();
    const dispatch = useDispatch();
    const onClick = () => {
    
        const data: IExample = {
            id: new Date().getTime(),
            firstName: txtFirstName.value,
            lastName: txtLastName.value,
            address: txtAddress.value,
            birth: txtDate.value
        }
        
        dispatch(addData(data));
        clearValue();
    };

    const clearValue = () => {
        txtFirstName.value = '';
        txtLastName.value = '';
        txtAddress.value = '';
        txtDate.value = '1990-05-24';
    }
    return (
        <form>
            <div className={classes.textInput}>
                <TextField id="txtFirstName" label="First Name" variant="outlined" />
            </div>
            <div className={classes.textInput}>
                <TextField id="txtLastName" label="Last name" variant="outlined" />
            </div>
            <div className={classes.textInput}>
                <TextField id="txtAddress" label="Address" variant="outlined" />
            </div>
            <div className={classes.textInput}>
                <TextField
                    id="txtDate"
                    label="Birthday"
                    type="date"
                    defaultValue="1990-05-24"
                    className="Birthday"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div className={classes.buttonSubmit}>
                <Button variant="contained" color="primary"
                    onClick={() => { onClick() }}>
                    Submit
            </Button>
            </div>
        </form>
    );
}

const mapStateToProps = (state: MyStore) => {
    return { data: state.data }
};

function mapDispatchToProps(dispatch: any) {
    return { actions: bindActionCreators({ addData }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);