import { clownPage } from "./clownPage.js"
import { fetchClowns, fetchReservations } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = clownPage()
            }
        )

}

render()



mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)