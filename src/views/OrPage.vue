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
                'Jumping Jack 20s',
                'Pompes x5',
                'Squat x15',
                'Fente de révérence x16',
                'Crush bras croisé x15',
                'Pompe sur les genoux x8',
                'Planche sur la gauche 10s',
                'Planche sur la droite 10s',
              ],
            },
            {
              day: 2,
              exercises: [
                'Jumping jack 20s',
                'Pompe contre le mur x12',
                'Twist russe x20',
                'Fente x20',
                'Mountain climber x20',
                'Fente et monté de genoux x8',
                'Fente et monté de genoux x8',
                'Planche 20s',
              ],
            },
            {
              day: 3,
              exercises: [
                'Lever de genoux 25s',
                'Dips x10',
                'Avion x25',
                'Crunch a l’envers x20',
                'Lever de genoux 25s',
                'Pompes sur les genoux x12',
                'Chaise 20s',
              ],
            },
            {
              day: 4,
              exercises: [
                'Lever de genoux 25s',
                'Squats x20',
                'Crunch bras croisés x22',
                'Pompes bras écarté x10',
                'Fente de révérence x26',
                'Pont 30s',
              ],
            },
            { day: 5, exercises: ['Repos'] },
            {
              day: 6,
              exercises: [
                'Burpees x5',
                'Squat avec saut x8',
                'Pompes sur les genoux x15',
                'Twist russe x22',
                'Fente et montés de genoux gauche x10',
                'Fente et montés de genoux droit x10',
                'Planche 30s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Lever de genoux 30s',
                'Squat x18',
                'Pompes contre un mur x18',
                'Fente de révérence x28',
                'Crunch type vélo x20',
                'Avion x28',
                'Planches dynamique x4',
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
                'Lever de genoux 20s',
                'Crunch x25',
                'Avion x22',
                'Fente x30',
                'Pompes avec mains surélevées x8',
                'Planche latéral gauche 20s',
                'Planche latéral droite 20s',
              ],
            },
            {
              day: 2,
              exercises: [
                'Jumping jack 30s',
                'Pompes x122',
                'Crunch bras croisé x25',
                'Lever de genoux 30s',
                'Fente de révérence x30',
                'Pompes pied surélevé x8',
                'Crunch bras croisés x22',
                'Planche dynamique x3',
                'Chaise 40s',
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
                'Jumping jack 30s',
                'Crunch x28',
                'Avion x26',
                'Dips x10',
                'Pompes contre un mur x22',
                'Crunch type vélo x22',
                'Squat x24',
                'Planche sur la droite x20',
                'Planche sur la gauche x20',
              ],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux x30s',
                'Squats avec saut x15',
                'Crunch bras croisé x28',
                'Pompes sur les genoux x15',
                'Jumping jack 30s',
                'Twist russe x40',
                'Fente x32',
                'Pompes bras écarté x10',
                'Planche 40s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 30s',
                'Crunch x30',
                'Jumping jack 30s',
                'Pompes contre un mur x24',
                'Mountain climber x28',
                'Crunch type vélo x24',
                'Fente de révérence x32',
                'Pont 40s',
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
                'Jumping jack 30ss',
                'Crunch x26',
                'Fente x34',
                'Pompes contre un mur x26',
                'Crunch type vélo x22',
                'Squats x26',
                'Planche 50s',
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
                'Fente x32',
                'Pompes bras écarté x12',
                'Squat avec saut x18',
                'Pont 30s',
                'Pompes bras surélevé x12',
                'Fente de révérences x32',
                'Planche latéral gauche 30s',
                'Squat avec saut x18',
                'Planche latéral droite 30s',
              ],
            },
            {
              day: 5,
              exercises: [
                'Jumping jack 30s',
                'Squats x30',
                'Dips x10',
                'Crunch type vélo x38',
                'Burpees x12',
                'Planche dynamique x8',
              ],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux 30s',
                'Fente x34',
                'Fente de révérence x34',
                'Mountain climber x40',
                'Jumping jack 30s',
                'Dips x12',
                'Squats x32',
                'Pompes avec jambe surélevé x8',
                'Pont 40s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 35s',
                'Fente x34',
                'Squats x34',
                'Pompe sur les genoux x20',
                'Crunch a l’envers x25',
                'Fente x34',
                'Planche 40s',
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
                'Jumping jack 30s',
                'Crunch x25',
                'Fente de révérence x34',
                'Pompes contre un mur x18',
                'Crunch type vélo x25',
                'Pompes bras écarté x14',
                'Squat avec saut x20',
                'Planche sur la droite x30',
                'Planche sur la gauche x30',
              ],
            },
            {
              day: 4,
              exercises: [
                'Lever de genoux 30s',
                'Pompes surélevés x15',
                'Crunch bras croisés x30',
                'Mountain climber x44',
                'Squat x30',
                'Chaise 30s',
                'Pompes x20',
                'Pont 30s',
              ],
            },
            {
              day: 5,
              exercises: [
                'Jumping jack 30s',
                'Dips x12',
                'Squat avec saut x30',
                'Pompes sur les genoux x20',
                'Twist russe x36',
                'Burpees x15',
                'Fente et montés de genoux gauche x20',
                'Fente et montés de genoux droit x20',
                'Planche 40s',
              ],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux 30s',
                'Squat x30',
                'Pompes sur les genoux x12',
                'Fente de révérence x30',
                'Crunch type vélo x30',
                'Pompes bras écarté x15',
                'Avion x40',
                'Planches dynamique x8',
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
    <h1>Programme Or - 4 Semaines</h1>

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
  color: var(--gold);
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
  color: var(--gold);
  border-bottom: 2px solid var(--gold);
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
