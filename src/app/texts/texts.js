const title = "JeraldinMD";
const email = "jeraldinmora90@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573112333638";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En JeraldinMD, nos especializamos en la elaboración de prendas de vestir para niñas, con un enfoque en diseños cómodos y estilosos. Desde faldas y blusas hasta leggins, cada pieza es cuidadosamente confeccionada para resaltar la personalidad y el confort de las niñas.",
        description2: "Durante la temporada escolar, también ofrecemos camisas polo con escudo, sudaderas y leggins, elaborados con la misma dedicación para garantizar calidad y durabilidad en cada prenda. ¡Descubre nuestros productos y vístete con estilo en cualquier ocasión!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Comodidad y estilo para las más pequeñas.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/yeralpte.cdlm?mibextid=ZbWKwL", // Facebook proporcionado
        instagram: "", // No proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
