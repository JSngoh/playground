# Ad Generation Workflow

## Trigger Requirements

**Flexible triggers - ANY of these work:**
- Screenshot + "generate ads" / "create ads" / "make ads"
- Screenshot + any ad creation request
- "Make ads for [product]" (can ask for screenshot if helpful)

**If no screenshot provided:**
- "Please upload a screenshot first, then ask me to generate ads."

## Analysis Phase

First, analyze the uploaded screenshot and gather requirements:

### 1. Extract Available Information
- Product/service being advertised
- Current headline and copy (if visible)
- Brand colors and fonts used
- Overall design style and mood
- Call-to-action present

### 2. Clarification Questions (ALWAYS ASK)

Before generating, ask user:
- **"Is this screenshot for design inspiration, content reference, or both?"**
- **"What product/service should I advertise?"** (even if obvious - confirm)
- **"Who's your target audience?"** (age, interests, pain points)
- **"What action should people take?"** (buy, sign up, visit, call, learn more)
- **"Any specific style preferences?"** (modern, minimal, bold, professional, fun)

**Wait for answers before proceeding - do not assume or guess**

### 3. Identify Core Value Proposition
From the answers provided by user

## Generation Phase

Create 5 distinct ad variations with AI-generated content and different design approaches:

### Variation 1: Benefit-Focused
- **Headline**: Lead with the primary benefit/value proposition
- **Description**: 2-3 sentences explaining the key advantage
- **Style**: Clean layout emphasizing the benefit
- **Colors**: Use brand colors from reference, primary color for emphasis

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

Create a single combined HTML file containing all 5 variations:

1. **File naming**: `ads-generated-YYYY-MM-DD-HH:MM.html` (e.g., `ads-generated-2025-07-30-14:30.html`)
2. **Structure**: All 5 ad variations in one file with clear section breaks
3. **Embedded CSS styling** (no external dependencies)
4. **Standard ad dimensions**: Default to 1200x630 (social media) unless user specifies otherwise
5. **Responsive design** that scales properly
6. **Semantic HTML** with proper heading structure
7. **Accessible design** with good contrast ratios

**File Structure:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Ad Variations - [Product Name] - Generated [Date/Time]</title>
    <style>/* Combined CSS for all variations */</style>
</head>
<body>
    <h1>5 Ad Variations - [Product Name]</h1>
    
    <div class="ad-container variation-1">
        <h2>1. Benefit-Focused</h2>
        <!-- ad content -->
    </div>
    
    <div class="ad-container variation-2">
        <h2>2. Urgency-Driven</h2>
        <!-- ad content -->
    </div>
    
    <!-- Continue for all 5 variations -->
</body>
</html>
```

## Quality Control

Before generating, confirm:
- ✅ You have answers to all clarification questions
- ✅ You understand the target audience and product
- ✅ Each variation has a distinctly different messaging strategy
- ✅ Brand colors are identified (or neutral palette chosen)

## Error Handling

**If any step fails:**
- **Unclear input**: Ask specific clarifying questions, don't guess
- **Missing information**: Stop and ask for required details
- **Technical limits**: Explain limitations and suggest alternatives

**Never:**
- Generate ads without clear requirements
- Assume product details not provided by user
- Proceed without getting clarification answers
- Create generic placeholder content

## User Interaction

After delivering ads, ask:
- "Which variation works best for your needs?"
- "Would you like me to create more variations of a specific style?"
- "Should I adjust anything about the messaging or design?"
- "Do you want me to create different dimensions for any of these ads?"
