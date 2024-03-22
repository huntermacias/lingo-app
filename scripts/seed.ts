import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!); 
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: "/hr.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Spanish Unit 1
        title: "Unit 1",
        description: "Form basic sentences, greet people",
        order: 1,
      },
      {
        id: 2, 
        courseId: 1, // Spanish Unit 2
        title: "Unit 2", 
        description: "Get around in a city order food and drinks",
        order: 2,
      }
    ]);

    await db.insert(schema.lessons).values([
      // Unit 1
      {
        id: 1,
        unitId: 1, // Unit 1 (Learn the basics of Nouns)
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 3,
        title: "Verbs",
      },
      {
        id: 4,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 4,
        title: "Verbs",
      },
      {
        id: 5,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 5,
        title: "Verbs",
      },
      // Unit 2:
      {
        id: 6,
        unitId: 2, // Unit 2 (Learn the basics of Nouns)
        order: 6,
        title: "Nouns",
      },
      {
        id: 7,
        unitId: 2, // Unit 2 (Learn the basics...)
        order: 7,
        title: "Verbs",
      },
      {
        id: 8,
        unitId: 2, // Unit 2 (Learn the basics...)
        order: 8,
        title: "Verbs",
      },
      {
        id: 9,
        unitId: 2, // Unit 2 (Learn the basics...)
        order: 9,
        title: "Verbs",
      },
      {
        id: 10,
        unitId: 2, // Unit 2 (Learn the basics...)
        order: 10,
        title: "Verbs",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "ASSIST",
        order: 2,
        question: '¿Tú bebes ________ ?',
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
      {
        id:4, 
        lessonId: 1 ,
        type: "SELECT", 
        order: 4, 
        question: "Which one of these is 'the woman'? "
      },
      {
        id: 5, // Ensure unique ID
        lessonId: 2, // Common Verbs
        type: "SELECT",
        order: 1,
        question: 'Which one of these means "to eat"?',
      },
      {
        id: 6,
        lessonId: 2, // Common Verbs
        type: "ASSIST",
        order: 2,
        question: '"to drink"',
      },
      {
        id: 7,
        lessonId: 2, // Common Verbs
        type: "SELECT",
        order: 3,
        question: 'Which one of these means "to run"?',
      },
      {
        id: 8,
        lessonId: 2, // Common Verbs
        type: "SELECT",
        order: 4,
        question: 'Which one of these means "to sleep"?',
      },
      
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // Which one of these is "the man"?
        imageSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
      // challenge 2: unit 1
      {
        challengeId: 2, // '¿Tú bebes ________ ?'
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 2,
        correct: true,
        text: "agua",
        audioSrc: "/es_water.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "manzana",
        audioSrc: "/es_apple.mp3",
      },
      // challenge 3
      {
        challengeId: 3, // Which one of these is the "the robot"?
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/robot.svg",
        correct: true,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
      // challenge 4
      {
        challengeId: 4, // Which one of these is "the man"?
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 4,
        imageSrc: "/woman.svg",
        correct: true,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 4,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
      {
        challengeId: 5,
        imageSrc: "/mascot.svg",
        correct: true,
        text: "comer",
        audioSrc: "/es_eat.mp3",
      },
      {
        challengeId: 5,
        imageSrc: "/mascot.svg",
        correct: false,
        text: "beber",
        audioSrc: "/es_drink.mp3",
      },
      {
        challengeId: 5,
        imageSrc: "/mascot.svg",
        correct: false,
        text: "correr",
        audioSrc: "/es_run.mp3",
      },
      // Challenge 2: "to drink"
      {
        challengeId: 6,
        correct: true,
        text: "beber",
        audioSrc: "/es_drink.mp3",
      },
      {
        challengeId: 6,
        correct: false,
        text: "dormir",
        audioSrc: "/es_sleep.mp3",
      },
      {
        challengeId: 6,
        correct: false,
        text: "leer",
        audioSrc: "/es_read.mp3",
      },
      // Challenge 3: "to run"
      {
        challengeId: 7,
        imageSrc: "/mascot.svg",
        correct: true,
        text: "correr",
        audioSrc: "/es_run.mp3",
      },
      {
        challengeId: 7,
        imageSrc: "/mascot.svg",
        correct: false,
        text: "dormir",
        audioSrc: "/es_sleep.mp3",
      },
      {
        challengeId: 7,
        imageSrc: "/mascot.svg",
        correct: false,
        text: "leer",
        audioSrc: "/es_read.mp3",
      },
      // Challenge 4: "to sleep"
      {
        challengeId: 8,
        imageSrc: "/mascot.svg",
        correct: true,
        text: "dormir",
        audioSrc: "/es_sleep.mp3",
      },
      {
        challengeId: 8,
        imageSrc: "/mascot.svg",
        correct: false,
        text: "comer",
        audioSrc: "/es_eat.mp3",
      },
      {
        challengeId: 8,
        imageSrc: "/mascot.svg",
        correct: false,
        text: "leer",
        audioSrc: "/es_read.mp3",
      },
    ]);


 
    
    


    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database: " + error);
  }
};

main();
