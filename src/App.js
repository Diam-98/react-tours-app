import React, {useState, useEffect} from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";

function App() {

    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchData = async () => {

        setLoading(true);

        try{
            const response = await fetch(url);
            const toursData = await response.json();
            setLoading(false);
            setTours(toursData);
        }catch (error){
            setLoading(false);
            console.log(error)
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    if (loading){
        return (
            <main>
                <Loading/>
            </main>
        );
    }

    if (tours.length === 0){
        return (
            <div className="tour-box">
                <h4>La liste est vide</h4>
                <button onClick={fetchData}>Rafraichir</button>
            </div>
        );
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour}/>
        </main>
    );
}

export default App;
