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
import AmstBuilding1 from "../Images/AmstBuilding1.JPG";
import Canal from "../Images/Canal.JPG";
import Canal2 from "../Images/Canal2.JPG";
import VanGogh from "../Images/VanGogh.JPG";
import NightWatch from "../Images/NightWatch.JPG";

// Currently filled with dummy data for testing purposes.
export const destinationData = [
  {
    id: 1,
    name: "London",
    description:
      "London is a bustling city full of culture, history, and modern attractions.",
    images: [
      { src: BigBen, alt: "Big Ben clock tower in London" },
      { src: BigBen2, alt: "Big Ben from another angle" },
      { src: Fountain, alt: "Fountain in London" },
      { src: Wheel, alt: "London Eye Ferris wheel" },
      { src: LondonBuilding, alt: "Historic building in London" },
      { src: RosettaStone, alt: "Rosetta Stone inside the British Museum" },
    ],

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
    images: [
      { src: EiffelTower, alt: "The Eiffel Tower in Paris" },
      { src: Arc, alt: "The Arc de Triomphe in Paris" },
      { src: Arc2, alt: "The Arc de Triomphe in Paris from another angle" },
      { src: Store, alt: "A cool store in Paris" },
      { src: Tower2, alt: "The Eiffel Tower at night" },
      { src: TowerBridge, alt: "The Eiffel Tower from a distance" },
    ],
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
    description:
      "Amsterdam is a vibrant, historic city known for its canal networks, rich art culture, and unique architecture.",
    images: [
      { src: Station, alt: "A photo of Amsterdam Centraal Station" },
      { src: AmstBuilding1, alt: "Historic building in Amsterdam" },
      { src: Canal, alt: "Canal in Amsterdam" },
      { src: Canal2, alt: "Another canal view in Amsterdam" },
      { src: NightWatch, alt: "Famous The Night Watch painting in Amsterdam" },
      { src: VanGogh, alt: "Famous Van Gogh painting in Amsterdam" },
    ],
    funFacts: [
      "Amsterdam has more bicycles than residents.",
      "The city has 165 canals — more than Venice.",
      "Many Amsterdam houses lean forward due to old pulley systems used to lift goods.",
    ],
    highlights: [
      "Rijksmuseum",
      "Van Gogh Museum",
      "Canal Cruise",
      "Anne Frank House",
    ],
  },
];
