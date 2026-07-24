# ADVERTISING_DISPLAY_PLAN

This Monobombo site uses one NativeBanner_1 unit plus standard banner formats.

## cleanRoutes

- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/disclosure`
- `/sources`

## pageFamily

- `article`
  - use `AdsterraArticleTop`, `AdsterraArticleMid`, and `AdsterraArticleBottom`
- `guide`
  - use `AdsterraArticleTop`, `AdsterraArticleMid`, and `AdsterraArticleBottom`
- `wiki`
  - use `AdsterraArticleTop`, `AdsterraArticleMid`, and `AdsterraArticleBottom`
- `update`
  - use `AdsterraArticleTop`, `AdsterraArticleMid`, and `AdsterraArticleBottom`
- `tool`
  - use `AdsterraToolAd` and `AdsterraToolBottom`

## planned_long_tail

- future Monobombo long-tail pages should follow the article stack unless they are tool routes
- cleanRoutes stay free of visible ads and suppress global popunder, SocialBar, and sticky rail gates
- tool pages keep ads outside the interactive or planning surface

## core unit constraints

- one NativeBanner_1 unit per page
- no duplicate native fallback units
- do not place visible ads on cleanRoutes
