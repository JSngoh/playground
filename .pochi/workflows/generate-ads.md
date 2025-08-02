# Screenshot-to-Ads Workflow (Final) - Detailed Steps

## Goal
Create high-converting ads using screenshot inspiration for design style.

## Trigger Keywords
**For Screenshot-to-Ads Workflow:**
- Screenshot + "generate ads" / "create ads" / "make ads"
- Screenshot + "ads like this" / "use this style" / "inspire ads"
- "Make ads using this design"

**Note:** If no screenshot provided, respond: "Please upload a screenshot first, then ask me to generate ads."

## Detailed Step-by-Step Process

### STEP 1: Extract Design Specs Accurately (CRITICAL)
**DO THIS FIRST - Be extremely precise:**

**1. Color Analysis (Use Color Picker Methodology):**
- Identify the dominant background color and state its approximate hex code
- List all accent colors present and their approximate hex codes  
- Note color relationships: warm/cool, vintage/modern, muted/vibrant
- Example: "Deep red (#B22222), warm gold (#DAA520), cream (#F5F5DC)"

**2. Typography Deep Analysis:**
- Font style: Serif, sans-serif, script, display, decorative
- Font weight: Light, regular, bold, extra-bold, black
- Font treatment: 3D effects, shadows, outlines, gradients
- Size hierarchy: What's large vs small
- Letter spacing: Tight, normal, wide
- Example: "Bold 3D display font with drop shadows and gold outlines"

**3. Visual Style Classification:**
- Era: Modern, retro (70s/80s/90s), vintage, futuristic
- Mood: Professional, playful, elegant, rugged, minimalist
- Industry feel: Tech, fashion, music, food, corporate
- Design approach: Flat, dimensional, illustrated, photographic

**4. Layout Structure:**
- Text alignment: Center, left, justified
- Spacing: Tight, generous, cramped
- Hierarchy: What draws attention first, second, third
- Composition: Symmetrical, asymmetrical, grid-based

**VERIFICATION STEP:**
Before proceeding, state: "I will now create ads using [specific color palette] with [specific typography style] in a [specific visual mood] aesthetic."

**CRITICAL RULE:** If any element is unclear, state "approximately" or "appears to be" rather than guessing. Accuracy over speed.

### STEP 2: Get Product Information (MANDATORY - CANNOT SKIP)
**STOP HERE. Ask this exact question and wait for response:**

"What product/service should I advertise and who's your main audience?"

**CRITICAL RULES:**
- Do NOT proceed without getting this answer
- Do NOT generate generic ads or placeholder content
- Do NOT assume what product to advertise
- Wait for user's complete response before continuing

### STEP 3: Generate 3 Distinct Ad Variations
**Using the design specs from Step 1 and product info from Step 2:**

Create **3 different ad variations** that:
- Use the same visual style from the inspiration screenshot
- Apply different messaging strategies to maximize conversions
- Target the specified audience effectively
- Each have distinct value propositions or approaches

**Let AI determine the best 3 approaches** based on:
- Product type and audience
- Most effective messaging strategies  
- Conversion optimization principles
- Creative differentiation

### STEP 4: Create Organized File Structure
**Generate exactly this folder structure:**

```
ads-generated/
└── YYYY-MM-DD-ProductName/
    ├── inspiration-reference.png (original screenshot)
    ├── all-variations.html (combined view of all 3 ads)
    ├── variation-1-benefit.html
    ├── variation-2-urgency.html
    ├── variation-3-social.html
    └── generation-details.txt (product info, audience, timestamp)
```

**Each HTML file must:**
- Use exact colors from design analysis
- Apply same typography style as inspiration
- Include proper meta tags and responsive design
- Be 1200x630 dimensions for social media
- Have embedded CSS (no external dependencies)

### STEP 5: GitHub Workflow (Execute Automatically)
**Follow this exact sequence:**

1. **Create new branch:** `ads/YYYY-MM-DD-ProductName`
2. **Commit all files** with message: "Add ads for [ProductName] - [timestamp]"
3. **Create Pull Request** with organized folder
4. **Auto-merge PR** to main branch
5. **Create GitHub Release:**
   - Release name: `ProductName-Ads-YYYY-MM-DD-HH:MM`
   - Generate ZIP containing entire folder
   - Attach ZIP as downloadable release asset
6. **Share release download link** with user

### STEP 6: User Communication
**After completing all steps, provide:**

```
✅ Generated 3 ad variations using [design style description]
✅ Created for: [product name] targeting [audience]
✅ Download your ads: [GitHub release link]

Your ads are ready! The ZIP contains:
- All 3 HTML ad variations
- Combined preview file
- Original inspiration reference
- Generation details

Which variation works best for your needs?
```

## Error Handling

**If screenshot unclear:**
- State specific issues: "The text appears blurry, colors seem to be..."
- Ask for clarification rather than guessing
- Provide best analysis possible with uncertainty noted

**If product info missing:**
- Do not proceed with generation
- Re-ask the mandatory question
- Explain why this information is needed

**If technical errors:**
- Report specific issue encountered
- Provide alternative solutions
- Maintain professional communication

## Quality Checkpoints

**Before generating ads, confirm:**
- ✅ Design analysis is complete and detailed
- ✅ Product and audience information received
- ✅ Color/typography specifications are clear
- ✅ Ready to create 3 distinct variations

**Before delivery, confirm:**
- ✅ All 3 variations created with different messaging
- ✅ Proper file structure generated
- ✅ GitHub workflow completed successfully
- ✅ Download link is functional
