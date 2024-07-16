import "./style.css";
import { getVideo, drawVideo } from "./src/camera";

(async function run() {
  const video = await getVideo();
  const canvas = document.querySelector("canvas");
  const button = document.getElementById("selfie-button");

  button.addEventListener("click", () => {
    console.log("drawing");
    drawVideo(video, canvas);
  });
})();
