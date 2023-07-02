import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className='header'>
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	return (
		<main className='menu'>
			<h2>Our menu</h2>

			{pizzaData.length > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose from. All
						from our stone oven, all organic, all delicious.
					</p>
					<ul className='pizzas'>
						{pizzaData.map(pizza => (
							<Pizza pizza={pizza} key={pizzaData.indexOf(pizza)} />
						))}
					</ul>
				</>
			) : (
				<p>We're still working on our menu. Please come back later :)</p>
			)}
		</main>
	);
}

function Pizza({ pizza }) {
	// if (pizza.soldOut) return null;

	return (
		<li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
			<img src={pizza.photoName} alt={pizza.name} />
			<div>
				<h3>{pizza.name}</h3>
				<p>{pizza.ingredient}</p>

				{/* {pizza.soldOut ? <span>SOLD OUT</span> : <span>{pizza.price}</span>} */}

				<span>{pizza.soldOut ? 'SOLD OUT' : pizza.price + 3}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	let fCloseHour = closeHour - 12;

	const isOpen = hour > openHour && hour < closeHour;
	// if (!isOpen)
	// 	return (
	// 		<footer class='footer'>
	// 			<p>CLOSED</p>
	// 		</footer>
	// 	);

	return (
		<footer className='footer'>
			{isOpen ? (
				<Order fCloseHour={fCloseHour} />
			) : (
				<div className='closed'>
					<p>
						We'd be happy to serve you between the hours of {openHour} and{' '}
						{fCloseHour}.
					</p>
					<p>Please come back another time </p>
				</div>
			)}
		</footer>
	);
	// return React.createElement('footer', null, "We're currently open!");
}

function Order({ fCloseHour }) {
	return (
		<div className='order'>
			<p>We're open until {fCloseHour}. Come visit us or order online.</p>
			<button className='btn'>order</button>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
