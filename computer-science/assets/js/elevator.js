(function() {
  const floors = [
    { num: 7, path: '07-humans-apps.html', emoji: '👤', title: 'Floor 7: Humans & Apps', desc: 'Interfaces, smartphones, responsive design, AI-Native UIs.' },
    { num: 6, path: '06-ai.html', emoji: '🧠', title: 'Floor 6: Artificial Intelligence', desc: 'Neural networks, training, backpropagation, Transformers.' },
    { num: 5, path: '05-data-software.html', emoji: '🧱', title: 'Floor 5: Software & Data', desc: 'Data structures, algorithms, databases, compilers.' },
    { num: 4, path: '04-networking.html', emoji: '🌐', title: 'Floor 4: Networking & Web', desc: 'Packet switching, TCP/IP, DNS, cloud orchestration.' },
    { num: 3, path: '03-architecture-os.html', emoji: '⚙️', title: 'Floor 3: Architecture & OS', desc: 'Stored-program concept, Unix/Linux, virtual memory, CUDA.' },
    { num: 2, path: '02-hardware.html', emoji: '💻', title: 'Floor 2: Physical Hardware', desc: 'Vacuum tubes, transistors, CMOS, microprocessor chips, GPUs.' },
    { num: 1, path: '01-theory.html', emoji: '📚', title: 'Floor 1: Theory & Math', desc: 'Logic, Turing computability, bits, Shannon entropy, grid math.' }
  ];

  // Determine active floor from the URL
  const currentPath = window.location.pathname;
  let activeFloorNum = 0;
  floors.forEach(f => {
    if (currentPath.includes(f.path)) {
      activeFloorNum = f.num;
    }
  });

  const elevatorContainer = document.createElement('div');
  elevatorContainer.className = 'tower-elevator';
  elevatorContainer.id = 'towerElevator';
  elevatorContainer.setAttribute('role', 'navigation');
  elevatorContainer.setAttribute('aria-label', 'Tower Floor Elevator');

  floors.forEach(f => {
    const btn = document.createElement('a');
    btn.href = f.path;
    btn.className = `elevator-button el-f${f.num}`;
    if (f.num === activeFloorNum) btn.classList.add('active');
    btn.setAttribute('aria-label', f.title);
    btn.innerHTML = `${f.emoji}`;

    const tooltip = document.createElement('div');
    tooltip.className = 'elevator-tooltip';
    tooltip.innerHTML = `
      <h5>${f.emoji} ${f.title}</h5>
      <p>${f.desc}</p>
    `;
    btn.appendChild(tooltip);
    elevatorContainer.appendChild(btn);
  });

  document.body.appendChild(elevatorContainer);
})();
