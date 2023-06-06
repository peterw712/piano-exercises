function generateRandomExercise() {
    const selectedKeys = Array.from(document.querySelectorAll('input[name="key"]:checked')).map(el => el.value);
    const selectedExercises = Array.from(document.querySelectorAll('input[name="exercise"]:checked')).map(el => el.value);

    if (selectedKeys.length === 0 || selectedExercises.length === 0) {
        alert("Please select at least one key and one exercise");
        return;
    }

    // Generate a random exercise.
    const key = selectedKeys[Math.floor(Math.random() * selectedKeys.length)];
    const exercise = selectedExercises[Math.floor(Math.random() * selectedExercises.length)];

    // Display it.
    document.getElementById('exerciseDisplay').innerText = `${key} ${exercise}`;

    // Make the 'Randomize Again' button visible.
    document.getElementById('randomizeAgainButton').style.display = 'block';
}

document.getElementById('randomizeButton').addEventListener('click', generateRandomExercise);
document.getElementById('randomizeAgainButton').addEventListener('click', generateRandomExercise);
