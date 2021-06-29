import React, { Component, useContext, useState, useEffect } from "react";
import { CardPlanets } from "./cardPlanets";

import { Context } from "../store/appContext";

export const ListPlanets = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPlanets();
	}, []);

	let planetsDisplayed;

	planetsDisplayed = store.planets.map((item, index) => {
		return <CardPlanets key={index} urlData={item.url} favorite={item.favorite} />;
	});

	return (
		<div className="contenedor">
			<h1 className="text-left">Planets</h1>
			<div className="contenedor-card">
				{planetsDisplayed.length > 0 ? planetsDisplayed : "Loading characters"}
			</div>
		</div>
	);
};
