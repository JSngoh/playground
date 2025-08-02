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

**Step-by-step delivery process:**

1. **Generate organized folder structure:**
```
ads-generated/
└── YYYY-MM-DD-ProductName/
    ├── inspiration-reference.png (original screenshot)
    ├── all-variations.html (combined view)
    ├── variation-1-benefit.html
    ├── variation-2-urgency.html
    ├── variation-3-social.html
    └── generation-details.txt (product info, audience, timestamp)
```

2. **Create PR with new folder:**
   - Branch: `ads/YYYY-MM-DD-ProductName`
   - Commit message: "Add ads for [ProductName] - [timestamp]"
   - Auto-merge PR

3. **Create GitHub release with ZIP asset:**
   - Release name: `ProductName-Ads-YYYY-MM-DD-HH:MM`
   - Generate ZIP containing all folder contents
   - Attach ZIP as downloadable release asset

4. **Share release download link in Slack:**
   - User gets direct ZIP download
   - Clean, professional delivery

## If No Screenshot
"Upload a design screenshot first."

## If No Screenshot
"Upload a design screenshot first."
