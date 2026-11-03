import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#0f212e]">
      <head>
        <title>Бездепозитный бонус казино за регистрацию | Бездепозитные бонусы казино 2025</title>
        <meta name="description" content="Лучшие бездепозитные бонусы казино за регистрацию без первого взноса. Получите бездеп бонус прямо сейчас: фриспины, реальные бездепы в казино и топовые бонусы казино с выводом." />
        <link rel="canonical" href="https://bezdepcasino11.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0f212e" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bezdepcasino11.vercel.app/" />
        <meta property="og:title" content="Бездепозитный бонус казино за регистрацию | Топ бездепы" />
        <meta property="og:description" content="Эксклюзивный бездепозитный бонус казино за регистрацию. Актуальные бездепы казино, щедрый бездеп бонус и фриспины." />
        <meta property="og:image" content="https://bezdepcasino11.vercel.app/hero-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Бездепозитный бонус казино за регистрацию" />
        <meta name="twitter:description" content="Свежие бездепозитные бонусы за регистрацию в надежном онлайн-казино. Забирай свой бездеп бонус!" />
        <link rel="icon" href="/favicon-custom.png" type="image/png" />
      </head>
      <body className="antialiased bg-[#0f212e] text-[#b1bad3] min-h-screen">
        {children}
      </body>
    </html>
  )
}
