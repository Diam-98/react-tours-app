import React from "react";
import Tour from "./Tour";

const Tours = ({tours, removeTour}) => {
    return (
        <section className="box">
            <h1>La liste des Tours</h1>

            {
                tours.map((tour) => {
                    return (
                        <div className="tour-box">
                            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                        </div>
                    );
                })
            }

        </section>
    );
}

export default Tours;