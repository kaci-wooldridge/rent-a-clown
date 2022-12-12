import { reservationForm } from "./requestForm.js"
import { reservations } from "./reservations.js"


export const clownPage = () => {
    return `
        <h1>rent-a-clown</h1>
        <section class="reservationForm">
            ${reservationForm()}
        </section>
        <section class="upcomingReservations">
        <h2>Upcoming Reservations</h2>
            ${reservations()}
        </section>
        `
}