# ranya.run: "Aughts" Hugo theme (2007 style)

1. Install Hugo (extended not required).
2. `hugo server -D` from this folder.

## Shortcodes (in themes/aughts/layouts/shortcodes)
- `{{< youtube id="ID" start="10" end="20" >}}` (start/end optional; also `{{< youtube ID >}}`)
- `{{< spotify "https://open.spotify.com/episode/ID" >}}`, or set `spotify:` in front matter and use `{{< spotify >}}`
- `{{< raw >}}<html>{{< /raw >}}` outputs the HTML inside it untouched
- `{{< smallcaps >}}text{{< /smallcaps >}}`
- `{{< chart src="URL" height="400" />}}` (self-closed) or raw HTML between `{{< chart >}}...{{< /chart >}}`

## Front matter
`title, date, tags, category, series, subtitle, summary, toc: true, dropcap: false, spotify`

## Pages
- Archive: any page with `type = "archive"` (year/month list plus instant search)
- `/tags`, `/category`, `/series` term pages are automatic
- 404 page has search; search index is `/index.json`

## Override hooks (create in your site's layouts/partials)
`single/header.html`, `single/footer.html`, `index/introduction.html`

## Comments (giscus)
1. Enable Discussions on the repo and install the giscus app (https://giscus.app).
2. Copy repo / repoId / category / categoryId into `[params.giscus]` in hugo.toml (uncomment it).
3. The comment box is styled by `static/css/giscus.css`. Giscus can only load custom CSS from a public https URL,
   so the styling shows on the deployed site, not on `hugo server` (locally it uses the plain light/dark theme).
4. Turn comments off for one post with `comments = false` in its front matter.
