import './style.css'

document.querySelector('#app').innerHTML = `
<main class="site">

    <!-- SOUL PARTICLES -->
    <div class="soul-particles" aria-hidden="true"></div>

    <!-- NAVBAR -->
    <nav class="navbar">
      <a href="#home" class="brand" aria-label="Go to home section">
        THE HOLLOWED
      </a>

      <div class="nav-links" aria-label="Main navigation">
        <a href="#home">HOME</a>
        <a href="#collection">COLLECTION</a>
        <a href="#lore">LORE</a>
      </div>

      <button class="nav-button" id="open-allowlist">
        JOIN ALLOWLIST
      </button>
    </nav>


    <!-- HERO -->
    <section class="hero" id="home">


      <div class="hero-content">

        <p class="eyebrow">
          2,666 SOULS
        </p>

        <h1>
          <span class="title-the">THE</span>
          <span class="title-hollowed">HOLLOWED</span>
        </h1>

        <p class="description">
          They were never meant to return.
          <br>
          Now they're waiting for you.
        </p>

        <button class="main-button" id="hero-allowlist">
          ENTER THE HOLLOW
        </button>

        <div class="descent-indicator" aria-hidden="true">
          <span>DESCEND</span>
          <span class="descent-arrow">↓</span>
        </div>

      </div>

      

    </section>
<!-- NFT COLLECTION -->
<section class="collection" id="collection">
    <div class="collection-header">
        <p class="collection-eyebrow">THE SOULS REMAIN</p>
        <div class="section-divider" aria-hidden="true"></div>
        <h2>THE <span>HOLLOWED</span></h2>
        <p class="collection-description">
            2,666 souls. One hollow. No way back.
        </p>
    </div>

    <div class="nft-grid">

        <!-- NFT #0001 -->
        <div class="nft-card">
            <div class="nft-image">
                <img src="/hollowed2-v2.png" alt="Hollowed #####">
            </div>
            <p>HOLLOWED ####</p>
        </div>

        <!-- NFT #0002 -->
        <div class="nft-card">
            <div class="nft-image">
                <img src="/hollowed1.png" alt="Hollowed #####">
            </div>
            <p>HOLLOWED ####</p>
        </div>

        <!-- NFT #0003 -->
        <div class="nft-card">
            <div class="nft-image">
                <img src="/hollowed3-v2.png" alt="Hollowed #####">
            </div>
            <p>HOLLOWED ####</p>
        </div>

    </div>

    <section class="lore" id="lore">
      <div class="lore-header">
        <p class="lore-chapter">CHAPTER 0</p>
        <h2>THE LORE</h2>
      </div>

      <div class="lore-grid">
        <div class="lore-row">
          <div class="lore-number">I</div>
          <div class="lore-copy">
            <h3>THE FALL</h3>
            <p>
              Long before memory, 2,666 souls crossed the veil in search of forbidden
              knowledge. None returned whole.
            </p>
          </div>
        </div>

        <div class="lore-row reversed">
          <div class="lore-number">II</div>
          <div class="lore-copy">
            <h3>THE HOLLOW</h3>
            <p>
              Their bodies remained, but the light within was drained — leaving only
              echoes drifting in an endless dark.
            </p>
          </div>
        </div>

        <div class="lore-row">
          <div class="lore-number">III</div>
          <div class="lore-copy">
            <h3>THE RETURN</h3>
            <p>
              Now they stir. Whispered calls across the void, searching for a wanderer
              brave enough to claim them.
            </p>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="footer-inner">
        <p>© The Hollowed</p>
        <div class="footer-links" aria-label="Social links">
          <a href="https://x.com/thehollowedrh" target="_blank" rel="noreferrer" aria-label="Follow The Hollowed on X" class="x-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.9 2h3.4l-7.4 8.5L22.5 22h-6.7l-5.2-7.6L4.9 22H1.5l7.9-9.1L1.2 2h6.9l4.7 7 5.1-7zm-1.3 18.8h1.9L6.9 3.1H4.9l12.7 16.7z"/>
            </svg>
          </a>
          <a href="#home" aria-label="Go to home page" class="site-badge" title="Home">
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <circle cx="64" cy="64" r="54"/>
              <path d="M64 10v108M10 64h108M28 32c8 7 17 10 36 10s28-3 36-10M28 96c8-7 17-10 36-10s28 3 36 10M18 46c15 9 25 12 46 12s31-3 46-12M18 82c15-9 25-12 46-12s31 3 46 12"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>

    <!-- ALLOWLIST MODAL -->
    <div class="modal hidden" id="allowlist-modal">

      <div class="modal-backdrop" id="close-modal"></div>

      <div class="quest-card">

        <button class="close-button" id="close-button">
          ×
        </button>


        <!-- QUEST HEADER -->
        <div class="quest-header">

          <div class="skull">
            ☠
          </div>

          <p class="quest-eyebrow">
            THE HOLLOWED
          </p>

          <h2>
            Join the
            <span>Allowlist</span>
          </h2>

          <p class="quest-description">
            Complete the rituals below.
            <br>
            Then claim your place among the Hollowed.
          </p>

        </div>


        <!-- PROGRESS -->
        <div class="progress-box">

          <div class="progress-title">
            <strong>
              SOUL'S RITUAL
            </strong>

            <span id="progress-text">
              0/4
            </span>
          </div>

          <div class="progress-bar">
            <div
              class="progress-fill"
              id="progress-fill">
            </div>
          </div>


          


          <!-- QUESTS -->
          <div class="tasks">

            <!-- TASK 1 -->
            <div class="task">

              <input
                type="checkbox"
                id="task1"
              >

              <div class="task-row">

                <div class="task-number">
                  01
                </div>

                <div class="task-content">
                  <strong>
                    Follow The Hollowed
                  </strong>

                  <span>
                    Follow our X account
                  </span>
                </div>

                <a
                  href="https://x.com/thehollowedrh"
                  target="_blank">
                  OPEN ↗
                </a>

              </div>

            </div>


            <!-- TASK 2 -->
            <div class="task">

              <input
                type="checkbox"
                id="task2"
              >

              <div class="task-row">

                <div class="task-number">
                  02
                </div>

                <div class="task-content">
                  <strong>
                    Spread the Darkness
                  </strong>

                  <span>
                    Like + repost the pinned post
                  </span>
                </div>

                <a
                  href="#"
                  target="_blank">
                  OPEN ↗
                </a>

              </div>

            </div>


            <!-- TASK 3 -->
            <div class="task task-with-input">

              <input
                type="checkbox"
                id="task3"
              >

              <div class="task-row">

                <div class="task-number">
                  03
                </div>

                <div class="task-content">
                  <strong>
                    Enter the Void
                  </strong>

                  <span>
                    Quote the pinned post
                  </span>
                </div>

                <a
                  href="#"
                  target="_blank">
                  OPEN ↗
                </a>

              </div>

            </div>


            <!-- TASK 4 -->
            <div class="task task-with-input">

              <input
                type="checkbox"
                id="task4"
              >

              <div class="task-row">

                <div class="task-number">
                  04
                </div>

                <div class="task-content">
                  <strong>
                    Summon Three Souls
                  </strong>

                  <span>
                    Tag 3 friends in the comments
                  </span>
                </div>

                <a
                  href="#"
                  target="_blank">
                  OPEN ↗
                </a>

              </div>

              <div class="proof-area">
                <span class="proof-label">PROOF URL</span>
                <div class="proof-controls">
                  <input
                    type="url"
                    id="task4-proof"
                    aria-label="Proof URL for the comment tagging three friends"
                    class="proof-input"
                    placeholder="Paste your comment link..."
                  >
                  <button id="submit-task4-proof" type="button" disabled>
                    SUBMIT
                  </button>
                </div>
              </div>

            </div>


          </div>

        </div>


        <!-- WALLET -->
        <div
          class="wallet-section locked"
          id="wallet-section">

          <div class="lock-icon">
            🔒
          </div>

          <h3>
            WALLET SEALED
          </h3>

          <p>
            Complete 4 rituals to unlock your place.
          </p>


          <div class="wallet-form">

            <input
              id="wallet-input"
              placeholder="Enter wallet address"
            >

            <button id="submit-wallet" disabled>
              CLAIM SOUL
            </button>

          </div>

        </div>

      </div>

    </div>

  </main>
`


// ============================================
// MODAL
// ============================================

const modal =
  document.querySelector('#allowlist-modal')

const openButtons = [
  document.querySelector('#open-allowlist'),
  document.querySelector('#hero-allowlist')
]

const closeButton =
  document.querySelector('#close-button')

const closeModal =
  document.querySelector('#close-modal')


openButtons.forEach(button => {

  button.addEventListener('click', () => {

    modal.classList.remove('hidden')

  })

})


closeButton.addEventListener('click', () => {

  modal.classList.add('hidden')

})


closeModal.addEventListener('click', () => {

  modal.classList.add('hidden')

})


// ============================================
// QUEST PROGRESS
// ============================================

const tasks =
  document.querySelectorAll(
    '.task input[type="checkbox"]'
  )

const taskLinks =
  document.querySelectorAll('.task-row a')

const task4Proof =
  document.querySelector('#task4-proof')

const submitTask4Proof =
  document.querySelector('#submit-task4-proof')

let task4ProofSubmitted = false

const progressText =
  document.querySelector('#progress-text')

const progressFill =
  document.querySelector('#progress-fill')

const walletSection =
  document.querySelector('#wallet-section')


function updateProgress() {

  const completed =
    [...tasks].filter(
      task => task.checked
    ).length


  progressText.textContent =
    `${completed}/4`


  progressFill.style.width =
    `${completed * 25}%`


  // Unlock wallet after all quests
  if (completed === 4 && task4ProofSubmitted) {

    walletSection.classList.remove('locked')

    submitWallet.disabled = false

    walletSection.querySelector(
      '.lock-icon'
    ).textContent = '✦'

    walletSection.querySelector(
      'h3'
    ).textContent =
      'WALLET UNSEALED'

    walletSection.querySelector(
      'p'
    ).textContent =
      'The Hollow has accepted you. Enter your wallet.'

  } else {

    walletSection.classList.add('locked')
    submitWallet.disabled = true

  }

}


tasks.forEach(task => {

  task.disabled = true

  task.addEventListener(
    'change',
    updateProgress
  )

})

task4Proof.addEventListener('input', () => {
  task4ProofSubmitted = false
  submitTask4Proof.disabled = task4Proof.value.trim() === ''
  submitTask4Proof.textContent = 'SUBMIT'
  updateProgress()
})

submitTask4Proof.addEventListener('click', () => {
  if (!task4Proof.value.trim()) return

  task4ProofSubmitted = true
  task4Proof.disabled = true
  submitTask4Proof.disabled = true
  submitTask4Proof.textContent = 'SUBMITTED ✓'
  updateProgress()
})

taskLinks.forEach(link => {

  link.addEventListener('click', event => {

    if (link.getAttribute('href') === '#') {
      event.preventDefault()
    }

    const task = link.closest('.task')
    const checkbox = task.querySelector(
      'input[type="checkbox"]'
    )

    if (checkbox.checked || link.dataset.verifying === 'true') return

    link.dataset.verifying = 'true'
    link.textContent = 'VERIFYING...'
    task.classList.add('is-verifying')

    window.setTimeout(() => {
      checkbox.checked = true
      link.textContent = 'VERIFIED ✓'
      task.classList.remove('is-verifying')
      task.classList.add('is-complete')
      updateProgress()
    }, 8000)

  })

})





// ============================================
// WALLET SUBMISSION
// ============================================

const submitWallet =
  document.querySelector('#submit-wallet')

const walletInput =
  document.querySelector('#wallet-input')

const supabaseFunctionUrl =
  'https://qttqvmnxzcvkufiptlof.supabase.co/functions/v1/submit-wallet'

const supabasePublishableKey =
  'sb_publishable_qJ1aZVMJhhC_vQy2Hjx2yg_OVyG1q7b'

submitWallet.addEventListener('click', async () => {

  const wallet = walletInput.value.trim()
  const proofUrl = task4Proof.value.trim()


  if (!wallet) {

    alert(
      'Enter your wallet address first.'
    )

    return

  }

  if (!proofUrl || !task4ProofSubmitted) {
    alert('Submit your task 4 comment link first.')
    return
  }

  submitWallet.disabled = true
  submitWallet.textContent = 'SUBMITTING...'

  try {
    const response = await fetch(supabaseFunctionUrl, {
      method: 'POST',
headers: {
  'Content-Type': 'application/json',
  apikey: supabasePublishableKey,
},
      body: JSON.stringify({
        wallet_address: wallet,
        proof_url: proofUrl,
      }),
    })

    const result = await response.json().catch(() => ({}))

    if (!response.ok) {
      throw new Error(result.error || 'Unable to save wallet submission')
    }

    submitWallet.textContent = 'SUBMITTED ✓'
    walletInput.disabled = true
    walletSection.querySelector('p').textContent =
      'Your place has been recorded in the Hollow.'
  } catch (error) {
    submitWallet.disabled = false
    submitWallet.textContent = 'CLAIM SOUL'
    alert(error.message)
  }

})// SOUL PARTICLES
const particleContainer = document.querySelector('.soul-particles');

for (let i = 0; i < 90; i++) {
  const particle = document.createElement('span');
  const isShard = Math.random() > 0.75;
  const size = isShard ? 2 + Math.random() * 5 : 1.5 + Math.random() * 3.5;
  const opacity = 0.3 + Math.random() * 0.6;
  const driftX = (Math.random() - 0.5) * 90;
  const driftY = -30 - Math.random() * 120;
  const rotation = Math.random() * 180;
  const blur = Math.random() * 1.8;
  const shape = Math.random() > 0.74 ? '50% 50% 42% 58% / 52% 38% 62% 48%' : '50%';

  particle.className = 'soul-particle';
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.setProperty('--size', `${size}px`);
  particle.style.setProperty('--opacity', opacity.toFixed(2));
  particle.style.setProperty('--drift-x', `${driftX}px`);
  particle.style.setProperty('--drift-y', `${driftY}px`);
  particle.style.setProperty('--delay', `${Math.random() * 12}s`);
  particle.style.setProperty('--speed', `${8 + Math.random() * 12}s`);
  particle.style.setProperty('--blur', `${blur}px`);
  particle.style.setProperty('--shape', shape);
  particle.style.setProperty('--rotation', `${rotation}deg`);

  particleContainer.appendChild(particle);
}
// Smooth section navigation without changing the URL hash
document.querySelectorAll('a[href="#home"], a[href="#collection"], a[href="#lore"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Remove any existing #hash from the URL on page load
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}