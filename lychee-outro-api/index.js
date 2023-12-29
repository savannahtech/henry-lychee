const express = require("express");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post("/create-outro", (req, res) => {
  const {brandKitName, action} = req.body;
  try {
    const backgroundVideoPath = "./resources/black-video-bg.mp4";

    // Set the output folder for the generated outro video
    const outputFolder = "output-outro";

    // Create a blank video with transparent background
    const blankVideoPath = `${outputFolder}/blank.mp4`;

    ffmpeg()
      .input("color=black@0.0:size=720x1280")
      .inputOptions("-t 20")
      .inputFormat("lavfi")
      .output(blankVideoPath)
      .on("end", () => {
        // Overlay the text on the blank video
        ffmpeg()
          .input(backgroundVideoPath)
          .input(blankVideoPath)
          .complexFilter([
            {
              filter: "drawtext",
              options: {
                text: action,
                fontfile: "./resources/OpenSans-Regular.ttf", // Change the path accordingly
                fontsize: 32,
                fontcolor: "#FF00F2",
                x: "(w-text_w)/2",
                y: "(h-text_h)/2",
                enable: "between(t,0,4)", // Display text only for the first 4 seconds
              },
            },
          ])
          // Set the output path and filename
          .output(`${outputFolder}/${brandKitName}.mp4`)
          .on("end", () => console.log("Outro video generation finished"))
          .on("error", (err) => console.error(`Error: ${err.message}`))
          .run();
      })
      .on("error", (err) => console.error(`Error: ${err.message}`))
      .run();

    res.json({success: true, message: "Outro successfully generated"});
  } catch (error) {
    console.log("create-outro-error -->", error);
    res.json({success: false, message: "An error occured !"});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
