const distros = [
  { name: "Ubuntu", url: "https://ubuntu.com/download/desktop" },
  { name: "Fedora", url: "https://getfedora.org/en/workstation/download/" },
  { name: "Arch Linux", url: "https://archlinux.org/download/" },
  { name: "Debian", url: "https://www.debian.org/distrib/" },
  { name: "Pop!_OS", url: "https://pop.system76.com/" },
  { name: "openSUSE", url: "https://get.opensuse.org/" },
  { name: "Linux Mint", url: "https://linuxmint.com/download.php" },
];

const listContainer = document.getElementById("distro-list");

distros.forEach(distro => {
  const btn = document.createElement("button");
  btn.textContent = `Download ${distro.name}`;
  btn.onclick = () => window.open(distro.url, "_blank");
  listContainer.appendChild(btn);
});
