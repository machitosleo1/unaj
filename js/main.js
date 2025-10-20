// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // --- ESTADO DE LA APLICACIÓN ---
    let state = {
        searchTerm: '',
        activeInstituto: 'todos',
        activeModalidadId: null,
    };

    // --- ELEMENTOS DEL DOM ---
    const heroContainer = document.getElementById('inicio');
    const headerContainer = document.getElementById('main-header');
    const footerContainer = document.getElementById('main-footer');
    const cronogramaContainer = document.getElementById('cronograma-container');
    const contactoContainer = document.getElementById('contacto-container');
    
    const modalidadesContainer = document.getElementById('modalidades-container');
    const modalidadDetailsWrapper = document.getElementById('modalidad-details-wrapper');
    
    const searchInput = document.getElementById('search-input');
    const filtersContainer = document.getElementById('filters-container');
    const resultsCounterContainer = document.getElementById('results-counter');
    const carrerasContainer = document.getElementById('carreras-container');
    const noResultsContainer = document.getElementById('no-results-container');
    const carrerasCtaContainer = document.getElementById('carreras-cta-container');

    const cepreContainer = document.getElementById('cepre-container');
    const reglamentoContainer = document.getElementById('reglamento-container');
    const popupContainer = document.getElementById('popup-container');

    const welcomePopupContainer = document.getElementById('welcome-popup-container');
    const comunicadoContainer = document.getElementById('comunicado-container');


    // --- RENDERIZADO INICIAL ---
    if (heroContainer) renderComponent(heroContainer, createHeroSection());
    if (headerContainer) renderComponent(headerContainer, createHeader());
    if (footerContainer) {
        renderComponent(footerContainer, createFooter());
        footerContainer.classList.add('footer');
    }
    
    if (cronogramaContainer) renderComponent(cronogramaContainer, cronograma.map(createCronogramaItem).join(''));
    if (contactoContainer) renderComponent(contactoContainer, contactoInfo.map(createContactoCard).join(''));
    
    if (modalidadesContainer) {
        renderModalidades();
        setupModalidadesEventListeners();
    }
    if (carrerasContainer) {
        renderComponent(filtersContainer, createCarreraFilters());
        renderComponent(carrerasCtaContainer, createCarrerasCTA());
        renderCarreras();
        setupCarrerasEventListeners();
    }
    
    if (cepreContainer) renderComponent(cepreContainer, createCepreSection());
    if (reglamentoContainer) renderComponent(reglamentoContainer, createReglamentoSection());
    if (comunicadoContainer) renderComponent(comunicadoContainer, createComunicadoSection());
    
    
    setupHeaderLogic();
    setupCountdown();
    setupPopupLogic();

    setupWelcomePopup();

/**
     * LÓGICA DEL POPUP DE BIENVENIDA (PRIMERA VISITA)
     */
function setupWelcomePopup() {
    if (!welcomePopupContainer) return;

    const storageKey = 'unajWelcomePopupShown_v1';

    // --- Función para ABRIR el popup ---
    // La creamos reutilizable
    const openPopup = () => {
        // Evita abrirlo si ya está abierto
        if (welcomePopupContainer.classList.contains('active')) return; 

        renderComponent(welcomePopupContainer, createWelcomePopup());
        setTimeout(() => {
            welcomePopupContainer.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 10); // Animación rápida
    };

    // --- Función para CERRAR el popup ---
    const closePopup = () => {
        welcomePopupContainer.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => renderComponent(welcomePopupContainer, ''), 300);
    };

    // 1. Lógica de primera visita
    // Comprueba si ya se mostró
    if (!localStorage.getItem(storageKey)) {
        // Muestra el popup después de un breve delay
        setTimeout(openPopup, 500); 
        
        // Registra que ya se mostró
        localStorage.setItem(storageKey, 'true');
    }

    // 2. Lógica para cerrar el popup (con clic en overlay o botón X)
    welcomePopupContainer.addEventListener('click', e => {
        if (e.target.matches('.welcome-popup-overlay') || e.target.closest('.welcome-popup-close-btn')) {
            closePopup();
        }
    });

    // 3. Lógica para el botón de la SECCIÓN COMUNICADO
    // Busca el botón que renderizamos en el Paso 2
    const verComunicadoBtn = document.getElementById('ver-comunicado-btn');
    if (verComunicadoBtn) {
        verComunicadoBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte
            openPopup(); // Llama a la misma función de abrir popup
        });
    }
}


    // --- LÓGICA DEL HEADER ---
    function setupHeaderLogic() {
        const header = document.querySelector('.sticky-header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('header-scrolled', window.scrollY > 50);
        });

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');
        const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
        
        const toggleMenu = (active) => {
            mobileNavOverlay.classList.toggle('active', active);
            document.body.style.overflow = active ? 'hidden' : '';
        };

        mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
        mobileMenuCloseBtn.addEventListener('click', () => toggleMenu(false));
        mobileNavOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => toggleMenu(false));
        });
    }

    // --- LÓGICA DEL COUNTDOWN ---
    function setupCountdown() {
        const countdownContainer = document.getElementById('countdown-container');
        if (!countdownContainer) return;

        const targetDate = new Date('2025-11-30T08:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const daysEl = document.getElementById('countdown-days');
            const hoursEl = document.getElementById('countdown-hours');
            const minutesEl = document.getElementById('countdown-minutes');
            const secondsEl = document.getElementById('countdown-seconds');

            if (distance < 0) {
                const wrapper = document.querySelector('.countdown-wrapper');
                if (wrapper) {
                    wrapper.innerHTML = `<div class="countdown-ended">¡El examen ya pasó! Consulta los resultados.</div>`;
                }
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');
        };
        
        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // --- LÓGICA DE LA SECCIÓN MODALIDADES ---
    function setupModalidadesEventListeners() {
        modalidadesContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.modalidad-card');
            if (card) {
                const id = parseInt(card.dataset.id, 10);
                state.activeModalidadId = state.activeModalidadId === id ? null : id;
                renderModalidadDetails();
            }
        });
        
        modalidadDetailsWrapper.addEventListener('click', (e) => {
            const closeBtn = e.target.closest('.modalidad-details-close-btn');
            if (closeBtn) {
                state.activeModalidadId = null;
                renderModalidadDetails();
            }
        });
    }
    
    function renderModalidades() {
        renderComponent(modalidadesContainer, modalidades.map(createModalidadCard).join(''));
    }
    
    function renderModalidadDetails() {
        const activeModalidad = modalidades.find(m => m.id === state.activeModalidadId);
        
        if (activeModalidad) {
            renderComponent(modalidadDetailsWrapper, createModalidadDetails(activeModalidad));
            modalidadDetailsWrapper.classList.add('active');
            setTimeout(() => {
                // ✅ CÓDIGO CORREGIDO
                modalidadDetailsWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        } else {
            renderComponent(modalidadDetailsWrapper, '');
            modalidadDetailsWrapper.classList.remove('active');
        }

        document.querySelectorAll('.modalidad-card').forEach(card => {
            card.classList.toggle('active', parseInt(card.dataset.id, 10) === state.activeModalidadId);
        });
    }

    // --- LÓGICA DE LA SECCIÓN CARRERAS ---
    function setupCarrerasEventListeners() {
        if (!searchInput) return;
        searchInput.addEventListener('input', (e) => {
            state.searchTerm = e.target.value;
            renderCarreras();
        });

        filtersContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.filter-btn');
            if (!button) return;
            state.activeInstituto = button.dataset.filter;
            renderCarreras();
        });
        
        noResultsContainer.addEventListener('click', (e) => {
            if (e.target.id === 'clear-filters-btn') {
                state.searchTerm = '';
                state.activeInstituto = 'todos';
                searchInput.value = '';
                renderCarreras();
            }
        });
    }

    function renderCarreras() {
        if (!carrerasContainer) return;
        const filteredCarreras = carreras.filter(carrera => {
            const matchSearch = carrera.nombre.toLowerCase().includes(state.searchTerm.toLowerCase());
            const matchInstituto = state.activeInstituto === 'todos' || carrera.instituto === state.activeInstituto;
            return matchSearch && matchInstituto;
        });

        renderComponent(resultsCounterContainer, createResultsCounter(filteredCarreras.length, carreras.length));

        if (filteredCarreras.length > 0) {
            renderComponent(carrerasContainer, filteredCarreras.map(createCarreraCard).join(''));
            renderComponent(noResultsContainer, '');
        } else {
            renderComponent(carrerasContainer, '');
            renderComponent(noResultsContainer, createNoResultsBlock());
        }

        updateFilterButtons('.filter-btn.instituto', state.activeInstituto);
    }

    // --- LÓGICA DEL POPUP ---
    function setupPopupLogic() {
        document.body.addEventListener('click', e => {
            if (e.target.closest('.postular-btn-popup')) {
                e.preventDefault();
                renderComponent(popupContainer, createPopupModal());
                setTimeout(() => popupContainer.classList.add('active'), 10);
            }
            if (e.target.matches('.popup-overlay') || e.target.closest('.popup-close-btn')) {
                popupContainer.classList.remove('active');
                setTimeout(() => renderComponent(popupContainer, ''), 300);
            }
        });
    }
    
    // --- FUNCIONES UTILITARIAS ---
    function renderComponent(container, content) {
        if (container) {
            container.innerHTML = content;
        }
    }

    function updateFilterButtons(selector, activeFilter) {
        document.querySelectorAll(selector).forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === activeFilter);
        });
    }
});

