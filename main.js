window.addEventListener("DOMContentLoaded", () => {
    const adviceId = document.getElementById("advice-id")
    const button = document.querySelector(".btn")
    const pictureId = document.getElementById("picture-id")
    const adviceText = document.getElementById("advice-text")
    const container = document.querySelector(".container")
    const pictureServer = document.getElementById("server")
    const pictureServerUrl = document.getElementById("server-url")
    const pictureUrl = document.getElementById("url")
    const pictureAuthor = document.getElementById("author")
    const root = document.querySelector(":root")
    let hue = 0
    let color = 0
    root.style.setProperty("--hue", hue)
    root.style.setProperty("--color", color)

    fetch("https://picsum.photos/v2/list?page=1&limit=1000")
    .then(res => {
        return res.json()
    })
    .then(data => {
        hue = Math.floor(Math.random() * 360)
        color = Math.floor(Math.random() * 360)
        root.style.setProperty("--hue", hue)
        root.style.setProperty("--color", color)
        const index = Math.floor(Math.random() * data.length)
        pictureId.textContent = data[index].id
        container.style.backgroundImage = `url(${data[index].download_url})`
        pictureServerUrl.href = "https://picsum.photos/"
        pictureServerUrl.textContent = "picsum.photos/"
        pictureUrl.href = data[index].url
        pictureUrl.textContent = data[index].url
        pictureAuthor.textContent = `Photographer: ${data[index].
            author}`
    })
    fetch("https://api.adviceslip.com/advice")
    .then(res => {
        return res.json()
    })
    .then(data => {
        adviceId.textContent = "#"+data.slip.id
        adviceText.textContent = `"${data.slip.advice}"`
    })

    button.addEventListener("click", () => {
        fetch("https://picsum.photos/v2/list?page=1&limit=1000")
        .then(res => {
            return res.json()
        })
        .then(data => {
            const index = Math.floor(Math.random() * data.length)
            pictureId.textContent = data[index].id
            container.style.backgroundImage = `url(${data[index].download_url})`
            pictureServerUrl.href = "https://picsum.photos/"
            pictureServerUrl.textContent = "picsum.photos/"
            pictureUrl.href = data[index].url
            pictureUrl.textContent = data[index].url
            pictureAuthor.textContent = `Photographer: ${data[index].
            author}`
            hue = Math.floor(Math.random() * 360)
            color = Math.floor(Math.random() * 360)
            root.style.setProperty("--hue", hue)
            root.style.setProperty("--color", color)
        })
        fetch("https://api.adviceslip.com/advice")
        .then(res => {
            return res.json()
        })
        .then(data => {
            adviceId.textContent = "#"+data.slip.id
            adviceText.textContent = `"${data.slip.advice}"`
        })
    })
})