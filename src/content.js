export const content = {
  meta: {
    title: 'Maiury Fernandes | Portfolio',
    brand: 'MAIURY.DEV',
  },
  nav: {
    items: [
      { label: 'INÍCIO', href: '#inicio', active: true },
      { label: 'SOBRE', href: '#sobre' },
      { label: 'PROJETOS', href: '#projetos' },
      { label: 'HABILIDADES', href: '#habilidades' },
    ],
    cta: { label: 'Contato', href: '#contato' },
  },
  hero: {
    role: 'Computer Science Student | AI & VR Researcher',
    firstName: 'Maiury',
    lastName: 'Fernandes',
    focus:
      'Ciência da Computação | IA aplicada | Realidade Virtual | Cloud',
    description:
      'Sou estudante de Ciência da Computação na UESC e pesquisadora em Inteligência Artificial aplicada a ambientes imersivos. Minha trajetória conecta programação, pesquisa, cloud e soluções tecnológicas com impacto social.',
    primaryCta: { label: 'Conhecer trajetória', href: '#sobre', icon: 'arrow_forward' },
    secondaryCta: { label: 'Ver projetos', href: '#projetos' },
  },
  about: {
    title: 'Minha Trajetória',
    paragraphs: [
      'Olá! Sou Maiury Fernandes, estudante de Ciência da Computação na Universidade Estadual de Santa Cruz (UESC). Minha trajetória começou com um curso de informática e evoluiu para programação, engenharia de software e pesquisa aplicada.',
      'Complemento minha formação com cursos como o Bootcamp End to End Engineering, da Digital Innovation One, e o curso de Tecnologia da Informação da Google, fortalecendo minha base em desenvolvimento, infraestrutura, cloud e boas práticas de tecnologia.',
      {
        parts: [
          'Atualmente, meu foco está na ',
          {
            text: 'pesquisa científica com Inteligência Artificial e Realidade Virtual',
            className: 'text-primary-container font-bold',
          },
          '. Desenvolvi o Guia Cacau 2025–2026, uma versão concluída sem RAG, e agora trabalho na nova versão 2026–2027 com RAG para respostas mais confiáveis e fundamentadas.',
        ],
      },
      'Também valorizo comunicação, colaboração e aprendizado contínuo. Minhas experiências com monitoria acadêmica, organização de eventos, teatro e LALA fortaleceram minha adaptação, escuta e trabalho em equipe.',
    ],
    image: {
      src: 'https://lh3.googleusercontent.com/aida/ADBb0ujrAwm52mILYPs56wCTYme2qshu7twWZLTNhY_xOShhoO-dN2uvt0FQTlSXbxfamnLzvpE78zJaCLDNbImGL3edkdx0IZPKUUdL22dMUMJV7X2_hLjD5sti2kssSQHvpkkG23QRTC-Ep3Q38rygZW7nOyq1aSlx-dh7D5EjSqqE6KDfPvvQvKwAjBh63fL8FwJKU3LgVnxbPyTVUdwiflMuAfH8ho8EpzlawpigfvbYb86KOnf1U2C4qa4',
      alt: 'Maiury Fernandes Workspace',
      description:
        'A professional, dark-themed workspace of a software engineer and researcher, with monitors displaying code, data flows and AI visualizations. The environment communicates focus, learning, research, collaboration and technological development.',
    },
    badge: {
      value: 'CS+AI',
      label: 'TRAJETÓRIA EM TECNOLOGIA',
    },
  },
  interests: {
    title: 'Áreas de Interesse',
    items: [
      {
        title: 'Engenharia de Software',
        description:
          'Construção de aplicações, integração entre sistemas, APIs, bancos de dados, documentação técnica e organização de soluções reais.',
        icon: 'terminal',
        iconColor: 'text-primary-container',
        span: 'md:col-span-2',
        textClass: 'text-on-surface-variant',
      },
      {
        title: 'Inteligência Artificial',
        description:
          'IA contextual, LLMs, RAG, processamento de linguagem natural e agentes conversacionais aplicados a experiências educacionais.',
        icon: 'psychology',
        iconColor: 'text-primary-container',
        textClass: 'text-on-surface-variant text-sm',
      },
      {
        title: 'Realidade Virtual',
        description:
          'Experiências imersivas em VR/AR, vídeo 360°, interação em Unity e ambientes digitais voltados à aprendizagem.',
        icon: 'view_in_ar',
        iconColor: 'text-secondary-container',
        textClass: 'text-on-surface-variant text-sm',
      },
      {
        title: 'Cloud & Infraestrutura',
        description:
          'Interesse em Google Cloud, Cloud Run, Docker, deploy de serviços, APIs e sistemas em produção.',
        icon: 'cloud',
        iconColor: 'text-secondary-container',
        span: 'md:col-span-2',
        textClass: 'text-on-surface-variant',
      },
      {
        title: 'Segurança',
        description:
          'Interesse em segurança de aplicações, APIs, sessões, infraestrutura em nuvem e boas práticas de sistemas confiáveis.',
        icon: 'shield_lock',
        iconColor: 'text-on-tertiary-container',
        textClass: 'text-on-surface-variant text-sm',
      },
      {
        title: 'Pesquisa com Impacto Social',
        description:
          'Desenvolvimento de soluções inovadoras que conectam tecnologia, educação, cultura, ciência e impacto para pessoas reais.',
        icon: 'diversity_3',
        iconColor: 'text-on-tertiary-container',
        textClass: 'text-on-surface-variant text-sm',
      },
    ],
  },
  projects: {
    title: 'Projetos em Destaque',
    subtitle: 'Projetos que refletem minha evolução entre programação, pesquisa, IA, cloud e sistemas.',
    items: [
      {
        title: 'Guia Cacau',
        description:
          'Projeto concluído de guia virtual inteligente para experiências imersivas em VR/AR. A primeira versão foi desenvolvida sem RAG e combina Unity, voz natural, IA contextual, tracking de progresso, dicas automáticas, backend Python/Flask e Cloud Run para orientar usuários em uma fábrica virtual de chocolate.',
        tag: 'CONCLUÍDO / AI + VR',
        tagClass: 'bg-primary-container text-on-primary',
        image:
          'https://lh3.googleusercontent.com/aida/ADBb0ugYvtMOYJAWrTxETOwYL8CUze-BjSzMfZQDFC58h1eNNc9Zu12kE0S7F97ZA0e_FGmM10LxapUJY5Md3RK-HvaT-dzeJy8of-7YswhEhG7WyuAiU0uL63w6J_RIdSvcxzx8YOUiWKRI7HCAzQSOISq7vUaYip55naBYFG1bK8N8fajV-gQOpwk5P2fR_-PrZb_83_X0CTIJBLtdVciViRZFUfbIjvAG4eVf4osjnwIhV0zqrwx5cvVnTg',
        alt: 'Guia Cacau AI VR Project',
        dataAlt:
          'A futuristic digital conceptualization of an educational AI interface within a virtual reality environment, with cocoa plant elements, floating interface cards, voice interaction and immersive learning cues.',
        stack: ['UNITY', 'PYTHON', 'FLASK', 'GCP', 'STT/TTS', 'LLM'],
      },
      {
        title: 'Guia Cacau com RAG',
        description:
          'Nova versão em desenvolvimento do Guia Cacau, agora com arquitetura RAG para recuperar informações de uma base de conhecimento antes de gerar respostas. O objetivo é aumentar a confiabilidade do assistente, reduzir alucinações e melhorar a precisão instrucional em experiências educacionais imersivas.',
        tag: 'EM DESENVOLVIMENTO / RAG',
        tagClass: 'bg-secondary-container text-on-secondary-container',
        image:
          'https://lh3.googleusercontent.com/aida/ADBb0ugYvtMOYJAWrTxETOwYL8CUze-BjSzMfZQDFC58h1eNNc9Zu12kE0S7F97ZA0e_FGmM10LxapUJY5Md3RK-HvaT-dzeJy8of-7YswhEhG7WyuAiU0uL63w6J_RIdSvcxzx8YOUiWKRI7HCAzQSOISq7vUaYip55naBYFG1bK8N8fajV-gQOpwk5P2fR_-PrZb_83_X0CTIJBLtdVciViRZFUfbIjvAG4eVf4osjnwIhV0zqrwx5cvVnTg',
        alt: 'Guia Cacau RAG AI VR Project',
        dataAlt:
          'A futuristic educational AI interface inside a virtual reality environment, combining cocoa production visuals with floating knowledge base documents, vector search nodes, embeddings and retrieval pathways.',
        stack: ['RAG', 'LLM', 'EMBEDDINGS', 'PYTHON', 'APIs', 'CLOUD'],
      },
      {
        title: 'Formação em Desenvolvimento de Software',
        description:
          'Evolução prática em desenvolvimento de software por meio da graduação e cursos complementares. Trabalhei com fundamentos de programação, C, C#, .NET, Docker, SQL, JavaScript, APIs e práticas de engenharia para construir soluções mais completas.',
        tag: 'SOFTWARE DEV',
        tagClass: 'bg-tertiary-container text-on-tertiary-container',
        image:
          'https://lh3.googleusercontent.com/aida/AP1WRLvhnaYRihawDZM56EGVuSDNiSpzP_6xO9d_A3cmmRu_0gNMucnm18YvaIsvPDWPrE2CkJESvg0A9vuowb5LytEGbhQdUYXv3S_QBJNJkhls4EDvMfyyq05hv_A1Nf0SCiJZs2rLRIfiaU1Ykjl6kC1cGfsrK1IFW5-GLc07mAGFx6xbHXHlZmOcog-2P6nTXvkIVkUPcnwKjfKa4qoDshwRfNRnlBX0fI62dCP-ERyKOjoFfEqmWzLo6gI',
        alt: 'Software Development Journey',
        dataAlt:
          'A modern software engineering workspace showing APIs, database diagrams, code, documentation and containerized services connected in a clean technical interface.',
        stack: ['C', 'C#', '.NET', 'SQL', 'DOCKER', 'JS'],
      },
      {
        title: 'Projetos Acadêmicos',
        description:
          'Projetos desenvolvidos ao longo da graduação envolvendo algoritmos, estruturas de dados, métodos numéricos, organização de computadores, Java, C, Python, documentação técnica, Markdown, LaTeX e práticas de trabalho em equipe.',
        tag: 'COMPUTER SCIENCE',
        tagClass: 'bg-secondary-container text-on-secondary-container',
        image:
          'https://lh3.googleusercontent.com/aida/ADBb0ui230aJseZQTAM3eXPwtjM4w_qD8sKbcei_We1JYYm4QqFurrqUMPG4N42cxPnBEKyIohuFLXtNLFZuk1hHTxZ1RJL38KA3GvhpZBt_bqURzql8L1GOJEV86yPk6ZirUT06D32TWdTGNmlSScpq8vt7NCGc0jjHcfTw2s2ZujUGtQD1P-ptdzUvFT7Mx5A3cL4eEltMYN-d5wBvW7sP9p6uxHlNlXMATdo_ZnT5i7psVpbUDRs1ejhdRw',
        alt: 'Computer Science Academic Projects',
        dataAlt:
          'A clean visualization of academic computer science projects, algorithms, data structures, code repositories and technical documentation in a professional dark interface.',
        stack: ['JAVA', 'C', 'PYTHON', 'LATEX', 'GIT'],
      },
    ],
  },
  skills: {
    title: 'Habilidades & Stack',
    columns: [
      {
        title: 'Linguagens',
        icon: 'code',
        iconColor: 'text-primary-container',
        items: ['C', 'C#', 'Python', 'Java', 'JavaScript', 'SQL'],
        border: 'border-primary-container',
      },
      {
        title: 'Tecnologias',
        icon: 'layers',
        iconColor: 'text-secondary-container',
        items: ['.NET', 'Unity', 'Flask', 'Docker', 'Google Cloud Run', 'Git'],
        border: 'border-secondary-container',
      },
      {
        title: 'Áreas Técnicas',
        icon: 'hub',
        iconColor: 'text-on-tertiary-container',
        items: ['Engenharia de Software', 'IA Conversacional', 'RAG', 'VR / AR', 'STT / TTS', 'Cloud'],
        border: 'border-on-tertiary-container',
      },
      {
        title: 'Competências',
        icon: 'verified',
        iconColor: 'text-on-surface-variant',
        items: ['Comunicação', 'Trabalho em equipe', 'Adaptabilidade', 'Liderança', 'Ownership'],
        border: 'border-outline',
      },
    ],
  },
  timeline: {
    title: 'Trajetória Profissional',
    items: [
      {
        badge: 'INÍCIO',
        badgeColor: 'text-primary-container',
        title: 'Primeiro contato com tecnologia',
        description:
          'Primeiro contato com computação, lógica e resolução de problemas por meio de um curso de informática.',
        dotColor: 'bg-primary-container',
        side: 'left',
      },
      {
        badge: 'UESC',
        badgeColor: 'text-secondary-container',
        title: 'Graduação em Ciência da Computação',
        description:
          'Formação em fundamentos da computação, programação, algoritmos, estruturas de dados e projetos acadêmicos.',
        dotColor: 'bg-secondary-container',
        side: 'right',
      },
      {
        badge: 'FORMAÇÃO',
        badgeColor: 'text-primary-container',
        title: 'Formação complementar em engenharia e TI',
        description:
          'Aprimoramento técnico com cursos da DIO e Google, ampliando conhecimentos em engenharia, infraestrutura e TI.',
        dotColor: 'bg-primary-container',
        side: 'left',
      },
      {
        badge: 'PESQUISA',
        badgeColor: 'text-secondary-container',
        title: 'Pesquisa científica com IA e Realidade Virtual',
        description:
          'Início da atuação em pesquisa aplicada, unindo IA, voz, interação imersiva e impacto social.',
        dotColor: 'bg-secondary-container',
        side: 'right',
      },
      {
        badge: '2025–2026',
        badgeColor: 'text-on-tertiary-container',
        title: 'Guia Cacau sem RAG — versão concluída',
        description:
          'Primeira versão concluída do Guia Cacau, sistema de IA para VR/AR com Unity, voz, backend em nuvem e IA contextual.',
        dotColor: 'bg-on-tertiary-container',
        side: 'right',
      },
      {
        badge: '2026–2027',
        badgeColor: 'text-primary-container',
        title: 'Guia Cacau com RAG — nova versão em desenvolvimento',
        description:
          'Nova versão em desenvolvimento com RAG, base documental e foco em respostas mais confiáveis para experiências educacionais imersivas.',
        dotColor: 'bg-primary-container',
        side: 'left',
      },
    ],
  },
  seeking: {
    title: 'O que estou buscando',
    icon: 'rocket_launch',
    text: {
      parts: [
        'Busco oportunidades para crescer profissionalmente na área de tecnologia, aplicando minha base em ',
        { text: 'IA aplicada, cloud, pesquisa e engenharia de software', className: 'text-on-surface font-bold' },
        ' em projetos reais. Quero continuar aprendendo sobre sistemas em produção, segurança, infraestrutura e soluções inteligentes que sejam confiáveis, bem documentadas e centradas nas pessoas.',
      ],
    },
  },
  contact: {
    title: 'Vamos Conversar?',
    subtitle:
      'Sinta-se à vontade para entrar em contato para colaborações, propostas ou para trocar uma ideia sobre tecnologia, pesquisa e desenvolvimento.',
    info: [
      {
        label: 'Email',
        value: 'fernandesmaiury@gmail.com',
        href: 'mailto:fernandesmaiury@gmail.com',
        icon: 'mail',
      },
      {
        label: 'Localização',
        value: 'Bahia, Brasil',
        icon: 'location_on',
      },
    ],
    socials: [
      { icon: 'link', href: '#' },
      { icon: 'terminal', href: '#' },
    ],
    form: {
      fields: {
        name: { label: 'NOME', placeholder: 'Seu nome', type: 'text' },
        email: { label: 'EMAIL', placeholder: 'seu@email.com', type: 'email' },
        message: { label: 'MENSAGEM', placeholder: 'Sua mensagem aqui...' },
      },
      submit: 'Enviar Mensagem',
    },
  },
  footer: {
    copyright: '© 2026 Maiury Fernandes. Desenvolvido com foco em aprendizado, pesquisa e impacto.',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'ResearchGate', href: '#' },
    ],
  },
};