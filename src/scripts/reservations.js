import { deleteReservation, getClowns, getReservations, saveCompletion } from "./dataAccess.js"

const convertRequestToListElement = (reservation) =>{
    const clowns = getClowns()
    return `
    <li>
        ${reservation.date}
        <button class="reservation__delete" id="reservation--${reservation.id}">
            Delete
        </button>
        <select class="clowns" id="clowns">
        <option value="">Choose</option>
            ${
            clowns.map(
                clown => {
                    return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                }
            ).join("")
            }
        </select>
    </li>
`
}

export const reservations = () => {
    const reservations = getReservations()
    let html = `
        <ul>
            ${
                reservations.map(convertRequestToListElement).join("")
            }
        </ul>
    `
    return html 
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { 
                reservationId: reservationId,
                clownId: clownId,
                date_created: new Date()
            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion)
        }
    }
)