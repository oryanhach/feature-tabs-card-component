import { useState } from 'react'
import featureVisual from './assets/feature-visual.png'
import './App.css'

function App() {
	// STATE
	const [activeTab, setActiveTab] = useState('overview')

	return (
		<main className="page">
			<section className="feature-card">
				<header className="feature-card__header">
					<div className="feature-card__icon" aria-hidden="true">
						<i className="fa-solid fa-list-check"></i>
					</div>

					<h1 className="feature-card__title">Smart Productivity</h1>

					<p className="feature-card__description">
						Everything you need to stay organized, focused, and
						productive every day.
					</p>
				</header>

				<div className="feature-card__tabs">
					<button
						onClick={() => setActiveTab('overview')}
						className={`feature-card__tab ${
							activeTab === 'overview'
								? 'feature-card__tab--active'
								: ''
						}`}
						type="button">
						<i className="fa-solid fa-house"></i>
						Overview
					</button>

					<button
						onClick={() => setActiveTab('features')}
						className={`feature-card__tab ${
							activeTab === 'features'
								? 'feature-card__tab--active'
								: ''
						}`}
						type="button">
						<i className="fa-regular fa-star"></i>
						Features
					</button>

					<button
						onClick={() => setActiveTab('tips')}
						className={`feature-card__tab ${
							activeTab === 'tips'
								? 'feature-card__tab--active'
								: ''
						}`}
						type="button">
						<i className="fa-regular fa-lightbulb"></i>
						Tips
					</button>
				</div>

				<div className="feature-card__content">
					<div className="feature-card__visual" aria-hidden="true">
						<img
							className="feature-card__image"
							src={featureVisual}
							alt=""
						/>
					</div>

					<div className="feature-card__body">
						<h2 className="feature-card__content-title">
							Your workspace, simplified.
						</h2>

						<p className="feature-card__content-text">
							Organize tasks, manage your time, and track progress
							in one clean and minimal workspace.
						</p>

						<ul className="feature-card__list">
							<li className="feature-card__list-item">
								<i className="fa-solid fa-check"></i>
								All-in-one dashboard
							</li>

							<li className="feature-card__list-item">
								<i className="fa-solid fa-check"></i>
								Easy task management
							</li>

							<li className="feature-card__list-item">
								<i className="fa-solid fa-check"></i>
								Progress at a glance
							</li>
						</ul>
					</div>
				</div>

				<div className="feature-card__indicators" aria-hidden="true">
					<span
						className={`feature-card__indicator ${
							activeTab === 'overview'
								? 'feature-card__indicator--active'
								: ''
						}`}></span>

					<span
						className={`feature-card__indicator ${
							activeTab === 'features'
								? 'feature-card__indicator--active'
								: ''
						}`}></span>

					<span
						className={`feature-card__indicator ${
							activeTab === 'tips'
								? 'feature-card__indicator--active'
								: ''
						}`}></span>
				</div>
			</section>
		</main>
	)
}

export default App
