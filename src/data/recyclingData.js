// General
import research from '../assets/images/Research_AI.png';
import dontRecycle from '../assets/images/Dont_Recycle_AI.png';

// Aluminum
import rinseAluminum from '../assets/images/Rinse_Aluminum_AI.png';
import removeLabelAluminum from '../assets/images/RemoveLabel_Aluminum_AI.png';
import doNotCrushAluminum from '../assets/images/DoNotCrush_Aluminum_AI.png';
import noBaggingAluminum from '../assets/images/NoBagging_Aluminum_AI.png';

// Battery
import separateBaggingBattery from '../assets/images/SeparateBagging_Battery_AI.png';
import tapeBattery from '../assets/images/Tape_Battery_AI.png';
import turnInBattery from '../assets/images/TurnIn_Battery_AI.png';

// Cardboard
import cleanCardboard from '../assets/images/Clean_Cardboard_AI.png';
import noBaggingCardboard from '../assets/images/NoBagging_Cardboard_AI.png';
import noLabelCardboard from '../assets/images/NoLabel_Cardboard_AI.png';

// Glass
import rinseGlass from '../assets/images/Rinse_Glass_AI.png';
import noLabelGlass from '../assets/images/NoLabel_Glass_AI.png';
import noBaggingGlass from '../assets/images/NoBagging_Glass_AI.png';
import brokenGlass from '../assets/images/BrokenGlass_Glass_AI.png';

// Plastics (PET/HDPE/PVC/LDPE/PP)
import rinsePET from '../assets/images/Rinse_PET_AI.png';
import removeLabelPET from '../assets/images/RemoveLabel_PET_AI.png';
import crushPET from '../assets/images/Crush_PET_AI.png';
import noBaggingPET from '../assets/images/NoBagging_PET_AI.png';

// Metal
import rinseMetal from '../assets/images/Rinse_Metal_AI.png';
import noBaggingMetal from '../assets/images/NoBagging_Metal_AI.png';

export const statusConfig = {
  yes: {
    icon: "✓",
    title: "Yes",
    subtitle: "This product is recyclable",
    color: "#6AA84F", // Green
    textColor: "#FFFFFF"
  },
  maybe: {
    icon: "○",
    title: "Maybe...",
    subtitle: "Some facilities may accept this",
    color: "#E8A84D", // Orange
    textColor: "#FFFFFF"
  },
  likelyNot: {
    icon: "○",
    title: "Likely not.",
    subtitle: "Most facilities do not accept this",
    color: "#D4893D", // Darker orange
    textColor: "#FFFFFF"
  },
  no: {
    icon: "✕",
    title: "No",
    subtitle: "This product is not recyclable",
    color: "#C55050", // Red
    textColor: "#FFFFFF"
  }
};

export const recyclingInstructions = {
  aluminum: {
    status: "yes",
    materialName: "Aluminum",
    materialCode: "ALU",
    steps: [
      { title: "STEP 1: Clean your package", image: rinseAluminum },
      { title: "STEP 2: Remove non-recyclable parts", image: removeLabelAluminum },
      { title: "NOTE: Do NOT step/crush aluminum. It makes sorting harder!", image: doNotCrushAluminum },
      { title: "STEP 3: Do not bag. Place directly into bins", image: noBaggingAluminum },
      { title: "STEP 4: Check local laws for pick-up", image: research }
    ],
    materialInfo: {
      description: "Aluminum is a lightweight, durable metal that is 100% recyclable and can be recycled indefinitely without losing its quality.",
      recyclingNote: "Aluminum cans are the most recycled beverage container. Always ensure they are empty and rinsed to prevent contamination of other materials.",
      additionalInfo: "Recycling one aluminum can saves enough energy to run a TV for three hours!"
    }
  },

  plastic: {
    status: "yes",
    materialName: "PET",
    materialCode: "1",
    steps: [
      { title: "STEP 1: Rinse containers thoroughly", image: rinsePET },
      { title: "STEP 2: Remove caps and labels", image: removeLabelPET },
      { title: "STEP 3: Crush the package to save space", image: crushPET },
      { title: "STEP 4: Do not bag the recycling", image: noBaggingPET },
      { title: "STEP 5: Check local recycling laws", image: research }
    ],
    materialInfo: {
      description: "PET (Polyethylene Terephthalate) is commonly used for water and soda bottles. It is a highly sought-after material in the recycling industry.",
      recyclingNote: "While most curbside programs accept PET, always check if you need to keep the caps on or off, as different facilities have different machinery.",
      additionalInfo: "Recycled PET can be turned into polyester fiber for fleece clothing, carpets, and even new bottles."
    }
  },

  glass: {
    status: "yes",
    materialName: "Glass",
    materialCode: "GL",
    steps: [
      { title: "STEP 1: Rinse bottles and jars", image: rinseGlass },
      { title: "STEP 2: Remove labels and metal lids", image: noLabelGlass },
      { title: "STEP 3: Do not bag. Place directly into bins", image: noBaggingGlass },
      { title: "NOTE: Do not recycle broken glass in curbside bins", image: brokenGlass },
      { title: "STEP 4: Check local requirements", image: research }
    ],
    materialInfo: {
      description: "Glass is made from natural materials like sand and soda ash. Like aluminum, it is infinitely recyclable without losing purity.",
      recyclingNote: "Labels are usually fine to leave on as they burn off during the melting process, but metal lids should be removed and recycled separately.",
      additionalInfo: "Never include mirrors, lightbulbs, or Pyrex in your recycling bin, as these have different melting points and can ruin a batch of recycled glass."
    }
  },

  cardboard: {
    status: "yes",
    materialName: "Cardboard",
    materialCode: "PAP",
    steps: [
      { title: "STEP 1: Ensure cardboard is clean and dry", image: cleanCardboard },
      { title: "STEP 2: Remove plastic tape and labels", image: noLabelCardboard },
      { title: "STEP 3: Do not bag the cardboard", image: noBaggingCardboard },
      { title: "STEP 4: Check local guidelines", image: research }
    ],
    materialInfo: {
      description: "Cardboard (corrugated and paperboard) is a thick paper-based material. It is a high-value recyclable as long as it stays dry.",
      recyclingNote: "Grease is the enemy of cardboard recycling. If a pizza box is stained with oil, that portion must be composted or thrown away.",
      additionalInfo: "Flattening your boxes is crucial for efficiency—it allows the recycling trucks to carry significantly more material per trip."
    }
  },

  batteries: {
    status: "no",
    materialName: "Batteries",
    materialCode: "BATT",
    steps: [
      { title: "STEP 1: Tape the battery terminals", image: tapeBattery },
      { title: "STEP 2: Place in a separate bag", image: separateBaggingBattery },
      { title: "STEP 3: Turn in at a designated collection center", image: turnInBattery },
      { title: "DO NOT place in regular trash or recycling", image: dontRecycle }
    ],
    materialInfo: {
      description: "Batteries contain heavy metals and chemicals like lithium, cadmium, and lead, which can cause fires in recycling trucks if not handled properly.",
      recyclingNote: "Batteries are 'Hazardous Waste.' Most Home Depots, Best Buys, and local waste centers have specific bins for them.",
      additionalInfo: "Taping the 'ends' (terminals) of batteries prevents them from sparking and causing fires during transport."
    }
  },

  metal: {
    status: "yes",
    materialName: "Metal",
    materialCode: "FE",
    steps: [
      { title: "STEP 1: Rinse food and beverage containers", image: rinseMetal },
      { title: "STEP 2: Do not bag the metal", image: noBaggingMetal },
      { title: "STEP 3: Verify local acceptance", image: research }
    ],
    materialInfo: {
      description: "Metal (often steel or tin) is used for soup cans and aerosol containers. It is highly magnetic, which makes it easy for facilities to sort.",
      recyclingNote: "Aerosol cans must be completely empty before being placed in the recycling bin. If they are pressurized, they are considered hazardous.",
      additionalInfo: "Steel is the most recycled material in North America. More steel is recycled each year than aluminum, glass, and paper combined."
    }
  },

  unknown: {
    status: "maybe",
    materialName: "Unknown Material",
    materialCode: "?",
    steps: [
      { 
        title: "Unable to determine recyclability", 
        description: "Check for recycling symbols or numbers.", 
        image: research 
      }
    ],
    materialInfo: {
      description: "Ourion couldn't definitively identify this material's composition. This can happen with multi-layered packaging.",
      recyclingNote: "When in doubt, throw it out. 'Wish-cycling' (putting unknown items in the bin) can contaminate entire batches of good recyclables.",
      additionalInfo: "Try scanning a different part of the package or looking for a chasing arrows symbol with a number (1-7) inside."
    }
  }
};