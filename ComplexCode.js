// filename: ComplexCode.js

/* 
* This code generates a complex, elaborate and sophisticated pattern of colors
* using the K-means clustering algorithm. The pattern is displayed as a canvas 
* with interactive functionality, allowing the user to manipulate the colors.
*/

// Canvas dimensions
const canvasWidth = 500;
const canvasHeight = 500;

// Number of clusters
const numClusters = 5;

// Array to store the cluster centers
let clusterCenters = [];

// Array to store the cluster colors
let clusterColors = [];

// Array to store the data points and their assigned cluster
let dataPoints = [];
let dataPointClusters = [];

// Function to initialize the canvas
function initCanvas() {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  document.body.appendChild(canvas);
}

// Function to generate random RGB colors
function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

// Function to initialize the cluster centers
function initClusters() {
  for (let i = 0; i < numClusters; i++) {
    const center = {
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
    };
    clusterCenters.push(center);
    clusterColors.push(generateRandomColor());
  }
}

// Function to initialize the data points
function initDataPoints() {
  for (let i = 0; i < canvasWidth; i++) {
    for (let j = 0; j < canvasHeight; j++) {
      const point = {
        x: i,
        y: j,
        color: generateRandomColor(),
      };
      dataPoints.push(point);
      dataPointClusters.push(null);
    }
  }
}

// Function to calculate Euclidean distance between two points
function calculateDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

// Function to assign data points to clusters
function assignDataPointsToClusters() {
  dataPoints.forEach((point, index) => {
    let minDistance = Infinity;
    let assignedCluster = null;

    clusterCenters.forEach((center, clusterIndex) => {
      const distance = calculateDistance(point, center);
      if (distance < minDistance) {
        minDistance = distance;
        assignedCluster = clusterIndex;
      }
    });

    dataPointClusters[index] = assignedCluster;
  });
}

// Function to update cluster centers
function updateClusterCenters() {
  clusterCenters.forEach((center, index) => {
    let sumX = 0;
    let sumY = 0;
    let count = 0;

    dataPoints.forEach((point, pointIndex) => {
      if (dataPointClusters[pointIndex] === index) {
        sumX += point.x;
        sumY += point.y;
        count++;
      }
    });

    center.x = sumX / count;
    center.y = sumY / count;
  });
}

// Function to draw the canvas
function drawCanvas() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  dataPoints.forEach((point, index) => {
    const color = clusterColors[dataPointClusters[index]];
    context.fillStyle = color;
    context.fillRect(point.x, point.y, 1, 1);
  });
}

// Function to handle mouse click events on the canvas
function handleCanvasClick(event) {
  const canvas = document.getElementById("canvas");
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  dataPoints.forEach((point, index) => {
    if (point.x === mouseX && point.y === mouseY) {
      dataPoints[index].color = generateRandomColor();
    }
  });
}

// Main code execution
initCanvas();
initClusters();
initDataPoints();
assignDataPointsToClusters();
drawCanvas();

// Event listener for canvas click
document.getElementById("canvas").addEventListener("click", handleCanvasClick);