import React, { useState } from 'react';

const Exercices: React.FC = () => {
    // Sample data for exercises grouped by muscle groups
    const exercisesByGroup = {
        Chest: ['Bench Press', 'Push-Ups', 'Chest Fly'],
        Back: ['Pull-Ups', 'Deadlifts', 'Bent-Over Rows'],
        Legs: ['Squats', 'Lunges', 'Leg Press'],
        Arms: ['Bicep Curls', 'Tricep Dips', 'Hammer Curls'],
        Shoulders: ['Overhead Press', 'Lateral Raises', 'Front Raises'],
    };

    const [selectedGroup, setSelectedGroup] = useState<keyof typeof exercisesByGroup | null>(null);

    return (
        <div>
            <h1>Exercises</h1>
            <p>Select a muscle group to explore exercises:</p>

            {/* Buttons for each muscle group */}
            <div>
                {Object.keys(exercisesByGroup).map((group) => (
                    <button
                        key={group}
                        onClick={() => setSelectedGroup(group as keyof typeof exercisesByGroup)}
                        style={{
                            margin: '5px',
                            padding: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        {group}
                    </button>
                ))}
            </div>

            {/* Display exercises for the selected muscle group */}
            {selectedGroup && (
                <div>
                    <h2>{selectedGroup} Exercises</h2>
                    <ul>
                        {exercisesByGroup[selectedGroup].map((exercise) => (
                            <li key={exercise}>{exercise}</li>
                        ))}
                    </ul>
                    <button onClick={() => setSelectedGroup(null)} style={{ marginTop: '10px' }}>
                        Back to Muscle Groups
                    </button>
                </div>
            )}
        </div>
    );
};

export default Exercices;