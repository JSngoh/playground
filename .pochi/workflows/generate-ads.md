# Ad Generation Workflow

## Trigger Requirements

**STRICT REQUIREMENTS - ALL must be met:**

1. User uploads a screenshot (image file)
2. User uses command like: "generate ads", "create ad variations", "make ads from this"

**If ANY requirement is missing:**

- Stop immediately 
- If no screenshot: "Please upload a screenshot first, then ask me to generate ads."
- If no command: Wait for user to explicitly request ad generation
- Do not proceed or generate anything without both requirements

## Analysis Phase

First, analyze the uploaded screenshot:

### 1. Extract Key Information

- Product/service being advertised
- Current headline and copy (if visible)
- Brand colors and fonts used
- Overall design style and mood
- Call-to-action present
- Target audience implied

### 2. Handle Unclear Screenshots

**If screenshot is unclear, low quality, or not an ad:**

- Ask specific clarifying questions:
  - "What product/service should I advertise?"
  - "What's the main benefit you want to highlight?"
  - "Who is your target audience?"
  - "What action should people take? (buy, sign up, learn more, etc.)"
- Wait for answers before proceeding
- Do not guess or assume product details

### 3. Identify Core Value Proposition

From the image or ask user to specify

## Generation Phase

Create 5 distinct ad variations using the SAME brand colors and style from the original, but with different messaging approaches:

### Variation 1: Benefit-Focused

- **Headline**: Lead with the primary benefit/value proposition
- **Description**: 2-3 sentences explaining the key advantage
- **Style**: Clean layout emphasizing the benefit
- **Colors**: Maintain original brand colors, use primary color for emphasis

### Variation 2: Urgency-Driven  

- **Headline**: Create urgency ("Limited time", "Only today", "Don't miss out")
- **Description**: Short, action-oriented copy with clear deadline
- **Style**: Bold typography with urgency indicators
- **Colors**: Use brand colors but make CTA button more prominent

### Variation 3: Question-Based

- **Headline**: Ask a compelling question that resonates with pain points
- **Description**: Answer the question with your solution
- **Style**: Conversational layout that feels like dialogue
- **Colors**: Softer application of brand colors for approachability

### Variation 4: Social Proof

- **Headline**: Feature testimonial, review, or impressive statistic
- **Description**: Expand on the social proof with credibility indicators
- **Style**: Include visual elements like stars, quotes, or customer photos
- **Colors**: Use brand colors with trust-building accents

### Variation 5: Minimalist

- **Headline**: Ultra-simple, direct message (3-6 words max)
- **Description**: One sentence with essential info only
- **Style**: Maximum white space, single focal point
- **Colors**: Primary brand color only, lots of white space

## Output Requirements

For each variation, create a complete HTML file with:

1. **Embedded CSS styling** (no external dependencies)
2. **Standard ad dimensions**: Default to 1200x630 (social media) unless user specifies otherwise
3. **Responsive design** that scales properly
4. **Semantic HTML** with proper heading structure
5. **Accessible design** with good contrast ratios
6. **File naming**: `benefit-focused-ad.html`, `urgency-ad.html`, `question-ad.html`, `social-proof-ad.html`, `minimalist-ad.html`

## Delivery Method

**IMPORTANT - Deliver to Slack AND GitHub:**

1. **Create exactly 5 HTML files** as described above
2. **Each file must be complete and functional** (test before delivering)
3. **Upload each HTML file as attachment** to this Slack channel
4. **Post a preview/description** of each ad in text format (since image generation may not work)
5. **Create GitHub workflow:**
   - Create new branch named: `ads-generation-[timestamp]`
   - Add all 5 HTML files to the branch
   - Commit with message: "Add 5 ad variations: [brief description]"
   - Create PR from the branch to main
   - Post the PR link in Slack

6. **Final Slack summary:**
   ```
   ✅ Generated 5 ad variations
   📁 Files attached above
   🔗 GitHub PR: [link]
   📊 Summary: [what makes each variation unique]
   ```

### Preview Format

For each ad, post in Slack:

```
🎯 **[Variation Name]** (e.g., Benefit-Focused Ad)
📎 [HTML file attachment]
📝 Key features: [Brief description of approach]
```

## Quality Control

Before generating, confirm:

- ✅ You can identify what product/service is being advertised
- ✅ You have clear brand colors to work with (or fallback to neutral palette)
- ✅ You understand the target audience
- ✅ Each variation has a distinctly different messaging strategy
- ✅ All variations maintain visual brand consistency

## Error Handling

**If any step fails:**

- **File creation fails**: Explain what went wrong, ask if user wants to try again
- **GitHub operations fail**: Still deliver files to Slack, explain GitHub issue
- **Unclear input**: Ask specific clarifying questions, don't guess
- **Technical limits**: Explain limitations and suggest alternatives

**Never:**

- Generate ads without clear requirements
- Assume product details not visible in screenshot
- Proceed silently if something fails
- Create generic placeholder content

## User Interaction

After delivering ads, ask:

- "Which variation works best for your needs?"
- "Would you like me to create more variations of a specific style?"
- "Should I adjust anything about the messaging or design?"
- "Do you want me to create different dimensions for any of these ads?"
