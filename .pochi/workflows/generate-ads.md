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

### STEP 1: Extract Design Specs Accurately (CRITICAL - USE THIS EXACT METHOD)

**Multi-Stage Vision Analysis (Follow this sequence):**

**1a. Color Analysis:**
- "I will analyze this image in HSV color space to identify the 3-5 dominant colors"
- "For each major color area, I'll provide specific hex codes: #RRGGBB"
- "I'll note color relationships: warm/cool, muted/vibrant, complementary/analogous"

**1b. Typography Deep Analysis:**
- "Font weight: thin/light/regular/medium/semibold/bold/black"
- "Font style: serif/sans-serif/slab/script/display/decorative"
- "Typography effects: flat/3D/shadows/outlines/gradients/embossed"
- "Letter spacing: condensed/normal/expanded"
- "Era classification: modern/retro-70s/retro-80s/vintage/art-deco/futuristic"

**1c. Visual Style Assessment:**
- "Overall aesthetic mood: [be very specific - not just 'retro' but '1980s synthwave' or '1950s diner']"
- "Design complexity: minimal/moderate/busy/ornate"
- "Visual hierarchy: what draws attention first, second, third"

**1d. Confidence Check (MANDATORY):**
"My confidence in this analysis (1-10): [score]
- Colors: [score] - If below 7, I'll state: 'Colors appear approximately...'
- Typography: [score] - If below 7, I'll describe general style only
- Overall accuracy: [score] - If below 6, I'll ask for user confirmation"

**CRITICAL RULE:** Only proceed to Step 2 if overall confidence ≥ 6. If below 6, ask user to confirm analysis before generating ads.

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

### STEP 5: GitHub Workflow (MANDATORY - Execute Automatically)
**CRITICAL: I MUST execute these steps automatically without prompting:**

**Automated Steps (I will do these automatically):**
1. **Create new branch:** `ads/YYYY-MM-DD-ProductName`
2. **Commit all files** with message: "Add ads for [ProductName] - [timestamp]"
3. **Push branch to GitHub** 
4. **Provide PR creation URL** for user to complete

**Manual Steps (User must complete):**
5. **User creates Pull Request** by clicking the provided GitHub URL
6. **User merges PR** when ready
7. **User creates GitHub Release** (optional) if download ZIP is needed

**Technical Limitations Note:**
- No GitHub CLI (gh) or API access available in environment
- Cannot automatically create PRs, merge, or create releases
- Can only push branches and provide GitHub URLs for manual completion

### STEP 6: User Communication
**After completing automated steps, provide:**

```
✅ Generated 3 ad variations using [design style description]
✅ Created for: [product name] targeting [audience]
✅ Branch pushed to GitHub: [branch name]
✅ Create your PR here: [GitHub PR creation URL]

Your ads are ready in the repository! The folder contains:
- All 3 HTML ad variations (1200x630px each)
- Combined preview file (all-variations.html)
- Original inspiration reference
- Complete generation details

Next steps:
1. Click the GitHub URL above to create your Pull Request
2. Review the ads and merge when satisfied
3. Optional: Create a GitHub release for easy ZIP download

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