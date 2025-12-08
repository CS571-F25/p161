import BigBen from "../Images/BigBen.JPG";
import EiffelTower from "../Images/eiffel_tower.JPG";

// Currently filled with dummy data for testing purposes.
export const destinationData = [
  {
    id: 1,
    name: "London",
    description:
      "London is a bustling city full of culture, history, and modern attractions.",
    images: [BigBen],
    funFacts: [
      "London was founded by the Romans.",
      "Over 300 languages are spoken in the city.",
      "The London Underground is the oldest subway in the world.",
    ],
    highlights: [
      "Big Ben & Westminster",
      "London Eye",
      "Tower Bridge",
      "Buckingham Palace",
    ],
  },
  {
    id: 2,
    name: "Paris",
    description:
      "Paris is known for its romantic charm, iconic architecture, and world-class cuisine.",
    images: [EiffelTower],
    funFacts: [
      "Paris is called the 'City of Light'.",
      "The Louvre is the most visited museum in the world.",
      "There are 37 bridges over the Seine River.",
    ],
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre Dame Cathedral",
      "Champs-Élysées",
    ],
  },
];
