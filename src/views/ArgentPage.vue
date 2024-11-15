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
              exercises: [
                'Jumping jack 15s',
                'Crunch x10',
                'Fente x12',
                'Pompes sur les genoux x5',
                'Pont 15s',
              ],
            },
            {
              day: 2,
              exercises: [
                'Lever de genoux 15s',
                'Avion x12',
                'Dips x6',
                'Squat x12',
                'Planche 15s',
              ],
            },
            {
              day: 3,
              exercises: [
                'Jumping jack 20s',
                'Fente de révérence x12',
                'Crunch bras croisé x14',
                'Pompe x5',
                'Planche latérale gauche 10s',
                'Planche latérale droite 10s',
              ],
            },
            {
              day: 4,
              exercises: [
                'Lever de genoux 20s',
                'Pompes contre un mur x8',
                'Squat x15',
                'Twist russe x16',
                'Pont 20s',
              ],
            },
            { day: 5, exercises: ['Repos'] },
            {
              day: 6,
              exercises: [
                'Lever de genoux 30s',
                'Mountain climber x16',
                'Crunch x16',
                'Squats x18',
                'Pompes sur les genoux x10',
                'Planche 30s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 30s',
                'Avion x18',
                'Fente de révérence x20',
                'Dips x8',
                'Planche latérale gauche 15s',
                'Planche latérale droite 15s',
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
                'Jumping jack 30s',
                'Fente x22',
                'Twist russe x22',
                'Pompe x8',
                'Pont 30s',
              ],
            },
            {
              day: 2,
              exercises: [
                'Jumping jack 30s',
                'Crunch x16',
                'Fente de révérence x18',
                'Pompes contre un mur x14',
                'Crunch type vélo x10',
                'Planche 35s',
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
              exercises: [
                'Lever de genoux 30s',
                'Pompes sur les genoux x12',
                'Mountain climber x18',
                'Dips x10',
                'Crunch bras croisé x20',
                'Planche latéral droite 20s',
                'Planche latéral gauche 20s',
              ],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux 30s',
                'Pompes bras écarté x8',
                'Avion x18',
                'Squats x18',
                'Planche 30s',
                'Fente x24s',
                'Pont 30s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 30s',
                'Crunch x20',
                'Jumping jack 30s',
                'Pompes contre un mur x16',
                'Mountain climber x20',
                'Crunch type vélo x12',
                'Fente de révérence x24',
                'Planches 35s',
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
                'Jumping jack 30s',
                'Crunch x22',
                'Fente x26',
                'Pompes contre un mur x18',
                'Crunch type vélo x10',
                'Squats x20',
                'Planche 40s',
              ],
            },
            {
              day: 2,
              exercises: ['Repos'],
            },
            {
              day: 3,
              exercises: ['Repos'],
            },
            {
              day: 4,
              exercises: [
                'Lever de genoux 30s',
                'Pompes sur les genoux x12',
                'Mountain climber x22',
                'Dips x10',
                'Squats x20',
                'Crunch bras croisé x22',
                'Planche latéral droite 20s',
                'Planche latéral gauche 20s',
              ],
            },
            {
              day: 5,
              exercises: [
                'Lever de genoux 35s',
                'Pompes bras écarté x8',
                'Avion x20',
                'Squats x20',
                'Planche 30s',
                'Fente x26',
                'Pont 35ss',
              ],
            },
            {
              day: 6,
              exercises: [
                'Jumping jack 30s',
                'Crunch x24',
                'Jumping jack 30s',
                'Pompes contre un mur x20',
                'Mountain climber x24',
                'Fente de révérence x24',
                'Crunch type vélo x12',
                'Chaise 30s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 35s',
                'Fente x24',
                'Squats x22',
                'Pompe sur les genoux x14',
                'Crunch x20',
                'Fente x24',
                'Planche 35s',
              ],
            },
          ],
        },
        {
          week: 4,
          days: [
            {
              day: 1,
              exercises: ['Repos'],
            },
            {
              day: 2,
              exercises: ['Repos'],
            },
            {
              day: 3,
              exercises: [
                'Jumping jack 40s',
                'Fente x28',
                'Crunch x26',
                'Pompes sur les genoux x16',
                'Fente de révérence x24',
                'Mountain climber x28',
                'Dips x12',
                'Crunch x26',
                'Chaise 35s',
              ],
            },
            {
              day: 4,
              exercises: [
                'Lever de genoux 40s',
                'Pompes main surélevé x12',
                'Fente et monté de genoux',
                'gauche x8',
                'Fente et monté de genoux',
                'droit x8',
                'Crunch x28',
                'Squats x24',
                'Avion x26',
                'Fente x28',
                'Planche latéral droite 25s',
                'Planche latéral gauche 25s',
              ],
            },
            {
              day: 5,
              exercises: [
                'Burpess x5',
                'Twist russe x26',
                'Squats x24',
                'Fente de révérence x26',
                'Crunch bras croisé x22',
                'Fente x28',
                'Dips x12',
                'Crunch x28',
                'Planche 40s',
              ],
            },
            {
              day: 6,
              exercises: [
                'Jumping jack 45s',
                'Fente x30',
                'Crunch x30',
                'Squats x26',
                'Lever de genoux 30s',
                'Pompes sur les genoux x18',
                'Fente et monté de genoux gauche x10',
                'Fente et monté de genoux droit x10',
                'Crunch x30',
                'Pompes contre un mur x24',
                'Pont 45s',
              ],
            },
            {
              day: 7,
              exercises: ['Repos'],
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
    <h1>Programme Argent - 4 Semaines</h1>

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
  color: var(--silver);
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
  color: var(--silver);
  border-bottom: 2px solid var(--silver);
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
