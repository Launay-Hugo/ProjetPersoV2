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
                'Jumping jack 30s',
                'Pompes x5',
                'Crunch x20',
                'Squats x15',
                'Pompes sur les genoux x10',
                'Fentes x20',
                'Planche latéral gauche 15s',
                'Planche latéral droit 15s',
              ],
            },
            {
              day: 2,
              exercises: [
                'Jumping jack 30s',
                'Pompes x7',
                'Fente de révérence x25',
                'Twist russe x26',
                'Avion x20',
                'Lever de genoux 20s',
                'Planche 30s',
              ],
            },
            {
              day: 3,
              exercises: [
                'Lever de genoux 30s',
                'Dips x5',
                'Squats x20',
                'Crunch croisé x20',
                'Pompes sur les genoux x12',
                'Fente x15',
                'Mountain climber x24s',
                'Pont 30s',
              ],
            },
            {
              day: 4,
              exercises: [
                'Jumping jack 30s',
                'Crunch type vélo x14',
                'Squats x25',
                'Pompes avec bras écartés x10',
                'Fente de révérence x30',
                'Planche 35s',
              ],
            },
            { day: 5, exercises: ['Repos'] },
            {
              day: 6,
              exercises: [
                'Burpees x5',
                'Fente x35',
                'Crunch bras croisé x25',
                'Lever de genoux 35s',
                'Planche latéral gauche 20s',
                'Pont 25s',
                'Planche latéral droite 20s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 35s',
                'Crunch x30',
                'Pompes bras surélevés x15',
                'Squats x25',
                'Levé de genoux 35s',
                'Pompes x10',
                'Chaise 40s',
                'Planche 40s',
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
                'Crunch x40',
                'Burpees x10',
                'Lever de genoux 30s',
                'Pompe bras ecarté x12',
                'Avion x40',
                'Fente et monté de genoux gauche x20',
                'Fente et monté de genoux droit x20',
                'Pompes avec mains surélevées x10',
                'Planche latéral gauche 30s',
                'Planche latéral droite 30s',
              ],
            },
            {
              day: 2,
              exercises: [
                'Jumping jack 30s',
                'Pompes x15',
                'Crunch bras croisé x40',
                'Lever de genoux 40s',
                'Fente de révérence x40',
                'Pompes pied surélevé x10',
                'Crunch a l’envers x32',
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
                'Jumping jack 35s',
                'Burpees x12',
                'Crunch x40',
                'Squats x40',
                'Fente de révérence x40',
                'Mountain Climber x40',
                'Fente x30',
                'Avion x40',
                'Pompes main surélevé x 15',
                'Pont 50s',
              ],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux x35s',
                'Squats avec saut x25',
                'Crunch bras croisé x40',
                'Pompes sur les genoux x15',
                'Jumping jack 30s',
                'Twist russe x54',
                'Fente x40',
                'Dips x15',
                'Planche 50s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Burpees x15',
                'Crunch x40',
                'Squat x40',
                'Lever de genoux 40s',
                'Pompes avec bras écartés x18',
                'Crunch type vélo x34',
                'Squats avec saut x30',
                'Pont 40s',
                'Fente et monté de genoux gauche x25',
                'Fente et monté de genoux droit x25',
                'Planche latéral gauche 35s',
                'Planche latéral droite 35s',
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
                'Jumping jack 40s',
                'Crunch a l’envers x40',
                'Fente x40',
                'Pompes x25',
                'Squats x40',
                'Levers de genoux 40s',
                'Avion x60',
                'Fente de révérence x40',
                'Planche dynamique ',
                '',
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
                'Lever de genoux 40s',
                'Fente x40',
                'Pompes bras écarté x20',
                'Squat avec saut x30',
                'Pont 40s',
                'Pompes bras surélevé x20',
                'Fente de révérences x40',
                'Planche latéral gauche 40s',
                'Squat avec saut x20',
                'Planche latéral droite 40s',
              ],
            },
            {
              day: 5,
              exercises: [
                'Burpees x20',
                'Crunch bras croisé x40',
                'Squats x40',
                'Avion x66',
                'Lever de genoux 40s',
                'Crunch à l’envers x40',
                'Dips x20',
                'Planche 60s',
              ],
            },
            {
              day: 6,
              exercises: [
                'Jumping jack 40s',
                'Fente et lever de genoux gauche x40',
                'Fente et monté de genoux droit x40',
                'Pompe contre un mur x25',
                'Twist russe 66',
                'Chaise 60s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Lever de genoux 45s',
                'Fente x40',
                'Crunch type vélo x40',
                'Fente de révérence x40',
                'Mountain climber x72',
                'Jumping jack 45s',
                'Dips x25',
                'Squats x40',
                'Pompes avec jambe surélevé x15',
                'Pont 40s',
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
                'Fente x40',
                'Burpees x25',
                'Lever de genoux 45s',
                'Pompes contre un mur x35',
                'Squats x40',
                'Crunch a l’envers x40',
                'Fente de révérence x40',
                'Pompes bras écarté x25',
                'Lever de genoux 45s',
                'Planche dynamique x10',
              ],
            },
            {
              day: 4,
              exercises: [
                'Jumping jack 60s',
                'Crunch x40',
                'Fente et monté de genoux gauche x40',
                'Fente et monté de genoux droit x40',
                'Twist russe x70',
                'Lever de genoux 60s',
                'Fente de révérence x40 ',
                'Pompes bras écarté x25',
                'Twist russe x70',
                'Fente x40',
                'Pompe sur les genoux x30',
                'Planche latéral gauche 50s',
                'Planche latéral droite 50s',
              ],
            },
            {
              day: 5,
              exercises: [
                'Lever de genoux 60s',
                'Burpees x25',
                'Crunch a l’envers x40',
                'Avion x70',
                'Squats sauté x40',
                'Disps x25',
                'Jumping jack 60s',
                'Crunch type vélo x40',
                'Pompes x25',
                'Pont 60s',
                'Fente x40',
                'Avion x70',
                'Squats sauté x40',
                'Planche 60s',
              ],
            },
            {
              day: 6,
              exercises: [
                'Jumping jack 40s',
                'Fente et lever de genoux gauche x40',
                'Fente et monté de genoux droit x40',
                'Pompe contre un mur x25',
                'Twist russe 66',
                'Chaise 60s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 60s',
                'Fente x40',
                'Crunch bras croisé x40',
                'Dips x30',
                'Squats x40',
                'Lever de genoux 60s',
                'Pompes sur les genoux x30',
                'Fente et montés de genoux gauche x40',
                'Fente et monté de genoux droit x40',
                'Crunch à l’envers x40',
                'Fente de révérence x40',
                'Crunch à l’envers x40',
                'Pompes jambe surélevé x30',
                'Crunch type vélo x40',
                'Fente x40',
                'Planche latéral gauche 60s',
                'Planche latéral droite 6',
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
    <h1>Programme Platine - 4 Semaines</h1>

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
  color: var(--platinium);
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
  color: var(--platinium);
  border-bottom: 2px solid var(--platinium);
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
