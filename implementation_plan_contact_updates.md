# Updating Contact Information and Links

The user wants to update all contact points (WhatsApp, Phone, Location) across the website to a new phone number and pre-filled message.

## Proposed Changes

### [Website Homepage & Menu]

#### [MODIFY] [index.html](file:///c:/Users/chitr/Downloads/my%20websites/mahalaxmi%20inn%20demo/index.html)
- **Get Directions**: Update the button link to `https://www.google.com/maps/@27.4545228,94.9590725,14z` and apply the requested styling.
- **WhatsApp Links**: Replace all `wa.me` URLs with the new pre-filled message URL.
- **Phone Links**: Replace all `tel:` links with `tel:+919954431212`.
- **Booking Modal JS**: Update the `bookForm` submission logic to use the new number and message structure.
- **Footer/Text**: Replace all instances of old phone numbers (`+91 12345 67890`, `+918822983468`, etc.) with `+91 99544 31212`.

#### [MODIFY] [menu-page1.html](file:///c:/Users/chitr/Downloads/my%20websites/mahalaxmi%20inn%20demo/menu-page1.html)
- **WhatsApp/Phone Links**: Replace all contact numbers with the new one.
- **Header/Footer**: Update any text display of the phone number.

## Verification Plan

### Manual Verification
- Click all WhatsApp buttons to ensure they open with the correct pre-filled message.
- Click "Call Now" and `tel:` links to verify they point to `+919954431212`.
- Check the "Get Directions" button link and styling.
- Submit the booking form to verify the generated WhatsApp message is correct.
- Visually inspect the footer for the new phone number.
