import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="site">

    <!-- NAVBAR -->
    <nav class="navbar">
      <div class="brand">
        THE HOLLOWED
      </div>

      <button class="nav-button" id="open-allowlist">
        JOIN ALLOWLIST
      </button>
    </nav>


    <!-- HERO -->
    <section class="hero">

      <div class="fog fog-1"></div>
      <div class="fog fog-2"></div>

      <div class="hero-content">

        <p class="eyebrow">
          2,666 SOULS
        </p>

        <h1>
          THE
          <span>HOLLOWED</span>
        </h1>

        <p class="description">
          They were never meant to return.
          <br>
          Now they're waiting for you.
        </p>

        <button class="main-button" id="hero-allowlist">
          ENTER THE HOLLOW
        </button>

      </div>

      <div class="scroll-hint">
        <span>↓</span>
        DESCEND
      </div>

    </section>


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

              <label for="task1">

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
                  href="https://x.com/hollowedrh"
                  target="_blank">
                  OPEN ↗
                </a>

              </label>

            </div>


            <!-- TASK 2 -->
            <div class="task">

              <input
                type="checkbox"
                id="task2"
              >

              <label for="task2">

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

              </label>

            </div>


            <!-- TASK 3 -->
            <div class="task task-with-input">

              <input
                type="checkbox"
                id="task3"
              >

              <label for="task3">

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

              </label>

              <input
                class="proof-input"
                placeholder="Paste your quote post link..."
              >

            </div>


            <!-- TASK 4 -->
            <div class="task task-with-input">

              <input
                type="checkbox"
                id="task4"
              >

              <label for="task4">

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

              </label>

              <input
                class="proof-input"
                placeholder="Paste your comment link..."
              >

            </div>


            <!-- TASK 5 -->
            <div class="task">

              <input
                type="checkbox"
                id="task5"
              >



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
            Complete all four rituals
            to unlock your place.
          </p>


          <div class="wallet-form">

            <input
              id="wallet-input"
              placeholder="Enter wallet address"
            >

            <button id="submit-wallet">
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
  if (completed === 4) {

    walletSection.classList.remove('locked')

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

  }

}


tasks.forEach(task => {

  task.addEventListener(
    'change',
    updateProgress
  )

})





// ============================================
// WALLET SUBMISSION
// ============================================

const submitWallet =
  document.querySelector('#submit-wallet')


submitWallet.addEventListener('click', () => {

  const wallet =
    document.querySelector(
      '#wallet-input'
    ).value.trim()


  if (!wallet) {

    alert(
      'Enter your wallet address first.'
    )

    return

  }


  alert(
    'Wallet submission will be connected to the allowlist database later.'
  )

})