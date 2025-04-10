import React, { createContext, useContext, useState, ReactNode } from 'react';

type Workout = {
    name: string;
    muscleGroup: string;
};

type WorkoutContextType = {
    selectedWorkouts: Workout[];
    addWorkout: (workout: Workout) => void;
    removeWorkout: (workoutName: string) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedWorkouts, setSelectedWorkouts] = useState<Workout[]>([]);

    const addWorkout = (workout: Workout) => {
        setSelectedWorkouts((prev) => [...prev, workout]);
    };

    const removeWorkout = (workoutName: string) => {
        setSelectedWorkouts((prev) => prev.filter((w) => w.name !== workoutName));
    };

    return (
        <WorkoutContext.Provider value={{ selectedWorkouts, addWorkout, removeWorkout }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error('useWorkoutContext must be used within a WorkoutProvider');
    }
    return context;
};