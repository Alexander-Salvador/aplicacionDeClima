let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = 'e8c3b5dc8e1c64a9ecc007b7f8c2721f'
let gKelvin = 273.15


document.getElementById('button__searchWeather').addEventListener('click', () => {
    const city = document.getElementById('escribirCiudad').value
    if (city) {
        fetchDatosClima(city)
    }
})

function fetchDatosClima(city) {
    fetch(`${urlBase}?q=${city}&appid=${apiKey}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    console.log(data)
    const mostrarInformacion = document.getElementById('mostrarInformacion')
    mostrarInformacion.innerHTML = ''

    const cityName = data.name
    const temperatura = data.main.temp
    const descriptionName = data.weather[0].description
    const iconWeather = 'https://openweathermap.org/img/wn/10d@2x.png'
    // const icon = data

    // Creando Elementos
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = cityName

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - gKelvin)} °C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descriptionName}`

    const horaInfo = document.createElement('p');
    horaInfo.textContent = `Hora actual: ${new Date().toLocaleTimeString()}`;

    const iconInfo = document.createElement('img')
    iconInfo.src = iconWeather

    mostrarInformacion.appendChild(ciudadTitulo)
    mostrarInformacion.appendChild(temperaturaInfo)
    mostrarInformacion.appendChild(descripcionInfo)
    mostrarInformacion.appendChild(horaInfo)
    mostrarInformacion.appendChild(iconInfo)
}