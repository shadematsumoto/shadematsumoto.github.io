// Demo video: the Google Drive player only loads when someone clicks
// "Play demo", which keeps the page fast. Without JavaScript the button is
// a normal link to the video on Google Drive.

document.querySelectorAll(".demo-frame[data-embed]").forEach((frame) => {
  // Show the thumbnail only if it loads (it won't while the file is private).
  const poster = frame.querySelector(".demo-poster");
  if (poster) {
    const show = () => {
      if (poster.naturalWidth > 0) frame.classList.add("has-poster");
    };
    if (poster.complete) show();
    else poster.addEventListener("load", show);
  }

  const play = frame.querySelector(".demo-play");
  if (!play) return;

  play.addEventListener("click", (event) => {
    event.preventDefault();
    const iframe = document.createElement("iframe");
    iframe.src = frame.dataset.embed;
    iframe.title = frame.dataset.title || "Demo video";
    iframe.allow = "autoplay; fullscreen";
    iframe.allowFullscreen = true;
    frame.replaceChildren(iframe);
    iframe.focus();
  });
});
