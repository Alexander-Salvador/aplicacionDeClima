let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = 'e8c3b5dc8e1c64a9ecc007b7f8c2721f'
let gradosKelvin = 273.15


document.getElementById('searchWeather').addEventListener('click', () => {
    const city = document.getElementById('enterCity').value
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
    const datosClima = document.getElementById('datosClima')
    datosClima.innerHTML = ''

    const cityName = data.name
    const temperatura = data.main.temp
    const descriptionName = data.weather[0].description
    // const icon = data

    // Creando Elementos
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = cityName

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${temperatura - gradosKelvin}`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descriptionName}`

    datosClima.appendChild(ciudadTitulo)
    datosClima.appendChild(temperaturaInfo)
    datosClima.appendChild(descripcionInfo)
}