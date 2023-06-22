import * as styles from './styles.module.css';
import { faker } from '@faker-js/faker';

export function createBookingInformation(): User {
    let newUser = {
        venues: [
            {
                id: Math.floor((Math.random()*10)),
                location: {
                    postalCode: faker.location.zipCode("##-####"),
                    name: faker.location.city()
                },
                pricePerNightInEUR: faker.commerce.price(),
                rating: faker.number.float({ precision: 0.1 }),
                capacity: Math.floor((Math.random()*4)),
                name: faker.company.name(),
                albumId: Math.floor((Math.random()*10)),
            }
        ],
        venuesDetails: [
            {
                id: Math.floor((Math.random()*300)),
                venueId: faker.internet.userName(),
                location: {
                    postalCode: faker.location.zipCode("##-####"),
                    name: faker.location.city()
                },
                pricePerNightInEUR: faker.commerce.price(),
                rating: faker.number.float({ min: 1, max: 10, precision: 0.1 }),
                numberOfReviews: Math.floor((Math.random()*300)),
                capacity: Math.floor((Math.random()*4)),
                name: faker.date.past(),
                albumId: faker.date.past(),
                description: faker.date.past(),
                features: [
                    faker.string.uuid(),
                    faker.string.uuid(),
                    faker.string.uuid(),
                    faker.string.uuid(),
                    faker.string.uuid()
                ],
                sleepingDetails: {
                    maxCapacity: Math.floor((Math.random()*10)),
                    amountOfBeds: Math.floor((Math.random()*10))
                },
                checkInHour: "15:00",
                checkOutHour: "12:00",
                distanceFromCityCenterInKM: faker.internet.email(),
                contactDetails: {
                    phone: faker.internet.email(),
                    email: faker.internet.email()
                }
            }
        ],
    };
    console.log(newUser)
    return newUser
}

export const USERS: User[] = faker.helpers.multiple(createBookingInformation, {
    count: 5,
});

export function DataGenerator() {

    return (
        <div className={styles.container}>
            <button onClick={createBookingInformation}>Generate</button>
        </div>
    )
}
