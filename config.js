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
    // La primera cifra va destacada, ocupando todo el ancho
    cifrasTitulo: 'El Mundialito en números',
    cifras: [
      { n: 40, txt: 'ediciones seguidas, sin suspender ninguna' },
      { n: 4500, pre: '+', txt: 'jugadores' },
      { n: 250, pre: '+', txt: 'clubes, escuelas y selectivos' },
      { n: 30000, pre: '+', txt: 'espectadores' },
      { n: 23, pre: '+', txt: 'provincias representadas' },
      { n: 16, txt: 'sedes: la principal y 15 subsedes' },
      { n: 10, txt: 'días de torneo' }
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
      txt: 'El torneo de fútbol infantil más federal del país.',
      // Diapositivas del fondo (de a una, se deslizan): INICIAL 1 e INICIAL 2 (Arteaga, enero 2026)
      slides: ['m13','m14'],
      fotos: ['h1988-09','h2000-14','h1994-04','h2001-06','h1993-01','h1988-08','h2000-06','h1992-15','h1989-15','h1994-09','h2016-03','h1991-02','h1993-08','h1988-28','h2000-05','h1990-05','h2018-16','h1994-02','h1992-12','h2001-08']
    },
    // Cuenta regresiva de la portada: siempre al Mundialito de enero
    cuentaRegresiva: { nombre: '41.º Mundialito Alianza', fecha: '2027-01-08T09:00:00-03:00', fechaTxt: '8 al 17 de enero de 2027 · Arteaga, Santa Fe' },
    // Historia breve del inicio (con link a la página Historia)
    historiaBreve: {
      titulo: 'Desde 1987, una historia que nos une',
      txt: 'En el corazón de Santa Fe, en una pequeña localidad llamada Arteaga, nació una idea que se convertiría en una de las tradiciones más importantes del fútbol infantil argentino. En enero de 1987 se jugó la primera edición: doce delegaciones y más de 5.000 personas en la inauguración.',
      fotos: ['h1987-01','h1994-02','h2000-14','m06']
    },
    // Calendario: torneos que todavía no están cargados en el sistema
    calendarioExtra: [
      { nombre: '41.º Mundialito Alianza', tipo: 'ma', inicio: '2027-01-08', fin: '2027-01-17', sede: 'Club Atlético Alianza · Arteaga, Santa Fe', cupos: null }
    ],
    // Cupos por torneo (id del torneo): 'llenos', o { ocupados: 40, total: 60 }. Si no está, dice "Consultá disponibilidad".
    cupos: { juvenil26: 'llenos' },
    // 2. Línea de tiempo interactiva
    linea: [
      { y: '1986', t: 'El nacimiento de una ilusión', d: 'Delfor Bartomucci, junto a dirigentes, colaboradores y allegados del Club Atlético Alianza, impulsa un proyecto tan ambicioso como apasionante: un gran torneo de fútbol infantil que reúna a clubes de distintas localidades y provincias. Había que contactar instituciones, organizar alojamientos, preparar las canchas y movilizar a todo un pueblo. El entusiasmo pudo más que las dificultades.', fotos: ['h1989-14','h1989-16','h1989-11'] },
      { y: '1987', t: 'La primera edición', d: 'En enero se juega el primer Mundialito Alianza, con doce delegaciones. Y pasa algo extraordinario: un pueblo de poco más de 3.000 habitantes recibe a más de 5.000 personas en la jornada inaugural. Lo que parecía difícil de concretar se transforma en una fiesta del fútbol infantil. Y era solamente el principio.', fotos: ['h1988-25','h1988-05','h1988-17'] },
      { y: '1993', t: 'Capital Provincial del Fútbol Infantil', d: 'Cada verano llegan nuevas delegaciones; algunas recorren miles de kilómetros y otras vuelven año tras año. Mediante el Decreto provincial N.º 3565, el Gobierno de Santa Fe declara a Arteaga Capital Provincial del Fútbol Infantil, reconociendo lo que el Mundialito había construido.', fotos: ['h1993-01','h1993-17','h1993-18'] },
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
      // Foto de la ventana de texto y las 5 destacadas antes de "Ver galería" (la galería junta todas las de "fotos" y "franja")
      foto: 'h1991-02',
      destacadas: ['m06','h2000-14','s07','h1993-19','r08'],
      // [foto, texto sobre la foto, torneo o lugar]. Carpetas: h = históricas con año (el lugar se completa solo), m = Mundialito de enero 2026,
      // d = dron en Arteaga (enero), p = Premundialito Victoria, s = Premundialito San Basilio,
      // r = Premundialito Regatas (San Nicolás), e = Mundialito Alianza Funes (Damfield)
      fotos: [ ['h1991-02','Los desfiles'], ['m06','La luz de enero','Arteaga · enero 2026'], ['e05','Las familias','Funes'], ['s06','Las primeras veces','Premundialito San Basilio'], ['h1993-19','Las cenas de delegaciones'], ['r04','Compañeros de banco','Premundialito Regatas'], ['e04','La tribuna','Funes'], ['h1994-06','Las reinas'],
        ['e01','Mi pasión lleva tu nombre','Arteaga · enero 2026'], ['s07','En andas','Premundialito San Basilio'], ['d03','Las canchas','Arteaga · enero'], ['r08','Los que alientan','Premundialito Regatas'], ['h2020-09','Los campeones'], ['e14','Ellas también','Funes'], ['m08','El kiosco','Arteaga · enero 2026'], ['h2001-08','Las tribunas llenas'],
        ['p04','Compañeras','Premundialito Victoria'], ['r03','Concentración','Premundialito Regatas'], ['e09','La pelota','Funes'], ['s08','Amigas','Premundialito San Basilio'], ['h2000-14','Las noches de Arteaga'], ['m04','Cada partido','Arteaga · enero 2026'], ['e07','Los amigos','Funes'], ['h1992-17','Las tradiciones'] ],
      franja: ['h1988-08','s01','p02','r01','m07','h2012-05','e02','s03','r05','h1990-09','m10','e06','s04','h1991-15','p05','r06','e12','h1993-07','s10','m11','r09','h1994-08','e17','s11','p03','h2000-02','r11','e18','s12','h2004-02','d02','r13','m12','h2016-05','p08','s14','r15','h2018-20','e08','s16','p06','h2020-36','r10','e11','s05','h2020-44','r12','s09','h1989-12','r16','h1992-14','h1988-12','h2013-02']
    },
    // Logos de los clubes que ya jugaron (archivos en /img/clubes/<nombre>.webp, sin repetidos). La franja "Clubes participantes" los muestra en dos filas.
    logosClubes: ['12-de-octubre','25-de-mayo','a-c-d-y-s-san-benito','academia-elite-sports','acefic','adelia-maria','adiur','alice','almirante-agrario','alumni','alvear-futbol-club','amigos-f.-c.','argenper','azcuenaga-sur','bancario','banda-norte','belgrano-coronel-moldes','bermudez-fc','bolivia-2022','bronson-f-c','c-r-union-y-cultura','c.-f.-a.-r.','centro-el-potrero','charruas-femenino','club-alianza','club-alumni','club-america','club-atletico-alba-argentina','club-atletico-alianza','club-atletico-belgrano','club-atletico-selva','club-atletico-union-casildense','club-atletico-villa-mitre','club-sportivo-almafuerte','defensores-de-centro','defensores','deportivo-argentino','deportivo-ibarlucea','deportivo-municipal','diego-griffa','el-fachinal','escuela-de-fútbol-nahuel-carballo','escuela-el-potrero','escuela-esperanza-juvenil','escuela-lion-s','escuela-surbar','escuelita-el-reju','escuelita-pereyra-f.-c.','esperanza','estrella-de-rosario','estrella','estudiantes-de-levalle','everton','ferro-carril-oeste','flamengo-arroyo-seco','form.-independiente','fortaleza','furia-fc','gimnasia-y-esgrima','guardianes-de-la-corona','huracan-casilda-club','independiente-de-ranqueles','jockey-club','la-16-a','la-16','la-consolata','la-mano-de-dios','la-scaloneta','las-higueras','leones-dorado','leones','libertad','los-amigos-de-guille','los-andes-villa-ramallo','los-diablitos-de-chabas','los-halcones','los-pibes-del-barrio','los-pibes','los-toros','nacho-corbalan','napoli-soccer','newells-victoria','newells','nueva-union','pipo-spinetta','psm','real-vgg','rejunte','river','rojinegro-88','rompe-redes','rosario-central','rosario-sur','sampacho','san-lorenzo','san-martin','san-nicolas','santa-catalina','selectivo-aya','selectivo-las-garzas','selectivo-sifa','semillero','semillitas','sport-club-canadense','sportivo-victoria','sportsman-roldan','talleres','teo-fc','tiki-tiki','tirando-paredes','toritos','trinche-fc','union-cruz-alta','union-futbolera','velez','zona-norte'],
    // 4. El Circuito Mundialito: las propuestas (la de "ancho: true" ocupa todo el ancho)
    circuito: {
      titulo: 'Una misma pasión, nuevas experiencias',
      txt: 'Durante décadas, el Mundialito tuvo su gran encuentro en enero. El crecimiento de la marca y el vínculo con tantas instituciones impulsaron una evolución natural: el Circuito Mundialito, con torneos durante todo el año que mantienen la identidad y los valores de siempre.',
      // En orden cronológico. "cuando" es la fecha estimada que se muestra arriba de cada tarjeta.
      propuestas: [
        { id: 'pm', nombre: 'Premundialitos', sub: 'El camino hacia enero', cuando: 'Durante todo el año', logo: '/logo.webp', fondo: '#fff', foto: 's01',
          txt: 'Torneos durante todo el año en distintas ciudades del país, con el mismo espíritu del Mundialito. Llevamos nuestro sello a nuevas sedes, volvemos a las que nos recibieron con los brazos abiertos y damos la chance de clasificar gratis al torneo de enero.' },
        { id: 'en', nombre: 'Encuentros', sub: 'Para los más chiquitos', cuando: 'Durante el año', logo: '/img/nenito.webp', fondo: '#fff', foto: 'e16',
          txt: 'Un fin de semana en familia para las categorías más chicas, las que todavía no juegan en enero. Porque en el Mundialito pensamos en todos: cada categoría tiene su lugar durante el año.' },
        { id: 'ju', nombre: 'Torneo Juvenil de Clubes', sub: 'Para seguir siendo parte', cuando: 'Noviembre', logo: '/img/logo-juvenil.webp', fondo: '#fff', foto: '/img/juvenil-portada.jpg',
          txt: 'Un torneo internacional pensado para clubes, en Sub 17 y Sub 15, masculino y femenino. Reúne a instituciones de casi todas las provincias y a delegaciones de Bolivia y Estados Unidos.' },
        { id: 'ma', nombre: 'Mundialito Alianza', sub: 'El torneo principal', cuando: 'Principio de enero', logo: '/logo.webp', fondo: '#fff', foto: 'd05',
          txt: 'La competencia que dio origen a todo. Diez días de fútbol en Arteaga y sus subsedes, con clubes, escuelas y delegaciones de todo el país y del exterior. El gran cierre del circuito.' }
      ]
    },
    // Página Sumate: búsquedas de trabajo y colaboración. "abierta: false" la muestra como cerrada.
    convocatorias: {
      intro: 'El Mundialito se hace entre muchos. Si querés ser parte, estas son las búsquedas abiertas: completá el formulario y te contactamos.',
      lista: [
        { id: 'show', abierta: true, tag: 'Artistas y colaboradores', titulo: 'Show inaugural del Mundialito 2027', foto: '/img/historia-portada.jpg',
          txt: '¿Cantás, bailás, actuás, hacés malabares o tenés alguna otra habilidad artística? Sumate al show de apertura del torneo de fútbol infantil más federal del país.',
          puntos: ['Cantantes, bailarines, actores y malabaristas', 'Cualquier otra habilidad artística', 'Inauguración del 41.º Mundialito, en enero de 2027'],
          form: 'https://docs.google.com/forms/d/e/1FAIpQLSd66Zb2W8z-N5g3rv9A5BwcvV23ooaPUiHdb-ETsJ9LcGZBYw/viewform',
          ig: 'https://www.instagram.com/p/DcOXGDWub4K/' },
        { id: 'feria', abierta: true, tag: 'Emprendedores', titulo: 'Feria de emprendedores en el Mundialito', foto: 'm08',
          txt: 'En el marco del 41.º Mundialito Alianza abrimos la convocatoria para emprendedores que quieran ofrecer sus productos durante los primeros tres días del torneo. Los cupos son limitados.',
          puntos: ['8, 9 y 10 de enero de 2027', 'Club Atlético Alianza, Arteaga, Santa Fe', 'Preinscripciones abiertas'],
          form: 'https://docs.google.com/forms/d/e/1FAIpQLSdOs_kruj-ZcGL-QbgRYU3UDOPJHvw-DbvD6Bmd3zrqGItn3Q/viewform',
          ig: 'https://www.instagram.com/p/De2boFqS3-R/', consultas: true }
      ]
    },
    // Página Torneos: "Conocé cada torneo" (pestañas, una por propuesta). ficha = [ícono, título, texto]
    guiaTorneos: {
      intro: 'Durante todo el año hay una propuesta para cada club, escuela y categoría. Todas terminan en el gran torneo de enero en Arteaga. Elegí una para conocerla.',
      lista: [
        { id: 'ma', nombre: 'Mundialito Alianza', sub: 'El torneo principal · desde 1987', logo: '/logo.webp', foto: 'd05',
          txt: 'La competencia que dio origen a todo. Durante unos diez días de enero, Arteaga y sus subsedes reciben a clubes, escuelas y selectivos de todo el país y del exterior. Es el gran cierre del Circuito Mundialito.',
          ficha: [['quien', 'Quiénes juegan', 'Clubes, escuelas de fútbol y selectivos'], ['cat', 'Categorías', '2012 a 2018 · masculino'], ['cal', 'Cuándo', 'Del 8 al 17 de enero de 2027 (41.ª edición)'], ['pin', 'Dónde', 'Arteaga y subsedes de la región (16 sedes en 2026)'], ['reloj', 'Duración', 'Unos 10 días']],
          unico: 'La inauguración con el desfile de las delegaciones y el encendido de la Llama Votiva. En la última edición jugaron más de 4.500 chicos de más de 250 instituciones.' },
        { id: 'pm', nombre: 'Premundialitos', sub: 'El camino hacia enero', logo: '/logo.webp', foto: 's01',
          txt: 'Torneos en distintas ciudades del país, con el mismo espíritu del Mundialito. Cada Premundialito es una experiencia propia y, además, una puerta de entrada al torneo de enero.',
          ficha: [['quien', 'Quiénes juegan', 'Clubes, escuelas de fútbol y selectivos'], ['cat', 'Categorías', 'Las mismas que el Mundialito de enero'], ['cal', 'Cuándo', 'Durante todo el año'], ['pin', 'Dónde', 'Victoria y Federal (Entre Ríos), San Basilio y Leones (Córdoba) y San Nicolás (Buenos Aires)']],
          unico: 'Según cada edición y categoría, dan la posibilidad de clasificar con inscripción gratuita al Mundialito Alianza de enero.' },
        { id: 'es', nombre: 'Torneos Especiales', sub: 'Nuevas sedes, nuevas experiencias', logo: '/logo.webp', foto: '/img/especiales-damfield.jpg',
          txt: 'Competencias con identidad propia que organizamos junto a otra institución. El Mundialito pone la marca y la estructura deportiva; la institución anfitriona, el predio y la infraestructura.',
          ficha: [['quien', 'Quiénes juegan', 'Clubes, escuelas de fútbol y selectivos'], ['cat', 'Categorías', 'Las mismas que el Mundialito de enero'], ['cal', 'Cuándo', 'En fechas especiales del año'], ['pin', 'Dónde', 'Mundialito Alianza Funes, en Estancia Damfield']],
          unico: 'En 2026 se jugaron dos ediciones en Funes. La de octubre reunió 66 equipos y tuvo a Maxi Rodríguez en la inauguración.' },
        { id: 'ju', nombre: 'Torneo Juvenil de Clubes', sub: 'Para seguir siendo parte', logo: '/img/logo-juvenil.webp', foto: '/img/juvenil-portada.jpg',
          txt: 'Un torneo internacional pensado para clubes, en las categorías más grandes. Mantiene la esencia del Mundialito y suma los desafíos de una etapa deportiva diferente.',
          ficha: [['quien', 'Quiénes juegan', 'Solo clubes'], ['cat', 'Categorías', 'Sub 17 y Sub 15 masculino, y Sub 15 femenino'], ['cal', 'Cuándo', 'Noviembre'], ['pin', 'Dónde', 'Club Atlético Alianza, Arteaga'], ['reloj', 'Duración', '3 días']],
          unico: 'Reúne a clubes de distintas provincias y a delegaciones de Bolivia y Estados Unidos.' },
        { id: 'en', nombre: 'Encuentros', sub: 'Para los más chiquitos', logo: '/img/nenito.webp', foto: 'e16', aparte: true,
          txt: 'Un fin de semana en familia para las categorías más chicas, las que todavía no juegan en enero. Porque en el Mundialito cada categoría tiene su lugar durante el año.',
          ficha: [['quien', 'Quiénes juegan', 'Clubes y escuelas de fútbol'], ['cat', 'Categorías', 'Las más chiquitas, que todavía no juegan en enero'], ['cal', 'Cuándo', 'Durante el año'], ['pin', 'Dónde', 'Club Atlético Alianza, Arteaga']],
          unico: 'Para muchos chicos y chicas es la primera vez que viven el Mundialito.' }
      ]
    },
    // 5. Presente y futuro
    futuro: {
      titulo: 'Nuestra esencia permanece',
      parrafos: [
        'Desde aquella primera edición de 1987 hasta el Circuito Mundialito, muchas cosas cambiaron: crecieron las competencias, se sumaron categorías y sedes. Pero hay algo que nunca cambió: nuestra manera de entender el deporte.',
        'Creemos que el fútbol es mucho más que una competencia. Es una herramienta para enseñar valores, crear amistades, fortalecer vínculos y acompañar el crecimiento de chicos y chicas.',
        'Detrás de cada torneo hay dirigentes, profesores, árbitros, voluntarios, familias, comunidades anfitrionas y empresas. El Mundialito nunca fue solamente el esfuerzo de una institución.'
      ],
      items: ['Nuestra esencia permanece', 'Más que una competencia', 'Un esfuerzo compartido'],
      fotoVentana: 'm06',
      foto: 'd01',
      porvenir: 'Miramos hacia el futuro con el mismo entusiasmo que impulsó aquella primera edición. Las canchas cambian, los equipos se renuevan y cada generación escribe sus propias historias. Pero las emociones permanecen.',
      cierre: 'Mundialito. Una historia que nos une. Una pasión que nos encuentra.',
      // Gráfica de la próxima edición (identidad visual 2027)
      proxima: { img: '/img/41-edicion.png', txt: '8 al 17 de enero de 2027 · Arteaga, Santa Fe' }
    },
    porque: [
      { ic: 'history', t: 'Cuatro décadas de historia', d: 'Desde 1987, generaciones de futbolistas han sido protagonistas del Mundialito Alianza. Una trayectoria de 40 ediciones que nos convirtió en una tradición del fútbol infantil, construida con pasión, compromiso y valores.' },
      { ic: 'map', t: 'Fútbol sin fronteras', d: 'Clubes de diferentes provincias argentinas y del exterior se encuentran para compartir una misma pasión. Nuevos rivales, distintas culturas y la oportunidad de competir más allá de las fronteras de cada región.' },
      { ic: 'calendar', t: 'Diez días inolvidables', d: 'El Mundialito Alianza transforma cada enero en una verdadera fiesta del fútbol infantil. Diez días de competencia, múltiples sedes y cientos de historias que se escriben dentro y fuera de la cancha.' },
      { ic: 'pin', t: 'Un circuito, infinitas oportunidades', d: 'El fútbol no se detiene en enero. Con los Premundialitos, los Encuentros y el Torneo Juvenil de Clubes, llevamos la experiencia Mundialito a nuevas ciudades, categorías y momentos del año.' },
      { ic: 'heart', t: 'Mucho más que fútbol', d: 'Un viaje, una amistad, un gol, una experiencia compartida. El Mundialito es ese lugar donde chicos, familias y entrenadores construyen recuerdos que perduran mucho después del último partido.' },
      { ic: 'shield', t: 'Una experiencia pensada para vos', d: 'Detrás de cada torneo hay un equipo comprometido con la organización, la planificación deportiva y el acompañamiento a las delegaciones. Trabajamos para que cada club pueda concentrarse en lo más importante: vivir y disfrutar el fútbol.' }
    ],
    // Futbolistas profesionales que jugaron el Mundialito (placas en img/j)
    futbolistas: {
      titulo: 'Pasaron por el Mundialito',
      txt: 'Antes de llegar a la Selección y a las grandes ligas, jugaron en Arteaga.',
      lista: [
        { n: 'Javier Mascherano', d: 'Defensores de Barrio Vila · Categoría 84', f: '/img/j/j05.jpg' },
        { n: 'Lucas Biglia', d: 'Argentinos Juniors · Categoría 86', f: '/img/j/j03.jpg' },
        { n: 'Javier Saviola', d: '', f: '/img/j/j02.jpg' },
        { n: 'Martín Demichelis', d: '', f: '/img/j/j04.jpg' },
        { n: 'Nicolás Pareja', d: 'Argentinos Juniors · Categoría 84', f: '/img/j/j06.jpg' },
        { n: 'Fatura Broun', d: 'Rosario Central · Categoría 86', f: '/img/j/j01.jpg' }
      ]
    },
    // Bonos: cómo funcionan (sección propia en Torneos)
    bonos: {
      titulo: 'Bonos para viajar',
      intro: 'En todos nuestros torneos cada delegación recibe bonos para vender. Es la forma que encontramos para que viajar al Mundialito casi no salga del bolsillo de las familias.',
      pasos: [
        { t: 'Recibís los bonos', d: 'Cada categoría inscripta recibe 200 bonos para vender.' },
        { t: 'Los chicos los venden', d: 'Los ofrecen en su pueblo o ciudad: familia, vecinos, comercios y amigos.' },
        { t: 'Hacemos el sorteo', d: 'Sorteamos entre todos los bonos vendidos y quienes los compraron pueden ganar premios en efectivo.' },
        { t: 'La delegación se financia', d: 'Lo recaudado queda para la categoría y ayuda a pagar los viajes y la inscripción.' }
      ],
      cierre: 'Así, cada club, escuela o selectivo puede venir al Mundialito con un gasto mínimo.',
      foto: 'm11'
    },
    // Logo de AFA en /img/afa.png (si "logo" queda vacío, se muestra el texto AFA)
    scouts: { t: 'Una vidriera para el futuro', d: 'Para muchos chicos, el Mundialito es la primera vidriera de su carrera. En el torneo de enero y en las distintas fechas del circuito hay ojeadores de la Asociación del Fútbol Argentino que siguen de cerca cada partido, y clubes de AFA que compiten con sus divisiones formativas.',
      puntos: ['Ojeadores de la AFA en el Mundialito de enero y en el circuito', 'Clubes de AFA compiten con sus categorías formativas', 'Chicos de todo el país, a la vista de los formadores'],
      // Fotos de chicos con camisetas de clubes de AFA (Rosario Central y Newell's, Funes 2026)
      fotos: ['e19','e22','e21','e23'],
      org: 'Ojeadores de la AFA', logo: '/img/afa.png' },
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
        { cat: 'Sub 17', equipos: '14 equipos', formato: '2 zonas de 4 equipos y 2 zonas de 3 equipos que disputan un interzonal. Todos contra todos dentro de cada zona: 3 partidos por equipo. Después se reparten en tres copas.',
          copas: [
            { n: 'Oro', c: 'oro', t: 'Los 4 primeros. Semis: mejor 1° vs 4° mejor 1° y 2° mejor 1° vs 3° mejor 1°. Los perdedores juegan por el 3.er y 4.º puesto.' },
            { n: 'Plata', c: 'plata', t: 'Los 4 segundos. Semis: mejor 2° vs 4° mejor 2° y 2° mejor 2° vs 3° mejor 2°. Los perdedores quedan eliminados.' },
            { n: 'Bronce', c: 'bronce', t: 'Los 4 terceros. Semis: mejor 3° vs 4° mejor 3° y 2° mejor 3° vs 3° mejor 3°. Los perdedores quedan eliminados.' } ] },
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
