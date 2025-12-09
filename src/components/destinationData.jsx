import BigBen from "../Images/BigBen.JPG";
import EiffelTower from "../Images/eiffel_tower.JPG";
import BigBen2 from "../Images/BigBen2.JPG";
import Fountain from "../Images/Fountain.JPG";
import Wheel from "../Images/Wheel.JPG";
import LondonBuilding from "../Images/LondonBuilding.JPG";
import RosettaStone from "../Images/RosettaStone.JPG";
import Arc from "../Images/Arc.JPG";
import Arc2 from "../Images/Arc2.JPG";
import Store from "../Images/Store.JPG";
import Tower2 from "../Images/Tower2.JPG";
import TowerBridge from "../Images/TowerBridge.JPG";
import Station from "../Images/Station.JPG";

// Currently filled with dummy data for testing purposes.
export const destinationData = [
  {
    id: 1,
    name: "London",
    description:
      "London is a bustling city full of culture, history, and modern attractions.",
    images: [BigBen, BigBen2, Fountain, Wheel, LondonBuilding, RosettaStone],
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
    images: [EiffelTower, Arc, Arc2, Store, Tower2, TowerBridge],
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
  {
    id: 3,
    name: "Amsterdam",
    description: "Test for Amsterdam",
    images: [Station],
    funFacts: ["Test fact 1", "Test fact 2", "Test fact 3"],
    highlights: [
      "Test highlight 1",
      "Test highlight 2",
      "Test highlight 3",
      "Test highlight 4",
    ],
  },
];
