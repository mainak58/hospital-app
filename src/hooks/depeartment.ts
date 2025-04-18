import ortho1 from "../../img/orthopedic.png";
import cario1 from "../../img/body surgary.png";
import neuro1 from "../../img/neurology.png";
import pedia1 from "../../img/dental-img.png";
import dermato from "../../img/dermatology.png";
import gastro from "../../img/geynologis.png";

export function UseDepeartment() {
    const departments = [
        {
            title: "Orthopedic",
            description:
                "The Orthopedic Department specializes in the diagnosis and treatment of musculoskeletal disorders.",
            image: ortho1,
        },
        {
            title: "Cardiology",
            description:
                "Comprehensive care for heart conditions, using advanced diagnostics and treatment strategies.",
            image: cario1,
        },
        {
            title: "Neurology",
            description:
                "Expert care for neurological disorders with state-of-the-art technology and specialized staff.",
            image: neuro1,
        },
        {
            title: "Pediatrics",
            description:
                "Dedicated to children’s health, our Pediatrics Department offers compassionate, family-centered care.",
            image: pedia1,
        },
        {
            title: "Dermatology",
            description:
                "Treating all types of skin conditions with personalized dermatologic solutions.",
            image: dermato,
        },
        {
            title: "Gastroenterology",
            description:
                "Advanced treatment for digestive system issues with minimally invasive techniques.",
            image: gastro,
        },
    ];

    return departments;
}
