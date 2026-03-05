# Implementation Plan - The Mahalaxmi Inn Upgrades

This plan outlines the major enhancements requested for the hotel website, focusing on expanded room options, new content sections, and a refined mobile experience.

## Proposed Changes

### [index.html](file:///c:/Users/chitr/Downloads/my%20websites/mahalaxmi%20inn%20demo/index.html)
- **Design System Upgrade**:
    - Update `.pill-label` classes for the new semi-transparent gold background.
    - Enhance `nav` styles with increased blur and saturation.
    - Implement the morphing hamburger menu logic and full-screen overlay styles.
- **Section Implementation**:
    - **Why Choose Us**: New flex/grid layout with 4 status cards.
    - **Breakfast Highlight**: Rich banner with Unsplash image and feature pills.
    - **Rooms Grid**: 2x2 CSS Grid for 4 room types, including the "Grand Suite" with its unique badge and popular ribbon.
    - **Hotel Policies**: Two-column informational section with custom inline SVG checkmarks/info icons.
    - **CTA Banner**: Implementation of the three-layer gradient and trust badges.
- **Functionality**:
    - Add the "Room Type" dropdown to the booking modal.
    - Update the JavaScript to handle the new mobile menu overlay and hamburger icon animation.
- **SEO/Schema**:
    - Expand JSON-LD to reflect the full room inventory and the 1000-1800 price range.

## Verification Plan
1. **Responsive Grids**: Verify 2x2 grid on desktop collapses to 1x1 or 2x2 on mobile as specified.
2. **Mobile Nav**: Confirm full-screen overlay covers the viewport and the hamburger morphs correctly.
3. **Modal Form**: Ensure the "Room Type" dropdown is present and styled correctly.
4. **Policy Icons**: Check that inline SVGs for checklist and info dots are correctly colored.
5. **Theme Consistency**: Ensure all new sections (Why Choose Us, Breakfast, Policies) respect Day/Night mode.
