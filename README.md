# 🗂️ Portafolio — Juan Pablo Acosta Murillo

Repositorio unificado con dos portafolios profesionales y una landing de selección.

## 📁 Estructura

```
my-portfolio/
│
├── index.html              ← 🏠 Landing "Selector" (NUEVA — reemplaza la actual)
│
├── backend/                ← ⚙️  Portafolio Backend (archivos actuales del repo)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── images/
│   └── cv/
│
└── cv-version/             ← 🧪 Portafolio QA (NUEVO)
    └── index.html
```

---

## 🚀 Instrucciones de despliegue en GitHub Pages

### Paso 1 — Hacer backup del portafolio actual

En tu repo `my-portfolio`, crea una carpeta `backend/` y mueve todos los archivos actuales dentro:

```
index.html        →  backend/index.html
style.css         →  backend/style.css
script.js         →  backend/script.js
images/           →  backend/images/
cv/               →  backend/cv/
(otros archivos)  →  backend/...
```

### Paso 2 — Agregar los archivos nuevos

1. Copia el nuevo `index.html` (landing selector) a la raíz del repo.
2. Crea la carpeta `cv-version/` y copia `cv-version/index.html` dentro.

### Paso 3 — Actualizar los links internos del portafolio Backend

En `backend/index.html`, actualiza todos los links que apunten a rutas relativas (imágenes, CSS, JS).  
Si usas rutas como `./images/logo.png`, seguirán funcionando sin cambios desde `backend/`.

### Paso 4 — Verificar que GitHub Pages apunte a la raíz

En tu repo → Settings → Pages → Source:  
✅ Selecciona `Deploy from a branch` → `main` → `/ (root)`

### Paso 5 — Push y verificar

```bash
git add .
git commit -m "feat: add landing selector and QA portfolio"
git push origin main
```

URLs resultantes:
- `https://gitjpam.github.io/my-portfolio/` → Landing selector
- `https://gitjpam.github.io/my-portfolio/backend/` → Portafolio Backend
- `https://gitjpam.github.io/my-portfolio/cv-version/` → Portafolio QA

---

## 🎨 Diseño

| Portafolio | Color acento | Identidad |
|---|---|---|
| Backend | `#38bdf8` Azul cielo | Ingeniero Senior / Integraciones |
| QA | `#34d399` Verde esmeralda | QA Engineer / Validación |
| Landing | Degradado B→Q | Selector neutral |

---

## 🔗 Proyectos referenciados

- [KioskoIA v2.1](https://github.com/GitJPam/KioskoIA/tree/main/v2.1) — App de kiosko con IA
- [Finanzas v4](https://github.com/GitJPam/Finanzas/tree/v4) — Gestión financiera personal

> ⚠️ Ambos proyectos requieren backend (Bun + BD) y no pueden ejecutarse en GitHub Pages.  
> Se muestran como tarjetas de proyecto con enlace directo al repositorio.
