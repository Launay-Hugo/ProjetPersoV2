<script>
export default {
  data() {
    return {
      currentWeekIndex: 0, // Indice de la semaine actuellement affichée
      program: [
        {
          week: 1,
          days: [
            {
              day: 1,
              exercises: ['Jumping jack 10s', 'Crunch x5', 'Fente x8', 'Pont 10s'],
            },
            {
              day: 2,
              exercises: ['Lever de genoux 10s', 'Avion x8', 'Squat x8', 'Planche 15s'],
            },
            {
              day: 3,
              exercises: [
                'Jumping jack 15s',
                'Fente x10',
                'Crunch x8',
                'Pompe x5',
                'Planche latéral gauche 10s',
                'Planche latéral droite 10s',
              ],
            },
            {
              day: 4,
              exercises: ['Lever de genoux 15s', 'Dips 5', 'Squat x10', 'Pont 20s'],
            },
            { day: 5, exercises: ['Repos'] },
            {
              day: 6,
              exercises: [
                'Lever de genoux 20s',
                'Crunch x10',
                'Squats x15',
                'Pompes sur les genoux x10',
                'Planche 2',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 15s',
                'Avion x12',
                'Fente de révérence x10',
                'Pompe contre un mur x8',
                'Planche latéral gauche 10s',
                'Planche latéral droite 1',
              ],
            },
          ],
        },
        {
          week: 2,
          days: [
            {
              day: 1,
              exercises: [
                'Lever de genoux 15s',
                'Crunch x10',
                'Avion x12',
                'Pompe contre un mur x10',
                'Planche 20s',
              ],
            },
            {
              day: 2,
              exercises: ['Lever de genoux 15s', 'Crunch bras croisés x8', 'Squat x8', 'Pont 20s'],
            },
            {
              day: 3,
              exercises: ['Repos'],
            },
            {
              day: 4,
              exercises: ['Repos'],
            },
            {
              day: 5,
              exercises: [
                'Jumping jack 20s',
                'Pompe x5',
                'Fente x12',
                'Planche latéral gauche 10s',
                'Planche latéral droite 10s',
              ],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux 20s',
                'Crunch x15',
                'Squats x18',
                'Pompes sur les genoux x10',
                'Planche 25s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 20s',
                'Avion x15',
                'Fente de révérence x10',
                'Pompe contre un mur 15',
                'Pont 25s',
              ],
            },
          ],
        },
        {
          week: 3,
          days: [
            {
              day: 1,
              exercises: [
                'Jumping jack 20sec',
                'Crunch x15',
                'Avion x12',
                'Pompe contre un mur x10',
                'Planche 20s',
              ],
            },
            {
              day: 2,
              exercises: [
                'Lever de genoux 20s',
                'Crunch bras croisés x12',
                'Squat x12',
                'Pont 25s',
              ],
            },
            {
              day: 3,
              exercises: [
                'Jumping jack 25s',
                'Twists russe x22',
                'Pompe x8',
                'Planche latéral gauche 15s',
                'Planche latéral droite 15s',
              ],
            },
            {
              day: 4,
              exercises: ['Repos'],
            },
            {
              day: 5,
              exercises: ['Repos'],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux 25s',
                'Crunch x18',
                'Squats x20',
                'Pompes sur les genoux x15',
                'Planche 30s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 25s',
                'Avion x20',
                'Fente de révérence x16',
                'Pompe contre un mur x18',
                'Pont 30s',
              ],
            },
          ],
        },
        {
          week: 4,
          days: [
            {
              day: 1,
              exercises: [
                'Jumping jack 20sec',
                'Crush bras croisé x20',
                'Pompe x12',
                'Fente de révérence x20',
                'Planche 20s',
              ],
            },
            {
              day: 2,
              exercises: [
                'Lever de genoux 25s',
                'Squat x18',
                'Pompe contre un mur x20',
                'Pont 25s',
              ],
            },
            {
              day: 3,
              exercises: ['Repos'],
            },
            {
              day: 4,
              exercises: ['Repos'],
            },
            {
              day: 5,
              exercises: ['Jumping jack 30s', 'Dips x10', 'Mountain climber x20', 'Chaise 15s'],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux 25s',
                'Crunch x18',
                'Fente x22',
                'Pompes sur les genoux x15',
                'Planche 30s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Lever de genoux 30s',
                'Squat x20',
                'Pompe sur les genoux x15',
                'Crunch x20',
                'Planche 40s',
              ],
            },
          ],
        },
      ],
    }
  },
  computed: {
    currentWeek() {
      return this.program[this.currentWeekIndex]
    },
  },
  methods: {
    nextWeek() {
      if (this.currentWeekIndex < this.program.length - 1) {
        this.currentWeekIndex += 1
      }
    },
    prevWeek() {
      if (this.currentWeekIndex > 0) {
        this.currentWeekIndex -= 1
      }
    },
  },
}
</script>
<template>
  <div class="program-page">
    <h1>Programme Bronze - 4 Semaines</h1>

    <!-- Navigation entre les semaines -->
    <div class="navigation-buttons">
      <button @click="prevWeek" :disabled="currentWeekIndex === 0">Précédent</button>
      <button @click="nextWeek" :disabled="currentWeekIndex === program.length - 1">Suivant</button>
    </div>

    <!-- Affichage de la semaine sélectionnée uniquement -->
    <div v-if="currentWeek" class="week-section">
      <h2>Semaine {{ currentWeekIndex + 1 }}</h2>
      <div class="week-days">
        <div v-for="(day, dayIndex) in currentWeek.days" :key="dayIndex" class="day">
          <h3>Jour {{ dayIndex + 1 }}</h3>
          <ul>
            <li v-for="(exercise, exerciseIndex) in day.exercises" :key="exerciseIndex">
              {{ exercise }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.program-page {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  margin-top: 20px;
  font-family: 'Roboto Slab', serif;
}

.program-page h1 {
  text-align: center;
  color: var(--bronze);
  margin-bottom: 20px;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 40px;
}

.navigation-buttons button {
  background-color: var(--lowgrey);
  color: var(--yellow);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.navigation-buttons button:disabled {
  color: var(--black);
  cursor: not-allowed;
}

.week-section {
  margin-bottom: 30px;
  margin-top: 40px;
}

.week-section h2 {
  color: var(--bronze);
  border-bottom: 2px solid var(--bronze);
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.week-days {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.day {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.day h3 {
  color: #555;
  font-size: 1.1em;
  margin-bottom: 5px;
}

.day ul {
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
}

.day li {
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}
</style>
