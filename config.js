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
    torneos: [
      { id: 'mundialito', nombre: 'Mundialito', sub: 'Torneo principal · enero', color: '#d7192b', txt: 'El corazón de todo. Desde 1987, diez días cada enero en Arteaga y 15 subsedes, con las categorías 2012 a 2018.' },
      { id: 'premundialitos', nombre: 'Premundialitos', sub: 'Circuito clasificatorio', color: '#4338ca', txt: 'Recorren Victoria, San Nicolás y San Basilio. Los campeones de cada categoría ganan su lugar en el Mundialito de enero.' },
      { id: 'especiales', nombre: 'Especiales', sub: 'Torneos con identidad propia', color: '#6d28d9', txt: 'El Torneo Juvenil de Clubes (Sub 15 y Sub 17) y el Mundialito Alianza Funes en Estancia Damfield.' },
      { id: 'encuentros', nombre: 'Encuentros', sub: 'Amistosos durante el año', color: '#0e7490', txt: 'Encuentros amistosos entre clubes para seguir sumando minutos, convivencia y amistad durante la temporada.' }
    ],
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
      encendidos: [ ['2026', 'Pato Abbondanzieri'], ['2025', 'Fernando Belluschi'] ]
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
