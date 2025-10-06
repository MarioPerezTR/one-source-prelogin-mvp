# CI Login Component

## Descripción

El `CiLoginComponent` es una página de login standalone que replica el diseño de ONESOURCE CI de Thomson Reuters. Es una página completa accesible a través de ruta independiente, fuera del shell principal de la aplicación.

## Características

- **Página Standalone**: Funciona como una página independiente con su propia ruta
- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- **Accesibilidad**: Implementa las mejores prácticas de accesibilidad web
- **Footer Expandible**: Incluye footer global de Thomson Reuters con navegación
- **Validación de Email**: Incluye validación básica de email
- **Credenciales Precargadas**: Email precargado para testing (user@acme.com)

## Uso

### 1. Importar el Componente

```typescript
import { CiLoginComponent } from "./path/to/ci-login.component";

// Configurar en las rutas
const routes: Routes = [
  { path: "ci-login", component: CiLoginComponent },
  // otras rutas...
];
```

### 2. Navegación a la Página

```typescript
export class YourComponent {
  constructor(private router: Router) {}

  openCiLogin() {
    this.router.navigate(["/ci-login"]);
  }
}
```

### 3. Usar en el Template

```html
<!-- Botón que navega a CI Login -->
<button (click)="openCiLogin()">Abrir CI Login</button>
```

### 4. Manejar la Autenticación

```typescript
// En ci-login.component.ts
onSubmit() {
  if (this.email) {
    console.log("Email del usuario:", this.email);
    // Implementar lógica de autenticación
    // Redirigir después del login exitoso
    this.router.navigate(['/dashboard']);
  }
}
}
```

## API

### Propiedades

| Propiedad | Tipo     | Descripción                       | Valor por defecto |
| --------- | -------- | --------------------------------- | ----------------- |
| `email`   | `string` | Email precargado en el formulario | `'user@acme.com'` |

### Métodos

| Método     | Descripción                              |
| ---------- | ---------------------------------------- |
| `onSubmit` | Maneja el envío del formulario de login  |
| `onClose`  | Redirige de vuelta a la página principal |

## Estructura del Componente

```
ci-login/
├── ci-login.component.ts      # Lógica del componente
├── ci-login.component.html    # Template HTML
├── ci-login.component.scss    # Estilos SCSS
└── ci-login.component.spec.ts # Tests unitarios
```

## Características Visuales

### Header

- Logo de Thomson Reuters
- Separador visual
- Texto "Thomson Reuters Account"
- Enlace de ayuda y soporte

### Página Principal

- Logo de Thomson Reuters
- Título "Sign in to Developer Experience"
- Campo de email con validación
- Botón de "Sign in"
- Fondo decorativo con gráficos de Thomson Reuters

### Responsive Design

- En pantallas pequeñas (< 768px): Ajustes de padding y tamaños
- En pantallas muy pequeñas (< 480px): Reducción adicional de elementos

## Personalización

### Cambiar el Título

Modifica la línea en `ci-login.component.html`:

```html
<h1 class="login-title">Tu Nuevo Título</h1>
```

### Cambiar Placeholder del Email

Modifica el atributo `placeholder` en el input:

```html
<input placeholder="tu@email.com" ... />
```

### Personalizar Estilos

Los estilos están en `ci-login.component.scss` y pueden ser modificados según necesidades específicas.

## Integración con el Login Card Existente

El componente está integrado con `LoginCardComponent`. El botón "Thomson Reuters sign-in" navega automáticamente a esta página standalone.

## Accesibilidad

- **Focus Management**: El campo de email recibe focus automáticamente
- **ARIA Labels**: Elementos decorativos marcados correctamente
- **Navegación por Teclado**: Soporte completo para navegación con teclado
- **Screen Readers**: Textos ocultos visualmente para lectores de pantalla

## Dependencias

- Angular Common Module
- Angular Forms Module
- Ninguna dependencia externa adicional

## Notas de Implementación

1. El componente es standalone (no requiere NgModule)
2. Usa FormModule para two-way binding
3. Implementa overlay con z-index alto (9999)
4. Click fuera del modal lo cierra automáticamente
5. Prevención de propagación de eventos en el contenido del modal
