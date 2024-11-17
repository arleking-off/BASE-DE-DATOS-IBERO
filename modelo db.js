// Conectar a la base de datos
use TorneoFutbol2024;

// Insertar equipos
db.Equipos.insertMany([
    { "_id": "equipo_1", "nombre": "Tigres FC", "entrenador": "Carlos Pérez", "jugadores": ["jugador_1", "jugador_2"] },
    { "_id": "equipo_2", "nombre": "Leones FC", "entrenador": "Ana García", "jugadores": ["jugador_3", "jugador_4"] }
]);

// Insertar jugadores
db.Jugadores.insertMany([
    { "_id": "jugador_1", "nombre": "Juan Gómez", "edad": 25, "posición": "Delantero", "goles": 5, "tarjetas": 1 },
    { "_id": "jugador_2", "nombre": "Luis Torres", "edad": 28, "posición": "Defensa", "goles": 0, "tarjetas": 0 },
    { "_id": "jugador_3", "nombre": "Pedro Martínez", "edad": 22, "posición": "Mediocampista", "goles": 2, "tarjetas": 1 },
    { "_id": "jugador_4", "nombre": "Carlos Ramírez", "edad": 30, "posición": "Portero", "goles": 0, "tarjetas": 0 }
]);

// Insertar árbitros
db.Arbitros.insertMany([
    { "_id": "arbitro_1", "nombre": "María López", "experiencia_años": 10 },
    { "_id": "arbitro_2", "nombre": "José Fernández", "experiencia_años": 8 }
]);

// Insertar encuentros
db.Encuentros.insertOne({
    "_id": "encuentro_1",
    "fecha": "2024-11-20",
    "equipo_local": "Tigres FC",
    "equipo_visitante": "Leones FC",
    "resultado": { "goles_local": 2, "goles_visitante": 1 },
    "arbitro": "arbitro_1"
});

// Insertar tabla de posiciones
db.TablaPosiciones.insertMany([
    { "_id": "equipo_1", "nombre": "Tigres FC", "puntos": 10, "diferencia_goles": 5 },
    { "_id": "equipo_2", "nombre": "Leones FC", "puntos": 8, "diferencia_goles": 3 }
]);
