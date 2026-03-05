# Updating Hotel Section Image

The user wants to "upload image for hotel jpg section". I've identified that the lobby photo previously used has been renamed to `hotel.jpg` and is the likely target for the "About" section or a similar "hotel" highlight.

## User Review Required

> [!NOTE]
> I am updating the "About" section image source from the UUID-based filename to the new `hotel.jpg` filename found in the gallery.

## Proposed Changes

### [Website Homepage]

#### [MODIFY] [index.html](file:///c:/Users/chitr/Downloads/my%20websites/mahalaxmi%20inn%20demo/index.html)

- Update the `<img>` tag in the About section to use `gallery/all pictures/lobby/hotel.jpg`.
- Keep the custom styling and fallback.

## Verification Plan

### Manual Verification
- Verify the image displays correctly on the homepage.
- Check for any broken image icons.
