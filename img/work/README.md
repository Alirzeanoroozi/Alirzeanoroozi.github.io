# Images for the site

## Research cards (homepage)

Drop a file at each of these paths and the matching card on the homepage shows
a thumbnail. Leave a file out and that card simply renders without one — no
broken image.

| File                      | Card               |
| ------------------------- | ------------------ |
| `img/work/amp-dit.png`    | AMP-DiT            |
| `img/work/amp-bindgen.png`| AMP-BindGen        |
| `img/work/idpepdesign.png`| IDPepDesign        |
| `img/work/binder-eval.png`| BinderEval/COMPASS |

Thumbnails are cropped to 4:3 on desktop and 16:7 on mobile, displayed about
136 px wide. Export around 560x420 px so they stay sharp on retina screens.
Figure panels from the posters work well.

## Blog post images

Reference them from a post with normal Markdown:

    ![Caption](img/posts/my-figure.png)

## Profile photo

`img/profile.jpg`, square, at least 368x368 px.
