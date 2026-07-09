const diplomas = {
    cert1: {
      title: "CSCO — Certified SME Cyber Security Officer",
      subtitle: "EU Cyber Academy · 06/02/2026 · ID: 6986058501c23a6b60010faa",
      body: `<p><strong>Certificação europeia em cibersegurança para Pequenas e Médias Empresas (PME).</strong></p><ul><li><strong>Gestão de Riscos:</strong> Identificação e mitigação de riscos cibernéticos</li><li><strong>Conformidade:</strong> Cumprimento de normas e regulamentos europeus</li><li><strong>Proteção de Ativos Digitais:</strong> Defesa de dados e infraestruturas</li><li><strong>Segurança em PME:</strong> Estratégias adaptadas a organizações de menor dimensão</li></ul><p><strong>Competências adquiridas:</strong> Cyber Security, Risk Management, Compliance, Digital Asset Protection</p>`,
      footer: 'Certificado emitido pela EU Cyber Academy · <a href="https://ricardocarola.pt/certificados/Certified%20CSCSO.jpg" target="_blank">📄 Ver certificado original (PNG)</a>'
    },
    cert2: {
      title: "C)ITP — Certified Information Technology Principles",
      subtitle: "Mile2 · 01/09/2026 · ID: 28044-176-799-8775",
      body: `<p><strong>Certificação internacional em princípios de tecnologias de informação.</strong></p><ul><li><strong>Fundamentos de TI:</strong> Arquitetura de computadores, sistemas operativos e redes</li><li><strong>Segurança da Informação:</strong> Princípios básicos de cibersegurança</li><li><strong>Redes:</strong> Protocolos, topologias e gestão de redes</li><li><strong>Gestão de Dados:</strong> Armazenamento, backup e recuperação</li></ul><p><strong>Competências adquiridas:</strong> IT Principles, Networking, Information Security, Data Management</p>`,
      footer: 'Certificado emitido pela Mile2 · <a href="https://ricardocarola.pt/certificados/Certified%20Information%20Technology%20Principles.jpg" target="_blank">📄 Ver certificado original (JPG)</a>'
    },
    cert3: {
      title: "CSP — Certified Security Principles",
      subtitle: "Mile2 · Válido até 01/06/2029 · ID: 28044-17-6-7-8-0-0989",
      body: `<p><strong>Certificação em princípios de segurança da informação.</strong></p><ul><li><strong>Fundamentos de Segurança:</strong> Conceitos base de cibersegurança</li><li><strong>Gestão de Riscos:</strong> Identificação, análise e mitigação de riscos</li><li><strong>Controlos de Segurança:</strong> Implementação de medidas de proteção</li><li><strong>Melhores Práticas:</strong> Standards e frameworks de segurança</li></ul><p><strong>Competências adquiridas:</strong> Security Principles, Risk Management, Security Controls, Best Practices</p>`,
      footer: 'Certificado emitido pela Mile2 · <a href="https://ricardocarola.pt/certificados/Certified%20Security%20Principles.pdf" target="_blank">📄 Ver certificado original (PDF)</a>'
    },
    cert4: {
      title: "COFPS — Certified Online Fraud Prevention Specialist",
      subtitle: "Hack & Fix · 28/06/2026 · ID: 2094-1322-5947-1486",
      body: `<p><strong>Especialização em prevenção de fraudes online.</strong></p><ul><li><strong>Deteção de Fraudes:</strong> Identificação de atividades suspeitas</li><li><strong>Proteção de Transações:</strong> Segurança em pagamentos digitais</li><li><strong>Análise Comportamental:</strong> Monitorização de padrões anómalos</li><li><strong>Resposta a Incidentes:</strong> Ação rápida em casos de fraude</li></ul><p><strong>Competências adquiridas:</strong> Fraud Prevention, Digital Security, Transaction Security, Incident Response</p>`,
      footer: 'Certificado emitido pela Hack & Fix · <a href="https://ricardocarola.pt/certificados/Certified%20COFPS.jpg" target="_blank">📄 Ver certificado original (JPG)</a> · <a href="https://ricardocarola.pt/certificados/Certified%20COFPS%20(JUN26).pdf" target="_blank">📄 PDF</a>'
    },
    cert5: {
      title: "Cyber Security 101 — Learning Path",
      subtitle: "TryHackMe · 16/01/2026 · Duração: 45h 23min",
      body: `<p><strong>Percurso formativo completo em cibersegurança.</strong></p><ul><li><strong>Fundamentos de Cibersegurança:</strong> Conceitos base e terminologia</li><li><strong>Redes:</strong> Protocolos, arquitetura e segurança de redes</li><li><strong>Sistemas Operativos:</strong> Segurança em Windows e Linux</li><li><strong>Técnicas de Ataque/Defesa:</strong> Metodologias de ataque e defesa</li></ul><p><strong>Competências adquiridas:</strong> Cyber Security, Networking, OS Security, Attack/Defense Techniques</p>`,
      footer: 'Certificado emitido pela TryHackMe · <a href="https://ricardocarola.pt/certificados/Cyber%20Security%20101.jpg" target="_blank">📄 Ver certificado original (JPG)</a>'
    },
    cert6: {
      title: "Pre Security — Learning Path",
      subtitle: "TryHackMe · 06/11/2025 · Duração: 7h 38min",
      body: `<p><strong>Curso introdutório de pré-segurança.</strong></p><ul><li><strong>Conceitos Fundamentais:</strong> Terminologia e conceitos base</li><li><strong>Redes:</strong> Noções básicas de redes e comunicação</li><li><strong>Sistemas:</strong> Introdução a sistemas operativos</li><li><strong>Preparação:</strong> Base para estudos avançados em segurança</li></ul><p><strong>Competências adquiridas:</strong> Pre Security, Networking Basics, Cyber Fundamentals</p>`,
      footer: 'Certificado emitido pela TryHackMe · <a href="https://ricardocarola.pt/certificados/THM-Pre%20Security%20Course.pdf" target="_blank">📄 Ver certificado original (PDF)</a>'
    },
    cert7: {
      title: "Cyber Defender Course — Operador de Ciberdefesa",
      subtitle: "Academia Militar — CAIH · dez. 2024 - abr. 2025",
      body: `<p><strong>Curso operacional de 450 horas em defesa cibernética.</strong></p><ul><li><strong>Cyber Defense Operations:</strong> Operações de defesa cibernética</li><li><strong>Incident Response & Forensic Analysis:</strong> Resposta a incidentes e análise forense</li><li><strong>Network & System Security:</strong> Segurança de redes e sistemas</li><li><strong>Threat Hunting:</strong> Caça a ameaças</li><li><strong>Security Operations Center (SOC):</strong> Operações em centro de segurança</li></ul><p><strong>Competências adquiridas:</strong> Incident Response, Forensics, Network Security, SOC Operations</p>`,
      footer: 'Certificado emitido pela Academia Militar · <a href="https://ricardocarola.pt/certificados/CyberDefender.jpg" target="_blank">📄 Ver certificado original</a>'
    },
    cert8: {
      title: "Cyber Operations Course — Operações em Ciberdefesa",
      subtitle: "Academia Militar — CAIH · out. 2025 - dez. 2025",
      body: `<p><strong>Curso avançado em operações de ciberdefesa.</strong></p><ul><li><strong>Penetration Testing:</strong> Metodologias e ferramentas de teste de intrusão</li><li><strong>Vulnerability Discovery:</strong> Descoberta de vulnerabilidades</li><li><strong>Advanced Exploitation:</strong> Técnicas avançadas de exploração</li><li><strong>Web Attacks:</strong> Ataques a aplicações web</li></ul><p><strong>Competências adquiridas:</strong> Ethical Hacking, Penetration Testing, Web Security, Exploit Development</p>`,
      footer: 'Certificado emitido pela Academia Militar · <a href="https://ricardocarola.pt/certificados/CyberOperations.jpg" target="_blank">📄 Ver certificado original</a>'
    },
    cert9: {
      title: "Curso Avançado de Operações em Ciberdefesa",
      subtitle: "Escola de Tecnologias Navais — Escola de Ciberdefesa · set. 2023 - dez. 2023",
      body: `<p><strong>Curso especializado de 420 horas em operações avançadas de ciberdefesa.</strong></p><ul><li><strong>Web Attacks:</strong> Técnicas de ataque a aplicações web</li><li><strong>MicroTik Security:</strong> Segurança ofensiva com equipamentos MicroTik</li><li><strong>Buffer Overflow:</strong> Exploração de vulnerabilidades</li><li><strong>Communication Obfuscation:</strong> Técnicas de ocultação de comunicações</li></ul><p><strong>Competências adquiridas:</strong> Web Attacks, Buffer Overflow, Offensive Security</p>`,
      footer: 'Certificado emitido pela Escola de Tecnologias Navais · <a href="#" target="_blank">📄 Ver certificado original</a>'
    },
    cert10: {
      title: "Mile2 — Network Security & Defense",
      subtitle: "Mile2 Cybersecurity Institute",
      body: `<p><strong>Certificações internacionais em segurança de redes e defesa.</strong></p><ul><li><strong>Network Security:</strong> Segurança e defesa de redes</li><li><strong>Threat Intelligence:</strong> Inteligência de ameaças</li><li><strong>Incident Response:</strong> Resposta a incidentes</li><li><strong>Vulnerability Management:</strong> Gestão de vulnerabilidades</li></ul><p><strong>Competências adquiridas:</strong> Network Security, Threat Intelligence, Incident Response, Vulnerability Management</p>`,
      footer: 'Certificações emitidas pela Mile2 · <a href="https://ricardocarola.pt/certificados/Network Security and Defense Certification.jpg" target="_blank">📄 Ver certificado original</a>'
    },
    cert11: {
      title: "Red Team Leaders - C++ Practitioner",
      subtitle: "Red Team Leaders",
      body: `<p><strong>Certificações internacionais em segurança de redes e defesa.</strong></p><ul><li><strong>Network Security:</strong> Segurança e defesa de redes</li><li><strong>Threat Intelligence:</strong> Inteligência de ameaças</li><li><strong>Incident Response:</strong> Resposta a incidentes</li><li><strong>Vulnerability Management:</strong> Gestão de vulnerabilidades</li></ul><p><strong>Competências adquiridas:</strong> Network Security, Threat Intelligence, Incident Response, Vulnerability Management</p>`,
      footer: 'Certificações emitidas pela Red Team Leaders · <a href="https://ricardocarola.pt/certificados/C++.png" target="_blank">📄 Ver certificado original</a>'
    },
    cert12: {
      title: "ISO/IEC 27001:2022 — Information Security Associate",
      subtitle: "SkillFront · 04/03/2026 · ID: 55771769286696",
      body: `<p><strong>Certificação profissional acreditada em Segurança da Informação segundo a norma ISO/IEC 27001:2022.</strong></p><ul><li><strong>Sistema de Gestão de Segurança da Informação (SGSI):</strong> Princípios e requisitos da norma</li><li><strong>Gestão de Riscos:</strong> Identificação e tratamento de riscos de segurança da informação</li><li><strong>Controlos de Segurança:</strong> Implementação de controlos do Anexo A</li><li><strong>Conformidade:</strong> Auditoria e melhoria contínua</li></ul><p><strong>Competências adquiridas:</strong> Information Security, ISO 27001, Risk Management, ISMS</p>`,
      footer: 'Certificado emitido pela SkillFront · <a href="https://ricardocarola.pt/certificados/ISO%20IEC%2027001%20Information%20Security%20Associate.jpg" target="_blank">📄 Ver certificado original (JPG)</a>'
    },
    cert13: {
      title: "Foundations of Business and Entrepreneurship",
      subtitle: "SkillFront · 05/01/2026 · ID: 68916186686590",
      body: `<p><strong>Certificação profissional acreditada em fundamentos de negócios e empreendedorismo.</strong></p><ul><li><strong>Fundamentos de Negócio:</strong> Conceitos essenciais de gestão empresarial</li><li><strong>Empreendedorismo:</strong> Desenvolvimento de ideias e modelos de negócio</li><li><strong>Planeamento Estratégico:</strong> Definição de objetivos e estratégias</li></ul><p><strong>Competências adquiridas:</strong> Business Fundamentals, Entrepreneurship, Strategic Planning</p>`,
      footer: 'Certificado emitido pela SkillFront · <a href="https://ricardocarola.pt/certificados/Foundations%20of%20Business.jpg" target="_blank">📄 Ver certificado original (JPG)</a>'
    },
    cert14: {
      title: "ACS-CD-FOC — Foundations of Cybersecurity Certification",
      subtitle: "Mile2 · 28/01/2025 · Válido até 28/01/2028 · ID: 28044-173-812-2911",
      body: `<p><strong>Certificação internacional em fundamentos de cibersegurança.</strong></p><ul><li><strong>Conceitos Base:</strong> Terminologia e princípios fundamentais de cibersegurança</li><li><strong>Ameaças e Vulnerabilidades:</strong> Identificação de riscos comuns</li><li><strong>Boas Práticas:</strong> Frameworks e normas de referência (NIST, CNSS)</li></ul><p><strong>Competências adquiridas:</strong> Cyber Security Fundamentals, Threat Awareness, Security Best Practices</p>`,
      footer: 'Certificado emitido pela Mile2 · <a href="https://ricardocarola.pt/certificados/Foundations%20of%20Cybersecurity%20Certification.jpg" target="_blank">📄 Ver certificado original (JPG)</a>'
    },
    cert15: {
      title: "ACS-CD-IRM — Incident Response and Management",
      subtitle: "Mile2 · 02/04/2025 · Válido até 01/04/2028 · ID: 28044-174-360-4609",
      body: `<p><strong>Certificação internacional em resposta e gestão de incidentes de cibersegurança.</strong></p><ul><li><strong>Ciclo de Resposta a Incidentes:</strong> Preparação, deteção, contenção, erradicação e recuperação</li><li><strong>Gestão de Crises:</strong> Coordenação e comunicação durante incidentes</li><li><strong>Análise Pós-Incidente:</strong> Lições aprendidas e melhoria contínua</li></ul><p><strong>Competências adquiridas:</strong> Incident Response, Incident Management, Crisis Coordination</p>`,
      footer: 'Certificado emitido pela Mile2 · <a href="https://ricardocarola.pt/certificados/Incident%20Response%20and%20Management.jpg" target="_blank">📄 Ver certificado original (JPG)</a>'
    },
    cert16: {
      title: "Introduction to Network Analysis",
      subtitle: "Security Blue Team · 05/03/2026 · ID: 665486535",
      body: `<p><strong>Curso sobre fundamentos de análise de tráfego de rede.</strong></p><ul><li><strong>Fundamentos de Redes:</strong> Conceitos base de comunicação em rede</li><li><strong>Análise de PCAP:</strong> Utilização do Wireshark para análise de capturas</li><li><strong>Deteção de Tráfego Malicioso:</strong> Identificação de indicadores de compromisso num sistema comprometido simulado</li></ul><p><strong>Competências adquiridas:</strong> Network Analysis, Wireshark, Traffic Inspection</p>`,
      footer: 'Certificado emitido pela Security Blue Team · <a href="https://ricardocarola.pt/certificados/Introduction%20to%20Network%20Analysis.pdf" target="_blank">📄 Ver certificado original (PDF)</a>'
    },
    cert17: {
      title: "Introduction to OSINT",
      subtitle: "Security Blue Team · 23/02/2026 · ID: 783352373",
      body: `<p><strong>Curso introdutório sobre Open Source Intelligence (OSINT).</strong></p><ul><li><strong>Fontes de Dados:</strong> Recolha de informação a partir de fontes abertas</li><li><strong>Ferramentas e Técnicas:</strong> Metodologias de pesquisa e análise OSINT</li><li><strong>Aplicações Práticas:</strong> Utilidade para defensores, atacantes e organizações</li></ul><p><strong>Competências adquiridas:</strong> OSINT, Information Gathering, Threat Research</p>`,
      footer: 'Certificado emitido pela Security Blue Team · <a href="https://ricardocarola.pt/certificados/Introduction%20to%20OSINT.pdf" target="_blank">📄 Ver certificado original (PDF)</a>'
    },
    cert18: {
      title: "ISO 9001 — Quality Management Systems Associate",
      subtitle: "SkillFront · 05/04/2026 · ID: 03932217472180",
      body: `<p><strong>Certificação profissional acreditada em Sistemas de Gestão da Qualidade segundo a norma ISO 9001.</strong></p><ul><li><strong>Princípios da Qualidade:</strong> Fundamentos do sistema de gestão da qualidade</li><li><strong>Processos e Melhoria Contínua:</strong> Abordagem por processos e ciclo PDCA</li><li><strong>Conformidade e Auditoria:</strong> Requisitos normativos e auditorias internas</li></ul><p><strong>Competências adquiridas:</strong> Quality Management, ISO 9001, Process Improvement</p>`,
      footer: 'Certificado emitido pela SkillFront · <a href="https://ricardocarola.pt/certificados/ISO%209001%20Quality%20Management%20Systems%20Associate.jpg" target="_blank">📄 Ver certificado original (JPG)</a>'
    },
    cert19: {
      title: "ISO/IEC 20000 — IT Service Management Associate",
      subtitle: "SkillFront · 27/12/2025 · ID: 74429336574965",
      body: `<p><strong>Certificação profissional acreditada em Gestão de Serviços de TI segundo a norma ISO/IEC 20000.</strong></p><ul><li><strong>Gestão de Serviços de TI:</strong> Princípios e boas práticas de ITSM</li><li><strong>Ciclo de Vida do Serviço:</strong> Desenho, transição e operação de serviços</li><li><strong>Melhoria Contínua:</strong> Monitorização e otimização de serviços de TI</li></ul><p><strong>Competências adquiridas:</strong> IT Service Management, ISO 20000, Service Delivery</p>`,
      footer: 'Certificado emitido pela SkillFront · <a href="https://ricardocarola.pt/certificados/ISO%20IEC%2020000%20IT%20Service%20Management%20Associate.jpg" target="_blank">📄 Ver certificado original (JPG)</a>'
    }
  };

  // ===== TRADUÇÕES COMPLETAS =====
  const translations = {
    pt: {
      role: "Analista em Cibersegurança Defensiva Avançada",
      status: "Disponível para oportunidades",
      footer: "Cyber Portfolio · Feito com HTML/CSS · GitHub Pages",
      sobre: "Sobre",
      sobreP1: 'Sou um profissional com <strong>25 anos de experiência militar</strong> na Marinha de Guerra Portuguesa, atualmente a exercer funções como <strong>Analista em Operações de Cibersegurança Defensiva Avançada</strong> no Estado-Maior-General das Forças Armadas.',
      sobreP2: 'Especialista em <strong>Comunicações e Sistemas de Informação</strong>, com formações avançadas em <strong>Ciberdefesa</strong> pela Academia Militar e pela Escola de Ciberdefesa. Paralelamente, sou <strong>Monitor/Instrutor de Educação Física</strong> certificado, com passagem pelas principais escolas de formação da Marinha. Atualmente frequento a <strong>Licenciatura em Engenharia Informática</strong> na Universidade Aberta.',
      sobreP3: 'Com experiência em <strong>SIEM, IDS/IPS, Análise Forense, Threat Intelligence e Resposta a Incidentes</strong>, estou comprometido com a proteção de infraestruturas críticas e a defesa do ciberespaço nacional.',
      sobreP4: 'Considero-me, após diversos reconhecimentos militares ser executante de um <strong>extraordinário desempenho profissional</strong>, possuidor de uma <strong>elevada competência técnico-profissional</strong> e de <strong>relevantes qualidades pessoais</strong> demonstradas no cumprimento dos deveres como profissional nas mais diversas funções e áreas profissionais.',
      sobreP5: 'Militar <strong>competente</strong>, <strong>disciplinado</strong> e <strong>honesto</strong>, dotado de <strong>consistentes conhecimentos técnico-profissionais</strong>, de <strong>elevada capacidade de adaptação</strong>, com <strong>relevante espírito de camaradagem</strong> e demonstrando sempre <strong>elevada dedicação</strong> na realização das tarefas que são atribuídas, sendo alvo de elogios permanentes por para dos superiores hierárquicos.',
      sobreP6: 'Como Militar nestes quase vinte e cinco anos de carreira, no decorrer das mais diversas missões, dediquei o máximo de <strong>aptidão</strong>,  <strong>zelo</strong>,  <strong>dedicação</strong>, e  <strong>elevado sentido das responsabilidade</strong>, conjunto de características que permitiram assegurar, o <strong>cumprimento das responsabilidades</strong>, em <strong>elevados níveis de prontidão do serviço</strong>, influenciando, assim, de forma significativa, o <strong>excelente desempenho das Unidades Militares</strong>, no decorrer de toda a minha carreira como excelente militar e profissional.',
      statYears: "Anos de Exp.",
      statCerts: "Certificações",
      statLangs: "Idiomas",
      statMissions: "Missões",
      expTitle: "Experiência profissional",
      exp1When: "2024 — atual",
      exp1Title: "Analista em Operações de Cibersegurança Defensiva Avançada",
      exp1Org: "EMGFA · Lisboa",
      exp1L1: "<strong>Monitorização Contínua:</strong> Vigilância 24/7, SIEM, IDS/IPS e firewalls avançados.",
      exp1L2: "<strong>Deteção e Análise:</strong> Triagem de alertas, forense digital e reconstrução de ataques.",
      exp1L3: "<strong>Resposta a Incidentes:</strong> Contenção, erradicação e coordenação com CNCS, NATO e UE.",
      exp1L4: "<strong>Threat Intelligence:</strong> Feeds de inteligência e análise de adversários.",
      exp2When: "2002 — presente",
      exp2Title: "Operador de Comunicações e Sistemas de Informação",
      exp2Org: "Marinha de Guerra Portuguesa · Lisboa",
      exp2L1: "<strong>Operação de Sistemas:</strong> HF, VHF, UHF, SATCOM e sistemas táticos.",
      exp2L2: "<strong>COMSEC:</strong> Gestão de cifra e medidas EMCON.",
      exp2L3: "<strong>Manutenção Técnica:</strong> Diagnóstico e reparação de equipamentos.",
      exp2L4: "<strong>Missões:</strong> ATALANTA, TRIDENT JUNCTURE, JOINT WARRIOR.",
      exp3When: "2011 — presente",
      exp3Title: "Monitor/Instrutor de Educação Física",
      exp3Org: "Centro de Educação Física da Armada · Lisboa",
      exp3L1: "<strong>Instrução:</strong> EF militar, natação utilitária e sobrevivência aquática.",
      exp3L2: "<strong>Avaliação:</strong> Testes de Aptidão Física (TAF) e controlo biométrico.",
      exp3L3: "<strong>Organização:</strong> Torneios internos e competições militares.",
      exp4When: "2021 — presente",
      exp4Title: "Técnico de Informática e Programação",
      exp4Org: "Escola de Tecnologias Navais · Lisboa",
      exp4L1: "Programação (C, C++, Java, HTML, CSS, JavaScript)",
      exp4L2: "Sistemas operativos (Windows e Linux)",
      exp4L3: "Redes (LAN, protocolos, segurança)",
      formTitle: "Formação académica",
      form1When: "2025 — presente",
      form1Title: "Licenciatura em Engenharia Informática",
      form1Org: "Universidade Aberta · Lisboa",
      form1Desc: "Frequência do 1º ano. Metodologia e-learning com foco em raciocínio lógico, comunicação técnica e rigor profissional.",
      form2When: "2022 — 2023",
      form2Title: "Curso de Operações em Ciberdefesa (CTeSP)",
      form2Org: "Instituto Politécnico de Beja · Lisboa",
      form2Desc: "2440 horas. Módulos: Sistemas Operativos, Redes, Programação, Cibersegurança Defensiva/Ofensiva. Média: 15.11 valores.",
      form3When: "2021",
      form3Title: "Técnico de Informática e Sistemas de Computação e Hardware",
      form3Org: "Escola de Tecnologias Navais · Lisboa",
      form3Desc: "243 horas. Média: 16.92 valores. Certificado nº 0129/2021.",
      certsTitle: "Certificações e Cursos Avançados",
      skillsTitle: "Competências",
      prof1: "Cibersegurança",
      prof2: "Redes e Comunicações",
      prof3: "Programação",
      prof4: "Análise Forense",
      prof5: "Resposta a Incidentes",
      prof6: "Instrução Física",
      ctaTitle: "📡 Vamos conversar?",
      ctaDesc: "Se estás à procura de um especialista em cibersegurança, comunicações navais ou instrução física, envia-me uma mensagem.",
      ctaBtn: "✉ Enviar email",
      // Skills categories
      skillCat1: "🛡️ Cibersegurança",
      skillCat2: "📡 Redes e Comunicações",
      skillCat3: "💻 Programação",
      skillCat4: "🌐 Idiomas",
      skillCat5: "🏋️ Desporto e Instrução",
      skillCat6: "🎯 Interesses",
      langPt: "Português — Nativo",
      langEn: "Inglês — B2 (Upper-Intermediate)",
      langFr: "Francês — Intermédio",
      langEs: "Espanhol — Intermédio",
      // Certificates
      cert1Title: "CSCO — Certified SME Cyber Security Officer",
      cert1Meta: "EU Cyber Academy · 06/02/2026 · ID: 6986058501c23a6b60010faa",
      cert1Desc: "Certificação europeia em cibersegurança para PME, abrangendo gestão de riscos, conformidade e proteção de ativos digitais.",
      cert2Title: "C)ITP — Certified Information Technology Principles",
      cert2Meta: "Mile2 · 01/09/2026 · ID: 28044-176-799-8775",
      cert2Desc: "Certificação internacional em princípios de tecnologias de informação, abrangendo fundamentos de TI, redes e segurança.",
      cert3Title: "CSP — Certified Security Principles",
      cert3Meta: "Mile2 · Válido até 01/06/2029 · ID: 28044-17-6-7-8-0-0989",
      cert3Desc: "Certificação em princípios de segurança, abordando fundamentos de cibersegurança, gestão de riscos e melhores práticas.",
      cert4Title: "COFPS — Certified Online Fraud Prevention Specialist",
      cert4Meta: "Hack & Fix · 28/06/2026 · ID: 2094-1322-5947-1486",
      cert4Desc: "Especialização em prevenção de fraudes online, deteção de atividades suspeitas e proteção de transações digitais.",
      cert5Title: "Cyber Security 101 — Learning Path",
      cert5Meta: "TryHackMe · 16/01/2026 · Duração: 45h 23min",
      cert5Desc: "Percurso formativo completo em cibersegurança, abrangendo fundamentos, redes, sistemas operativos e técnicas de ataque/defesa.",
      cert6Title: "Pre Security — Learning Path",
      cert6Meta: "TryHackMe · 06/11/2025 · Duração: 7h 38min",
      cert6Desc: "Curso introdutório de pré-segurança, abordando conceitos fundamentais de redes, sistemas e cibersegurança.",
      cert7Title: "Cyber Defender Course — Operador de Ciberdefesa",
      cert7Meta: "Academia Militar — CAIH · dez. 2024 - abr. 2025",
      cert7Desc: "450 horas operacionais com foco em Cyber Defense Operations, Incident Response & Forensic Analysis, Network & System Security.",
      cert8Title: "Cyber Operations Course — Operações em Ciberdefesa",
      cert8Meta: "Academia Militar — CAIH · out. 2025 - dez. 2025",
      cert8Desc: "Curso avançado em operações de ciberdefesa com foco em testes de penetração, descoberta de vulnerabilidades e exploração avançada.",
      cert9Title: "Curso Avançado de Operações em Ciberdefesa",
      cert9Meta: "Escola de Tecnologias Navais — Escola de Ciberdefesa · set. 2023 - dez. 2023",
      cert9Desc: "420 horas. Ataques na Web, Segurança Ofensiva com MicroTik, Buffer Overflow, Obfuscação de Comunicações.",
      cert10Title: "Mile2 — Network Security & Defense",
      cert10Meta: "Mile2 Cybersecurity Institute",
      cert10Desc: "Certificações internacionais em segurança de redes e defesa, threat intelligence e resposta a incidentes.",
      cert11Title: "Red Team Leaders - C++ Practitioner",
      cert11Meta: "Red Team Leaders",
      cert11Desc: "Certificação em C++ Practitioner",
      cert12Title: "ISO/IEC 27001:2022 — Information Security Associate",
      cert12Meta: "SkillFront · 04/03/2026 · ID: 55771769286696",
      cert12Desc: "Certificação acreditada em Segurança da Informação segundo a norma ISO/IEC 27001:2022, abrangendo SGSI, gestão de riscos e controlos de segurança.",
      cert13Title: "Foundations of Business and Entrepreneurship",
      cert13Meta: "SkillFront · 05/01/2026 · ID: 68916186686590",
      cert13Desc: "Certificação acreditada em fundamentos de negócios e empreendedorismo, incluindo gestão empresarial e planeamento estratégico.",
      cert14Title: "ACS-CD-FOC — Foundations of Cybersecurity Certification",
      cert14Meta: "Mile2 · 28/01/2025 · Válido até 28/01/2028 · ID: 28044-173-812-2911",
      cert14Desc: "Certificação internacional em fundamentos de cibersegurança, abrangendo conceitos base, ameaças e boas práticas.",
      cert15Title: "ACS-CD-IRM — Incident Response and Management",
      cert15Meta: "Mile2 · 02/04/2025 · Válido até 01/04/2028 · ID: 28044-174-360-4609",
      cert15Desc: "Certificação internacional em resposta e gestão de incidentes de cibersegurança, abrangendo o ciclo completo de resposta.",
      cert16Title: "Introduction to Network Analysis",
      cert16Meta: "Security Blue Team · 05/03/2026 · ID: 665486535",
      cert16Desc: "Curso sobre fundamentos de análise de tráfego de rede, utilização do Wireshark e deteção de tráfego malicioso.",
      cert17Title: "Introduction to OSINT",
      cert17Meta: "Security Blue Team · 23/02/2026 · ID: 783352373",
      cert17Desc: "Curso introdutório sobre Open Source Intelligence (OSINT), fontes de dados, ferramentas e aplicações práticas.",
      cert18Title: "ISO 9001 — Quality Management Systems Associate",
      cert18Meta: "SkillFront · 05/04/2026 · ID: 03932217472180",
      cert18Desc: "Certificação acreditada em Sistemas de Gestão da Qualidade segundo a norma ISO 9001, abrangendo processos e melhoria contínua.",
      cert19Title: "ISO/IEC 20000 — IT Service Management Associate",
      cert19Meta: "SkillFront · 27/12/2025 · ID: 74429336574965",
      cert19Desc: "Certificação acreditada em Gestão de Serviços de TI segundo a norma ISO/IEC 20000, abrangendo o ciclo de vida do serviço.",
      viewDiploma: "📄 Ver Diploma"
    },
    en: {
      role: "Advanced Defensive Cybersecurity Operations Analyst",
      status: "Available for opportunities",
      footer: "Cyber Portfolio · Built with HTML/CSS · GitHub Pages",
      sobre: "About",
      sobreP1: 'I am a professional with <strong>25 years of military experience</strong> in the Portuguese Navy, currently working as an <strong>Advanced Defensive Cybersecurity Operations Analyst</strong> at the Portuguese Armed Forces General Staff.',
      sobreP2: 'Specialist in <strong>Communications and Information Systems</strong>, with advanced training in <strong>Cyber Defense</strong> by the Military Academy and the Cyber Defense School. Additionally, I am a certified <strong>Physical Education Monitor/Instructor</strong>, with experience in the Navy\'s main training schools. I am currently attending a <strong>Bachelor\'s Degree in Computer Engineering</strong> at Universidade Aberta.',
      sobreP3: 'With experience in <strong>SIEM, IDS/IPS, Digital Forensics, Threat Intelligence and Incident Response</strong>, I am committed to protecting critical infrastructures and defending national cyberspace.',
      sobreP4: 'I consider myself, after several military recognitions, to be a performer of <strong>extraordinary professional performance</strong>, possessing <strong>high technical-professional competence</strong> and <strong>relevant personal qualities</strong> demonstrated in the fulfilment of duties as a professional across the most diverse functions and professional areas.',
      sobreP5: 'A <strong>competent</strong>, <strong>disciplined</strong> and <strong>honest</strong> military professional, endowed with <strong>consistent technical-professional knowledge</strong>, <strong>high adaptability</strong>, <strong>relevant team spirit</strong>, and always demonstrating <strong>high dedication</strong> in carrying out assigned tasks, being the subject of constant praise from superiors.',
      sobreP6: 'As a military professional over nearly twenty-five years of career, throughout the most diverse missions, I have dedicated the utmost <strong>aptitude</strong>, <strong>zeal</strong>, <strong>dedication</strong>, and <strong>high sense of responsibility</strong> – a set of characteristics that ensured the <strong>fulfilment of responsibilities</strong> at <strong>high levels of service readiness</strong>, thus significantly influencing the <strong>excellent performance of the Military Units</strong> throughout my entire career as an outstanding soldier and professional.',
      statYears: "Years Exp.",
      statCerts: "Certifications",
      statLangs: "Languages",
      statMissions: "Missions",
      expTitle: "Professional Experience",
      exp1When: "2024 — present",
      exp1Title: "Advanced Defensive Cybersecurity Operations Analyst",
      exp1Org: "EMGFA · Lisbon",
      exp1L1: "<strong>Continuous Monitoring:</strong> 24/7 surveillance, SIEM, IDS/IPS and advanced firewalls.",
      exp1L2: "<strong>Detection & Analysis:</strong> Alert triage, digital forensics and attack reconstruction.",
      exp1L3: "<strong>Incident Response:</strong> Containment, eradication and coordination with CNCS, NATO and EU.",
      exp1L4: "<strong>Threat Intelligence:</strong> Intelligence feeds and adversary analysis.",
      exp2When: "2002 — present",
      exp2Title: "Communications and Information Systems Operator",
      exp2Org: "Portuguese Navy · Lisbon",
      exp2L1: "<strong>Systems Operation:</strong> HF, VHF, UHF, SATCOM and tactical systems.",
      exp2L2: "<strong>COMSEC:</strong> Cipher management and EMCON measures.",
      exp2L3: "<strong>Technical Maintenance:</strong> Diagnostics and repair of equipment.",
      exp2L4: "<strong>Missions:</strong> ATALANTA, TRIDENT JUNCTURE, JOINT WARRIOR.",
      exp3When: "2011 — present",
      exp3Title: "Physical Education Monitor/Instructor",
      exp3Org: "Navy Physical Education Center · Lisbon",
      exp3L1: "<strong>Instruction:</strong> Military PE, utility swimming and aquatic survival.",
      exp3L2: "<strong>Assessment:</strong> Physical Fitness Tests (TAF) and biometric control.",
      exp3L3: "<strong>Organization:</strong> Internal tournaments and military competitions.",
      exp4When: "2021 — present",
      exp4Title: "Computer Technician and Programming",
      exp4Org: "Naval Technologies School · Lisbon",
      exp4L1: "Programming (C, C++, Java, HTML, CSS, JavaScript)",
      exp4L2: "Operating systems (Windows and Linux)",
      exp4L3: "Networks (LAN, protocols, security)",
      formTitle: "Education",
      form1When: "2025 — present",
      form1Title: "Bachelor's Degree in Computer Engineering",
      form1Org: "Universidade Aberta · Lisbon",
      form1Desc: "1st year. E-learning methodology focusing on logical reasoning, technical communication and professional rigor.",
      form2When: "2022 — 2023",
      form2Title: "Cyber Defense Operations Course (CTeSP)",
      form2Org: "Polytechnic Institute of Beja · Lisbon",
      form2Desc: "2440 hours. Modules: Operating Systems, Networks, Programming, Defensive/Offensive Cybersecurity. Average: 15.11.",
      form3When: "2021",
      form3Title: "Computer Technician and Computer Systems and Hardware",
      form3Org: "Naval Technologies School · Lisbon",
      form3Desc: "243 hours. Average: 16.92. Certificate nº 0129/2021.",
      certsTitle: "Certifications and Advanced Courses",
      skillsTitle: "Skills",
      prof1: "Cybersecurity",
      prof2: "Networks and Communications",
      prof3: "Programming",
      prof4: "Digital Forensics",
      prof5: "Incident Response",
      prof6: "Physical Instruction",
      ctaTitle: "📡 Let's talk?",
      ctaDesc: "If you are looking for a specialist in cybersecurity, naval communications or physical instruction, send me a message.",
      ctaBtn: "✉ Send email",
      skillCat1: "🛡️ Cybersecurity",
      skillCat2: "📡 Networks and Communications",
      skillCat3: "💻 Programming",
      skillCat4: "🌐 Languages",
      skillCat5: "🏋️ Sports and Instruction",
      skillCat6: "🎯 Interests",
      langPt: "Portuguese — Native",
      langEn: "English — B2 (Upper-Intermediate)",
      langFr: "French — Intermediate",
      langEs: "Spanish — Intermediate",
      cert1Title: "CSCO — Certified SME Cyber Security Officer",
      cert1Meta: "EU Cyber Academy · 06/02/2026 · ID: 6986058501c23a6b60010faa",
      cert1Desc: "European cybersecurity certification for SMEs, covering risk management, compliance and digital asset protection.",
      cert2Title: "C)ITP — Certified Information Technology Principles",
      cert2Meta: "Mile2 · 01/09/2026 · ID: 28044-176-799-8775",
      cert2Desc: "International certification in information technology principles, covering IT fundamentals, networking and security.",
      cert3Title: "CSP — Certified Security Principles",
      cert3Meta: "Mile2 · Valid until 01/06/2029 · ID: 28044-17-6-7-8-0-0989",
      cert3Desc: "Certification in security principles, covering cybersecurity fundamentals, risk management and best practices.",
      cert4Title: "COFPS — Certified Online Fraud Prevention Specialist",
      cert4Meta: "Hack & Fix · 28/06/2026 · ID: 2094-1322-5947-1486",
      cert4Desc: "Specialization in online fraud prevention, detection of suspicious activities and protection of digital transactions.",
      cert5Title: "Cyber Security 101 — Learning Path",
      cert5Meta: "TryHackMe · 16/01/2026 · Duration: 45h 23min",
      cert5Desc: "Complete training path in cybersecurity, covering fundamentals, networks, operating systems and attack/defense techniques.",
      cert6Title: "Pre Security — Learning Path",
      cert6Meta: "TryHackMe · 06/11/2025 · Duration: 7h 38min",
      cert6Desc: "Introductory pre-security course, covering fundamental concepts of networks, systems and cybersecurity.",
      cert7Title: "Cyber Defender Course",
      cert7Meta: "Military Academy — CAIH · Dec 2024 - Apr 2025",
      cert7Desc: "450 operational hours focused on Cyber Defense Operations, Incident Response & Forensic Analysis, Network & System Security.",
      cert8Title: "Cyber Operations Course",
      cert8Meta: "Military Academy — CAIH · Oct 2025 - Dec 2025",
      cert8Desc: "Advanced course in cyber defense operations focusing on penetration testing, vulnerability discovery and advanced exploitation.",
      cert9Title: "Advanced Cyber Defense Operations Course",
      cert9Meta: "Naval Technologies School — Cyber Defense School · Sep 2023 - Dec 2023",
      cert9Desc: "420 hours. Web Attacks, Offensive Security with MicroTik, Buffer Overflow, Communications Obfuscation.",
      cert10Title: "Mile2 — Network Security & Defense",
      cert10Meta: "Mile2 Cybersecurity Institute",
      cert10Desc: "International certifications in network security and defense, threat intelligence and incident response.",
      cert11Title: "Red Team Leaders - C++ Practitioner",
      cert11Meta: "Red Team Leaders",
      cert11Desc: "International certifications in network security and defense, threat intelligence and incident response.",
      cert12Title: "ISO/IEC 27001:2022 — Information Security Associate",
      cert12Meta: "SkillFront · 03/04/2026 · ID: 55771769286696",
      cert12Desc: "Accredited certification in Information Security under the ISO/IEC 27001:2022 standard, covering ISMS, risk management and security controls.",
      cert13Title: "Foundations of Business and Entrepreneurship",
      cert13Meta: "SkillFront · 01/05/2026 · ID: 68916186686590",
      cert13Desc: "Accredited certification in business fundamentals and entrepreneurship, including business management and strategic planning.",
      cert14Title: "ACS-CD-FOC — Foundations of Cybersecurity Certification",
      cert14Meta: "Mile2 · 01/28/2025 · Valid through 01/28/2028 · ID: 28044-173-812-2911",
      cert14Desc: "International certification in cybersecurity fundamentals, covering core concepts, threats and best practices.",
      cert15Title: "ACS-CD-IRM — Incident Response and Management",
      cert15Meta: "Mile2 · 04/02/2025 · Valid through 04/01/2028 · ID: 28044-174-360-4609",
      cert15Desc: "International certification in cybersecurity incident response and management, covering the full response lifecycle.",
      cert16Title: "Introduction to Network Analysis",
      cert16Meta: "Security Blue Team · 2026-03-05 · ID: 665486535",
      cert16Desc: "Course on network traffic analysis fundamentals, using Wireshark and detecting malicious traffic.",
      cert17Title: "Introduction to OSINT",
      cert17Meta: "Security Blue Team · 2026-02-23 · ID: 783352373",
      cert17Desc: "Introductory course on Open Source Intelligence (OSINT), data sources, tools and practical applications.",
      cert18Title: "ISO 9001 — Quality Management Systems Associate",
      cert18Meta: "SkillFront · 04/05/2026 · ID: 03932217472180",
      cert18Desc: "Accredited certification in Quality Management Systems under the ISO 9001 standard, covering processes and continuous improvement.",
      cert19Title: "ISO/IEC 20000 — IT Service Management Associate",
      cert19Meta: "SkillFront · 12/27/2025 · ID: 74429336574965",
      cert19Desc: "Accredited certification in IT Service Management under the ISO/IEC 20000 standard, covering the service lifecycle.",
      viewDiploma: "📄 View Diploma"
    },
    es: {
      role: "Analista de Operaciones de Ciberseguridad Defensiva Avanzada",
      status: "Disponible para oportunidades",
      footer: "Cyber Portfolio · Hecho con HTML/CSS · GitHub Pages",
      sobre: "Sobre mí",
      sobreP1: 'Soy un profesional con <strong>25 años de experiencia militar</strong> en la Marina de Guerra Portuguesa, actualmente ejerciendo como <strong>Analista de Operaciones de Ciberseguridad Defensiva Avanzada</strong> en el Estado Mayor General de las Fuerzas Armadas.',
      sobreP2: 'Especialista en <strong>Comunicaciones y Sistemas de Información</strong>, con formaciones avanzadas en <strong>Ciberdefensa</strong> por la Academia Militar y la Escuela de Ciberdefensa. Paralelamente, soy <strong>Monitor/Instructor de Educación Física</strong> certificado, con paso por las principales escuelas de formación de la Marina. Actualmente curso la <strong>Licenciatura en Ingeniería Informática</strong> en la Universidade Aberta.',
      sobreP3: 'Con experiencia en <strong>SIEM, IDS/IPS, Forense Digital, Threat Intelligence y Respuesta a Incidentes</strong>, estoy comprometido con la protección de infraestructuras críticas y la defensa del ciberespacio nacional.',
      sobreP4: 'Me considero, tras diversos reconocimientos militares, un ejecutante de <strong>extraordinario desempeño profesional</strong>, poseedor de una <strong>elevada competencia técnico-profesional</strong> y de <strong>relevantes cualidades personales</strong> demostradas en el cumplimiento de los deberes como profesional en las más diversas funciones y áreas profesionales.',
      sobreP5: 'Militar <strong>competente</strong>, <strong>disciplinado</strong> y <strong>honesto</strong>, dotado de <strong>consistentes conocimientos técnico-profesionales</strong>, de <strong>elevada capacidad de adaptación</strong>, con <strong>relevante espíritu de camaradería</strong> y demostrando siempre <strong>elevada dedicación</strong> en la realización de las tareas encomendadas, siendo objeto de elogios permanentes por parte de los superiores jerárquicos.',
      sobreP6: 'Como militar en estos casi veinticinco años de carrera, a lo largo de las más diversas misiones, he dedicado el máximo de <strong>aptitud</strong>, <strong>celo</strong>, <strong>dedicación</strong> y <strong>elevado sentido de la responsabilidad</strong> – conjunto de características que han permitido asegurar el <strong>cumplimiento de las responsabilidades</strong> en <strong>elevados niveles de disponibilidad del servicio</strong>, influyendo así de manera significativa en el <strong>excelente desempeño de las Unidades Militares</strong> a lo largo de toda mi carrera como excelente militar y profesional.',
      statYears: "Años Exp.",
      statCerts: "Certificaciones",
      statLangs: "Idiomas",
      statMissions: "Misiones",
      expTitle: "Experiencia profesional",
      exp1When: "2024 — actual",
      exp1Title: "Analista de Operaciones de Ciberseguridad Defensiva Avanzada",
      exp1Org: "EMGFA · Lisboa",
      exp1L1: "<strong>Monitorización Continua:</strong> Vigilancia 24/7, SIEM, IDS/IPS y firewalls avanzados.",
      exp1L2: "<strong>Detección y Análisis:</strong> Triaje de alertas, forense digital y reconstrucción de ataques.",
      exp1L3: "<strong>Respuesta a Incidentes:</strong> Contención, erradicación y coordinación con CNCS, OTAN y UE.",
      exp1L4: "<strong>Threat Intelligence:</strong> Feeds de inteligencia y análisis de adversarios.",
      exp2When: "2002 — actual",
      exp2Title: "Operador de Comunicaciones y Sistemas de Información",
      exp2Org: "Marina de Guerra Portuguesa · Lisboa",
      exp2L1: "<strong>Operación de Sistemas:</strong> HF, VHF, UHF, SATCOM y sistemas tácticos.",
      exp2L2: "<strong>COMSEC:</strong> Gestión de cifra y medidas EMCON.",
      exp2L3: "<strong>Mantenimiento Técnico:</strong> Diagnóstico y reparación de equipos.",
      exp2L4: "<strong>Misiones:</strong> ATALANTA, TRIDENT JUNCTURE, JOINT WARRIOR.",
      exp3When: "2011 — actual",
      exp3Title: "Monitor/Instructor de Educación Física",
      exp3Org: "Centro de Educación Física de la Armada · Lisboa",
      exp3L1: "<strong>Instrucción:</strong> EF militar, natación utilitaria y supervivencia acuática.",
      exp3L2: "<strong>Evaluación:</strong> Pruebas de Aptitud Física (TAF) y control biométrico.",
      exp3L3: "<strong>Organización:</strong> Torneos internos y competiciones militares.",
      exp4When: "2021 — actual",
      exp4Title: "Técnico de Informática y Programación",
      exp4Org: "Escuela de Tecnologías Navales · Lisboa",
      exp4L1: "Programación (C, C++, Java, HTML, CSS, JavaScript)",
      exp4L2: "Sistemas operativos (Windows y Linux)",
      exp4L3: "Redes (LAN, protocolos, seguridad)",
      formTitle: "Formación académica",
      form1When: "2025 — actual",
      form1Title: "Licenciatura en Ingeniería Informática",
      form1Org: "Universidade Aberta · Lisboa",
      form1Desc: "Frecuencia del 1º año. Metodología e-learning con enfoque en razonamiento lógico, comunicación técnica y rigor profesional.",
      form2When: "2022 — 2023",
      form2Title: "Curso de Operaciones en Ciberdefensa (CTeSP)",
      form2Org: "Instituto Politécnico de Beja · Lisboa",
      form2Desc: "2440 horas. Módulos: Sistemas Operativos, Redes, Programación, Ciberseguridad Defensiva/Ofensiva. Media: 15.11.",
      form3When: "2021",
      form3Title: "Técnico de Informática y Sistemas de Computación y Hardware",
      form3Org: "Escuela de Tecnologías Navales · Lisboa",
      form3Desc: "243 horas. Media: 16.92. Certificado nº 0129/2021.",
      certsTitle: "Certificaciones y Cursos Avanzados",
      skillsTitle: "Competencias",
      prof1: "Ciberseguridad",
      prof2: "Redes y Comunicaciones",
      prof3: "Programación",
      prof4: "Forense Digital",
      prof5: "Respuesta a Incidentes",
      prof6: "Instrucción Física",
      ctaTitle: "📡 ¿Hablamos?",
      ctaDesc: "Si buscas un especialista en ciberseguridad, comunicaciones navales o instrucción física, envíame un mensaje.",
      ctaBtn: "✉ Enviar email",
      skillCat1: "🛡️ Ciberseguridad",
      skillCat2: "📡 Redes y Comunicaciones",
      skillCat3: "💻 Programación",
      skillCat4: "🌐 Idiomas",
      skillCat5: "🏋️ Deporte e Instrucción",
      skillCat6: "🎯 Intereses",
      langPt: "Portugués — Nativo",
      langEn: "Inglés — B2 (Intermedio-Alto)",
      langFr: "Francés — Intermedio",
      langEs: "Español — Intermedio",
      cert1Title: "CSCO — Certified SME Cyber Security Officer",
      cert1Meta: "EU Cyber Academy · 06/02/2026 · ID: 6986058501c23a6b60010faa",
      cert1Desc: "Certificación europea en ciberseguridad para PYME, que abarca gestión de riesgos, cumplimiento y protección de activos digitales.",
      cert2Title: "C)ITP — Certified Information Technology Principles",
      cert2Meta: "Mile2 · 01/09/2026 · ID: 28044-176-799-8775",
      cert2Desc: "Certificación internacional en principios de tecnologías de información, que abarca fundamentos de TI, redes y seguridad.",
      cert3Title: "CSP — Certified Security Principles",
      cert3Meta: "Mile2 · Válido hasta 01/06/2029 · ID: 28044-17-6-7-8-0-0989",
      cert3Desc: "Certificación en principios de seguridad, abordando fundamentos de ciberseguridad, gestión de riesgos y mejores prácticas.",
      cert4Title: "COFPS — Certified Online Fraud Prevention Specialist",
      cert4Meta: "Hack & Fix · 28/06/2026 · ID: 2094-1322-5947-1486",
      cert4Desc: "Especialización en prevención de fraudes online, detección de actividades sospechosas y protección de transacciones digitales.",
      cert5Title: "Cyber Security 101 — Learning Path",
      cert5Meta: "TryHackMe · 16/01/2026 · Duración: 45h 23min",
      cert5Desc: "Recorrido formativo completo en ciberseguridad, abarcando fundamentos, redes, sistemas operativos y técnicas de ataque/defensa.",
      cert6Title: "Pre Security — Learning Path",
      cert6Meta: "TryHackMe · 06/11/2025 · Duración: 7h 38min",
      cert6Desc: "Curso introductorio de pre-seguridad, abordando conceptos fundamentales de redes, sistemas y ciberseguridad.",
      cert7Title: "Cyber Defender Course",
      cert7Meta: "Academia Militar — CAIH · dic. 2024 - abr. 2025",
      cert7Desc: "450 horas operativas centradas en Cyber Defense Operations, Incident Response & Forensic Analysis, Network & System Security.",
      cert8Title: "Cyber Operations Course",
      cert8Meta: "Academia Militar — CAIH · oct. 2025 - dic. 2025",
      cert8Desc: "Curso avanzado en operaciones de ciberdefensa centrado en pruebas de penetración, descubrimiento de vulnerabilidades y explotación avanzada.",
      cert9Title: "Curso Avanzado de Operaciones en Ciberdefensa",
      cert9Meta: "Escuela de Tecnologías Navales — Escuela de Ciberdefensa · sep. 2023 - dic. 2023",
      cert9Desc: "420 horas. Ataques Web, Seguridad Ofensiva con MicroTik, Buffer Overflow, Ofuscación de Comunicaciones.",
      cert10Title: "Mile2 — Network Security & Defense",
      cert10Meta: "Mile2 Cybersecurity Institute",
      cert10Desc: "Certificaciones internacionales en seguridad de redes y defensa, threat intelligence y respuesta a incidentes.",
      cert11Title: "Red Team Leaders - C++ Practitioner",
      cert11Meta: "Red Team Leaders",
      cert11Desc: "Certificación en C++ Practitioner",
      cert12Title: "ISO/IEC 27001:2022 — Information Security Associate",
      cert12Meta: "SkillFront · 04/03/2026 · ID: 55771769286696",
      cert12Desc: "Certificación acreditada en Seguridad de la Información según la norma ISO/IEC 27001:2022, abarcando SGSI, gestión de riesgos y controles de seguridad.",
      cert13Title: "Foundations of Business and Entrepreneurship",
      cert13Meta: "SkillFront · 05/01/2026 · ID: 68916186686590",
      cert13Desc: "Certificación acreditada en fundamentos de negocios y emprendimiento, incluyendo gestión empresarial y planificación estratégica.",
      cert14Title: "ACS-CD-FOC — Foundations of Cybersecurity Certification",
      cert14Meta: "Mile2 · 28/01/2025 · Válido hasta 28/01/2028 · ID: 28044-173-812-2911",
      cert14Desc: "Certificación internacional en fundamentos de ciberseguridad, abarcando conceptos base, amenazas y mejores prácticas.",
      cert15Title: "ACS-CD-IRM — Incident Response and Management",
      cert15Meta: "Mile2 · 02/04/2025 · Válido hasta 01/04/2028 · ID: 28044-174-360-4609",
      cert15Desc: "Certificación internacional en respuesta y gestión de incidentes de ciberseguridad, abarcando el ciclo completo de respuesta.",
      cert16Title: "Introduction to Network Analysis",
      cert16Meta: "Security Blue Team · 05/03/2026 · ID: 665486535",
      cert16Desc: "Curso sobre fundamentos de análisis de tráfico de red, uso de Wireshark y detección de tráfico malicioso.",
      cert17Title: "Introduction to OSINT",
      cert17Meta: "Security Blue Team · 23/02/2026 · ID: 783352373",
      cert17Desc: "Curso introductorio sobre Open Source Intelligence (OSINT), fuentes de datos, herramientas y aplicaciones prácticas.",
      cert18Title: "ISO 9001 — Quality Management Systems Associate",
      cert18Meta: "SkillFront · 05/04/2026 · ID: 03932217472180",
      cert18Desc: "Certificación acreditada en Sistemas de Gestión de la Calidad según la norma ISO 9001, abarcando procesos y mejora continua.",
      cert19Title: "ISO/IEC 20000 — IT Service Management Associate",
      cert19Meta: "SkillFront · 27/12/2025 · ID: 74429336574965",
      cert19Desc: "Certificación acreditada en Gestión de Servicios de TI según la norma ISO/IEC 20000, abarcando el ciclo de vida del servicio.",
      viewDiploma: "📄 Ver Diploma"
    }
  };

  // ===== FUNÇÃO PARA ALTERAR IDIOMA =====
  function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Textos gerais
    document.getElementById('roleText').textContent = t.role;
    document.getElementById('statusText').textContent = t.status;
    document.getElementById('footerText').textContent = t.footer;
    document.getElementById('sobreTitle').textContent = t.sobre;
    document.getElementById('sobreP1').innerHTML = t.sobreP1;
    document.getElementById('sobreP2').innerHTML = t.sobreP2;
    document.getElementById('sobreP3').innerHTML = t.sobreP3;
    document.getElementById('statYears').textContent = t.statYears;
    document.getElementById('statCerts').textContent = t.statCerts;
    document.getElementById('statLangs').textContent = t.statLangs;
    document.getElementById('statMissions').textContent = t.statMissions;
    document.getElementById('expTitle').textContent = t.expTitle;
    document.getElementById('exp1When').textContent = t.exp1When;
    document.getElementById('exp1Title').textContent = t.exp1Title;
    document.getElementById('exp1Org').textContent = t.exp1Org;
    document.getElementById('exp1L1').innerHTML = t.exp1L1;
    document.getElementById('exp1L2').innerHTML = t.exp1L2;
    document.getElementById('exp1L3').innerHTML = t.exp1L3;
    document.getElementById('exp1L4').innerHTML = t.exp1L4;
    document.getElementById('exp2When').textContent = t.exp2When;
    document.getElementById('exp2Title').textContent = t.exp2Title;
    document.getElementById('exp2Org').textContent = t.exp2Org;
    document.getElementById('exp2L1').innerHTML = t.exp2L1;
    document.getElementById('exp2L2').innerHTML = t.exp2L2;
    document.getElementById('exp2L3').innerHTML = t.exp2L3;
    document.getElementById('exp2L4').innerHTML = t.exp2L4;
    document.getElementById('exp3When').textContent = t.exp3When;
    document.getElementById('exp3Title').textContent = t.exp3Title;
    document.getElementById('exp3Org').textContent = t.exp3Org;
    document.getElementById('exp3L1').innerHTML = t.exp3L1;
    document.getElementById('exp3L2').innerHTML = t.exp3L2;
    document.getElementById('exp3L3').innerHTML = t.exp3L3;
    document.getElementById('exp4When').textContent = t.exp4When;
    document.getElementById('exp4Title').textContent = t.exp4Title;
    document.getElementById('exp4Org').textContent = t.exp4Org;
    document.getElementById('exp4L1').textContent = t.exp4L1;
    document.getElementById('exp4L2').textContent = t.exp4L2;
    document.getElementById('exp4L3').textContent = t.exp4L3;
    document.getElementById('formTitle').textContent = t.formTitle;
    document.getElementById('form1When').textContent = t.form1When;
    document.getElementById('form1Title').textContent = t.form1Title;
    document.getElementById('form1Org').textContent = t.form1Org;
    document.getElementById('form1Desc').textContent = t.form1Desc;
    document.getElementById('form2When').textContent = t.form2When;
    document.getElementById('form2Title').textContent = t.form2Title;
    document.getElementById('form2Org').textContent = t.form2Org;
    document.getElementById('form2Desc').textContent = t.form2Desc;
    document.getElementById('form3When').textContent = t.form3When;
    document.getElementById('form3Title').textContent = t.form3Title;
    document.getElementById('form3Org').textContent = t.form3Org;
    document.getElementById('form3Desc').textContent = t.form3Desc;
    document.getElementById('certsTitle').textContent = t.certsTitle;
    document.getElementById('skillsTitle').textContent = t.skillsTitle;
    document.getElementById('prof1Label').textContent = t.prof1;
    document.getElementById('prof2Label').textContent = t.prof2;
    document.getElementById('prof3Label').textContent = t.prof3;
    document.getElementById('prof4Label').textContent = t.prof4;
    document.getElementById('prof5Label').textContent = t.prof5;
    document.getElementById('prof6Label').textContent = t.prof6;
    document.getElementById('ctaTitle').innerHTML = t.ctaTitle;
    document.getElementById('ctaDesc').textContent = t.ctaDesc;
    document.getElementById('ctaBtn').textContent = t.ctaBtn;
    
    // Gerar Skills e Certificações dinamicamente
    renderSkills(lang);
    renderCertificates(lang);
    
    // Guardar preferência
    localStorage.setItem('pref-lang', lang);
    document.getElementById('langSelect').value = lang;
    document.documentElement.setAttribute('data-lang', lang);
  }

  // ===== RENDERIZAR SKILLS =====
  function renderSkills(lang) {
    const t = translations[lang];
    const container = document.getElementById('skillsContainer');
    
    const skillsData = [
      { cat: t.skillCat1, items: ['SIEM / IDS / IPS', 'Análise Forense Digital', 'Threat Intelligence', 'Vulnerability Assessment', 'Incident Response', 'Ethical Hacking'] },
      { cat: t.skillCat2, items: ['Redes HF / VHF / UHF / SATCOM', 'COMSEC / EMCON', 'Link 11/16/22', 'Firewalls Avançados', 'LAN / WAN'] },
      { cat: t.skillCat3, items: ['C / C++', 'Java', 'HTML / CSS / JavaScript', 'Python / Bash', 'SQL'] },
      { cat: t.skillCat4, items: [t.langPt, t.langEn, t.langFr, t.langEs] },
      { cat: t.skillCat5, items: ['Preparação Física Militar', 'Natação Utilitária', 'Oficial de Desporto', 'Liderança e Trabalho de Equipa'] },
      { cat: t.skillCat6, items: ['Mergulho em Águas Abertas', 'Orientação Desportiva', 'Atletismo / Ciclismo', 'Natação / Voluntariado'] }
    ];

    let html = '<div class="skills-grid">';
    skillsData.forEach(cat => {
      html += `<div class="skill-cat"><h3>${cat.cat}</h3><ul>`;
      cat.items.forEach(item => {
        html += `<li>${item}</li>`;
      });
      html += `</ul></div>`;
    });
    html += '</div>';
    container.innerHTML = html;
  }

  // ===== RENDERIZAR CERTIFICAÇÕES =====
  function renderCertificates(lang) {
    const t = translations[lang];
    const container = document.getElementById('certsContainer');
    
    const certs = [
      { id: 'cert1', title: t.cert1Title, meta: t.cert1Meta, desc: t.cert1Desc },
      { id: 'cert2', title: t.cert2Title, meta: t.cert2Meta, desc: t.cert2Desc },
      { id: 'cert3', title: t.cert3Title, meta: t.cert3Meta, desc: t.cert3Desc },
      { id: 'cert4', title: t.cert4Title, meta: t.cert4Meta, desc: t.cert4Desc },
      { id: 'cert5', title: t.cert5Title, meta: t.cert5Meta, desc: t.cert5Desc },
      { id: 'cert6', title: t.cert6Title, meta: t.cert6Meta, desc: t.cert6Desc },
      { id: 'cert7', title: t.cert7Title, meta: t.cert7Meta, desc: t.cert7Desc },
      { id: 'cert8', title: t.cert8Title, meta: t.cert8Meta, desc: t.cert8Desc },
      { id: 'cert9', title: t.cert9Title, meta: t.cert9Meta, desc: t.cert9Desc },
      { id: 'cert10', title: t.cert10Title, meta: t.cert10Meta, desc: t.cert10Desc },
      { id: 'cert11', title: t.cert11Title, meta: t.cert11Meta, desc: t.cert11Desc },
      { id: 'cert12', title: t.cert12Title, meta: t.cert12Meta, desc: t.cert12Desc },
      { id: 'cert13', title: t.cert13Title, meta: t.cert13Meta, desc: t.cert13Desc },
      { id: 'cert14', title: t.cert14Title, meta: t.cert14Meta, desc: t.cert14Desc },
      { id: 'cert15', title: t.cert15Title, meta: t.cert15Meta, desc: t.cert15Desc },
      { id: 'cert16', title: t.cert16Title, meta: t.cert16Meta, desc: t.cert16Desc },
      { id: 'cert17', title: t.cert17Title, meta: t.cert17Meta, desc: t.cert17Desc },
      { id: 'cert18', title: t.cert18Title, meta: t.cert18Meta, desc: t.cert18Desc },
      { id: 'cert19', title: t.cert19Title, meta: t.cert19Meta, desc: t.cert19Desc }
    ];

    // Badges comuns (não traduzidos)
    const badgesMap = {
      cert1: ['Cyber Security', 'Risk Management', 'Compliance'],
      cert2: ['IT Principles', 'Networking', 'Security'],
      cert3: ['Security Principles', 'Risk Management', 'Best Practices'],
      cert4: ['Fraud Prevention', 'Digital Security', 'Transaction Security'],
      cert5: ['Cyber Security', 'Networking', 'OS Security'],
      cert6: ['Pre Security', 'Networking Basics', 'Cyber Fundamentals'],
      cert7: ['Incident Response', 'Forensics', 'Network Security'],
      cert8: ['Penetration Testing', 'Vulnerability Discovery', 'Advanced Exploitation'],
      cert9: ['Ethical Hacking', 'Web Attacks', 'Buffer Overflow', 'MicroTik'],
      cert10: ['Network Security', 'Threat Intelligence', 'Incident Response'],
      cert11: ['Programming', 'Cyber Security', 'Penetration Testing'],
      cert12: ['Information Security', 'ISO 27001', 'Risk Management'],
      cert13: ['Business Fundamentals', 'Entrepreneurship', 'Strategic Planning'],
      cert14: ['Cyber Security Fundamentals', 'Threat Awareness', 'Best Practices'],
      cert15: ['Incident Response', 'Incident Management', 'Crisis Coordination'],
      cert16: ['Network Analysis', 'Wireshark', 'Traffic Inspection'],
      cert17: ['OSINT', 'Information Gathering', 'Threat Research'],
      cert18: ['Quality Management', 'ISO 9001', 'Process Improvement'],
      cert19: ['IT Service Management', 'ISO 20000', 'Service Delivery']
    };

    let html = '';
    certs.forEach(cert => {
      const badges = badgesMap[cert.id] || [];
      html += `
        <div class="cert-item">
          <h4>${cert.title} <span class="cert-badge">📜 Diploma</span></h4>
          <div class="meta">${cert.meta}</div>
          <p>${cert.desc}</p>
          <div class="badge-grid">
            ${badges.map(b => `<span class="badge">${b}</span>`).join('')}
          </div>
          <button class="cert-diploma-btn" onclick="openDiploma('${cert.id}')">${t.viewDiploma}</button>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // ===== FUNÇÕES DO MODAL =====
  function openDiploma(certId) {
    const modal = document.getElementById('diplomaModal');
    const content = document.getElementById('diplomaContent');
    const data = diplomas[certId];
    
    if (data) {
      content.innerHTML = `
        <h2 class="diploma-title">📜 ${data.title}</h2>
        <div class="diploma-sub">${data.subtitle}</div>
        <div class="diploma-body">${data.body}</div>
        <div class="diploma-footer">${data.footer}</div>
      `;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDiploma() {
    const modal = document.getElementById('diplomaModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  document.getElementById('diplomaModal').addEventListener('click', function(e) {
    if (e.target === this) closeDiploma();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeDiploma();
  });

  // ===== CÓDIGO RAIN =====
  (function createCodeRain() {
    const container = document.getElementById('codeRain');
    const chars = '0100110123456789ABCDEF';
    for (let i = 0; i < 30; i++) {
      const span = document.createElement('span');
      const length = Math.floor(Math.random() * 12) + 4;
      let text = '';
      for (let j = 0; j < length; j++) {
        text += chars[Math.floor(Math.random() * chars.length)];
      }
      span.textContent = text;
      span.style.left = Math.random() * 100 + '%';
      span.style.fontSize = (Math.random() * 8 + 10) + 'px';
      span.style.animationDuration = (Math.random() * 15 + 10) + 's';
      span.style.animationDelay = (Math.random() * 20) + 's';
      span.style.opacity = Math.random() * 0.3 + 0.05;
      container.appendChild(span);
    }
  })();

  // ===== TEMA =====
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('pref-theme', theme);
  }

  document.getElementById('themeToggle').addEventListener('click', function() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  const savedTheme = localStorage.getItem('pref-theme') || 'dark';
  setTheme(savedTheme);

  // ===== TAB SYSTEM =====
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById('tab-' + tabId).classList.add('active');
    });
  });

  // ===== IDIOMA =====
  document.getElementById('langSelect').addEventListener('change', function() {
    setLanguage(this.value);
  });

  // Carregar idioma salvo
  const savedLang = localStorage.getItem('pref-lang') || 'pt';
  setLanguage(savedLang);
  document.getElementById('langSelect').value = savedLang;

  // ===== ANIMAÇÃO DAS BARRAS =====
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => { bar.style.width = width; }, 100);
    });
  }, 500);
