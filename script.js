const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const accordions = [...document.querySelectorAll("[data-accordion], [data-faq]")];
const intentionButtons = [...document.querySelectorAll("[data-intention]")];
const intentionResult = document.querySelector("[data-intention-result]");
const accessForm = document.querySelector("[data-access-form]");
const formError = document.querySelector("[data-form-error]");
const formSuccess = document.querySelector("[data-form-success]");
const reveals = [...document.querySelectorAll(".reveal")];
const languageButtons = [...document.querySelectorAll("[data-language]")];
const scrollProgress = document.querySelector("[data-scroll-progress]");
const roomKicker = document.querySelector("[data-room-kicker]");
const roomName = document.querySelector("[data-room-name]");
const roomDots = [...document.querySelectorAll("[data-room-dot]")];

let currentLanguage = "en";

const i18n = {
  en: {
    lang: "en",
    title: "Katerina Noir Panama | The House Noir Private Access Screening",
    description: "The Katerina Noir is an adult-only private persona and House Noir access portal for screened private audience requests, tribute-based consideration, etiquette, discretion, and curated social experiences in Panama.",
    messages: {
      processed: "The application could not be processed.",
      invalid: "Please complete every required field and confirmation before requesting access.",
      submitting: "Submitting...",
      submit: "Submit Application",
      sent: "Your application has been sent. Private details are shared at my discretion.",
      failed: "The application could not be sent. Please try again, or send your introduction privately on Instagram."
    },
    intentions: {
      attention: {
        label: "The Proper Door",
        title: "Begin with etiquette.",
        copy: "Read the rules, apply with clarity, and understand that attention is considered through screening."
      },
      date: {
        label: "Dinner Date by Application",
        title: "Private planning follows screening.",
        copy: "Dinner date consideration requires the Veil Check, an aligned request, discretion, tribute culture, and mutual chemistry."
      },
      sponsor: {
        label: "Wardrobe or Ritual Sponsorship",
        title: "You may sponsor a mood.",
        copy: "Approved admirers may sponsor styling, beauty rituals, or preparation. Final presentation remains Katerina's."
      },
      gift: {
        label: "Thoughtful Gift",
        title: "Send with refinement.",
        copy: "Certificates, perfume, beauty rituals, books, candles, jewelry, wardrobe tributes, or dinner experiences are more aligned with The House than flowers."
      }
    },
    rooms: [
      { id: "threshold", kicker: "Room 01", name: "Threshold" },
      { id: "manifesto", kicker: "Room 02", name: "Manifesto" },
      { id: "fit", kicker: "Room 03", name: "Qualification" },
      { id: "rules", kicker: "Room 04", name: "House Rules" },
      { id: "screening", kicker: "Room 05", name: "The Veil Check" },
      { id: "offerings", kicker: "Room 06", name: "Offerings" },
      { id: "intention", kicker: "Room 07", name: "Intention" },
      { id: "application-flow", kicker: "Room 08", name: "Application Flow" },
      { id: "privacy", kicker: "Room 09", name: "Privacy" },
      { id: "apply", kicker: "Room 10", name: "Request Entry" },
      { id: "faq", kicker: "Room 11", name: "FAQ" }
    ]
  },
  es: {
    lang: "es",
    title: "Katerina Noir Panama | Filtro de Acceso Privado House Noir",
    description: "The Katerina Noir es una persona privada para adultos y un portal House Noir de acceso filtrado, consideracion por tributo, etiqueta, discrecion y experiencias sociales curadas en Panama.",
    messages: {
      processed: "La aplicacion no pudo procesarse.",
      invalid: "Completa todos los campos y confirmaciones obligatorias antes de solicitar acceso.",
      submitting: "Enviando...",
      submit: "Enviar Aplicacion",
      sent: "Tu aplicacion fue enviada. Los detalles privados se comparten a mi discrecion.",
      failed: "La aplicacion no pudo enviarse. Intenta de nuevo o envia tu presentacion privada por Instagram."
    },
    intentions: {
      attention: {
        label: "La Puerta Correcta",
        title: "Comienza con etiqueta.",
        copy: "Lee las reglas, aplica con claridad y entiende que la atencion se considera a traves del filtro."
      },
      date: {
        label: "Cena por Aplicacion",
        title: "La planificacion privada viene despues del filtro.",
        copy: "La consideracion para una cena requiere el Veil Check, una solicitud alineada, discrecion, cultura de tributo y quimica mutua."
      },
      sponsor: {
        label: "Patrocinio de Look o Ritual",
        title: "Puedes patrocinar un mood.",
        copy: "Los admiradores aprobados pueden patrocinar styling, rituales de belleza o preparacion. La presentacion final siempre permanece en manos de Katerina."
      },
      gift: {
        label: "Regalo con Intencion",
        title: "Envia con refinamiento.",
        copy: "Certificados, perfume, rituales de belleza, libros, velas, joyeria, tributos de vestuario o experiencias de cena estan mas alineados con The House que las flores."
      }
    },
    rooms: [
      { id: "threshold", kicker: "Sala 01", name: "Umbral" },
      { id: "manifesto", kicker: "Sala 02", name: "Manifiesto" },
      { id: "fit", kicker: "Sala 03", name: "Calificacion" },
      { id: "rules", kicker: "Sala 04", name: "Reglas de la Casa" },
      { id: "screening", kicker: "Sala 05", name: "Veil Check" },
      { id: "offerings", kicker: "Sala 06", name: "Offerings" },
      { id: "intention", kicker: "Sala 07", name: "Intencion" },
      { id: "application-flow", kicker: "Sala 08", name: "Flujo" },
      { id: "privacy", kicker: "Sala 09", name: "Privacidad" },
      { id: "apply", kicker: "Sala 10", name: "Solicitar Entrada" },
      { id: "faq", kicker: "Sala 11", name: "FAQ" }
    ],
    text: {
      "Skip to content": "Saltar al contenido",
      "Room 01": "Sala 01",
      "Threshold": "Umbral",
      "Manifesto": "Manifiesto",
      "Rules": "Reglas",
      "Screening": "Filtro",
      "Offerings": "Offerings",
      "Apply": "Aplicar",
      "FAQ": "FAQ",
      "The Threshold": "El Umbral",
      "Velvet. Intention. Respect.": "Velvet. Intention. Respect.",
      "A private House Noir portal for screened access, refined etiquette, tribute-based consideration, and curated social experience requests in Panama.": "Un portal privado House Noir para acceso filtrado, etiqueta refinada, consideracion por tributo y solicitudes de experiencia social curada en Panama.",
      "You found the door. What happens next depends on intention, generosity, verification, and manners.": "Encontraste la puerta. Lo que ocurre despues depende de intencion, generosidad, verificacion y modales.",
      "Apply for Access": "Aplicar para Acceso",
      "Read the Rules": "Leer las Reglas",
      "Understand Screening": "Entender el Filtro",
      "House Access": "Acceso a la Casa",
      "Adults 18+ only.": "Solo adultos 18+.",
      "Screening protects both sides.": "El filtro protege a ambas partes.",
      "Discretion is mutual.": "La discrecion es mutua.",
      "Tribute begins consideration, not entitlement.": "El tributo inicia consideracion, no derecho adquirido.",
      "The House Noir Manifesto": "El Manifiesto House Noir",
      "A private persona is approached, not consumed.": "Una persona privada se aborda, no se consume.",
      "The House Noir exists for those who understand discretion, emotional control, and composed desire. This is not casual dating, empty attention, or endless conversation.": "The House Noir existe para quienes entienden discrecion, control emocional y deseo compuesto. Esto no es dating casual, atencion vacia ni conversacion interminable.",
      "Private audience is considered through etiquette, verification, tribute culture, and mutual chemistry. Access is considered, never owed.": "La audiencia privada se considera mediante etiqueta, verificacion, cultura de tributo y quimica mutua. El acceso se considera; nunca se debe.",
      "Read. Apply. Verify. Offer. Await instruction.": "Lee. Aplica. Verifica. Ofrece. Espera instruccion.",
      "Qualification": "Calificacion",
      "For Those Who Understand": "Para Quienes Entienden",
      "This is for people who value privacy, patience, generosity, emotional maturity, and clear rules.": "Esto es para personas que valoran privacidad, paciencia, generosidad, madurez emocional y reglas claras.",
      "Recognized": "Reconocidos",
      "Respectful and discreet applicants.": "Aplicantes respetuosos y discretos.",
      "Adults who can verify identity when requested.": "Adultos que pueden verificar identidad si se solicita.",
      "People who understand that tribute signals seriousness.": "Personas que entienden que el tributo senala seriedad.",
      "Those seeking a polished, private social experience.": "Quienes buscan una experiencia social privada y pulida.",
      "Not For Everyone": "No Es Para Todos",
      "Timewasters, fake profiles, or hidden intentions.": "Personas que hacen perder tiempo, perfiles falsos o intenciones ocultas.",
      "Pressure, explicit demands, intoxication, or entitlement.": "Presion, demandas explicitas, intoxicacion o entitlement.",
      "Endless chatting without direction.": "Chat interminable sin direccion.",
      "Anyone who refuses screening or House etiquette.": "Cualquiera que rechace el filtro o la etiqueta de la Casa.",
      "House Rules": "Reglas de la Casa",
      "Before requesting attention, understand the etiquette.": "Antes de solicitar atencion, entiende la etiqueta.",
      "Rule I": "Regla I",
      "Approach with Intention": "Acercate con Intencion",
      "Introduce yourself with confidence, clarity, and respect. Empty messages and vague requests are ignored.": "Presentate con confianza, claridad y respeto. Los mensajes vacios y las solicitudes vagas se ignoran.",
      "Rule II": "Regla II",
      "Screening Is Required": "El Filtro Es Obligatorio",
      "No verification, no access. Sensitive details should not be sent casually; private instructions are shared only after screening.": "Sin verificacion, no hay acceso. Los detalles sensibles no deben enviarse casualmente; las instrucciones privadas se comparten solo despues del filtro.",
      "Rule III": "Regla III",
      "Tribute Opens Consideration": "El Tributo Abre Consideracion",
      "A thoughtful tribute is a signal of seriousness. It is not a purchase of approval, intimacy, physical contact, or any specific outcome.": "Un tributo con intencion senala seriedad. No compra aprobacion, intimidad, contacto fisico ni ningun resultado especifico.",
      "Rule IV": "Regla IV",
      "Discretion Is Mutual": "La Discrecion Es Mutua",
      "Privacy, manners, emotional intelligence, and calm communication are expected. The House protects its peace.": "Se espera privacidad, modales, inteligencia emocional y comunicacion calmada. La Casa protege su paz.",
      "Rule V": "Regla V",
      "False Information Ends Access": "La Informacion Falsa Cierra el Acceso",
      "False information, pressure, surprise guests, or boundary testing mean immediate disqualification.": "Informacion falsa, presion, invitados sorpresa o probar limites significa descalificacion inmediata.",
      "Begin The Veil Check": "Iniciar el Veil Check",
      "The Veil Check": "El Veil Check",
      "Trust is created before access is discussed.": "La confianza se crea antes de hablar de acceso.",
      "Basic Identity": "Identidad Basica",
      "Name or alias, age confirmation, city, and Instagram handle.": "Nombre o alias, confirmacion de edad, ciudad e Instagram.",
      "Verifiable Presence": "Presencia Verificable",
      "Screening may include identity verification through a secure provider in the future.": "El filtro puede incluir verificacion de identidad mediante un proveedor seguro en el futuro.",
      "Request & Intention": "Solicitud e Intencion",
      "State what you seek clearly: attention, private audience, dinner date consideration, or thoughtful gifts.": "Expresa claramente lo que buscas: atencion, audiencia privada, consideracion para cena o regalos con intencion.",
      "Consent & Screening": "Consentimiento y Filtro",
      "Confirm you understand boundaries, tribute culture, and the absence of guarantees.": "Confirma que entiendes los limites, la cultura de tributo y la ausencia de garantias.",
      "Tribute & Offerings": "Tributo y Offerings",
      "Seriousness has a language.": "La seriedad tiene un lenguaje.",
      "Tribute-based consideration communicates respect for time, preparation, attention, and the private nature of The House.": "La consideracion basada en tributo comunica respeto por el tiempo, la preparacion, la atencion y la naturaleza privada de The House.",
      "First Tribute": "Primer Tributo",
      "A first tribute is required before the qualifying process begins. It reflects seriousness and respect for private attention.": "Se requiere un primer tributo antes de iniciar el proceso de calificacion. Refleja seriedad y respeto por la atencion privada.",
      "Access Gift": "Regalo de Acceso",
      "After approval, an access gift may be required to continue into planning. Approval does not create entitlement.": "Despues de la aprobacion, puede requerirse un regalo de acceso para continuar hacia la planificacion. La aprobacion no crea entitlement.",
      "Thoughtful Gifts": "Regalos con Intencion",
      "Certificates, perfume, beauty rituals, books, candles, jewelry, wardrobe tributes, or dinner experiences are more aligned with The House than flowers.": "Certificados, perfume, rituales de belleza, libros, velas, joyeria, tributos de vestuario o experiencias de cena estan mas alineados con The House que las flores.",
      "Choose Your Intention": "Elige Tu Intencion",
      "What brings you to the threshold?": "Que te trae al umbral?",
      "Choose the statement closest to your intention. The right applicant becomes clearer through language.": "Elige la frase mas cercana a tu intencion. El aplicante correcto se vuelve mas claro a traves del lenguaje.",
      "I want to court your attention": "Quiero cortejar tu atencion",
      "I want to request a dinner date": "Quiero solicitar una cena",
      "I want to sponsor a look": "Quiero patrocinar un look",
      "I want to send a thoughtful gift": "Quiero enviar un regalo con intencion",
      "The Proper Door": "La Puerta Correcta",
      "Begin with etiquette.": "Comienza con etiqueta.",
      "Read the rules, apply with clarity, and understand that attention is considered through screening.": "Lee las reglas, aplica con claridad y entiende que la atencion se considera a traves del filtro.",
      "Application Flow": "Flujo de Aplicacion",
      "What happens after you apply?": "Que pasa despues de aplicar?",
      "Read": "Lee",
      "Understand the rules before making a request.": "Entiende las reglas antes de hacer una solicitud.",
      "Apply": "Aplica",
      "Submit only accurate, composed information.": "Envia solo informacion precisa y compuesta.",
      "Verify": "Verifica",
      "Private instructions may follow if your request is considered.": "Pueden seguir instrucciones privadas si tu solicitud es considerada.",
      "Offer": "Ofrece",
      "Tribute signals seriousness; it never guarantees an outcome.": "El tributo senala seriedad; nunca garantiza un resultado.",
      "Await": "Espera",
      "Katerina reserves the right to accept, pause, decline, or end any interaction.": "Katerina se reserva el derecho de aceptar, pausar, rechazar o terminar cualquier interaccion.",
      "Privacy & Discretion": "Privacidad y Discrecion",
      "Protected does not mean cold. It means intentional.": "Protegido no significa frio. Significa intencional.",
      "Screening protects both sides. Sensitive details should not be sent casually, and private instructions are shared only after consideration.": "El filtro protege a ambas partes. Los detalles sensibles no deben enviarse casualmente y las instrucciones privadas se comparten solo despues de la consideracion.",
      "No pressure, intoxication, or surprise guests.": "Sin presion, intoxicacion ni invitados sorpresa.",
      "False information ends access.": "La informacion falsa cierra el acceso.",
      "Katerina reserves the right to decline any request.": "Katerina se reserva el derecho de rechazar cualquier solicitud.",
      "Tribute begins consideration; it does not guarantee approval.": "El tributo inicia consideracion; no garantiza aprobacion.",
      "Request Entry": "Solicitar Entrada",
      "This application is sent through Formspree. Do not upload sensitive documents here. If verification is requested later, private instructions will be shared through a safer process.": "Esta aplicacion se envia mediante Formspree. No subas documentos sensibles aqui. Si luego se solicita verificacion, las instrucciones privadas se compartiran mediante un proceso mas seguro.",
      "Before submitting:": "Antes de enviar:",
      "Access is considered, never owed. Gifts are for time, attention, consideration, and preparation only.": "El acceso se considera; nunca se debe. Los regalos son solo por tiempo, atencion, consideracion y preparacion.",
      "Leave this field empty": "Deja este campo vacio",
      "Step 1 - Basic Identity": "Paso 1 - Identidad Basica",
      "Name or alias": "Nombre o alias",
      "Required": "Obligatorio",
      "Age confirmation": "Confirmacion de edad",
      "Select one": "Selecciona una opcion",
      "I confirm I am 18+": "Confirmo que tengo 18+",
      "City": "Ciudad",
      "Instagram handle": "Usuario de Instagram",
      "Used to connect your application to your visible presence.": "Se usa para conectar tu aplicacion con tu presencia visible.",
      "Step 2 - Verifiable Presence": "Paso 2 - Presencia Verificable",
      "How did you find me?": "Como me encontraste?",
      "Tinder": "Tinder",
      "Instagram": "Instagram",
      "Referral": "Referencia",
      "Other": "Otro",
      "Verification readiness": "Disposicion para verificar",
      "I can verify if privately requested": "Puedo verificar si se solicita en privado",
      "I have questions about verification": "Tengo preguntas sobre la verificacion",
      "I am not willing to verify": "No estoy dispuesto a verificar",
      "No ID upload is collected here.": "Aqui no se recopila ningun documento de identidad.",
      "Step 3 - Request & Intention": "Paso 3 - Solicitud e Intencion",
      "What are you seeking?": "Que estas buscando?",
      "To court your attention": "Cortejar tu atencion",
      "To request a dinner date by application": "Solicitar una cena por aplicacion",
      "To sponsor a look or ritual preparation": "Patrocinar un look o preparacion ritual",
      "To send a thoughtful gift": "Enviar un regalo con intencion",
      "Timing": "Tiempo",
      "Optional": "Opcional",
      "Message": "Mensaje",
      "Step 4 - Consent & Screening": "Paso 4 - Consentimiento y Filtro",
      "I have read the House Rules.": "He leido las Reglas de la Casa.",
      "I understand that gifts are for time, attention, consideration, and preparation.": "Entiendo que los regalos son por tiempo, atencion, consideracion y preparacion.",
      "I understand that gifts do not guarantee approval, intimacy, physical contact, or any specific outcome.": "Entiendo que los regalos no garantizan aprobacion, intimidad, contacto fisico ni ningun resultado especifico.",
      "I understand that false information means immediate disqualification.": "Entiendo que la informacion falsa significa descalificacion inmediata.",
      "Submit Application": "Enviar Aplicacion",
      "Questions before the gate": "Preguntas antes de la puerta",
      "What is Katerina Noir?": "Que es Katerina Noir?",
      "Katerina Noir is an adult-only private persona and House Noir access portal for screened private audience requests, etiquette, discretion, and curated social experience consideration.": "Katerina Noir es una persona privada para adultos y un portal House Noir para solicitudes de audiencia privada filtrada, etiqueta, discrecion y consideracion de experiencia social curada.",
      "How do I apply for access?": "Como aplico para acceso?",
      "Read the House Rules, complete the application, and await private instruction. Access is considered, never owed.": "Lee las Reglas de la Casa, completa la aplicacion y espera instruccion privada. El acceso se considera; nunca se debe.",
      "Is screening required?": "El filtro es obligatorio?",
      "Yes. Screening protects both sides and helps confirm maturity, discretion, intention, and verifiable presence.": "Si. El filtro protege a ambas partes y ayuda a confirmar madurez, discrecion, intencion y presencia verificable.",
      "Why do you ask for ID verification?": "Por que pides verificacion de identidad?",
      "Verification may be requested later to confirm adulthood, identity, and basic safety. Do not send ID casually through this form.": "La verificacion puede solicitarse luego para confirmar mayoria de edad, identidad y seguridad basica. No envies documentos casualmente por este formulario.",
      "Does tribute guarantee approval?": "El tributo garantiza aprobacion?",
      "No. Tribute is a signal of seriousness and respect for time, attention, consideration, and preparation. It does not guarantee approval, intimacy, physical contact, or any specific outcome.": "No. El tributo es una senal de seriedad y respeto por tiempo, atencion, consideracion y preparacion. No garantiza aprobacion, intimidad, contacto fisico ni ningun resultado especifico.",
      "What happens if someone submits fake information?": "Que pasa si alguien envia informacion falsa?",
      "False information means immediate disqualification. The House protects its peace.": "La informacion falsa significa descalificacion inmediata. The House protege su paz.",
      "Can I request a dinner date?": "Puedo solicitar una cena?",
      "A dinner date may be considered after screening, qualifying, discretion, planning, and mutual chemistry. Public first meetings are preferred.": "Una cena puede considerarse despues del filtro, calificacion, discrecion, planificacion y quimica mutua. Se prefieren primeros encuentros publicos.",
      "Can I send gifts or certificates?": "Puedo enviar regalos o certificados?",
      "Thoughtful gifts and certificates may be considered. Private instructions are shared at Katerina's discretion.": "Los regalos con intencion y certificados pueden considerarse. Las instrucciones privadas se comparten a discrecion de Katerina.",
      "Are flowers accepted as gifts?": "Se aceptan flores como regalos?",
      "Flowers are not part of the preferred offering culture. Thoughtful gifts, certificates, perfume, beauty rituals, books, candles, jewelry, wardrobe tributes, or dinner experiences are more aligned with The House.": "Las flores no son parte de la cultura de offering preferida. Regalos con intencion, certificados, perfume, rituales de belleza, libros, velas, joyeria, tributos de vestuario o experiencias de cena estan mas alineados con The House.",
      "How is discretion handled?": "Como se maneja la discrecion?",
      "Discretion is mutual. Private details are shared only after screening, and Katerina reserves the right to decline or end any interaction.": "La discrecion es mutua. Los detalles privados se comparten solo despues del filtro, y Katerina se reserva el derecho de rechazar o terminar cualquier interaccion.",
      "What gets an application denied?": "Que hace que una aplicacion sea rechazada?",
      "Pressure, explicit demands, intoxication, fake information, entitlement, refusal to screen, or disrespect for boundaries may deny access.": "Presion, demandas explicitas, intoxicacion, informacion falsa, entitlement, negarse al filtro o falta de respeto por los limites puede negar el acceso.",
      "The Door": "La Puerta",
      "The Door Is Opened by Intention": "La Puerta Se Abre con Intencion",
      "Offerings open the door. Chemistry decides the rest.": "Los offerings abren la puerta. La quimica decide el resto.",
      "Private details are shared at my discretion.": "Los detalles privados se comparten a mi discrecion."
    },
    attributes: {
      "The Katerina Noir home": "Inicio de The Katerina Noir",
      "Language selector": "Selector de idioma",
      "House journey": "Recorrido de la Casa",
      "Open navigation": "Abrir navegacion",
      "Primary navigation": "Navegacion principal",
      "Primary actions": "Acciones principales",
      "House access principles": "Principios de acceso a la Casa",
      "Intention choices": "Opciones de intencion",
      "Example: this week, next visit, flexible": "Ejemplo: esta semana, proxima visita, flexible",
      "Introduce yourself with clarity, manners, and purpose.": "Presentate con claridad, modales y proposito."
    }
  }
};

const translatableTextNodes = [];
const translatableAttributes = [];

function collectTranslatableText() {
  const walker = document.createTreeWalker(document.body, 4);
  let node = walker.nextNode();

  while (node) {
    const parent = node.parentElement;
    const text = node.nodeValue.trim();

    if (parent && text && !parent.closest("script, style")) {
      const leading = node.nodeValue.match(/^\s*/)[0];
      const trailing = node.nodeValue.match(/\s*$/)[0];
      translatableTextNodes.push({ node, text, leading, trailing });
    }

    node = walker.nextNode();
  }
}

function collectTranslatableAttributes() {
  const selector = "[aria-label], [placeholder]";
  document.querySelectorAll(selector).forEach((element) => {
    ["aria-label", "placeholder"].forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        translatableAttributes.push({
          element,
          attribute,
          value: element.getAttribute(attribute)
        });
      }
    });
  });
}

function translateText(value, language) {
  if (language === "en") return value;
  return i18n.es.text[value] || value;
}

function translateAttribute(value, language) {
  if (language === "en") return value;
  return i18n.es.attributes[value] || i18n.es.text[value] || value;
}

function selectedIntentionKey() {
  return document.querySelector(".intention-button.is-active")?.dataset.intention || "attention";
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = i18n[language].lang;
  document.title = i18n[language].title;

  const metaDescription = document.querySelector("meta[name='description']");
  const ogTitle = document.querySelector("meta[property='og:title']");
  const ogDescription = document.querySelector("meta[property='og:description']");
  const twitterTitle = document.querySelector("meta[name='twitter:title']");
  const twitterDescription = document.querySelector("meta[name='twitter:description']");

  if (metaDescription) metaDescription.setAttribute("content", i18n[language].description);
  if (ogTitle) ogTitle.setAttribute("content", i18n[language].title);
  if (ogDescription) ogDescription.setAttribute("content", i18n[language].description);
  if (twitterTitle) twitterTitle.setAttribute("content", i18n[language].title);
  if (twitterDescription) twitterDescription.setAttribute("content", i18n[language].description);

  translatableTextNodes.forEach(({ node, text, leading, trailing }) => {
    node.nodeValue = `${leading}${translateText(text, language)}${trailing}`;
  });

  translatableAttributes.forEach(({ element, attribute, value }) => {
    element.setAttribute(attribute, translateAttribute(value, language));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  showIntention(selectedIntentionKey());
  updateRoomCompass();
}

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function currentRoom() {
  const rooms = i18n[currentLanguage].rooms;
  let active = rooms[0];
  let bestVisibleArea = 0;

  rooms.forEach((room) => {
    const section = document.getElementById(room.id);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const visibleTop = Math.max(rect.top, 0);
    const visibleBottom = Math.min(rect.bottom, window.innerHeight);
    const visibleArea = Math.max(0, visibleBottom - visibleTop);

    if (visibleArea > bestVisibleArea) {
      bestVisibleArea = visibleArea;
      active = room;
    }
  });

  return active;
}

function updateRoomCompass() {
  const active = currentRoom();
  roomKicker.textContent = active.kicker;
  roomName.textContent = active.name;

  roomDots.forEach((dot) => {
    dot.classList.toggle("is-active", dot.dataset.roomDot === active.id);
  });
}

function updateScrollUI() {
  updateHeader();
  updateScrollProgress();
  updateRoomCompass();
}

function closeNav() {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function showIntention(key) {
  const selected = i18n[currentLanguage].intentions[key];

  intentionButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.intention === key);
  });

  intentionResult.innerHTML = `
    <p class="eyebrow">${selected.label}</p>
    <h3>${selected.title}</h3>
    <p>${selected.copy}</p>
  `;
}

function revealOnScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  reveals.forEach((item) => observer.observe(item));
}

function findFirstInvalidField() {
  const requiredFields = [...accessForm.querySelectorAll("[required]")];

  return requiredFields.find((field) => {
    if (field.type === "checkbox") return !field.checked;
    return !field.value.trim();
  });
}

async function validateForm(event) {
  event.preventDefault();
  formError.textContent = "";
  formSuccess.textContent = "";

  const honeypot = accessForm.querySelector("input[name='company']");
  if (honeypot?.value) {
    formError.textContent = i18n[currentLanguage].messages.processed;
    return;
  }

  const firstInvalid = findFirstInvalidField();

  if (firstInvalid) {
    formError.textContent = i18n[currentLanguage].messages.invalid;
    firstInvalid.focus();
    return;
  }

  const submitButton = accessForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = i18n[currentLanguage].messages.submitting;

  try {
    const response = await fetch(accessForm.action, {
      method: "POST",
      body: new FormData(accessForm),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error("Formspree rejected the request.");
    }

    formSuccess.textContent = i18n[currentLanguage].messages.sent;
    accessForm.reset();
  } catch (error) {
    formError.textContent = i18n[currentLanguage].messages.failed;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = i18n[currentLanguage].messages.submit;
  }
}

collectTranslatableText();
collectTranslatableAttributes();

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("resize", updateScrollUI);
updateScrollUI();

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeNav();
});

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const item = button.closest(".accordion-item");
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

intentionButtons.forEach((button) => {
  button.addEventListener("click", () => showIntention(button.dataset.intention));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

accessForm.addEventListener("submit", validateForm);
revealOnScroll();
