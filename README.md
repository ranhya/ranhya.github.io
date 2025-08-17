read me!!!!

### Notes

#### Themes

These are `hugo.toml` configuration files for hugo

- `/hugo.toml`: Belongs to `hugo-vitae`
- `/hugo-theme-simple.toml`: Belongs to `hugo-simple`

#### Layouts
 - `/layouts/_partials/head.html`: Custom head.html to load dark mode (`hugo-vitae`)
 - `/layouts/_partials/header.html`: Custom header.html for margin (`hugo-vitae`)
 - `/layouts/_defaults/baseof.html`: Custom baseof.html for emptying out `p` tags (`hugo-vitae`)
 - `/layouts/_partials/footer.html`: Custom footer (`hugo-simple`)

 Currently `/layouts/_partials/footer.html` has been moved to `/footer.html` so that it does
 not interfere with `hugo-vitae` theme

 ### CSS
 - `/static/css/Markdown.css` currently overrides all of `/themes/hugo-vitae/static/css/main.css` for personal cusomizations (`hugo-vitae`)

### Terminology

In this repository for the README:

- `/` refers to git project root, not the final github pages url `/` root

When documenting changes made related to website url, specifically say changes made to
`/xyz/abc.ext` will result in `https://URL/wherever.file`
