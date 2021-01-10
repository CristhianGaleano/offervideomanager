<template>
  <v-container fluid>

    <v-layout>
      <v-flex xs12>
          <v-img
          width="100%"
          transition="scale-transition"
          src="../assets/banner.png"
          >
          </v-img>
          
        </v-flex>  
        
    </v-layout>
    <v-layout justify-center>
      <v-flex md12>
        <v-text-field v-model="busqueda"
        label="Busqueda"
                      placeholder="Tendré suerte ..."
                      filled
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row align-stretch my-4>
      <v-flex xs12 sm2>
        <Categorias @showOferta="showOferta" />
      </v-flex>
      
      
      
      <v-flex xs12 md10>
         <v-layout row justify-center>
          
           <v-flex class="my-1 mx-3" xs12 sm8 md3  v-for="programa in filterOferta" :key="programa.name">
              <v-card class="d-flex flex-column justify-space-between"  min-height="355" max-width="285">
                
            <v-img  max-height="156" :src="programa.image"></v-img>
            <v-card-subtitle  class="mb-0 pa-1 text-caption text-right font-weight-thin">
              <v-chip class="px-1" color="primary">
                {{ programa.tag }}
              </v-chip>
            </v-card-subtitle>
            <v-card-title class="formater pt-1 text-subtitle-1">{{ programa.title }}</v-card-title>
            <v-card-subtitle>{{ programa.subtitle }}</v-card-subtitle>
            <v-card-actions  class="mb-0">
              <v-spacer />
              
              <v-btn  class="primary" small :href="solicitarasesoria">Solicitar asesoría</v-btn> 
              <v-spacer></v-spacer>
              <Modal small :programaSelected="programa" /> 
                <!-- <v-flex xs12> -->
                  <!-- </v-flex> -->
              
                                
              
            </v-card-actions>
          </v-card>
           </v-flex>
           
         </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Categorias from '@/components/Categorias'
import Modal from '@/components/Modal'

export default {
  name: 'Home',
  components: {
    Categorias, Modal
    }, 

  computed: {
    filterOferta () {
      if(this.selectioned == ""){
      console.log(this.selectioned.toLowerCase())
        if(this.busqueda){
          return this.programas.filter( programa => {
            console.log("Buscando...")
            console.log(programa.title , "-", this.busqueda)
            return programa.title.includes(this.busqueda)
          } )
        }else{
          return this.programas;
        }
      }else{
        return this.programas.filter( programa => programa.categoria == this.selectioned.toLowerCase() )
      }
    }
  },
  methods: {
    showOferta(categoria) {
      this.selectioned = categoria
    }
  },
  data() {
    return {
      // Categoría seleccionada
      selectioned: '',
      busqueda: '',
      solicitarasesoria: 'https://wa.me/573013877446?text=Hola!%20Dejanos%20tu%20solicitud%20',
      programas: [
        { image: './assets/pregrados/admin.png', title: 'Administración de Empresas', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'El programa de Administración de Empresas de la Universidad Católica de Pereira, es el único de la región que ha sido tres veces acreditado de Alta Calidad por el Ministerio de Educación Nacional. Está orientado a formar líderes con altas competencias éticas y profesionales para transformar las organizaciones, con capacidades investigativas como lo exige el mundo globalizado.', page: 'https://www.ucp.edu.co/pregrado/administracion-de-empresas/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/PCqVJ5lDHWw' },
        { image: './assets/pregrados/II.png', title: 'Ingeniería Industrial', subtitle: 'Facultad de Ciencias Básicas e Ingeniería',text: 'El programa de Ingeniería Industrial de la Universidad Católica de Pereira apoya la formación de un profesional flexible y abierto al cambio. con una amplia formación en ciencias básicas e ingeniería aplicada, que fomentan la investigación, la creatividad, el liderazgo y una elevada responsabilidad social, para potenciar el talento humano e involucrar los recursos necesarios que contribuyan a la productividad de las empresas, al desarrollo y competitividad de la región, el país y a mejorar la calidad de vida de las personas.', page: 'https://www.ucp.edu.co/pregrado/ingenieria-industrial/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/9OTXBjOxcEU' },
        
        { image: './assets/pregrados/arquitectura.png', title: 'Arquitectura', subtitle: 'Facultad de Arquitectura y Diseño',text: 'El programa de Arquitectura de la Universidad Católica de Pereira hace parte de ACFA - (Asociación Colombiana de Facultades de Arquitectura), cuenta con docentes investigadores con formación pedagógica y posgradual disciplinar. Brinda espacios adecuados para la enseñanza del proyecto, posee modernos laboratorios, salas de sistemas y recursos bibliográficos actualizados. Hace parte de redes académicas nacionales e internacionales.', tag: 'Pregrado', page: 'https://www.ucp.edu.co/pregrado/arquitectura/', categoria: 'pregrados', script: 'https://www.youtube.com/embed/wVgr1YPLPjY' },
        { image: './assets/pregrados/csp.png', title: 'Comunicación Social y Periodismo', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'El programa de Comunicación Social – Periodismo de la Universidad Católica de Pereira sirve de apoyo para la formación de profesionales con pleno desenvolvimiento en público y en lo privado en el ámbito regional, nacional e internacional, con sentido crítico, ético y estético que interactúa con la sociedad y sus fenómenos comunicativos.', page: 'https://www.ucp.edu.co/pregrado/comunicacion-social-periodismo/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/p12k-NI-_fc' },
        
        { image: './assets/pregrados/di.png', title: 'Diseño Industrial', subtitle: 'Facultad de Arquitectura y Diseño',text: 'En el programa de Diseño Industrial de la Universidad Católica de Pereira, se estudia la relación entre el ser humano, los productos, los servicios, los sistemas y las experiencias, reconociendo problemas y oportunidades en su contexto, a través de los procesos de pensamiento proyectual desde el diseño que planteen soluciones como estrategias innovadoras, sustentables y viables, con impacto social para mejorar la calidad de vida y el desarrollo empresarial.', page: 'https://www.ucp.edu.co/pregrado/diseno-industrial/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/gaSI3zS3XnU' },
        
        { image: './assets/pregrados/mercadeo.png', title: 'Mercadeo', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'El profesional en Mercadeo tendrá formación en competencias que le permitan explorar, generar y entregar valor a las empresas a través de establecer, diseñar, planear, organizar, dirigir, ejecutar y controlar las actividades de las áreas y departamentos de organizaciones gubernamentales, comerciales e industriales comprometidas con el mercadeo, ventas, publicidad y relaciones públicas. El Mercadólogo de nuestra Universidad tiene la posibilidad de adelantar doble programa con Negocios Internacionales o Administración de Empresas.', page: 'https://www.ucp.edu.co/pregrado/mercadeo/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/LYR6GAIYz0I' },
        { image: './assets/pregrados/NI.png', title: 'Negocios Internacionales', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'El programa de Negocios Internacionales de la Universidad Católica de Pereira se ha convertido en un aliado del sector público y privado en los procesos de internacionalización empresarial de la ciudad y de la región, encaminados asumir los retos del nuevo mundo globalizado.', page: 'https://www.ucp.edu.co/pregrado/negocios-internacionales/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/bTaAWNaHZzc' },
        { image: './assets/pregrados/psico.png', title: 'Psicología', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'El programa de Psicología de la Universidad Católica de Pereira se caracteriza por brindar a sus estudiantes una formación rigurosa, acorde a los desarrollos disciplinares y que responde a las necesidades regionales y nacionales, logrando que nuestros psicólogos sean personas y profesionales exitosos.', page: 'https://www.ucp.edu.co/pregrado/psicologia/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/AZlB2kRMxO8' },
        
        { image: './assets/pregrados/tgmercadeo.png', title: 'Tecnología en Gestión de Mercadeo', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'El programa de Tecnología en Gestión de Mercadeo de la Universidad Católica de Pereira brinda una formación en competencias necesarias para afrontar los modelos de gestión de los diferentes mercados que se instalan en el ámbito nacional y regional, y desde una visión social y humanista logra integrar la capacidad de liderazgo en los procesos de emprendimiento y aportar acompañamiento y asesoría a la gerencia desde la gestión de mercadeo en diferentes tipos de organizaciones.', page: 'https://www.ucp.edu.co/pregrado/tecnologia-en-mercadeo/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/KlIOkSZwbRQ' },
        
        { image: './assets/pregrados/IST.png', title: 'Ingeniería de Sistemas y Telecomunicaciones', subtitle: 'Facultad Ciencias Básicas e Ingeniería',text: 'El programa de Ingeniería de Sistemas y Telecomunicaciones de la Universidad Católica de Pereira es un apoyo en la formación de profesionales caracterizados por su capacidad en la autogestión del aprendizaje, su competencia innovadora, su emprendimiento, su pensamiento crítico, su actitud investigativa, su fundamentación ética y humanística e idoneidad profesional, para contribuir a los avances tecnológicos que demandan la región y la nación, posibilitando, de este modo, el mejoramiento de las condiciones de articulación de la sociedad.', page: 'https://www.ucp.edu.co/pregrado/ingenieria-sistemas-telecomunicaciones/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/HGOyCEU_32M' },
        { image: './assets/especializaciones/dsoftware.png', title: 'Desarrollo de Software', subtitle: 'Facultad de Ciencias Básicas e Ingeniería',text: 'La Especialización es un programa que busca constituirse en alternativa válida para la profundización en el conocimiento disciplinar de las Tecnologías de la Información, máxime cuando las investigaciones y los adelantos científicos evidencian la urgencia de contar con talento humano calificado en un campo que posee una gran demanda desde el ámbito social y productivo.', page: 'https://www.ucp.edu.co/posgrado/desarrollo-de-software/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/rcp0Mk6_3O4' },
        { image: './assets/especializaciones/psicoclinica.png', title: 'Psicología Clínica', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'La especialización en Psicología Clínica con énfasis en psicoterapia con niños y adolescentes ofrece una formación plural, flexible y problémica en el área de la psicoterapia, desde tres perspectivas clínicas: el enfoque cognitivo-conductual, el psicoanálisis y la terapia sistémica.', page: 'https://www.ucp.edu.co/posgrado/psicologia-clinica/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/28tb7tT4T_0' },
        { image: './assets/especializaciones/GHO.png', title: 'Gestión Humana en las Organizaciones', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'La Universidad Católica de Pereira ha venido discutiendo las principales tendencias, abordajes, problemáticas, vertientes y fenómenos más trabajados en la literatura especializada y los aplicados actualmente en las organizaciones como es el caso de la Gestión Humana. La discusión tiene como marco de referencia las condiciones actuales de globalización y de exigencias de velocidad, adaptación y fluidez, que marcan la diferencia y proponen desafíos a los modelos tradicionales de Gestión Humana. En medio de las nuevas realidades globalizantes, el mundo de los negocios afecta el de las organizaciones, que a su vez afectan el del trabajo y por ende las personas; razón por la cual se hace necesario y pertinente promover el desarrollo de una visión sistémica de los contextos organizacionales, reconociendo el modelo de hombre y gestión de los procesos desde una postura psicosocial.', page: 'https://www.ucp.edu.co/posgrado/gestion-humana-en-las-organizaciones/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/919eaksFQd0' },
        { image: './assets/especializaciones/PSC.png', title: 'Psicología Social Comunitaria y Acción Psicosocial', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'Programa interdisciplinar que busca generar en los estudiantes fortalezas epistémicas y práxicas en la labor comunitaria; por ello, se estructura en tres núcleos de formación integral y humanista, en razón de las demandas actuales de las entidades públicas y privadas que gestionan proyectos de atención psicosocial.', page: 'https://www.ucp.edu.co/posgrado/psicologia-social-comunitaria-accion-psicosocial/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/kK9ez038_ek' },
        { image: './assets/especializaciones/edumatica.png', title: 'Edumática', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'La “Especialización en Edumática: Innovación Educativa mediada por TIC” se proyecta como respuesta al lugar que ocupan hoy las tecnologías en las prácticas educativas y la sociedad en general, desde una reflexión crítica y pedagógica.', page: 'https://www.ucp.edu.co/posgrado/edumatica/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/wWf-q6P5toU' },
        
        { image: './assets/maestrias/mie.png', title: 'Innovación Educativa', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'La Maestría en Innovación Educativa es un posgrado que propone una reflexión por los procesos educativos, entendidos como constantes, diversos, vitales y necesarios. Se busca con la innovación educativa, a través de diferentes herramientas disponibles y adecuadas, impactar los procesos educativos y favorecer la enseñanza, el aprendizaje y las relaciones de los actores educativos.', page: 'https://www.ucp.edu.co/posgrado/maestria-en-innovacion-educativa/', tag: 'Maestría', categoria: 'maestrias', script: 'https://www.youtube.com/embed/9Q2xI9hl5jk' },
        { image: './assets/maestrias/PDH.png', title: 'Pedagogía y Desarrollo Humano', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'La Maestría en Pedagogía y Desarrollo Humano es un programa de Posgrado que se concibe para reflexionar la educación y el desarrollo como manifestaciones culturales complementarias e interactúantes que posibilitan dinámicas de autorrealización de la persona humana y la sociedad.', page: 'https://www.ucp.edu.co/posgrado/mae-pedagogia-y-desarrollo-humano/', tag: 'Maestría', categoria: 'maestrias', script: 'https://www.youtube.com/embed/6Cxadg_2LYc' },
        { image: './assets/maestrias/EC.png', title: 'Estudios Culturales', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'La explosión de nuevas identidades en el terreno político, las luchas de las minorías por reivindicar sus derechos culturales, la diversidad de las luchas sociales, sus imaginaciones y su inventivas a través de las artes en acción, el sabotaje cultural, la contra publicidad, las tecnologías digitales y la construcción de nuevos lenguajes desde los audiovisuales hasta los agenciados por el cuerpo como lugar de confrontación de viejas y nuevas hegemonías, ofrecen un panorama inquietante en el cual los estudios culturales adquieren un acento particular. La aparición de la industria cultural y las formas globales de intercambio del mercado configuran el panorama económico y político de su emergencia.', page: 'https://www.ucp.edu.co/posgrado/estudios-culturales/', tag: 'Maestría', categoria: 'maestrias', script: 'https://www.youtube.com/embed/Pp_czMn_v44' },
        { image: './assets/doctorados/EDH.png', title: 'Educación en Desarrollo Humano', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'El Doctorado forma doctores que se pregunten y produzcan conocimiento sobre la implicación “Educación en Desarrollo Humano” desde tres matrices de conocimiento: educación, referente a los debates sobre educación, pedagogía y formación desde autores y teorías de la modernidad y posmodernidad; desarrollo humano, que aglutina los avances, fisuras y tensiones sobre lo que se ha entendido por desarrollo desde miradas que potencian las posibilidades de utopizar y desfronterizar dicho conocimiento; y contexto, que ofrece territorio a las matrices en contextos situados que se tranversalizan en la investigación.', page: 'https://www.ucp.edu.co/posgrado/doctorado-en-educacion-y-desarrollo-humano/', tag: 'Doctorado', categoria: 'doctorado', script: 'https://www.ucp.edu.co/portal/wp-content/uploads/2020/10/EDH.jpeg' },
        { image: './assets/pregrados/DAV.png', title: 'Diseño Audiovisual', subtitle: 'Facultad de Arquitectura y Diseño',text: 'Técnico profesional en video, disc- jockey y sonido, primer ciclo del programa Profesional en Diseño Audiovisual, que se oferta bajo la modalidad de ciclos propedéuticos, lo que implica que el estudiante recibirá en el transcurso de los 9 semestres y de manera anticipada su título en dicho Técnico y también como Tecnólogo en producción de imagen y sonido. Este nuevo Pregrado, es único en bajo esta modalidad y se convierte en una propuesta novedosa para los jóvenes que desean continuar su proyecto de vida en espacios laborales como productoras, medios de comunicación, estudios de grabación, en la docencia, como guionistas, productores multimedia, animadores, dj´s, y como editores en industrias creativas, culturales y del entretenimiento, montaje de conciertos y eventos, entre otros', page: 'https://www.ucp.edu.co/pregrado/tecnica-profesional-en-video-disc-jockey-y-sonido/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/vd1RXj4AHxg' },
        { image: './assets/pregrados/LER.png', title: 'Licenciatura en Educación Religiosa', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'La Licenciatura en Educación Religiosa (LER) de la Universidad Católica de Pereira, es un programa con modalidad a distancia y presencialidad los días sábados. El plan de estudios de la LER, en su estructura se constituye con base en áreas académicas, núcleos problémicos, fases de formación y desarrollo de competencias.', page: 'https://www.ucp.edu.co/pregrado/licenciatura-educacion-religiosa/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/m1DF4CRWPmk' },
        { image: './assets/pregrados/TDS.png', title: 'Tecnología en Desarrollo de Software', subtitle: 'Facultad Ciencias Básicas e Ingeniería',text: 'El programa de Tecnología en Desarrollo de Software de la Universidad Católica de Pereira, es apoyo para la formación de personas creativas e innovadoras con competencia para aplicar conocimientos en la solución de problemas tecnológicos y con capacidad para la toma de decisiones, capaces de diseñar y desarrollar proyectos que garanticen el uso y aprovechamiento adecuado de sistemas de información en organizaciones nacionales e internacionales, mediante la apropiación de tecnologías informáticas.', page: 'https://www.ucp.edu.co/pregrado/tecnologia-en-sistemas/', tag: 'Pregrado', categoria: 'pregrados', script: 'https://www.youtube.com/embed/QitMfV7VNis' },
        { image: './assets/maestrias/AU.png', title: 'Arquitectura y Urbanismo', subtitle: 'Facultad de Arquitectura y Diseño',text: '', page: 'https://www.ucp.edu.co/posgrado/arquitectura-y-urbanismo/', tag: 'Maestría', categoria: 'maestrias', script: 'https://www.youtube.com/embed/Mv81E-CapF0' },
        { image: './assets/maestrias/finanzas.png', title: 'Finanzas', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'La Maestría en Finanzas es un posgrado de profundización que ofrece una formación cuantitativa y analítica sólida, orientado a personas con experiencia laboral que deseen desempeñarse con éxito en el ámbito de las finanzas.', page: 'https://www.ucp.edu.co/posgrado/mestria-en-finanzas/', tag: 'Maestría', categoria: 'maestrias', script: 'https://www.youtube.com/embed/bXT7G3R_qo4' },
        { image: './assets/maestrias/GI.png', title: 'Gestión de la Innovación', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'La Maestría en Gestión de la Innovación se caracteriza por un marcado énfasis en la transformación a través de la acción, orientado a la solución de retos o desafíos empresariales y sociales, que permitan fomentar en los profesionales, competencias de liderazgo, pensamiento estratégico y sistémico, cooperación, negociación y gestión de ideas y proyectos.', page: 'https://www.ucp.edu.co/posgrado/maestria-en-gestion-de-la-innovacion/', tag: 'Maestría', categoria: 'maestrias', script: 'https://www.youtube.com/embed/LoQGtOkDous' },
        { image: './assets/maestrias/GDR.png', title: 'Gestión del Desarrollo Regional', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'Su objetivo es comprender la dinámica del desarrollo regional a partir de la fundamentación teórica y de la investigación que integra sus dimensiones económica, administrativa y ambiental, para contribuir en la formación de personas con capacidad de liderar la formulación y puesta en marcha de políticas públicas y estrategias sectoriales y empresariales que, con un alto sentido de lo ético, aporten a la solución de los problemas que limitan el desarrollo.', page: 'https://www.ucp.edu.co/posgrado/gestion-del-desarrollo-regional/', tag: 'Maestría', categoria: 'maestrias', script: 'https://www.youtube.com/embed/HWla06to_jQ' },
        { image: './assets/maestrias/GP.png', title: 'Gestión de Proyectos', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'El Magister en Gestión de Proyectos cuenta con la idoneidad para apoyar, desde las dimensiones humanística y disciplinar, las diferentes áreas en la gestión de proyectos, empezando con los saberes previos de la caracterización de la zonas objetivo e influencia, el estudio de viabilidad financiera hasta la implantación, formulación, evaluación económica y ambiental y análisis de riesgos, en las empresas de los sectores público y privado, agenciando con distintas instancias de los órdenes nacional e internacional, la consecución de fondos con sus respectivos avales técnicos y justificación de pertinencia. Estas competencias profesionales están en correspondencia, en cada una de las fases de los proyectos, con los estándares de Project Management Institute (PMI) bajo el criterio de las mejores prácticas.', page: 'https://www.ucp.edu.co/posgrado/maestria-en-gestion-de-proyectos/', tag: 'Maestría', categoria: 'maestrias', script: 'https://www.youtube.com/embed/u0GTCyFEcDc' },
        { image: './assets/especializaciones/GCS.png', title: 'Gestión de la Construcción Sostenible', subtitle: 'Facultad de Arquitectura y Diseño',text: 'La Especialización se estructura en dos componentes, el primero asociado a la “gestión” siendo este el conocimiento específico que ofrece el Programa en relación con la competencia básica del especialista y el segundo relacionado con la “construcción sostenible” donde se establece el rasgo distintivo que tendrá el Programa en relación con las propuestas académicas y curriculares.', page: 'https://www.ucp.edu.co/posgrado/especializacion-en-gestion-de-la-construccion-sostenible/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/UfP_QVpUcTc' },
        { image: './assets/especializaciones/CAF.png', title: 'Ciberasesoría Financiera', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'La Especialización en Ciberasesoría Financiera, apoya la formación de profesionales con bases sólidas en el saber financiero y en el manejo e interpretación de grandes volúmenes de datos y su uso eficiente en los mercados, servicios y gestión financiera de la empresa, procurando un equilibrio en la ejecución de los procesos financieros y la informática, facilitando así, la aplicación de conocimientos en las áreas de gestión de datos para la generación de nuevos productos y servicios financieros, políticas de financiamiento, gestión de riesgos financieros y la gestión de portafolios de inversión y financiación, con un sentido ético y privilegiando siempre la búsqueda del bien común.', page: 'https://www.ucp.edu.co/posgrado/especializacion-en-ciberasesoria-financiera/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/tk7TgtnuLX8' },
        { image: './assets/especializaciones/arbio.png', title: 'Arquitectura Bioclimática', subtitle: 'Facultad de Arquitectura y Diseño',text: 'La Universidad consciente de las necesidades del medio y de los niveles de competitividad que implica la formación de nuevos profesionales, y con la responsabilidad de realizar aportes en la solución de las problemáticas actuales del hábitat humano y profundizar en el conocimiento de los procesos sustentables donde la Arquitectura cumple un papel fundamental, propone un programa resultado del conocimiento de las dinámicas de la disciplina, de las fortalezas de sus áreas sustantivas (docencia – investigación- proyección) y como una contribución a las iniciativas de proyectos arquitectónicos y urbanos que surjan de la relación empresa-estado-comunidad.', page: 'https://www.ucp.edu.co/posgrado/arquitectura-y-urbanismo-bioclimatico/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/-nADaD7VYcQ' },
        { image: './assets/especializaciones/PDH.png', title: 'Pedagogía y Desarrollo Humano', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'El Programa ofrece una alternativa centrada en el humanismo para dar respuesta a las necesidades de cualificación del ejercicio profesional –en primera instancia–, pero, a su vez, contribuir al desarrollo de la Región a partir de la formación de especialistas competentes y pertinentes para el abordaje de diferentes problemas del contexto social local, nacional e internacional.', page: 'https://www.ucp.edu.co/posgrado/esp-pedagogia-y-desarrollo-humano/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/noyYCXtR7GI' },
        { image: './assets/especializaciones/GCC.png', title: 'Gerencia de la comunicación Corporativa', subtitle: 'Facultad de Ciencias Humanas, Sociales y de la Educación',text: 'La especialización en Gerencia de la Comunicación Corporativa de la Universidad Católica de Pereira es una apuesta académica de posgrado que pretende ser apoyo en la formación de especialistas con alto criterio ético y humano, con una sólida capacidad gerencial para liderar procesos de comunicación corporativa en las organizaciones de hoy.', page: 'https://www.ucp.edu.co/posgrado/gerencia-de-la-comunicacion-corporativa/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/ZvoAHM6SAUY' },
        
        { image: './assets/especializaciones/EPGT.png', title: 'Economía Pública y Gestión Territorial', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'Este Programa responde a la necesidad de formar especialistas con conocimiento de las lógicas e instrumentos de gestión de los recursos públicos y capacidad para proyectar en las escalas regional y local las políticas públicas de orden socioeconómico, en la búsqueda de un desarrollo equitativo de la sociedad local con eficiencia en la asignación de recursos.', page: 'https://www.ucp.edu.co/posgrado/economia-publica-y-gestion-territorial/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/aYJWUPDa0cU' },
        // { image: './assets/especializacion/finanzas.png', title: 'Finanzas', subtitle: 'Facultad de Ciencias Económicas y Administrativas',text: 'El Programa profundiza en el conocimiento de los avances teóricos y prácticos de las finanzas de capital, ofrece a los profesionales interesados, un acercamiento con la realidad financiera de las empresas, con el fin de facilitar la toma de decisiones minimizando los riesgos y la incertidumbre.', page: 'https://www.ucp.edu.co/posgrado/finanzas/', tag: 'Especialización', categoria: 'especializaciones', script: 'https://www.youtube.com/embed/tk7TgtnuLX8' },
        
      ]
    }
  },
}

</script>

<style >
  .formater {
    -ms-word-wrap: break-word;
    -ms-word-break: break-all;
    word-wrap: break-word;
    word-break: normal;
  }
</style>