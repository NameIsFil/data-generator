import * as styles from './styles.module.css';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

type Location = {
    postalCode: string,
    city: string,
}

type Venue = {
    id: string,
    location: Location,
    pricePerNightInEUR: number,
    rating: number,
    capacity: number,
    name: string,
    albumId: number,
}

type sleepingDetails = {
    maxCapacity: number,
    amountOfBeds: number,
}

type features = string[]

type contactDetails = {
    phone: string,
    email: string,
}

type VenueDetails = {
    id: string,
    venueId: string,
    location: Location,
    pricePerNightInEUR: number,
    rating: number,
    numberOfReviews: number,
    capacity: number,
    name: string,
    albumId: number,
    description: string,
    features: features,
    sleepingDetails: sleepingDetails,
    checkInHour: string,
    checkOutHour: string,
    distanceFromCityCenterInKM: string,
    contactDetails: contactDetails,
}

const getRandomVenues = (): Venue => {
    const generateId = uuidv4();
    const city = faker.location.city();
    const postalCode = faker.location.zipCode("##-####");
    const rating = faker.number.float({ precision: 0.1 });
    const capacity = faker.number.int({ min: 1, max: 20 })
    const companyName = faker.company.name();
    const pricePerNightInEUR = faker.number.int({ min: 10, max: 5000 })
    const albumId = Math.floor(Math.random());

    return  {
        id: generateId,
        location: {
            postalCode: postalCode,
            city: city
        },
        pricePerNightInEUR: pricePerNightInEUR,
        rating: rating,
        capacity: capacity,
        name: companyName,
        albumId: albumId,
    }
}

const getRandomVenueDetails = (venue: Venue): VenueDetails => {
    return  {
        id: uuidv4(),
        venueId: venue.id,
        location: {
            postalCode: venue.location.postalCode,
            city: venue.location.city
        },
        pricePerNightInEUR: venue.pricePerNightInEUR,
        rating: venue.rating,
        numberOfReviews: Math.floor((Math.random()*300)),
        capacity: venue.capacity,
        name: venue.name,
        albumId: venue.albumId,
        description: faker.lorem.lines({ min: 3, max: 5 }),
        features: [
            faker.word.adjective(),
            faker.word.adjective(),
            faker.word.adjective(),
            faker.word.adjective()
        ],
        sleepingDetails: {
            maxCapacity: Math.floor(Math.floor(Math.random() * 4) + 1),
            amountOfBeds: Math.floor(Math.floor(Math.random() * 4) + 1)
        },
        checkInHour: "15:00",
        checkOutHour: "12:00",
        distanceFromCityCenterInKM: Math.floor(Math.floor(Math.random() * 10) + 1) + "km",
        contactDetails: {
            phone: faker.phone.imei(),
            email: faker.internet.email()
        }
    }
}

export function createBookingInformation() {
    const randomVenues: Venue[] = faker.helpers.multiple(getRandomVenues, { count: 50 });

    const venuesDetails: VenueDetails[] = randomVenues.map(venue => {
        return getRandomVenueDetails(venue);
    })

    const generatedVenueDetails = {
        venues: randomVenues,
        venuesDetails
    }

    console.log(generatedVenueDetails)

    return {
        venues: randomVenues,
        venuesDetails
    }
}

export function DataGenerator() {
    return (
        <div className={styles.container}>
            <button onClick={createBookingInformation}>Generate</button>
        </div>
    )
}
