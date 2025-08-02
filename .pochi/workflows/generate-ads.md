# Screenshot-to-Ads Generation Workflow

## Goal
Create high-converting ads using screenshot inspiration for design style.

## Trigger Keywords

**For Screenshot-to-Ads Workflow (this one):**
- Screenshot + "generate ads" / "create ads" / "make ads"
- Screenshot + "ads like this" / "use this style" / "inspire ads"
- "Make ads using this design"

**Note:** If no screenshot provided, ask user to upload one first.

## Process

### 1. Extract Design Specs Accurately (CRITICAL STEP)
**First, identify exact visual elements - precision is key:**
- **Colors:** Extract exact hex codes, don't guess (use color picker methodology)
- **Typography:** Identify font weight, size, style (bold, italic, serif, sans-serif)
- **Layout:** Measure spacing, alignment, proportions
- **Text content:** Read all visible text exactly as written
- **Visual style:** Categorize aesthetic (vintage, modern, minimal, bold, playful)

**CRITICAL:** If colors/fonts are unclear, explicitly state uncertainty rather than guessing. Wrong colors = failed ads.

### 2. Ask Product & Audience
"What product/service should I advertise and who's your main audience?"

### 3. Generate 3 Ad Variations
Use screenshot's visual style with different messaging approaches.

### 4. Package & Deliver
**Create GitHub release with organized assets:**

1. **Generate ZIP package:**
```
ProductName-Ads-YYYY-MM-DD-HH:MM.zip
├── inspiration-reference.png (original screenshot)
├── all-variations.html (combined view of all 3 ads)
├── exports/
│   ├── variation-1-benefit.png
│   ├── variation-2-urgency.png
│   └── variation-3-social.png
└── generation-details.txt (product info, audience, timestamp)
```

2. **Auto-commit to organized repo structure:**
```
ads-generated/
└── 2025-08-02-productivity-app/
```

3. **Create GitHub release with ZIP as downloadable asset**

4. **Share release download link in Slack** - user gets direct ZIP download

## If No Screenshot
"Upload a design screenshot first."
