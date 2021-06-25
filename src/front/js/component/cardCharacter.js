import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardCharacter = props => {
	const [characterDetails, setCharacterDetails] = useState(undefined);

	useEffect(() => {
		fetch(props.urlData)
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				setCharacterDetails(data.result);
			})
			.catch(error => console.log("Error loading message from backend", error));
	}, []);

	let favoriteDetails = () => {
		if (props.favorite) {
			return <FontAwesomeIcon icon="fa-solid fa-heart" />;
		} else {
			return <FontAwesomeIcon icon="fa-regular fa-heart" />;
		}
	};

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://image.flaticon.com/icons/png/512/21/21104.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{characterDetails ? characterDetails.properties.name : ""}</h5>
				<p className="card-text">{characterDetails ? characterDetails.description : ""}</p>

				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
				{favoriteDetails()}
			</div>
		</div>
	);
};

CardCharacter.propTypes = {
	urlData: PropTypes.string,
	favorite: PropTypes.bool
};
