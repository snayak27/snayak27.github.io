(function() {
  const dictionary = {
    'vacuum tubes': 'A fragile glass bulb switch that ran very hot and burned out often. Used as the original computer switches in ENIAC (1945).',
    'vacuum tube': 'A fragile glass bulb switch that ran very hot and burned out often. Used as the original computer switches in ENIAC (1945).',
    'transistor': 'A tiny solid-state electronic switch invented in 1947. Like a water gate, applying current opens a channel for electricity to flow through.',
    'transistors': 'Tiny solid-state electronic switches invented in 1947. They replaced hot, fragile vacuum tubes and enabled the computer to shrink.',
    'CMOS': 'Complementary Metal-Oxide-Semiconductor. An arrangement of transistor pairs that uses almost zero power except when switching, saving 99% power.',
    'microprocessor': 'An entire computer CPU printed onto a single fingernail-sized silicon chip, first released commercially as the Intel 4004 in 1971.',
    'stored-program': 'The concept of keeping both instructions (code) and data (variables) in the exact same memory, proposed by John von Neumann in 1945.',
    'stored program': 'The concept of keeping both instructions (code) and data (variables) in the exact same memory, proposed by John von Neumann in 1945.',
    'context switching': 'The operating system kernel rapidly swapping CPU register states between different programs in milliseconds to simulate multitasking.',
    'virtual memory': 'The operating system mapping program memories into isolated "sandboxes", preventing bugs in one app from crashing another.',
    'packet switching': 'Chopping long messages into small numbered packets that travel independently across the network and are reassembled on arrival.',
    'DNS': 'Domain Name System. The phone book of the internet, translating human names (like youtube.com) to numeric IP addresses (like 142.250.190.46).',
    'B-Trees': 'Self-balancing search tree data structures. They act like nested filing cabinet labels, letting databases search data in O(log N) steps.',
    'B-Tree': 'Self-balancing search tree data structure. Acts like nested filing cabinet labels, letting databases search data in O(log N) steps.',
    'ACID': 'Atomicity, Consistency, Isolation, and Durability. A set of database guarantees that ensure data transactions are safe, reliable, and survive crashes.',
    'backpropagation': 'The training feedback loop of neural networks. The computer calculates its error and goes backward, nudging dials (weights) to improve.',
    'self-attention': 'The mechanism that lets Transformer networks weigh which words in a sequence matter to each other dynamically (like context magnets).',
    'media queries': 'CSS rules that check the screen width to dynamically stack elements vertically for mobile, or expand them into grids for desktop.',
    'media query': 'A CSS rule that checks the screen width to dynamically stack elements vertically for mobile, or expand them into grids for desktop.',
    'Agentic UI': 'Conversational, natural language interfaces where the AI interprets user intent and dynamically creates custom layouts on-the-fly.',
    'Halting Problem': 'Alan Turing\'s 1936 proof showing that it is mathematically impossible to write a program that can perfectly predict if any other code will freeze.',
    'Shannon Entropy': 'The measure of average uncertainty or information, representing the absolute minimum number of Yes/No questions needed to guess a secret.',
    'entropy': 'The measure of average uncertainty or information, representing the absolute minimum number of Yes/No questions needed to guess a secret.',
    'NP-complete': 'A set of the hardest puzzle problems. If someone finds a fast shortcut to solve one of them, they can solve all NP problems instantly.',
    'embeddings': 'High-dimensional coordinate grids where words with similar conceptual meanings (like cat and kitten) are mapped close to each other.',
    'cosine similarity': 'Measuring the angle between two word vectors on a meaning map. An angle of 0 degrees means a similarity of 1.0 (identical meaning).'
  };

  // Convert keys to regex patterns for case-insensitive matching
  // Sort keys by length descending to match longer phrases first (e.g. "packet switching" before "packet")
  const sortedTerms = Object.keys(dictionary).sort((a, b) => b.length - a.length);

  // We only match words outside of certain elements
  const ignoreTags = new Set(['SCRIPT', 'STYLE', 'A', 'CODE', 'PRE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BUTTON', 'INPUT', 'TEXTAREA']);

  function wrapTerms(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (ignoreTags.has(node.tagName) || node.classList.contains('glossary-term')) return;
      
      // Convert children list to array because we might modify the list during iteration
      const children = Array.from(node.childNodes);
      children.forEach(wrapTerms);
    } else if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue;
      if (!text.trim()) return;

      // Find the first term that matches
      for (const term of sortedTerms) {
        // Find term as a whole word (using word boundaries)
        const regex = new RegExp(`\\b(${term})\\b`, 'i');
        const match = text.match(regex);
        if (match) {
          const matchedText = match[1];
          const splitIndex = match.index;
          
          const beforeText = text.substring(0, splitIndex);
          const afterText = text.substring(splitIndex + matchedText.length);
          
          const beforeNode = document.createTextNode(beforeText);
          const afterNode = document.createTextNode(afterText);
          
          const span = document.createElement('span');
          span.className = 'glossary-term';
          span.textContent = matchedText;
          span.setAttribute('data-term', term); // Save canonical key
          
          node.parentNode.insertBefore(beforeNode, node);
          node.parentNode.insertBefore(span, node);
          node.parentNode.insertBefore(afterNode, node);
          node.parentNode.removeChild(node);
          
          // Process the rest of the text in the afterNode
          wrapTerms(afterNode);
          return; // Match one term at a time per text node
        }
      }
    }
  }

  // Create a shared tooltip box element
  const tooltipBox = document.createElement('div');
  tooltipBox.className = 'glossary-tooltip-box';
  document.body.appendChild(tooltipBox);

  // Bind events
  document.addEventListener('mouseover', function(e) {
    const termEl = e.target.closest('.glossary-term');
    if (!termEl) return;
    
    const termKey = termEl.getAttribute('data-term');
    const definition = dictionary[termKey] || dictionary[termKey.toLowerCase()];
    if (!definition) return;
    
    // Set content
    tooltipBox.innerHTML = `<h5>💡 ${termEl.textContent}</h5><p>${definition}</p>`;
    tooltipBox.classList.add('visible');
    
    // Position
    const rect = termEl.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Centered horizontally above the element
    let top = rect.top + scrollY - tooltipBox.offsetHeight - 10;
    let left = rect.left + scrollX + (rect.width / 2) - (tooltipBox.offsetWidth / 2);
    
    // Prevent flowing off screen edges
    if (left < 10) left = 10;
    if (left + tooltipBox.offsetWidth > window.innerWidth - 10) {
      left = window.innerWidth - tooltipBox.offsetWidth - 10;
    }
    if (top < scrollY + 10) {
      // position below if there's no room above
      top = rect.bottom + scrollY + 10;
    }
    
    tooltipBox.style.top = `${top}px`;
    tooltipBox.style.left = `${left}px`;
  });

  document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.glossary-term')) {
      tooltipBox.classList.remove('visible');
    }
  });

  // Run parser on main content area
  const mainEl = document.querySelector('main');
  if (mainEl) {
    wrapTerms(mainEl);
  }
})();
