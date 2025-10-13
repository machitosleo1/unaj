// js/data.js

// DATOS COMPLETAMENTE ACTUALIZADOS PARA LA UNIVERSIDAD NACIONAL DE JULIACA (UNAJ)
// Fecha de referencia: 12 de Octubre de 2025

const heroImages = [
    'https://placehold.co/600x700/0033A0/FFFFFF?text=UNAJ+Campus',
    'https://placehold.co/600x700/F97316/FFFFFF?text=Estudiantes',
    'https://placehold.co/600x700/10B981/FFFFFF?text=Investigación'
];

// Estructura del menú de navegación (ACTUALIZADO)
const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Modalidad', href: '#modalidades' },
    { name: 'Escuelas', href: '#carreras' },
    { name: 'Cronograma', href: '#cronograma' },
    { name: 'Cepre', href: '#cepre' },
    { name: 'Reglamento', href: '#reglamento' },
    { name: 'Contacto', href: '#contacto' },
];


// Escuelas Profesionales (Carreras)
const carreras = [
    { id: 1, nombre: 'Administración y Emprendimiento Empresarial', instituto: 'gestion', descripcion: 'Forma profesionales en la gestión de empresas con un enfoque en el emprendimiento y la innovación.' },
    { id: 2, nombre: 'Economía', instituto: 'gestion', descripcion: 'Prepara expertos para analizar sistemas económicos, con énfasis en políticas y desarrollo regional.' },
    { id: 3, nombre: 'Gestión Pública y Desarrollo Social', instituto: 'gestion', descripcion: 'Forma líderes para gestionar políticas públicas y proyectos que promuevan el bienestar social.' },
    { id: 4, nombre: 'Ingeniería de Software y Sistemas', instituto: 'ingenieria', descripcion: 'Capacita en el diseño, desarrollo y mantenimiento de software y sistemas tecnológicos innovadores.' },
    { id: 5, nombre: 'Ingeniería Ambiental y Forestal', instituto: 'ingenieria', descripcion: 'Forma profesionales comprometidos con la gestión sostenible de recursos naturales y la conservación.' },
    { id: 6, nombre: 'Ingeniería Mecatrónica', instituto: 'ingenieria', descripcion: 'Combina mecánica, electrónica e informática para diseñar y gestionar sistemas automatizados.' },
    { id: 7, nombre: 'Ingeniería en Energías Renovables', instituto: 'ingenieria', descripcion: 'Prepara expertos para desarrollar y gestionar soluciones energéticas sostenibles y limpias.' },
    { id: 8, nombre: 'Ingeniería Industrial', instituto: 'procesos', descripcion: 'Forma profesionales capaces de optimizar procesos industriales, mejorar la productividad y gestionar sistemas.' },
    { id: 9, nombre: 'Ingeniería en Industrias Alimentarias', instituto: 'procesos', descripcion: 'Enfocada en el desarrollo, procesamiento y conservación de alimentos con altos estándares de calidad.' },
    { id: 10, nombre: 'Ingeniería Textil y de Confecciones', instituto: 'procesos', descripcion: 'Capacita en el diseño, producción y gestión de procesos textiles con un enfoque en innovación.' }
];

// Facultades / Áreas (reemplaza a los institutos anteriores)
const institutos = [
    { id: 'todos', nombre: 'Todas las Áreas', icon: 'GraduationCap' },
    { id: 'gestion', nombre: 'Gestión y Emprendimiento', icon: 'Users' },
    { id: 'ingenieria', nombre: 'Ciencias de la Ingeniería', icon: 'Cpu' },
    { id: 'procesos', nombre: 'Ingeniería de Procesos', icon: 'BookOpen' }
];

// --- DATOS DETALLADOS DE MODALIDADES ---
const modalidades = [
    {
        id: 1,
        titulo: 'CEPREUNAJ',
        subtitulo: 'Centro Preuniversitario',
        descripcion: 'Prepárate con nosotros y asegura tu ingreso directo. Abierto a egresados de secundaria que buscan una formación sólida.',
        icono: 'BookOpen',
        color: 'from-unaj-700 to-unaj-600',
        details: {
            tituloCompleto: 'CEPREUNAJ 2026-I PRIMERA FASE',
            descripcionCompleta: 'Abierto al público en general que haya concluido satisfactoriamente la educación secundaria. ¡Inicia tu camino hacia la formación profesional!',
            estadoInscripcion: 'Las inscripciones han finalizado',
            fechas: [
                { label: 'Inicio de inscripciones', value: 'lunes, 25 agosto del 2025' },
                { label: 'Cierre de inscripciones', value: 'lunes, 08 septiembre del 2025' },
                { label: 'Fecha de examen', value: 'domingo, 30 noviembre del 2025' }
            ],
            requisitos: [
                'Realiza tu preinscripción en línea. Asegúrate de descargar e imprimir tu constancia.',
                'Realiza el pago por derecho de inscripción en la Caja de la UNAJ (Segundo Piso) o Sede Santa Catalina.',
                'Presenta el original y una copia de tu DNI vigente.',
                'Presenta tu Certificado de Estudios original o Constancia de Logros de Aprendizaje (CLA).'
            ],
            nota: 'También participan los estudiantes que estén cursando el 5to grado de educación secundaria (con declaración jurada).',
            pagos: {
                headers: ['CONCEPTO', 'COLEGIO ESTATAL', 'COLEGIO PARTICULAR'],
                rows: [
                    ['Inscripción', 'S/ 200.00', 'S/ 200.00'],
                    ['1ra cuota', 'S/ 250.00', 'S/ 300.00'],
                    ['2da cuota', 'S/ 200.00', 'S/ 250.00'],
                    ['3ra cuota', 'S/ 150.00', 'S/ 200.00'],
                    ['Derecho de examen', 'S/ 50.00', 'S/ 50.00'],
                    ['Compendio Académico', 'S/ 25.00', 'S/ 25.00']
                ]
            },
            turnos: {
                headers: ['Presencial:Mañana ', 'Presencial:Tarde ', 'VIRTUAL:Noche' ],
                rows: [
                    ['']
                ]
            }
        }
    },
    {
        id: 2,
        titulo: 'Examen Ordinario',
        subtitulo: 'Para egresados de secundaria',
        descripcion: 'El proceso de admisión general dirigido a todos los estudiantes que han concluido satisfactoriamente la educación secundaria.',
        icono: 'FileText',
        color: 'from-orange-600 to-orange-500',
        details: {
            tituloCompleto: 'Ordinario 2025-II',
            descripcionCompleta: 'Abierta al público en general que haya concluido satisfactoriamente la educación secundaria. ¡Todos son bienvenidos a inscribirse!',
            estadoInscripcion: 'Las inscripciones han finalizado',
            fechas: [
                { label: 'Inicio de inscripciones', value: 'lunes, 14 julio del 2025' },
                { label: 'Cierre de inscripciones', value: 'viernes, 08 agosto del 2025' },
                { label: 'Fecha de examen', value: 'domingo, 10 agosto del 2025' }
            ],
            requisitos: [
                'Realiza tu preinscripción en línea y descarga tu constancia.',
                'Realiza el pago en la Caja de la UNAJ o Banco de la Nación (cuenta 00721058190).',
                'Presenta el original y una copia de tu DNI vigente.',
                'Presenta tu Certificado de Estudios original o Constancia de Logros de Aprendizaje (CLA) visado.'
            ],
            nota: 'Solo participan estudiantes que hayan terminado sus estudios secundarios.',
            pagos: {
                headers: ['CONCEPTO', 'COLEGIO ESTATAL', 'COLEGIO PARTICULAR'],
                rows: [
                    ['Inscripción', 'S/ 250.00', 'S/ 250.00'],
                    ['Prospecto', 'Incluido', 'Incluido']
                ]
            }
        }
    },
    {
        id: 3,
        titulo: 'Examen Extraordinario',
        subtitulo: 'Modalidades especiales',
        descripcion: 'Dirigido a postulantes destacados: primeros puestos, deportistas, personas con discapacidad, traslados y más.',
        icono: 'Award',
        color: 'from-green-600 to-green-500',
        details: {
            tituloCompleto: 'Extraordinario 2025-II',
            descripcionCompleta: 'Dirigido a primeros puestos, deportistas calificados, personas con discapacidad, víctimas del terrorismo, traslados externos y graduados.',
            estadoInscripcion: 'Las inscripciones han finalizado',
            fechas: [
                { label: 'Inicio de inscripciones', value: 'lunes, 30 junio del 2025' },
                { label: 'Cierre de inscripciones', value: 'jueves, 10 julio del 2025' },
                { label: 'Fecha de examen', value: 'domingo, 13 julio del 2025' }
            ],
            requisitos: [
                'Realiza tu preinscripción en línea y descarga tu constancia.',
                'Realiza el pago correspondiente en la Caja de la UNAJ o Banco de la Nación.',
                'Presenta el original y una copia de tu DNI vigente y Certificado de Estudios.',
                'Recuerda consultar los requisitos específicos para la categoría a la que postulas.'
            ],
            nota: 'Solo participan estudiantes que hayan terminado sus estudios secundarios.',
            pagos: {
                headers: ['CATEGORÍA', 'MONTO'],
                rows: [
                    ['Primeros puestos', 'S/ 250.00'],
                    ['Deportistas calificados', 'S/ 250.00'],
                    ['Titulados y graduados', 'S/ 300.00'],
                    ['Personas con discapacidad', 'S/ 200.00'],
                    ['Víctimas del terrorismo', 'S/ 0.00'],
                    ['Traslados externos', 'S/ 300.00']
                ]
            }
        }
    }
];


// Cronograma de Admisión (actualizado a la fecha de referencia)
const cronograma = [
    { fecha: '30 Noviembre 2025', evento: 'Examen CEPREUNAJ 2026-I', estado: 'proximo' },
    { fecha: '10 Agosto 2025', evento: 'Examen Ordinario 2025-II', estado: 'pasado' },
    { fecha: '03 Agosto 2025', evento: 'Examen CEPREUNAJ 2025-II', estado: 'pasado' },
    { fecha: '13 Julio 2025', evento: 'Examen Extraordinario 2025-II', estado: 'pasado' },
];

// Datos de contacto actualizados
const contactoInfo = [
    { titulo: 'Teléfono', data: '051-323200 (Anexo 2228)', icon: 'Phone', color: 'var(--unaj-700)' },
    { titulo: 'Email', data: 'admision@unaj.edu.pe', icon: 'Mail', color: 'var(--orange-600)' },
    { titulo: 'Dirección', data: 'Av. Nueva Zelandia N° 631, Urb. La Capilla, Juliaca', icon: 'MapPin', color: 'var(--green)' }
];

// --- NUEVOS DATOS: CEPREUNAJ ---

const cepreData = {
    titulo: 'CEPREUNAJ 2026-I PRIMERA FASE',
    descripcion: 'Abierto al público en general que haya concluido satisfactoriamente la educación secundaria. ¡Inicia tu camino hacia la formación profesional! Prepárate para alcanzar tus metas y asegurar un futuro lleno de oportunidades.',
    estadoInscripcion: 'Las inscripciones han finalizado',
    fechas: [
        { label: 'Inicio de inscripciones', value: 'lunes, 25 agosto del 2025' },
        { label: 'Cierre de inscripciones', value: 'lunes, 08 septiembre del 2025' },
        { label: 'Fecha de examen', value: 'domingo, 30 noviembre del 2025' }
    ],
    requisitos: [
        'Realiza tu preinscripción en línea. Antes de acudir a la inscripción, asegúrate de descargar e imprimir tu constancia de preinscripción.',
        'Realiza el pago por el derecho de inscripción en la Caja de la UNAJ (Segundo Piso), presenta el recibo de pago o SEDE SANTA CATALINA.',
        'Presenta el original y una copia de tu DNI vigente.',
        'Presenta tu Certificado de Estudios original o Constancia de Logros de Aprendizaje. Los estudiantes que estén cursando el 5to grado de secundaria deberán presentar una declaración jurada.'
    ],
    nota: 'También participan los estudiantes que estén cursando el 5to grado de educación secundaria.',
    pagos: {
        headers: ['Concepto', 'Colegio Estatal', 'Colegio Particular'],
        rows: [
            ['Inscripción', 'S/ 200.00', 'S/ 200.00'],
            ['1ra cuota', 'S/ 250.00', 'S/ 300.00'],
            ['2da cuota', 'S/ 200.00', 'S/ 250.00'],
            ['3ra cuota', 'S/ 150.00', 'S/ 200.00'],
            ['Derecho de examen', 'S/ 50.00', 'S/ 50.00'],
            ['Compendio Académico', 'S/ 25.00', 'S/ 25.00']
        ]
    },
    turnos: {
        headers: ['Turno', 'Presencial', 'Virtual'],
        rows: [
            ['Mañana', 'Tarde', 'Noche']
           
        ]
    }
};



// --- NUEVOS DATOS: Reglamento ---
const reglamentoData = [
    { titulo: 'Reglamento General de Admisión', descripcion: 'Documento oficial que rige todos los procesos de admisión de la universidad.', link: '#' },
    { titulo: 'Reglamento del Centro Preuniversitario', descripcion: 'Normas y directrices específicas para los estudiantes del CEPREUNAJ.', link: '#' },
    { titulo: 'Protocolo de Bioseguridad para Exámenes', descripcion: 'Medidas y protocolos de seguridad sanitaria durante los exámenes presenciales.', link: '#' }
];


// Iconos SVG para no depender de librerías externas
const icons = {
    LogIn: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
    Download: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    ChevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    CheckCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
    Search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    GraduationCap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3.33 1.67 6.67 1.67 10 0v-5"></path></svg>`,
    Cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    Users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    ArrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    Clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    FileText: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`,
    BookOpen: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    Award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>`,
    Calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    Phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    Mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    MapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    Menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    X: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    ChevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>`,
    Facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
    Instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    Twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`,
};

