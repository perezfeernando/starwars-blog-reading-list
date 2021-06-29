import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { ListCharacter } from "../component/listCharacter";
import { ListPlanets } from "../component/listPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<ListCharacter />
			<ListPlanets />
		</div>
	);
};
