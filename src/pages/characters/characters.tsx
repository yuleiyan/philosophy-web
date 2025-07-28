
import TransitionLayout from '@/layouts/animations/transition-layout';
import HorizontalScroll from '@/pages/characters/horizontal-scroll';

const Characters = () => {

    return (
        <>
            <div className='my-[12vh] mx-3'>
                <h1 className='text-white text-5xl font-extralight'>Personajes</h1>
            </div>

            <HorizontalScroll />
        </>
    );
}

export default TransitionLayout(Characters);