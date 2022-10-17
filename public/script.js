window.onload = () => {
	scs = document.querySelector("#seconds")
	i = 0
	setInterval(() => {
		if (i == 15) i = 0
		scs.innerText = `Interval : ${++i} s`
	}, 1000)
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
	setInterval(pollingStatus, 1000*15)
}
