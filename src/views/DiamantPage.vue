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
                'Pompes sur les genoux x10',
                'Crunch à l’envers x20',
                'Dips x10',
                'Fente et montés de genoux gauche x15',
                'Fente et montés de genoux droit x15',
                'Pompe bras écarté x10',
                'Twist russe x20',
                'Lever de genoux 20s',
                'Planche 3',
                '',
              ],
            },
            {
              day: 2,
              exercises: [
                'Burpees x5',
                'Crunch bras croisés x20',
                'Fente x20',
                'Pompes x10',
                'Squats x20',
                'Lever de genoux 20s',
                'Avion x20',
                'Planche dynamique x5',
              ],
            },
            {
              day: 3,
              exercises: [
                'Jumping jack 25s',
                'Crunch x25',
                'Fente de révérence x20',
                'Pompes contre un mur x15',
                'Crunch type vélo x25',
                'Pompes bras écarté x10',
                'Squat avec saut x20',
                'Planche sur la droite x30',
                'Planche sur la gauche x30',
              ],
            },
            {
              day: 4,
              exercises: [
                'Lever de genoux 25s',
                'Pompes surélevés x15',
                'Crunch bras croisés x30',
                'Mountain climber x24',
                'Squat x25',
                'Chaise 30s',
                'Pompes x15',
                'Pont 3',
                '',
              ],
            },
            { day: 5, exercises: ['Repos'] },
            {
              day: 6,
              exercises: [
                'Jumping jack 30s',
                'Dips x12',
                'Squat avec saut x30',
                'Pompes sur les genoux x20',
                'Twist russe x36',
                'Burpees x15',
                'Fente et montés de genoux gauche x30',
                'Fente et montés de genoux droit x30',
                'Planche 4',
                '',
              ],
            },
            {
              day: 7,
              exercises: [
                'Lever de genoux 30s',
                'Squat x40',
                'Pompes sur les genoux x12',
                'Fente de révérence x40',
                'Crunch type vélo x40',
                'Pompes bras écarté x15',
                'Avion x40',
                'Planches dynamique ',
                '',
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
                'Squats avec sauts x35',
                'Crunch à l’envers x40',
                'Pompes pied surélevé x10',
                'Fentes x40',
                'Pompe bras écarté x15',
                'Pont 50s',
                'Planche dynamique ',
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
                'Jumping jack 40s',
                'Crunch x40',
                'Avion x40',
                'Dips x15',
                'Pompes contre un mur x20',
                'Crunch type vélo x40',
                'Pompes bras écarté x15',
                'Squat x40',
                'Planche sur la droite x40',
                'Planche sur la gauche x',
                '',
              ],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux 30s',
                'Pompes x20',
                'Crunch bras croisés x40',
                'Mountain climber x36',
                'Squat avec saut x40',
                'Pompe diamant x12',
                'Fente x40',
                'Pont 30s',
                'Planche 50s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 30s',
                'Crunch x40',
                'Burpees x20',
                'Squats x40',
                'Crunch type vélo x40',
                'Twist russe x50',
                'Avion x40',
                'Fente de révérence x40',
                'Planches dynamique x12',
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
                'Cunch x40',
                'Squat avec saut x30',
                'Crunch type vélo x40',
                'Pompes jambe surélevé x18',
                'Fente x40',
                'Pompe bras écarté x20',
                'Mountain climber x40',
                'Lever de genoux 30s',
                'Squat x30',
                'Twist russe x60',
                'Planche 60s',
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
                'Squats x40',
                'Fente de révérence x30',
                'Crunch bras crosiée x40',
                'Pompes x20',
                'Fente et monté de genoux droit x40',
                'Fente et monté de genoux gauche x40',
                'Avion x60',
                'Squat avec saut x30',
                'Crunch x40',
                'Pont 60s',
              ],
            },
            {
              day: 5,
              exercises: [
                'Jumping jack 40s',
                'Squats x40',
                'Dips x15',
                'Crunch type vélo x40',
                'Burpees x25',
                'Planche dynamique x15',
              ],
            },
            {
              day: 6,
              exercises: [
                'Lever de genoux 30s',
                'Pompes main surélevé x20',
                'Fente de révérence x40',
                'Twist russe x60',
                'Fente x40',
                'Crunch type vélo x40',
                'Lever de genoux 30s',
                'Pompe diamant x12',
                'Pont 30s',
                'Planche 60s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 30s',
                'Crunch x40',
                'Squats x40',
                'Jumping jack 20s',
                'Squats avec saut x40',
                'Pompes x20',
                'Crunch a l’envers x40',
                'Burpees x25',
                'Fente et monté de genoux gauche x40',
                'Fente et monté de genoux droit 40',
                'Crunch x40',
                'Pompes x20',
                'Planche latéral gauche 40s',
                'Planche latéral droit 40s',
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
                'Burpees x20',
                'Cunch x40',
                'Squat avec saut x35',
                'Pompes jambe surélevé x25',
                'Squat x40',
                'Jumping jack 35s',
                'Pompe diamant x20',
                'Mountain climber x40',
                'Fente de révérence x40',
                'Crunch type vélo x40',
                'Crunch a l’envers x40',
                'Jumping jack 35s',
                'Fente x40',
                'Pont 90s',
              ],
            },
            {
              day: 2,
              exercises: [
                'Lever de genoux 35s',
                'Fente x40',
                'Squat x40',
                'Pompes pied surélevé x25',
                'Fente de révérence x40',
                'Pont jambe gauche 40s',
                'Pont jambe droite 40s',
                'Pompes bras écarté x25',
                'Fente puis lever de genoux gauche x40',
                'Fente puis lever de genoux droit x40',
                'Avion x60',
                'Planche 90s',
              ],
            },
            {
              day: 3,
              exercises: [
                'Burpees x35',
                'Crunch bras croisé x40',
                'Pompes x20',
                'Squats x40',
                'Planche dynamique x15',
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
                'Jumping jack 40s',
                'Crunch x40',
                'Squats avec saut x40',
                'Dips x20',
                'Fente de révérence x40',
                'Lever de genoux 40s',
                'Crunch type vélo x40',
                'Pompes diamant x25',
                'Fente x40',
                'Twiste russe x70',
                'Planche latéral gauche 60s',
                'Planche latéral droite 60s',
              ],
            },
            {
              day: 7,
              exercises: [
                'Jumping jack 35s',
                'Crunch x40',
                'Squats avec saut x40',
                'Jumping jack 35s',
                'Fente et monté de genoux gauche x40',
                'Fente et monté de genoux droit x40',
                'Crunch a l’envers x40',
                'Burpees x25',
                'Avions x80',
                'Fente x40',
                'Crunch x40',
                'Pont 90s',
                'Pompes x30',
                'Crunch type vélo x40',
                'Squat x40',
                'Dips x25',
                'Fente x40',
                'Planche latéral gauche 40s',
                'Planche latéral droit 40s',
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
    <h1>Programme Diamant - 4 Semaines</h1>

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
  color: var(--diamond);
  margin-bottom: 20px;
}

/* Navigation Buttons Styling */
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

/* Week Section Styling */
.week-section {
  margin-bottom: 30px;
  margin-top: 40px;
}

.week-section h2 {
  color: var(--diamond);
  border-bottom: 2px solid var(--diamond);
  padding-bottom: 5px;
  margin-bottom: 10px;
}

/* Week Days Grid */
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
