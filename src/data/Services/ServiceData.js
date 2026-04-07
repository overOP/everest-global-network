import consulting from "/public/services/service1.png"
import visa from "/public/services/service2.png"
import scholarship from "/public/services/service3.png"

import ielts from "/public/services/classes/ielts.png"
import pte from "/public/services/classes/pte.png"
import duolingo from "/public/services/classes/duolingo.png"
import japanese from "/public/services/classes/japanese.png"



export const serviceData = [
  {
    id: 1,
    title: "Consulting",
    description:
      "Our expert consultants can help you strategize and optimize your business processes.",
    image: consulting,
  },
  {
    id: 2,
    title: "Visa Assistance",
    description:
      "We provide comprehensive visa assistance services to help you navigate the application process smoothly.",
    image: visa,
  },
  {
    id: 3,
    title: "Scholarship Guidance",
    description:
      "Get personalized scholarship guidance to maximize your chances of securing funding for your education abroad.",
    image: scholarship,
  },
];

// Classes/Course offerings for slider section
export const classServices = [
  {
    id: "cls-ielts",
    title: "IELTS",
    path: "/ielts",
    image: ielts,
  },
  {
    id: "cls-pte",
    title: "PTE",
    path: "/pte",
    image: pte,
  },
  {
    id: "cls-duolingo",
    title: "Duolingo English Test",
    path: "/duolingo",
    image: duolingo,
  },
  {
    id: "cls-japanese",
    title: "Japanese",
    path: "/japanese",
    image: japanese,
  },
];
