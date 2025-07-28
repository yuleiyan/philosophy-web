import MarkdownRenderer from "@/components/markdown-renderer";
import TransitionLayout from "@/layouts/animations/transition-layout";

const AboutProjectText = `
### SOBRE EL PROYECTO

Este proyecto se ha realizado con el propósito de utilizar las actuales herramientas digitales para transmitir una forma de divulgación en la educación que involucre tanto los juegos como el razonamiento crítico.

La idea de un rol en el que los personajes sean los propios participantes, estimula la participación más activa y decidida; se pasa de un espectador a una participación completa en la toma de decisiones para el desarrollo de la historia. Al interpretar una de las sociedades seleccionadas, los participantes deben actuar acorde a las características de las mismas. Esto lleva a una lectura del contenido sobre sus particularidades y creencias.

No hay un ganador en este juego, no buscamos la predominancia de una sociedad sobre otra. Al contrario, intentamos que se reflejen las similitudes entre ellas. Es la Vida la que nos separa, su influencia nos aleja unos de otros, pero es ante la Muerte donde nos reencontramos en igualdad.
`;

const AboutProject = () => {

    return (
        <div className='text-white mt-[10vh] container characters-text'>
            <MarkdownRenderer texts={AboutProjectText} />
        </div>
    );
}

export default TransitionLayout(AboutProject);