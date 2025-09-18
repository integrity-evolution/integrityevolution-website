// Business site worker - serves static HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Services | canbuild.ai</title>
    <meta name="description" content="Done-for-you AI development and consulting services">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
    
    <style>
        :root {
            --tech-white: #FAFAFA;
            --pure-white: #FFFFFF;
            --tech-black: #0A0A0A;
            --soft-gray: #6B7280;
            --light-gray: #F3F4F6;
            --tech-blue: #0066FF;
            --warm-gray: #E5E7EB;
            --accent-violet: #8B5CF6;
            --bauhaus-red: #E63946;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--tech-white);
            color: var(--tech-black);
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header {
            background: rgba(250, 250, 250, 0.95);
            backdrop-filter: blur(20px);
            padding: 1.5rem 2rem;
            border-bottom: 3px solid var(--bauhaus-red);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 1px;
            color: var(--tech-black);
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
        }

        .nav-link {
            color: var(--soft-gray);
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.3s ease;
        }

        .nav-link:hover {
            color: var(--tech-blue);
        }

        .main-content {
            flex: 1;
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        .hero-section {
            text-align: center;
            margin-bottom: 4rem;
        }

        .hero-title {
            font-size: 3rem;
            font-weight: 300;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--soft-gray);
            margin-bottom: 2rem;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }

        .service-card {
            background: var(--pure-white);
            border: 1px solid var(--warm-gray);
            border-radius: 12px;
            padding: 2rem;
            transition: all 0.3s ease;
        }

        .service-card:hover {
            border-color: var(--tech-blue);
            box-shadow: 0 10px 30px rgba(0, 102, 255, 0.1);
            transform: translateY(-2px);
        }

        .service-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--accent-violet) 0%, var(--tech-blue) 100%);
            border-radius: 12px;
            margin-bottom: 1.5rem;
        }

        .service-icon .material-symbols-outlined {
            color: var(--pure-white);
            font-size: 24px;
        }

        .service-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--tech-black);
        }

        .service-description {
            color: var(--soft-gray);
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }

        .service-features {
            list-style: none;
            padding: 0;
        }

        .service-features li {
            padding: 0.5rem 0;
            color: var(--soft-gray);
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .service-features li::before {
            content: '✓';
            color: var(--tech-blue);
            font-weight: bold;
        }

        .cta-section {
            text-align: center;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(0, 102, 255, 0.05) 100%);
            border-radius: 20px;
            padding: 3rem;
            margin-top: 4rem;
        }

        .cta-title {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .cta-subtitle {
            color: var(--soft-gray);
            margin-bottom: 2rem;
        }

        .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, var(--accent-violet) 0%, var(--tech-blue) 100%);
            color: var(--pure-white);
            padding: 1rem 2rem;
            font-size: 1.1rem;
            font-weight: 500;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(0, 102, 255, 0.3);
        }

        .footer {
            background: var(--light-gray);
            padding: 2rem;
            text-align: center;
            margin-top: auto;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            color: var(--soft-gray);
        }

        @media (max-width: 768px) {
            .hero-title {
                font-size: 2rem;
            }

            .services-grid {
                grid-template-columns: 1fr;
            }

            .nav-links {
                display: none;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-content">
            <a href="https://canbuild.ai" class="logo">canbuild.ai</a>
            <nav class="nav-links">
                <a href="https://canbuild.ai" class="nav-link">Bootcamp</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>
        </div>
    </header>

    <main class="main-content">
        <section class="hero-section">
            <h1 class="hero-title">Built For You</h1>
            <p class="hero-subtitle">When you need it built right, built fast, and built by experts</p>
        </section>

        <section id="services" class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <span class="material-symbols-outlined">devices</span>
                </div>
                <h2 class="service-title">Product</h2>
                <p class="service-description">
                    End-to-end AI product development. From initial concept to production deployment, we build custom solutions tailored to your specific needs.
                </p>
                <ul class="service-features">
                    <li>Full-stack application development</li>
                    <li>Custom AI model integration</li>
                    <li>Process automation & intelligent systems</li>
                    <li>Cloud deployment with scaling</li>
                    <li>Data pipeline development</li>
                    <li>Enterprise integration</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <span class="material-symbols-outlined">rocket_launch</span>
                </div>
                <h2 class="service-title">MVP Development</h2>
                <p class="service-description">
                    Full-stack AI application development from concept to deployment. We build your MVP with production-ready code.
                </p>
                <ul class="service-features">
                    <li>Complete application development</li>
                    <li>AI integration (Claude, GPT, etc.)</li>
                    <li>Cloud deployment & scaling</li>
                    <li>2-4 week turnaround</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <span class="material-symbols-outlined">business_center</span>
                </div>
                <h2 class="service-title">Business Strategy</h2>
                <p class="service-description">
                    Strategic consulting to define your AI product vision, market positioning, and technical roadmap.
                </p>
                <ul class="service-features">
                    <li>Product strategy sessions</li>
                    <li>Market analysis & positioning</li>
                    <li>Technical architecture planning</li>
                    <li>Go-to-market strategy</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <span class="material-symbols-outlined">engineering</span>
                </div>
                <h2 class="service-title">Custom AI Solutions</h2>
                <p class="service-description">
                    Tailored AI implementations for specific business needs, from automation to intelligent systems.
                </p>
                <ul class="service-features">
                    <li>Custom AI model integration</li>
                    <li>Process automation</li>
                    <li>Data pipeline development</li>
                    <li>Enterprise integration</li>
                </ul>
            </div>

            <div class="service-card">
                <div class="service-icon">
                    <span class="material-symbols-outlined">school</span>
                </div>
                <h2 class="service-title">Team Training</h2>
                <p class="service-description">
                    Upskill your team with customized AI development training tailored to your tech stack and goals.
                </p>
                <ul class="service-features">
                    <li>Custom curriculum design</li>
                    <li>Hands-on workshops</li>
                    <li>Code reviews & mentoring</li>
                    <li>Best practices implementation</li>
                </ul>
            </div>
        </section>

        <section id="contact" class="cta-section">
            <h2 class="cta-title">Ready to Build Something Amazing?</h2>
            <p class="cta-subtitle">Let's discuss your project and how we can help bring it to life</p>
            <a href="mailto:business@canbuild.ai" class="cta-button">
                <span class="material-symbols-outlined">mail</span>
                Contact Us
            </a>
        </section>
    </main>

    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 canbuild.ai • Enterprise AI Development Services</p>
        </div>
    </footer>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
        'X-XSS-Protection': '1; mode=block',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    });
  },
};