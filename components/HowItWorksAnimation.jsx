'use client';
import { useEffect, useRef } from 'react';
import styles from './HowItWorksAnimation.module.css';

export default function HowItWorksAnimation() {
  const timerRef = useRef(null);

  useEffect(() => {
    const SCENES  = ['s1','s2','s3','s4'];
    const DOT_IDS = ['d1','d2','d3','d4'];
    const TIMINGS = [6000, 6500, 7000, 0];
    const CARDS   = ['pc1','pc2','pc3','pc4','pc5','pc6','pc7','pc8','pc9','pc10','pc11','pc12'];

    const $ = id => document.getElementById(id);

    function goTo(idx) {
      SCENES.forEach((id, i) => {
        $('hiw-' + id).classList.remove(styles.active);
        $('hiw-' + DOT_IDS[i]).classList.remove(styles.on);
      });
      $('hiw-' + SCENES[idx]).classList.add(styles.active);
      $('hiw-' + DOT_IDS[idx]).classList.add(styles.on);

      if (idx === 1) playBulbGrow();
      if (idx === 2) playBoxScene();

      if (idx === 3) {
        CARDS.forEach((id, i) => {
          const card = $('hiw-' + id);
          if (!card) return;
          card.classList.remove(styles.show);
          setTimeout(() => card.classList.add(styles.show), 100 + i * 100);
        });
        setTimeout(() => $('hiw-ctaBtn').classList.add(styles.show), 1400);
        setTimeout(() => $('hiw-replayBtn').classList.add(styles.show), 1600);
        return;
      }

      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => goTo(idx + 1), TIMINGS[idx]);
    }

    function playBulbGrow() {
      const el = $('hiw-bulbGrower');
      if (!el) return;
      el.style.transition = 'none';
      el.style.transform  = 'scale(0.18)';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = 'transform 5.4s cubic-bezier(0.2, 0, 0.6, 1)';
          el.style.transform  = 'scale(1.0)';
        });
      });
    }

    function playBoxScene() {
      const lid    = $('hiw-boxLid');
      const bulb   = $('hiw-fallingBulb');
      const sparks = $('hiw-boxSparks');
      const boxSvg = $('hiw-boxSvg');
      const spIds  = ['hiw-bsp1','hiw-bsp2','hiw-bsp3','hiw-bsp4'];
      if (!lid || !bulb || !sparks || !boxSvg) return;

      lid.style.transition  = 'none';
      lid.style.transform   = 'rotate(-55deg)';
      bulb.style.transition = 'none';
      bulb.style.opacity    = '0';
      bulb.style.top        = '-20px';
      sparks.style.opacity  = '0';
      spIds.forEach(id => {
        const el = $(id);
        if (el) { el.style.opacity = '0'; el.style.transform = 'none'; }
      });

      setTimeout(() => { bulb.style.opacity = '1'; }, 300);

      setTimeout(() => {
        bulb.style.transition = 'top .55s cubic-bezier(.34,1.2,.64,1), opacity .15s';
        bulb.style.top = '42px';
      }, 700);

      setTimeout(() => {
        bulb.style.transition = 'opacity .15s';
        bulb.style.opacity    = '0';
      }, 1280);

      setTimeout(() => {
        lid.style.transition = 'transform .4s cubic-bezier(.34,1.4,.64,1)';
        lid.style.transform  = 'rotate(0deg)';
      }, 1350);

      setTimeout(() => {
        boxSvg.animate([
          { transform: 'translateX(0) rotate(0deg)'      },
          { transform: 'translateX(-9px) rotate(-3deg)'  },
          { transform: 'translateX(9px) rotate(3deg)'    },
          { transform: 'translateX(-7px) rotate(-2.5deg)'},
          { transform: 'translateX(7px) rotate(2.5deg)'  },
          { transform: 'translateX(-5px) rotate(-1.5deg)'},
          { transform: 'translateX(5px) rotate(1.5deg)'  },
          { transform: 'translateX(-3px) rotate(-.5deg)' },
          { transform: 'translateX(3px) rotate(.5deg)'   },
          { transform: 'translateX(0) rotate(0deg)'      },
        ], { duration: 700, easing: 'ease-in-out' });
      }, 1850);

      setTimeout(() => {
        sparks.style.opacity = '1';
        const moves = [{ x:-18,y:-22 },{ x:16,y:-20 },{ x:0,y:-28 },{ x:14,y:-16 }];
        spIds.forEach((id, i) => {
          const el = $(id);
          if (!el) return;
          setTimeout(() => {
            el.style.opacity = '1';
            el.animate([
              { transform: 'translate(0,0) scale(0)', opacity: 0 },
              { transform: `translate(${moves[i].x}px,${moves[i].y}px) scale(1.3)`, opacity: 1, offset: 0.5 },
              { transform: `translate(${moves[i].x*1.6}px,${moves[i].y*1.6}px) scale(.8)`, opacity: 0 },
            ], { duration: 600, fill: 'forwards', easing: 'ease-out' });
          }, i * 60);
        });
      }, 2550);
    }

    function startShow() {
      CARDS.forEach(id => {
        const el = $('hiw-' + id);
        if (el) el.classList.remove(styles.show);
      });
      const cta = $('hiw-ctaBtn');
      const rpl = $('hiw-replayBtn');
      if (cta) cta.classList.remove(styles.show);
      if (rpl) rpl.classList.remove(styles.show);
      const bg = $('hiw-bulbGrower');
      if (bg) { bg.style.transition = 'none'; bg.style.transform = 'scale(0.18)'; }
      goTo(0);
    }

    // wire dot clicks
    DOT_IDS.forEach((id, i) => {
      const dot = $('hiw-' + id);
      if (dot) dot.addEventListener('click', () => { clearTimeout(timerRef.current); goTo(i); });
    });

    // wire replay
    const replayBtn = $('hiw-replayBtn');
    if (replayBtn) replayBtn.addEventListener('click', startShow);

    startShow();

    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className={styles.wrap}>

      {/* ══ SCENE 1: BRAIN ══ */}
      <div className={styles.scene} id="hiw-s1">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" style={{overflow:'visible'}}>
          <defs>
            <radialGradient id="hiw-bg1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f9a8d4"/>
              <stop offset="100%" stopColor="#db2777"/>
            </radialGradient>
          </defs>
          <path d="M36,118 Q22,100 24,78 Q26,56 40,46 Q48,38 60,40 Q63,32 80,32 L80,138 Q56,142 36,118Z" fill="url(#hiw-bg1)" opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur=".6s" begin="0.2s" fill="freeze"/>
          </path>
          <path d="M124,118 Q138,100 136,78 Q134,56 120,46 Q112,38 100,40 Q97,32 80,32 L80,138 Q104,142 124,118Z" fill="#ec4899" opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur=".6s" begin="0.3s" fill="freeze"/>
          </path>
          <rect x="78" y="32" width="4" height="106" rx="2" fill="#be185d" opacity="0">
            <animate attributeName="opacity" from="0" to="0.3" dur=".4s" begin="0.4s" fill="freeze"/>
          </rect>
          <g opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur=".4s" begin="0.6s" fill="freeze"/>
            <path d="M44,58 Q54,52 58,64" stroke="#be185d" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7"/>
            <path d="M38,80 Q50,74 54,86" stroke="#be185d" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7"/>
            <path d="M40,102 Q50,97 53,108" stroke="#be185d" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7"/>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur=".4s" begin="0.6s" fill="freeze"/>
            <path d="M116,58 Q106,52 102,64" stroke="#9d174d" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7"/>
            <path d="M122,80 Q110,74 106,86" stroke="#9d174d" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7"/>
            <path d="M120,102 Q110,97 107,108" stroke="#9d174d" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7"/>
          </g>
          <g opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur=".3s" begin="0.7s" fill="freeze"/>
            <circle cx="62" cy="88" r="7" fill="#fff" opacity=".9"/>
            <circle cx="98" cy="88" r="7" fill="#fff" opacity=".9"/>
            <circle cx="64" cy="90" r="3.5" fill="#1e1b4b"/>
            <circle cx="100" cy="90" r="3.5" fill="#1e1b4b"/>
            <circle cx="65" cy="89" r="1.2" fill="#fff"/>
            <circle cx="101" cy="89" r="1.2" fill="#fff"/>
          </g>
          <path d="M64,108 Q80,118 96,108" stroke="#9d174d" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur=".3s" begin="0.8s" fill="freeze"/>
          </path>
          <g opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur=".5s" begin="1.0s" fill="freeze"/>
            <circle cx="80" cy="22" r="4" fill="#f472b6" opacity=".5"/>
            <circle cx="80" cy="12" r="3" fill="#f472b6" opacity=".35"/>
            <circle cx="80" cy="4"  r="2" fill="#f472b6" opacity=".2"/>
          </g>
        </svg>
        <p className={styles.sceneText}>
          Ever had an idea and thought to yourself…<br />
          <em>&ldquo;That would make a great website or app!&rdquo;</em>
        </p>
      </div>

      {/* ══ SCENE 2: LIGHTBULB ══ */}
      <div className={styles.scene} id="hiw-s2">
        <div style={{width:'200px',height:'200px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',overflow:'visible',position:'relative'}}>
          <div id="hiw-bulbGrower" style={{transform:'scale(0.18)',transformOrigin:'center center',transition:'none',position:'absolute'}}>
            <svg width="200" height="220" viewBox="0 0 200 220" fill="none" style={{overflow:'visible'}}>
              <defs>
                <radialGradient id="hiw-haloG" cx="50%" cy="45%" r="50%">
                  <stop offset="0%" stopColor="#fde68a" stopOpacity=".7"/>
                  <stop offset="100%" stopColor="#fde68a" stopOpacity="0"/>
                </radialGradient>
                <filter id="hiw-glow2" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="7" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <circle cx="100" cy="88" r="72" fill="url(#hiw-haloG)"/>
              <g filter="url(#hiw-glow2)">
                <line x1="100" y1="8"  x2="100" y2="-4"  stroke="#fde68a" strokeWidth="5" strokeLinecap="round"/>
                <line x1="100" y1="8"  x2="100" y2="-4"  stroke="#fde68a" strokeWidth="4" strokeLinecap="round" transform="rotate(45 100 88)"/>
                <line x1="100" y1="8"  x2="100" y2="-4"  stroke="#fde68a" strokeWidth="4" strokeLinecap="round" transform="rotate(90 100 88)"/>
                <line x1="100" y1="8"  x2="100" y2="-4"  stroke="#fde68a" strokeWidth="4" strokeLinecap="round" transform="rotate(135 100 88)"/>
                <line x1="100" y1="8"  x2="100" y2="-4"  stroke="#fde68a" strokeWidth="4" strokeLinecap="round" transform="rotate(180 100 88)"/>
                <line x1="100" y1="8"  x2="100" y2="-4"  stroke="#fde68a" strokeWidth="4" strokeLinecap="round" transform="rotate(225 100 88)"/>
                <line x1="100" y1="8"  x2="100" y2="-4"  stroke="#fde68a" strokeWidth="4" strokeLinecap="round" transform="rotate(270 100 88)"/>
                <line x1="100" y1="8"  x2="100" y2="-4"  stroke="#fde68a" strokeWidth="4" strokeLinecap="round" transform="rotate(315 100 88)"/>
              </g>
              <path d="M68,96 Q64,62 100,52 Q136,62 132,96 Q130,112 100,120 Q70,112 68,96Z" fill="#fef9c3" filter="url(#hiw-glow2)"/>
              <path d="M68,96 Q64,62 100,52 Q136,62 132,96 Q130,112 100,120 Q70,112 68,96Z" fill="#fde68a" opacity=".55"/>
              <path d="M86,117 L86,105 Q100,91 114,105 L114,117" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <rect x="84" y="119" width="32" height="8"  rx="4"   fill="#fbbf24"/>
              <rect x="87" y="127" width="26" height="7"  rx="3.5" fill="#f59e0b"/>
              <rect x="90" y="134" width="20" height="6"  rx="3"   fill="#d97706"/>
            </svg>
          </div>
        </div>
        <p className={styles.sceneText}>
          That idea <em>keeps growing in your head</em>…<br />
          but never goes anywhere because the<br />
          <strong>tech world feels out of reach.</strong>
        </p>
      </div>

      {/* ══ SCENE 3: BOX ══ */}
      <div className={styles.scene} id="hiw-s3">
        <div style={{position:'relative',width:'200px',height:'200px',margin:'0 auto'}}>
          <div id="hiw-fallingBulb" style={{position:'absolute',left:'50%',top:'0',transform:'translateX(-50%)',opacity:'0',transition:'none',zIndex:10}}>
            <svg width="52" height="62" viewBox="0 0 52 62" fill="none">
              <circle cx="26" cy="22" r="18" fill="#fde68a" opacity=".25"/>
              <path d="M10,26 Q8,8 26,3 Q44,8 42,26 Q41,34 26,38 Q11,34 10,26Z" fill="#fef9c3"/>
              <path d="M10,26 Q8,8 26,3 Q44,8 42,26 Q41,34 26,38 Q11,34 10,26Z" fill="#fde68a" opacity=".55"/>
              <path d="M18,36 L18,29 Q26,21 34,29 L34,36" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <rect x="18" y="37" width="16" height="5"   rx="2.5" fill="#fbbf24"/>
              <rect x="20" y="42" width="12" height="4"   rx="2"   fill="#f59e0b"/>
              <rect x="22" y="46" width="8"  height="3.5" rx="1.75" fill="#d97706"/>
            </svg>
          </div>
          <svg id="hiw-boxSvg" width="200" height="200" viewBox="0 0 200 200" fill="none" style={{position:'absolute',top:0,left:0,overflow:'visible'}}>
            <defs>
              <linearGradient id="hiw-boxG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e3a5f"/>
                <stop offset="100%" stopColor="#0f1f38"/>
              </linearGradient>
            </defs>
            <g id="hiw-boxBody">
              <rect x="26" y="100" width="148" height="90" rx="8" fill="url(#hiw-boxG)" stroke="#2563eb" strokeWidth="2"/>
              <text x="100" y="131" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="800" fill="#60a5fa" letterSpacing="1">AKSANLABS</text>
              <line x1="34" y1="136" x2="166" y2="136" stroke="#1e3a5f" strokeWidth="1"/>
              <text x="62"  y="170" textAnchor="middle" fontSize="24">⚡</text>
              <text x="100" y="170" textAnchor="middle" fontSize="24">🔧</text>
              <text x="138" y="170" textAnchor="middle" fontSize="24">💡</text>
            </g>
            <g id="hiw-boxLid" style={{transformOrigin:'26px 100px',transform:'rotate(-55deg)'}}>
              <rect x="22" y="82" width="156" height="22" rx="6" fill="#2563eb"/>
              <rect x="22" y="82" width="156" height="22" rx="6" stroke="#3b82f6" strokeWidth="1" opacity=".5"/>
              <text x="100" y="97" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="800" fill="#fff" letterSpacing="1">AKSANLABS</text>
            </g>
            <g id="hiw-boxSparks" style={{opacity:0}}>
              <text id="hiw-bsp1" x="18"  y="88"  fontSize="18" style={{opacity:0}}>✨</text>
              <text id="hiw-bsp2" x="154" y="84"  fontSize="16" style={{opacity:0}}>⭐</text>
              <text id="hiw-bsp3" x="88"  y="72"  fontSize="17" style={{opacity:0}}>💫</text>
              <text id="hiw-bsp4" x="120" y="78"  fontSize="14" style={{opacity:0}}>✨</text>
            </g>
          </svg>
        </div>
        <p className={styles.sceneText} style={{minHeight:'80px'}}>
          <strong>What if there was a company</strong> that could turn<br />
          your amazing idea into <em>any technology<br />solution you can imagine?</em>
        </p>
      </div>

      {/* ══ SCENE 4: PRODUCTS ══ */}
      <div className={styles.scene} id="hiw-s4">
        <p style={{fontSize:'13px',fontWeight:700,color:'#a78bfa',letterSpacing:'.12em',textTransform:'uppercase',marginBottom:'16px'}}>We build it all</p>
        <div className={styles.products}>

          <div className={styles.productCard} id="hiw-pc1">
            <div className={styles.productIcon} style={{background:'#14532d',border:'2px solid #4ade8044'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="4" y="32" width="34" height="4" rx="2" fill="#166534"/>
                <rect x="6" y="8" width="30" height="24" rx="3" fill="#0d2b0d"/>
                <rect x="6" y="8" width="30" height="24" rx="3" stroke="#4ade80" strokeWidth="1.5"/>
                <rect x="7" y="9" width="28" height="5" rx="1.5" fill="#166534"/>
                <circle cx="10" cy="11.5" r="1.2" fill="#f87171"/>
                <circle cx="14" cy="11.5" r="1.2" fill="#fbbf24"/>
                <circle cx="18" cy="11.5" r="1.2" fill="#4ade80"/>
                <rect x="9" y="17" width="24" height="2.5" rx="1.25" fill="#4ade80" opacity=".7"/>
                <rect x="9" y="21" width="18" height="2" rx="1" fill="#166534"/>
                <rect x="9" y="25" width="22" height="2" rx="1" fill="#166534"/>
              </svg>
            </div>
            <div className={styles.productLabel}>Website</div>
            <div className={styles.productSub}>Fast &amp; beautiful</div>
          </div>

          <div className={styles.productCard} id="hiw-pc2">
            <div className={styles.productIcon} style={{background:'#1e3a5f',border:'2px solid #60a5fa44'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="12" y="4" width="18" height="34" rx="5" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.5"/>
                <rect x="17" y="5.5" width="8" height="2" rx="1" fill="#0f172a"/>
                <rect x="14" y="9" width="14" height="22" rx="2.5" fill="#0f1e38"/>
                <rect x="14" y="9" width="14" height="6" rx="2" fill="#2563eb"/>
                <rect x="16" y="17" width="10" height="2" rx="1" fill="#1e3a5f"/>
                <rect x="16" y="21" width="8" height="2" rx="1" fill="#1e3a5f"/>
                <rect x="16" y="25" width="10" height="4" rx="2" fill="#2563eb"/>
                <rect x="17" y="34" width="8" height="1.5" rx=".75" fill="#1e3a5f"/>
              </svg>
            </div>
            <div className={styles.productLabel}>Mobile App</div>
            <div className={styles.productSub}>iOS &amp; Android</div>
          </div>

          <div className={styles.productCard} id="hiw-pc3">
            <div className={styles.productIcon} style={{background:'#1c1917',border:'2px solid #f9731644'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="8" y="14" width="26" height="24" rx="2" fill="#1c1917" stroke="#f97316" strokeWidth="1.5"/>
                <rect x="8" y="14" width="26" height="6" rx="2" fill="#ea580c"/>
                <text x="21" y="19.5" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="4.5" fontWeight="800" fill="#fff">BIZ</text>
                <rect x="11" y="24" width="6" height="5" rx="1" fill="#fb923c" opacity=".7"/>
                <rect x="20" y="24" width="6" height="5" rx="1" fill="#fb923c" opacity=".7"/>
                <rect x="11" y="32" width="6" height="6" rx="1" fill="#ea580c"/>
                <rect x="20" y="32" width="6" height="6" rx="1" fill="#1c1917"/>
                <path d="M12,10 Q11,5 15,4 Q16,0 21,0 Q26,0 27,3 Q30,2 31,5 Q32,9 29,11 L13,11 Q11,11 12,10Z" fill="#f97316" opacity=".45"/>
                <line x1="21" y1="11" x2="21" y2="14" stroke="#f97316" strokeWidth="1.2" strokeDasharray="2,1.5" opacity=".7"/>
              </svg>
            </div>
            <div className={styles.productLabel}>Company<br />Solution</div>
            <div className={styles.productSub}>Full stack tech</div>
          </div>

          <div className={styles.productCard} id="hiw-pc4">
            <div className={styles.productIcon} style={{background:'#1e1b4b',border:'2px solid #818cf844'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="4" y="8" width="34" height="26" rx="4" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5"/>
                <text x="10" y="22" fontFamily="monospace" fontSize="8" fill="#818cf8" fontWeight="700">{'</>'}</text>
                <rect x="20" y="17" width="14" height="2" rx="1" fill="#6366f1" opacity=".6"/>
                <rect x="20" y="21" width="10" height="2" rx="1" fill="#6366f1" opacity=".4"/>
                <rect x="20" y="25" width="12" height="2" rx="1" fill="#6366f1" opacity=".4"/>
                <rect x="16" y="36" width="10" height="3" rx="1.5" fill="#4338ca"/>
                <rect x="14" y="34" width="14" height="2" rx="1" fill="#3730a3"/>
              </svg>
            </div>
            <div className={styles.productLabel}>Custom App</div>
            <div className={styles.productSub}>Built your way</div>
          </div>

          <div className={styles.productCard} id="hiw-pc5">
            <div className={styles.productIcon} style={{background:'#0c1a2e',border:'2px solid #38bdf844'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="4" y="6" width="28" height="22" rx="6" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5"/>
                <path d="M8,28 L4,34 L14,28Z" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1" strokeLinejoin="round"/>
                <circle cx="12" cy="17" r="2.5" fill="#38bdf8"/>
                <circle cx="18" cy="17" r="2.5" fill="#38bdf8" opacity=".7"/>
                <circle cx="24" cy="17" r="2.5" fill="#38bdf8" opacity=".4"/>
                <text x="28" y="12" fontSize="10">✨</text>
              </svg>
            </div>
            <div className={styles.productLabel}>AI Chatbot</div>
            <div className={styles.productSub}>24/7 answers</div>
          </div>

          <div className={styles.productCard} id="hiw-pc6">
            <div className={styles.productIcon} style={{background:'#14201a',border:'2px solid #34d39944'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="2"  y="4"  width="24" height="18" rx="5" fill="#064e3b" stroke="#34d399" strokeWidth="1.5"/>
                <rect x="16" y="18" width="24" height="18" rx="5" fill="#065f46" stroke="#34d399" strokeWidth="1.2" opacity=".85"/>
                <rect x="6"  y="10" width="16" height="2" rx="1" fill="#34d399" opacity=".8"/>
                <rect x="6"  y="14" width="10" height="2" rx="1" fill="#34d399" opacity=".5"/>
                <rect x="20" y="24" width="16" height="2" rx="1" fill="#6ee7b7" opacity=".8"/>
                <rect x="20" y="28" width="10" height="2" rx="1" fill="#6ee7b7" opacity=".5"/>
              </svg>
            </div>
            <div className={styles.productLabel}>Live Chat</div>
            <div className={styles.productSub}>Customer support</div>
          </div>

          <div className={styles.productCard} id="hiw-pc7">
            <div className={styles.productIcon} style={{background:'#1a1200',border:'2px solid #fbbf2444'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M4,6 L38,6 L26,20 L26,36 L16,36 L16,20 Z" fill="#78350f" stroke="#fbbf24" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="10" cy="3" r="2.5" fill="#fbbf24" opacity=".8"/>
                <circle cx="21" cy="3" r="2.5" fill="#fbbf24" opacity=".6"/>
                <circle cx="32" cy="3" r="2.5" fill="#fbbf24" opacity=".4"/>
                <text x="17" y="35" fontSize="10">⭐</text>
              </svg>
            </div>
            <div className={styles.productLabel}>Lead Gen</div>
            <div className={styles.productSub}>Grow your pipeline</div>
          </div>

          <div className={styles.productCard} id="hiw-pc8">
            <div className={styles.productIcon} style={{background:'#1a0f2e',border:'2px solid #c084fc44'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="14" cy="12" r="5" fill="#7e22ce" stroke="#c084fc" strokeWidth="1.2"/>
                <circle cx="28" cy="12" r="5" fill="#7e22ce" stroke="#c084fc" strokeWidth="1.2" opacity=".7"/>
                <path d="M4,30 Q4,22 14,22 Q24,22 24,30" fill="#581c87" stroke="#c084fc" strokeWidth="1.2"/>
                <path d="M20,28 Q20,22 28,22 Q36,22 36,28" fill="#581c87" stroke="#c084fc" strokeWidth="1.2" opacity=".6"/>
                <text x="21" y="40" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="6" fontWeight="800" fill="#c084fc">CRM</text>
              </svg>
            </div>
            <div className={styles.productLabel}>Customer CRM</div>
            <div className={styles.productSub}>Know your clients</div>
          </div>

          <div className={styles.productCard} id="hiw-pc9">
            <div className={styles.productIcon} style={{background:'#1a0a00',border:'2px solid #fb923c44'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="6" y="14" width="30" height="24" rx="4" fill="#431407" stroke="#fb923c" strokeWidth="1.5"/>
                <path d="M15,14 Q15,6 21,6 Q27,6 27,14" stroke="#fb923c" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <rect x="11" y="22" width="20" height="9" rx="2" fill="#7c2d12"/>
                <text x="21" y="29" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="6" fontWeight="800" fill="#fb923c">$SHOP</text>
              </svg>
            </div>
            <div className={styles.productLabel}>Online Store</div>
            <div className={styles.productSub}>Sell anything</div>
          </div>

          <div className={styles.productCard} id="hiw-pc10">
            <div className={styles.productIcon} style={{background:'#0f1a1a',border:'2px solid #2dd4bf44'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="4" y="8" width="34" height="30" rx="4" fill="#134e4a" stroke="#2dd4bf" strokeWidth="1.5"/>
                <rect x="4" y="8" width="34" height="9" rx="4" fill="#0f766e"/>
                <rect x="13" y="4" width="3" height="8" rx="1.5" fill="#2dd4bf"/>
                <rect x="26" y="4" width="3" height="8" rx="1.5" fill="#2dd4bf"/>
                <rect x="9"  y="22" width="4" height="4" rx="1" fill="#2dd4bf" opacity=".8"/>
                <rect x="16" y="22" width="4" height="4" rx="1" fill="#2dd4bf" opacity=".6"/>
                <rect x="23" y="22" width="4" height="4" rx="1" fill="#2dd4bf" opacity=".4"/>
                <rect x="30" y="22" width="4" height="4" rx="1" fill="#2dd4bf" opacity=".3"/>
                <rect x="9"  y="29" width="4" height="4" rx="1" fill="#2dd4bf" opacity=".5"/>
                <rect x="16" y="29" width="4" height="4" rx="1" fill="#2dd4bf" opacity=".3"/>
                <rect x="23" y="29" width="4" height="4" rx="1" fill="#2dd4bf" opacity=".8"/>
              </svg>
            </div>
            <div className={styles.productLabel}>Booking</div>
            <div className={styles.productSub}>Appointments made easy</div>
          </div>

          <div className={styles.productCard} id="hiw-pc11">
            <div className={styles.productIcon} style={{background:'#0f1723',border:'2px solid #a78bfa44'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="10" cy="10" r="6" fill="#4c1d95" stroke="#a78bfa" strokeWidth="1.5"/>
                <text x="10" y="13.5" textAnchor="middle" fontSize="7">📥</text>
                <line x1="16" y1="10" x2="20" y2="21" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="2,2"/>
                <circle cx="21" cy="26" r="6" fill="#4c1d95" stroke="#a78bfa" strokeWidth="1.5"/>
                <text x="21" y="29.5" textAnchor="middle" fontSize="7">⚙️</text>
                <line x1="27" y1="21" x2="32" y2="10" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="2,2"/>
                <circle cx="32" cy="10" r="6" fill="#4c1d95" stroke="#a78bfa" strokeWidth="1.5"/>
                <text x="32" y="13.5" textAnchor="middle" fontSize="7">📤</text>
              </svg>
            </div>
            <div className={styles.productLabel}>AI Workflow</div>
            <div className={styles.productSub}>Automate anything</div>
          </div>

          <div className={styles.productCard} id="hiw-pc12">
            <div className={styles.productIcon} style={{background:'#0a1628',border:'2px solid #93c5fd44'}}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <rect x="4"  y="6"  width="34" height="4" rx="1.5" fill="#1e3a5f" stroke="#93c5fd" strokeWidth="1.2"/>
                <rect x="4"  y="18" width="34" height="4" rx="1.5" fill="#1e3a5f" stroke="#93c5fd" strokeWidth="1.2"/>
                <rect x="4"  y="30" width="34" height="4" rx="1.5" fill="#1e3a5f" stroke="#93c5fd" strokeWidth="1.2"/>
                <rect x="7"  y="10" width="7" height="8" rx="1.5" fill="#1d4ed8"/>
                <rect x="16" y="10" width="7" height="8" rx="1.5" fill="#1d4ed8" opacity=".7"/>
                <rect x="25" y="10" width="7" height="8" rx="1.5" fill="#1d4ed8" opacity=".5"/>
                <rect x="7"  y="22" width="7" height="8" rx="1.5" fill="#1e40af"/>
                <rect x="16" y="22" width="7" height="8" rx="1.5" fill="#1e40af" opacity=".6"/>
              </svg>
            </div>
            <div className={styles.productLabel}>Inventory</div>
            <div className={styles.productSub}>Stock management</div>
          </div>

        </div>

        <p style={{fontSize:'13px',color:'#64748b',marginTop:'20px',lineHeight:1.6}}>
          No jargon. No enterprise pricing.<br />
          Just <strong style={{color:'#f1f5f9'}}>real results</strong> for your business.
        </p>

        <a className={styles.cta} id="hiw-ctaBtn" href="https://aksanlabs.com/#booking">
          Book a Free Call →
        </a>
        <br />
        <button className={styles.replay} id="hiw-replayBtn">
          ↩ Watch again
        </button>
      </div>

      {/* height anchor */}
      <div style={{height:'340px',visibility:'hidden',pointerEvents:'none'}} />

      {/* progress dots */}
      <div className={styles.dots}>
        <div className={`${styles.dot} ${styles.on}`} id="hiw-d1" style={{cursor:'pointer'}} />
        <div className={styles.dot} id="hiw-d2" style={{cursor:'pointer'}} />
        <div className={styles.dot} id="hiw-d3" style={{cursor:'pointer'}} />
        <div className={styles.dot} id="hiw-d4" style={{cursor:'pointer'}} />
      </div>

    </div>
  );
}
