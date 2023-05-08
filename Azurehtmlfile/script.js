const cameraFeed = document.getElementById("cameraFeed");
const cameraOverlay = document.getElementById("cameraOverlay");
const captureBtn = document.getElementById("captureBtn");
const preview = document.getElementById("preview");
const capturedImage = document.getElementById("capturedImage");
const submitBtn = document.getElementById("submitBtn");
const textOutput = document.getElementById("textOutput");

// Replace with your own API key and endpoint
const apiKey = "8abff6a9371340838065db2c74763698";
const endpoint = "https://serialnum.cognitiveservices.azure.us/vision/v3.2/ocr";

// Access user's camera
navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
        cameraFeed.srcObject = stream;
        cameraFeed.addEventListener("loadedmetadata", () => {
            cameraOverlay.style.display = "block";
        });
    })
    .catch(err => {
        console.error(err);
        alert("Error: Unable to access the camera.");
    });

// Capture image from camera feed
captureBtn.addEventListener("click", () => {
    capturedImage.width = cameraFeed.videoWidth;
    capturedImage.height = cameraFeed.videoHeight;
    const context = capturedImage.getContext("2d");
    context.drawImage(cameraFeed, 0, 0);

    // Display preview of captured image
    preview.src = capturedImage.toDataURL("image/jpeg");
});

// Process captured image and extract text
submitBtn.addEventListener("click", async () => {
    textOutput.textContent = "Processing...";
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/octet-stream",
                "Ocp-Apim-Subscription-Key": apiKey,
            },
            body: await new Promise(resolve => {
                capturedImage.toBlob(blob => resolve(blob), "image/jpeg");
            }),
        });

        if (response.ok) {
            const data = await response.json();
            const text = data.regions
                .flatMap(region => region.lines)
                .map(line => line.words.map(word => word.text).join(" "))
                .join("\n");
            textOutput.textContent = text;
        } else {
            textOutput.textContent = "Error: Unable to process the image.";
        }
    } catch (error) {
        console.error(error);
        textOutput.textContent = "Error: Unable to process the image.";
    }
});