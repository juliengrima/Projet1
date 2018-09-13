import React from 'react';
import { MDBDataTable } from 'mdbreact';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const DatatablePage = () => {


    const data = require('../restaurants')
    const dataStr = JSON.stringify(data);
    const dataToStr = JSON.parse(dataStr)
    console.log(JSON.parse(dataStr))


    return (

            <MDBDataTable
                striped
                bordered
                small
                data={dataToStr}
            />

    );
}

export default DatatablePage;