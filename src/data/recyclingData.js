export const statusConfig = {
  yes: {
    icon: "✓",
    title: "Yes",
    subtitle: "This product is recyclable",
    color: "#6B9E3E", // Green
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
      {
        title: "STEP 1: Clean your package",
        description: "Rinse out any remaining contents.",
        image: "/images/clean-package.jpg"
      },
      {
        title: "STEP 2: Remove non-recyclable parts",
        description: "Take off any labels or parts not part of the package (like films).",
        image: "/images/remove-parts.jpg"
      },
      {
        title: "STEP 3: Rinse (not scrub) the package",
        description: "A quick rinse is sufficient. No need to scrub.",
        image: "/images/rinse-package.jpg"
      },
      {
        title: "STEP 4: Crush and bag the package for recycling",
        description: "Place directly into bins.",
        image: "/images/bag-recycling.jpg"
      },
      {
        title: "STEP 5: Check local recycling laws for proper instructions",
        description: "Regulations vary by location.",
        image: "/images/check-local.jpg"
      }
    ],
    materialInfo: {
      description: "Aluminum is known for being strong, light, and highly resistant to corrosion. Because it's soft, shining, and cheap to produce, making it the most widely used non-ferrous metal in the world. It's also the most widely recycled.",
      recyclingNote: "Recycling aluminum cans and other forms of aluminum is one of the easiest metals to recycle. Many municipalities include aluminum in curbside pickup programs, and there are many additional outlets for recycling that you can research online. Because it's non-toxic and lasting, aluminum remains viable for recycling even after many cycles.",
      additionalInfo: "From a recycling perspective, PET is one of the easiest plastics to recycle. Most curbside pickup programs accept it, and it can be cleaned, separated, and even granulated before being processed using new curbside pickup programs."
    }
  },
  
  plastic: {
    status: "yes",
    materialName: "PET",
    materialCode: "1",
    steps: [
      {
        title: "STEP 1: Clean your package",
        description: "Rinse containers thoroughly.",
        image: "/images/clean-package.jpg"
      },
      {
        title: "STEP 2: Remove non-recyclable parts",
        description: "Remove caps and labels if required.",
        image: "/images/remove-parts.jpg"
      },
      {
        title: "STEP 3: Rinse the package",
        description: "Quick rinse to remove residue.",
        image: "/images/rinse-package.jpg"
      },
      {
        title: "STEP 4: Place in recycling bin",
        description: "Check if crushing is recommended locally.",
        image: "/images/bag-recycling.jpg"
      },
      {
        title: "STEP 5: Check local recycling laws",
        description: "Verify acceptance in your area.",
        image: "/images/check-local.jpg"
      }
    ],
    materialInfo: {
      description: "PET is lightweight, recyclable with an established infrastructure, and its transparency, strength, and barrier properties make it ideal for beverages, food packaging, personal care items, and pharmaceuticals.",
      recyclingNote: "From a recycling perspective, PET is one of the easiest plastics to recycle. Most curbside pickup programs accept it, and it can be cleaned, separated, and even granulated before being processed.",
      additionalInfo: "PET plastic is highly recyclable and widely accepted in recycling programs."
    }
  },

  glass: {
    status: "yes",
    materialName: "Glass",
    materialCode: "GL",
    steps: [
      {
        title: "STEP 1: Clean your package",
        description: "Rinse bottles and jars.",
        image: "/images/clean-package.jpg"
      },
      {
        title: "STEP 2: Remove metal lids and caps",
        description: "Separate glass from metal components.",
        image: "/images/remove-parts.jpg"
      },
      {
        title: "STEP 3: Keep different colors separate",
        description: "Some facilities require color sorting.",
        image: "/images/rinse-package.jpg"
      },
      {
        title: "STEP 4: Place in recycling bin",
        description: "Or take to glass recycling center.",
        image: "/images/bag-recycling.jpg"
      },
      {
        title: "STEP 5: Check local requirements",
        description: "Verify glass acceptance in your area.",
        image: "/images/check-local.jpg"
      }
    ],
    materialInfo: {
      description: "Glass is infinitely recyclable without loss of quality. It's made from natural materials and is one of the most sustainable packaging options available.",
      recyclingNote: "Glass recycling is well-established in most areas. Clean glass can be recycled endlessly into new containers.",
      additionalInfo: "Keep glass separate from other recyclables for best results."
    }
  },

  cardboard: {
    status: "yes",
    materialName: "Cardboard",
    materialCode: "PAP",
    steps: [
      {
        title: "STEP 1: Flatten boxes",
        description: "Break down cardboard boxes to save space.",
        image: "/images/clean-package.jpg"
      },
      {
        title: "STEP 2: Remove plastic tape and labels",
        description: "Take off any non-paper materials.",
        image: "/images/remove-parts.jpg"
      },
      {
        title: "STEP 3: Keep dry",
        description: "Wet cardboard cannot be recycled.",
        image: "/images/rinse-package.jpg"
      },
      {
        title: "STEP 4: Place in recycling bin",
        description: "Or bundle for curbside pickup.",
        image: "/images/bag-recycling.jpg"
      },
      {
        title: "STEP 5: Check local guidelines",
        description: "Verify what types are accepted.",
        image: "/images/check-local.jpg"
      }
    ],
    materialInfo: {
      description: "Cardboard is made from renewable wood pulp and is highly recyclable. It's one of the most commonly recycled materials.",
      recyclingNote: "Keep cardboard clean and dry for recycling. Most curbside programs accept cardboard.",
      additionalInfo: "Corrugated cardboard and paperboard are both recyclable."
    }
  },

  batteries: {
    status: "no",
    materialName: "Batteries",
    materialCode: "BATT",
    steps: [
      {
        title: "This packaging is not recyclable",
        description: "Throwing this item away could pollute landfills and harm wildlife. It will not decompose.",
        image: "/images/not-recyclable.jpg"
      }
    ],
    materialInfo: {
      description: "Batteries contain hazardous materials that require special handling. They should never be placed in regular trash or recycling bins.",
      recyclingNote: "Take batteries to designated collection centers. Many retailers offer battery recycling programs. Store batteries safely until disposal.",
      additionalInfo: "Different battery types (alkaline, lithium, rechargeable) may have different disposal requirements."
    }
  },

  metal: {
    status: "yes",
    materialName: "Metal",
    materialCode: "FE",
    steps: [
      {
        title: "STEP 1: Clean containers",
        description: "Rinse food and beverage containers.",
        image: "/images/clean-package.jpg"
      },
      {
        title: "STEP 2: Remove labels if possible",
        description: "Paper labels should be removed.",
        image: "/images/remove-parts.jpg"
      },
      {
        title: "STEP 3: Check with magnet",
        description: "Helps identify steel vs aluminum.",
        image: "/images/rinse-package.jpg"
      },
      {
        title: "STEP 4: Place in recycling bin",
        description: "Most metals are widely accepted.",
        image: "/images/bag-recycling.jpg"
      },
      {
        title: "STEP 5: Verify local acceptance",
        description: "Check what metal types are accepted.",
        image: "/images/check-local.jpg"
      }
    ],
    materialInfo: {
      description: "Most metals are highly recyclable and retain their properties through multiple recycling cycles.",
      recyclingNote: "Steel and aluminum are widely recycled. Check if tin cans are accepted in your area.",
      additionalInfo: "Metal recycling saves significant energy compared to producing new metal."
    }
  },

  unknown: {
    status: "maybe",
    materialName: "Unknown Material",
    materialCode: "?",
    steps: [
      {
        title: "Unable to determine recyclability",
        description: "We couldn't identify the specific material for this product.",
        image: "/images/unknown.jpg"
      }
    ],
    materialInfo: {
      description: "Without clear material identification, we cannot provide specific recycling guidance.",
      recyclingNote: "Check the packaging for recycling symbols or numbers. Look for material codes like PET, HDPE, PP, etc. Contact your local waste management for guidance.",
      additionalInfo: "When in doubt, it's better to throw items in the trash rather than contaminating recycling bins."
    }
  }
};