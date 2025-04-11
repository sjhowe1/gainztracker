import db from '../config/connection.js';
import { User, Workout, Exercise, Set, Video } from '../models/index.js';
import userSeeds from './userData.json' with { type: "json" };
import workoutSeeds from './workoutData.json' with {type: "json"};
import exerciseSeeds from './exerciseData.json' with {type: "json"};
import setSeeds from './setData.json' with {type: "json"};
import videoSeeds from './videoData.json' with {type: "json"};

import cleanDB from './cleanDB.js';

const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await cleanDB();

    await User.insertMany(userSeeds);
    await Workout.insertMany(workoutSeeds);
    await Exercise.insertMany(exerciseSeeds);
    await Set.insertMany(setSeeds);
    await Video.insertMany(videoSeeds);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error seeding database:', error.message);
    } else {
      console.error('Unknown error seeding database');
    }
    process.exit(1);
  }
};

seedDatabase();