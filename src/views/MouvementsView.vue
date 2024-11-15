<script>
import { ref, watch } from 'vue'
import { useSearchStore } from '../store'

export default {
  setup() {
    const { searchQuery } = useSearchStore()
    const highlights = ref([
      {
        title: 'Squat',
        description:
          "Tenez-vous droit, les pieds écartés, puis baissez votre corps jusqu'à ce que vos cuisses soient parallèles au sol. Cet exercice cible les cuisses et les fessiers.",
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450789/squat_yyv2ar.gif',
      },
      {
        title: 'Twists Russe',
        description:
          'Le Twist Russe s’effectue en ayant le buste penché en arrière à 45°, et les pieds légèrement décollés du sol. Ainsi, tout en maintenant votre équilibre, vous allez devoir effectuer des mouvements de rotation pour amener vos mains de part et d’autre de vos hanches. Pour muscler ses abdos, il ne faut pas se contenter de bouger ses bras de gauche à droite. Le mouvement doit initier une véritable rotation contrôlée de votre buste mais surtout une contraction volontaire de votre sangle abdominale. A chaque répétition, vous devez sentir vos obliques travailler. Lors de twists russes, les muscles obliques externes de l’abdomen sont les premiers sollicités. Ensuite, étant donné qu’il n’est pas possible d’isoler complètement les obliques, le muscle grand droit de l’abdomen participe également au mouvement.',
        image:
          'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450789/twistsRusse_f0ujje.jpg',
      },
      {
        title: 'Planche Dynamique',
        description:
          "Placez-vous en position Planche, sur vos coudes, et le dos en position neutre. En tendant un bras puis l'autre, placez vous en position de Pompe, les bras tendus. Revenez ensuite dans la position de départ. Alternez l'ordre des bras à chaque répétition. Les principaux muscles travaillés pour la planche dynamique sont les abdominaux et les triceps.",
        image:
          'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450788/plancheDynamique_hmuwka.gif',
      },
      {
        title: 'Pompe',
        description:
          "Face au sol, le corps repose uniquement sur les deux pieds et les deux mains. Les pieds sont joints, et les mains écartées un peu plus loin que l'envergure des épaules. Le but de l'exercice est d'abaisser tout le corps en restant droit, grâce à l'unique travail des bras. (les muscles fessiers et abdominaux doivent être contractés afin de garder le corps droit. Les coudes ne doivent pas pointer vers l'extérieur mais doivent rester le long du corps de manière à former un angle de 0 à 40° avec celui-ci) Cet exercices sollicite principalement le grand pectoral, les triceps et les deltoïdes antérieurs (avec des avantages auxiliaires pour le reste des deltoïdes, le serratus antérieur, le coraco brachial et l'ensemble du midside).",
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450788/pompe_hpiwoe.gif',
      },
      {
        title: 'Planche Latéral',
        description:
          'Tenez vous debout, les pieds joints et les bras baissés, sautez et écartez les bras ainsi que les jambes et vous atterrissez, puis vous sautez et vous rapprochez les pieds et les bras à nouveau. Cet exercice renforce le cardio et fait travailler tout le corps.',
        image:
          'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450788/plancheLateral1_q9dms8.jpg',
      },
      {
        title: 'Pompe sur les genoux',
        description:
          'Les pompes sur les genoux, comme son nom l’indique est un exercice semblable aux Pompes mais avec les genoux au sol. Placez donc les genoux par terre, les mains sous les épaules et croisez les pieds. Procédez ensuite au même schéma que les Pompes. Cette exercice travaille les mêmes groupes musculaire.',
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/kneePompe_acng8u.gif',
      },
      {
        title: 'Pont',
        description:
          'Etendez-vous sur le dos avec les genoux repliés. Contractez vos fessiers et vos abdominaux et soulevez vos hanches le plus haut possible tout en conservant les épaules au sol. Tenez la position. Le Pont sollicite gentiment votre dos, vos fessiers et vos cuisses',
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450788/pont_s6iq4z.jpg',
      },
      {
        title: 'Squat avec saut',
        description:
          "Le squat avec saut, comme son nom l'indique, est un exercice qui combine un Squat et un saut vertical. Il cible particulièrement les muscles de vos jambes et vous permet de gagner en tonus musculaire. Comme tout exercice pliométrique, il est idéal pour gagner en explosivité et en puissance",
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/JumpSquat_un73gz.gif',
      },
      {
        title: 'Planche',
        description:
          "la planche, consiste à se positionner face au sol, en appui sur les pointes de pied et les avant-bras, coudes à l'aplomb des épaules. Dans cette position, le segment  jambes-bassin-tronc ) est aligné et les muscles abdominaux et fessiers sont contractés Cet exercice sollicitent les muscles de l'abdomen et du dos en profondeur, et participent au maintien et à la protection de la colonne vertébrale.",
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450788/planche_pihdfz.jpg',
      },
      {
        title: 'Jumping Jack',
        description:
          'Tenez vous debout, les pieds joints et les bras baissés, sautez et écartez les bras ainsi que les jambes et vous atterrissez, puis vous sautez et vous rapprochez les pieds et les bras à nouveau. Cet exercice renforce le cardio et fait travailler tout le corps.',
        image:
          'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/jumpingJack_jtnn7o.gif',
      },
      {
        title: 'Fente de révérence',
        description:
          "Tenez-vous debout avec un écartement des pieds légèrement supérieur à la largeur des épaules, les orteils orientés vers l'avant.Gardez une position fixe et maintenez votre bassin dans une position neutre, les bras détendus le long du corps.Déplacez une jambe vers l'arrière et vers l'intérieur pour prendre une position de fente avec les jambes croisées. À partir de cette position, redressez-vous pour changer de jambe et effectuez une autre fente avec les jambes croisées. L'autre jambe passe devant. Inspirez en position basse et expirez et en changeant de jambe. Cette exercice renforce vos cuisses et vos fessiers. Principalement les quadriceps (droit fémoral, vaste latéral, vaste intermédiaire, vaste médial) et les trois faisceaux musculaires des fessiers (petit, moyen et grand).",
        image:
          'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/fenteDeReverence_n71jbc.gif',
      },
      {
        title: 'Crunch bras croisés',
        description:
          'Croisez les bras sur la poitrine et procédez à un Crunch Cet exercice renforce principalement les oblique et les hanches ainsi que les abdominaux.',
        image:
          'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/crunchCrois%C3%A9_uikb0o.gif',
      },
      {
        title: 'Crunch type vélo',
        description:
          'Couchez-vous à plat sur le dos. Fléchissez les genoux (à un angle de 45 degrés à partir de la tête), et placez les deux mains derrière le bas de la tête. Approchez un genou vers la poitrine en étirant l’autre. En même temps, tournez le haut du corps afin que le coude opposé touche le genou de la jambe fléchie. Ne forcez pas sur votre cou Alternez les côtés tout en pédalant. Le crunch vélo sert à façonner vos muscles abdominaux, qui englobent la totalité du torse. Le renforcement de votre torse améliorera votre posture, en plus d’amoindrir l’usure normale de la colonne, ce qui vous permettra de respirer profondément.',
        image:
          'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/crunchVelo_pbj4tf.gif',
      },
      {
        title: 'Fente',
        description:
          "Pour faire une fente avant, mettez-vous debout avec les pieds écartés à la même largeur que votre bassin. Votre dos est bien droit (vos mains posées sur vos hanches). Ensuite, faites un pas en avant et fléchissez vos jambes . Le genou de votre jambe qui est restée en arrière doit venir toucher le sol. Ensuite, redressez-vous en poussant sur votre pied avant et remettez-vous en position de départ. Refaites la même chose avec l’autre jambe. Veillez à bien respirer et à ce que le talon de la jambe à l'arrière soit bien décollé. Les fentes font énormément travailler vos quadriceps ainsi que le grand, le moyen et le petit fessier, les mollets et l’arrière des cuisses ainsi que les adducteurs. Elles font également travailler vos abdominaux.",
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450786/fente_xahtg1.gif',
      },
      {
        title: 'Burpees',
        description:
          'Mettez vous debout, pieds largeur d’épaules, orteils tournés vers l’extérieur, comme si vous alliez faire un Squat, vous descendez en Squat classique, en pliant les genoux et en repoussant les fessiers vers l’arrière. A la différence que vous continuez le mouvement en posant vos mains au sol. Balancez vos pieds vers l’arrière pour arriver en position de Planche puis effectuez une Pompe. Au sol, vous créez une impulsion en repoussant fortement dans les mains et en gainant vos abdominaux (fermement contractés) afin de relever votre buste et de ramener vos pieds vers l’avant. Vous revenez ainsi en position de Squat (avec les mains au sol). Sautez verticalement en pressant dans vos talons(comme pour un Squat avec saut). Les Burpees sollicitent la quasi-totalité de vos groupes musculaires. Ils permettent aussi d’augmenter votre endurance musculaire ainsi que vos capacités cardiovasculaires.',
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450786/burpees_r0kbxq.gif',
      },
      {
        title: 'Dips',
        description:
          "La position de départ doit respecter l'alignement vertical des épaules et des mains, barres parallèles et distantes de la largeur des épaules. La première flexion du dips doit être lente et maîtrisée. (Elle doit s'arrêter lorsque les bras forment un angle droit avec les avant-bras pour les débutants). Dans la descente comme dans la montée les coudes ne s'écartent pas et les épaules demeurent dégagées en rotation externe. Le poignet est ferme et non-fléchi. Le poids total est réparti sur la paume de la main et non sur les doigts. le dips muscle surtout les triceps pour les bras mais il fait aussi travailler les pectoraux, les faisceaux antérieurs du deltoïde, l'anconé, un petit muscle au niveau de la partie postérieure du coude et le grand dorsal.",
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450786/dips_u8xbwd.gif',
      },
      {
        title: 'Crunch',
        description:
          'Position de départ allongé sur le sol. Les mains peuvent être placées sur la tête au niveau des tempes,ou encore le long du corps (plus facile). Evitez de les positionner derrière la nuque. Les pieds posés sur le sol, près des fesses On peut aussi placer les cuisses à la verticale, genoux fléchis et écartés, pieds croisés, de sorte à ne pas cambrer le bas du dos lors du mouvement.(Attention, plus les jambes sont surélevées voire tendues, plus la difficulté augmente.) Enrouler le buste vers l’avant en contractant les abdominaux. (Les épaules ne décollent que de quelques centimètres du sol, et le bas du dos et les hanches restent fixes).Le retour à la position de départ doit être réalisé sans à-coups, en conservant la contraction et la tension dans le muscle. Le Crunch sollicite surtout le grand droit des abdominaux, et secondairement les muscles obliques situés sur le côté de la taille.',
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450786/crunch_unborq.gif',
      },
      {
        title: 'Avion',
        description:
          'Mettez vous à quatre pattes sur le sol, puis étirez votre jambe (droite) et votre bras (gauche ) simultanément. Maintenez vos hanches et vos épaules parallèles ( votre dos doit être droit ) puis faite la même chose avec l’autre jambe et l’autre bras. Cet exercice fait travailler l’abdomen, le bas du dos, les fessiers et les cuisses.',
        image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450786/avion_gitlfx.gif',
      },
      {
        title: 'Mountain Climber',
        description:
          'Positionnez-vous face au sol, en appui sur les mains et les pointes de pieds. Vos jambes et vos bras sont tendus, mains à l’aplomb des épaules, en position de Pompe.Veillez à avoir un alignement segmentaire correct (cuisses-bassin-tronc alignés), abdos et fessiers contractés, regard vers le sol. Fléchissez une jambe tout en gardant l’autre bien tendue, toujours en appui sur vos pointes de pieds. L’exercice consiste alors à ramener rapidement et alternativement les genoux gauche et droit vers l’avant. le mountain climber sollicite l’ensemble des groupes musculaires, et particulièrement les jambes, les abdos, les bras, ainsi que les fléchisseurs de la hanche.',
        image:
          'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/mountainClimb_vf5zra.gif',
      },
    ])

    const filteredHighlights = ref([])
    const currentIndex = ref(0)
    const showText = ref(false)

    // Filter movements based on the search query
    const filterMovements = () => {
      const query = searchQuery.value.toLowerCase()
      filteredHighlights.value = highlights.value.filter((item) =>
        item.title.toLowerCase().includes(query),
      )
    }

    watch(searchQuery, filterMovements, { immediate: true })

    const setActive = (index) => {
      currentIndex.value = index
    }

    const toggleText = () => {
      showText.value = !showText.value
    }

    return {
      filteredHighlights,
      currentIndex,
      showText,
      setActive,
      toggleText,
    }
  },
}
</script>

<template>
  <main :class="{ 'center-content': filteredHighlights.length === 1 }">
    <section v-if="filteredHighlights.length > 0" class="highlight-carousel">
      <div class="carousel">
        <div
          v-for="(highlight, index) in filteredHighlights"
          :key="highlight.title"
          :class="['carousel-item', { active: currentIndex === index }]"
          @click="setActive(index)"
        >
          <img :src="highlight.image" alt="Highlight Image" />
          <div class="highlight-info" v-if="currentIndex === index">
            <h2>{{ highlight.title }}</h2>
            <div class="arrow">
              <font-awesome-icon :icon="['fas', 'arrow-up']" @click="toggleText" />
              <div v-if="showText" class="text-box">{{ highlight.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <p v-else class="no-results">Aucun exercice ne correspond à votre recherche.</p>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  background-color: var(--black);
}

.highlight-carousel {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
}

.carousel {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.carousel-item {
  position: relative;
  width: 350px;
  height: 450px;
  opacity: 0.5;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  cursor: pointer;
  transform: scale(0.8);
}

.carousel-item.active {
  transform: scale(1);
  opacity: 1;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.highlight-info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  color: #ffffff;
  background-color: var(--black);
  padding: 10px;
  border-radius: 5px;
}

.arrow {
  text-align: center;
  font-size: 20px;
  margin-top: 5px;
}

.text-box {
  margin-top: 5px;
  color: #cccccc;
}

svg {
  color: var(--yellow);
}

.no-results {
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
}
</style>
