/*
  Rutas de pistas - aplicación estática.

  Seguridad: esta web no tiene backend. Las respuestas, rutas y ubicaciones
  pueden inspeccionarse en el código fuente. Es válida para una dinámica
  educativa, no para una evaluación segura.
*/

const STORAGE_KEY = "school-treasure-routes-v4";
const routes = window.TREASURE_ROUTES || {};
const validGroups = Object.keys(routes);

const elements = {
  loginScreen: document.querySelector("#login-screen"),
  routeScreen: document.querySelector("#route-screen"),
  challengeScreen: document.querySelector("#challenge-screen"),
  teacherScreen: document.querySelector("#teacher-screen"),
  groupForm: document.querySelector("#group-form"),
  groupCode: document.querySelector("#group-code"),
  loginMessage: document.querySelector("#login-message"),
  routeTitle: document.querySelector("#route-title"),
  changeGroup: document.querySelector("#change-group"),
  progressText: document.querySelector("#progress-text"),
  progressPercent: document.querySelector("#progress-percent"),
  progressFill: document.querySelector("#progress-fill"),
  pendingCount: document.querySelector("#pending-count"),
  solvedCount: document.querySelector("#solved-count"),
  locationCount: document.querySelector("#location-count"),
  challengeList: document.querySelector("#challenge-list"),
  finalScreen: document.querySelector("#final-screen"),
  finalGroup: document.querySelector("#final-group"),
  finalSolved: document.querySelector("#final-solved"),
  finalVerified: document.querySelector("#final-verified"),
  finalLocations: document.querySelector("#final-locations"),
  finalHints: document.querySelector("#final-hints"),
  finalTime: document.querySelector("#final-time"),
  finalCode: document.querySelector("#final-code"),
  copyFinalSummary: document.querySelector("#copy-final-summary"),
  exportJson: document.querySelector("#export-json"),
  backToRoute: document.querySelector("#back-to-route"),
  challengeType: document.querySelector("#challenge-type"),
  challengeTitle: document.querySelector("#challenge-title"),
  challengeStatement: document.querySelector("#challenge-statement"),
  unlockedLocationBox: document.querySelector("#unlocked-location-box"),
  codeVerificationBox: document.querySelector("#code-verification-box"),
  codeForm: document.querySelector("#code-form"),
  codeInput: document.querySelector("#code-input"),
  codeMessage: document.querySelector("#code-message"),
  hintList: document.querySelector("#hint-list"),
  answerForm: document.querySelector("#answer-form"),
  answerInput: document.querySelector("#answer-input"),
  showHint: document.querySelector("#show-hint"),
  challengeMessage: document.querySelector("#challenge-message"),
  hintCount: document.querySelector("#hint-count"),
  teacherExit: document.querySelector("#teacher-exit"),
  copyTeacherKey: document.querySelector("#copy-teacher-key"),
  clearStorage: document.querySelector("#clear-storage"),
  generateCode: document.querySelector("#generate-code"),
  generatedCode: document.querySelector("#generated-code"),
  normalizeInput: document.querySelector("#normalize-input"),
  normalizeButton: document.querySelector("#normalize-button"),
  normalizeOutput: document.querySelector("#normalize-output"),
  teacherContent: document.querySelector("#teacher-content")
};

let progress = loadProgress();
let activeChallengeId = progress.activeChallengeId || "";

document.addEventListener("DOMContentLoaded", init);

function init() {
  elements.groupForm.addEventListener("submit", enterGroup);
  elements.changeGroup.addEventListener("click", leaveGroup);
  elements.backToRoute.addEventListener("click", showRouteScreen);
  elements.answerForm.addEventListener("submit", checkAnswer);
  elements.codeForm.addEventListener("submit", verifyLocationCode);
  elements.showHint.addEventListener("click", revealHint);
  elements.copyFinalSummary.addEventListener("click", copyFinalSummary);
  elements.exportJson.addEventListener("click", exportJson);
  elements.teacherExit.addEventListener("click", leaveTeacherMode);
  elements.copyTeacherKey.addEventListener("click", copyTeacherKey);
  elements.clearStorage.addEventListener("click", clearStorage);
  elements.generateCode.addEventListener("click", generateExampleLocation);
  elements.normalizeButton.addEventListener("click", showNormalizedText);

  if (progress.groupCode && routes[progress.groupCode]) {
    showRouteScreen();
  } else {
    showLoginScreen();
  }
}

function enterGroup(event) {
  event.preventDefault();
  const groupCode = normalizeGroupCode(elements.groupCode.value);

  if (groupCode === "PROFESOR") {
    elements.groupCode.value = "";
    showTeacherScreen();
    return;
  }

  if (!routes[groupCode]) {
    setLoginMessage("Código de grupo no reconocido. Usad G01, G02, G03, G04 o G05.", "error");
    return;
  }

  progress = createProgress(groupCode);
  activeChallengeId = "";
  saveProgress();
  elements.groupCode.value = "";
  setLoginMessage("", "");
  showRouteScreen();
}

function leaveGroup() {
  const confirmed = window.confirm("¿Quieres salir de este grupo? El progreso seguirá guardado en este navegador.");
  if (!confirmed) {
    return;
  }
  progress.groupCode = "";
  progress.activeChallengeId = "";
  activeChallengeId = "";
  saveProgress();
  showLoginScreen();
}

function showLoginScreen() {
  setVisible("login");
  elements.groupCode.focus();
}

function showRouteScreen() {
  if (!progress.groupCode || !routes[progress.groupCode]) {
    showLoginScreen();
    return;
  }
  setVisible("route");
  renderRoute();
}

function showChallengeScreen(challengeId) {
  activeChallengeId = challengeId;
  progress.activeChallengeId = challengeId;
  saveProgress();
  setVisible("challenge");
  renderChallenge();
  elements.answerInput.focus();
}

function showTeacherScreen() {
  setVisible("teacher");
  renderTeacherMode();
}

function leaveTeacherMode() {
  showLoginScreen();
}

function setVisible(screen) {
  elements.loginScreen.classList.toggle("hidden", screen !== "login");
  elements.routeScreen.classList.toggle("hidden", screen !== "route");
  elements.challengeScreen.classList.toggle("hidden", screen !== "challenge");
  elements.teacherScreen.classList.toggle("hidden", screen !== "teacher");
}

function renderRoute() {
  const group = routes[progress.groupCode];
  const challenges = group.challenges;
  const solvedCount = progress.solvedIds.length;
  const pendingCount = challenges.length - solvedCount;
  const verifiedCount = countVerifiedCodes();
  const percent = Math.round((solvedCount / challenges.length) * 100);

  elements.routeTitle.textContent = `${progress.groupCode} · ${group.routeName}`;
  elements.progressText.textContent = `${solvedCount} de ${challenges.length} pruebas resueltas`;
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressFill.style.width = `${percent}%`;
  elements.pendingCount.textContent = String(pendingCount);
  elements.solvedCount.textContent = String(solvedCount);
  elements.locationCount.textContent = String(verifiedCount);
  elements.challengeList.innerHTML = "";

  challenges.forEach((challenge, index) => {
    const solved = progress.solvedIds.includes(challenge.challengeId);
    const verified = isCodeVerified(challenge);
    const item = document.createElement("li");
    item.className = "challenge-item";

    const titleBox = document.createElement("div");
    titleBox.className = "challenge-title-row";

    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${challenge.title}`;

    const detail = document.createElement("span");
    detail.className = "meta";
    detail.textContent = solved
      ? `Ubicación desbloqueada: ${progress.unlockedLocations[challenge.challengeId]} · ${verified ? "código verificado" : "código pendiente"}`
      : "Pregunta básica de HTML/CSS";

    const status = document.createElement("span");
    status.className = `status ${verified ? "verified" : solved ? "solved" : "pending"}`;
    status.textContent = verified ? "verificada" : solved ? "resuelta" : "pendiente";

    titleBox.append(title, detail, status);

    const button = document.createElement("button");
    button.className = solved ? "button" : "button primary";
    button.type = "button";
    button.textContent = solved ? "Ver ubicación" : "Abrir prueba";
    button.addEventListener("click", () => showChallengeScreen(challenge.challengeId));

    item.append(titleBox, button);
    elements.challengeList.appendChild(item);
  });

  renderFinal();
}

function renderChallenge() {
  const challenge = getActiveChallenge();
  if (!challenge) {
    showRouteScreen();
    return;
  }

  const solved = progress.solvedIds.includes(challenge.challengeId);
  elements.challengeType.textContent = "Pregunta básica de HTML/CSS";
  elements.challengeTitle.textContent = challenge.title;
  elements.challengeStatement.textContent = challenge.statement;
  elements.answerInput.value = "";
  elements.answerInput.disabled = solved;
  elements.answerForm.querySelector("button[type='submit']").disabled = solved;
  elements.challengeMessage.textContent = "";
  elements.challengeMessage.className = "message";

  renderUnlockedLocation(challenge);
  renderCodeVerification(challenge);
  renderHints(challenge);
}

function renderUnlockedLocation(challenge) {
  const location = progress.unlockedLocations[challenge.challengeId];
  if (!location) {
    elements.unlockedLocationBox.classList.add("hidden");
    elements.unlockedLocationBox.textContent = "";
    return;
  }

  elements.unlockedLocationBox.classList.remove("hidden");
  elements.unlockedLocationBox.textContent = `Correcto. Id a: ${location}.`;
}

function renderCodeVerification(challenge) {
  const solved = progress.solvedIds.includes(challenge.challengeId);
  if (!solved) {
    elements.codeVerificationBox.classList.add("hidden");
    elements.codeInput.value = "";
    elements.codeMessage.textContent = "";
    elements.codeMessage.className = "message";
    return;
  }

  const verified = isCodeVerified(challenge);
  elements.codeVerificationBox.classList.remove("hidden");
  elements.codeInput.value = "";
  elements.codeInput.disabled = verified;
  elements.codeForm.querySelector("button[type='submit']").disabled = verified;
  elements.codeMessage.textContent = verified
    ? `Código verificado: ${progress.verifiedCodes[challenge.challengeId]}`
    : "Introducid aquí el código que encontréis en la ubicación.";
  elements.codeMessage.className = `message ${verified ? "ok" : ""}`.trim();
}

function renderHints(challenge) {
  const used = progress.hintsUsed[challenge.challengeId] || [];
  elements.hintList.innerHTML = "";

  used.forEach((hintIndex) => {
    const hint = document.createElement("div");
    hint.className = "hint-card";
    hint.textContent = `Pista ${hintIndex + 1}: ${challenge.hints[hintIndex]}`;
    elements.hintList.appendChild(hint);
  });

  elements.showHint.disabled = used.length >= challenge.hints.length || progress.solvedIds.includes(challenge.challengeId);
  elements.showHint.textContent = used.length >= challenge.hints.length ? "No quedan pistas" : "Ver pista";
  elements.hintCount.textContent = `Pistas usadas en esta prueba: ${used.length}`;
}

function checkAnswer(event) {
  event.preventDefault();
  const challenge = getActiveChallenge();
  if (!challenge) {
    return;
  }

  const userAnswer = normalizeAnswer(elements.answerInput.value);
  if (!userAnswer) {
    setChallengeMessage("Escribid una respuesta antes de comprobar.", "error");
    return;
  }

  const correct = challenge.acceptedAnswers.some((answer) => normalizeAnswer(answer) === userAnswer);
  if (!correct) {
    setChallengeMessage("Respuesta no correcta todavía. Revisad la pregunta o usad una pista.", "error");
    return;
  }

  if (!progress.solvedIds.includes(challenge.challengeId)) {
    progress.solvedIds.push(challenge.challengeId);
  }
  progress.unlockedLocations[challenge.challengeId] = challenge.unlockedLocation;
  completeIfFinished();
  saveProgress();
  elements.answerInput.disabled = true;
  elements.answerForm.querySelector("button[type='submit']").disabled = true;
  setChallengeMessage(challenge.successMessage, "ok");
  renderUnlockedLocation(challenge);
  renderCodeVerification(challenge);
  renderHints(challenge);
  elements.codeInput.focus();
}

function verifyLocationCode(event) {
  event.preventDefault();
  const challenge = getActiveChallenge();
  if (!challenge || !progress.solvedIds.includes(challenge.challengeId)) {
    return;
  }

  const userCode = normalizeLocationCode(elements.codeInput.value);
  if (!userCode) {
    setCodeMessage("Escribid el código encontrado antes de verificar.", "error");
    return;
  }

  const expectedCode = normalizeLocationCode(challenge.locationCode);
  if (userCode !== expectedCode) {
    setCodeMessage("Ese código no corresponde a esta ubicación. Revisadlo y probad de nuevo.", "error");
    return;
  }

  progress.verifiedCodes[challenge.challengeId] = challenge.locationCode;
  completeIfFinished();
  saveProgress();
  setCodeMessage(`Código verificado: ${challenge.locationCode}`, "ok");
  renderCodeVerification(challenge);
}

function revealHint() {
  const challenge = getActiveChallenge();
  if (!challenge) {
    return;
  }

  const used = progress.hintsUsed[challenge.challengeId] || [];
  if (used.length >= challenge.hints.length) {
    return;
  }

  progress.hintsUsed[challenge.challengeId] = [...used, used.length];
  saveProgress();
  renderHints(challenge);
}

function renderFinal() {
  const group = routes[progress.groupCode];
  if (!group || progress.solvedIds.length !== group.challenges.length || countVerifiedCodes() !== group.challenges.length) {
    elements.finalScreen.classList.add("hidden");
    return;
  }

  elements.finalScreen.classList.remove("hidden");
  elements.finalGroup.textContent = progress.groupCode;
  elements.finalSolved.textContent = `${progress.solvedIds.length}/${group.challenges.length}`;
  elements.finalVerified.textContent = `${countVerifiedCodes()}/${group.challenges.length}`;
  elements.finalLocations.textContent = Object.values(progress.unlockedLocations).join(", ");
  elements.finalHints.textContent = String(countUsedHints());
  elements.finalTime.textContent = formatDuration(progress.startedAt, progress.finishedAt);
  elements.finalCode.textContent = buildFinalCode();
}

function completeIfFinished() {
  const group = routes[progress.groupCode];
  if (
    group &&
    progress.solvedIds.length === group.challenges.length &&
    countVerifiedCodes() === group.challenges.length &&
    !progress.finishedAt
  ) {
    progress.finishedAt = new Date().toISOString();
  }
}

function copyFinalSummary() {
  copyText(buildFinalSummary(), "Resumen copiado.");
}

function exportJson() {
  const data = JSON.stringify(buildExportData(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `resultado-${progress.groupCode || "grupo"}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function buildFinalSummary() {
  return [
    "Resumen final de rutas de pistas",
    `Grupo: ${progress.groupCode}`,
    `Pruebas resueltas: ${progress.solvedIds.length}/${routes[progress.groupCode].challenges.length}`,
    `Códigos verificados: ${countVerifiedCodes()}/${routes[progress.groupCode].challenges.length}`,
    `Ubicaciones desbloqueadas: ${Object.values(progress.unlockedLocations).join(", ")}`,
    `Pistas usadas: ${countUsedHints()}`,
    `Tiempo total: ${formatDuration(progress.startedAt, progress.finishedAt)}`,
    `Código final de entrega: ${buildFinalCode()}`
  ].join("\n");
}

function buildExportData() {
  return {
    exportedAt: new Date().toISOString(),
    groupCode: progress.groupCode,
    unlockedIds: progress.unlockedIds,
    solvedIds: progress.solvedIds,
    verifiedCodes: progress.verifiedCodes,
    hintsUsed: progress.hintsUsed,
    unlockedLocations: progress.unlockedLocations,
    startedAt: progress.startedAt,
    finishedAt: progress.finishedAt,
    finalCode: progress.finishedAt ? buildFinalCode() : null
  };
}

function buildFinalCode() {
  return `FINAL-${progress.groupCode}-${progress.solvedIds.length}-${countUsedHints()}`;
}

function renderTeacherMode() {
  elements.teacherContent.innerHTML = "";

  validGroups.forEach((groupCode) => {
    const group = routes[groupCode];
    const wrapper = document.createElement("article");
    wrapper.className = "teacher-group";

    const title = document.createElement("h3");
    title.textContent = `${groupCode} · ${group.routeName}`;

    const tableWrap = document.createElement("div");
    tableWrap.className = "teacher-table-wrap";
    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>Grupo</th>
          <th>Prueba</th>
          <th>Pregunta</th>
          <th>Respuestas aceptadas</th>
          <th>Ubicación desbloqueada</th>
          <th>Código de ubicación</th>
          <th>Notas del profesor</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");
    group.challenges.forEach((challenge) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${escapeHtml(challenge.group)}</td>
        <td>${escapeHtml(challenge.challengeId)} · ${escapeHtml(challenge.title)}</td>
        <td>${escapeHtml(challenge.statement)}</td>
        <td>${escapeHtml(challenge.acceptedAnswers.join(" / "))}</td>
        <td>${escapeHtml(challenge.unlockedLocation)}</td>
        <td>${escapeHtml(challenge.locationCode)}</td>
        <td>${escapeHtml(challenge.teacherNotes)}</td>
      `;
      tbody.appendChild(row);
    });

    tableWrap.appendChild(table);
    wrapper.append(title, tableWrap);
    elements.teacherContent.appendChild(wrapper);
  });
}

function copyTeacherKey() {
  const lines = [];
  validGroups.forEach((groupCode) => {
    const group = routes[groupCode];
    lines.push(`${groupCode} - ${group.routeName}`);
    group.challenges.forEach((challenge) => {
      lines.push(`${challenge.challengeId} | ${challenge.title} | Pregunta: ${challenge.statement} | Respuestas: ${challenge.acceptedAnswers.join(" / ")} | Ubicación: ${challenge.unlockedLocation} | Código: ${challenge.locationCode} | Notas: ${challenge.teacherNotes}`);
    });
    lines.push("");
  });
  copyText(lines.join("\n"), "Clave completa copiada.");
}

function clearStorage() {
  const confirmed = window.confirm("¿Seguro que quieres borrar todo el progreso guardado en este navegador?");
  if (!confirmed) {
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  progress = createEmptyProgress();
  activeChallengeId = "";
  alert("localStorage borrado.");
}

function generateExampleLocation() {
  const challenges = validGroups.flatMap((groupCode) => routes[groupCode].challenges);
  const challenge = challenges[randomInt(0, challenges.length - 1)];
  elements.generatedCode.textContent = `${challenge.locationCode} · ${challenge.unlockedLocation}`;
}

function showNormalizedText() {
  const original = elements.normalizeInput.value;
  elements.normalizeOutput.textContent = `Original: ${original}\nNormalizado: ${normalizeAnswer(original)}`;
}

function getActiveChallenge() {
  const group = routes[progress.groupCode];
  if (!group) {
    return null;
  }
  return group.challenges.find((challenge) => challenge.challengeId === activeChallengeId);
}

function countUsedHints() {
  return Object.values(progress.hintsUsed).reduce((total, hints) => total + hints.length, 0);
}

function countVerifiedCodes() {
  const group = routes[progress.groupCode];
  if (!group) {
    return 0;
  }
  return group.challenges.filter((challenge) => isCodeVerified(challenge)).length;
}

function isCodeVerified(challenge) {
  return progress.verifiedCodes && progress.verifiedCodes[challenge.challengeId] === challenge.locationCode;
}

function setLoginMessage(text, type) {
  elements.loginMessage.textContent = text;
  elements.loginMessage.className = `message ${type || ""}`.trim();
}

function setChallengeMessage(text, type) {
  elements.challengeMessage.textContent = text;
  elements.challengeMessage.className = `message ${type || ""}`.trim();
}

function setCodeMessage(text, type) {
  elements.codeMessage.textContent = text;
  elements.codeMessage.className = `message ${type || ""}`.trim();
}

function loadProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored || typeof stored !== "object") {
      return createEmptyProgress();
    }
    return {
      groupCode: stored.groupCode || "",
      unlockedIds: Array.isArray(stored.unlockedIds) ? stored.unlockedIds : [],
      solvedIds: Array.isArray(stored.solvedIds) ? stored.solvedIds : [],
      verifiedCodes: stored.verifiedCodes && typeof stored.verifiedCodes === "object" ? stored.verifiedCodes : {},
      hintsUsed: stored.hintsUsed && typeof stored.hintsUsed === "object" ? stored.hintsUsed : {},
      unlockedLocations: stored.unlockedLocations && typeof stored.unlockedLocations === "object" ? stored.unlockedLocations : {},
      startedAt: stored.startedAt || new Date().toISOString(),
      finishedAt: stored.finishedAt || null,
      activeChallengeId: stored.activeChallengeId || ""
    };
  } catch (error) {
    return createEmptyProgress();
  }
}

function saveProgress() {
  if (progress.groupCode && routes[progress.groupCode]) {
    progress.unlockedIds = routes[progress.groupCode].challenges.map((challenge) => challenge.challengeId);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function createProgress(groupCode) {
  return {
    groupCode,
    unlockedIds: routes[groupCode].challenges.map((challenge) => challenge.challengeId),
    solvedIds: [],
    verifiedCodes: {},
    hintsUsed: {},
    unlockedLocations: {},
    startedAt: new Date().toISOString(),
    finishedAt: null,
    activeChallengeId: ""
  };
}

function createEmptyProgress() {
  return {
    groupCode: "",
    unlockedIds: [],
    solvedIds: [],
    verifiedCodes: {},
    hintsUsed: {},
    unlockedLocations: {},
    startedAt: new Date().toISOString(),
    finishedAt: null,
    activeChallengeId: ""
  };
}

function normalizeGroupCode(value) {
  return String(value || "").trim().toUpperCase();
}

function normalizeLocationCode(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[–—]/g, "-");
}

function normalizeAnswer(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/^:$/, "dos puntos")
    .replace(/^;$/, "punto y coma")
    .replace(/[.,¿?¡!'"()[\]{}]/g, "")
    .replace(/[<>]/g, "")
    .replace(/\s*:\s*/g, ":")
    .replace(/\s*;\s*/g, "")
    .replace(/\s+/g, " ");
}

function formatDuration(startIso, endIso) {
  if (!startIso || !endIso) {
    return "No finalizada";
  }
  const totalSeconds = Math.max(0, Math.round((new Date(endIso) - new Date(startIso)) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours} h ${minutes} min ${seconds} s`;
  }
  if (minutes > 0) {
    return `${minutes} min ${seconds} s`;
  }
  return `${seconds} s`;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function copyText(text, successMessage) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    alert(successMessage);
  } catch (error) {
    fallbackCopy(text);
    alert(successMessage);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
