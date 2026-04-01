# JXD Hub

## Current State
JXD Hub has multiple notes pages under the Learn dropdown: SEO Notes, Google Ads Notes, Google Analytics Notes. The navigation includes a Learn submenu with these pages plus Blog.

## Requested Changes (Diff)

### Add
- New page `/dropshipping-notes` with comprehensive Dropshipping course content
- 6 tabs: Introduction, How It Works, Documentation, Product Research, Build Your Store, Suppliers

### Modify
- `App.tsx`: add `dropshippingNotesRoute`
- `Layout.tsx`: add "Dropshipping Notes" to the Learn submenu and footer

### Remove
- Nothing

## Implementation Plan
1. Create `DropshippingNotesPage.tsx` with 6 tabs covering all provided content
2. Update `App.tsx` to import and register the new route at `/dropshipping-notes`
3. Update `Layout.tsx` to add Dropshipping Notes to Learn dropdown and footer
