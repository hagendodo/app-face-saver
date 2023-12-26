let video;
while(!video){
    video = document.getElementById("video");
}

var socket = io.connect("http://localhost:3000");
socket.on("connect", function () {
    console.log("SOCKET CONNECTED");
});

navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
Promise.all([
    faceapi.loadFaceLandmarkModel("http://localhost:3000/models/"),
    faceapi.loadFaceRecognitionModel("http://localhost:3000/models/"),
    faceapi.loadTinyFaceDetectorModel("http://localhost:3000/models/"),
    faceapi.loadFaceLandmarkModel("http://localhost:3000/models/"),
    faceapi.loadFaceLandmarkTinyModel("http://localhost:3000/models/"),
    faceapi.loadFaceRecognitionModel("http://localhost:3000/models/"),
    faceapi.loadFaceExpressionModel("http://localhost:3000/models/"),
])
    .then(startVideo)
    .catch((err) => console.error(err));

function startVideo() {
    console.log("access");
    navigator.getUserMedia(
        {
            video: {},
        },
        (stream) => (video.srcObject = stream),
        (err) => console.error(err)
    );
}

let judge = false;
let judgeCounter = {
    menu1: 0,
    menu2: 0,
    menu3: 0,
};

video.addEventListener("play", () => {
    // console.log('thiru');

    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
        const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();
        socket.emit("my event", {
            data: detections,
        });

        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

        if (detections[0]) {
            const idle = detections[0].expressions.idle;
            const menu1 = detections[0].expressions.menu_1;
            const menu2 = detections[0].expressions.menu_2;
            const menu3 = detections[0].expressions.menu_3;

            const maxExpressionValue = Math.max(idle, menu1, menu2, menu3);

            if (maxExpressionValue > 0.7 && maxExpressionValue !== idle) {
                faceapi.draw.drawDetections(canvas, resizedDetections);
                faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
                faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

                let maxVariableName;
                if (maxExpressionValue === menu1) {
                    maxVariableName = "menu1";
                    judgeCounter.menu1++;
                    if (judgeCounter.menu1 >= 30) {
                        judge = true;
                    }
                } else if (maxExpressionValue === menu2) {
                    maxVariableName = "menu2";
                    judgeCounter.menu2++;
                    if (judgeCounter.menu2 >= 30) {
                        judge = true;
                    }
                } else {
                    maxVariableName = "menu3";
                    judgeCounter.menu3++;
                    if (judgeCounter.menu3 >= 30) {
                        judge = true;
                    }
                }

                if (judge) {
                    Toastify({
                        text: maxVariableName,

                        duration: 2000,
                    }).showToast();
                    judge = false;
                    judgeCounter.menu1 = 0;
                    judgeCounter.menu2 = 0;
                    judgeCounter.menu3 = 0;
                }
            }
        }
    }, 100);
});
