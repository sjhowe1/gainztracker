import React, { useState, useEffect } from 'react';

type Workout = {
    id: string;
    name: string;
    muscleGroup: string;
};

const Workout: React.FC = () => {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        query: `
                            query {
                                workouts {
                                    id
                                    name
                                    muscleGroup
                                }
                            }
                        `,
                    }),
                });
                const { data } = await response.json();
                setWorkouts(data.workouts);
            } catch (err) {
                setError('Failed to fetch workouts');
            } finally {
                setLoading(false);
            }
        };

        fetchWorkouts();
    }, []);

    // Group workouts by muscle group
    const groupedWorkouts = workouts.reduce((acc, workout) => {
        if (!acc[workout.muscleGroup]) {
            acc[workout.muscleGroup] = [];
        }
        acc[workout.muscleGroup].push(workout);
        return acc;
    }, {} as Record<string, Workout[]>);

    return (
        <div>
            <h1>Your Workout Plan</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {Object.keys(groupedWorkouts).map((muscleGroup) => (
                <div key={muscleGroup}>
                    <h2>{muscleGroup}</h2>
                    <ul>
                        {groupedWorkouts[muscleGroup].map((workout) => (
                            <li key={workout.id}>{workout.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Workout;