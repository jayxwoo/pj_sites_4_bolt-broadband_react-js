import anim_rocket from "../assets/anims/rocket.json";
import anim_testing from "../assets/anims/testing.json";
import anim_security from "../assets/anims/security.json";
import anim_chatbot from "../assets/anims/chatbot.json";

export const hero_rocket = {
    anim: anim_rocket,
    label: "Speed",
    title: "Blazing Fast Broadband",
    desc: "We guarantee the fastest broadband in New Zealand!",
    btnLabel: "Check your speed",
    btnStyle: { blue: "btn-outline--blue", red: "btn-outline--red", yellow: "btn-outline--yellow" },
    btnSize: { large: "btn--large", mobile: "btn--mobile" },
    imgPos: "right",
    lightBg: false,
    link: "/services",
};

export const hero_testing = {
    anim: anim_testing,
    label: "Technology",
    title: "New era of internet",
    desc: "We provide cutting edge technology and destructive innovations!",
    btnLabel: "Check our services",
    btnStyle: { blue: "btn-outline--blue", red: "btn-outline--red", yellow: "btn-outline--yellow" },
    btnSize: { large: "btn--large", mobile: "btn--mobile" },
    imgPos: "left",
    lightBg: true,
    link: "/plans",
};

export const hero_security = {
    anim: anim_security,
    label: "Security",
    title: "Safe and secure 24/7",
    desc: "We provide world leading security of data protection!",
    btnLabel: "Check our services",
    btnStyle: { blue: "btn-outline--blue", red: "btn-outline--red", yellow: "btn-outline--yellow" },
    btnSize: { large: "btn--large", mobile: "btn--mobile" },
    imgPos: "left",
    lightBg: true,
    link: "/signup",
};

export const hero_chatbot = {
    anim: anim_chatbot,
    label: "Chatbot",
    title: "Customer service 24/7",
    desc: "Our customer service runs night and day!",
    btnLabel: "Talk to us",
    btnStyle: { blue: "btn-outline--blue", red: "btn-outline--red", yellow: "btn-outline--yellow" },
    btnSize: { large: "btn--large", mobile: "btn--mobile" },
    imgPos: "right",
    lightBg: false,
    link: "/signup",
};