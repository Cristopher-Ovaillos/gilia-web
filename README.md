# Proyecto Web - React + Vite + Backend con PostgreSQL

Este proyecto es una aplicación web creada para **GILIA: Grupo de Investigación en Lenguajes e Inteligencia Artificial**. El sitio web se construyó utilizando **React** y **Vite** para el frontend, mientras que el backend utiliza **NestJS**, **PostgreSQL**, y **TypeORM**.

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción ultrarrápida para proyectos web.
- **Ant Design**: Un conjunto de componentes de UI para React.
- **Node.js**: Entorno de ejecución de JavaScript.
- **NestJS**: Framework de Node.js para construir aplicaciones del lado del servidor.
- **PostgreSQL**: Base de datos relacional.
- **TypeORM**: ORM para TypeScript y JavaScript con soporte para PostgreSQL.

## Estructura del Proyecto

El proyecto está dividido en varias carpetas:

- `frontend-gilia`: Contiene el frontend de la aplicación, construido con React y Vite.
- `backend`: Contiene el servidor NestJS y la configuración de PostgreSQL con TypeORM.
- `admin`: Una interfaz administrativa para gestionar el contenido.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

---

## Instalación
1. **Clona el repositorio** en tu máquina local:

   ```bash
   git clone https://github.com/Cristopher-Ovaillos/GILIA_WEB.git
   ```

# Proyecto Backend - Gilia

## 1. **Instalación de PostgreSQL**

Sigue este video para instalar PostgreSQL en tu sistema:

- [Tutorial para instalar PostgreSQL](https://youtu.be/4_MMY2yiOWY)

Este tutorial cubre todo lo necesario para instalar PostgreSQL correctamente en tu máquina.

---

## 2. **Crear la Base de Datos y Tabla de Usuarios**

### Paso 1: Conectar a PostgreSQL desde la Terminal

1. Abre la terminal (o **VS Code** si prefieres).
2. Inicia sesión en PostgreSQL usando el siguiente comando:

```bash
psql -U postgres
```

Cuando te lo pida, ingresa la contraseña de PostgreSQL que configuraste durante la instalación.

---

### Paso 2: Crear la Base de Datos

Ejecuta este comando para crear la base de datos `gilia_db`:

```sql
CREATE DATABASE gilia_db;
```

---

### Paso 3: Conectar a la Base de Datos

Conéctate a la base de datos recién creada:

```bash
\c gilia_db
```

---

### Paso 4: Crear la Tabla de `user`

Ejecuta este comando SQL para crear la tabla `user`:

```sql
CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

Esto creará una tabla llamada `user` que tendrá los campos `id` (único y autoincremental), `username` (único y no nulo), y `password` (no nulo).

---

### Paso 5: Agregar un Usuario Administrador

Ahora, agrega un usuario administrador a la tabla `user`:

```sql
INSERT INTO user (username, password) VALUES ('admin', 'tu_contraseña');
```

Reemplaza `'tu_contraseña'` con una contraseña segura.

---

### 2. Backend (NestJS + PostgreSQL)


1. **Navega a la carpeta del backend**:

   ```bash
   cd GILIA_WEB/backend
   ```

2. **Instala las dependencias del backend**:

   ```bash
   npm install
   ```

3. **Configura la base de datos** en el archivo `.env` del backend:

   - Crea un archivo `.env` en la raíz del directorio `backend` con el siguiente contenido:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DB_USER=postgres        # Si no cambiaste el usuario, es "postgres"
DB_PASSWORD=tu_password # Usa la contraseña que configuraste en PostgreSQL
DB_NAME=gilia_db        # Nombre de la base de datos que creaste
```

4. **Inicia el servidor del backend**:

   ```bash
   npm run start
   ```

   El backend debería estar corriendo en `http://localhost:3000`.

---

### 3. Frontend (React + Vite)

1. **Navega a la carpeta del frontend**:

   ```bash
   cd GILIA_WEB/frontend-gilia
   ```

2. **Instala las dependencias del frontend**:

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo del frontend**:

   ```bash
   npm start
   ```

   El frontend debería estar corriendo en `http://localhost:3000`.

---

### 4. Interfaz Administrativa (Admin)

1. **Navega a la carpeta de administración**:

   ```bash
   cd GILIA_WEB/admin
   ```

2. **Instala las dependencias de la interfaz administrativa**:

   ```bash
   npm install
   ```

3. **Inicia el servidor de administración**:

   ```bash
   npm run dev
   ```



---

### 5. Crear un Usuario para Iniciar Sesión en la Interfaz Administrativa

Para probar el inicio de sesión en la interfaz administrativa, es necesario crear un usuario en la base de datos. Para hacerlo:

1. Accede a **pgAdmin 4** o cualquier cliente de PostgreSQL.
2. Conéctate a la base de datos que creaste (`gilia_db`).
3. Ejecuta el siguiente comando SQL para crear un usuario:

   ```sql
   INSERT INTO user (username, password, role)
   VALUES ('admin', 'contraseña_segura', 'admin');
   ```

   - **`'admin'`**: El nombre de usuario que utilizará para iniciar sesión.
   - **`'contraseña_segura'`**: La contraseña para el usuario.
   - **`'admin'`**: El rol que tendrá el usuario (en este caso, administrador).

4. Asegúrate de que el backend esté corriendo antes de intentar iniciar sesión.

---
















