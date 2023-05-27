const express = require("express");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");
const cors = require("cors");
const { log } = require("console");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello backend");
});
app.post("/api/mediapipe/yog1", async (req, res) => {
  const pythonProcess = spawn("python", ["main1.py"]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      res.status(200).send("MediaPipe code executed successfully");
    } else {
      console.log(code);
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post("/api/mediapipe/yog2", (req, res) => {
  const pythonProcess = spawn("python", ["main2.py"]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on("data", (data) => {
    console.log(code);
    console.error(data.toString());
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      res.status(200).send("MediaPipe code executed successfully");
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post("/api/mediapipe/yog3", (req, res) => {
  const pythonProcess = spawn("python", ["main3.py"]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      res.status(200).send("MediaPipe code executed successfully");
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post("/api/mediapipe/yog4", (req, res) => {
  const pythonProcess = spawn("python", ["main4.py"]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      res.status(200).send("MediaPipe code executed successfully");
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post("/api/mediapipe/yog5", (req, res) => {
  const pythonProcess = spawn("python", ["main5.py"]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      res.status(200).send("MediaPipe code executed successfully");
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.post("/api/mediapipe/yog6", (req, res) => {
  const pythonProcess = spawn("python", ["main6.py"]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      res.status(200).send("MediaPipe code executed successfully");
    } else {
      res.status(500).send(`MediaPipe code failed with error code `);
    }
  });
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
