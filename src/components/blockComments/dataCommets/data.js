import iconOne from './icons/iconsOne.png';
import iconTwo from './icons/iconsTwo.png';
import iconThere from './icons/iconsThere.png';
import iconFour from './icons/iconsFour.png';


export const data = [
    {
        id: 1,
        name: 'Lorenzo',
        img: (<>
            <img src={iconOne}/>
        </>),
        email: '@lorenzoo',
        description: 'Amazing Telegram bot! Provides real-time crypto prices and news'
    },
    {
        id: 2,
        name: 'Adalina',
        img: (<>
            <img src={iconTwo}/>
        </>),
        email: '@ada',
        description: 'Must-have bot for crypto traders. Accurate signals and analysis'
    },
    {
        id: 3,
        name: 'Alexander',
        img: (<>
            <img src={iconThere}/>
        </>),
        email: '@alex_x',
        description: 'Superb cryptocurrency bot! Quick updates and reliable data'
    },
    {
        id: 4,
        name: 'Rushana',
        img: (<>
            <img src={iconFour}/>
        </>),
        email: '@Hana',
        description: 'Efficient and user-friendly bot. Simplifies crypto trading tasks'
    }
]