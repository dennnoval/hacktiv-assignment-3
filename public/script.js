window.onload = () => {
	function pollingStatus() {
		const url = "http://localhost:8080/status"
		fetch(url)
			.then(r => r.json())
			.then(j => {
				stwtr = "Status : "
				if (j.status.water <= 8) {
					if (j.status.water >= 6) stwtr += "SIAGA"
					else stwtr += "AMAN"
				} else stwtr += "BAHAYA"
				wtr = document.querySelector("#water")
				wtr.innerText = "Water = " + j.status.water + " m | " + stwtr

				stwnd = "Status : "
				if (j.status.wind <= 15) {
					if (j.status.wind >= 7) stwnd += "SIAGA"
					else stwnd += "AMAN"
				} else stwnd += "BAHAYA"
				wnd = document.querySelector("#wind")
				wnd.innerText = "Wind = " + j.status.wind + " m/s | " + stwnd
			})
			.catch(err => console.error(err))
	}
	setInterval(pollingStatus, 1000)
}
