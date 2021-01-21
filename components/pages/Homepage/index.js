import Link from 'next/link';
import React from 'react';
import { Container, GlobalStyles } from './styles';

const Homepage = () => (
	<Container>
		{GlobalStyles}
		<article>
			<p className="introduction-text">
				<strong>LetterStori.es</strong> ist eine interaktive
				Visualisierung, die Schriftverkehr (Briefe, Postkarten, etc.)
				zwischen verschiedenen Akteuren in Beziehung stellt und in einen
				historischen Kontext einordnet. Geschichten und thematische
				Zusammenhänge, die sich über mehrere Dokumente hinweg in der
				Sammlung verbergen, werden in kuratierten „Stories“
				nachvollziehbar verknüpft und können so erst entdeckt und
				verfolgt werden.
			</p>
			<h2>LetterStori.es für Raoul Hausmann</h2>
			<p>
				Das erste LetterStori.es-Projekt entstand für den Dada-Künstler
				Raoul Hausmann in Kooperation mit der{' '}
				<a
					href="https://www.berlinischegalerie.de/home/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Berlinischen Galerie Berlin
				</a>
				, die dessen Nachlass verwaltet und erforscht. Raoul Hausmann
				spielte eine wichtige Rolle in der Berliner Dada-Bewegung der
				1920er Jahre. Er war bekannt für seinen liberalen Lebenswandel,
				der im Vergleich mit anderen Zeitgenossen herausstach. Sowohl
				sein Privatleben als auch sein künstlerisches Schaffen waren
				geprägt von emotionalen Briefwechseln, die einen intimen
				Einblick in seine wechselhaften Beziehungen geben. So erfährt
				man einiges über Hausmanns Weltsicht und den Impetus seiner
				kreativen Arbeit.
			</p>
			<h2>Die Herausforderung</h2>
			<p>
				Umfangreiche Datensätze wie den Nachlass von Raoul Hausmann sind
				häufig in Archiven verborgen und für die Öffentlichkeit schwer
				zugänglich. Die Herausforderung für LetterStori.es war somit
				Zusammenhänge aufzuzeigen und Interesse für die Geschichten
				hinter den Daten zu erwecken. Als Alternative zu klassischen
				Lösungen, die über einen Suchschlitz und Ergebnislisten Zugang
				gewähren, wählt LetterStori.es den Ansatz einer zeitbasierten
				Netzwerkvisualisierung für die Darstellung der Daten. Diese
				ermöglicht es ohne explizites Vorwissen in der Sammlung zu
				stöbern, frei zu explorieren und Neues entdecken zu können.
			</p>
			<h2>Das Ergebnis</h2>
			<img
				className="screenshot"
				src="/images/LetterStories-RaoulHausmann.png"
				alt="Bildschirmaufnahme des Protoyps"
			/>
			<section className="prototypes-links">
				<div className="prototypes-link-column">
					<h3>
						<a href="https://www.figma.com/proto/XD7w62QRIty7RhPJC81xCcDr/v0.3?node-id=0%3A1&viewport=368%2C502%2C0.0355374&scaling=min-zoom">
							Interaktiven Prototyp öffnen
						</a>
					</h3>
					<p>
						Das Gesamt-Konzept kann in einem interaktiven Prototyp
						mit statischen Programmansichten getestet werden.
					</p>
				</div>
				<div className="prototypes-link-column">
					<h3>
						<Link href="/correspondence">
							<a>Web-Applikation öffnen</a>
						</Link>
					</h3>
					<p>
						Darüber hinaus ist eine Web-Applikation entstanden, die
						ein Großteil des Konzepts umsetzt und Live-Daten
						darstellt.
						<br />
						(Entwickelt und getestet ausschließlich mit Google
						Chrome Version 70)
					</p>
				</div>
			</section>
			<h2>Über uns</h2>
			<p>
				Wir sind vier Studenten der{' '}
				<a
					href="https://www.fh-potsdam.de/interfacedesign/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Fachhochschule Potsdam
				</a>{' '}
				im Studiengang Interfacedesign. LetterStori.es fand seinen
				Ursprung Anfang 2018 im Rahmen des Kurses „Active Archives“,
				betreut von Prof. Dr. Frank Heidmann (Professor für Design of
				Software Interfaces) und Katrin Glinka (Wissenschaftliche
				Gesamtsteuerung{' '}
				<a
					href="http://www.museum4punkt0.de/"
					target="_blank"
					rel="noopener noreferrer"
				>
					museum4punkt0
				</a>{' '}
				bei der{' '}
				<a
					href="https://www.preussischer-kulturbesitz.de/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Stiftung Preußischer Kulturbesitz
				</a>
				). Der Kurs beschäftigte sich mit der Entwicklung neuer Formate,
				die Archive für die Öffentlichkeit erfahrbar und explorierbar
				machen.
			</p>
		</article>
		<footer>
			<ul className="authors-list">
				<li className="author-list-item">
					<a href="https://casparkirsch.de">Caspar Kirsch</a>
				</li>
				<li className="author-list-item">
					<a href="https://dustinkummer.com">Dustin Kummer</a>
				</li>
				<li className="author-list-item">
					<a href="http://gismos.org">Emil Woop</a>
				</li>
				<li className="author-list-item">
					<a href="https://vogelino.com">Lucas Vogel</a>
				</li>
			</ul>
		</footer>
		<aside className="logos-aside">
			<ul className="logos-list">
				<li className="logos-list-item">
					<a
						target="_blank"
						href="https://www.en.fh-potsdam.de/"
						className="logo-link"
					>
						<img
							src="/images/logos/fh-potsdam.svg"
							alt="The logo of the University of Applied Science Potsdam"
						/>
					</a>
				</li>
				<li className="logos-list-item">
					<a
						target="_blank"
						href="https://www.berlinischegalerie.de/en/home/"
						className="logo-link"
					>
						<img
							src="/images/logos/berlinische-galerie.svg"
							alt="Logo of the Berlinische Galerie"
						/>
					</a>
				</li>
			</ul>
		</aside>
	</Container>
);

export default Homepage;
