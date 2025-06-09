---
id: home
title: Bienvenido
slug: /
sidebar_position: 1
---

# Hamelyn

# 🌿 Hamelyn Serverless

Monorepo que contiene todas las aplicaciones y servicios del ecosistema Hamelyn, implementado con una arquitectura serverless.

## 🚀 Aplicaciones

El proyecto está organizado en varias aplicaciones especializadas:

### 💼 Aplicaciones Principales

- `admin`: Panel de administración interno
- `public`: Aplicación pública para usuarios finales
- `hamelyn-ecommerce`: Plataforma principal de comercio electrónico
- `supply`: Sistema de gestión de suministro y logística

### ⚡ Servicios Automatizados

- `crons`: Tareas programadas generales
- `data-crons`: Procesamiento y sincronización de datos
- `marketplace-crons`: Automatizaciones específicas del marketplace

### 🛠️ Desarrollo Local

- `local`: Configuración y utilidades para desarrollo local

## 📦 Paquetes Compartidos

- `core`: Lógica de negocio y utilidades compartidas
- `ui`: Biblioteca de componentes UI reutilizables
- `eslint-config`: Configuración compartida de ESLint
- `typescript-config`: Configuración base de TypeScript

## 💻 Tecnologías Principales

- Node.js ≥22
- TypeScript
- Turborepo
- Yarn 1.22.21

## 🏁 Primeros Pasos

### ✅ Requisitos Previos

```bash
node -v # Debe ser ≥22
yarn -v # Debe ser 1.22.21
```

### Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/your-org/hamelyn-serverless.git
cd hamelyn-serverless
```

2. Instalar dependencias:

```bash
yarn install
```

3. Configurar variables de entorno:

```bash
cp .env.example .env
# Editar .env con tus valores
```

## Comandos Principales

```bash
# Desarrollo
yarn dev        # Iniciar todos los proyectos en modo desarrollo
yarn dev:admin  # Iniciar solo el panel de administración
yarn dev:public # Iniciar solo la aplicación pública

# Construcción
yarn build      # Construir todos los proyectos
yarn build:prod # Construir para producción

# Calidad de Código
yarn lint       # Ejecutar linting
yarn format     # Formatear código
```

## Estructura del Proyecto

```
hamelyn-serverless/
├── apps/
│   ├── admin/          # Panel de administración
│   ├── public/         # Aplicación pública
│   ├── hamelyn-ecommerce/ # Plataforma e-commerce
│   ├── supply/         # Sistema de suministro
│   ├── crons/          # Tareas programadas
│   ├── data-crons/     # Procesamiento de datos
│   └── marketplace-crons/ # Automatizaciones marketplace
├── packages/
│   ├── core/           # Lógica compartida
│   ├── ui/             # Componentes UI
│   ├── eslint-config/  # Configuración ESLint
│   └── typescript-config/ # Configuración TypeScript
```

## Flujo de Trabajo de Desarrollo

1. Crear una nueva rama desde `main`:

```bash
git checkout -b feature/nombre-caracteristica
```

2. Realizar cambios siguiendo las guías de estilo
3. Ejecutar pruebas y linting
4. Crear Pull Request

## Licencia

[Licencia Privada] - 2025 Hamelyn