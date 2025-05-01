import tourImg1 from './images/tour-1.jpeg';
import tourImg2 from './images/tour-2.jpeg';
import tourImg3 from './images/tour-3.jpeg';
import tourImg4 from './images/tour-4.jpeg';

export const pageLinks =[
    {
        id: 1,
        href: '#home',
        title: 'home'
    },
    {
        id: 2,
        href: '#about',
        title: 'about'
    },
    {
        id: 3,
        href: '#services',
        title: 'services'
    },
    {
        id: 4,
        href: '#tours',
        title: 'tours'
    }
]

export const socialLinks =[
    {
        id: 1,
        href: 'https://www.twitter.com',
        icon: 'fab fa-facebook',
    },{
        id: 2,
        href: 'https://www.twitter.com',
        icon: 'fab fa-twitter',
    },{
        id: 3,
        href: 'https://www.twitter.com',
        icon: 'fab fa-squarespace',
    }
]


export const services = [
    {
        id: 1,
        title: 'saving money',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. /n Asperiores, officia.',
        icon: 'fas fa-wallet fa-fw'
    },
    {
        id: 2,
        title: 'endless hiking',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
        icon: 'fas fa-tree fa-fw'
    },
    {
        id: 3,
        title: 'amazing comfort',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
        icon: 'fas fa-socks fa-fw'
    }
]

export const tours =[
    {
        id: 1,
        img : tourImg1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        country: 'china',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        days: '6 days',
        amount: '$2100'
    },
    {
        id: 2,
        img : tourImg2,
        date: 'october 1th, 2020',
        title: 'best of java',
        country: 'indonesia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        days: '11 days',
        amount: '1400'
    },
    {
        id: 3,
        img : tourImg3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        country: 'indonesia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        days: '8 days',
        amount: '5000'
    },
    {
        id: 4,
        img : tourImg4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        country: 'indonesia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        days: '8 days',
        amount: '2555'
    }
]