const os = require("os");
const fs = require("fs");

const root = document.documentElement;
const cpu_percent = document.getElementById("cpu-bar");
const ram_percent = document.getElementById("ram-bar");
const gpu_percent = document.getElementById("gpu-bar");
const disk_percent = document.getElementById("disk-bar");

// const cpu = os.cpu

cpu_percent.style.width="30%";
