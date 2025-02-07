/**
 * To run this file:
 * - Install bun.js
 * - Run `bun gen_volunteers.js`
 */
import { randomUUID } from "node:crypto";
import { faker } from "@faker-js/faker";
import pokemons from "pokemons";

const sectors = [
  "healthcare",
  "education",
  "lgbtq+",
  "women's rights",
  "refugees",
  "political",
  "welfare",
  "sexual health",
  "rehabilitation",
  "substance abuse",
];

function gen_projects(count = 20) {
  const projectIds = [];
  const projects = new Array(count).fill(0).map(() => {
    const id = randomUUID();
    projectIds.push(id);
    const location = faker.location;
    const country = location.country();
    return {
      id: id,
      name: faker.company.name(),
      mission: faker.company.buzzPhrase(),
      sector: faker.helpers.arrayElement(sectors),
      location: country,
      lat: location.latitude(),
      lng: location.longitude(),
      address: {
        streetAddress: location.streetAddress(),
        city: location.city(),
        country,
      },
    };
  });

  return { projects, projectIds };
}

function gen_volunteers(count = 80) {
  const volunteerIds = [];
  const volunteers = new Array(count).fill(0).map(() => {
    const id = randomUUID();
    volunteerIds.push(id);
    const name = [faker.person.firstName(), faker.person.lastName()];
    const location = faker.location;
    const country = location.country();

    return {
      id: id,
      first_name: name[0],
      family_name: name[1],
      gender: faker.person.gender(),
      nationality: country,
      // avatar: pokemon goes here maybe
      avatar: faker.image.avatar(),
      lat: location.latitude(),
      lng: location.longitude(),
      address: {
        streetAddress: location.streetAddress(),
        city: location.city(),
        country,
      },
      contact: {
        phone: faker.phone.number({ style: "international" }),
        email: faker.helpers.arrayElement([
          faker.internet.email({ firstName: name[0], lastName: name[1] }),
          `${faker.string.alphanumeric({
            length: { min: 5, max: 8 },
            casing: "lower",
          })}@gmail.com`,
          faker.internet.email({ firstName: faker.internet.username() }),
        ]),
      },
    };
  });

  return {
    type: "volunteersCollection",
    volunteers,
  };
}

function gen_logs({ volunteers }, projects) {
  const logs = [];
  volunteers.forEach((v) => {
    // track the days this volunteer worked
    // const daysWorked = {};

    let daysFree = faker.number.int({ min: 1, max: 25 });
    while (daysFree > 0) {
      const projectId = faker.helpers.arrayElement(projects);

      const counter = faker.number.int({ min: 1, max: Math.min(20, daysFree) });

      let day = faker.number.int({ min: 1, max: 31 });
      let daysWorked = faker.number.int({ min: 180, max: 1096 });

      logs.push({
        project: projectId,
        volunteer: v.id,
        duration: daysWorked,
        date: `2020-01-${day}`,
      });

      console.log(
        `generating ${daysFree} days free and ${daysWorked} days worked for ${v.first_name} ${v.family_name}`,
      );

      for (let i = 0; i < counter; i++) {
        let day = faker.number.int({ min: 1, max: 31 });
        while (daysWorked[day]) {
          day = faker.number.int({ min: 1, max: 31 });
        }
        // daysWorked[day] = true;

        day = `${day}`;
        if (day.length === 1) {
          day = `0${day}`;
        }

        daysFree -= 1;
      }

      // if we have days left, chance to escape early
      if (Math.random <= 0.6) {
        break;
      }
      // else generate another project
    }
  });

  return {
    type: "logsCollection",
    logs,
  };
}

const volunteers = gen_volunteers();
const { projects, projectIds } = gen_projects();
const logs = gen_logs(volunteers, projectIds);

// console.log(projects[0]);
// console.log(volunteers[0]);
// console.log(pokemons.results[0]);
// console.log(logs.sort((a, b) => a.date > b.date));
// console.log(logs.length);

Bun.write("./files/data.json", JSON.stringify({ projects, volunteers, logs }, null, 2));
