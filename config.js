// Configuración pública de la web del Mundialito Alianza (no contiene nada secreto)
window.MUNDIALITO_CFG = {
  // Conexión de solo lectura a la base del Mundialito (clave pública: no permite modificar nada)
  url: 'https://vkziizdxvshkqeharmur.supabase.co',
  key: 'sb_publishable_Qh-zedKbVpIK2R7lypYyjQ_L5QEl8kh',
  // Redes y contacto (arriba a la derecha y en la portada)
  instagram: 'mundialitoalianza',   // usuario sin @
  whatsapp: '5493467444037',        // número con código de país, sin + ni espacios
  tiktok: 'mundialitoalianza',      // usuario sin @

  // ── Contenidos de la portada (se pueden editar acá sin tocar el código) ──
  sitio: {
    // Contador animado. Para sumar una cifra, agregá una línea; las que estén en null no se muestran.
    // Cifras del último Mundialito de enero (pre: lo que va antes del número, por ejemplo '+')
    cifrasTitulo: 'El último Mundialito en números',
    cifras: [
      { n: 4500, pre: '+', txt: 'jugadores y jugadoras' },
      { n: 250, pre: '+', txt: 'clubes, escuelas y selectivos' },
      { n: 30000, pre: '+', txt: 'espectadores' },
      { n: 23, pre: '+', txt: 'provincias representadas' },
      { n: 16, txt: 'sedes: la principal y 15 subsedes' },
      { n: 10, txt: 'días de torneo' },
      { n: 40, txt: 'años de historia' }
    ],
    // Impacto en redes durante la edición 2026 (todo orgánico)
    impacto: {
      titulo: 'Impacto digital',
      txt: 'Durante la edición 2026 el contenido del Mundialito alcanzó cifras extraordinarias, de manera 100% orgánica.',
      redes: [
        { red: 'Instagram', datos: [ ['3,8 M', 'visualizaciones'], ['228.400', 'cuentas alcanzadas'], ['+36.500', 'interacciones'], ['100%', 'alcance orgánico'] ] },
        { red: 'TikTok', datos: [ ['+900 mil', 'visualizaciones de video'], ['155.749', 'personas alcanzadas'], ['+3.000', 'visitas al perfil'] ] }
      ]
    },
    // 1. Portada histórica: fondo armado con fotos de archivo.
    // Fotos históricas con año: 'h1993-17' = img/h/h1993-17.jpg, sacada del álbum oficial de Facebook de ese año
    // (originales en Contenido/Fotos y Videos/Fotos Viejas/Facebook por año). La web muestra el año sola.
    portada: {
      kick: 'Desde 1987 · Arteaga, Santa Fe',
      titulo: 'Una historia que comenzó con un sueño',
      txt: 'El Mundialito Alianza es el torneo de fútbol infantil del Club Atlético Alianza, en Arteaga, Capital Provincial del Fútbol Infantil.',
      fotos: ['h1988-09','h2000-14','h1994-04','h2001-06','h1993-01','h1988-08','h2000-06','h1992-15','h1989-15','h1994-09','h2016-03','h1991-02','h1993-08','h1988-28','h2000-05','h1990-05','h2018-16','h1994-02','h1992-12','h2001-08']
    },
    // 2. Línea de tiempo interactiva
    linea: [
      { y: '1986', t: 'El nacimiento de una ilusión', d: 'Delfor Bartomucci, junto a dirigentes, colaboradores y allegados del Club Atlético Alianza, impulsa un proyecto tan ambicioso como apasionante: un gran torneo de fútbol infantil que reúna a clubes de distintas localidades y provincias. Había que contactar instituciones, organizar alojamientos, preparar las canchas y movilizar a todo un pueblo. El entusiasmo pudo más que las dificultades.', fotos: ['h1989-14','h1989-16','h1989-11'] },
      { y: '1987', t: 'La primera edición', d: 'En enero se juega el primer Mundialito Alianza, con doce delegaciones. Y pasa algo extraordinario: un pueblo de poco más de 3.000 habitantes recibe a más de 5.000 personas en la jornada inaugural. Lo que parecía difícil de concretar se transforma en una fiesta del fútbol infantil. Y era solamente el principio.', fotos: ['h1988-25','h1988-05','h1988-17'] },
      { y: '1993', t: 'Capital Provincial del Fútbol Infantil', d: 'Cada verano llegan nuevas delegaciones; algunas recorren miles de kilómetros y otras vuelven año tras año. Mediante el Decreto Provincial N.º 3565, el Gobierno de Santa Fe declara a Arteaga Capital Provincial del Fútbol Infantil, reconociendo lo que el Mundialito había construido.', fotos: ['h1993-01','h1993-17','h1993-18'] },
      { y: '2026', t: 'Cuarenta ediciones haciendo historia', d: 'Del 9 al 18 de enero, la 40.ª edición celebra cuatro décadas de trayectoria, con una identidad renovada. Una oportunidad para reconocer a quienes hicieron posible el proyecto y renovar el compromiso con los futuros protagonistas.', fotos: ['m03','m12','m01'] },
      { y: '2027', t: 'El Circuito Mundialito', d: 'El Mundialito se trabaja como circuito: torneos casi todos los meses, en distintas sedes, que cierran con la 41.ª edición del 8 al 17 de enero en Arteaga. Una misma pasión, nuevas experiencias y más oportunidades para jugar.', fotos: ['e03','e15','e13'] }
    ],
    // 3. La experiencia Mundialito
    experiencia: {
      titulo: 'Mucho más que noventa minutos',
      intro: 'El torneo no se limita a los partidos, los goles o las copas. Su verdadera historia también se escribe fuera de las canchas.',
      frases: [
        'Está en las delegaciones que viajan durante horas para representar a sus instituciones.',
        'En los chicos que conocen nuevos compañeros y en las familias que hacen enormes esfuerzos para que sus hijos vivan la experiencia.',
        'En los hogares de Arteaga que abren sus puertas, en los voluntarios que trabajan durante meses y en una comunidad que cada verano convierte al fútbol en una celebración colectiva.'
      ],
      cierre: 'Porque el Mundialito no se mide solamente en resultados. Se mide en experiencias, vínculos, recuerdos y emociones.',
      // [foto, texto sobre la foto, torneo o lugar]. Carpetas: h = históricas con año (el lugar se completa solo), m = Mundialito de enero 2026,
      // d = dron en Arteaga (enero), p = Premundialito Victoria, s = Premundialito San Basilio,
      // r = Premundialito Regatas (San Nicolás), e = Mundialito Alianza Funes (Damfield)
      fotos: [ ['h1991-02','Los desfiles'], ['m06','La luz de enero','Arteaga · enero 2026'], ['e05','Las familias','Funes'], ['s06','Las primeras veces','Premundialito San Basilio'], ['h1993-19','Las cenas de delegaciones'], ['r04','Compañeros de banco','Premundialito Regatas'], ['e04','La tribuna','Funes'], ['h1994-06','Las reinas'],
        ['e01','Mi pasión lleva tu nombre','Arteaga · enero 2026'], ['s07','En andas','Premundialito San Basilio'], ['d03','Las canchas','Arteaga · enero'], ['r08','Los que alientan','Premundialito Regatas'], ['h2020-09','Los campeones'], ['e14','Ellas también','Funes'], ['m08','El kiosco','Arteaga · enero 2026'], ['h2001-08','Las tribunas llenas'],
        ['p04','Compañeras','Premundialito Victoria'], ['r03','Concentración','Premundialito Regatas'], ['e09','La pelota','Funes'], ['s08','Amigas','Premundialito San Basilio'], ['h2000-14','Las noches de Arteaga'], ['m04','Cada partido','Arteaga · enero 2026'], ['e07','Los amigos','Funes'], ['h1992-17','Las tradiciones'] ],
      franja: ['h1988-08','s01','p02','r01','m07','h2012-05','e02','s03','r05','h1990-09','m10','e06','s04','h1991-15','p05','r06','e12','h1993-07','s10','m11','r09','h1994-08','e17','s11','p03','h2000-02','r11','e18','s12','h2004-02','d02','r13','m12','h2016-05','p08','s14','r15','h2018-20','e08','s16','p06','h2020-36','r10','e11','s05','h2020-44','r12','s09','h1989-12','r16','h1992-14','h1988-12','h2013-02']
    },
    // 4. El Circuito Mundialito: las cuatro propuestas (los Encuentros van aparte)
    circuito: {
      titulo: 'Una misma pasión, nuevas experiencias',
      txt: 'Durante décadas, el Mundialito tuvo su gran encuentro en enero. El crecimiento de la marca y el vínculo con tantas instituciones impulsaron una evolución natural: el Circuito Mundialito, con torneos durante todo el año que mantienen la identidad y los valores de siempre.',
      propuestas: [
        { id: 'ma', nombre: 'Mundialito Alianza', sub: 'Enero · el torneo principal', logo: '/img/logo-sello.webp', fondo: '#c8101f', foto: 'd05',
          txt: 'La competencia que dio origen a todo. Unos diez días en Arteaga y sus subsedes, con clubes, escuelas y delegaciones de todo el país y del exterior. Es el corazón del circuito y el punto de encuentro de todas las propuestas.',
          datos: ['Categorías 2012 a 2018', 'Masculino', '16 sedes en 2026'] },
        { id: 'pm', nombre: 'Premundialitos', sub: 'El camino hacia enero', logo: '/img/logo-premundialito.webp', fondo: '#fff', foto: 'p01',
          txt: 'Torneos durante el año que, además de ser una experiencia en sí mismos, dan la chance de clasificar con inscripción gratuita al Mundialito de enero en cada categoría. Son para plantar semillitas en distintos lugares: repetimos sedes y sumamos nuevas.',
          datos: ['Victoria, Entre Ríos', 'Federal, Entre Ríos', 'San Basilio, Córdoba', 'Leones, Córdoba', 'San Nicolás (Club de Regatas), Buenos Aires'] },
        { id: 'es', nombre: 'Torneos Especiales', sub: 'Junto a otras instituciones', logo: '/img/logo-especiales.png', fondo: '#1a1a1f', foto: 'e10',
          txt: 'Se hacen en conjunto con otra institución: el Mundialito pone la marca y la estructura deportiva; la otra institución, su predio y su infraestructura. El Mundialito Alianza Funes, en Estancia Damfield, tuvo dos ediciones en 2026; la de octubre reunió a 66 equipos y a Maxi Rodríguez en la inauguración.',
          datos: ['Funes, Santa Fe', 'Estancia Damfield', 'Mismas categorías que enero'] },
        { id: 'ju', nombre: 'Torneos Juveniles de Clubes', sub: 'Para seguir siendo parte', logo: '/img/logo-juvenil.webp', fondo: '#fff', foto: '', // sin fotos del Juvenil todavía: se muestra un fondo rojo
          txt: 'Para que el vínculo con el Mundialito no termine cuando los chicos crecen. Solo para clubes, en las categorías 2010 y 2011, masculino y femenino. La 4.ª edición completó su cupo: 23 instituciones y unos 500 jugadores y jugadoras de Argentina, Bolivia y Estados Unidos.',
          datos: ['Categorías 2010 y 2011', 'Masculino y femenino', 'Solo clubes'] }
      ],
      encuentros: 'Además del circuito, en el club se organizan Encuentros para los más chiquitos, con categorías que no se juegan en enero.'
    },
    // 5. Presente y futuro
    futuro: {
      titulo: 'Nuestra esencia permanece',
      parrafos: [
        'Desde aquella primera edición de 1987 hasta el Circuito Mundialito, muchas cosas cambiaron: crecieron las competencias, se sumaron categorías y sedes. Pero hay algo que nunca cambió: nuestra manera de entender el deporte.',
        'Creemos que el fútbol es mucho más que una competencia. Es una herramienta para enseñar valores, crear amistades, fortalecer vínculos y acompañar el crecimiento de chicos y chicas.',
        'Detrás de cada torneo hay dirigentes, profesores, árbitros, voluntarios, familias, comunidades anfitrionas y empresas. El Mundialito nunca fue solamente el esfuerzo de una institución.'
      ],
      foto: 'd01',
      porvenir: 'Miramos hacia el futuro con el mismo entusiasmo que impulsó aquella primera edición. Las canchas cambian, los equipos se renuevan y cada generación escribe sus propias historias. Pero las emociones permanecen.',
      cierre: 'Mundialito. Una historia que nos une. Una pasión que nos encuentra.',
      // Gráfica de la próxima edición (identidad visual 2027)
      proxima: { img: '/img/41-edicion.png', txt: '8 al 17 de enero de 2027 · Arteaga, Santa Fe' }
    },
    porque: [
      { ic: 'map', t: 'Federal desde siempre', d: 'Hace 40 años que el Mundialito es federal: llegan clubes de todas las provincias y de otros países, no solo los más conocidos.' },
      { ic: 'calendar', t: '10 días de fútbol', d: 'Es el segundo torneo de fútbol infantil del país con más días de competencia: diez días a puro fútbol.' },
      { ic: 'pin', t: '16 sedes', d: 'La sede principal en Arteaga y 15 subsedes en ciudades y pueblos de la región. Todo un territorio jugando al mismo tiempo.' },
      { ic: 'heart', t: 'Amistad y unión', d: 'El Mundialito es encuentro: chicos, familias y clubes que vuelven cada año y se hacen amigos para siempre.' },
      { ic: 'eye', t: 'Una vidriera real', d: 'Ojeadores de clubes de AFA siguen a los jugadores en enero y en todo el circuito.' },
      { ic: 'ticket', t: 'Bonos para viajar', d: '200 bonos por categoría: lo recaudado queda para la delegación y participa de un sorteo en efectivo.' }
    ],
    scouts: { t: 'Una vidriera para el futuro', d: 'El Mundialito de enero, el torneo principal, y cada fecha del circuito reúnen a ojeadores de clubes de AFA que siguen de cerca a los chicos y chicas. Para muchos, es el primer lugar donde alguien los ve jugar fuera de su ciudad.',
      clubes: ['AFA', 'River Plate', 'Boca Juniors', 'Talleres', 'Lanús', 'Belgrano', 'Independiente', 'Sarmiento'], mas: 'y muchos más' },
    lema: 'La magia está por volver',
    historia: {
      titulo: 'Una pasión que empezó en Arteaga',
      parrafos: [
        'El Mundialito Alianza es un torneo de fútbol infantil organizado por el Club Atlético Alianza, con sede histórica en Arteaga, departamento Caseros, provincia de Santa Fe.',
        'Es uno de los acontecimientos deportivos y sociales más importantes de la localidad: convoca a jugadores, clubes, delegaciones, familias, entrenadores, colaboradores y comunidades de distintos lugares.',
        'Aunque la competencia es su actividad principal, su identidad va más allá de los resultados: la amistad, el compañerismo, el respeto, la familia, el esfuerzo y los sueños de los chicos. No es solo un torneo que reúne equipos; es un acontecimiento deportivo, familiar y comunitario que forma parte de la identidad de Arteaga.'
      ],
      hitos: [
        ['1986', 'Delfor Bartomucci impulsa la idea y comienzan los primeros trabajos organizativos.'],
        ['1987', 'Primera edición: 12 delegaciones y más de 5.000 personas en la inauguración.'],
        ['1993', 'Por el Decreto provincial N.º 3565/1993, Arteaga es reconocida como Capital Provincial del Fútbol Infantil.'],
        ['Hoy', 'Diez días en enero, con sede principal y subsedes en distintas localidades, y delegaciones de todo el país y del exterior.'],
        ['2025', 'Fernando Belluschi enciende la Llama Votiva.'],
        ['2026', 'Pato Abbondanzieri enciende la Llama Votiva.'],
        ['2027', '41.ª edición del Mundialito Alianza, del 8 al 17 de enero.']
      ]
    },
    llama: {
      titulo: 'La Llama Votiva',
      texto: 'Uno de los símbolos más importantes del Mundialito. Se enciende en la inauguración y permanece encendida durante los diez días del torneo principal. Representa la pasión, el esfuerzo, la unión y los sueños de quienes participan.',
      encendidos: [ ['2026', 'Pato Abbondanzieri'], ['2025', 'Fernando Belluschi'] ],
      fotos: ['h1988-04','h1989-13','h1993-18','h2000-25']
    },
    mision:'Organizar torneos de fútbol infantil y juvenil donde cada chico y chica viva una experiencia inolvidable, con competencia sana, buena organización y un lugar para que las familias disfruten.',
    vision: 'Ser el circuito de fútbol formativo de referencia en Argentina, que une a clubes de todo el país y abre puertas a nuevos talentos, sin perder el espíritu de pueblo que nos vio nacer en 1987.',
    alojamiento: {
      torneo: '41.º Mundialito Alianza · 8 al 17 de enero de 2027',
      nota: 'Todos los niveles incluyen la inscripción al torneo, el acceso al natatorio del Club Alianza y las entradas para todas las jornadas.',
      niveles: [
        { nivel: 1, color: '#16a34a', t: 'Hotel con pileta', d: ['Alojamiento y desayuno en hotel', 'Almuerzos y cenas', 'Pileta climatizada en el hotel', 'A 8 km del estadio'], p5: '$540.000 · U$D 380', p3: '$350.000 · U$D 245', extra: '$100.000 · U$D 70 por día extra' },
        { nivel: 2, color: '#0891b2', t: 'Hotel', d: ['Alojamiento y desayuno en hotel', 'Almuerzos y cenas', 'A 8 km del estadio'], p5: '$470.000 · U$D 330', p3: '$300.000 · U$D 210', extra: '$70.000 · U$D 50 por día extra' },
        { nivel: 3, color: '#ca8a04', t: 'Albergue', d: ['Albergue con camas cucheta', 'Cenas o almuerzos en el predio del Club Alianza', 'A 2 km del estadio'], p5: '$380.000 · U$D 270', p3: '$235.000 · U$D 165', extra: '$30.000 · U$D 20 por día extra' },
        { nivel: 4, color: '#4338ca', t: 'Salones', d: ['Salones con colchones en el suelo'], p5: '$170.000 · U$D 120', p3: '$105.000 · U$D 70', extra: '$10.000 por día extra' },
        { nivel: 5, color: '#9333ea', t: 'Camping del club', d: ['Camping del Club Alianza', 'Menores de 3 años sin costo'], p5: '$25.000 por día', p3: '$25.000 por día', extra: '' }
      ]
    },
    noticias: [
      { fecha: '2026-11-16', t: 'Se viene el 4.º Torneo Juvenil de Clubes', d: 'Del 21 al 23 de noviembre en el Club Atlético Alianza: Sub 17, Sub 15 y Sub 15 Femenino, con Copas de Oro, Plata y Bronce.', img: '/img/juego.jpg', link: '/juvenil26' },
      { fecha: '2026-11-15', t: 'Sorteo de los bonos del Juvenil', d: 'El domingo 22 de noviembre a las 18 hs en el Estadio Delfor Bartomucci, en vivo por Instagram.', img: '/img/campeones.jpg', link: 'https://instagram.com/mundialitoalianza' },
      { fecha: '2026-07-16', t: 'Mundialito Alianza 2027: 41.ª edición', d: 'Del 8 al 17 de enero de 2027. Categorías 2012, 2014, 2015, 2016, 2017 y 2018, con bonificación por cantidad de categorías.', img: '/img/inauguracion.jpg', link: '' }
    ],
    // Cuando estén los logos: { nombre: 'Marca', logo: '/sponsors/marca.png', link: 'https://...' }. Mientras, se muestran lugares vacíos.
    patrocinadores: [],
    lugaresSponsors: 6,
    contacto: { inscripcion: 'mundialitoalianza@gmail.com', marketing: 'marketingmundialito@gmail.com', whatsappTxt: '3467 444037' }
  },

  // Resumen del reglamento de cada torneo (la pestaña "Reglamento"). El PDF completo se descarga desde ahí.
  reglamentos: {
    juvenil26: {
      pdf: '/docs/reglamento-4to-juvenil-de-clubes-2026.pdf',
      sistema: [
        { cat: 'Sub 17', equipos: '12 equipos', formato: '3 zonas de 4 equipos, todos contra todos dentro de cada zona. Después se reparten en tres copas.',
          copas: [
            { n: 'Oro', c: 'oro', t: 'Los 3 primeros y el mejor 2°. Semis: mejor 1° vs mejor 2° y 2° mejor 1° vs 3° mejor 1°. Los perdedores juegan por el 3.er y 4.º puesto.' },
            { n: 'Plata', c: 'plata', t: 'Los 2 segundos restantes y los 2 mejores 3°. Semis: mejor 2° vs 2° mejor 3° y 2° mejor 2° vs mejor 3°.' },
            { n: 'Bronce', c: 'bronce', t: 'El 3° restante y los 3 cuartos. Semis: 3° restante vs 3er mejor 4° y mejor 4° vs 2° mejor 4°.' } ] },
        { cat: 'Sub 15', equipos: '8 equipos', formato: '2 zonas de 4 equipos, todos contra todos dentro de cada zona.',
          copas: [
            { n: 'Oro', c: 'oro', t: 'Semis: 1° Zona A vs 2° Zona B y 1° Zona B vs 2° Zona A. Los perdedores juegan por el 3.er y 4.º puesto.' },
            { n: 'Plata', c: 'plata', t: 'Semis: 3° Zona A vs 4° Zona B y 3° Zona B vs 4° Zona A.' } ] },
        { cat: 'Sub 15 Femenino', equipos: '6 equipos', formato: '2 zonas de 3 equipos con un interzonal: 3 partidos por equipo en la primera ronda.',
          copas: [
            { n: 'Oro', c: 'oro', t: 'Semis: 1° Zona A vs 2° Zona B y 1° Zona B vs 2° Zona A. Los perdedores pasan a la Copa de Plata.' },
            { n: 'Plata', c: 'plata', t: 'Semis: 3° Zona A vs perdedor de la semi 1 y 3° Zona B vs perdedor de la semi 2.' } ] }
      ],
      puntos: [
        { t: 'Partidos', d: '2 tiempos de 25 minutos con 5 de descanso. Cada equipo se presenta en la puerta de la cancha 30 minutos antes.' },
        { t: 'Cambios', d: 'Se permiten 7 cambios en hasta 3 ventanas, más el entretiempo.' },
        { t: 'Penales', d: 'Se patean 5 por equipo; si siguen empatados, uno y uno hasta definir.' },
        { t: 'Incomparecencia', d: 'Hay 10 minutos de tolerancia. El equipo que no se presenta pierde 2 a 0.' },
        { t: 'Acreditación', d: 'Lista de buena fe con DNI, pasaporte, Mi Argentina o carnet de liga con foto, 45 minutos antes del primer partido.' },
        { t: 'Categorías', d: 'Sub 17: hasta 3 jugadores 2009, el resto 2010 o menores. Sub 15: 2011 o menores. Sub 15 Femenino: hasta 3 jugadoras 2010, el resto 2011 o menores.' },
        { t: 'Premios', d: 'Medallas y trofeos para los finalistas de cada copa: Oro, Plata y Bronce.' },
        { t: 'Sorteo de los bonos', d: 'Domingo 22 de noviembre a las 18 hs en el Estadio Delfor Bartomucci, en vivo por Instagram @mundialitoalianza.' }
      ],
      desempate: ['Partido entre sí', 'Diferencia de gol', 'Goles a favor', 'Goles en contra', 'Sorteo']
    }
  }
};
