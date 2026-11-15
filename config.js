// Configuración pública de la web del Mundialito Alianza (no contiene nada secreto)
window.MUNDIALITO_CFG = {
  // Conexión de solo lectura a la base del Mundialito (clave pública: no permite modificar nada)
  url: 'https://vkziizdxvshkqeharmur.supabase.co',
  key: 'sb_publishable_Qh-zedKbVpIK2R7lypYyjQ_L5QEl8kh',
  // Redes y contacto (arriba a la derecha y en la portada)
  instagram: 'mundialitoalianza',   // usuario sin @
  whatsapp: '5493467444037',        // número con código de país, sin + ni espacios
  tiktok: 'mundialitoalianza',      // usuario sin @

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
