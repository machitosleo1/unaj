// js/simulacro.js
document.addEventListener('DOMContentLoaded', () => {

    // --- Elementos del DOM ---
    const formContainer = document.getElementById('form-container');
    const resultsContainer = document.getElementById('results-container');
    const dniForm = document.getElementById('dni-form');
    const dniInput = document.getElementById('dni-input');
    const searchBtn = document.getElementById('search-btn');
    const loadingSpinner = document.getElementById('loading-spinner');
    const errorMessage = document.getElementById('error-message');
    const newSearchBtn = document.getElementById('new-search-btn');
    const closeBtn = document.getElementById('close-btn');

    // --- Contenedores de datos ---
    const resultDni = document.getElementById('result-dni');
    const resultNombres = document.getElementById('result-nombres');
    const resultApellidos = document.getElementById('result-apellidos');
   // const resultEscuela = document.getElementById('result-escuela');
    const resultProceso = document.getElementById('result-proceso');
    const resultPuntaje = document.getElementById('result-puntaje');

    // --- Función para mostrar el formulario ---
    function showForm() {
        resultsContainer.style.display = 'none';
        formContainer.style.display = 'block';
        dniInput.value = '';
        errorMessage.style.display = 'none';
    }

    // --- Función para mostrar resultados ---
    function showResults() {
        formContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
    }

    // --- Función para mostrar error ---
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    // --- Función para manejar el estado de carga ---
    function setLoading(isLoading) {
        if (isLoading) {
            searchBtn.style.display = 'none';
            loadingSpinner.style.display = 'block';
            errorMessage.style.display = 'none';
        } else {
            searchBtn.style.display = 'block';
            loadingSpinner.style.display = 'none';
        }
    }

    // --- Evento: Enviar el formulario ---
  // js/simulacro.js

// (El código de arriba: variables del DOM, showForm(), etc. sigue igual)

// --- Evento: Enviar el formulario ---
// REEMPLAZA TU FUNCIÓN ANTERIOR CON ESTA:
dniForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dni = dniInput.value;

    if (dni.length < 8) {
        showError('El DNI debe tener 8 dígitos.');
        return;
    }

    // 1. Mostrar estado de carga
    setLoading(true);

    // 2. Preparar los datos para enviar a PHP
    const formData = new FormData();
    formData.append('dni', dni);
    

    // 3. Llamar a buscar.php usando fetch()
    fetch('buscar.php', {
        method: 'POST',
        body: formData
    
    })

    .then(response => {
        // .json() convierte la respuesta de PHP en un objeto JavaScript
        if (!response.ok) {
            throw new Error('Error de red al intentar conectar.');
        }
        return response.json();
    })
    .then(data => {
       // console.log("Respuesta de buscar.php:", data); // <-- AGREGA ESTA LÍNEA
        // 'data' es el objeto que PHP nos envió (con datos o con error)
        if (data.error) {
            // Si PHP nos envió un error (ej. "DNI no encontrado")
            showError(data.error);
        } else {
            
            // ¡Éxito! Llenar los datos
            resultDni.textContent = data.dni;
            resultNombres.textContent = data.nombres;
            resultApellidos.textContent = data.apellidos;
           // resultEscuela.textContent = data.escuela;
            resultProceso.textContent = "SIMULACRO CEPREUNAJ 2026-I PRIMERA FASE";
            resultPuntaje.textContent = data.puntaje;

            // Mostrar resultados
            showResults();
        }
    })
    .catch(error => {
        // Captura errores de red (ej. 404 si no se encuentra buscar.php)
        console.error('Error en fetch:', error);
        showError('No se pudo conectar con el servidor. Intenta más tarde.');
    })
    .finally(() => {
        // 5. Quitar estado de carga (siempre se ejecuta)
        setLoading(false);
    });
});

// (El resto de tu código, newSearchBtn, etc., sigue igual)

    
    // --- Evento: Clic en "Nueva Consulta" ---
    newSearchBtn.addEventListener('click', () => {
        showForm();
    });

    // --- Evento: Clic en "Cerrar" ---
// js/simulacro.js

    // --- Evento: Clic en "Cerrar" ---
    closeBtn.addEventListener('click', () => {
        // Esto redirigirá al usuario a la página de inicio
        window.location.href = 'index.html';
    });
});