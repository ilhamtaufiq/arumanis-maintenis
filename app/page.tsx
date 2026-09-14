'use client'

import { useCallback, useEffect, useState } from 'react'

function playTone(enabled: boolean, frequency: number, duration = 0.06) {
  if (!enabled || typeof window === 'undefined') return
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AudioContextClass) return
  const context = new AudioContextClass()
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  oscillator.type = 'square'
  oscillator.frequency.value = frequency
  gain.gain.setValueAtTime(0.035, context.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration)
  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.start()
  oscillator.stop(context.currentTime + duration)
}

function TennisStation() {
  return (
    <div className="station-art tennis-art" aria-label="Animasi dua pemain Arumanis sedang rally tenis" role="img">
      <div className="tennis-spark spark-one">+</div>
      <div className="tennis-spark spark-two">+</div>
      <svg viewBox="0 0 360 270" aria-hidden="true" className="tennis-svg pixel-court">
        <rect className="court-surface" x="26" y="22" width="308" height="226" />
        <path className="court-line" d="M48 40h264v190H48zM48 135h264M102 40v190M258 40v190M102 84h156v102H102z" />
        <path className="net" d="M36 135h288" />
        <g className="rally-player player-left">
          <ellipse className="player-shadow" cx="180" cy="74" rx="25" ry="8" />
          <circle className="player-head" cx="180" cy="58" r="12" />
          <path className="player-body player-body-left" d="M166 74h28l7 31-21 13-21-13z" />
          <path className="player-leg" d="M173 112l-12 17M187 112l12 17" />
          <path className="player-arm" d="M168 80l-20 11M192 80l20 11" />
          <path className="racket racket-left" d="M137 78c-10-9-21 3-13 12 8 8 19-3 13-12zM139 89l10 14" />
        </g>
        <g className="rally-player player-right">
          <ellipse className="player-shadow" cx="180" cy="196" rx="25" ry="8" />
          <circle className="player-head player-head-right" cx="180" cy="212" r="12" />
          <path className="player-body player-body-right" d="M166 196h28l7-31-21-13-21 13z" />
          <path className="player-leg" d="M173 158l-12-17M187 158l12-17" />
          <path className="player-arm" d="M168 190l-20-11M192 190l20-11" />
          <path className="racket racket-right" d="M223 192c10 9 21-3 13-12-8-8-19 3-13 12zM221 181l-10-14" />
        </g>
        <circle className="tennis-ball rally-ball" cx="180" cy="135" r="5" />
        <path className="ball-trail rally-trail" d="M180 135c-25-18-25-35 0-52M180 135c25 18 25 35 0 52" />
      </svg>
      <div className="station-label">ARUMANIS // RALLY MODE</div>
    </div>
  )
}

export default function Page() {
  const [soundOn, setSoundOn] = useState(true)
  const tone = useCallback((frequency: number, duration?: number) => playTone(soundOn, frequency, duration), [soundOn])

  useEffect(() => {
    if (!soundOn) return
    const interval = window.setInterval(() => playTone(true, 660, 0.08), 2400)
    return () => window.clearInterval(interval)
  }, [soundOn])

  return (
    <main className="maintenance-shell">
      <div className="crt-overlay" aria-hidden="true" />
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">A/</span>
          <div>
            <p className="eyebrow">CIANJUR · JAWA BARAT</p>
            <p className="brand-subtitle">PORTAL INFRASTRUKTUR AIR &amp; SANITASI</p>
          </div>
        </div>
        <button
          className="sound-toggle"
          type="button"
          aria-pressed={soundOn}
          aria-label={soundOn ? 'Matikan suara' : 'Nyalakan suara'}
          onClick={() => { setSoundOn((current) => !current); playTone(!soundOn, 660, 0.08) }}
          onMouseEnter={() => tone(440)}
        >
          <span aria-hidden="true">{soundOn ? '◉' : '○'}</span> SOUND {soundOn ? 'ON' : 'OFF'}
        </button>
      </header>

      <section className="hero-grid" aria-labelledby="maintenance-title">
        <div className="hero-copy">
          <p className="status-chip"><span className="status-dot" /> STATUS: MAINTENANCE</p>
          <p className="mono-kicker">// TRANSMISSION INTERRUPTED</p>
          <h1 id="maintenance-title">ARUMANIS<br /><span>SEDANG MAINTENIS</span><i className="cursor" aria-hidden="true" /></h1>
          <p className="lede">Kami sedang memperbaiki server untuk menjaga aliran informasi dan layanan tetap berjalan dengan baik.</p>
          <div className="progress-panel" aria-label="Progres pemeliharaan">
            <div className="progress-head"><span>REPAIR PROGRESS</span><span>EST. 68%</span></div>
            <div className="progress-blocks" aria-hidden="true">{Array.from({ length: 16 }, (_, index) => <span key={index} className={index < 11 ? 'filled' : ''} />)}</div>
            <p className="progress-note">CHECK BACK SOON <span>//</span> KAMI AKAN SEGERA KEMBALI</p>
          </div>
        </div>
          <TennisStation />
      </section>

      <section className="info-grid" aria-label="Informasi layanan">
        <div className="return-card">
          <span className="card-index">01</span>
          <div><p className="card-label">PERKIRAAN KEMBALI</p><p className="return-time">16 SEPTEMBER 2026 <span>//</span> 16:00 WIB</p></div>
          <span className="signal-bars" aria-hidden="true"><i /><i /><i /><i /></span>
        </div>
        <div className="contact-card">
          <span className="card-index">02</span>
          <div><p className="card-label">BUTUH BANTUAN DARURAT?</p><p className="contact-copy">Hubungi admin layanan kami.</p></div>
          <a className="contact-link" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" onMouseEnter={() => tone(520)} onClick={() => tone(820)}>WHATSAPP ↗</a>
        </div>
      </section>

      <footer className="footer"><span>ARUMANIS / KABUPATEN CIANJUR</span><span>© 2026</span><span className="footer-live"><i /> SYSTEM STANDBY</span></footer>
    </main>
  )
}
