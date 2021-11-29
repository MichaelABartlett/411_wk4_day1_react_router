import React from 'react'
import cars from '../cars.json'
import { useParams } from "react-router-dom";
import './car.css'

import { Card, CardContent, CardActions, Divider } from '@material-ui/core'

const Car = (props) => {
    let {id} = useParams();

    const findCar = cars.find((car) => car.id === Number(id))

    console.log(findCar)
    return (
        <div class='theList'>
            <Card >
            <CardContent className="text-gray">
            <h1>{findCar.Name.toUpperCase()}</h1>
                            <ul>
                                <li>Acceleration: {findCar["Acceleration"]}</li>  
                                <li>Cylinders: {findCar["Cylinders"]}</li>
                                <li>Displacement: {findCar["Displacement"]}</li>
                                <li>Horsepower: {findCar["Horsepower"]}</li>
                                <li>Miles_per_Gallon: {findCar["Miles_per_Gallon"]}</li>
                                <li>Origin: {findCar["Origin"]}</li>
                                <li>Weight_in_lbs: {findCar["Weight_in_lbs"]}</li>
                                <li>Year: {findCar["Year"]}</li>
                            </ul>
                </CardContent>
            </Card>
        </div>                    
    )
}

export default Car
