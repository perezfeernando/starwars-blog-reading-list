import React, { Component, useContext, useState, useEffect } from "react";
import { CardCharacter } from "./cardCharacter";

import { Context } from "../store/appContext";

export const ListCharacter = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadCharacters();
	}, []);

	let charactersDisplayed;

	charactersDisplayed = store.characters.map((item, index) => {
		return <CardCharacter key={index} urlData={item.url} favorite={item.favorite} />;
	});

	return (
		<div className="contenedor">
			<h1 className="text-leftz">Characters</h1>
			<div className="contenedor-card">
				{charactersDisplayed.length > 0 ? charactersDisplayed : "Loading characters"}
			</div>
		</div>
	);
};
