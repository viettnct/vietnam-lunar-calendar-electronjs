import { Container, TextField } from '@material-ui/core';
import React from 'react';
import Form from '../Form';
import Table from '../Table';
import { HeaderTitle } from './styles';
import { connect } from 'react-redux';
import { MyStore } from '../../../models/MyStoreModel';
const Home : React.FC = () => {
    return(
    <Container fixed>
        <HeaderTitle>REDUX + TAILWIND EXAMPLE</HeaderTitle>
        <Form/>
        <Table/>
    </Container>
    );
}

const mapStateToProps = (state: MyStore) => {
    return { data: state.data }
};
export default connect(mapStateToProps)(Home);