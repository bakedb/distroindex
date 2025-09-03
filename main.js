const distros = [
  {
    name: "Ubuntu",
    options: {
      "All Flavors": {
        "Ubuntu (GNOME)": "https://ubuntu.com/download/desktop",
        "Kubuntu (KDE)": "https://kubuntu.org/getkubuntu/",
        "Xubuntu (XFCE)": "https://xubuntu.org/download/",
        "Lubuntu (LXQt)": "https://lubuntu.me/downloads/",
        "Ubuntu MATE": "https://ubuntu-mate.org/download/",
        "Ubuntu Budgie": "https://ubuntubudgie.org/downloads/",
        "Ubuntu Studio": "https://ubuntustudio.org/download/",
        "Ubuntu Kylin": "https://www.ubuntukylin.com/downloads/",
        "Ubuntu Unity": "https://ubuntuunity.org/download/",
        "Edubuntu": "https://edubuntu.org/download/"
      }
    }
  },
  {
    name: "Kali Linux",
    options: {
      "Stable Releases": {
        "Installer (64-bit)": "https://www.kali.org/get-kali/#kali-installer",
        "Live (64-bit)": "https://www.kali.org/get-kali/#kali-live",
        "NetInstaller": "https://www.kali.org/get-kali/#kali-netinstaller"
      },
      "Weekly Builds": {
        "Installer Weekly": "https://cdimage.kali.org/kali-weekly/",
        "Live Weekly": "https://cdimage.kali.org/kali-weekly/"
      },
      "ARM Images": {
        "Raspberry Pi": "https://www.kali.org/get-kali/#kali-arm",
        "Pinebook": "https://www.kali.org/get-kali/#kali-arm"
      }
    }
  },
  {
    name: "Tails",
    url: "https://tails.net/install/"
  },
  {
    name: "Garuda Linux",
    options: {
        KDE: {
            "Garuda Mokka": "https://garudalinux.org/installation?edition=mokka",
            "Garuda Dr460nized": "https://garudalinux.org/installation?edition=dr460nized",
            "Garuda Dr460nized Gaming": "https://garudalinux.org/installation?edition=dr460nized-gaming"
        },
        GNOME: {
            "Garuda GNOME": "https://garudalinux.org/installation?edition=gnome"
        },
        Cinnamon: {
            "Garuda Cinnamon": "https://garudalinux.org/installation?edition=cinnamon"
        },
        XFCE: {
            "Garuda Xfce": "https://garudalinux.org/installation?edition=xfce"
        },
        Tiling: {
            "Garuda Sway": "https://garudalinux.org/installation?edition=sway",
            "Garuda i3": "https://garudalinux.org/installation?edition=i3"
        },
        Advanced: {
            "Garuda Hyprland": "https://garudalinux.org/installation?edition=hyprland",
            "Garuda KDE Lite": "https://garudalinux.org/installation?edition=kde-lite",
            "Garuda Nix Subsystem": "https://garudalinux.org/installation?edition=garuda-nix-subsystem",
            "Garuda COSMIC": "https://garudalinux.org/installation?edition=cosmic"
        }

    }
  },
  {
    name: "Fedora",
    options: {
      Workstation: {
        GNOME: "https://getfedora.org/en/workstation/download/",
        KDE: "https://spins.fedoraproject.org/kde/",
        XFCE: "https://spins.fedoraproject.org/xfce/"
      },
      Server: {
        Standard: "https://getfedora.org/en/server/download/",
        Cloud: "https://alt.fedoraproject.org/cloud/"
      }
    }
  },
  {
    name: "Arch Linux",
    url: "https://archlinux.org/download/"
  },
  {
    name: "Debian",
    url: "https://www.debian.org/distrib/"
  }
];

const container = document.getElementById("distro-list");

distros.forEach(distro => {
  if (distro.url) {
    const btn = document.createElement("button");
    btn.className = "distro-button";
    btn.textContent = `Download ${distro.name}`;
    btn.onclick = () => window.open(distro.url, "_blank");
    container.appendChild(btn);
  } else if (distro.options) {
    const wrapper = document.createElement("div");
    wrapper.className = "dropdown";

    const toggle = document.createElement("button");
    toggle.className = "dropdown-toggle";
    toggle.textContent = `Download ${distro.name}`;
    toggle.onclick = () => wrapper.classList.toggle("open");

    const content = document.createElement("div");
    content.className = "dropdown-content";

    Object.entries(distro.options).forEach(([variant, suboptions]) => {
      const variantLabel = document.createElement("div");
      variantLabel.style.fontWeight = "bold";
      variantLabel.style.marginTop = "0.5rem";
      variantLabel.textContent = variant;
      content.appendChild(variantLabel);

      Object.entries(suboptions).forEach(([de, link]) => {
        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        a.textContent = `${de}`;
        content.appendChild(a);
      });
    });

    wrapper.appendChild(toggle);
    wrapper.appendChild(content);
    container.appendChild(wrapper);
  }
});
