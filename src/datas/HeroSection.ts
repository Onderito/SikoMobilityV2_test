import { HeroSection } from "../models/HeroSection";
import financement from "../assets/Financement-560da06b.png";
import paiement from "../assets/Paiement-1c17143b.png";
import mobilite from "../assets/Mobilite-9de2bf13.png";

export const heroSections: HeroSection[] = [
  {
    image: financement,
    title: "PAIEMENT 3/4/10 FOIS",
    description:
      "Faites un paiement en 3, 4 ou 10 fois en carte bleue. Sans justificatif",
  },
  {
    image: paiement,
    title: "FINANCEMENT 12 A 60 MOIS",
    description:
      "Faites une demande de financement de 12 à 60 fois. Obtenez un accord d'une de nos banques partenaires",
  },

  {
    image: mobilite,
    title: "FORFAITS MOBILITÉ",
    description:
      "Souscrivez à un abonnement assurance, assistance, garantie ou maintenance. Sans engagement",
  },
];
