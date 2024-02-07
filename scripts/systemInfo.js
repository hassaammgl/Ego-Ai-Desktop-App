const cpu = document.getElementById("cpu"),
  speed = document.getElementById("speed"),
  os = document.getElementById("os"),
  kernel = document.getElementById("kernel"),
  mem = document.getElementById("memory");
console.log(mem);
const getSystemInfo = async () => {
  let b = await electronAPI.systemInfo();
  console.log(b);
  cpu.innerHTML = `CPU:  ${b.cpu.manufacturer}-${b.cpu.brand} ${b.osInfo.arch}<br> cores: ${b.cpu.cores}`;
  speed.innerHTML = `Speed: ${b.cpu.speedMin} - ${b.cpu.speedMax}`;
  os.innerHTML = `OsInfo: ${b.osInfo.platform} / ${b.osInfo.distro} ${b.osInfo.release}`;
  kernel.innerHTML = `Kernel: ${b.osInfo.kernel}`;
  mem.innerHTML = `Memory: total="${b.mem.total}"`;
  // system: b.os,
  // version: `${b.kernelVersion}(${b.platform})`,
  // cpu: `x86 ${b.arch}`,
  // ram: `${(b.totalmem / (1024 * 1024)).toFixed(2)}M`,
  // }
};

getSystemInfo();
