

<?php
// --- El Cerebro de la Búsqueda (Versión 2.0 - Más Robusta) ---

header('Content-Type: application/json');

/**
 * Función "súper-limpiadora".
 * Elimina espacios normales, espacios de no ruptura (de Excel)
 * y otros caracteres invisibles del inicio y final.
 */
function super_trim($str) {
    // \pZ = Cualquier tipo de espacio
    // \pC = Caracteres de control (invisibles)
    // /u = Modo UTF-8
    return preg_replace('/^[\pZ\pC]+|[\pZ\pC]+$/u', '', $str);
}

// 1. Obtener el DNI (¡usando la nueva función!)
$dni_buscado = isset($_POST['dni']) ? super_trim($_POST['dni']) : '';

// 2. Validar el DNI
if (empty($dni_buscado) || !is_numeric($dni_buscado) || strlen($dni_buscado) != 8) {
    echo json_encode(['error' => 'Por favor, ingresa un DNI válido de 8 dígitos.']);
    exit;
}

// 3. Ruta al archivo CSV
$archivo_csv = 'simulacro_data/resultado.csv';

if (!file_exists($archivo_csv)) {
    echo json_encode(['error' => 'Error del servidor: El archivo de datos no se encuentra.']);
    exit;
}

$resultado_encontrado = null;

// 4. Abrir y leer el archivo CSV
if (($handle = fopen($archivo_csv, 'r')) !== FALSE) {
    
    // Ignoramos la primera línea (cabeceras)
    fgetcsv($handle); 

    while (($line = fgets($handle)) !== FALSE) {
        // Detect delimiter: if line contains ';' use it, else use ','
        $delimiter = (strpos($line, ';') !== false) ? ';' : ',';

        // Parse CSV line with detected delimiter
        $data = str_getcsv($line, $delimiter);

        // ¡Usamos la "súper-limpiadora" en el DNI del CSV!
        $dni_del_csv = super_trim($data[0]);

        if ($dni_del_csv == $dni_buscado) {
            // ¡Coincidencia encontrada!
            $resultado_encontrado = [
                'dni'       => $data[0],
                'apellidos' => $data[1],
                'nombres'   => $data[2],
                'escuela'   => $data[3],
            //    'proceso'   => $data[5],
                'puntaje'   => $data[4]
            ];
            break; // Detener el bucle
        }
    }
    fclose($handle);
}

// 5. Enviar la respuesta
if ($resultado_encontrado) {
    echo json_encode($resultado_encontrado);
} else {
    echo json_encode([
        'error' => 'DNI no encontrado. Verifica el número e intenta de nuevo.',
        'dni_buscado' => $dni_buscado // Info de depuración
    ]);
}
?>