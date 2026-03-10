# Remove Geyser amenity from Deluxe Non AC room card

This plan outlines the steps to remove the "Geyser" amenity pill from the Deluxe Non AC room card on the main page.

## Proposed Changes

### Mahalaxmi Inn Website

#### [MODIFY] [index.html](file:///c:/Users/chitr/Downloads/my/websites/mahalaxmi/inn/demo/index.html)

- Locate the room card for "Deluxe Non AC" (around line 2165).
- Remove the `<span class="amenity-pill">Geyser</span>` element from the room amenities section (line 2192).

## Verification Plan

### Manual Verification
- Open `index.html` in a browser.
- Scroll down to the "OUR ROOMS" section.
- Verify that the "DELUXE NON AC" card now only shows: "Free WiFi", "TV", and "Power Backup".
- Ensure that the layout of the amenity pills remains clean and consistent.
