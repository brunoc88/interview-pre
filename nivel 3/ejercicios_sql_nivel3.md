# Ejercicios típicos de SQL para entrevistas (Nivel 3)

Estos son los ejercicios más comunes que suelen tomarse en entrevistas
técnicas cuando quieren evaluar tu nivel de SQL. Practicando estos
estarás preparado para la mayoría de situaciones.

------------------------------------------------------------------------

## 1. Selección básica con filtro

**Traer todos los usuarios mayores de 18 años.**

``` sql
SELECT * 
FROM usuarios
WHERE edad > 18;
```

------------------------------------------------------------------------

## 2. JOIN entre tablas

**Traer todos los posts junto con la información de su autor.**

``` sql
SELECT p.*, u.*
FROM posts p
JOIN usuarios u ON p.usuario_id = u.id;
```

------------------------------------------------------------------------

## 3. JOIN + GROUP BY

**Contar cuántos posts tiene cada usuario.**

``` sql
SELECT u.id, u.nombre, COUNT(p.id) AS total_posts
FROM usuarios u
LEFT JOIN posts p ON p.usuario_id = u.id
GROUP BY u.id, u.nombre;
```

------------------------------------------------------------------------

## 4. ORDER BY + LIMIT

**Obtener el último usuario registrado (por fecha de creación).**

``` sql
SELECT * 
FROM usuarios
ORDER BY fecha_creacion DESC
LIMIT 1;
```

------------------------------------------------------------------------

## 5. LIKE (búsqueda por patrón)

**Traer todos los usuarios cuyo email sea de Gmail.**

``` sql
SELECT * 
FROM usuarios
WHERE email LIKE '%@gmail.com';
```

------------------------------------------------------------------------

## 6. Top N resultados

**Obtener los 3 usuarios con más posts.**

``` sql
SELECT u.id, u.nombre, COUNT(p.id) AS total_posts
FROM usuarios u
JOIN posts p ON p.usuario_id = u.id
GROUP BY u.id, u.nombre
ORDER BY total_posts DESC
LIMIT 3;
```

------------------------------------------------------------------------

## 7. GROUP BY por otra tabla

**Cantidad total de posts por categoría.**

``` sql
SELECT c.nombre, COUNT(p.id) AS total_posts
FROM categorias c
LEFT JOIN posts p ON p.categoria_id = c.id
GROUP BY c.id, c.nombre;
```

------------------------------------------------------------------------

## 8. Filtrar por año en una fecha

**Obtener todos los posts creados en 2024.**

``` sql
SELECT *
FROM posts
WHERE YEAR(fecha_creacion) = 2024;
```

------------------------------------------------------------------------

## 9. LEFT JOIN + NULL check

**Traer los usuarios que no tienen posts.**

``` sql
SELECT u.id, u.nombre
FROM usuarios u
LEFT JOIN posts p ON p.usuario_id = u.id
WHERE p.id IS NULL;
```

------------------------------------------------------------------------

## 10. Agregaciones adicionales

**Obtener el promedio de edad de los usuarios.**

``` sql
SELECT AVG(edad) AS promedio_edad
FROM usuarios;
```

------------------------------------------------------------------------

📌 Con estos 10 ejercicios cubrís los temas más comunes: - SELECT con
WHERE - JOINs - GROUP BY - ORDER BY + LIMIT - LIKE - Funciones de
agregación (COUNT, AVG, etc.)
