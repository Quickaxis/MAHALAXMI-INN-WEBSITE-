# Replacing Room Carousels with Static Images

The user wants to simplify the image display for certain room types by replacing the interactive carousels with single, high-quality static images.

## Proposed Changes

### [Website Homepage]

#### [MODIFY] [index.html](file:///c:/Users/chitr/Downloads/my%20websites/mahalaxmi%20inn%20demo/index.html)

- **Deluxe AC Room**: Replace the `<div class="room-carousel" id="carousel-deluxe-ac">` block and its children with a single `<img>` tag pointing to `room-deluxe-ac.jpg`.
- **Grand Suite**: Replace the `<div class="room-carousel" id="carousel-grand-suite">` block and its children with a single `<img>` tag pointing to `room-grand-suite.jpg`.
- Styling for both images will include:
  - `width: 100%`
  - `height: 320px`
  - `object-fit: cover`
  - `border-radius: 16px 16px 0 0`
  - `display: block`

## Verification Plan

### Manual Verification
- Verify that the Deluxe AC and Grand Suite sections now show a single image instead of a carousel.
- Ensure the Standard Room and Deluxe Non AC sections still have their carousels.
- Check that the new images are correctly sized and have the requested border-radius.
