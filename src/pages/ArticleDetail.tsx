import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/ui/BlogCard';
import profileImg from '../assets/profile.jpg';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Article data - in a real application, this would come from an API or database
  const articles = {
    'treinamento-assoalho-pelvico': {
      title: 'Exercícios Essenciais para o Assoalho Pélvico: Saúde, Força e Autonomia',
      date: '15 de junho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-minimal-1.jpg',
      category: 'Exercícios',
      content: `
        <h2 class="text-terracota-700 font-bold">Por que Exercitar o Assoalho Pélvico?</h2>
        <p>O assoalho pélvico é um conjunto de músculos fundamentais para a saúde urinária, sexual e o suporte dos órgãos internos. Muitas mulheres só percebem sua importância quando surgem sintomas como escapes de urina, sensação de peso ou desconforto. Mas a boa notícia é: com exercícios simples, é possível fortalecer essa região e conquistar mais qualidade de vida!</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Prevenção e tratamento da incontinência urinária</li>
          <li>Redução do risco de prolapso de órgãos pélvicos</li>
          <li>Melhora da função sexual e do prazer</li>
          <li>Mais estabilidade para a coluna e o quadril</li>
        </ul>
        <img src="/images/assoalho-pelvico-exercicios.jpg" alt="Exercícios para o assoalho pélvico" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Como Identificar os Músculos do Assoalho Pélvico?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Imagine que precisa segurar o xixi ou evitar a saída de gases</li>
          <li>A sensação é de "fechar e elevar" a região íntima para dentro e para cima</li>
          <li>Evite contrair glúteos, coxas ou prender a respiração</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Não faça o exercício interrompendo o xixi de verdade, pois isso pode prejudicar a bexiga. Use apenas como referência para identificar a musculatura.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Exercícios Básicos</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li><strong>Kegel:</strong> Contraia o assoalho pélvico por 5 segundos, relaxe por 5 segundos. Repita 10 vezes, 3 séries ao dia.</li>
          <li><strong>Contrações rápidas:</strong> Contraia e relaxe rapidamente 10 vezes seguidas, 2-3 séries ao dia.</li>
          <li><strong>Exercício do elevador:</strong> Imagine subir andares com a contração, aumentando a força gradualmente e depois descendo devagar.</li>
        </ul>
        <img src="/images/exercicios-assoalho-pelvico.jpg" alt="Demonstração de exercícios" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> A regularidade é fundamental! Associe os exercícios a hábitos diários, como escovar os dentes ou esperar o café.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando Procurar Ajuda Profissional?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Dificuldade para identificar ou contrair os músculos</li>
          <li>Sintomas persistentes de escape de urina, dor ou sensação de peso</li>
          <li>Após parto, cirurgias ou se houver dúvidas sobre a técnica</li>
        </ul>
        <p class="mt-6">A fisioterapia pélvica oferece avaliação individualizada, orientação segura e acompanhamento para potencializar seus resultados. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar do seu assoalho pélvico é investir em saúde, autonomia e bem-estar!</span>
        </div>
      `
    },
    'prolapso-pelvico-artigo': {
      title: 'Prolapso Pélvico: Sintomas, Prevenção e Tratamento Humanizado',
      date: '28 de maio de 2025',
      readTime: '7 min de leitura',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/5853733/pexels-photo-5853733.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Prolapso Pélvico',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é Prolapso Pélvico?</h2>
        <p>O prolapso pélvico acontece quando órgãos como bexiga, útero ou reto descem de sua posição normal, causando desconforto, sensação de peso e até alterações urinárias ou intestinais. É mais comum do que se imagina e pode ser tratado com acolhimento e ciência.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Sensação de peso ou pressão na pelve</li>
          <li>Abaulamento ou saliência na região vaginal</li>
          <li>Dificuldade para esvaziar a bexiga ou intestino</li>
          <li>Incontinência urinária ou fecal</li>
          <li>Desconforto durante relações sexuais</li>
          <li>Dor lombar ou pélvica</li>
        </ul>
        <img src="/images/prolapso-pelvico-ilustracao.jpg" alt="Ilustração prolapso pélvico" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais fatores de risco</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Partos vaginais múltiplos</li>
          <li>Envelhecimento e menopausa</li>
          <li>Obesidade</li>
          <li>Constipação crônica</li>
          <li>Cirurgias pélvicas prévias</li>
          <li>Atividades que aumentam a pressão abdominal</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Atenção:</strong> O diagnóstico precoce e o tratamento adequado podem evitar a progressão do prolapso e melhorar sua qualidade de vida.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como prevenir e tratar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Praticar exercícios para fortalecimento do assoalho pélvico</li>
          <li>Evitar levantar peso excessivo</li>
          <li>Manter o peso saudável</li>
          <li>Tratar constipação e tosses crônicas</li>
          <li>Adotar hábitos posturais adequados</li>
        </ul>
        <img src="/images/fisioterapia-prolapso.jpg" alt="Fisioterapia para prolapso pélvico" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> A fisioterapia pélvica é a principal abordagem para casos leves e moderados, com exercícios, orientações e técnicas personalizadas.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se notar sintomas de prolapso, desconforto pélvico ou alterações urinárias/intestinais</li>
          <li>Se deseja prevenir ou entender melhor sua saúde pélvica</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode transformar sua rotina. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar do seu assoalho pélvico é investir em saúde, autonomia e qualidade de vida!</span>
        </div>
      `
    },
    'exercicios-assoalho-pelvico': {
  title: 'Exercícios para o Assoalho Pélvico: o que são, quando fazer e a importância da avaliação individualizada',
  date: '19 de maio de 2025',
  readTime: '5 min de leitura',
  author: 'Jéssica Godoi',
  image: '',
  category: 'Saúde Feminina',
  content: `
    <h2 class="text-terracota-700 font-bold">O que é o assoalho pélvico?</h2>
    <p>O assoalho pélvico é um conjunto de músculos e tecidos localizados na base da pelve. Ele tem funções importantes como sustentar os órgãos pélvicos (bexiga, útero e reto), auxiliar no controle da urina e das fezes, além de contribuir para a função sexual.</p>

    <h2 class="text-terracota-700 font-bold mt-6">Por que fazer exercícios para o assoalho pélvico?</h2>
    <p>Assim como qualquer outro músculo do corpo, os músculos do assoalho pélvico também podem enfraquecer. Isso pode acontecer por diversos motivos, como gravidez, parto, envelhecimento, cirurgias ou mesmo maus hábitos posturais e respiratórios.</p>
    <p>Quando bem orientados, os exercícios podem:</p>
    <ul class="list-disc pl-6 text-terracota-600">
      <li>Melhorar ou eliminar escapes de urina (incontinência urinária);</li>
      <li>Reduzir dores na região pélvica ou na relação sexual;</li>
      <li>Prevenir e tratar prolapsos (queda de órgãos);</li>
      <li>Contribuir para maior prazer sexual e bem-estar geral.</li>
    </ul>

    <h2 class="text-terracota-700 font-bold mt-6">Em quais situações eles são indicados?</h2>
    <p>Os exercícios são amplamente recomendados em casos como:</p>
    <ul class="list-disc pl-6 text-terracota-600">
      <li>Pós-parto, como parte da reabilitação perineal;</li>
      <li>Incontinência urinária ou fecal;</li>
      <li>Dor pélvica crônica ou dor durante a relação;</li>
      <li>Pré e pós-menopausa, para prevenção de sintomas;</li>
      <li>Prevenção para mulheres que praticam atividades físicas de impacto.</li>
    </ul>

    <h2 class="text-terracota-700 font-bold mt-6">Quando não devem ser feitos?</h2>
    <p>Apesar de serem muito benéficos, os exercícios para o assoalho pélvico não são indicados de forma generalizada. Em alguns casos, como dores agudas sem diagnóstico, infecções locais, aumento da tensão muscular (hipertonia) ou alterações neurológicas, é necessário cautela e adaptação.</p>
    <p>Por isso, é fundamental que a realização dos exercícios seja orientada por uma fisioterapeuta especializada.</p>

    <h2 class="text-terracota-700 font-bold mt-6">Por que a avaliação individualizada é essencial?</h2>
    <p>Cada mulher possui um histórico e uma condição corporal única. A avaliação fisioterapêutica permite identificar o funcionamento do assoalho pélvico, a presença de disfunções, além de definir quais exercícios são seguros e eficazes para o seu caso específico.</p>
    <p>Em alguns casos, a primeira etapa do tratamento pode ser relaxar e não fortalecer, e isso só pode ser identificado com uma boa avaliação clínica.</p>

    <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
      <strong class="text-terracota-800">Agende sua avaliação</strong><br/>
      <span class="text-gray-700">Se você sente desconforto, dor, perda de urina ou deseja cuidar da sua saúde íntima de forma preventiva, agende uma avaliação individualizada. O cuidado com o seu assoalho pélvico pode transformar sua relação com o próprio corpo e sua qualidade de vida.</span>
    </div>

    <p class="mt-6"><strong>Entre em contato:</strong> <a href="https://wa.link/32p5y9" target="_blank" class="text-terracota-700 underline">Falar pelo WhatsApp</a></p>
  `
},
    'prolapso-pelvico-artigo-2': {
      title: 'Prolapso Pélvico: Como Identificar, Prevenir e Tratar com Cuidado',
      date: '28 de maio de 2025',
      readTime: '7 min de leitura',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/5853733/pexels-photo-5853733.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Prolapso Pélvico',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é Prolapso Pélvico?</h2>
        <p>O prolapso pélvico ocorre quando órgãos como bexiga, útero ou reto descem de sua posição normal, causando sintomas que podem impactar o dia a dia da mulher. O diagnóstico e o tratamento precoces fazem toda a diferença para a qualidade de vida.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Sensação de peso ou pressão na pelve</li>
          <li>Abaulamento ou saliência na região vaginal</li>
          <li>Dificuldade para esvaziar a bexiga ou intestino</li>
          <li>Incontinência urinária ou fecal</li>
          <li>Desconforto durante relações sexuais</li>
          <li>Dor lombar ou pélvica</li>
        </ul>
        <img src="/images/prolapso-pelvico-ilustracao.jpg" alt="Ilustração prolapso pélvico" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais fatores de risco</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Partos vaginais múltiplos</li>
          <li>Envelhecimento e menopausa</li>
          <li>Obesidade</li>
          <li>Constipação crônica</li>
          <li>Cirurgias pélvicas prévias</li>
          <li>Atividades que aumentam a pressão abdominal</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Atenção:</strong> O diagnóstico precoce e o tratamento adequado podem evitar a progressão do prolapso e devolver sua confiança e bem-estar.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como prevenir e tratar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Exercícios para fortalecimento do assoalho pélvico</li>
          <li>Evitar levantar peso excessivo</li>
          <li>Manter o peso saudável</li>
          <li>Tratar constipação e tosses crônicas</li>
          <li>Adotar hábitos posturais adequados</li>
        </ul>
        <img src="/images/fisioterapia-prolapso.jpg" alt="Fisioterapia para prolapso pélvico" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> A fisioterapia pélvica é a principal abordagem para casos leves e moderados, com exercícios, orientações e técnicas personalizadas.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se notar sintomas de prolapso, desconforto pélvico ou alterações urinárias/intestinais</li>
          <li>Se deseja prevenir ou entender melhor sua saúde pélvica</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode transformar sua rotina. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar do seu assoalho pélvico é investir em saúde, autonomia e qualidade de vida!</span>
        </div>
      `
    },
    'sindrome-rokitansky': {
      title: 'Síndrome de Rokitansky: Entenda a Condição e Caminhos para o Bem-Estar',
      date: '10 de junho de 2025',
      readTime: '6 min de leitura',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Saúde Feminina',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é a Síndrome de Rokitansky?</h2>
        <p>A Síndrome de Rokitansky (MRKH) é uma condição rara em que a mulher nasce com ausência parcial ou total do útero e da parte superior da vagina, mas apresenta ovários e características femininas normais. O diagnóstico pode ser um desafio emocional, mas há caminhos de acolhimento e tratamento.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Ausência de menstruação (amenorreia primária) na adolescência</li>
          <li>Desenvolvimento normal das mamas e pelos pubianos</li>
          <li>Vagina curta ou ausente</li>
          <li>Possível desconforto ou dificuldade em relações sexuais</li>
        </ul>
        <img src="/images/sindrome-rokitansky-ilustracao.jpg" alt="Ilustração síndrome de Rokitansky" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Aspectos emocionais e psicossociais</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Sentimentos de insegurança ou dúvidas sobre feminilidade</li>
          <li>Questões sobre sexualidade e maternidade</li>
          <li>Importância do apoio psicológico e acolhimento</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Conversar com profissionais especializados e buscar grupos de apoio pode ajudar muito no processo de aceitação e autoconhecimento.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Possibilidades de tratamento</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Dilatação vaginal assistida por fisioterapia</li>
          <li>Cirurgia de neovagina em casos selecionados</li>
          <li>Acompanhamento psicológico</li>
        </ul>
        <img src="/images/fisioterapia-rokitansky.jpg" alt="Fisioterapia para síndrome de Rokitansky" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> A fisioterapia pélvica é uma aliada importante, auxiliando no processo de dilatação, preparo cirúrgico e melhora da função sexual.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Ao receber o diagnóstico ou suspeitar da condição</li>
          <li>Se houver desconforto, dúvidas ou impacto emocional</li>
          <li>Para orientação sobre sexualidade e qualidade de vida</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode ser fundamental para o bem-estar. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Você não está sozinha. Cuidar da sua saúde íntima é um passo importante para o autoconhecimento e a qualidade de vida!</span>
        </div>
      `
    },
    'incontinencia-urinaria-urgencia': {
      title: 'Incontinência Urinária de Urgência: Sintomas, Causas e Tratamento em Campinas',
      date: '01 de julho de 2025',
      readTime: '6 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-incontinencia-urgencia.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é Incontinência Urinária de Urgência?</h2>
        <p>Você sente vontade súbita e intensa de urinar, muitas vezes sem conseguir segurar até chegar ao banheiro? Isso pode ser incontinência urinária de urgência, um problema comum que afeta a qualidade de vida de muitas mulheres, mas tem solução!</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Vontade urgente de urinar, difícil de controlar</li>
          <li>Perda de urina antes de chegar ao banheiro</li>
          <li>Necessidade de urinar várias vezes ao dia e à noite</li>
          <li>Ansiedade ou medo de sair de casa por causa dos sintomas</li>
        </ul>
        <img src="/images/incontinencia-urgencia-ilustracao.jpg" alt="Ilustração incontinência de urgência" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Hiperatividade da bexiga</li>
          <li>Alterações hormonais</li>
          <li>Fatores emocionais e estresse</li>
          <li>Consumo excessivo de cafeína ou líquidos irritantes</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Identificar e evitar alimentos e bebidas que irritam a bexiga pode ajudar a reduzir os sintomas.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Exercícios para fortalecer o assoalho pélvico</li>
          <li>Técnicas para treinar a bexiga e controlar a urgência</li>
          <li>Orientações sobre hábitos saudáveis e controle da ingestão de líquidos</li>
          <li>Apoio emocional e estratégias para lidar com a ansiedade</li>
        </ul>
        <img src="/images/fisioterapia-incontinencia.jpg" alt="Fisioterapia para incontinência de urgência" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é individualizado e pode transformar sua rotina, devolvendo liberdade e confiança.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se os sintomas impactam sua rotina, sono ou bem-estar</li>
          <li>Se há medo de sair de casa ou constrangimento</li>
          <li>Se deseja prevenir piora e recuperar sua autonomia</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode transformar sua qualidade de vida. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde urinária é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'incontinencia-urinaria-esforco': {
      title: 'Incontinência Urinária de Esforço: Identifique e Recupere sua Confiança',
      date: '02 de julho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-incontinencia-esforco.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é Incontinência Urinária de Esforço?</h2>
        <p>Perde urina ao tossir, espirrar, rir ou fazer esforço físico? Esse é o principal sinal da incontinência urinária de esforço. É comum, mas não precisa ser normal na sua vida!</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Perda de urina ao tossir, espirrar, rir ou levantar peso</li>
          <li>Desconforto ou insegurança em atividades físicas</li>
          <li>Evitar exercícios ou situações sociais por medo de escapes</li>
        </ul>
        <img src="/images/incontinencia-esforco-ilustracao.jpg" alt="Ilustração incontinência de esforço" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Enfraquecimento dos músculos do assoalho pélvico</li>
          <li>Parto vaginal, menopausa ou cirurgias pélvicas</li>
          <li>Prática de exercícios de alto impacto sem preparo</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Fortalecer o assoalho pélvico é fundamental para recuperar o controle e a confiança.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Exercícios específicos para o assoalho pélvico</li>
          <li>Orientações sobre hábitos e postura</li>
          <li>Técnicas para melhorar a coordenação muscular</li>
          <li>Acompanhamento individualizado e seguro</li>
        </ul>
        <img src="/images/fisioterapia-incontinencia.jpg" alt="Fisioterapia para incontinência de esforço" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é personalizado e pode devolver sua liberdade para viver sem medo de escapes.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se os escapes de urina afetam sua rotina ou autoestima</li>
          <li>Se deseja voltar a praticar exercícios com segurança</li>
          <li>Se quer prevenir piora dos sintomas</li>
        </ul>
        <p class="mt-6">A fisioterapia pélvica é segura, acolhedora e pode transformar sua qualidade de vida. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Recupere sua confiança e liberdade para viver plenamente!</span>
        </div>
      `
    },
    'incontinencia-urinaria-mista': {
      title: 'Incontinência Urinária Mista: Entenda, Trate e Viva Melhor',
      date: '03 de julho de 2025',
      readTime: '6 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-incontinencia-mista.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é Incontinência Urinária Mista?</h2>
        <p>Quando há sintomas de urgência e de esforço ao mesmo tempo, chamamos de incontinência urinária mista. É comum sentir tanto a vontade súbita de urinar quanto perder urina ao fazer esforço. Mas é possível tratar e recuperar sua qualidade de vida!</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Vontade urgente de urinar e escapes ao tossir, rir ou levantar peso</li>
          <li>Medo de não chegar ao banheiro a tempo</li>
          <li>Evitar exercícios ou situações sociais por insegurança</li>
        </ul>
        <img src="/images/incontinencia-mista-ilustracao.jpg" alt="Ilustração incontinência urinária mista" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Enfraquecimento do assoalho pélvico</li>
          <li>Alterações hormonais e envelhecimento</li>
          <li>Fatores emocionais e hábitos urinários inadequados</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Identificar o tipo de incontinência é fundamental para um tratamento eficaz e personalizado.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Exercícios para fortalecer o assoalho pélvico</li>
          <li>Técnicas para treinar a bexiga e controlar a urgência</li>
          <li>Orientações sobre hábitos saudáveis e controle da ingestão de líquidos</li>
          <li>Acompanhamento individualizado e seguro</li>
        </ul>
        <img src="/images/fisioterapia-incontinencia.jpg" alt="Fisioterapia para incontinência urinária mista" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é personalizado e pode devolver sua liberdade para viver sem medo de escapes.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se os sintomas afetam sua rotina, autoestima ou bem-estar</li>
          <li>Se deseja voltar a praticar exercícios com segurança</li>
          <li>Se quer prevenir piora dos sintomas</li>
        </ul>
        <p class="mt-6">A fisioterapia pélvica é segura, acolhedora e pode transformar sua qualidade de vida. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Recupere sua confiança e liberdade para viver plenamente!</span>
        </div>
      `
    },
    'diferenca-incontinencias': {
      title: 'Diferença entre Incontinência de Urgência, Esforço e Mista',
      date: '04 de julho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-diferenca-incontinencias.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">Você sabia que existem diferentes tipos de incontinência urinária?</h2>
        <p>Identificar o tipo de incontinência é fundamental para um tratamento eficaz e personalizado. Cada tipo tem sintomas e causas específicas, mas todos podem ser tratados com fisioterapia pélvica e mudanças de hábitos.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li><strong>Incontinência de urgência:</strong> vontade súbita e intensa de urinar, difícil de controlar</li>
          <li><strong>Incontinência de esforço:</strong> perda de urina ao tossir, espirrar, rir ou fazer força</li>
          <li><strong>Incontinência mista:</strong> combinação dos dois sintomas acima</li>
        </ul>
        <img src="/images/diferenca-incontinencias-ilustracao.jpg" alt="Ilustração tipos de incontinência" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada para identificar o tipo de incontinência</li>
          <li>Exercícios para fortalecer o assoalho pélvico</li>
          <li>Técnicas para treinar a bexiga e controlar a urgência</li>
          <li>Orientações sobre hábitos saudáveis e controle da ingestão de líquidos</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Não sofra em silêncio! Buscar ajuda é o primeiro passo para recuperar sua qualidade de vida.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se os sintomas impactam sua rotina, autoestima ou bem-estar</li>
          <li>Se deseja voltar a praticar exercícios com segurança</li>
          <li>Se quer prevenir piora dos sintomas</li>
        </ul>
        <p class="mt-6">A fisioterapia pélvica é segura, acolhedora e pode transformar sua qualidade de vida. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Recupere sua confiança e liberdade para viver plenamente!</span>
        </div>
      `
    },
    'urgencia-miccional': {
      title: 'Urgência Miccional: O que é, Sintomas e Tratamento',
      date: '05 de julho de 2025',
      readTime: '4 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-urgencia-miccional.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é urgência miccional?</h2>
        <p>Sentir uma vontade repentina e difícil de controlar para urinar pode ser sinal de urgência miccional. Esse sintoma é comum em mulheres e pode causar ansiedade, insegurança e medo de sair de casa. Mas há solução e acolhimento!</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Vontade súbita e intensa de urinar</li>
          <li>Dificuldade para segurar até chegar ao banheiro</li>
          <li>Necessidade de urinar várias vezes ao dia e à noite</li>
          <li>Medo de escapes ou constrangimentos</li>
        </ul>
        <img src="/images/urgencia-miccional-ilustracao.jpg" alt="Ilustração urgência miccional" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Hiperatividade da bexiga</li>
          <li>Alterações hormonais</li>
          <li>Fatores emocionais e estresse</li>
          <li>Consumo de cafeína ou líquidos irritantes</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Reduzir o consumo de café, chá preto e refrigerantes pode ajudar a controlar a urgência.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Exercícios para fortalecer o assoalho pélvico</li>
          <li>Técnicas para treinar a bexiga e controlar a urgência</li>
          <li>Orientações sobre hábitos saudáveis e controle da ingestão de líquidos</li>
          <li>Apoio emocional e estratégias para lidar com a ansiedade</li>
        </ul>
        <img src="/images/fisioterapia-urgencia.jpg" alt="Fisioterapia para urgência miccional" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é individualizado e pode transformar sua rotina, devolvendo liberdade e confiança.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se a urgência impacta sua rotina, sono ou bem-estar</li>
          <li>Se há medo de sair de casa ou constrangimento</li>
          <li>Se deseja prevenir piora e recuperar sua autonomia</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode transformar sua qualidade de vida. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde urinária é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'hesitacao-miccional': {
      title: 'Hesitação Miccional: Entenda as Causas e Soluções',
      date: '06 de julho de 2025',
      readTime: '4 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-hesitacao-miccional.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é hesitação miccional?</h2>
        <p>Tem dificuldade para iniciar o jato de urina ou sente que demora para começar a urinar? Isso pode ser hesitação miccional, um sintoma que merece atenção e pode ser tratado com acolhimento e orientação especializada.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Dificuldade para iniciar o fluxo urinário</li>
          <li>Demora para começar a urinar mesmo com vontade</li>
          <li>Sensação de bloqueio ou tensão na região pélvica</li>
          <li>Ansiedade ou desconforto ao usar banheiros públicos</li>
        </ul>
        <img src="/images/hesitacao-miccional-ilustracao.jpg" alt="Ilustração hesitação miccional" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Tensão ou disfunção dos músculos do assoalho pélvico</li>
          <li>Fatores emocionais, ansiedade ou estresse</li>
          <li>Hábitos urinários inadequados</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Praticar respiração profunda e relaxamento antes de urinar pode ajudar a liberar a musculatura.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada para identificar a causa da hesitação</li>
          <li>Exercícios de relaxamento e coordenação do assoalho pélvico</li>
          <li>Orientações sobre postura e hábitos urinários saudáveis</li>
        </ul>
        <img src="/images/fisioterapia-hesitacao.jpg" alt="Fisioterapia para hesitação miccional" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é personalizado e pode devolver conforto e segurança ao urinar.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se a hesitação é frequente ou causa desconforto</li>
          <li>Se há impacto na rotina, sono ou bem-estar</li>
          <li>Se deseja prevenir complicações e melhorar a qualidade de vida</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode transformar sua rotina. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde urinária é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'esvaziamento-incompleto': {
      title: 'Sensação de Esvaziamento Vesical Incompleto: O que Fazer?',
      date: '07 de julho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-esvaziamento-incompleto.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é a sensação de esvaziamento vesical incompleto?</h2>
        <p>Sentir que a bexiga não esvaziou completamente após urinar é um sintoma desconfortável e pode indicar alterações no assoalho pélvico ou nos hábitos urinários. Mas há solução e acolhimento!</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Sensação de que ainda resta urina na bexiga após urinar</li>
          <li>Necessidade de voltar ao banheiro logo após urinar</li>
          <li>Desconforto ou ansiedade relacionada ao ato de urinar</li>
        </ul>
        <img src="/images/esvaziamento-incompleto-ilustracao.jpg" alt="Ilustração esvaziamento vesical incompleto" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Disfunção ou tensão dos músculos do assoalho pélvico</li>
          <li>Hábitos urinários inadequados</li>
          <li>Ansiedade ou preocupação excessiva com a bexiga</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Evite forçar para urinar e procure relaxar a musculatura durante o esvaziamento.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada para identificar a causa do sintoma</li>
          <li>Exercícios para relaxar e fortalecer o assoalho pélvico</li>
          <li>Orientações sobre hábitos urinários saudáveis</li>
          <li>Técnicas de esvaziamento vesical e respiração</li>
        </ul>
        <img src="/images/fisioterapia-esvaziamento.jpg" alt="Fisioterapia para esvaziamento vesical incompleto" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é personalizado e pode devolver conforto e segurança ao urinar.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se a sensação de esvaziamento incompleto é frequente</li>
          <li>Se há impacto na rotina, sono ou bem-estar</li>
          <li>Se deseja prevenir complicações e melhorar a qualidade de vida</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode transformar sua rotina. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde urinária é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'gotejamento-pos-miccional': {
      title: 'Gotejamento Pós-Miccional: Causas e Tratamento',
      date: '08 de julho de 2025',
      readTime: '4 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-gotejamento.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é gotejamento pós-miccional?</h2>
        <p>O gotejamento pós-miccional é quando, após terminar de urinar, ainda escorre um pouco de urina. Esse sintoma pode causar desconforto, insegurança e constrangimento, mas tem solução!</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Escorrimento de urina logo após terminar de urinar</li>
          <li>Sensação de que a bexiga não esvaziou totalmente</li>
          <li>Desconforto ou preocupação com odor e higiene</li>
        </ul>
        <img src="/images/gotejamento-pos-miccional-ilustracao.jpg" alt="Ilustração gotejamento pós-miccional" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Fraqueza ou descoordenação dos músculos do assoalho pélvico</li>
          <li>Alterações anatômicas</li>
          <li>Hábitos urinários inadequados</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Após urinar, tente inclinar o tronco para frente e contrair suavemente o assoalho pélvico para ajudar no esvaziamento completo.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Exercícios para fortalecer e coordenar o assoalho pélvico</li>
          <li>Técnicas para melhorar o esvaziamento vesical</li>
          <li>Orientações sobre hábitos urinários saudáveis</li>
        </ul>
        <img src="/images/fisioterapia-gotejamento.jpg" alt="Fisioterapia para gotejamento pós-miccional" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é personalizado e pode devolver conforto, segurança e bem-estar.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se o gotejamento é frequente ou causa desconforto</li>
          <li>Se há impacto na rotina, autoestima ou bem-estar</li>
          <li>Se deseja prevenir complicações e melhorar a qualidade de vida</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode transformar sua rotina. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde urinária é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'diario-miccional': {
      title: 'Diário Miccional: O que é e Por que é Importante no Tratamento',
      date: '09 de julho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-diario-miccional.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é o diário miccional?</h2>
        <p>O diário miccional é uma ferramenta simples e poderosa para entender seus hábitos urinários. Com ele, você registra horários, volumes e episódios de perda urinária, facilitando o diagnóstico e o tratamento personalizado.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Horário e quantidade de cada micção</li>
          <li>Episódios de urgência ou perda urinária</li>
          <li>Consumo de líquidos ao longo do dia</li>
        </ul>
        <img src="/images/diario-miccional-ilustracao.jpg" alt="Ilustração diário miccional" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Por que usar o diário miccional?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Ajuda a identificar padrões e gatilhos dos sintomas</li>
          <li>Permite um tratamento mais preciso e individualizado</li>
          <li>Facilita o acompanhamento da evolução durante a fisioterapia</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Anote tudo por pelo menos 3 dias para obter um panorama real dos seus hábitos.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como preencher o diário?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Registre cada ida ao banheiro, inclusive à noite</li>
          <li>Anote escapes, urgências e ingestão de líquidos</li>
          <li>Leve o diário para a consulta de fisioterapia</li>
        </ul>
        <img src="/images/fisioterapia-diario.jpg" alt="Fisioterapia e diário miccional" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O diário é confidencial e serve para te ajudar a conquistar mais autonomia e qualidade de vida.</div>
        <p class="mt-6">Em Campinas e região, ofereço avaliação e orientação personalizada para saúde urinária e do assoalho pélvico, inclusive com acompanhamento domiciliar.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde urinária é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'tempo-sem-urinar': {
      title: 'Ficar Muito Tempo sem Urinar: Quais os Riscos para a Bexiga?',
      date: '10 de julho de 2025',
      readTime: '4 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-tempo-sem-urinar.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">Por que não devemos segurar o xixi por muito tempo?</h2>
        <p>Segurar o xixi por muito tempo pode parecer inofensivo, mas pode prejudicar a bexiga e o assoalho pélvico. O ideal é urinar a cada 3 a 4 horas, evitando sobrecarga e infecções.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Risco aumentado de infecção urinária</li>
          <li>Enfraquecimento do assoalho pélvico</li>
          <li>Maior chance de urgência e escapes urinários</li>
          <li>Desconforto e dor na bexiga</li>
        </ul>
        <img src="/images/tempo-sem-urinar-ilustracao.jpg" alt="Ilustração riscos de segurar o xixi" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais motivos para segurar o xixi</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Falta de tempo ou rotina corrida</li>
          <li>Evitar banheiros públicos</li>
          <li>Desatenção aos sinais do corpo</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Programe pausas ao longo do dia para urinar e cuide da sua saúde urinária.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Orientações sobre hábitos saudáveis para a bexiga</li>
          <li>Exercícios para fortalecer o assoalho pélvico</li>
          <li>Dicas para criar uma rotina urinária adequada</li>
        </ul>
        <img src="/images/fisioterapia-tempo.jpg" alt="Fisioterapia para saúde da bexiga" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> Pequenas mudanças de hábito podem prevenir sintomas e proteger sua saúde urinária.</div>
        <p class="mt-6">Atendo em Campinas e também em domicílio para te ajudar a cuidar melhor da sua bexiga. Agende uma avaliação e invista no seu bem-estar!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde urinária é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'habitos-ruins-bexiga': {
      title: 'Hábitos Ruins para sua Bexiga e Assoalho Pélvico',
      date: '11 de julho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-habitos-ruins.jpg',
      category: 'Sintomas Urinários',
      content: `
        <h2 class="text-terracota-700 font-bold">Quais hábitos prejudicam a bexiga e o assoalho pélvico?</h2>
        <p>Alguns comportamentos do dia a dia podem prejudicar a saúde da bexiga e do assoalho pélvico, aumentando o risco de sintomas urinários e desconfortos. Identificar e mudar esses hábitos é fundamental para prevenir problemas e viver com mais qualidade.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Segurar o xixi por muito tempo</li>
          <li>Urinando "por via das dúvidas" sem vontade real</li>
          <li>Fazer força para urinar</li>
          <li>Consumo excessivo de café, refrigerantes e bebidas irritantes</li>
          <li>Ignorar sinais do corpo</li>
        </ul>
        <img src="/images/habitos-ruins-ilustracao.jpg" alt="Ilustração hábitos ruins para a bexiga" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Consequências desses hábitos</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Maior risco de infecção urinária</li>
          <li>Enfraquecimento do assoalho pélvico</li>
          <li>Urgência, escapes e desconforto ao urinar</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Ouça seu corpo, respeite a vontade de urinar e evite forçar ou adiar o xixi.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Orientações para corrigir hábitos prejudiciais</li>
          <li>Exercícios para fortalecer o assoalho pélvico</li>
          <li>Dicas para uma rotina urinária saudável</li>
        </ul>
        <img src="/images/fisioterapia-habitos.jpg" alt="Fisioterapia para hábitos ruins" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> Pequenas mudanças de hábito podem prevenir sintomas e proteger sua saúde urinária.</div>
        <p class="mt-6">Se você tem dúvidas sobre seus hábitos, agende uma avaliação em Campinas ou solicite atendimento domiciliar para receber orientações personalizadas e cuidar melhor da sua saúde.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde urinária é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'constipacao-intestinal': {
      title: 'Constipação Intestinal: Sintomas, Causas e Tratamento',
      date: '12 de julho de 2025',
      readTime: '6 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-constipacao.jpg',
      category: 'Sintomas Intestinais',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é constipação intestinal?</h2>
        <p>Constipação, ou intestino preso, é um problema comum que pode afetar sua qualidade de vida. Ela se caracteriza por evacuações infrequentes, fezes endurecidas e sensação de evacuação incompleta. Mas há solução e acolhimento!</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Menos de 3 evacuações por semana</li>
          <li>Esforço excessivo para evacuar</li>
          <li>Sensação de bloqueio ou evacuação incompleta</li>
        </ul>
        <img src="/images/constipacao-ilustracao.jpg" alt="Ilustração constipação intestinal" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Baixa ingestão de fibras e água</li>
          <li>Hábitos de segurar a vontade de evacuar</li>
          <li>Sedentarismo</li>
          <li>Alterações hormonais</li>
          <li>Disfunção do assoalho pélvico</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Mantenha uma rotina para ir ao banheiro, não segure a vontade e procure orientação se o problema persistir.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Exercícios para relaxar e fortalecer o assoalho pélvico</li>
          <li>Técnicas de biofeedback</li>
          <li>Orientações sobre postura e respiração</li>
          <li>Dicas de alimentação e rotina intestinal</li>
        </ul>
        <img src="/images/esquema-intestino.jpg" alt="Esquema do intestino saudável" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é personalizado e pode devolver conforto, segurança e bem-estar intestinal.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando procurar ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se a constipação é frequente ou causa desconforto</li>
          <li>Se há impacto na rotina, sono ou bem-estar</li>
          <li>Se deseja prevenir complicações e melhorar a qualidade de vida</li>
        </ul>
        <p class="mt-6">Se você sofre com constipação, agende uma avaliação em Campinas ou solicite atendimento domiciliar. Cuidar do seu intestino é cuidar da sua saúde!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde intestinal é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'criterios-roma': {
      title: 'Critérios de Roma: O que São e Como Avaliar a Constipação',
      date: '13 de julho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-criterios-roma.jpg',
      category: 'Sintomas Intestinais',
      content: `
        <h2 class="text-terracota-700 font-bold">O que são os Critérios de Roma?</h2>
        <p>Os Critérios de Roma são um conjunto de perguntas usadas mundialmente para diagnosticar distúrbios intestinais funcionais, como a constipação. Eles ajudam a identificar sintomas e direcionar o tratamento mais adequado para cada pessoa.</p>
        <ul class="list-decimal pl-6 text-terracota-600">
          <li>Evacuações menos de 3 vezes por semana</li>
          <li>Fezes endurecidas ou fragmentadas</li>
          <li>Esforço excessivo para evacuar</li>
          <li>Sensação de evacuação incompleta</li>
          <li>Sensação de bloqueio retal</li>
          <li>Necessidade de manobras para facilitar a evacuação</li>
        </ul>
        <img src="/images/criterios-roma.jpg" alt="Critérios de Roma" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O diagnóstico é feito quando pelo menos 2 desses sintomas estão presentes por 3 meses ou mais.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada dos sintomas intestinais</li>
          <li>Exercícios para relaxar e fortalecer o assoalho pélvico</li>
          <li>Orientações sobre alimentação, postura e rotina intestinal</li>
        </ul>
        <img src="/images/fisioterapia-criterios.jpg" alt="Fisioterapia para constipação" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Se você se identifica com esses sintomas, procure avaliação profissional para um tratamento personalizado.</div>
        <p class="mt-6">Em Campinas e região, ofereço avaliação e acompanhamento para saúde intestinal e do assoalho pélvico, inclusive com atendimento domiciliar.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde intestinal é possível e pode devolver sua liberdade!</span>
        </div>
      `
    },
    'escala-bristol': {
      title: 'Escala de Bristol: Como Avaliar as Fezes e sua Relação com a Saúde Intestinal',
      date: '14 de julho de 2025',
      readTime: '4 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-bristol.jpg',
      category: 'Sintomas Intestinais',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é a Escala de Bristol?</h2>
        <p>A Escala de Bristol é uma ferramenta visual que classifica as fezes em 7 tipos, ajudando a identificar constipação, normalidade ou diarreia. Observar o formato das fezes é fundamental para entender a saúde intestinal e buscar o tratamento adequado.</p>
        <img src="/images/escala-bristol.png" alt="Escala de Bristol" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <ul class="list-decimal pl-6 text-terracota-600">
          <li><span class="font-bold text-terracota-700">Tipo 1-2:</span> Fezes ressecadas (constipação)</li>
          <li><span class="font-bold text-terracota-700">Tipo 3-4:</span> Fezes normais</li>
          <li><span class="font-bold text-terracota-700">Tipo 5-7:</span> Fezes moles ou líquidas (diarreia)</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Observe o formato das fezes e relate ao profissional de saúde. Isso ajuda no diagnóstico e tratamento.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
        <p class="mt-6">Em Campinas e região, ofereço avaliação e orientação personalizada para saúde intestinal e do assoalho pélvico.</p>
      `
    },
    'homenagem-dia-das-maes': {
      title: 'O Cuidado que Aprendi com as Mulheres da Minha Vida: Uma Homenagem no Dia das Mães',
      date: '12 de maio de 2024',
      readTime: '4 min de leitura',
      author: 'Jéssica Godoi',
      image: '', // Sem foto
      category: 'Reflexão',
      content: `
        <p>Desde pequena, cresci cercada por mulheres fortes, generosas e acolhedoras. Lembro da minha avó ajudando vizinhas, amigas e familiares, sempre pronta a ouvir, aconselhar e oferecer um gesto de cuidado. Minha mãe seguiu o mesmo caminho, e, naturalmente, esse exemplo se tornou parte de quem eu sou.</p>
        <p>Foi essa inspiração familiar que me levou a escolher a fisioterapia pélvica como profissão e missão de vida. Durante a graduação na Universidade Federal de São Carlos, mergulhei nos estudos e logo iniciei minha trajetória científica, participando de três iniciações científicas e publicando meu primeiro artigo ainda como estudante. Desde 2019, dedico-me à pesquisa e ao atendimento em saúde da mulher, com três publicações científicas e uma especialização na área.</p>
        <p>O que mais me encanta na minha profissão é poder retribuir, de alguma forma, o cuidado que recebi e aprendi em casa. Atendo mulheres que, muitas vezes, passaram a vida inteira cuidando dos outros — dos filhos, da família, do trabalho — e que, só agora, encontram um espaço para olhar para si mesmas. Meu compromisso é oferecer um atendimento individualizado, baseado em ciência, acolhimento e respeito à história de cada uma.</p>
        <p>Neste Dia das Mães, minha homenagem vai para todas as mulheres que cuidam, inspiram e transformam vidas — dentro e fora de casa. Que possamos, juntas, valorizar o autocuidado e reconhecer a força que existe em cada história.</p>
        <p><strong>Feliz Dia das Mães!</strong></p>
      `
    },
    'dor-pelvica-cronica': {
      title: 'Dor Pélvica Crônica: Sintomas, Causas e Caminhos para o Alívio',
      date: '10 de maio de 2025',
      readTime: '6 min de leitura',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/6551841/pexels-photo-6551841.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Dor Pélvica',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é Dor Pélvica Crônica?</h2>
        <p>Sentir dor na região pélvica por mais de 6 meses pode impactar sua rotina, bem-estar e autoestima. A dor pélvica crônica é um desafio comum entre mulheres, mas tem solução e merece acolhimento.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Dor constante ou intermitente na pelve, baixo ventre ou períneo</li>
          <li>Desconforto ao sentar, caminhar ou durante relações sexuais</li>
          <li>Sensação de peso, queimação ou pontadas</li>
          <li>Alterações urinárias ou intestinais associadas</li>
        </ul>
        <img src="/images/dor-pelvica-ilustracao.jpg" alt="Ilustração dor pélvica" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais Causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Tensão ou disfunção dos músculos do assoalho pélvico</li>
          <li>Endometriose, adenomiose ou aderências pélvicas</li>
          <li>Infecções urinárias ou ginecológicas recorrentes</li>
          <li>Alterações emocionais, estresse e ansiedade</li>
          <li>Traumas, cirurgias ou partos anteriores</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Atenção:</strong> Cada caso é único. O diagnóstico correto é fundamental para um tratamento eficaz e seguro.
        </div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a Fisioterapia Pode Ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada para identificar fatores físicos e emocionais</li>
          <li>Técnicas de relaxamento, terapia manual e exercícios específicos</li>
          <li>Orientações sobre postura, respiração e autocuidado</li>
          <li>Educação sobre hábitos saudáveis e prevenção de crises</li>
        </ul>
        <img src="/images/fisioterapia-dor-pelvica.jpg" alt="Fisioterapia para dor pélvica" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Praticar exercícios de respiração profunda e relaxamento diariamente pode ajudar a reduzir a dor e a tensão.
        </div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando Procurar Ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se a dor persiste por mais de 3 meses</li>
          <li>Se há impacto na sua rotina, sono ou relações</li>
          <li>Se sente insegurança ou dúvidas sobre o diagnóstico</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode transformar sua qualidade de vida. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde pélvica é um passo importante para viver com mais conforto e liberdade.</span>
        </div>
      `
    },
    'atendimento-domiciliar-campinas': {
      title: 'Atendimento Domiciliar em Fisioterapia Pélvica em Campinas',
      date: '25 de julho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-atendimento-domiciliar.jpg',
      category: 'Fisioterapia Pélvica',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é o atendimento domiciliar em fisioterapia pélvica?</h2>
        <p>O atendimento domiciliar é uma opção acolhedora e personalizada para quem busca comodidade, privacidade e cuidado especializado sem sair de casa. Levo todos os recursos necessários para realizar avaliações, tratamentos e orientações de forma segura, adaptando o ambiente para garantir a melhor experiência terapêutica.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Comodidade e privacidade para o paciente</li>
          <li>Atenção individualizada e adaptada ao ambiente domiciliar</li>
          <li>Facilidade para quem tem dificuldade de locomoção</li>
          <li>Continuidade do tratamento em situações especiais</li>
          <li>Maior conforto e segurança</li>
          <li>Flexibilidade de horários</li>
        </ul>
        <img src="/images/atendimento-domiciliar-ilustracao.jpg" alt="Ilustração atendimento domiciliar" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Como funciona o atendimento domiciliar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação completa e personalizada no conforto do seu lar</li>
          <li>Plano terapêutico adaptado ao espaço e às necessidades do paciente</li>
          <li>Orientações detalhadas para o autocuidado</li>
          <li>Possibilidade de tirar dúvidas a qualquer momento durante a sessão</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Basta um espaço reservado e confortável. Levo todos os materiais necessários e adapto o atendimento ao ambiente disponível.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Para quem é indicado?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Pessoas com dificuldade de locomoção</li>
          <li>Pós-operatório</li>
          <li>Idosos</li>
          <li>Quem prefere receber o cuidado em casa</li>
        </ul>
        <img src="/images/fisioterapia-domiciliar.jpg" alt="Fisioterapia domiciliar" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O cuidado é o mesmo do consultório, com a vantagem de ser realizado em um ambiente familiar e confortável para o paciente.</div>
        <p class="mt-6">Atendo em Campinas e região, levando o cuidado especializado de fisioterapia pélvica até você. Agende uma avaliação domiciliar e viva o acolhimento e a praticidade desse serviço!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde pélvica no conforto do seu lar é possível e pode transformar sua qualidade de vida!</span>
        </div>
      `
    },
    'fisioterapia-pelvica-campinas': {
      title: 'Fisioterapia Pélvica em Campinas: Quando Procurar e Como Funciona',
      date: '24 de julho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-fisioterapia-campinas.jpg',
      category: 'Fisioterapia Pélvica',
      content: `
        <h2 class="text-terracota-700 font-bold">Quando procurar a fisioterapia pélvica?</h2>
        <p>A fisioterapia pélvica é indicada para mulheres que apresentam sintomas urinários, intestinais, dor pélvica, prolapso ou desconfortos íntimos. Também é fundamental para prevenção e promoção da saúde da mulher em todas as fases da vida.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Incontinência urinária ou escapes de urina</li>
          <li>Sensação de peso ou abaulamento vaginal</li>
          <li>Dor pélvica, dor na relação ou desconforto íntimo</li>
          <li>Constipação intestinal ou dificuldade para evacuar</li>
          <li>Prevenção e recuperação de cirurgias ginecológicas</li>
        </ul>
        <img src="/images/fisioterapia-campinas-ilustracao.jpg" alt="Ilustração fisioterapia pélvica em Campinas" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Como funciona o atendimento?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação detalhada e individualizada</li>
          <li>Plano terapêutico personalizado</li>
          <li>Exercícios, terapia manual e orientações para o autocuidado</li>
          <li>Acompanhamento presencial em Campinas ou domiciliar</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Não espere os sintomas piorarem. Quanto antes iniciar o cuidado, melhores os resultados!</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quais os diferenciais do atendimento?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Atendimento acolhedor, individualizado e baseado em evidências</li>
          <li>Privacidade e respeito à sua história</li>
          <li>Flexibilidade de horários e possibilidade de atendimento domiciliar</li>
        </ul>
        <img src="/images/fisioterapia-pelvica-campinas.jpg" alt="Fisioterapia pélvica em Campinas" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O acompanhamento fisioterapêutico pode transformar sua qualidade de vida, promovendo saúde, autonomia e bem-estar.</div>
        <p class="mt-6">Atendo em Campinas e região, com atendimento presencial e domiciliar. Agende uma avaliação e descubra como a fisioterapia pélvica pode ajudar você a viver com mais conforto e liberdade!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde pélvica é possível e pode transformar sua rotina!</span>
        </div>
      `
    },
    'dispareunia-profundidade-superficie': {
      title: 'Dispareunia Superficial e Profunda: Diferenças, Sintomas e Tratamento',
      date: '26 de julho de 2025',
      readTime: '6 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-dispareunia-superficial-profunda.jpg',
      category: 'Dor Genito Pélvica',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é dispareunia?</h2>
        <p>Dispareunia é o termo médico para dor durante a relação sexual. Ela pode ser superficial (na entrada da vagina) ou profunda (no fundo da pelve), e merece atenção e acolhimento.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Dor ou ardência na entrada da vagina (superficial)</li>
          <li>Dor profunda durante a penetração ou em determinadas posições</li>
          <li>Desconforto, sensação de laceração ou queimação</li>
          <li>Impacto na autoestima, desejo e vida sexual</li>
        </ul>
        <img src="/images/dispareunia-ilustracao.jpg" alt="Ilustração dispareunia" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Tensão ou disfunção dos músculos do assoalho pélvico</li>
          <li>Infecções, alergias ou alterações hormonais</li>
          <li>Endometriose, adenomiose ou aderências</li>
          <li>Fatores emocionais, ansiedade ou experiências negativas</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Dor não é normal! Buscar ajuda é o primeiro passo para recuperar o prazer e o bem-estar.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada para identificar a causa da dor</li>
          <li>Técnicas de relaxamento, terapia manual e exercícios específicos</li>
          <li>Orientações sobre autocuidado, lubrificação e comunicação</li>
        </ul>
        <img src="/images/fisioterapia-dispareunia.jpg" alt="Fisioterapia para dispareunia" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é personalizado, respeitoso e pode transformar sua experiência sexual.</div>
        <p class="mt-6">Atendo em Campinas e região, com atendimento presencial e domiciliar. Agende uma avaliação e descubra como a fisioterapia pélvica pode ajudar você a viver com mais conforto e liberdade!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde íntima é possível e pode transformar sua rotina!</span>
        </div>
      `
    },
    'dificuldade-orgasmo': {
      title: 'Dificuldade para Orgasmo: Causas, Sintomas e Caminhos para o Prazer','date': '27 de julho de 2025','readTime': '6 min de leitura','author': 'Jéssica Godoi','image': '/images/blog-dificuldade-orgasmo.jpg','category': 'Disfunção Sexual','content': `
        <h2 class="text-terracota-700 font-bold">O que é dificuldade para orgasmo?</h2>
        <p>Ter dificuldade para atingir o orgasmo é mais comum do que se imagina e pode gerar frustração, insegurança e impacto na autoestima. O acolhimento e a busca por orientação especializada são fundamentais para resgatar o prazer e a confiança.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Dificuldade ou impossibilidade de chegar ao orgasmo</li>
          <li>Prazer reduzido ou sensação de "bloqueio"</li>
          <li>Ansiedade, culpa ou preocupação durante a relação</li>
          <li>Impacto na autoestima e no relacionamento</li>
        </ul>
        <img src="/images/dificuldade-orgasmo-ilustracao.jpg" alt="Ilustração dificuldade para orgasmo" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Fatores emocionais, ansiedade, estresse ou experiências negativas</li>
          <li>Desconhecimento do próprio corpo</li>
          <li>Disfunção dos músculos do assoalho pélvico</li>
          <li>Alterações hormonais ou uso de medicamentos</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> O autoconhecimento e a comunicação aberta com o(a) parceiro(a) são essenciais para o prazer.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada para identificar fatores físicos e emocionais</li>
          <li>Exercícios para melhorar a percepção e o controle do assoalho pélvico</li>
          <li>Orientações sobre autoconhecimento, relaxamento e técnicas de prazer</li>
        </ul>
        <img src="/images/fisioterapia-orgasmo.jpg" alt="Fisioterapia para dificuldade de orgasmo" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é respeitoso, individualizado e pode transformar sua experiência sexual.</div>
        <p class="mt-6">Atendo em Campinas e região, com atendimento presencial e domiciliar. Agende uma avaliação e descubra como a fisioterapia pélvica pode ajudar você a viver com mais prazer e liberdade!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde íntima é possível e pode transformar sua rotina!</span>
        </div>
      `
    },
    'desejo-sexual-baixo': {
      title: 'Desejo Sexual Baixo: Entenda as Causas e Caminhos para o Prazer','date': '28 de julho de 2025','readTime': '6 min de leitura','author': 'Jéssica Godoi','image': '/images/blog-desejo-sexual-baixo.jpg','category': 'Disfunção Sexual','content': `
        <h2 class="text-terracota-700 font-bold">O que é desejo sexual baixo?</h2>
        <p>O desejo sexual pode variar ao longo da vida e ser influenciado por fatores físicos, emocionais e de relacionamento. Quando a falta de vontade persiste e causa sofrimento, é importante buscar acolhimento e orientação especializada.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Falta de interesse ou vontade de ter relações sexuais</li>
          <li>Dificuldade para sentir excitação ou prazer</li>
          <li>Impacto na autoestima e no relacionamento</li>
          <li>Ansiedade, culpa ou preocupação com o próprio desejo</li>
        </ul>
        <img src="/images/desejo-sexual-baixo-ilustracao.jpg" alt="Ilustração desejo sexual baixo" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Fatores emocionais, estresse, ansiedade ou depressão</li>
          <li>Alterações hormonais (menopausa, pós-parto, uso de anticoncepcionais)</li>
          <li>Disfunção dos músculos do assoalho pélvico</li>
          <li>Problemas de relacionamento ou experiências negativas</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> O diálogo aberto com o(a) parceiro(a) e o autoconhecimento são fundamentais para resgatar o desejo.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada para identificar fatores físicos e emocionais</li>
          <li>Exercícios para melhorar a percepção e o controle do assoalho pélvico</li>
          <li>Orientações sobre autoconhecimento, relaxamento e técnicas de prazer</li>
        </ul>
        <img src="/images/fisioterapia-desejo.jpg" alt="Fisioterapia para desejo sexual baixo" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é respeitoso, individualizado e pode transformar sua experiência sexual.</div>
        <p class="mt-6">Atendo em Campinas e região, com atendimento presencial e domiciliar. Agende uma avaliação e descubra como a fisioterapia pélvica pode ajudar você a viver com mais prazer e liberdade!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde íntima é possível e pode transformar sua rotina!</span>
        </div>
      `
    },
    'aderencia-clitoris': {
      title: 'Aderência de Clitóris: Sintomas, Causas e Tratamento','date': '29 de julho de 2025','readTime': '5 min de leitura','author': 'Jéssica Godoi','image': '/images/blog-aderencia-clitoris.jpg','category': 'Saúde Feminina','content': `
        <h2 class="text-terracota-700 font-bold">O que é aderência de clitóris?</h2>
        <p>A aderência de clitóris ocorre quando a glande do clitóris fica parcialmente ou totalmente coberta pelo prepúcio, dificultando a exposição e podendo causar desconforto, dor ou diminuição do prazer.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Dificuldade para expor o clitóris</li>
          <li>Desconforto, dor ou sensibilidade alterada</li>
          <li>Diminuição do prazer sexual</li>
          <li>Acúmulo de secreção ou odor na região</li>
        </ul>
        <img src="/images/aderencia-clitoris-ilustracao.jpg" alt="Ilustração aderência de clitóris" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Higiene inadequada ou acúmulo de secreção</li>
          <li>Inflamações, infecções ou alergias</li>
          <li>Alterações hormonais</li>
          <li>Fatores anatômicos individuais</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> A higiene íntima adequada e o autoconhecimento são fundamentais para prevenir e identificar alterações.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada da região íntima</li>
          <li>Orientações sobre higiene, cuidados e prevenção</li>
          <li>Técnicas de liberação manual e exercícios para a região</li>
        </ul>
        <img src="/images/fisioterapia-clitoris.jpg" alt="Fisioterapia para aderência de clitóris" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é delicado, respeitoso e pode devolver conforto e prazer.</div>
        <p class="mt-6">Atendo em Campinas e região, com atendimento presencial e domiciliar. Agende uma avaliação e descubra como a fisioterapia pélvica pode ajudar você a viver com mais conforto e liberdade!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde íntima é possível e pode transformar sua rotina!</span>
        </div>
      `
    },
    'clitoris-prazer-feminino': {
      title: 'Clitóris e Prazer Feminino: Autoconhecimento e Saúde','date': '30 de julho de 2025','readTime': '5 min de leitura','author': 'Jéssica Godoi','image': '/images/blog-clitoris-prazer.jpg','category': 'Saúde Feminina','content': `
        <h2 class="text-terracota-700 font-bold">Por que falar sobre o clitóris?</h2>
        <p>O clitóris é um órgão fundamental para o prazer feminino, mas ainda é cercado de tabus e desconhecimento. Conhecer o próprio corpo é o primeiro passo para viver a sexualidade de forma plena, saudável e sem culpa.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>O clitóris possui mais de 8 mil terminações nervosas</li>
          <li>É responsável pela maior parte do prazer sexual feminino</li>
          <li>Não tem função reprodutiva, apenas prazerosa</li>
          <li>Seu estímulo pode ser feito de diversas formas, respeitando o tempo e o desejo de cada mulher</li>
        </ul>
        <img src="/images/clitoris-ilustracao.jpg" alt="Ilustração clitóris" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Benefícios do autoconhecimento</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Mais facilidade para atingir o orgasmo</li>
          <li>Redução de tabus e culpa em relação ao prazer</li>
          <li>Melhora da autoestima e da relação com o próprio corpo</li>
          <li>Maior comunicação e satisfação sexual no relacionamento</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Explore seu corpo sem pressa, respeitando seus limites e desejos. O prazer é um direito seu!</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Orientações sobre anatomia, autoconhecimento e saúde íntima</li>
          <li>Exercícios para melhorar a percepção e o controle do assoalho pélvico</li>
          <li>Acolhimento para dúvidas, inseguranças e dificuldades relacionadas ao prazer</li>
        </ul>
        <img src="/images/fisioterapia-clitoris-prazer.jpg" alt="Fisioterapia e prazer feminino" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O prazer é parte da saúde e do bem-estar feminino. Buscar informação e cuidado é um ato de autocuidado.</div>
        <p class="mt-6">Atendo em Campinas e região, com atendimento presencial e domiciliar. Agende uma avaliação e descubra como a fisioterapia pélvica pode ajudar você a viver com mais prazer e liberdade!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde íntima é possível e pode transformar sua rotina!</span>
        </div>
      `
    },
    'vulvodinia': {
      title: 'Vulvodínia: Dor Vulvar Crônica, Sintomas e Tratamento','date': '31 de julho de 2025','readTime': '6 min de leitura','author': 'Jéssica Godoi','image': '/images/blog-vulvodinia.jpg','category': 'Dor Genito Pélvica','content': `
        <h2 class="text-terracota-700 font-bold">O que é vulvodínia?</h2>
        <p>Vulvodínia é a dor crônica na região da vulva, sem causa aparente, que pode durar meses ou anos. O sintoma pode ser constante ou surgir ao toque, durante a relação sexual, ao sentar ou usar roupas apertadas.</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Queimação, ardência, dor ou desconforto na vulva</li>
          <li>Dor ao toque, durante a relação ou ao sentar</li>
          <li>Sensação de latejamento ou irritação</li>
          <li>Impacto na autoestima, sexualidade e rotina</li>
        </ul>
        <img src="/images/vulvodinia-ilustracao.jpg" alt="Ilustração vulvodínia" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Alterações nos nervos da região vulvar</li>
          <li>Disfunção dos músculos do assoalho pélvico</li>
          <li>Infecções, alergias ou irritações prévias</li>
          <li>Fatores emocionais, ansiedade ou estresse</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Dor não é normal! Buscar ajuda é o primeiro passo para recuperar o conforto e o bem-estar.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada para identificar fatores físicos e emocionais</li>
          <li>Técnicas de relaxamento, terapia manual e exercícios específicos</li>
          <li>Orientações sobre autocuidado, higiene e prevenção de crises</li>
        </ul>
        <img src="/images/fisioterapia-vulvodinia.jpg" alt="Fisioterapia para vulvodínia" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é respeitoso, individualizado e pode devolver conforto, prazer e qualidade de vida.</div>
        <p class="mt-6">Atendo em Campinas e região, com atendimento presencial e domiciliar. Agende uma avaliação e descubra como a fisioterapia pélvica pode ajudar você a viver com mais conforto e liberdade!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde íntima é possível e pode transformar sua rotina!</span>
        </div>
      `
    },
    'dispareunia-vaginismo': {
      title: 'Dispareunia e Vaginismo: Diferenças, Sintomas e Tratamento','date': '1 de agosto de 2025','readTime': '6 min de leitura','author': 'Jéssica Godoi','image': '/images/blog-dispareunia-vaginismo.jpg','category': 'Dor Genito Pélvica','content': `
        <h2 class="text-terracota-700 font-bold">O que são dispareunia e vaginismo?</h2>
        <p>Dispareunia é a dor durante a relação sexual, enquanto vaginismo é a contração involuntária dos músculos da vagina, dificultando ou impedindo a penetração. Ambos os quadros podem causar sofrimento físico e emocional, mas têm solução!</p>
        <ul class="list-disc pl-6 text-terracota-600">
          <li>Dor, ardência ou queimação durante a relação</li>
          <li>Dificuldade ou impossibilidade de penetração</li>
          <li>Medo, ansiedade ou tensão antes do contato íntimo</li>
          <li>Impacto na autoestima, desejo e relacionamento</li>
        </ul>
        <img src="/images/dispareunia-vaginismo-ilustracao.jpg" alt="Ilustração dispareunia e vaginismo" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Principais causas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Tensão ou disfunção dos músculos do assoalho pélvico</li>
          <li>Experiências negativas, traumas ou medo</li>
          <li>Alterações hormonais, infecções ou alergias</li>
          <li>Fatores emocionais, ansiedade ou estresse</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Dica:</strong> Dor e dificuldade não são normais! Buscar ajuda é o primeiro passo para recuperar o prazer e a confiança.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a fisioterapia pode ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação individualizada para identificar fatores físicos e emocionais</li>
          <li>Técnicas de relaxamento, terapia manual e exercícios específicos</li>
          <li>Orientações sobre autocuidado, lubrificação e comunicação</li>
        </ul>
        <img src="/images/fisioterapia-dispareunia-vaginismo.jpg" alt="Fisioterapia para dispareunia e vaginismo" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é respeitoso, individualizado e pode transformar sua experiência sexual.</div>
        <p class="mt-6">Atendo em Campinas e região, com atendimento presencial e domiciliar. Agende uma avaliação e descubra como a fisioterapia pélvica pode ajudar você a viver com mais conforto e liberdade!</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde íntima é possível e pode transformar sua rotina!</span>
        </div>
      `
    },
    'fatores-disfuncao-sexual': {
      title: 'Fatores que Podem Influenciar nas Disfunções Sexuais Femininas',
      date: '22 de julho de 2025',
      readTime: '6 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-fatores-disfuncao.jpg',
      category: 'Dor Genito Pélvica',
      content: `
        <h2 class="text-terracota-700 font-bold">O que são Disfunções Sexuais Femininas?</h2>
        <p>Disfunções sexuais femininas englobam dificuldades como dor na relação, diminuição do desejo, dificuldade de excitação, ausência de orgasmo e desconforto durante o sexo. Essas questões são comuns, mas muitas vezes silenciadas por tabus e falta de informação.</p>
        <h3 class="text-terracota-800 font-semibold mt-6">Principais Fatores Físicos</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Disfunção dos músculos do assoalho pélvico (tensão, fraqueza ou coordenação inadequada)</li>
          <li>Alterações hormonais (menopausa, pós-parto, uso de anticoncepcionais)</li>
          <li>Doenças crônicas (diabetes, endometriose, doenças autoimunes)</li>
          <li>Infecções, alergias ou alterações anatômicas</li>
          <li>Uso de medicamentos que afetam a libido ou lubrificação</li>
        </ul>
        <h3 class="text-terracota-800 font-semibold mt-6">Fatores Emocionais e Comportamentais</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Estresse, ansiedade e depressão</li>
          <li>Experiências negativas, traumas ou abuso sexual</li>
          <li>Baixa autoestima e imagem corporal negativa</li>
          <li>Problemas de relacionamento, comunicação ou confiança</li>
          <li>Tabus, crenças limitantes e falta de educação sexual</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Atenção:</strong> Disfunções sexuais raramente têm uma única causa. O olhar integral é fundamental para o sucesso do tratamento.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a Fisioterapia Pode Ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Avaliação detalhada dos fatores físicos e emocionais envolvidos</li>
          <li>Técnicas de relaxamento, terapia manual e exercícios para o assoalho pélvico</li>
          <li>Orientações sobre lubrificação, posições e comunicação sexual</li>
          <li>Educação para desmistificar tabus e promover autoconhecimento</li>
          <li>Encaminhamento para outros profissionais quando necessário (psicologia, ginecologia, etc.)</li>
        </ul>
        <img src="/images/fisioterapia-disfuncao-sexual.jpg" alt="Fisioterapia para disfunção sexual" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> O tratamento é individualizado, respeitoso e acolhedor. Buscar ajuda é um ato de autocuidado e pode transformar sua relação com o próprio corpo e com o prazer.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando Procurar Ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se há dor, desconforto ou insatisfação frequente na vida sexual</li>
          <li>Se percebe mudanças no desejo, excitação ou orgasmo</li>
          <li>Se sente insegurança, vergonha ou dúvidas sobre o próprio corpo</li>
        </ul>
        <p class="mt-6">A fisioterapia pélvica pode ser o primeiro passo para resgatar o prazer, a confiança e a saúde sexual. Atendo em Campinas e região, com atendimento presencial e domiciliar.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar da sua saúde íntima é possível e pode transformar sua rotina!</span>
        </div>
      `
    },
    'prolapso-pelvico': {
      title: 'Prolapso Pélvico: O que é, Sintomas e Como a Fisioterapia Pode Ajudar',
      date: '23 de julho de 2025',
      readTime: '6 min de leitura',
      author: 'Jéssica Godoi',
      image: '/images/blog-prolapso.jpg',
      category: 'Prolapso Pélvico',
      content: `
        <h2 class="text-terracota-700 font-bold">O que é Prolapso Pélvico?</h2>
        <p>O prolapso pélvico acontece quando um ou mais órgãos da pelve (bexiga, útero, reto) descem de sua posição normal, projetando-se em direção à vagina. Isso ocorre devido ao enfraquecimento dos músculos e tecidos de sustentação do assoalho pélvico.</p>
        <h3 class="text-terracota-800 font-semibold mt-6">Principais Sintomas</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Sensação de peso ou pressão na pelve</li>
          <li>Abaulamento ou saliência na região vaginal</li>
          <li>Dificuldade para esvaziar a bexiga ou intestino</li>
          <li>Incontinência urinária ou fecal</li>
          <li>Desconforto durante relações sexuais</li>
          <li>Dor lombar ou pélvica</li>
        </ul>
        <img src="/images/blog-prolapso.jpg" alt="Ilustração prolapso pélvico" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <h3 class="text-terracota-800 font-semibold mt-6">Fatores de Risco</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Partos vaginais múltiplos</li>
          <li>Envelhecimento e menopausa</li>
          <li>Obesidade</li>
          <li>Constipação crônica</li>
          <li>Cirurgias pélvicas prévias</li>
          <li>Atividades que aumentam a pressão abdominal</li>
        </ul>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Atenção:</strong> O diagnóstico precoce e o tratamento adequado podem evitar a progressão do prolapso e melhorar sua qualidade de vida.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Como a Fisioterapia Pode Ajudar?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Exercícios para fortalecimento do assoalho pélvico</li>
          <li>Orientações sobre hábitos posturais e cuidados no dia a dia</li>
          <li>Técnicas para evitar o agravamento do prolapso</li>
          <li>Educação sobre manejo da pressão abdominal</li>
          <li>Acompanhamento individualizado e acolhedor</li>
        </ul>
        <img src="/images/fisioterapia-prolapso.jpg" alt="Fisioterapia para prolapso pélvico" class="rounded-lg shadow-md my-6 mx-auto" style="max-width: 400px;" />
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded">
          <strong class="text-terracota-800">Importante:</strong> A fisioterapia pélvica é a principal abordagem para casos leves e moderados, com exercícios, orientações e técnicas personalizadas.</div>
        <h3 class="text-terracota-800 font-semibold mt-6">Quando Procurar Ajuda?</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li>Se notar sintomas de prolapso, desconforto pélvico ou alterações urinárias/intestinais</li>
          <li>Se deseja prevenir ou entender melhor sua saúde pélvica</li>
        </ul>
        <p class="mt-6">O acompanhamento fisioterapêutico é seguro, acolhedor e pode transformar sua rotina. Atendo em Campinas e também ofereço atendimento domiciliar para seu conforto e privacidade.</p>
        <div class="bg-terracota-100 border-l-4 border-terracota-600 p-4 my-6 rounded text-center">
          <strong class="text-terracota-800">Agende uma avaliação</strong><br/>
          <span class="text-gray-700">Cuidar do seu assoalho pélvico é investir em saúde, autonomia e qualidade de vida!</span>
        </div>
      `
    }
  };
  
  // Type assertion for TypeScript
  const article = articles[id as keyof typeof articles];
  
  // Sample related articles
  const relatedArticles = [
    {
      id: 'treinamento-assoalho-pelvico',
      title: 'Exercícios Essenciais para o Assoalho Pélvico para Melhor Saúde',
      excerpt: 'Descubra os exercícios mais eficazes para fortalecer seus músculos do assoalho pélvico e melhorar a saúde pélvica.',
      date: 'June 15, 2025',
      readTime: '5 min read',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/6551849/pexels-photo-6551849.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Exercises'
    },
    {
      id: 'prolapso-pelvico-artigo',
      title: 'Entenda o Prolapso Pélvico: Sintomas, Prevenção e Tratamento',
      excerpt: 'Descubra o que é o prolapso pélvico, seus sintomas e como prevenir e tratá-lo.',
      date: 'May 28, 2025',
      readTime: '7 min read',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/5853733/pexels-photo-5853733.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Prolapso Pélvico'
    },
    {
      id: 'dor-pelvica-cronica',
      title: 'Understanding and Managing Chronic Pelvic Pain',
      excerpt: 'Explore the causes of chronic pelvic pain and evidence-based approaches to finding relief and improving quality of life.',
      date: 'May 10, 2025',
      readTime: '6 min read',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/6551841/pexels-photo-6551841.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Pain Management'
    }
  ].filter(a => a.id !== id);
  
  if (!article) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
        <Link to="/blog" className="text-teal-600 hover:text-teal-800">
          Voltar para o blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-sand-to-coral text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/blog" className="inline-flex items-center text-terracota-100 hover:text-white mb-6">
              <ArrowLeft size={16} className="mr-1" /> Voltar para o Blog
            </Link>
            <span className="inline-block bg-terracota-700 text-white text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex flex-wrap justify-center items-center text-sm text-terracota-100 gap-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="mb-8">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </article>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-gray-700 font-medium">Compartilhe este artigo:</p>
                    <div className="flex space-x-4 mt-2">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-full flex items-center">
                        <Facebook size={20} className="mr-2" />
                        Compartilhar no Facebook
                      </a>
                      <a href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 hover:bg-green-600 transition-colors px-4 py-2 rounded-full flex items-center">
                        <MessageCircle size={20} className="mr-2" />
                        Compartilhar no WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-32">
                <div className="mb-8">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Sobre a autora</h3>
                  <div className="flex items-center">
                    <img 
                      src={profileImg} 
                      alt="Foto de perfil da Dra. Jéssica Godoi" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Jéssica Godoi</p>
                      <p className="text-gray-600 text-sm">Especializada em Saúde da Mulher</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    Jéssica Godoi tem mais de 5 anos de estudos e dedicação na área de saúde da mulher, ajudando pacientes a superar uma ampla variedade de questões de saúde pélvica com tratamentos baseados em evidências e cuidado personalizado.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Índice</h3>
                  <nav className="space-y-2">
                    <a href="#" className="block text-terracota-600 hover:text-terracota-800 transition-colors">Introdução</a>
                    <a href="#" className="block text-terracota-600 hover:text-terracota-800 transition-colors">Entendendo o Assoalho Pélvico</a>
                    <a href="#" className="block text-terracota-600 hover:text-terracota-800 transition-colors">Exercícios Básicos</a>
                    <a href="#" className="block text-terracota-600 hover:text-terracota-800 transition-colors">Incorporando na Rotina</a>
                    <a href="#" className="block text-terracota-600 hover:text-terracota-800 transition-colors">Exercícios Avançados</a>
                    <a href="#" className="block text-terracota-600 hover:text-terracota-800 transition-colors">Quando Procurar Ajuda</a>
                    <a href="#" className="block text-terracota-600 hover:text-terracota-800 transition-colors">Conclusão</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            subtitle="Continue lendo" 
            title="Artigos relacionados"
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {relatedArticles.map((article) => (
              <BlogCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;