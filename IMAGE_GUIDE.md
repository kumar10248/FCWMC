# Adding Images to Questions and Options

This application now supports adding images to ### 3. Image Size Options

You can control how large images appear using the `imageSize` property:

**For Question Images:**
- `"small"`: Maximum width of ~384px (good for small diagrams)
- `"medium"`: Maximum width of ~512px (good for moderate diagrams) 
- `"large"`: Maximum width of ~672px (good for detailed diagrams)
- `"full"`: Full container width (good for wide diagrams)
- Default: `"large"` if not specified

**For Option Images:**
- `"small"`: Maximum width of ~192px (good for icons/symbols)
- `"medium"`: Maximum width of ~256px (good for small diagrams)
- `"large"`: Maximum width of ~320px (good for detailed option visuals)
- Default: `"medium"` if not specifiedtions and individual answer options for visual aids like diagrams, charts, decision trees, and option illustrations.

## How to Add Images to Questions

### 1. Add Your Image File

Place your image file in the `/public/images/` directory. Supported formats:
- PNG (.png)
- JPEG (.jpg, .jpeg)
- SVG (.svg)
- WebP (.webp)

### 2. Update the Question Object

Add an `image` property to your question object in `/src/app/lib/questions.ts`:

```typescript
{
  "question": "Your question text here",
  "options": [
    "Option A",
    "Option B", 
    "Option C",
    "Option D"
  ],
  "explanation": "Explanation of the correct answer",
  "correctAnswer": [2],
  "image": "/images/your-image-filename.png",  // Add this line
  "imageSize": "large"  // Optional: "small", "medium", "large", or "full"
}
```

## How to Add Images to Answer Options

You can also add images to individual answer options! This is perfect for visual comparisons, symbol recognition, or diagram-based questions.

### Option Format with Images

Instead of simple strings, use objects with `text` and `image` properties:

```typescript
{
  "question": "Which network topology node is most suitable for a central hub?",
  "options": [
    {
      "text": "Circular node with high connectivity",
      "image": "/images/option-a.svg",
      "imageSize": "small"
    },
    {
      "text": "Square node with moderate processing",
      "image": "/images/option-b.svg", 
      "imageSize": "small"
    },
    "Regular text option without image",  // You can mix formats
    {
      "text": "Diamond node with routing functions",
      "image": "/images/option-d.svg",
      "imageSize": "medium"
    }
  ],
  "explanation": "...",
  "correctAnswer": [0]
}
```

### Mixed Option Formats

You can mix regular text options with image options in the same question:

```typescript
"options": [
  "Simple text option",
  {
    "text": "Option with image",
    "image": "/images/diagram.png",
    "imageSize": "small"
  },
  "Another text option",
  {
    "text": "Another option with image", 
    "image": "/images/chart.svg",
    "imageSize": "medium"
  }
]
```

### 4. Image Best Practices

You can control how large images appear using the `imageSize` property:

- `"small"`: Maximum width of ~384px (good for small diagrams)
- `"medium"`: Maximum width of ~512px (good for moderate diagrams) 
- `"large"`: Maximum width of ~672px (good for detailed diagrams)
- `"full"`: Full container width (good for wide diagrams)
- Default: `"large"` if not specified

- **File Size**: Keep images under 1MB for fast loading
- **Dimensions**: Recommended max width of 800px
- **Format**: Use SVG for diagrams, PNG for screenshots, JPEG for photos
- **File Naming**: Use descriptive, kebab-case names (e.g., `mimo-decision-tree.svg`)

### 5. Example Question with Image

```typescript
{
  "question": "Which of the following is incorrect based on the MIMO decision tree shown?",
  "options": [
    "A: Transmit diversity (TM2)",
    "B: Closed loop spatial multiplexing (TM3)", 
    "C: CL rank = 1 (TM6)",
    "D: Open loop spatial multiplexing (TM4)"
  ],
  "explanation": "Based on the MIMO decision tree diagram, all transmission modes are correctly described...",
  "correctAnswer": [2],
  "image": "/images/mimo-decision-tree.svg",
  "imageSize": "large"
}
```

**More Examples with Different Sizes:**

```typescript
// Small image for simple diagrams
{
  "question": "What does this symbol represent?",
  "image": "/images/small-symbol.png",
  "imageSize": "small"
}

// Medium image for moderate complexity
{
  "question": "Analyze the network topology shown:",
  "image": "/images/network-diagram.png", 
  "imageSize": "medium"
}

// Full-width for wide diagrams
{
  "question": "Based on the complete signal flow:",
  "image": "/images/wide-signal-flow.svg",
  "imageSize": "full"
}
```

### 6. Current Implementation Features

- **Size Control**: Choose from small, medium, large, or full-width display options
- **Responsive Design**: Images scale appropriately on different screen sizes
- **Error Handling**: Graceful fallback if image fails to load
- **Optimization**: Uses Next.js Image component for PNG/JPEG files
- **Styling**: Images are displayed with a white background and rounded corners
- **Positioning**: Images appear between the question text and answer options
- **Validation**: Automatic validation of image paths and file extensions
- **Display Names**: Automatic generation of readable image titles

### 7. Adding Images to Different Modules

Images can be added to questions in any module (module1, module2, module3, etc.). Simply add the `image` property to any question object.

### 8. File Structure

```
public/
  images/
    mimo-decision-tree.svg          # Example MIMO diagram
    network-topology.png            # Example network diagram
    signal-processing-flow.jpg      # Example signal flow
    your-custom-diagrams.*          # Your custom images
```

### 9. Troubleshooting

If images don't display:
1. Check that the file path is correct and starts with `/images/`
2. Verify the image file exists in the `/public/images/` directory
3. Ensure the file extension matches the actual file type
4. Check browser developer tools for any error messages

## Example: Converting Your Attached MIMO Diagram

To use your specific MIMO decision tree diagram:

1. Save your image as `/public/images/mimo-decision-tree.png`
2. Update the question object:

```typescript
{
  "question": "Which of the following is incorrect?",
  "options": [
    "A: Transmit diversity (TM2)",
    "B: Closed loop spatial multiplexing (TM3)",
    "C: CL rank = 1 (TM6)", 
    "D: Open loop spatial multiplexing (TM4)"
  ],
  "explanation": "Based on the MIMO decision tree shown...",
  "correctAnswer": [2],
  "image": "/images/mimo-decision-tree.png",
  "imageSize": "large"
}
```

The system will automatically display your diagram between the question text and the answer options, making it easy for students to reference while answering.

## Quick Summary

Your website now supports:
✅ **Image Support**: Add images to any question using the `image` property  
✅ **Size Control**: Choose from 4 different size options  
✅ **Multiple Formats**: PNG, JPEG, SVG, WebP support  
✅ **Responsive Design**: Works on all device sizes  
✅ **Error Handling**: Graceful fallbacks if images fail to load  
✅ **Validation**: Automatic path and format validation  
✅ **Optimization**: Fast loading with Next.js Image component

Simply add your image file to `/public/images/` and reference it in your question object with the `image` property!
