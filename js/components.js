// js/components.js

function createHeroSection() {
    return `
        <div class="hero-bg-decoration"></div>
        <div class="container hero-content">
            <div class="hero-grid">
                <!-- Contenido Izquierdo -->
                <div class="hero-text-content">
                    <h1 class="hero-title">
                        ¡Tu Gran Futuro Comienza Ahora!
                        <span class="hero-title-highlight">Admisión UNAJ</span>
                    </h1>
                    <p class="hero-description">
                        El próximo examen de nuestro Centro Preuniversitario (CEPREUNAJ) está cerca. ¡Es tu oportunidad para ingresar a una de nuestras carreras!
                    </p>
                    
                    <!-- Countdown Timer -->
                    <div class="countdown-wrapper">
                        <h3 class="countdown-title">Faltan para el examen CEPREUNAJ 2026-I:</h3>
                        <div id="countdown-container" class="countdown-container">
                            <div class="countdown-item"><span id="countdown-days">00</span><span class="countdown-label">Días</span></div>
                            <div class="countdown-separator">:</div>
                            <div class="countdown-item"><span id="countdown-hours">00</span><span class="countdown-label">Horas</span></div>
                            <div class="countdown-separator">:</div>
                            <div class="countdown-item"><span id="countdown-minutes">00</span><span class="countdown-label">Minutos</span></div>
                            <div class="countdown-separator">:</div>
                            <div class="countdown-item"><span id="countdown-seconds">00</span><span class="countdown-label">Segundos</span></div>
                        </div>
                    </div>
                    
                    <div class="hero-actions">
                        <a href="#modalidades" class="btn btn-primary">
                            Ver Modalidades ${icons.ArrowRight}
                        </a>
                        <a href="#carreras" class="btn btn-secondary">Explorar Escuelas</a>
                        <a href="simulacro.html" target="_blank" class="btn btn-primary btn-primary1 ">
                        Consulta tu Puntaje ${icons.ArrowRight}
                    </a>
                    </div>
                     <div class="hero-stats">
                        <div>
                            <div class="stat-number">10</div>
                            <div class="stat-label">Escuelas Prof.</div>
                        </div>
                        
                        <div>
                            <div class="stat-number">3,682</div>
                            <div class="stat-label">Estudiantes</div>
                        </div>
                         <div>
                            <div class="stat-number">205</div>
                            <div class="stat-label">Docentes</div>
                        </div>
                    </div>
                </div>
                <!-- Contenido Derecho (Visual) -->
                <div class="hero-visual-content">
                    <div class="visual-card-wrapper">
                        <div class="visual-card-image-placeholder">
                             <img src="img/img3.jpg" alt="Campus de la Universidad Nacional de Juliaca" class="hero-image">
                        </div>
                        <div class="floating-card card-bottom-left">
                            <div class="floating-card-icon" style="background-color: #D1FAE5;">
                                <span style="color: #065F46; font-size: 1.5rem; font-weight: bold;">✓</span>
                            </div>
                            <div>
                                <p class="floating-card-title">Educación de Calidad</p>
                                <p class="floating-card-subtitle">Enseñanza, investigación y desarrollo.</p>
                            </div>
                        </div>
                        <div class="floating-card card-top-right">
                            <div class="floating-card-icon" style="background-color: var(--orange-500);">
                                ${icons.Clock}
                            </div>
                            <div>
                                <p class="floating-card-title" style="color: white;">Pre-Inscripción Online</p>
                                <p class="floating-card-subtitle" style="color: var(--orange-100);">Proceso fácil y rápido</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-wave-separator">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
            </svg>
        </div>
    `;
}

function createHeader() {
    const topBar = `
        <div class="top-bar">
            <div class="container top-bar-content">
                <div class="top-bar-contact">
                    <a href="tel:051323200" class="top-bar-item">
                        ${icons.Phone} <span>051-323200</span>
                    </a>
                    <a href="mailto:admision@unaj.edu.pe" class="top-bar-item">
                        ${icons.Mail} <span>admision@unaj.edu.pe</span>
                    </a>
                </div>
                <div class="top-bar-location">
                    <a href="https://maps.app.goo.gl/eq6hNZZyjjyEmejCA" class="top-bar-item" Target="_blank">
                        ${icons.MapPin} <span>Av. Nueva Zelandia N° 631, Juliaca</span>
                    </a>
                    <a href="login.html" target="_blank" class="top-bar-item">
                        ${icons.LogIn} <span>Intranet</span>
                    </a>
                </div>
            </div>
        </div>
    `;

    const mainNav = `
        <div class="container header-content">
            <a href="#" class="logo-container">
            <div class="logo-container">
            <div class="logo-icon"></div>
            <img src="img/logo.png" alt="Logo UNAJ" class="logo-img">

          </div>
            </a>
            <nav>
                <ul class="nav-links">
                    ${menuItems.map(item => `<li class="nav-item"><a href="${item.href}">${item.name}</a></li>`).join('')}
                </ul>
            </nav>
            <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Abrir menú">${icons.Menu}</button>
        </div>
    `;

    const mobileNav = `
        <div class="mobile-nav-overlay" id="mobile-nav-overlay">
            <div class="mobile-nav-header">
                <a href="#" class="logo-container">
                    <div class="logo-icon"></div>
                    <div class="logo-text">
                        <h1>UNAJ</h1>
                        <p>Admisión</p>
                    </div>
                </a>
                <button class="mobile-menu-btn" id="mobile-menu-close-btn" aria-label="Cerrar menú">${icons.X}</button>
            </div>
            <div class="mobile-nav-content">

                ${menuItems.map(item => `
                    <div class="mobile-nav-item">
                        <a href="${item.href}">${item.name}</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    return topBar + mainNav + mobileNav;
}

function createFooter() {
    return `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <a href="#" class="logo-container">
                        <div class="logo-icon">UNAJ</div>
                        <div class="logo-text">
                            <h1>Universidad Nacional</h1>
                            <p>de Juliaca</p>
                        </div>
                    </a>
                    <p class="footer-about-description">Comprometidos con la educación superior de calidad en la región.</p>
                </div>
                <div>
                    <h3 class="footer-title">Enlaces Rápidos</h3>
                    <ul class="footer-links">
                        ${menuItems.map(item => `<li><a href="${item.href}">${item.name}</a></li>`).join('')}
                         <li>
                         <a href="login.html" target="_blank">Intranet</a>
                         </li>
                    </ul>
                </div>
                <div>
                    <h3 class="footer-title">Información</h3>
                    <ul class="footer-links">
                        <li><a href="#">Requisitos</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="https://www.unaj.edu.pe/" target="_blank">Portal UNAJ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="footer-title">Síguenos</h3>
                    <div class="footer-socials">
                        <a href="https://www.facebook.com/direccion.admision.cepreunaj" class="social-link" aria-label="Facebook" Target="_blank">${icons.Facebook}</a>
                       <!-- <a href="#" class="social-link" aria-label="Instagram">${icons.Tiktok}</a>
                        <a href="#" class="social-link" aria-label="Twitter">${icons.Twitter}</a>
                        -->

                        </div>

                </div>
            </div>
            <div class="footer-copyright">
                <p>&copy; ${new Date().getFullYear()} Universidad Nacional de Juliaca. Todos los derechos reservados.</p>
            </div>
        </div>
    `;
}

// --- Componentes de la Sección Modalidades ---
function createModalidadCard(modalidad) {
    const [fromColor, toColor] = modalidad.color.split(' ');
    const gradient = `linear-gradient(to right, var(--${fromColor.replace('from-', '')}), var(--${toColor.replace('to-', '')}))`;

    return `
        <div class="modalidad-card" data-id="${modalidad.id}">
            <div class="modalidad-card-header" style="background: ${gradient};">
                <div class="modalidad-card-icon-wrapper">
                    ${icons[modalidad.icono]}
                </div>
                <h3 class="modalidad-card-title">${modalidad.titulo}</h3>
                <p class="modalidad-card-subtitle">${modalidad.subtitulo}</p>
            </div>
            <div class="modalidad-card-content">
                <p class="modalidad-card-description">${modalidad.descripcion}</p>
                <button class="modalidad-card-button">
                    Saber más
                    <span class="chevron">${icons.ChevronRight}</span>
                </button>
            </div>
        </div>
    `;
}

function createModalidadDetails(modalidad) {
    if (!modalidad || !modalidad.details) return '';
    const { details } = modalidad;

    const renderTable = (tableData) => {
        if (!tableData) return '';
        return `
            <table class="details-table">
                <thead>
                    <tr>${tableData.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                </thead>
                <tbody>
                    ${tableData.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
                </tbody>
            </table>
        `;
    };

    const [fromColor, toColor] = modalidad.color.split(' ');
    const gradient = `linear-gradient(to right, var(--${fromColor.replace('from-', '')}), var(--${toColor.replace('to-', '')}))`;

    return `
        <div class="modalidad-details-expanded">
            <div class="modalidad-details-header">
                <div class="modalidad-details-icon" style="background: ${gradient};">
                    ${icons[modalidad.icono]}
                </div>
                <div class="modalidad-details-title">
                    <h3>${details.tituloCompleto}</h3>
                    <p>${details.descripcionCompleta}</p>
                </div>
                <button class="modalidad-details-close-btn" data-close-id="${modalidad.id}">&times;</button>
            </div>

            <div class="info-box importante">
                <p>${details.estadoInscripcion}</p>
            </div>

            <div class="details-grid">
                <div class="details-column">
                    <h4 class="details-section-title">Requisitos</h4>
                    <ul class="requisitos-list">
                        ${details.requisitos.map(req => `<li><div class="requisito-icon"><span>✓</span></div><span>${req}</span></li>`).join('')}
                    </ul>
                    ${details.nota ? `<div class="info-box" style="margin-top: 1.5rem;"><p><strong>Nota:</strong> ${details.nota}</p></div>` : ''}
                </div>
                <div class="details-column">
                    <h4 class="details-section-title">Fechas Clave</h4>
                    <div class="cepre-dates">
                        ${details.fechas.map(f => `<div class="cepre-date-item"><span>${f.label}</span><strong>${f.value}</strong></div>`).join('')}
                    </div>

                    ${details.pagos ? `<h4 class="details-section-title" style="margin-top: 1.5rem;">Tabla de Pagos</h4>${renderTable(details.pagos)}` : ''}
                    ${details.turnos ? `<h4 class="details-section-title" style="margin-top: 1.5rem;">Turnos</h4>${renderTable(details.turnos)}` : ''}
                </div>
            </div>

            <div class="details-cta">
                <a href="#" class="btn btn-primary postular-btn-popup">
                    Postular a esta Modalidad ${icons.ArrowRight}
                </a>
            
            </div>
        </div>
    `;
}

//se cambio aquiii estadooo

// js/components.js

// Reemplaza la función original con esta
function createCronogramaItem(item) {
    const isProximo = item.estado === 'proximo';
    const isPasado = item.estado === 'pasado';
    return `
        <div class="timeline-item ${isProximo ? 'active' : ''} ${isPasado ? 'pasado' : ''}">
            <div class="timeline-icon">
                ${icons.Calendar}
            </div>
            <div class="timeline-content">
                <p class="date">${item.fecha}</p>
                <h3 class="event">${item.evento}</h3>
            </div>
            ${isProximo ? '<div class="timeline-status proximo">Próximo</div>' : ''}
            ${isPasado ? '<div class="timeline-status pasado">Finalizado</div>' : ''}
        </div>
    `;
}

// --- Componentes de la Sección Carreras ---
function createCarreraFilters() {
    return `
        <div class="filters-block">
            <h3 class="filters-title">Filtrar por Área Académica:</h3>
            <div class="filters-buttons" id="instituto-filters-buttons">
                ${institutos.map(inst => `
                    <button class="filter-btn instituto ${inst.id === 'todos' ? 'active' : ''}" data-filter="${inst.id}">
                        ${icons[inst.icon]}
                        <span class="filter-btn-text">${inst.nombre}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function createResultsCounter(filteredCount, totalCount) {
    return `<p>Mostrando <strong>${filteredCount}</strong> de <strong>${totalCount}</strong> escuelas profesionales</p>`;
}

function createCarreraCard(carrera) {
    const getInstitutoNombre = (institutoId) => institutos.find(i => i.id === institutoId)?.nombre || '';

    return `
        <div class="carrera-card">
            <div class="carrera-card-header">
                <h3 class="carrera-card-title">${carrera.nombre}</h3>
            </div>
            <div class="carrera-card-body">
                <div class="carrera-card-info">
                    <p>${carrera.descripcion}</p>
                    <div class="carrera-card-info-item" style="margin-top: 1rem; font-weight: 500;">
                        ${icons.GraduationCap}
                        <span>${getInstitutoNombre(carrera.instituto)}</span>
                    </div>
                </div>
                <div class="carrera-card-actions">
                    <a href="#" class="btn btn-primary">Más Información</a>
                    <a href="#" class="btn btn-secondary postular-btn-popup">Postular</a>
                </div>
            </div>
            <div class="carrera-card-footer-bar"></div>
        </div>
    `;
}

function createNoResultsBlock() {
    return `
        <div class="no-results-block">
            <div class="no-results-icon">${icons.Search}</div>
            <h3>No se encontraron escuelas</h3>
            <p>Intenta con otro término de búsqueda o filtro.</p>
            <button class="btn" id="clear-filters-btn">Limpiar Filtros</button>
        </div>
    `;
}

function createCarrerasCTA() {
    return `
        <div class="carreras-cta">
            <h3>¡Desbloquea tu futuro en la UNAJ!</h3>
            <p>Conoce más sobre nuestra universidad y forma parte de nuestra comunidad.</p>
            <div class="carreras-cta-actions">
                <a href="https://www.unaj.edu.pe/" target="_blank" class="btn btn-secondary">Visitar Portal UNAJ</a>
            </div>
        </div>
    `;
}

function createContactoCard(info) {
    return `
        <div class="contacto-card">
            <div class="card-icon-wrapper" style="background-color: ${info.color}">
                ${icons[info.icon]}
            </div>
            <h3 class="card-title">${info.titulo}</h3>
            <p class="contacto-card-data">${info.data}</p>
        </div>
    `;
}


// --- NUEVOS COMPONENTES ---

function createCepreSection() {
    const { titulo, descripcion, estadoInscripcion, fechas, requisitos, nota, pagos, turnos } = cepreData;
    return `
        <div class="text-center">
            <h2 class="section-title">${titulo}</h2>
            <p class="section-subtitle">${descripcion}</p>
        </div>

        <div class="cepre-grid">
            <div class="cepre-main-content">
                <div class="cepre-card">
                    <h3 class="cepre-card-title">Fechas Clave</h3>
                    <div class="cepre-dates">
                    ${fechas.map(fecha => `
                        <div class="cepre-date-item">
                            <span>${fecha.label}</span>
                            <strong>${fecha.value}</strong>
                        </div>
                    `).join('')}
                    </div>
                    <div class="info-box importante" style="text-align: center; margin-top: 1rem;">
                        <p>${estadoInscripcion}</p>
                    </div>
                </div>
                
                <div class="cepre-card">
                    <h3 class="cepre-card-title">Requisitos para su Inscripción</h3>
                    <ul class="requisitos-list">
                    ${requisitos.map(req => `
                        <li>
                            <div class="requisito-icon"><span>✓</span></div>
                            <span>${req}</span>
                        </li>
                    `).join('')}
                    </ul>
                     <div class="info-box" style="margin-top: 1rem;">
                        <p><strong>Nota:</strong> ${nota}</p>
                    </div>
                </div>
            </div>

            <div class="cepre-side-content">
                 <div class="cepre-card">
                    <h3 class="cepre-card-title">Tabla de Pagos</h3>
                    <table class="cepre-table">
                        <thead>
                            <tr>${pagos.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${pagos.rows.map(row => `
                                <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                            `).join('')}
                        </tbody>
                    </table>
                 </div>
                 <div class="cepre-card">
                    <h3 class="cepre-card-title">Turnos Disponibles</h3>
                    <table class="cepre-table">
                         <thead>
                            <tr>${turnos.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${turnos.rows.map(row => `
                                <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                            `).join('')}
                        </tbody>
                    </table>
                 </div>
            </div>
        </div>
    `;
}

function createReglamentoSection() {
    return `
        <div class="text-center">
            <h2 class="section-title">Reglamentos y Documentos</h2>
            <p class="section-subtitle">Accede a la documentación oficial del proceso de admisión.</p>
        </div>
        <div class="reglamento-grid">
            ${reglamentoData.map(doc => `
                <div class="reglamento-card">
                    <h3 class="reglamento-card-title">${doc.titulo}</h3>
                    <p class="reglamento-card-description">${doc.descripcion}</p>
                    <a href="${doc.link}" class="btn btn-primary" download>
                        Descargar ${icons.Download}
                    </a>
                </div>
            `).join('')}
        </div>
    `;
}

function createPopupModal() {
    return `
        <div class="popup-overlay"></div>
        <div class="popup-modal">
            <button class="popup-close-btn">&times;</button>
            <div class="popup-icon-wrapper">
                ${icons.Clock}
            </div>
            <h3 class="popup-title">Próximamente</h3>
            <p class="popup-message">Esta función estará muy pronto disponible.</p>
        </div>
    `;
}

/**
 * Crea el HTML para el popup de bienvenida
 * AHORA CON FUNCIONALIDAD DE GALERÍA
 */
function createWelcomePopup() {
    const imagenPrincipalSrc = 'comunicado/img.png';
    const imagenSecundaria1Src = 'comunicado/img1.png';
    const imagenSecundaria2Src = 'comunicado/img2.png';

    return `
        <div class="welcome-popup-overlay"></div>
        <div class="welcome-popup-modal">
            <button class="welcome-popup-close-btn" aria-label="Cerrar comunicado">&times;</button>
            <div class="welcome-popup-content">
                
                <img src="${imagenPrincipalSrc}" alt="Comunicado Principal UNAJ" class="welcome-popup-image-full">
                
                <img src="${imagenSecundaria1Src}" alt="Comunicado secundario 1" class="welcome-popup-image-full">

                <img src="${imagenSecundaria2Src}" alt="Comunicado secundario 2" class="welcome-popup-image-full">
                
                </div>
        </div>
    `;
}
/*
function createWelcomePopup() {
    // --- ¡IMPORTANTE! ---
    // Reemplaza estas URLs con las rutas a tus propias imágenes
    const imagenPrincipalSrc = 'comunicado/img.png';
    const imagenSecundaria1Src = 'comunicado/img1.png';
    const imagenSecundaria2Src = 'comunicado/img2.png';

    // No te preocupes por el tamaño de 2509x2481, el CSS
    // (welcome-popup-image-full) se encargará de que sea responsive.

    return `
        <div class="welcome-popup-overlay"></div>
        <div class="welcome-popup-modal">
            <button class="welcome-popup-close-btn" aria-label="Cerrar comunicado">&times;</button>
            <div class="welcome-popup-content">
                
                <img src="${imagenPrincipalSrc}" alt="Comunicado Principal UNAJ" class="welcome-popup-image-full">
                
                <div class="welcome-popup-image-grid">
                    <img src="${imagenSecundaria1Src}" alt="Comunicado secundario 1" class="welcome-popup-image-half">
                    <img src="${imagenSecundaria2Src}" alt="Comunicado secundario 2" class="welcome-popup-image-half">
                </div>

            </div>
        </div>
    `;
}
*/
function createComunicadoSection() {
    return `
        <div class="comunicado-content">
            <div class="comunicado-icon">
                ${icons.Award} 
            </div>
            <h2 class="comunicado-title">Comunicado Importante Sobre los Pagos</h2>
            <p class="comunicado-subtitle">
                Revisa la información más reciente sobre el proceso de admisión y nuestras actividades.
            </p>
            <button class="btn btn-primary" id="ver-comunicado-btn">
                Ver Comunicado ${icons.ArrowRight}
            </button>
        </div>
    `;
}

