import React from "react";

export default function MateriyaPrintLanding() {
  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top left, rgba(255, 180, 0, 0.16), transparent 28%), radial-gradient(circle at top right, rgba(255, 79, 216, 0.12), transparent 26%), radial-gradient(circle at bottom right, rgba(49, 200, 255, 0.12), transparent 28%), #07070a",
      color: "#ffffff",
      fontFamily:
        'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "24px 20px 56px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      marginBottom: 42,
      flexWrap: "wrap",
    },
    brand: {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    logo: {
      width: 52,
      height: 52,
      borderRadius: 18,
      display: "grid",
      placeItems: "center",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
      fontWeight: 900,
      letterSpacing: "0.08em",
      color: "#ffcf4a",
    },
    brandText: {
      lineHeight: 1.2,
    },
    smallCaps: {
      fontSize: 12,
      letterSpacing: "0.35em",
      color: "rgba(255,255,255,0.55)",
    },
    subtitle: {
      marginTop: 4,
      fontSize: 13,
      color: "rgba(255,255,255,0.42)",
    },
    heroGrid: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 28,
      alignItems: "center",
    },
    pill: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 16px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.05)",
      color: "rgba(255,255,255,0.82)",
      fontSize: 14,
      marginBottom: 18,
    },
    h1: {
      margin: 0,
      fontSize: "clamp(44px, 8vw, 80px)",
      lineHeight: 0.95,
      fontWeight: 900,
      letterSpacing: "-0.04em",
    },
    gradientText: {
      display: "block",
      background: "linear-gradient(90deg, #ffb000, #ff4fd8, #31c8ff)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
    heroText: {
      marginTop: 22,
      maxWidth: 720,
      fontSize: 18,
      lineHeight: 1.8,
      color: "rgba(255,255,255,0.72)",
    },
    buttons: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      marginTop: 28,
    },
    primaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      padding: "14px 22px",
      borderRadius: 999,
      border: "none",
      background: "linear-gradient(90deg, #ffb000, #ff4fd8, #31c8ff)",
      color: "#0b0b0f",
      fontWeight: 700,
      textDecoration: "none",
    },
    secondaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "14px 22px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.05)",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 600,
    },
    heroStats: {
      marginTop: 28,
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 12,
    },
    statCard: {
      borderRadius: 22,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      padding: 16,
    },
    statTitle: {
      fontSize: 18,
      fontWeight: 800,
      marginBottom: 6,
    },
    statText: {
      fontSize: 13,
      color: "rgba(255,255,255,0.6)",
      lineHeight: 1.6,
    },
    mockupCard: {
      borderRadius: 34,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
      padding: 18,
      backdropFilter: "blur(10px)",
    },
    mockupInner: {
      borderRadius: 26,
      border: "1px solid rgba(255,255,255,0.08)",
      background: "#0c0c11",
      padding: 18,
    },
    mockupHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
      marginBottom: 18,
      flexWrap: "wrap",
    },
    tag: {
      fontSize: 12,
      letterSpacing: "0.28em",
      color: "rgba(255,255,255,0.45)",
      textTransform: "uppercase",
    },
    badge: {
      fontSize: 12,
      padding: "8px 12px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.05)",
      color: "rgba(255,255,255,0.72)",
    },
    mockupMain: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: 16,
    },
    mainPanel: {
      minHeight: 220,
      borderRadius: 26,
      padding: 22,
      background:
        "linear-gradient(135deg, rgba(255,176,0,0.22), rgba(255,79,216,0.18), rgba(49,200,255,0.18))",
      border: "1px solid rgba(255,255,255,0.08)",
    },
    mainPanelTitle: {
      fontSize: 14,
      color: "rgba(255,255,255,0.78)",
      marginBottom: 10,
    },
    mainPanelText: {
      fontSize: 34,
      lineHeight: 1.08,
      fontWeight: 900,
      maxWidth: 240,
      margin: 0,
    },
    mainPanelNote: {
      marginTop: 16,
      fontSize: 14,
      color: "rgba(255,255,255,0.82)",
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    sideStack: {
      display: "grid",
      gap: 12,
    },
    miniCard: {
      borderRadius: 22,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      padding: 16,
      color: "rgba(255,255,255,0.8)",
      minHeight: 60,
      display: "flex",
      alignItems: "center",
    },
    metricsRow: {
      marginTop: 16,
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 12,
    },
    metricBox: {
      borderRadius: 22,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      padding: 16,
      textAlign: "center",
    },
    metricNum: {
      fontSize: 26,
      fontWeight: 900,
      marginBottom: 4,
    },
    metricLabel: {
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.5)",
    },
    section: {
      marginTop: 68,
    },
    sectionHead: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      gap: 12,
      marginBottom: 22,
      flexWrap: "wrap",
    },
    sectionTitle: {
      margin: 0,
      fontSize: "clamp(28px, 4vw, 42px)",
      fontWeight: 900,
      letterSpacing: "-0.03em",
    },
    sectionHint: {
      color: "rgba(255,255,255,0.55)",
      fontSize: 14,
      maxWidth: 380,
      lineHeight: 1.7,
    },
    serviceGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: 14,
    },
    serviceCard: {
      borderRadius: 24,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      padding: 18,
      minHeight: 180,
    },
    serviceIcon: {
      width: 44,
      height: 44,
      borderRadius: 16,
      display: "grid",
      placeItems: "center",
      background: "linear-gradient(135deg, rgba(255,176,0,0.18), rgba(255,79,216,0.12), rgba(49,200,255,0.12))",
      color: "#ffcf4a",
      marginBottom: 14,
      fontSize: 20,
    },
    serviceTitle: {
      fontSize: 20,
      fontWeight: 800,
      marginBottom: 8,
    },
    serviceText: {
      fontSize: 14,
      lineHeight: 1.8,
      color: "rgba(255,255,255,0.64)",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: 16,
      alignItems: "start",
    },
    benefitList: {
      display: "grid",
      gap: 12,
      marginTop: 16,
    },
    benefitItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: 16,
      borderRadius: 22,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
    },
    benefitDot: {
      width: 22,
      height: 22,
      borderRadius: 999,
      background: "#ffcf4a",
      color: "#111",
      display: "grid",
      placeItems: "center",
      flexShrink: 0,
      fontWeight: 900,
      fontSize: 13,
      marginTop: 2,
    },
    benefitText: {
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.78)",
    },
    portfolioGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 14,
    },
    portfolioCard: {
      minHeight: 360,
      borderRadius: 26,
      border: "1px solid rgba(255,255,255,0.1)",
      background:
        "radial-gradient(circle at top, rgba(255,176,0,0.12), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
      padding: 18,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    portfolioTop: {
      display: "flex",
      justifyContent: "space-between",
      gap: 10,
      alignItems: "center",
      color: "rgba(255,255,255,0.52)",
      fontSize: 12,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
    },
    portfolioPreview: {
      height: 160,
      borderRadius: 22,
      background:
        "linear-gradient(135deg, rgba(255,176,0,0.2), rgba(255,79,216,0.16), rgba(49,200,255,0.16))",
      border: "1px solid rgba(255,255,255,0.08)",
      marginTop: 20,
    },
    processGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: 14,
    },
    processCard: {
      borderRadius: 24,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      padding: 18,
    },
    step: {
      fontSize: 12,
      letterSpacing: "0.35em",
      color: "rgba(255,255,255,0.4)",
      marginBottom: 12,
    },
    processTitle: {
      fontSize: 20,
      fontWeight: 800,
      marginBottom: 8,
    },
    processText: {
      fontSize: 14,
      lineHeight: 1.8,
      color: "rgba(255,255,255,0.64)",
    },
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 16,
      alignItems: "center",
    },
    contactCard: {
      borderRadius: 28,
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      padding: 22,
    },
    contactList: {
      display: "grid",
      gap: 12,
      marginTop: 18,
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "rgba(255,255,255,0.78)",
      fontSize: 14,
    },
    footer: {
      marginTop: 52,
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      textAlign: "center",
      color: "rgba(255,255,255,0.42)",
      fontSize: 13,
    },
    accent: {
      color: "#ffcf4a",
      fontWeight: 700,
    },
    responsive: {
      "@media (max-width: 960px)": {
        heroGrid: { gridTemplateColumns: "1fr" },
        infoGrid: { gridTemplateColumns: "1fr" },
        contactGrid: { gridTemplateColumns: "1fr" },
        serviceGrid: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
        portfolioGrid: { gridTemplateColumns: "1fr" },
        processGrid: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
      },
      "@media (max-width: 640px)": {
        container: { padding: "18px 14px 42px" },
        heroStats: { gridTemplateColumns: "1fr" },
        metricsRow: { gridTemplateColumns: "1fr" },
        serviceGrid: { gridTemplateColumns: "1fr" },
        processGrid: { gridTemplateColumns: "1fr" },
        mockupMain: { gridTemplateColumns: "1fr" },
        header: { marginBottom: 28 },
      },
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.brand}>
            <div style={styles.logo}>MP</div>
            <div style={styles.brandText}>
              <div style={styles.smallCaps}>MATERIYA PRINT</div>
              <div style={styles.subtitle}>Дизайн • Друк • Реклама</div>
            </div>
          </div>
          <a href="#contact" style={styles.secondaryButton}>
            Зв'язатися
          </a>
        </header>

        <main style={styles.heroGrid}>
          <section>
            <div style={styles.pill}>✨ Стильна подача для бізнесу в Україні</div>
            <h1 style={styles.h1}>
              <span>ДИЗАЙН,</span>
              <span style={styles.gradientText}>ЯКИЙ ПРАЦЮЄ</span>
              <span>НА ВАШ БІЗНЕС</span>
            </h1>
            <p style={styles.heroText}>
              Materiya Print створює рекламні макети, фірмовий стиль і друковану
              продукцію, яка виглядає сучасно, зрозуміло та переконливо.
            </p>

            <div style={styles.buttons}>
              <a href="#contact" style={styles.primaryButton}>
                Замовити дизайн →
              </a>
              <a href="#services" style={styles.secondaryButton}>
                Дивитись послуги
              </a>
            </div>

            <div style={styles.heroStats}>
              <div style={styles.statCard}>
                <div style={styles.statTitle}>Швидко</div>
                <div style={styles.statText}>Підготовка без затримок</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statTitle}>Якісно</div>
                <div style={styles.statText}>Преміальна подача</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statTitle}>Під ключ</div>
                <div style={styles.statText}>Дизайн + друк</div>
              </div>
            </div>
          </section>

          <section style={styles.mockupCard} aria-label="Preview mockup">
            <div style={styles.mockupInner}>
              <div style={styles.mockupHeader}>
                <div>
                  <div style={styles.tag}>Instagram preview</div>
                  <div style={{ fontSize: 28, fontWeight: 900, marginTop: 8 }}>
                    Materiya Print
                  </div>
                </div>
                <div style={styles.badge}>Популярний стиль</div>
              </div>

              <div style={styles.mockupMain}>
                <div style={styles.mainPanel}>
                  <div style={styles.mainPanelTitle}>Дизайн + друк</div>
                  <h2 style={styles.mainPanelText}>Візитки, флаєри, банери</h2>
                  <div style={styles.mainPanelNote}>✔ Готово до запуску в рекламу</div>
                </div>
                <div style={styles.sideStack}>
                  <div style={styles.miniCard}>Для кав'ярень</div>
                  <div style={styles.miniCard}>Для салонів</div>
                  <div style={styles.miniCard}>Для магазинів</div>
                </div>
              </div>

              <div style={styles.metricsRow}>
                <div style={styles.metricBox}>
                  <div style={styles.metricNum}>25+</div>
                  <div style={styles.metricLabel}>типів макетів</div>
                </div>
                <div style={styles.metricBox}>
                  <div style={styles.metricNum}>1</div>
                  <div style={styles.metricLabel}>єдиний стиль</div>
                </div>
                <div style={styles.metricBox}>
                  <div style={styles.metricNum}>100%</div>
                  <div style={styles.metricLabel}>подача під бренд</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <section id="services" style={styles.section}>
          <div style={styles.sectionHead}>
            <div>
              <div style={styles.smallCaps}>ПОСЛУГИ</div>
              <h2 style={styles.sectionTitle}>Що ми робимо</h2>
            </div>
            <div style={styles.sectionHint}>
              Дизайн, який виглядає актуально для української аудиторії.
            </div>
          </div>

          <div style={styles.serviceGrid}>
            <ServiceCard
              icon="✎"
              title="Графічний дизайн"
              text="Логотипи, візитки, флаєри, банери, меню, прайси та оформлення соцмереж."
              styles={styles}
            />
            <ServiceCard
              icon="🖨"
              title="Друк під ключ"
              text="Підготовка макета, друк, перевірка якості та готовий результат без зайвих клопотів."
              styles={styles}
            />
            <ServiceCard
              icon="▦"
              title="Макети для бізнесу"
              text="Упаковка, постери, сертифікати, тейбл-тенти, зовнішня реклама та POS-матеріали."
              styles={styles}
            />
            <ServiceCard
              icon="◎"
              title="Instagram-дизайн"
              text="Креативи для реклами, пости, сторіс, обкладинки та візуальна система сторінки."
              styles={styles}
            />
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.infoGrid}>
            <div>
              <div style={styles.smallCaps}>ПЕРЕВАГИ</div>
              <h2 style={styles.sectionTitle}>Чому це працює</h2>
              <p style={styles.sectionHint}>
                Для малого бізнесу важливі не лише красиві картинки, а зрозуміла
                комунікація, впізнаваність і швидкий шлях до готового матеріалу.
              </p>

              <div style={styles.benefitList}>
                {[
                  "Сучасний стиль, який виглядає дорого",
                  "Швидка комунікація і зрозумілий процес",
                  "Макет + друк в одному місці",
                  "Акуратна подача для українського ринку",
                ].map((item) => (
                  <div key={item} style={styles.benefitItem}>
                    <div style={styles.benefitDot}>✓</div>
                    <div style={styles.benefitText}>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.portfolioGrid}>
              {[
                {
                  title: "Візитки",
                  subtitle: "Мінімалістичні та преміальні",
                  badge: "Популярно в Україні",
                },
                {
                  title: "Флаєри",
                  subtitle: "Для акцій, відкриттів і подій",
                  badge: "Швидкий продаж",
                },
                {
                  title: "Instagram Ads",
                  subtitle: "Пости, сторіс, креативи",
                  badge: "Для реклами",
                },
              ].map((item) => (
                <div key={item.title} style={styles.portfolioCard}>
                  <div>
                    <div style={styles.portfolioTop}>
                      <span>{item.badge}</span>
                      <span>◐</span>
                    </div>
                    <div style={{ marginTop: 18, fontSize: 28, fontWeight: 900 }}>
                      {item.title}
                    </div>
                    <div style={{ marginTop: 10, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                      {item.subtitle}
                    </div>
                  </div>
                  <div style={styles.portfolioPreview} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHead}>
            <div>
              <div style={styles.smallCaps}>ПРОЦЕС</div>
              <h2 style={styles.sectionTitle}>Простий процес без хаосу</h2>
            </div>
          </div>

          <div style={styles.processGrid}>
            {[
              ["01", "Обговорення", "Пишете, що потрібно: тип реклами, формат, стиль і терміни."],
              ["02", "Дизайн", "Готуємо концепцію та макет у фірмовому стилі Materiya Print."],
              ["03", "Друк", "Після затвердження запускаємо якісний друк без втрати деталей."],
              ["04", "Результат", "Ви отримуєте готовий матеріал, який можна одразу використовувати."],
            ].map(([step, title, text]) => (
              <div key={step} style={styles.processCard}>
                <div style={styles.step}>{step}</div>
                <div style={styles.processTitle}>{title}</div>
                <div style={styles.processText}>{text}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={styles.contactGrid}>
            <div>
              <div style={styles.smallCaps}>КОНТАКТИ</div>
              <h2 style={styles.sectionTitle}>Готові зробити ваш бренд помітним</h2>
              <p style={styles.sectionHint}>
                Напишіть у дірект або залиште заявку. Підберемо стиль, запропонуємо
                рішення та підготуємо дизайн під друк.
              </p>
            </div>

            <div style={styles.contactCard}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={styles.logo}>MP</div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>Materiya Print</div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
                    Дизайн • Друк • Реклама
                  </div>
                </div>
              </div>

              <div style={styles.contactList}>
                <div style={styles.contactItem}>⏱ Швидка відповідь у робочий час</div>
                <div style={styles.contactItem}>✔ Макет і друк під ключ</div>
                <div style={styles.contactItem}>✨ Сучасний стиль для Instagram та бізнесу</div>
              </div>

              <div style={{ marginTop: 18 }}>
                <a href="https://instagram.com" style={styles.primaryButton}>
                  Замовити консультацію →
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          © 2026 Materiya Print — Дизайн, який працює на ваш бізнес
        </footer>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, text, styles }) {
  return (
    <div style={styles.serviceCard}>
      <div style={styles.serviceIcon}>{icon}</div>
      <div style={styles.serviceTitle}>{title}</div>
      <div style={styles.serviceText}>{text}</div>
    </div>
  );
}
