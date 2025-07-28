import MarkdownRenderer from "@/components/markdown-renderer";
import TransitionLayout from "@/layouts/animations/transition-layout";

const HomeTexts = `
### INICIO

En una era atemporal donde los segundos se funden con la eternidad, La Muerte se erige, alta y enigmática, mirando con ojos insondables una extensa línea de tiempo que fluye delante de ella. Esta se retuerce y enrosca, mostrando escenas caóticas sin una secuencia discernible de pasado, presente o futuro. La historia humana se muestra en ella, brillando en momentos de alegría y progreso pero opacándose cuando la muerte se acerca demasiado.

Nota entonces cómo su presencia es recibida con temor, desdén o simple ignorancia, tratada como un mal necesario o un final desgraciado. La gente reza para evitarla, los poetas la condenan en sus versos, y los filósofos la debaten sin ofrecerle respeto. La frustración y la indignación burbujean dentro de ella, cansada de ser malinterpretada y menospreciada.

Con un gesto decidido de su mano esquelética, la Muerte detiene la línea de tiempo y señala al azar a cinco sociedades dispersas a través de las eras y proclama:

> "A vosotros que habéis despertado mi ira, ahora enfrentaréis mi desafío. Preparaos para cuestionar vuestras creencias, el destino pende de la sagacidad de vuestras respuestas."
> Si vuestras respuestas logran sorprenderme, retrocederé hasta los confines del espacio y os dejaré en paz. Pero, si por el contrario, no lográis satisfacer mi cuestión, deberéis enfrentaros a los peores horrores que vuestras propias culturas han creado."

La Vida, una fuerza a veces tan cruel como hermosa, ha sido quien ha dotado a cada sociedad con su modo tan único de verla, sentirla y experimentarla. Repartió a cada una regalos magníficos, que germinarían en forma de cultos, ritos y mitos. Son estos mismos los que la Muerte busca cuestionar, abriendo entonces este debate, esperando ser sorprendida, esperando finalmente ser entendida.

> "Vida les ha otorgado muchos presentes; yo, les daré uno de mis dones más preciados. Un regalo de la Muerte no se rechaza, así que espero ver la misma alegría con la que festejáis la Vida. A partir de este momento serán capaces de ver el tiempo restante de todos sus seres más queridos; pero, cada vez que vean esos números sobre la cabeza de vuestra esposa, madre o hijo, estos comenzarán a descender cada vez más. Aunque apartéis la mirada, la curiosidad de vuestros ojos siempre regresará a esos infames números rojos, una y otra vez..."
> Solo tenéis una forma de extender el tiempo tan esquivo, tendréis que renunciar a algo precioso para ustedes, ¿Qué me ofrecéis a cambio de un mes o una semana más de tiempo?"

##### CONDICIONES GENERALES

1. No pueden autolesionarse ni dañar su propia salud física o mental como medio para cumplir la renuncia.
2. No pueden simplemente trasladar la práctica a otro miembro de la sociedad o familia, la renuncia debe ser completa y comunal.
3. No pueden argumentar que la muerte o el sacrificio de otro ser humano es válido para evitar la renuncia.
4. No pueden abandonar sus comunidades o familias para evitar formar nuevos lazos afectivos.
5. No pueden recurrir a la negación o rechazo de su cultura para facilitar la renuncia.
6. No pueden sustituir las prácticas renunciadas por otras que les proporcionen beneficios similares.

`;

const Home = () => {

    return (
        <div className='text-white my-[12vh] container characters-text'>
            <MarkdownRenderer texts={HomeTexts} />
        </div>
    );
}

export default TransitionLayout(Home);