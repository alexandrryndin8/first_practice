const petro = document.getElementById('Petro')
const tucson = document.getElementById('Tucson')
const tokyo = document.getElementById('Tokyo')
const paris = document.getElementById('Paris')
const astana = document.getElementById('Astana')

async function Api() {
    const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const respons_tokyo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m')
    const respons_tucson = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current=temperature_2m&hourly=temperature_2m')
    const respons_paris = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current=temperature_2m&hourly=temperature_2m')
    const respons_astana = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.1801&longitude=71.446&current=temperature_2m&hourly=temperature_2m')
    const data_petro = await respons_petro.json()
    const data_tokyo = await respons_tokyo.json()
    const data_tucson = await respons_tucson.json()
    const data_paris = await respons_paris.json()
    const data_astana =  await respons_astana.json()
    return [data_petro, data_tokyo, data_tucson, data_paris, data_astana]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        tucson.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
        tokyo.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
        paris.textContent = `Air temperature: ${out[3].current.temperature_2m} \u00B0C`
        astana.textContent = `Air temperature: ${out[4].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeour(output, 10000)
    }
}

output()