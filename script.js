let weather = {
	"apiKey": "e185d3cc48ce31288daa510b96d4754f",
	fetchWeather: function (city){
		// const city = "kolkata"
		fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=e185d3cc48ce31288daa510b96d4754f")
		.then((response) => response.json())
		.then((data) => weather.displayWeather(data));
	},
	displayWeather: function (data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { speed } = data.wind;
		const { humidity } = data.main;
		const { temp } = data.main;
		// const { main } = data.main;
		console.log(name, icon, description, speed, humidity, temp);
		// const pic = main.toLowerCase();
		document.querySelector(".city-name").innerText = "Weather in " + name;
		document.querySelector(".temp").innerText = temp + " °C";
		document.querySelector(".description").innerText = description;
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
		document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
		document.querySelector(".wind-speed").innerText = speed + " km/h";
		document.querySelector(".weather").classList.remove("loading");
		document.body.style.backgroundImage =  "url('https://source.unsplash.com/1600x900/?" + name + "')";
	},
	search: function () {
		this.fetchWeather(document.querySelector(".search-bar").value);
	},
};

document.querySelector(".search button").addEventListener("click", function () {
	weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (e) {
	if(e.key == "Enter"){
		weather.search();
	}
});

weather.fetchWeather("Kolkata");

//https://api.openweathermap.org/data/2.5/weather?q=denver&units=metric&appid=e185d3cc48ce31288daa510b96d4754f