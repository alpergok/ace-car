import React from 'react'
import Nav from '../common/Nav';
import { Link, useRouteMatch } from 'react-router-dom';
function CreateTripPage() {
    let url = useRouteMatch();
    return (
        <div>
            <Link to={`${url}/departure`}>
                <h1 className="header"> <strong> Yolculuk ilanı vermen AceCar ile çok kolay. </strong></h1>
            </Link>

        </div>
    )
}

export default CreateTripPage;