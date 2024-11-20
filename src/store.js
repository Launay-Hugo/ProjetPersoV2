import { ref, inject } from 'vue'

export const createSearchStore = () => {
  const searchQuery = ref('')
  const highlights = ref([
    {
      id: 1,
      title: 'Squat',
      description:
        "Tenez-vous droit, les pieds écartés, puis baissez votre corps jusqu'à ce que vos cuisses soient parallèles au sol. Cet exercice cible les cuisses et les fessiers.",
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803387/squat_gtujsb.png',
      searchCount: 0,
      category: ['Jambes', 'Fesier'],
    },

    {
      id: 2,
      title: 'Planche Dynamique',
      description:
        "Placez-vous en position Planche, sur vos coudes, et le dos en position neutre. En tendant un bras puis l'autre, placez vous en position de Pompe, les bras tendus. Revenez ensuite dans la position de départ. Alternez l'ordre des bras à chaque répétition. Les principaux muscles travaillés pour la planche dynamique sont les abdominaux et les triceps.",
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1732034130/brastendu_do6l5x.png',
      searchCount: 0,
      category: ['Abodminaux', 'Bras'],
    },
    {
      id: 3,
      title: 'Crunch type vélo',
      description:
        'Couchez-vous à plat sur le dos. Fléchissez les genoux (à un angle de 45 degrés à partir de la tête), et placez les deux mains derrière le bas de la tête. Approchez un genou vers la poitrine en étirant l’autre. En même temps, tournez le haut du corps afin que le coude opposé touche le genou de la jambe fléchie. Ne forcez pas sur votre cou Alternez les côtés tout en pédalant. Le crunch vélo sert à façonner vos muscles abdominaux, qui englobent la totalité du torse. Le renforcement de votre torse améliorera votre posture, en plus d’amoindrir l’usure normale de la colonne, ce qui vous permettra de respirer profondément.',
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731927242/crunch_velo_jjebwe.png',
      searchCount: 0,
      category: ['Abdominaux', 'Cardio', 'Posture'],
    },

    {
      id: 4,
      title: 'Pompe sur les genoux',
      description:
        'Les pompes sur les genoux, comme son nom l’indique est un exercice semblable aux Pompes mais avec les genoux au sol. Placez donc les genoux par terre, les mains sous les épaules et croisez les pieds. Procédez ensuite au même schéma que les Pompes. Cette exercice travaille les mêmes groupes musculaire.',
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731970765/4pattes_lzimru.png',
      searchCount: 0,
      category: ['Pectoraux', 'Bras'],
    },
    {
      id: 5,
      title: 'Pont',
      description:
        'Etendez-vous sur le dos avec les genoux repliés. Contractez vos fessiers et vos abdominaux et soulevez vos hanches le plus haut possible tout en conservant les épaules au sol. Tenez la position. Le Pont sollicite gentiment votre dos, vos fessiers et vos cuisses',
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731944223/pontv2_c0hl1m.png',
      searchCount: 0,
      category: ['Jambes', 'Posture', 'Fesier'],
    },
    {
      id: 6,
      title: 'Squat avec saut',
      description:
        "Le squat avec saut, comme son nom l'indique, est un exercice qui combine un Squat et un saut vertical. Il cible particulièrement les muscles de vos jambes et vous permet de gagner en tonus musculaire. Comme tout exercice pliométrique, il est idéal pour gagner en explosivité et en puissance",
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731971281/squat2_b8pi1c.png',
      searchCount: 0,
      category: ['Jambes', 'Cardio', 'Fesier'],
    },
    {
      id: 7,
      title: 'Planche',
      description:
        "la planche, consiste à se positionner face au sol, en appui sur les pointes de pied et les avant-bras, coudes à l'aplomb des épaules. Dans cette position, le segment  jambes-bassin-tronc ) est aligné et les muscles abdominaux et fessiers sont contractés Cet exercice sollicitent les muscles de l'abdomen et du dos en profondeur, et participent au maintien et à la protection de la colonne vertébrale.",
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731875735/planchev2_jabamz.png',
      searchCount: 0,
      category: ['Abdominaux', 'Posture'],
    },
    {
      id: 8,
      title: 'Pompe',
      description:
        "Face au sol, le corps repose uniquement sur les deux pieds et les deux mains. Les pieds sont joints, et les mains écartées un peu plus loin que l'envergure des épaules. Le but de l'exercice est d'abaisser tout le corps en restant droit, grâce à l'unique travail des bras. (les muscles fessiers et abdominaux doivent être contractés afin de garder le corps droit. Les coudes ne doivent pas pointer vers l'extérieur mais doivent rester le long du corps de manière à former un angle de 0 à 40° avec celui-ci) Cet exercices sollicite principalement le grand pectoral, les triceps et les deltoïdes antérieurs (avec des avantages auxiliaires pour le reste des deltoïdes, le serratus antérieur, le coraco brachial et l'ensemble du midside).",
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803390/pompe_e23utr.png',
      searchCount: 0,
      category: ['Pectoraux', 'Bras'],
    },
    {
      id: 9,
      title: 'Twists Russe',
      description:
        'Le Twist Russe s’effectue en ayant le buste penché en arrière à 45°, et les pieds légèrement décollés du sol. Ainsi, tout en maintenant votre équilibre, vous allez devoir effectuer des mouvements de rotation pour amener vos mains de part et d’autre de vos hanches. Pour muscler ses abdos, il ne faut pas se contenter de bouger ses bras de gauche à droite. Le mouvement doit initier une véritable rotation contrôlée de votre buste mais surtout une contraction volontaire de votre sangle abdominale. A chaque répétition, vous devez sentir vos obliques travailler. Lors de twists russes, les muscles obliques externes de l’abdomen sont les premiers sollicités. Ensuite, étant donné qu’il n’est pas possible d’isoler complètement les obliques, le muscle grand droit de l’abdomen participe également au mouvement.',
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731944660/twists_shqmtl.png',
      searchCount: 0,
      category: ['Abdominaux'],
    },
    {
      id: 10,
      title: 'Jumping Jack',
      description:
        'Tenez vous debout, les pieds joints et les bras baissés, sautez et écartez les bras ainsi que les jambes et vous atterrissez, puis vous sautez et vous rapprochez les pieds et les bras à nouveau. Cet exercice renforce le cardio et fait travailler tout le corps.',
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731970780/jumping_acbeey.png',
      searchCount: 0,
      category: ['Cardio', 'Jambes'],
    },
    {
      id: 11,
      title: 'Fente de révérence',
      description:
        "Tenez-vous debout avec un écartement des pieds légèrement supérieur à la largeur des épaules, les orteils orientés vers l'avant.Gardez une position fixe et maintenez votre bassin dans une position neutre, les bras détendus le long du corps.Déplacez une jambe vers l'arrière et vers l'intérieur pour prendre une position de fente avec les jambes croisées. À partir de cette position, redressez-vous pour changer de jambe et effectuez une autre fente avec les jambes croisées. L'autre jambe passe devant. Inspirez en position basse et expirez et en changeant de jambe. Cette exercice renforce vos cuisses et vos fessiers. Principalement les quadriceps (droit fémoral, vaste latéral, vaste intermédiaire, vaste médial) et les trois faisceaux musculaires des fessiers (petit, moyen et grand).",
      image:
        'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731934433/fente_de_r%C3%A9v%C3%A9rence_ka0bj7.png',
      searchCount: 0,
      category: ['Jambes', 'Fesier'],
    },
    {
      id: 12,
      title: 'Crunch bras croisés',
      description:
        'Croisez les bras sur la poitrine et procédez à un Crunch Cet exercice renforce principalement les oblique et les hanches ainsi que les abdominaux.',
      image:
        'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731926169/crunch_crois%C3%A9_dnc27x.png',
      searchCount: 0,
      category: ['Abdominaux'],
    },

    {
      id: 13,
      title: 'Fente',
      description:
        "Pour faire une fente avant, mettez-vous debout avec les pieds écartés à la même largeur que votre bassin. Votre dos est bien droit (vos mains posées sur vos hanches). Ensuite, faites un pas en avant et fléchissez vos jambes . Le genou de votre jambe qui est restée en arrière doit venir toucher le sol. Ensuite, redressez-vous en poussant sur votre pied avant et remettez-vous en position de départ. Refaites la même chose avec l’autre jambe. Veillez à bien respirer et à ce que le talon de la jambe à l'arrière soit bien décollé. Les fentes font énormément travailler vos quadriceps ainsi que le grand, le moyen et le petit fessier, les mollets et l’arrière des cuisses ainsi que les adducteurs. Elles font également travailler vos abdominaux.",
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803423/fenteb_vtscyo.png',
      searchCount: 0,
      category: ['Jambes', 'Posture', 'Abdominaux'],
    },
    {
      id: 14,
      title: 'Burpees',
      description:
        'Mettez vous debout, pieds largeur d’épaules, orteils tournés vers l’extérieur, comme si vous alliez faire un Squat, vous descendez en Squat classique, en pliant les genoux et en repoussant les fessiers vers l’arrière. A la différence que vous continuez le mouvement en posant vos mains au sol. Balancez vos pieds vers l’arrière pour arriver en position de Planche puis effectuez une Pompe. Au sol, vous créez une impulsion en repoussant fortement dans les mains et en gainant vos abdominaux (fermement contractés) afin de relever votre buste et de ramener vos pieds vers l’avant. Vous revenez ainsi en position de Squat (avec les mains au sol). Sautez verticalement en pressant dans vos talons(comme pour un Squat avec saut). Les Burpees sollicitent la quasi-totalité de vos groupes musculaires. Ils permettent aussi d’augmenter votre endurance musculaire ainsi que vos capacités cardiovasculaires.',
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731927508/pensive_fzkwyb.png',
      searchCount: 0,
      category: ['Bras', 'Jambes', 'Cardio', 'Abdominaux', 'Pectoraux'],
    },
    {
      id: 15,
      title: 'Dips',
      description:
        "La position de départ doit respecter l'alignement vertical des épaules et des mains, barres parallèles et distantes de la largeur des épaules. La première flexion du dips doit être lente et maîtrisée. (Elle doit s'arrêter lorsque les bras forment un angle droit avec les avant-bras pour les débutants). Dans la descente comme dans la montée les coudes ne s'écartent pas et les épaules demeurent dégagées en rotation externe. Le poignet est ferme et non-fléchi. Le poids total est réparti sur la paume de la main et non sur les doigts. le dips muscle surtout les triceps pour les bras mais il fait aussi travailler les pectoraux, les faisceaux antérieurs du deltoïde, l'anconé, un petit muscle au niveau de la partie postérieure du coude et le grand dorsal.",
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731880712/Dipsv2_gcm4gl.png',
      searchCount: 0,
      category: ['Bras', 'Pectoraux'],
    },
    {
      id: 16,
      title: 'Crunch',
      description:
        'Position de départ allongé sur le sol. Les mains peuvent être placées sur la tête au niveau des tempes,ou encore le long du corps (plus facile). Evitez de les positionner derrière la nuque. Les pieds posés sur le sol, près des fesses On peut aussi placer les cuisses à la verticale, genoux fléchis et écartés, pieds croisés, de sorte à ne pas cambrer le bas du dos lors du mouvement.(Attention, plus les jambes sont surélevées voire tendues, plus la difficulté augmente.) Enrouler le buste vers l’avant en contractant les abdominaux. (Les épaules ne décollent que de quelques centimètres du sol, et le bas du dos et les hanches restent fixes).Le retour à la position de départ doit être réalisé sans à-coups, en conservant la contraction et la tension dans le muscle. Le Crunch sollicite surtout le grand droit des abdominaux, et secondairement les muscles obliques situés sur le côté de la taille.',
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803399/crunch_dztuxr.png',
      searchCount: 0,
      category: ['Abdominaux'],
    },
    {
      id: 17,
      title: 'Avion',
      description:
        'Mettez vous à quatre pattes sur le sol, puis étirez votre jambe (droite) et votre bras (gauche ) simultanément. Maintenez vos hanches et vos épaules parallèles ( votre dos doit être droit ) puis faite la même chose avec l’autre jambe et l’autre bras. Cet exercice fait travailler l’abdomen, le bas du dos, les fessiers et les cuisses.',
      image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731970772/avion2_lz1j0b.png',
      searchCount: 0,
      category: ['Posture', 'Abdominaux', 'Fesier'],
    },
    {
      id: 18,
      title: 'Planche Latéral',
      description:
        'Tenez vous debout, les pieds joints et les bras baissés, sautez et écartez les bras ainsi que les jambes et vous atterrissez, puis vous sautez et vous rapprochez les pieds et les bras à nouveau. Cet exercice renforce le cardio et fait travailler tout le corps.',
      image:
        'https://res.cloudinary.com/dskfvpsiu/image/upload/v1732034081/side_planche_rvog2k.png',
      searchCount: 0,
      category: ['Abdominaux', 'Posture'],
    },
    {
      id: 19,
      title: 'Mountain Climber',
      description:
        'Positionnez-vous face au sol, en appui sur les mains et les pointes de pieds. Vos jambes et vos bras sont tendus, mains à l’aplomb des épaules, en position de Pompe.Veillez à avoir un alignement segmentaire correct (cuisses-bassin-tronc alignés), abdos et fessiers contractés, regard vers le sol. Fléchissez une jambe tout en gardant l’autre bien tendue, toujours en appui sur vos pointes de pieds. L’exercice consiste alors à ramener rapidement et alternativement les genoux gauche et droit vers l’avant. le mountain climber sollicite l’ensemble des groupes musculaires, et particulièrement les jambes, les abdos, les bras, ainsi que les fléchisseurs de la hanche.',
      image:
        'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731937455/montain_climber_yea4p1.png',
      searchCount: 0,
      category: ['Abdominaux', 'Cardio', 'Bras', 'Jambes'],
    },
    {
      id: 20,
      title: 'Lever de genoux',
      description:
        'Cela consiste à courir sur place; c’est un exercice de cardio très efficace qui va faire travailler aussi les jambes et les abdominaux. Faite attention à montez les genoux avec les abdominaux pas en vous penchant en arrière.Les principaux muscles travaillés sont les quadriceps, les mollets et les abdominaux.',
      image:
        'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731917498/lever_de_genoux_mgpybu.png',
      searchCount: 0,
      category: ['Jambes', 'Cardio'],
    },
  ])

  const setSearchQuery = (query) => {
    searchQuery.value = query
  }

  // Fonction pour incrémenter le compteur de recherches d'un mouvement
  const incrementHighlightCount = (id) => {
    const highlight = highlights.value.find((h) => h.id === id)
    if (highlight) {
      highlight.searchCount += 1
    }
  }

  return {
    searchQuery,
    highlights,
    setSearchQuery,
    incrementHighlightCount,
  }
}
export const useSearchStore = () => {
  const store = inject('searchStore')
  if (!store) {
    throw new Error('useSearchStore doit être utilisé dans une application Vue avec provide')
  }
  return store
}
