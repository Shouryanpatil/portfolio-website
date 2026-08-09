/*
  TECHNIQUES DATA
  ================
  One object per sequencing technique. This file is just a LIST — it holds
  no descriptions yet. resources.js reads this array and renders the
  accordion on resources.html automatically, so adding a new technique or
  filling in a description never requires touching any HTML.

  HOW TO FILL IN A TECHNIQUE
  --------------------------
  Find the entry below and fill in these three fields (all start empty):

    summary:    "" -> a 2-4 sentence explanation of what it is and why it exists
    whenToUse:  "" -> when/why you'd reach for this technique specifically
    keySteps:   [] -> array of short strings, one per major workflow step
                       e.g. ["Sample prep", "Library prep", "Sequencing", "Analysis"]

  Example of a FILLED-IN entry (just showing the shape, not real content):

    {
      id: "example-seq",
      name: "Example-Seq",
      fullName: "Example Sequencing",
      category: "Transcriptomics",
      summary: "One or two sentences on what this technique measures.",
      whenToUse: "One or two sentences on the scenario where you'd pick this.",
      keySteps: ["Step one", "Step two", "Step three"]
    }

  HOW TO ADD A BRAND NEW TECHNIQUE (not already listed)
  -------------------------------------------------------
  Copy any object below, give it a new unique "id" (lowercase, hyphenated,
  no spaces), and place it under whichever "category" it belongs to (or
  create a new category string — the accordion groups automatically by
  whatever string you put in "category", so a new category name just works).

  Leaving summary/whenToUse empty and keySteps as [] is fine — resources.js
  will automatically show a "Content coming soon" placeholder for any
  technique that isn't filled in yet, so the page never looks broken while
  you're still researching.
*/

const techniques = [
  // ---------- Transcriptomics ----------
  {
    id: "rna-seq",
    name: "RNA-Seq",
    fullName: "Bulk RNA Sequencing",
    category: "Transcriptomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "scrna-seq",
    name: "scRNA-seq",
    fullName: "Single-Cell RNA Sequencing",
    category: "Transcriptomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "spatial-transcriptomics",
    name: "Spatial Transcriptomics",
    fullName: "Spatial Transcriptomics",
    category: "Transcriptomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },

  // ---------- Genome & Targeted Sequencing ----------
  {
    id: "wgs",
    name: "WGS",
    fullName: "Whole-Genome Sequencing",
    category: "Genome & Targeted Sequencing",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "wes",
    name: "WES",
    fullName: "Whole-Exome Sequencing",
    category: "Genome & Targeted Sequencing",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "targeted-sequencing",
    name: "Targeted Sequencing",
    fullName: "Targeted Panel Sequencing",
    category: "Genome & Targeted Sequencing",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "amplicon-seq",
    name: "Amplicon-Seq",
    fullName: "Amplicon Sequencing",
    category: "Genome & Targeted Sequencing",
    summary: "",
    whenToUse: "",
    keySteps: []
  },

  // ---------- Microbial & Metagenomics ----------
  {
    id: "metagenomic-sequencing",
    name: "Metagenomic Sequencing",
    fullName: "Whole-Community DNA Sequencing",
    category: "Microbial & Metagenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "16s-rrna-seq",
    name: "16S rRNA-Seq",
    fullName: "16S Ribosomal RNA Gene Sequencing",
    category: "Microbial & Metagenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "its-sequencing",
    name: "ITS Sequencing",
    fullName: "Internal Transcribed Spacer Sequencing",
    category: "Microbial & Metagenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },

  // ---------- Chromatin & Epigenomics ----------
  {
    id: "chip-seq",
    name: "ChIP-Seq",
    fullName: "Chromatin Immunoprecipitation Sequencing",
    category: "Chromatin & Epigenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "atac-seq",
    name: "ATAC-Seq",
    fullName: "Assay for Transposase-Accessible Chromatin Sequencing",
    category: "Chromatin & Epigenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "dnase-seq",
    name: "DNase-Seq",
    fullName: "DNase I Hypersensitive Site Sequencing",
    category: "Chromatin & Epigenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "faire-seq",
    name: "FAIRE-Seq",
    fullName: "Formaldehyde-Assisted Isolation of Regulatory Elements Sequencing",
    category: "Chromatin & Epigenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "hi-c",
    name: "Hi-C",
    fullName: "High-Throughput Chromosome Conformation Capture",
    category: "Chromatin & Epigenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "plac-seq",
    name: "PLAC-Seq",
    fullName: "Proximity Ligation-Assisted ChIP-Seq",
    category: "Chromatin & Epigenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "chia-pet",
    name: "ChIA-PET",
    fullName: "Chromatin Interaction Analysis by Paired-End Tag Sequencing",
    category: "Chromatin & Epigenomics",
    summary: "",
    whenToUse: "",
    keySteps: []
  },

  // ---------- DNA Methylation ----------
  {
    id: "bisulfite-seq",
    name: "Bisulfite-Seq",
    fullName: "Bisulfite Sequencing",
    category: "DNA Methylation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "wgbs",
    name: "WGBS",
    fullName: "Whole-Genome Bisulfite Sequencing",
    category: "DNA Methylation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "rrbs",
    name: "RRBS",
    fullName: "Reduced-Representation Bisulfite Sequencing",
    category: "DNA Methylation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "medip-seq",
    name: "MeDIP-Seq",
    fullName: "Methylated DNA Immunoprecipitation Sequencing",
    category: "DNA Methylation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "nome-seq",
    name: "NOMe-Seq",
    fullName: "Nucleosome Occupancy and Methylome Sequencing",
    category: "DNA Methylation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },

  // ---------- RNA-Protein Interaction & Translation ----------
  {
    id: "ribo-seq",
    name: "Ribo-Seq",
    fullName: "Ribosome Profiling Sequencing",
    category: "RNA-Protein Interaction & Translation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "clip-seq",
    name: "CLIP-Seq",
    fullName: "Cross-Linking and Immunoprecipitation Sequencing",
    category: "RNA-Protein Interaction & Translation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "rip-seq",
    name: "RIP-Seq",
    fullName: "RNA Immunoprecipitation Sequencing",
    category: "RNA-Protein Interaction & Translation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "eclip-seq",
    name: "eCLIP-Seq",
    fullName: "Enhanced CLIP Sequencing",
    category: "RNA-Protein Interaction & Translation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "net-seq",
    name: "NET-Seq",
    fullName: "Nascent RNA Sequencing",
    category: "RNA-Protein Interaction & Translation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "pro-seq",
    name: "PRO-Seq",
    fullName: "Precision Run-On Sequencing",
    category: "RNA-Protein Interaction & Translation",
    summary: "",
    whenToUse: "",
    keySteps: []
  },
  {
    id: "gro-seq",
    name: "GRO-Seq",
    fullName: "Global Run-On Sequencing",
    category: "RNA-Protein Interaction & Translation",
    summary: "",
    whenToUse: "",
    keySteps: []
  }
];
