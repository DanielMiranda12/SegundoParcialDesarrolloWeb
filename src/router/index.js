// src/router/index.js (CORREGIDO)
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue"; 
import DashboardView from "../views/DashboardView.vue"; // El Layout (padre)
import HomeDashboardView from "../views/HomeDashboardView.vue"; // Contenido de inicio
import AboutView from "../views/AboutView.vue"; // Contenido de Acerca De
import ContactView from "../views/ContactView.vue"; // Contenido de Contacto

const routes = [
 { path: "/", redirect: "/login" },
 { path: "/login", name: "login", component: LoginView }, 
 
 // 🚨 RUTA PADRE: Dashboard actúa como el LAYOUT
 { 
    path: "/dashboard", 
    component: DashboardView, 
    // Aquí puedes añadir meta: { requiresAuth: true } si tienes la lógica del guardián
    children: [
        // RUTA HIJA 1: /dashboard (Inicio)
        { path: '', name: 'dashboard', component: HomeDashboardView }, 
        
        // RUTA HIJA 2: /dashboard/acerca-de
        { path: 'acerca-de', name: 'about', component: AboutView },
        
        // RUTA HIJA 3: /dashboard/productos (Usa HomeDashboard TEMPORALMENTE)
        { path: 'productos', name: 'products', component: HomeDashboardView },
        // RUTA HIJA 4: /dashboard/contacto
        { path: 'contacto', name: 'contact', component: ContactView }
    ]
 }
];

// ... (Si tienes la lógica del beforeEach, se mantiene aquí) ...

export default createRouter({
 history: createWebHistory(),
 routes
});