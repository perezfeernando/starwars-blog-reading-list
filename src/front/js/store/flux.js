const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadCharacters: () => {
				//get the store
				const store = getStore();

				fetch("https://www.swapi.tech/api/people")
					.then(resp => {
						console.log(resp.code);
						return resp.json();
					})
					.then(data => {
						let formattedCharacters = data.results.map(item => {
							return { ...item, favorite: false };
						});
						setStore({ characters: formattedCharacters });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			loadPlanets: () => {
				//get the store
				const store = getStore();

				fetch("https://www.swapi.tech/api/planets")
					.then(resp => {
						console.log(resp.code);
						return resp.json();
					})
					.then(data => {
						let formattedPlanets = data.results.map(item => {
							return { ...item, favorite: false };
						});
						setStore({ planets: formattedPlanets });
					})
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
