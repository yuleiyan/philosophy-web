import { RoutesPaths } from '@/routes/routes-paths';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex flex-col gap-2 text-white">
            ERROR 404: Ruta no encontrada
            <Link to={RoutesPaths.HOME.path}>Volver al Inicio</Link>
        </div>
    );
}