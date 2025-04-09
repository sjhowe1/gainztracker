import React, { useState, useEffect } from 'react';

const Exercices: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [exercises, setExercises] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    // Fetch exercises
    useEffect(() => {
        const fetchExercises = async () => {
            if (searchTerm.trim() === '') {
                setExercises([]);
                return;
            }

            setLoading(true);
            try {
                const response = await fetch(`/api/searchExercises?searchTerm=${searchTerm}`);
                const data = await response.json();
                setExercises(data.map((exercise: { name: string }) => exercise.name));
            } catch (error) {
                console.error('Error fetching exercises:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchExercises();
    }, [searchTerm]);

    return (
        <div>
            <h1>Exercises</h1>
            <p>Search for exercises:</p>

            {/* Search bar */}
            <input
                type="text"
                placeholder="Search exercises..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    marginBottom: '10px',
                    padding: '5px',
                    width: '100%',
                }}
            />

            {/* Display loading state */}
            {loading && <p>Loading...</p>}

            {/* Display exercises */}
            <ul>
                {exercises.length > 0 ? (
                    exercises.map((exercise) => <li key={exercise}>{exercise}</li>)
                ) : (
                    !loading && <li>No exercises found</li>
                )}
            </ul>
        </div>
    );
};

export default Exercices;