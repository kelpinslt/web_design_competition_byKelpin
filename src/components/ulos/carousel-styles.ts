/**
 * Shared sizing and depth styles for the floating carousel and its empty
 * slot preview, so both use exactly the same geometry.
 *
 * Card width per breakpoint (approved design): 80vw at 360, 78vw from 380,
 * 52vw tablet, 36vw at 1024, 28vw (max 30rem) from 1280.
 */
export const cardWidthVars =
  "[--card-w:80vw] min-[380px]:[--card-w:78vw] md:[--card-w:52vw] lg:[--card-w:36vw] xl:[--card-w:min(28vw,30rem)]";

/**
 * Depth from `--ad`, the card's absolute distance from the centre in card
 * widths (0 = active). Side cards shrink, sit lower and fade; the active
 * card is largest. Transform origin at the bottom keeps the stagger visible.
 */
export const cardDepth =
  "origin-bottom [transform:translateY(calc(min(var(--ad),3)*3%))_scale(calc(1-min(var(--ad),2)*0.13))] opacity-[calc(1-min(var(--ad),2.5)*0.3)]";
