const API_KEY = `13d22dc5a5dff24b72594b9b75cf6c39`;
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  //   console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  setInnerText("city", temperature.name);
  setInnerText("temperature-id", temperature.main.temp);
  setInnerText("wether-id", temperature.weather[0].main);
  console.log(temperature);

  // set weather icon (ttp://openweathermap.org/img/wn/10d@2x.png)

  const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imageIcon = document.getElementById("weather-icon");
  imageIcon.setAttribute("src", url);
};
// done