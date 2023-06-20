import * as styles from "./styles.module.css";
import { faker } from '@faker-js/faker';

export function createRandomUser(): User {
    let newUser = {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
    console.log(newUser)
    return newUser
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
    count: 5,
});


export function DataGenerator() {

    return (
        <div className={styles.container}>
            <button onClick={() => createRandomUser()}>Generate</button>
        </div>
    )

    // return (
    //     <div className={styles.container}>
    //         <div className={styles.inputField}>
    //             <p>Name:</p>
    //             <input placeholder={faker.name.firstName()} />
    //         </div>
    //         <div className={styles.inputField}>
    //             <p>Name:</p>
    //             <input placeholder={faker.name.firstName()} />
    //         </div>
    //         <div className={styles.inputField}>
    //             <p>Name:</p>
    //             <input placeholder={faker.name.firstName()} />
    //         </div>
    //         <div className={styles.inputField}>
    //             <p>Name:</p>
    //             <input placeholder={faker.name.firstName()} />
    //         </div>
    //         <div className={styles.inputField}>
    //             <p>Name:</p>
    //             <input placeholder={faker.name.firstName()} />
    //         </div>
    //         <button>Generate</button>
    //     </div>
    // )
}
