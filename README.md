# SMASH LAB CHECKLIST - NETLIFY

Aplicación de checklist para empleados de Smash Lab con generación de PNG y almacenamiento en Netlify Blobs.

## 📋 Estructura

```
clsmashlab-checklist/
├── index.html              # Aplicación React
├── netlify.toml            # Configuración Netlify
├── README.md               # Este archivo
└── functions/
    └── save-checklist.js   # Función para guardar PNG en Blobs
```

## 🚀 Pasos para Deploy

### 1. Preparar en Netlify

1. Abre [netlify.com](https://netlify.com) e inicia sesión con tu cuenta
2. Click en **"Add new site"** → **"Import an existing project"**

### 2. Conectar con Git (Recomendado)

**Opción A: Desde GitHub (MÁS FÁCIL)**
1. Crea un repo nuevo en GitHub llamado `clsmashlab-checklist`
2. Sube los archivos a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/clsmashlab-checklist.git
   git push -u origin main
   ```
3. En Netlify: Selecciona el repo
4. Build settings: 
   - Build command: `echo 'Static'`
   - Publish directory: `.`
5. Click **"Deploy"**

**Opción B: Drag & Drop (MÁS RÁPIDO)**
1. En Netlify, en la sección "Deploys", busca **"Deploy manually"**
2. Arrastra la carpeta `clsmashlab-checklist` directamente
3. Espera 30 segundos

### 3. Configurar Dominio Personalizado

1. En Netlify, ve a **Settings** → **Domain management**
2. Click en **"Add custom domain"**
3. Escribe: `CLSmashlab.netlify.app`
4. Confirma (Netlify lo valida automáticamente)

> **Nota:** Ya vienes con un dominio temporario como `xxxx-xxxxx.netlify.app`. El personalizado aparecerá después de 10-15 minutos.

### 4. Habilitar Netlify Blobs

1. En Netlify, ve a **Settings** → **Environment variables**
2. Asegúrate de que está activado **Netlify Blobs** (debería estarlo por defecto)
3. En **Functions**, verifica que **Node.js** esté disponible

> **Si Blobs no aparece:** Puede que necesites estar en plan Pro de Netlify, pero la mayoría de funciones cuentan gratis con almacenamiento básico. Contacta a Netlify support si hay error.

### 5. Verificar que Funciona

1. Abre el sitio (ej: `CLSmashlab.netlify.app`)
2. Completa un checklist
3. Genera el PNG
4. Comparte en WhatsApp
5. El archivo debería guardarse en Netlify Blobs automáticamente

---

## 📱 Uso para Empleados

### Flujo:
1. Selecciona tu **posición** (Turno Mañana, Comandera, etc.)
2. Selecciona **Apertura** o **Cierre**
3. **Escribe tu nombre** (importante para marcar items)
4. Marca cada tarea conforme la completes
5. Opcionalmente, agrega **notas** (faltantes, observaciones)
6. Click **"FINALIZAR CHECKLIST"**
7. Espera a que genere el PNG (2-3 segundos)
8. Click **"COMPARTIR EN WHATSAPP"** → se abre chat con María y se comparte el PNG

---

## 🔧 Información Técnica

### WhatsApp
- **Número:** `+1 (829) 701-4845` (María)
- **Envío:** Web Share API en móvil / Fallback a WhatsApp.me en web

### Almacenamiento de PNG
- **Servicio:** Netlify Blobs
- **Carpeta:** `checklist-pngs`
- **Nombre archivo:** `{nombre_empleado}_{DD-MM-YYYY}_{HH-MM}.png`
- **Límite gratis:** 1GB total

### Bases de Datos
- **No usa:** Base de datos externa (DB está fuera del alcance del plan gratis)
- **Almacena:** Solo PNG en Blobs con metadatos (nombre, posición, turno, timestamp)

---

## 🛠️ Troubleshooting

### Problema: "Error guardando archivo"
- Verifica que **Netlify Blobs** esté habilitado en Settings
- Recarga la página y reintentat

### Problema: WhatsApp no abre
- En móvil: Asegúrate de tener WhatsApp instalado
- En web: Copia el mensaje manualmente y envíalo a María

### Problema: PNG se ve cortado
- Cierra otras pestañas que usen mucha memoria
- Recarga la página
- Intenta nuevamente

### Problema: "Cannot find module @netlify/blobs"
- Los módulos se instalan automáticamente en Netlify
- Si persiste, contacta soporte de Netlify

---

## 📞 Soporte

- **Netlify docs:** https://docs.netlify.com
- **Blobs docs:** https://docs.netlify.com/blobs/overview
- **Para errores en deploy:** Revisa los logs en Netlify Dashboard → Deploys

---

**Última actualización:** Mayo 2026
**Versión:** 1.0
