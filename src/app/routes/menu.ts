
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const Cart = {
    text: 'My Cart',
    link: '/checkout',
    icon: 'fa fa-shopping-cart'
};

const Admin = {
    text: 'Admin',
    link: '/admin',
    icon: 'icon-user-follow',
    submenu: [
        {
            text: 'Add Guitar',
            link: '/admin/guitar'
        },
        {
            text: 'Add Accessory',
            link: '/admin/accessories'
        }
    ]
}

const headingMain = {
    text: 'Navigation',
    heading: true
};

export const menu = [
    headingMain,
    Home,
    // Admin,
    Cart
];
