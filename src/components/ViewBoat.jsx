import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBoat = () => {
    const [data,changeData]=useState([])
    const fetchData = () =>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/houseboat.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        }
    )
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            {data.map(
                                (value,index)=>{
                                    return(
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 col-xxl-4">

                                <div class="card">
                                    <img src={value.image} class="card-img-top" alt="..."height="300px"width="100px"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">HouseBoat Booking</h5>
                                            
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{value.boatName}</li>
                                            <li class="list-group-item">{value.category}</li>
                                            <li class="list-group-item">{value.bedrooms}</li>
                                            <li class="list-group-item">{value.capacity}</li>
                                            <li class="list-group-item">{value.pricePerNight}</li>
                                            <li class="list-group-item">{value.route}</li>
                                        </ul>
                                        
                                </div>

                            </div>
                                    )
                                }
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBoat