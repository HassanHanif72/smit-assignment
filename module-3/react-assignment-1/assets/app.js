// const root = document.getElementById('root');
// const heading = document.createElement('h1');
// heading.textContent = "Hello World";
// root.appendChild(heading);

const parentDiv = React.createElement('div',
    { id: 'parentDiv', className: 'parentDiv', key: 'parenbtDiv' },
    [
        React.createElement('div', { className: 'parentBody', key: 'parentBody' }, [
            React.createElement('img', { src: 'assets/image/image.webp', key: 'image' }),
            React.createElement('div', { className: 'info', key: 'parentBody' }, [
                React.createElement('h1', { key: 'name' }, 'M.Hassan Hanif'),
                React.createElement('span', { className: 'designation', key: 'designation' }, 'Frontend Developer'),
                React.createElement('span', { key: 'number' }, '03122419895'),
                React.createElement('span', { key: 'location' }, 'Karachi'),
                React.createElement('span', { key: 'email' }, 'hassanhanif72@gmail.com'),
            ]),

        ]),



        React.createElement('h2', { key: 'summary-1' }, 'Professional Summary'),
        React.createElement('p', { key: 'desc-1' }, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),

        React.createElement('h2', { key: 'summary-2' }, 'Skills'),
        React.createElement('ul', { key: 'ul' }, [
            React.createElement('li', { key: 'skill-1' }, 'HTML5 & CSS3'),
            React.createElement('li', { key: 'skill-2' }, 'JavaScript'),
            React.createElement('li', { key: 'skill-3' }, 'React'),
            React.createElement('li', { key: 'skill-4' }, 'Responsive Web Design'),
            React.createElement('li', { key: 'skill-5' }, 'Git & GitHub'),
            React.createElement('li', { key: 'skill-6' }, 'UI/UX Design'),
        ]),

        React.createElement('h2', { key: 'experience' }, 'Experience'),
        React.createElement('div', { key: 'experience-1' }, [
            React.createElement('h3', { key: 'h3-title' }, '- Frontend Developer at Source Code'),
            React.createElement('span', { key: 'span' }, 'Jan 2022 - Present'),
            React.createElement('p', { key: 'e-desc-1' }, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
        ]
        ),
        React.createElement('div', { key: 'experience-2' }, [
            React.createElement('h3', { key: 'h3-title-2' }, '- Frontend Developer at Grids Hub'),
            React.createElement('span', { key: 'span-2' }, 'Jun 2020 - Dec 2021'),
            React.createElement('p', { key: 'e-desc-2' }, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
        ]),
        React.createElement('h2', { key: 'project' }, 'Projects'),
        React.createElement('div', { key: 'p-1' }, [
            React.createElement('h3', { key: 'h3-title-3' }, '- Brand'),
            React.createElement('p', { key: 'p-title-3' }, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            React.createElement('a', { href: 'www.brand.com', key: 'a-title-3' }, 'www.brand.com'),
        ]),
        React.createElement('div', { key: 'p-2' }, [
            React.createElement('h3', { key: 'h3-title-4' }, '- E-Commerce'),
            React.createElement('p', { key: 'p-title-4' }, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            React.createElement('a', { href: 'www.ecommerce.com', key: 'a-title-4' }, 'www.ecommerce.com'),
        ])
    ]
);


const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(parentDiv);