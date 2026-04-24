// بيانات المنصات المعروضة داخل البطاقات
const platforms = [
  {
    id: "youtube",
    name: "YouTube",
    foundedDate: "14 فبراير 2005",
    founders: "تشاد هيرلي، ستيف تشين، جاود كريم",
    launchYear: "2005",
    description:
      "منصة عالمية لمشاركة الفيديو تتيح للمستخدمين رفع المحتوى ومشاهدته وبثه وبناء قنوات متنوعة.",
    features: ["الفيديو حسب الطلب", "البث المباشر", "إنشاء القنوات", "تحقيق الدخل"],
    officialUrl: "https://www.youtube.com",
    icon: "fa-brands fa-youtube",
    color: "#ff0033",
    textColor: "#ffffff",
  },
  {
    id: "facebook",
    name: "Facebook",
    foundedDate: "4 فبراير 2004",
    founders: "مارك زوكربيرغ مع إدواردو سافيرين وداستن موسكوفيتز وكريس هيوز",
    launchYear: "2004",
    description:
      "شبكة اجتماعية شهيرة تساعد المستخدمين على التواصل ومشاركة المنشورات والصور والفيديوهات وبناء المجتمعات.",
    features: ["الصفحات", "المجموعات", "Marketplace", "الأحداث"],
    officialUrl: "https://www.facebook.com",
    icon: "fa-brands fa-facebook-f",
    color: "#1877f2",
    textColor: "#ffffff",
  },
  {
    id: "instagram",
    name: "Instagram",
    foundedDate: "6 أكتوبر 2010",
    founders: "كيفن سيستروم، مايك كريغر",
    launchYear: "2010",
    description:
      "منصة اجتماعية تركّز على مشاركة الصور ومقاطع الفيديو القصيرة والقصص وصناعة الهوية البصرية للمحتوى.",
    features: ["القصص", "Reels", "الرسائل الخاصة", "الفلاتر"],
    officialUrl: "https://www.instagram.com",
    icon: "fa-brands fa-instagram",
    color: "#e4405f",
    textColor: "#ffffff",
  },
  {
    id: "discord",
    name: "Discord",
    foundedDate: "13 مايو 2015",
    founders: "جيسون سيترون، ستان فيشنفسكي",
    launchYear: "2015",
    description:
      "منصة تواصل مجتمعي تعتمد على الخوادم وتجمع بين المحادثات النصية والصوتية والمرئية خصوصًا للألعاب والمجتمعات الرقمية.",
    features: ["خوادم خاصة", "غرف صوتية", "مشاركة الشاشة", "بوتات"],
    officialUrl: "https://discord.com",
    icon: "fa-brands fa-discord",
    color: "#5865f2",
    textColor: "#ffffff",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    foundedDate: "24 فبراير 2009",
    founders: "يان كوم، بريان أكتون",
    launchYear: "2009",
    description:
      "تطبيق مراسلة فورية يوفّر التواصل الآمن عبر الرسائل والمكالمات الصوتية والمرئية بين الأفراد والمجموعات.",
    features: ["تشفير طرفي", "مكالمات صوتية", "مكالمات فيديو", "القنوات والمجموعات"],
    officialUrl: "https://www.whatsapp.com",
    icon: "fa-brands fa-whatsapp",
    color: "#25d366",
    textColor: "#ffffff",
  },
  {
    id: "telegram",
    name: "Telegram",
    foundedDate: "14 أغسطس 2013",
    founders: "بافل دوروف، نيكولاي دوروف",
    launchYear: "2013",
    description:
      "منصة مراسلة سحابية معروفة بالسرعة والمرونة وتدعم القنوات العامة والروبوتات والمجموعات الكبيرة.",
    features: ["القنوات", "البوتات", "تخزين سحابي", "مجموعات ضخمة"],
    officialUrl: "https://telegram.org",
    icon: "fa-brands fa-telegram",
    color: "#229ed9",
    textColor: "#ffffff",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    foundedDate: "8 يوليو 2011",
    founders: "إيفان شبيغل، بوبي ميرفي، ريجي براون",
    launchYear: "2011",
    description:
      "تطبيق اجتماعي يركّز على الرسائل والصور والفيديوهات المؤقتة مع حضور قوي للقصص والعدسات التفاعلية.",
    features: ["الرسائل المؤقتة", "القصص", "العدسات", "Snap Map"],
    officialUrl: "https://www.snapchat.com",
    icon: "fa-brands fa-snapchat",
    color: "#fffc00",
    textColor: "#101010",
  },
];

const platformGrid = document.getElementById("platformGrid");
const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");
const navToggle = document.getElementById("navToggle");
const navPanel = document.getElementById("navPanel");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdown = dropdownToggle?.closest(".dropdown");
const body = document.body;

// إنشاء بطاقات المنصات بشكل ديناميكي
const renderPlatforms = () => {
  if (!platformGrid) return;

  platformGrid.innerHTML = platforms
    .map(
      (platform) => `
        <article class="platform-card reveal" id="platform-${platform.id}" style="--platform-color: ${platform.color}; --platform-text-color: ${platform.textColor}">
          <div class="platform-header">
            <div class="platform-title">
              <div class="platform-icon">
                <i class="${platform.icon}"></i>
              </div>
              <div>
                <h3>${platform.name}</h3>
                <span class="launch-year">سنة الإطلاق: ${platform.launchYear}</span>
              </div>
            </div>
          </div>

          <p>${platform.description}</p>

          <div class="platform-meta">
            <div class="meta-item">
              <span>تاريخ التأسيس</span>
              <strong>${platform.foundedDate}</strong>
            </div>
            <div class="meta-item">
              <span>المؤسسون</span>
              <strong>${platform.founders}</strong>
            </div>
          </div>

          <ul class="platform-features">
            ${platform.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>

          <a class="platform-link" href="${platform.officialUrl}" target="_blank" rel="noopener noreferrer">
            زيارة الموقع الرسمي
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </article>
      `
    )
    .join("");
};

// حفظ وضع العرض في المتصفح
const setTheme = (isDark) => {
  body.classList.toggle("dark-mode", isDark);
  localStorage.setItem("tahki-amal-theme", isDark ? "dark" : "light");

  const icon = themeToggle.querySelector("i");
  const label = themeToggle.querySelector("span");
  icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  label.textContent = isDark ? "الوضع الفاتح" : "الوضع الداكن";
};

const loadSavedTheme = () => {
  const savedTheme = localStorage.getItem("tahki-amal-theme");
  setTheme(savedTheme === "dark");
};

// إظهار العناصر تدريجيًا أثناء التمرير
const setupRevealAnimation = () => {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
};

// إغلاق القوائم المفتوحة بعد اختيار رابط
const collapseMenus = () => {
  navPanel.classList.remove("active");
  navToggle.setAttribute("aria-expanded", "false");
  dropdown?.classList.remove("open");
  dropdownToggle?.setAttribute("aria-expanded", "false");
};

renderPlatforms();
loadSavedTheme();
setupRevealAnimation();

themeToggle.addEventListener("click", () => {
  setTheme(!body.classList.contains("dark-mode"));
});

navToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("active");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

dropdownToggle?.addEventListener("click", () => {
  const isOpen = dropdown.classList.toggle("open");
  dropdownToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 920) collapseMenus();
  });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 320);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("click", (event) => {
  const clickedInsideDropdown = dropdown?.contains(event.target);
  const clickedInsideNav = navPanel.contains(event.target) || navToggle.contains(event.target);

  if (!clickedInsideDropdown) {
    dropdown?.classList.remove("open");
    dropdownToggle?.setAttribute("aria-expanded", "false");
  }

  if (window.innerWidth < 920 && !clickedInsideNav) {
    navPanel.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
