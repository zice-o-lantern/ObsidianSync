var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);


var main_exports = {};
__export(main_exports, {
  default: () => MyLauncherPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");


var zh = {
  ribbonLabel: "\u542F\u52A8",
  noticeNoPath: "\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u914D\u7F6E\u8DEF\u5F84",
  noticeLaunching: "\u6B63\u5728\u542F\u52A8",
  noticeLaunchFailed: "\u8DEF\u5F84\u6709\u8BEF\uFF0C\u542F\u52A8\u5931\u8D25",
  noticeUnsupportedEnv: "\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u6267\u884C\u547D\u4EE4",
  noticeNoScheme: "\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u914D\u7F6E URL Scheme",
  noticeTryOpen: "\u5C1D\u8BD5\u5524\u8D77",
  noticeOpenError: "\u8DF3\u8F6C\u6307\u4EE4\u6267\u884C\u5F02\u5E38",
  settingDesktopHeading: "\u7535\u8111\u7AEF\u8BBE\u7F6E",
  settingMobileHeading: "\u79FB\u52A8\u7AEF\u8BBE\u7F6E",
  settingDesktopNameTitle: "\u5E94\u7528\u540D\u79F0",
  settingDesktopNameDesc: "\u9F20\u6807\u60AC\u505C\u5728\u529F\u80FD\u533A\u56FE\u6807\u4E0A\u65F6\u663E\u793A\u7684\u6587\u5B57\u3002\u4FEE\u6539\u540E\u82E5\u672A\u66F4\u65B0\uFF0C\u8BF7\u91CD\u542F Obsidian",
  settingDesktopNamePlaceholder: "\u4F8B\u5982\uFF1A\u540C\u6B65\u5DE5\u5177",
  settingDesktopPathTitle: "\u5E94\u7528\u7A0B\u5E8F\u8DEF\u5F84",
  settingDesktopPathDesc: "Windows \u8DEF\u5F84\u793A\u4F8B: C:\\Windows\\notepad.exe",
  settingDesktopPathPlaceholder: "\u8BF7\u8F93\u5165\u5B8C\u6574\u8DEF\u5F84",
  settingMobileNameTitle: "\u5E94\u7528\u540D\u79F0",
  settingMobileNameDesc: "\u5728\u529F\u80FD\u533A\u663E\u793A\u7684\u6587\u5B57\u3002\u4FEE\u6539\u540E\u82E5\u672A\u66F4\u65B0\uFF0C\u8BF7\u91CD\u542F Obsidian",
  settingMobileNamePlaceholder: "\u4F8B\u5982\uFF1ANotion\u3001\u5FEB\u6377\u6307\u4EE4",
  settingMobileSchemeTitle: "URL Scheme",
  settingMobileSchemeDesc: "\u793A\u4F8B: notion:// \u6216 shortcuts://run-shortcut?name=\u4F60\u7684\u6307\u4EE4\u540D",
  settingMobileSchemePlaceholder: "\u8F93\u5165 URL Scheme",
  fallbackDesktopName: "\u5E94\u7528\u7A0B\u5E8F",
  fallbackMobileName: "APP"
};
var en = {
  ribbonLabel: "Launch",
  noticeNoPath: "Please configure the application path in settings first",
  noticeLaunching: "Launching",
  noticeLaunchFailed: "Invalid path, launch failed",
  noticeUnsupportedEnv: "Command execution is not supported in this environment",
  noticeNoScheme: "Please configure the URL Scheme in settings first",
  noticeTryOpen: "Attempting to open",
  noticeOpenError: "An error occurred while executing the URL Scheme",
  settingDesktopHeading: "Desktop Settings",
  settingMobileHeading: "Mobile Settings",
  settingDesktopNameTitle: "App Name",
  settingDesktopNameDesc: "Label shown when hovering over the ribbon icon. Restart Obsidian if the tooltip does not update after saving.",
  settingDesktopNamePlaceholder: "e.g. Sync Tool",
  settingDesktopPathTitle: "Application Path",
  settingDesktopPathDesc: "Windows example: C:\\Windows\\notepad.exe",
  settingDesktopPathPlaceholder: "Enter the full path",
  settingMobileNameTitle: "App Name",
  settingMobileNameDesc: "Label shown in the ribbon. Restart Obsidian if the tooltip does not update after saving.",
  settingMobileNamePlaceholder: "e.g. Notion, Shortcuts",
  settingMobileSchemeTitle: "URL Scheme",
  settingMobileSchemeDesc: "Example: notion:// or shortcuts://run-shortcut?name=YourShortcut",
  settingMobileSchemePlaceholder: "Enter URL Scheme",
  fallbackDesktopName: "Application",
  fallbackMobileName: "App"
};
var locales = { zh, en };
function detectLocale() {
  try {
    const momentLocale = window.moment?.locale?.() ?? "";
    if (momentLocale.length > 0) {
      return momentLocale.startsWith("zh") ? "zh" : "en";
    }
  } catch {
  }
  return (navigator.language ?? "").startsWith("zh") ? "zh" : "en";
}
function getLocale() {
  return locales[detectLocale()] ?? en;
}


var DEFAULT_SETTINGS = {
  desktopName: "",
  desktopPath: "",
  mobileName: "",
  mobileUrlScheme: ""
};
var MyLauncherPlugin = class extends import_obsidian.Plugin {
  settings;
  ribbonIconEl;
  
  async onload() {
    await this.loadSettings();
    const t = getLocale();
    const displayName = this.getCurrentDisplayName();
    this.ribbonIconEl = this.addRibbonIcon(
      "rocket",
      `${t.ribbonLabel} ${displayName}`,
      (_evt) => {
        this.launchApp();
      }
    );
    this.addSettingTab(new LauncherSettingTab(this.app, this));
  }
  
  getCurrentDisplayName() {
    const t = getLocale();
    if (import_obsidian.Platform.isDesktopApp) {
      return this.settings.desktopName.trim() || t.fallbackDesktopName;
    }
    return this.settings.mobileName.trim() || t.fallbackMobileName;
  }
  
  updateRibbonTooltip() {
    if (this.ribbonIconEl) {
      const t = getLocale();
      const currentName = this.getCurrentDisplayName();
      this.ribbonIconEl.setAttribute("aria-label", `${t.ribbonLabel} ${currentName}`);
    }
  }
  
  async launchApp() {
    const t = getLocale();
    const { desktopPath, mobileUrlScheme } = this.settings;
    const displayName = this.getCurrentDisplayName();
    if (import_obsidian.Platform.isDesktopApp) {
      if (!desktopPath.trim()) {
        new import_obsidian.Notice(t.noticeNoPath);
        return;
      }
      try {
        const { exec } = require("child_process");
        let cmd;
        if (process.platform === "win32") {
          cmd = `start "" "${desktopPath}"`;
        } else if (process.platform === "darwin") {
          cmd = `open "${desktopPath}"`;
        } else {
          cmd = `xdg-open "${desktopPath}"`;
        }
        exec(cmd, (err) => {
          if (err) {
            new import_obsidian.Notice(t.noticeLaunchFailed);
          } else {
            new import_obsidian.Notice(`${t.noticeLaunching} ${displayName} ...`);
          }
        });
      } catch {
        new import_obsidian.Notice(t.noticeUnsupportedEnv);
      }
    } else if (import_obsidian.Platform.isMobile) {
      const scheme = mobileUrlScheme.trim();
      if (!scheme) {
        new import_obsidian.Notice(t.noticeNoScheme);
        return;
      }
      new import_obsidian.Notice(`${t.noticeTryOpen} ${displayName} ...`);
      try {
        window.open(scheme, "_blank");
      } catch {
        new import_obsidian.Notice(t.noticeOpenError);
      }
    }
  }
  
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  
  async saveSettings() {
    await this.saveData(this.settings);
  }
  
  onunload() {
    if (this.ribbonIconEl) {
      this.ribbonIconEl.remove();
    }
  }
};
var LauncherSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  
  display() {
    const { containerEl } = this;
    const t = getLocale();
    containerEl.empty();
    containerEl.createEl("h2", { text: t.settingDesktopHeading });
    new import_obsidian.Setting(containerEl).setName(t.settingDesktopNameTitle).setDesc(t.settingDesktopNameDesc).addText((text) => text.setPlaceholder(t.settingDesktopNamePlaceholder).setValue(this.plugin.settings.desktopName).onChange(async (value) => {
      this.plugin.settings.desktopName = value;
      await this.plugin.saveSettings();
      this.plugin.updateRibbonTooltip();
    }));
    new import_obsidian.Setting(containerEl).setName(t.settingDesktopPathTitle).setDesc(t.settingDesktopPathDesc).addText((text) => text.setPlaceholder(t.settingDesktopPathPlaceholder).setValue(this.plugin.settings.desktopPath).onChange(async (value) => {
      this.plugin.settings.desktopPath = value;
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("br");
    containerEl.createEl("h2", { text: t.settingMobileHeading });
    new import_obsidian.Setting(containerEl).setName(t.settingMobileNameTitle).setDesc(t.settingMobileNameDesc).addText((text) => text.setPlaceholder(t.settingMobileNamePlaceholder).setValue(this.plugin.settings.mobileName).onChange(async (value) => {
      this.plugin.settings.mobileName = value;
      await this.plugin.saveSettings();
      this.plugin.updateRibbonTooltip();
    }));
    new import_obsidian.Setting(containerEl).setName(t.settingMobileSchemeTitle).setDesc(t.settingMobileSchemeDesc).addText((text) => text.setPlaceholder(t.settingMobileSchemePlaceholder).setValue(this.plugin.settings.mobileUrlScheme).onChange(async (value) => {
      this.plugin.settings.mobileUrlScheme = value;
      await this.plugin.saveSettings();
    }));
  }
};

/* nosourcemap */