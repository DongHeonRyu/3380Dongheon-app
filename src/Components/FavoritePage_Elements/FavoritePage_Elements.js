import React from 'react';
import { Link } from "react-router-dom";
import { Rate } from "antd";
import "./FavoritePage_Elements.css";

function FavoritePage_Elements({ deleteMovie, editMovie, ratedMovie, desc }) {
    return (


        <>

            {
                ratedMovie.map((item) => {
                    return (
                        <tr key={item._id} >

                            <td className="element elementTitle">

                                <Link to={`/movie/${item.movieId}`} >
                                    {item.movieTitle}
                                </Link>
                            </td>

                            <td className="element ipadView">
                                <Link to={`/movie/${item.movieId}`} >
                                    {item.movieTitle.substring(0, 20)}
                                </Link>
                            </td>
                            
                            <td className="element phoneView">
                                <Link to={`/movie/${item.movieId}`} >
                                    {item.movieTitle.substring(0, 5)}
                                </Link>
                            </td>



                            <td className="element" >{item.movieRunTime}</td>

                            <td className="element elementRate">
                                <Rate value={item.movieRate} />

                            </td>
                            <td className="element elementRatePhone">
                                <b>{item.movieRate}</b>
                            </td>

                            <td className="delete">
                                <button className="btn btn-danger" onClick={deleteMovie} id={item.movieId} >
                                    Delete{" "}
                                </button>
                            </td>
                            <td>

                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={editMovie}
                                    id={item.movieId}
                                    defaultValue={item.movieRate}
                                >
                                    <option value="1">1 star ({desc[0]})</option>
                                    <option value="2">2 star ({desc[1]})</option>
                                    <option value="3">3 star ({desc[2]})</option>
                                    <option value="4">4 star ({desc[3]})</option>
                                    <option value="5">5 star ({desc[4]})</option>

                                </select>


                                <select
                                    className="form-select_mobile"
                                    aria-label="Default select example"
                                    onChange={editMovie}
                                    id={item.movieId}
                                    defaultValue={item.movieRate}
                                >
                                    <option value="1">1 </option>
                                    <option value="2">2 </option>
                                    <option value="3">3 </option>
                                    <option value="4">4 </option>
                                    <option value="5">5 </option>

                                </select>



                            </td>
                            <td className="comments">{item.movieComment}</td>
                        </tr>)

                })

            }

        </>
    );
}

export default FavoritePage_Elements;