---
sidebar_position: 161
---

# ESP

Al igual que el segmento anterior, funciona de la misma forma para la traducción correspondiente al Español, e incluyendo la funcionalidad para cambiar de un idioma a otro (EN-ESP).

## aplicacionesEn.json

```jsx 
{
    "title": "aplicaciones",
    "description":{
        "text1": "Aplicaciones",
        "text2": "IVR Activo",
        "text3": "Buscar por departamento",
        "text4": "Departamento",
        "text5": "Marcador",
        "text6": "Mensaje",
        "text7": "Editar",
        "text8": "Departamento",
        "text9": "Marcador",
        "text10": "Mensaje",
        "text11": "Diagrama de IVR",
        "text12": "Llamadas / SMS",
        "text13": "Sube tus arvhicos Outbound para este servicio",
        "text14": "Al NO seleccionar Programar Campaña, será enviada de inmediato",
        "text15": "Nombre de la campaña",
        "text16": "Este campo es obligatorio",
        "text17": "Archivo",
        "text18": "Programar campaña",
        "text19": "Esquema",
        "text20": "Seleccionar fecha y hora",
        "text21": "Procesar Archivo",
        "text22": "Formato",
        "text23": "Formato SMS",
        "text24": "Formato Llamada",
        "text25": "Listas activas",
        "text26": "Administrar tus listas desde aquí",
        "text27": "Buscar por nombre de lista",
        "text28": "Lista",
        "text29": "Eliminar",
        "text30": "Quitar"
    }
}
```

## inicioEn.json

```jsx 
{
    "title": "Inicio",
    "description": {
        "text1": "Inicio",
        "text2": "Total de llamadas entrantes",
        "text3": "Total de duración",
        "text4": "Horas",
        "text5": "AVG Tiempo de Llamadas",
        "text6": "AVG Nivel de Satisfacción",
        "text7": "Opciones de servicio",
        "text8": "Informacion general",
        "text9": "Nombre de servicio",
        "text10": "Saludo inicial",
        "text11": "Usuarios registrados",
        "text12": "Buscar por usuario o nombre",
        "text13": "Usuario",
        "text14": "Nombre",
        "text15": "Queue",
        "text16": "Estado",
        "text17": "Editar",
        "text18": "Eliminar",
        "text19": "Paginas",
        "text20": "Agregar usuario",
        "text21": "Servicio",
        "text22": "Clasificaciones",
        "text23": "Clasificación",
        "text24": "Eliminar",
        "text25": "Agregar clasificación",
        "text26": "Nueva clasificación",
        "text27": "General",
        "text28": "Texto",
        "text29": "Palabra clave"

    }
}
```

## miCuentaEn.json

```jsx 
{
    "title": "mi-cuenta",
    "description": {
        "text1": "Mi cuenta",
        "text2": "Modificar datos personales",
        "text3": "Nombre",
        "text4": "Administrador",
        "text5": "Actualizar perfil",
        "text6": "Modificar datos de acceso",
        "text7": "Contraseña actual",
        "text8": "Nueva contraseña",
        "text9": "Cambiar contraseña",
        "text10": "Mis servicios",
        "text11": "Agregar servicio",
        "text12": "Nombre",
        "text13": "Tipo de servicio",
        "text14": "Fecha de creación",
        "text15": "Zona horaria",
        "text16": "Estado",
        "text17": "Activar",
        "text18": "Desactivar",
        "text19": "Añadir empresa",
        "text20": "Por favor rellene la información de la empresa a continuación",
        "text21": "Nombre de la empresa",
        "text22": "Tipo de empresa",
        "text23": "Subit logo",
        "text24": "Cancelar",
        "text25": "Guardar",
        "text26": "Salir"
    }
}
```

## opcionesDeServicio.json

```jsx 
{
    "usuariosRegistrados": "Usuarios Registrados"
}
```

## reportesEn.json

```jsx 
{
    "title": "reportes",
    "description": {
        "text1": "Reportes",
        "text2": "Reportes de grafica",
        "text3": "Elige un servicio",
        "text4": "Elige un reporte",
        "text5": "Lista",
        "text6": "Reporte de llamadas por estatus",
        "text7": "Finalizado",
        "text8": "Buzon de voz",
        "text9": "Reporte de llamadas por día",
        "text10": "Telefono",
        "text11": "Mensaje",
        "text12": "Nombre",
        "text13": "Fecha en que se marco",
        "text14": "Estatus",
        "text15": "Reporte de mapas",
        "text16": "Elige un servicio",
        "text17": "Buscador",
        "text18": "Servicio",
        "text19": "Buscar por numero de folio",
        "text20": "Buscar",
        "text21": "Información General - Folio",
        "text22": "Identificador",
        "text23": "Folio",
        "text24": "Grabación",
        "text25": "Fecha de asignación",
        "text26": "Fecha de cierre",
        "text27": "Estado de Folio",
        "text28": "Ultima clasificación",
        "text29": "Tiempo de duración(seg)",
        "text30": "Fecha de envio",
        "text31": "Hora de envio",
        "text32": "Tipo de mensaje"
    }
}
```

## ButtonTranslation.js

```jsx 
import { useState } from "react";
import i18n from "../Traduccion_ES_EN/i18nMiCuenta";
import Select from "../components/atoms/Select";

function ButtonTranslation() {
  const [selectLanguage, setSelectLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  const eua = "../../public/EUAicon.png";
  const mxn = "../../public/MEXicon.png";

  return (
    <>
      <Select
        options={[
          { name: "Español", value: "es", image: "https://img.icons8.com/color/48/mexico.png" },
          { name: "English", value: "en", image: "https://img.icons8.com/color/48/usa.png"},
        ]}
        valueSelect="value"
        value={selectLanguage}
        onChange={chooseLanguage}

        renderOption={(option) => (
          <div>
            <img src={option.image} alt={option.name} />
            {option.name}
          </div>
        )}
      />
    </>
  );
}

export default ButtonTranslation;
```

## Translation.js

```jsx 
import React from "react";

import { useTranslation } from "react-i18next";

export const Translation = () => {

  const { t, i18n } = useTranslation("aplicacionesEn");

  return (
    <>
     <h1>{t("description.text1")}</h1> { /* Ejemplo de uso para la traducción */}
    <button onClick={() => i18n.changeLanguage("es")}>ES</button>
    <button onClick={() => i18n.changeLanguage("en")}>EN</button>    
    </>
  );
};
```

## i18nMiCuenta.js

```jsx 
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { te } from "date-fns/locale";
import { textFieldClasses } from "@mui/material";

i18n
  .use(Backend)
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          Welcome: {
            text1: "My Account",
            text2: "Modify personal data",
            text3: "Name",
            text4: "Admin",
            text5: "Update profile",
            text6: "Modify access data",
            text7: "Current password",
            text8: "New password",
            text9: "Change password",
            text10: "My service",
            text11: "Add service",
            text12: "Name",
            text13: "Type of service",
            text14: "Creation date",
            text15: "Time zone",
            text16: "Status",
            text17: "Enable",
            text18: "Disable",
            text19: "Add company",
            text20: "Please fill in the company information",
            text21: "Company name",
            text22: "Type of company",
            text23: "Upload logo",
            text24: "Save",
            text25: "Cancel",
            text26: "Exit",
            text27: "Update",
            text28: "Add Company",
            text29: "Please fill in the company information below.",
            text30: "Company Name",
            text31: "Company Type",
            text32: "Upload Logo",
            text33: "My Services",
            text34: "Add Service",
            text35: "Creation date",
            text36: "Time zone",
            text37: "Active",
            text38: "Inactive",
            text39: "Change Status",
            text40:
              "Are you sure you want to change the status of the service ",
            text41: "Not Answered",
            text42: "Client Hung Up",
            text43: "Finished",
            text44: "Waiting List",
            text45: "General Information - Folio #",
            text46: "Service",
            text47: "Identifier",
            text48: "Folio",
            text49: "Recording",
            text50: "Assignment Date",
            text51: "Closing Date",
            text52: "Folio Status",
            text53: "Last Classification",
            text54: "Duration Time (sec)",
            text55: "Messages",
            text56: "Send Date",
            text57: "Send Time",
            text58: "Message",
            text59: "Message Type",
            text60: "Search",
            text61: "No data to show",
            text62: "Search by Folio Number",
            text63: "Here is an example of FOLIO",
            text64: "Choose a service",
            text65: "Choose a Report",
            text66:
              "You don't have lists, add new lists to be able to consult them.",
            text67: "Reports of folio ligth",
            text68: "Blaster Reports",
            text69: "IVR Reports",
            text70: "SMS Reports",
            text71: "Graph Reports",
            text72: "Map Reports",
            text73: "Reports",
            text74: "New",
            text75: "Attention",
            text76: "Saved",
            text77: "Transferred",
            text78: "Finished",
            text79: "BOT Attention",
            text80: "Voice Mail",
            text81: "Failure",
            text82: "Waiting List",
            text83: "Phone",
            text84: "Date he dialed",
            text85: "Status",
            text86: "No data found",
            text87: "Call report by Status.",
            text88: "Call report by day.",
            text89: "Pages",
            text90: "No data",
            text91: "Audio",
            text92: "Folio Status",
            text93: "Agent",
            text94: "Case ID",
            text95: "Identifier",
            text96: "Call Type",
            text97: "Start Date",
            text98: "End Date",
            text99: "Duration (sec)",
            text100: "Call Date",
            text101: "Call Duration (sec)",
            text102: "Delivered",
            text103: "Not Delivered",
            text104: "General Information",
            text105: "Registered Users",
            text106: "Service",
            text107: "Applications",
            text108: "Outbound Calls/SMS",
            text109: "This field is required",
            text110: "Only letters are accepted",
            text111: "and special characters",
            text112: "Service Name", 
            text113: "Initial Greeting",
            text114: "All",
            text115: "Supervisor",
            text116: "Quality",
            text117: "Suspended",
            text118: "Low", 
            text119: "Delete",
            text120: "User",
            text121: "Profile",
            text122: "Search by user or name",
            text123: "Selected Profile",
            text124: "Edit",
            text125: "Add User",
            text126: "Edit User",
            text127: "Number of simultaneous attentions",
            text128: "Password",
            text129: "Delete agent",
            text130: "Are you sure you want to delete ",
            text131: "Some fields are empty.",
            text132: "accept at least 8 characters",
            text133: "accept maximum 15 characters",
            text134: "contains at least one uppercase letter",
            text135: "contains at least one lowercase letter",
            text136: "contains at least one digit",
            text137: "does not accept spaces",
            text138: "contains at least one special character: eg. $@$!%*?&",
            text139: "The password must have the following characteristics: ",
            text140: "Remove",
            text141: "Loading data...",
            text142: "Home",
            text143: "Service Options",
            text144: "Subject",
            text145: "Keyword",
            text146: "Add",
            text147: "Add Classification",
            text148: "New Classification",
            text149: "Add CRM",
            text150: "New CRM",
            text151: "Queue Name",
            text152: "Queue Subject",
            text153: "Delet Clasification",
            text154: "Delet Queue",
            text155: "Delet CRM",
            text156: "Are you sure you want to delete ",
            text157: "The maximum characters are 15",
            text158: "Only numbers are accepted",
            text159: "The maximum characters are 1",
            text160: "Only from 0 to 9 are accepted",
            text161: "Department",
            text162: "Dialer",
            text163: "Search by department",
            text164: "Diagram",
            text165: "No matches found",
            text166: "IVR Diagram",
            text167: "Add New IVR",
            text168: "number",
            text169: "message",
            text170: "Enter a number",
            text171: "Enter a message",
            text172: "SMSformat.xlsx ",
            text173: "Active IVR",
            text174: "enter client name",
            text175: "Calls",
            text176: "Format",
            text177: "Upload your Outbound files, for this service",
            text178: "By not selecting *Schedule Campaign*, the campaign will be launched instantly.",
            text179: "Campaign Name",
            text180: "Process file",
            text181: "Schedule campaign",
            text182: "File",
            text183: "Search by List Name",
            text184: "Active Lists",
            text185: "Manage your lists from here.",
            text186: "You do not yet have active call lists.",
            text187: "Delete Response",
            text188: "Are you sure you want to delete the list ",
            text189: "Log In",
            text190: "Log Out",
            text191: "Add New Queue",
            text192: "Scheme",
            text193: "Select a date and time to launch your campaign.",
            text194: "Start Date",
            text195: "End Date",
            text196: "Lists",
            
            
          },
        },
      },
      es: {
        translation: {
          Welcome: {
            text1: "Mi cuenta",
            text2: "Modificar datos personales",
            text3: "Nombre",
            text4: "Administrador",
            text5: "Actualizar perfil",
            text6: "Modificar datos de acceso",
            text7: "Contraseña actual",
            text8: "Nueva contraseña",
            text9: "Cambiar contraseña",
            text10: "Mis servicios",
            text11: "Agregar servicio",
            text12: "Nombre",
            text13: "Tipo de servicio",
            text14: "Fecha de creación",
            text15: "Zona horaria",
            text16: "Estado",
            text17: "Activar",
            text18: "Desactivar",
            text19: "Añadir empresa",
            text20:
              "Por favor rellene la información de la empresa a continuación",
            text21: "Nombre de la empresa",
            text22: "Tipo de empresa",
            text23: "Subit logo",
            text24: "Guardar",
            text25: "Cancelar",
            text26: "Salir",
            text27: "Actualizar",
            text28: "Añadir Empresa",
            text29:
              "Por favor, rellene la información de la empresa a continuación.",
            text30: "Nombre de la Empresa",
            text31: "Tipo de Empresa",
            text32: "Subir Logotipo",
            text33: "Mis Servicios",
            text34: "Agregar Servicio",
            text35: "Fecha de creación",
            text36: "Zona horaria",
            text37: "Activo",
            text38: "Inactivo",
            text39: "Cambiar Estatus",
            text40:
              "¿Estás seguro de que deseas cambiar el status de el servicio",
            text41: "No Atendido",
            text42: "El Cliente colgó",
            text43: "Finalizada",
            text44: "Pila de espera",
            text45: " Información General - Folio #",
            text46: "Servicio",
            text47: "Identificador",
            text48: "Folio",
            text49: "Grabación",
            text50: "Fecha de asignación",
            text51: "Fecha de cierre",
            text52: "Estado de folio",
            text53: "Ultima clasificación",
            text54: "Tiempo de Duracion (sec)",
            text55: "Mensajes",
            text56: "Fecha de envio",
            text57: "Hora de envio",
            text58: "Mensaje",
            text59: "Tipo de mensaje",
            text60: "Buscador",
            text61: "No hay datos para mostrar",
            text62: "Buscar por Número de Folio",
            text63: "Aqui va un ejemplo de FOLIO",
            text64: "Elige un servicio",
            text65: "Elige un Reporte",
            text66:
              "No tienes listas, agrega nuevas listas para poder consultarlas.",
            text67: "Reportes de folio ligth",
            text68: "Reportes blaster",
            text69: "Reportes de IVR",
            text70: "Reportes de SMS",
            text71: "Reportes de Graficas",
            text72: "Reportes de Mapas",
            text73: "Reportes",
            text74: "Nuevo",
            text75: "Atención",
            text76: "Guardado",
            text77: "Transferido",
            text78: "Finalizado",
            text79: "Atención BOT",
            text80: "Buzon de Voz",
            text81: "Fallo",
            text82: "Pila de espera",
            text83: "Telefono",
            text84: "Fecha en que marcó",
            text85: "Estatus",
            text86: "No se encontraron datos",
            text87: "Reporte de llamadas por Estatus.",
            text88: "Reporte de llamadas por día.",
            text89: "Páginas",
            text90: "Sin datos",
            text91: "Audio",
            text92: "Estado del Folio",
            text93: "Agente",
            text94: "ID Caso",
            text95: "Identificador",
            text96: "Tipo de llamada",
            text97: "Fecha de inicio",
            text98: "Fecha final",
            text99: "Duracion (seg)",
            text100: "Fecha de llamada",
            text101: "Duración de llamada(seg)",
            text102: "Entregado",
            text103: "No Entregado",
            text104: "Información General",
            text105: "Usuarios Registrados",
            text106: "Servicio",
            text107: "Aplicaciones",
            text108: "Llamadas/SMS Outbound",
            text109: "Este campo es obligatorio",
            text110: "Solo se aceptan letras",
            text111: "y caracteres especiales",
            text112: "Nombre del Servicio",
            text113: "Saludo Inicial",
            text114: "Todos",
            text115: "Supervisor",
            text116: "Calidad",
            text117: "Suspendido",
            text118: "Baja",
            text119: "Eliminar",
            text120: "Usuario",
            text121: "Perfil",
            text122: "Buscar por usuario o nombre",
            text123: "Perfil seleccionado",
            text124: "Editar",
            text125: "Agregar Usuario",
            text126: "Editar Usuario",
            text127: "Numero de atenciones simultaneas",
            text128: "Contraseña",
            text129: "Eliminar agente",
            text130: "Estás seguro de que deseas eliminar a ",
            text131: "Algunos campos se encuentran vacíos.",
            text132: "acepta al menos 8 caracteres",
            text133: "acepta máximo 15 caracteres",
            text134: "contiene al menos una letra mayúscula",
            text135: "contiene al menos una letra minúscula",
            text136: "contiene al menos un dígito",
            text137: "no acepta espacios en blanco",
            text138: "contiene al menos un caractér especial: ej. $@$!%*?&",
            text139: "La contraseña debe tener las siguientes características: ",
            text140: "Quitar",
            text141: "Cargar datos...",
            text142: "Inicio",
            text143: "Opciones de servicio",
            text144: "Asunto",
            text145: "Palabra clave",
            text146: "Agregar",
            text147: "Agregar Clasiificación",
            text148: "Nueva Clasificación",
            text149: "Agregar CRM",
            text150: "Nuevo CRM",
            text151: "Nombre del Queue",
            text152: "Asunto del Queue",
            text153: "Estás seguro de que deseas eliminar ",
            text154: "Eliminar CRM",
            text155: "Eliminar Queue",
            text156: "Estás seguro de que deseas eliminar ",       
            text157: "El maximo de caracteres son 15",
            text158: "Solo se aceptan números",
            text159: "El maximo de caracteres son 1",
            text160: "Solo se aceptan del 0 al 9",
            text161: "Departamento",
            text162: "Marcador",
            text163: "Buscar por departamento",
            text164: "Diagrama",
            text165: "No hay coincidencias",
            text166: "Diagrama IVR",
            text167: "Agregar Nuevo IVR",
            text168: "numero",
            text169: "mensaje",
            text170: "Ingrese un número",
            text171: "Ingrese un mensaje",
            text172: "formato SMS.xlsx",
            text173: "IVR Activos",
            text174: "ingresa nombre del cliente",
            text175: "Llamadas",
            text176: "Formato",
            text177: "Sube tus archivos Outbound, para este servicio",
            text178: " Al no seleccionar *Programar Campaña*, la campaña será lanzada instantáneamente.",
            text179: "Nombre de la Campaña",
            text180: "Procesar archivo",
            text181: "Programar campaña",
            text182: "Archivo",
            text183: "Buscar por nombre de Lista",
            text184: "Listas activas",            
            text185: "Administra tus listas desde aquí.",
            text186: "Aún no cuentas con listas activas de ",
            text187: "Eliminar Respuesta",
            text188: "Estas seguro que quieres eliminar la lista ",
            text189: "Iniciar Sesión",
            text190: "Cerrar Sesión",
            text191: "Agregar Nuevo Queue",
            text192: "Esquema",
            text193: "Seleccione una fecha y hora para lanzar su campaña.",
            text194: "Fecha inicio",
            text195: "Fecha fin",
            text196: "Listas",
          },
        },
      },
    },
    lng: localStorage.getItem('lang'), 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
```

## i18nOpcionesDeServicio.js

Este código configura i18next para gestionar la internacionalización en una aplicación React, permitiendo cambiar fácilmente entre inglés y español. Las traducciones se cargan desde archivos JSON y el idioma predeterminado es el español. La interpolación está configurada para no escapar valores, confiando en la seguridad de React para manejar los datos de forma segura.

```jsx 
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import opcionesDeServicioEN from "./EN/opcionesDeServicio.json";
import opcionesDeServicioES from "./ES/opcionesDeServicio.json";

const resources ={
    en:{
        translation: opcionesDeServicioEN
    },
    es:{
        translation: opcionesDeServicioES
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation:{
        escapeValue: false
    }
});
```