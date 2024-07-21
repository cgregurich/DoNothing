function startTimer() {
    updateTimer();
    let intervalID = setInterval(decrementTimer, 1000);
    return intervalID;
}

function decrementTimer() {
    timeRemaining--;
    if (timeRemaining <= 0) stopTimer();
    updateTimer();
}

function stopTimer() {
    clearInterval(intervalID);
}

function zeroPad(number, length) {
    return String(number).padStart(length, '0');
}

function updateTimer() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = zeroPad(timeRemaining % 60, 2);
    timer.textContent = `${minutes}:${seconds}`;
}

function resetTimer() {
    flashTryAgain();
    clearInterval(intervalID);
    timeRemaining = GOAL_TIME;
    intervalID = startTimer();
}

function flashTryAgain() {

}

function selectRandomVideo() {
    let randomVideoLink = VIDEO_LINKS[Math.floor(Math.random() * VIDEO_LINKS.length)];
    let videoElement = document.querySelector("video");
    videoElement.src = randomVideoLink;
    console.log(videoElement.src);
}

const VIDEO_LINKS = [
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_CH_C007_C011_PSNK_v02_SDR_PS_FINAL_20180709_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_CH_C002_C005_PSNK_v05_SDR_PS_FINAL_20180709_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_CH_C007_C004_PSNK_v02_SDR_PS_FINAL_20180709_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_C004_C003_PS_v01_SDR_PS_20180925_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_C003_C003_PS_v01_SDR_PS_20180925_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_C001_C005_PS_v01_SDR_PS_20180925_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_DB_D008_C010_PSNK_v21_SDR_PS_20180914_F0F16157_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_DB_D001_C001_PSNK_v06_SDR_PS_20180824_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_DB_D011_C010_PSNK_DENOISE_v19_SDR_PS_20180914_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_DB_D002_C003_PSNK_v04_SDR_PS_20180914_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_DB_D002_C003_PSNK_v04_SDR_PS_20180914_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_DB_D002_C003_PSNK_v04_SDR_PS_20180914_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/G007_C004_UHD_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/G008_C015_UHD_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/G009_C003_UHD_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/G009_C014_UHD_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/G010_C026_UHD_SDR_v02_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GL_G004_C010_PSNK_v04_SDR_PS_FINAL_20180709_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GL_G002_C002_PSNK_v03_SDR_PS_20180925_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GL_G010_C006_PSNK_NOSUN_v12_SDR_PS_FINAL_20180709_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_H007_C003_PS_v01_SDR_PS_20180925_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_H004_C009_PS_v01_SDR_PS_20180925_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_H012_C009_PS_v01_SDR_PS_20180925_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_H005_C012_PS_v01_SDR_PS_20180925_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_H004_C007_PS_v02_SDR_PS_20180925_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_HK_B005_C011_PSNK_v16_SDR_PS_20180914_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_HK_H004_C010_PSNK_v08_SDR_PS_20181009_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/HK_H004_C013_4K_SDR_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_HK_H004_C008_PSNK_v19_SDR_PS_20180914_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/I003_C004_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/I003_C008_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/I003_C011_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/I003_C015_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/I004_C014_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/I005_C008_CROP_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GMT312_162NC_139M_1041_AFRICA_NIGHT_v14_SDR_FINAL_20180706_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_A103_C002_0205DG_v12_SDR_FINAL_20180706_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GMT110_112NC_364D_1054_AURORA_ANTARTICA__COMP_FINAL_v34_PS_SDR_20181107_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_A001_C001_120530_v04_SDR_FINAL_20180706_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GMT060_117NC_363D_1034_AUSTRALIA_v35_SDR_PS_FINAL_20180731_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GMT306_139NC_139J_3066_CALI_TO_VEGAS_v08_SDR_PS_20180824_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_A108_C001_v09_SDR_FINAL_22062018_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_A105_C002_v06_SDR_FINAL_25062018_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GMT308_139K_142NC_CARIBBEAN_DAY_v09_SDR_FINAL_22062018_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GMT329_113NC_396B_1105_CHINA_v04_SDR_FINAL_20180706_F900F2700_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_A083_C002_1130KZ_v04_SDR_PS_FINAL_20180725_SDR_4K_HEVC.mov",
    "https://sylvan.apple.com/Aerials/2x/Videos/comp_GMT329_117NC_401C_1037_IRELAND_TO_ASIA_v48_SDR_PS_FINAL_20180725_F0F6300_SDR_4K_HEVC.mov",
];

const GOAL_TIME = 120;
let timeRemaining = GOAL_TIME;
const timer = document.querySelector(".timer");
let intervalID = startTimer();

document.addEventListener('mousemove', resetTimer)
document.addEventListener('keydown', resetTimer)

selectRandomVideo();
