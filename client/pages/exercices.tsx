import React, { useState, useEffect } from 'react';
import { useWorkoutContext } from '../context/WorkoutContext';

const Exercices: React.FC = () => {
    const { addWorkout } = useWorkoutContext();
    const [muscleGroups, setMuscleGroups] = useState<string[]>([]);
    const [exercises, setExercises] = useState<{ name: string; muscleGroup: string }[]>([]);
    const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch muscle groups from the GraphQL API
    useEffect(() => {
        const fetchMuscleGroups = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        query: `
                            query {
                                muscleGroups
                            }
                        `,
                    }),
                });
                const { data } = await response.json();
                setMuscleGroups(data.muscleGroups);
            } catch (err) {
                setError('Failed to fetch muscle groups');
            } finally {
                setLoading(false);
            }
        };

        fetchMuscleGroups();
    }, []);

    // Fetch exercises for the selected muscle group
    useEffect(() => {
        if (!selectedGroup) return;

        const fetchExercises = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        query: `
                            query($group: String!) {
                                exercisesByGroup(group: $group) {
                                    name
                                }
                            }
                        `,
                        variables: { group: selectedGroup },
                    }),
                });
                const { data } = await response.json();
                setExercises(data.exercisesByGroup.map((exercise: { name: string }) => ({ name: exercise.name, muscleGroup: selectedGroup })));
            } catch (err) {
                setError('Failed to fetch exercises');
            } finally {
                setLoading(false);
            }
        };

        fetchExercises();
    }, [selectedGroup]);

    return (
        <div>
            <h1>Exercises</h1>
            <p>Select a muscle group to explore exercises:</p>

            {/* Display loading or error messages */}
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Buttons for each muscle group */}
            <div>
                {muscleGroups.map((group) => (
                    <button
                        key={group}
                        onClick={() => setSelectedGroup(group)}
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
                        {exercises.map((exercise) => (
                            <li key={exercise.name}>
                                {exercise.name}
                                <button
                                    onClick={() =>
                                        addWorkout({ name: exercise.name, muscleGroup: selectedGroup })
                                    }
                                >
                                    Add to Workout
                                </button>
                            </li>
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