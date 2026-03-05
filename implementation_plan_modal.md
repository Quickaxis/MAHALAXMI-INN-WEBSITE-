# Implementation Plan - Modal Replacement

The goal is to replace the current reservation form with a more direct "Contact Options" modal, allowing guests to choose between WhatsApp and phone calls.

## Proposed Changes

### [Website Homepage]

#### [MODIFY] [index.html](file:///c:/Users/chitr/Downloads/my%20websites/mahalaxmi%20inn%20demo/index.html)

- **Step 1 (HTML)**: Replace the `#bookModal` overlay div with the new `#modalOverlay` structure.
- **Step 2 (JS)**: Update JavaScript functions to handle the new modal ID and remove the form submission logic that is no longer needed.
- **Step 3 (Triggers)**: Update all buttons currently using classes to open the modal to use `onclick="openModal()"` directly.

## Verification Plan

### Manual Verification
- Verify that every "Book Now" and "Book This Room" button correctly opens the new modal.
- Test the "WhatsApp" link in the modal.
- Test the "Call to Book" and "Urgent Booking" links.
- Verify that clicking outside the modal or on the close button correctly closes it.
- Verify that scrolling is disabled when the modal is open.
