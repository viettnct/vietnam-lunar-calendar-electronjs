import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';
import { IExample } from '../../../models/ExampleModel';
import { connect, useSelector, useDispatch } from 'react-redux';
import { FormStyle } from './styles';
import { addData } from '../../../actions/ExampleAction';
import { MyStore } from '../../../models/MyStoreModel';
import { bindActionCreators } from 'redux';
import '../../../../styles.css';



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
            <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">First Name</span>
                <input id="txtFirstName" className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" type="text" placeholder="First Name" />
            </span>
            <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Last Name</span>
                <input id="txtLastName" className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" type="text" placeholder="Last Name" />
            </span>
            <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Address</span>
                <input id="txtAddress" className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" type="text" placeholder="Address" />
            </span>
            <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">Birth Day</span>
                <input id="txtDate" className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full" type="text" placeholder="Birth Day" />
            </span>
            <div className={classes.buttonSubmit}>
                <button  onClick={() => { onClick() }} className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                    Submit
                </button>
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