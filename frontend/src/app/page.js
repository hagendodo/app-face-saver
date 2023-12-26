"use client";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const Home = () => {
  const [socket, setSocket] = useState(io.connect("http://localhost:5000"));
  const [menu1, setMenu1] = useState(0);
  const [menu2, setMenu2] = useState(0);
  const [menu3, setMenu3] = useState(0);
  const [historyMenus, setHistoryMenus] = useState([]);
  const [responses, setResponses] = useState([]);

  const addHistoryMenu = async (menuData, callback) => {
    try {
      const response = await fetch("http://localhost:5000/history-menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuData),
      });

      if (!response.ok) {
        throw new Error("Error adding menu. Please try again.");
      }

      callback();
      return await response.json();
    } catch (error) {
      console.error("Error:", error.message);
      return;
    }
  };

  const getAllHistoryMenu = async () => {
    try {
      const response = await fetch("http://localhost:5000/history-menu", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Error adding menu. Please try again.");
      }

      return await response.json();
    } catch (error) {
      console.error("Error:", error.message);

    }
  };

  const callGetAllHistoryMenus = () => {
    getAllHistoryMenu()
      .then((data) => {
        setHistoryMenus(data.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const getAllResponse = async () => {
    try {
      const response = await fetch("http://localhost:5000/response", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Error adding menu. Please try again.");
      }

      return await response.json();
    } catch (error) {
      console.error("Error:", error.message);

    }
  };

  const callGetAllResponses = () => {
    console.log("call response")
    getAllResponse()
        .then((data) => {
          setResponses(data.data);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
  };

  useEffect(() => {
    callGetAllResponses();

    const intervalId = setInterval(callGetAllResponses, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    callGetAllHistoryMenus();
    const video = document.getElementById("video");

    socket.on("connect", () => {
      console.log("SOCKET CONNECTED");
    });

    socket.on("my event", (data) => {
      console.log("received my event:", data);
    });

    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    Promise.all([
      faceapi.loadFaceLandmarkModel("http://localhost:5000/face-api/models/"),
      faceapi.loadFaceRecognitionModel(
        "http://localhost:5000/face-api/models/"
      ),
      faceapi.loadTinyFaceDetectorModel(
        "http://localhost:5000/face-api/models/"
      ),
      faceapi.loadFaceLandmarkModel("http://localhost:5000/face-api/models/"),
      faceapi.loadFaceLandmarkTinyModel(
        "http://localhost:5000/face-api/models/"
      ),
      faceapi.loadFaceRecognitionModel(
        "http://localhost:5000/face-api/models/"
      ),
      faceapi.loadFaceExpressionModel("http://localhost:5000/face-api/models/"),
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
  }, []);

  useEffect(() => {
    move(menu1 * 4);
    if (menu1 >= 25) {
      addHistoryMenu(
        {
          user_id: 1,
          menu_id: 1,
        },
        () => {
          Toastify({
            text: "Menu 1",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
          callGetAllHistoryMenus();
        }
      );

      setMenu1(0);
      setMenu2(0);
      setMenu3(0);
    }
  }, [menu1]);

  useEffect(() => {
    move(menu2 * 4);
    if (menu2 >= 25) {
      addHistoryMenu(
        {
          user_id: 1,
          menu_id: 2,
        },
        () => {
          Toastify({
            text: "Menu 2",
            className: "info",
            style: {
              background: "linear-gradient(to right, #3498db, #2980b9)",
            },
          }).showToast();
          callGetAllHistoryMenus();
        }
      );

      setMenu1(0);
      setMenu2(0);
      setMenu3(0);
    }
  }, [menu2]);

  useEffect(() => {
    move(menu3 * 4);
    if (menu3 >= 25) {
      addHistoryMenu(
          {
            user_id: 1,
            menu_id: 3,
          },
          () => {
            Toastify({
              text: "Menu 3",
              className: "info",
              style: {
                background: "linear-gradient(to right, #e67e22, #d35400)",
              },
            }).showToast();
            callGetAllHistoryMenus();
          }
      );

      setMenu1(0);
      setMenu2(0);
      setMenu3(0);
    }
  }, [menu3]);

  const handlePlay = () => {
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

      // const resizedDetections = faceapi.resizeResults(detections, displaySize);
      // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      if (detections[0]) {
        const idle = detections[0].expressions.idle;
        const menu_1 = detections[0].expressions.menu_1;
        const menu_2 = detections[0].expressions.menu_2;
        const menu_3 = detections[0].expressions.menu_3;

        const maxExpressionValue = Math.max(idle, menu_1, menu_2, menu_3);
        let maxVariableName;
        if (maxExpressionValue > 0.7 && maxExpressionValue !== idle) {
          // faceapi.draw.drawDetections(canvas, resizedDetections);
          // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
          // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

          if (maxExpressionValue === menu_1) {
            maxVariableName = "menu1";
            setMenu1((prevMenu1) => prevMenu1 + 1);
          } else if (maxExpressionValue === menu_2) {
            maxVariableName = "menu2";
            setMenu2((prevMenu2) => prevMenu2 + 1);
          } else {
            maxVariableName = "menu3";
            setMenu3((prevMenu3) => prevMenu3 + 1);
          }
        } else if (maxExpressionValue > 0.3 && maxExpressionValue !== idle) {
          if (maxExpressionValue === menu_3) {
            maxVariableName = "menu3";
            setMenu3((prevMenu3) => prevMenu3 + 1);
          }
        }
      }
    }, 100);
  };

  const move = (width) => {
    if (width < 100) {
      requestAnimationFrame(() => move(width * 4));
    }
  };

  return (
      <div className={"bg-secondary"} style={{ maxHeight: "100vh"}}>
      <script src="/js/face-api.min.js" type="text/javascript"></script>
      <Row className={"p-4"} style={{ height: "100vh" }}>
        <Col lg={6} md={6} sm={12}>
          <Card>
            <CardHeader>Face Saver</CardHeader>
            <video
              id="video"
              width={640}
              height={480}
              onPlay={handlePlay}
              autoPlay
              muted
            ></video>
            <CardBody>
              <div>
                <span>Menu 1</span>
                <div id="myProgress">
                  <div
                    id="myBar"
                    style={{
                      width: `${menu1 === 0 ? 5 : menu1 * 4}%`,
                      height: "30px",
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }}
                  >
                    {menu1 * 4}%
                  </div>
                </div>
              </div>
              <div>
                <span>Menu 2</span>
                <div id="myProgress">
                  <div
                    id="myBar"
                    style={{
                      width: `${menu2 === 0 ? 5 : menu2 * 4}%`,
                      height: "30px",
                      background: "linear-gradient(to right, #3498db, #2980b9)",
                    }}
                  >
                    {menu2 * 4}%
                  </div>
                </div>
              </div>
              <div>
                <span>Menu 3</span>
                <div id="myProgress">
                  <div
                    id="myBar"
                    style={{
                      width: `${menu3 === 0 ? 5 : menu3 * 4}%`,
                      height: "30px",
                      background: "linear-gradient(to right, #e67e22, #d35400)",
                    }}
                  >
                    {menu3 * 4}%
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Card className="mb-4" style={{ maxHeight: "50vh" }}>
            <CardHeader>Riwayat Pilihan</CardHeader>
            <CardBody>
              <ul>
                {historyMenus.slice().reverse().map((historyMenu, index) =>
                    historyMenu.menu ? (
                        <li key={index}>
                          {`(${new Date(historyMenu.createdAt).toLocaleString(
                              "en-US",
                              { timeZone: "Asia/Jakarta" }
                          )}) ${historyMenu.menu.name} - ${historyMenu.menu.message}`}
                        </li>
                    ) : (
                        ""
                    )
                )}
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Respon</CardHeader>
            <CardBody>
              <ul>
                {responses.slice().reverse().map((response, index) =>
                    (
                        <li key={index}>
                          {`(${new Date(response.createdAt).toLocaleString(
                              "en-US",
                              { timeZone: "Asia/Jakarta" }
                          )}) ${response.response_message}`}
                        </li>
                    )
                )}
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
