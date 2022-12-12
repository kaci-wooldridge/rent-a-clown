import { sendReservation, getReservations } from "./dataAccess.js"

export const reservationForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numOfChildren">Party Size</label>
            <input type="number" name="numOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
        <label class="label" for="requestDate">Date</label>
        <input type="date" name="requestDate" class="input" />
        </div>
        <div class="field">
        <label class="label" for="reservationLength">Hours Needed</label>
        <input type="number" name="reservationLength" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const parentsName = document.querySelector("input[name='parentName']").value
        const childsName = document.querySelector("input[name='childName']").value
        const childrenNum = document.querySelector("input[name='numOfChildren']").value
        const userDate = document.querySelector("input[name='requestDate']").value
        const partyLength = document.querySelector("input[name='reservationLength']").value
        const partyAddress = document.querySelector("input[name='address']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parentsName,
            childName: childsName,
            numOfChildren: childrenNum,
            address: partyAddress,
            length: partyLength,
            date: userDate
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})