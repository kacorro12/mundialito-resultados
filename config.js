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
    cifras: [
      { n: 40, txt: 'ediciones del Mundialito de enero' },
      { n: 7, txt: 'torneos en 2026' },
      { n: 5, txt: 'sedes en el circuito' },
      { n: 4, txt: 'provincias' },
      { n: null, txt: 'clubes participantes' },
      { n: null, txt: 'chicos y chicas por año' }
    ],
    torneos: [
      { id: 'mundialito', nombre: 'Mundialito', sub: 'Torneo principal · enero', color: '#d7192b', txt: 'El corazón de todo. Desde 1987, cada enero en Arteaga y sus subsedes, con las categorías 2012 a 2018.' },
      { id: 'premundialitos', nombre: 'Premundialitos', sub: 'Circuito clasificatorio', color: '#4338ca', txt: 'Recorren Victoria, San Nicolás y San Basilio. Los campeones de cada categoría ganan su lugar en el Mundialito de enero.' },
      { id: 'especiales', nombre: 'Especiales', sub: 'Torneos con identidad propia', color: '#6d28d9', txt: 'El Torneo Juvenil de Clubes (Sub 15 y Sub 17) y el Mundialito Alianza Funes en Estancia Damfield.' },
      { id: 'encuentros', nombre: 'Encuentros', sub: 'Amistosos durante el año', color: '#0e7490', txt: 'Encuentros amistosos entre clubes para seguir sumando minutos, convivencia y amistad durante la temporada.' }
    ],
    porque: [
      { ic: 'history', t: 'Trayectoria', d: 'Desde 1987: más de cuatro décadas organizando fútbol infantil y juvenil.' },
      { ic: 'eye', t: 'Scouts y ojeadores', d: 'En el Mundialito de enero y en el circuito hay ojeadores siguiendo a los jugadores. Una vidriera real.' },
      { ic: 'live', t: 'Resultados en vivo', d: 'Fixture, posiciones y copas actualizados al instante desde la organización.' },
      { ic: 'bed', t: 'Alojamiento para todos', d: 'Cinco niveles de alojamiento: desde hotel con pileta hasta camping del club.' },
      { ic: 'ticket', t: 'Bonos para financiar el viaje', d: '200 bonos por categoría: lo recaudado queda para la delegación y participa de un sorteo.' },
      { ic: 'shield', t: 'Cuidado y seguridad', d: 'Enfermería y ambulancia durante todo el torneo, y un reglamento claro para todos.' }
    ],
    scouts: { t: 'Una vidriera para el futuro', d: 'El Mundialito de enero, el torneo principal, y cada fecha del circuito reúnen a ojeadores y captadores que siguen de cerca a los chicos y chicas. Para muchos, es el primer lugar donde alguien los ve jugar fuera de su ciudad.' },
    mision: 'Organizar torneos de fútbol infantil y juvenil donde cada chico y chica viva una experiencia inolvidable, con competencia sana, buena organización y un lugar para que las familias disfruten.',
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
    patrocinadores: [],   // { nombre: 'Marca', logo: '/sponsors/marca.png', link: 'https://...' }
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
