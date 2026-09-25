# shadematsumoto.github.io

My personal site: https://shadematsumoto.github.io

Plain HTML and CSS. No framework, no dependencies, no build step.

## Files

```
index.html                  all page content
404.html                    shown for addresses that don't exist
resume.pdf                  linked from the header (add it yourself)
assets/site.css             styles; colors, fonts, spacing are variables at the top
assets/site.js              click-to-play for the demo video
assets/fonts/               SM Mono and SM Slab (see "Fonts" below)
assets/og.png               image shown in link previews (LinkedIn, Slack, iMessage)
assets/favicon.svg          browser tab icon
assets/apple-touch-icon.png home-screen icon
.github/workflows/main.yml  deploys the site when you push to main
```

## Editing

All content is in `index.html`. Each section starts with a comment that explains
how to add to it.

- **Add a job or project:** copy an `<article class="entry">` block and edit it.
  Keep entries newest first.
- **Highlight a number:** wrap it in `<b>`, e.g. `<b>30%</b>`.
- **Add a section:** copy a `<section>` block and change its `id` and heading.
- **Change colors or fonts:** edit the variables in `:root` at the top of
  `assets/site.css`. Dark mode colors are in the block right below it.
- **Change the link preview:** edit the `og:` tags in the `<head>` of `index.html`.
  If you change the name or tagline, regenerate `assets/og.png` (1200 x 630).

Small edits work from a phone: open `index.html` on github.com, tap the pencil
icon, make the change, and commit. The site redeploys on its own.

To preview locally, run this in the repo folder and open http://localhost:8000:

```sh
python3 -m http.server 8000
```

## Deploying

Pushing to `main` deploys the site in about a minute (progress is in the
**Actions** tab). The workflow also writes the last-updated date and commit into
the footer, in place of the `<!-- build -->` comment in `index.html`.

### First-time setup (replacing the old site)

```sh
git clone https://github.com/shadematsumoto/shadematsumoto.github.io.git
cd shadematsumoto.github.io
git rm -r -q .                                      # remove the old Jekyll site
unzip -o ~/Downloads/shadematsumoto.github.io.zip   # or copy in the unzipped files
cp ~/path/to/resume.pdf .
git add -A
git commit -m "Rebuild site"
git push
```

Then check **Settings > Pages > Build and deployment > Source** is set to
**GitHub Actions**. (If you'd rather not use Actions, choose **Deploy from a
branch**, `main`, `/ (root)`, and delete `.github/workflows/main.yml`.
Everything works except the footer date.)

The zip contains hidden files (`.github/`, `.gitignore`, `.nojekyll`). If you copy
files by hand on a Mac, press Cmd+Shift+. in Finder to show them. Without
`.github/`, the site won't deploy.

### Demo video

The demo plays from Google Drive, so the Drive file must be shared as
**Anyone with the link: Viewer**. To use YouTube instead (an unlisted video
works), change three things in the demo block in `index.html`: `data-embed` to
`https://www.youtube-nocookie.com/embed/VIDEO_ID`, the link `href` to the
video's URL, and the `<img>` `src` to
`https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg`.

### Before sharing the link

- Add `resume.pdf` to the top folder. The workflow warns you if it's missing.
  This copy is public, so consider leaving your phone number off it.
- Share the demo video on Drive as **Anyone with the link: Viewer**.
- Check that https://da-grindz.vercel.app still loads. If it doesn't, delete the
  `live` row from the Da Grindz entry.
- If you make the cloud classifier repo public, uncomment its `github` row.
- Update the last sentence of the intro whenever your job search changes.

## Fonts

SM Mono and SM Slab are subsets of Monaspace Neon and Monaspace Xenon by GitHub,
licensed under the SIL Open Font License 1.1 (`assets/fonts/OFL.txt`). They're
renamed because the license reserves the original names for unmodified
versions. To use full Monaspace, or any other font, change the `@font-face`
rules and the `--font-text` and `--font-display` variables in `site.css`.
