import React, {useState, useEffect} from "react";
import { Bus } from '../interfaces/Bus';
import { fetchBusById } from "../services/api";

interface BusTableProps {
  buses: Bus[];
}

const BusTable: React.FC<BusTableProps> = ({ buses }) => {
    const [error, setError] = useState<string | null>(null);
    
    const handleBusDetails = (bus: Bus) => {
      alert(`Detalles del Bus:\nNúmero: ${bus?.numeroBus}\nMarca: ${bus?.marca.nombre}`);
    };

    const loadBus = async (id: number) => {
        try{
            const data = await fetchBusById(id);

            if (data) {
                handleBusDetails(data);
            }

        } catch (err) {
            setError('Error al obtener la información del bus.');
            //console.error(err);
        }
    };

    useEffect(() => {
        if (error) {
          alert(error);
        }
    }, [error]);

    return (
      <table>
          <thead>
              <tr>
                  <th>Número de Bus</th>
                  <th>Placa</th>
                  <th>Marca</th>
                  <th>Activo</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
              {buses.map((bus) => (
                  <tr key={bus.id}>
                      <td>{bus.numeroBus}</td>
                      <td>{bus.placa}</td>
                      <td>{bus.marca.nombre}</td>
                      <td>{bus.activo ? 'Sí' : 'No'}</td>
                      <td>
                          <button onClick={() => loadBus(bus.id)}>Ver Detalles</button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
    );
};

export default BusTable;
