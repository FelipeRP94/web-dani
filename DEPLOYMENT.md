# 🚀 Guía de Despliegue en Vercel

## Pasos para desplegar la web del Arquitecto Técnico Tasador

### 1. **Preparación Local Completada** ✅

- ✅ Proyecto configurado con pnpm
- ✅ Build exitoso verificado
- ✅ Archivo `vercel.json` creado con configuración de pnpm
- ✅ Dependencias optimizadas
- ✅ `.gitignore` actualizado

### 2. **Opción A: Despliegue via CLI**

```bash
# 1. Login en Vercel (abre el navegador)
vercel login

# 2. Desplegar (primera vez)
vercel --prod

# 3. Futuros despliegues
vercel --prod
```

### 3. **Opción B: Despliegue via GitHub (Recomendado)**

1. **Crear repositorio en GitHub:**

   ```bash
   git init
   git add .
   git commit -m "feat: web completa del arquitecto técnico tasador"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/web-dani.git
   git push -u origin main
   ```

2. **Conectar con Vercel:**

   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa el repositorio `web-dani`
   - Vercel detectará automáticamente que es Next.js

3. **Configuración en Vercel Dashboard:**
   - **Framework Preset:** Next.js
   - **Build Command:** `pnpm build` (automático)
   - **Install Command:** `pnpm install` (automático)
   - **Output Directory:** `.next` (automático)

### 4. **Variables de Entorno** (si las necesitas)

En el dashboard de Vercel, añade cualquier variable de entorno necesaria:

- `NODE_ENV=production` (automático)
- Otras variables específicas del proyecto

### 5. **Dominios Personalizados**

1. En el dashboard de Vercel > Project Settings > Domains
2. Añade tu dominio personalizado (ej: `danieldelatorremorales.com`)
3. Configura los DNS según las instrucciones de Vercel

### 6. **Optimizaciones Aplicadas** ✅

- ✅ **pnpm:** Gestor de paquetes más rápido y eficiente
- ✅ **Regiones:** Configurado para Europa (fra1, mad1)
- ✅ **Build optimizado:** Archivos estáticos generados
- ✅ **SEO:** Sitemap y metadatos optimizados
- ✅ **Performance:** Imágenes optimizadas y lazy loading
- ✅ **Responsive:** Diseño adaptable a todos los dispositivos

### 7. **URLs del Proyecto**

Una vez desplegado tendrás:

- **URL de producción:** `https://web-dani-xxx.vercel.app`
- **URL personalizada:** `https://danieldelatorremorales.com` (cuando configures el dominio)

### 8. **Actualizaciones Futuras**

Para futuras actualizaciones:

```bash
# Localmente
git add .
git commit -m "feat: nueva funcionalidad"
git push origin main

# Vercel desplegará automáticamente
```

### 9. **Monitoreo**

- **Analytics:** Habilitado automáticamente en Vercel
- **Performance:** Métricas de Core Web Vitals
- **Logs:** Disponibles en el dashboard

---

## 📋 **Checklist Pre-Deploy**

- [x] Build local exitoso (`pnpm build`)
- [x] Archivos de configuración creados
- [x] Dependencias instaladas con pnpm
- [x] `.gitignore` actualizado
- [x] `vercel.json` configurado
- [x] README actualizado
- [x] Sitemap generado
- [x] SEO optimizado

¡El proyecto está listo para desplegar! 🎉
