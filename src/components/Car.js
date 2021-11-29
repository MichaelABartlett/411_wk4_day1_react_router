import React from 'react'
import cars from '../cars.json'
import { useParams } from "react-router-dom";
import './car.css'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    let {id} = useParams();

    const findCar = cars.find((car) => car.id === Number(id))

    console.log(findCar)
    return (
        <div class='theList'>
            <h1>{findCar.Name}</h1>
            <span>{findCar.Name.toUpperCase()}</span>
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
        </div>                    
    )
}

export default Car