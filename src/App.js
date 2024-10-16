import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Usuarios from "./views/Mantenimientos/Usuarios";
import Perfiles from "./views/Mantenimientos/Perfiles";
import Tiempojob from "./views/Mantenimientos/Tiempojob";
import Cursos from "./views/Mantenimientos/Cursos";
import Paralelos from "./views/Mantenimientos/Paralelos";
import PeriodoElectivo from "./views/Mantenimientos/PeriodoElectivo";
import Materias from "./views/Mantenimientos/Materias";
import EducacionGlobal from "./views/Mantenimientos/EducacionGlobal";
import TitulosAcademicos from "./views/Mantenimientos/TitulosAcademicos";
import Horarios from "./views/Mantenimientos/Horarios";
import Calendario from "./views/Mantenimientos/Calendario";
import Carrera from "./views/Mantenimientos/Carrera";
import Jornada from "./views/Mantenimientos/Jornada";
import NewEducacionGlobal from "./views/Formularios/NewEducacionGlobal";
import Aside from "./components/Aside";
import PlanificacionAcademica from "./views/Planificaciones/PlanificacionAcademica";
import Login from "./views/externos/Login"; // Asegúrate de que la ruta sea correcta
import Logout from "./components/Logout";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/*" // Ruta base para el resto de la app
          element={
            <Aside>
              <Routes>
                <Route path="/Mantenimientos/usuarios" element={<Usuarios />} />
                <Route path="/Mantenimientos/perfiles" element={<Perfiles />} />
                <Route path="/Mantenimientos/tiempojob" element={<Tiempojob />} />
                <Route path="/Mantenimientos/jornada" element={<Jornada />} />
                <Route path="/Mantenimientos/carrera" element={<Carrera />} />
                <Route path="/Mantenimientos/cursos" element={<Cursos />} />
                <Route path="/Mantenimientos/paralelos" element={<Paralelos />} />
                <Route path="/Mantenimientos/educacionGlobal" element={<EducacionGlobal />} />
                <Route path="/Mantenimientos/materias" element={<Materias />} />
                <Route path="/Mantenimientos/tituloacademico" element={<TitulosAcademicos />} />
                <Route path="/Mantenimientos/calendario" element={<Calendario />} />
                <Route path="/Mantenimientos/horarios" element={<Horarios />} />
                <Route path="/Formulario/crearEducacionGlobal" element={<NewEducacionGlobal />} />
                <Route path="/Planificaciones/PlanificacionAcademia" element={<PlanificacionAcademica />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </Aside>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
