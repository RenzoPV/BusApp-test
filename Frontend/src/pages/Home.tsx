import React, {useState, useEffect} from "react";
import { fetchBuses } from "../services/api";
import { Bus } from "../interfaces/Bus";
import BusTable from "../components/BusTable";

const Home:React.FC = () => {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBuses = async () => {
            try{
                const data = await fetchBuses();
                setBuses(data);
            } catch (err) {
                setError('Error al cargar los buses.');
                //console.error(err);
            }
        };
        loadBuses();
    }, []);

    return (
        <div className="Home">
            <h1>Lista de buses</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <BusTable buses={buses}/>
        </div>
    );
};

export default Home;