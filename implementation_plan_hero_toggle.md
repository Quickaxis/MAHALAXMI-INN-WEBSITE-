# Implementation Plan - Hero Toggle Update

## Goal
Update the theme toggle logic in `index.html` to use the new hero image path for the daytime theme.

## Proposed Changes
### index.html
- Update the `themeToggle` click listener to change the day mode image source.
- From: `gallery/day and night picture/day.jpg`
- To: `gallery/all pictures/lobby/frontimage.jpg`

## Verification Plan
### Manual Verification
1. Open `index.html`.
2. Click the theme toggle.
3. Observe that the hero image correctly switches to `frontimage.jpg` for day and the existing night image for night.
