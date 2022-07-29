const os = require("os");
const fs = require("fs");

const cpu_usage = document.querySelector(".cpu_usage");
const ram_usage = document.querySelector(".ram_usage");
const gpu_usage = document.querySelector(".gpu_usage");
const disk_usage = document.querySelector(".disk_usage");

function update_cpu_usage(cpu_usage, value) {
    value = Math.round(value);
    cpu_usage.querySelector(".cpu_usage_fill").style.width = `${value}%`;
  }
function update_ram_usage(ram_usage, value) {
    value = Math.round(value);
    ram_usage.querySelector(".ram_usage_fill").style.width = `${value}%`;
  }
function update_gpu_usage(gpu_usage, value) {
    value = Math.round(value);
    gpu_usage.querySelector(".gpu_usage_fill").style.width = `${value}%`;
  }
function update_disk_usage(disk_usage, value) {
    value = Math.round(value);
    disk_usage.querySelector(".disk_usage_fill").style.width = `${value}%`;
  }
/* Example */
update_cpu_usage(cpu_usage, 55);
update_ram_usage(ram_usage, 45);
update_gpu_usage(gpu_usage, 24);
update_disk_usage(disk_usage, 75)