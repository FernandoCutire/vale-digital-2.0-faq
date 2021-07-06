import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Instructions from './Instrucciones';
import FAQ from './FAQ';  

function App () {
  const [faqs, setfaqs] = useState([
    {
      question: '¿Es verdad que cada mes debo registrarme a la plataforma del INADEH?',
      answer: 'Sí, de momento es cada mes que debes registrarte en la página y realizar el mismo proceso.',
      link: 'https://vale.panamasolidario.gob.pa/vale/registro/inicio/',
      open: false
    },
    {
      question: '¿Por qué se maneja por cupos, si los cursos son virtuales?',
      answer: 'Siendo una plataforma virtual panameña , es necesario tener servidores que soporten el flujo de personas que entran a la misma vez a la plataforma. Así que llevar un límite de personas es lo adecuado. De lo contrario la página se caería constantemente y completar el curso sería muy difícil.',
      open: false
    },
    {
      question: '10 horas para un curso es poco tiempo y en el INADEH no existen cursos de tan corta duración. ¿Cómo es posible que se nos ofrezca algo así?',
      answer: 'Es un punto válido y en efecto parece improvisado, tomando en cuenta que probablemente sean 10 horas de contenido de video y siguiendo el formato asincrónico (cada uno decide su tiempo para entrar a la plataforma) estos se completarán en menor o mayor cantidad de tiempo que el estipulado, dependiendo de el esfuerzo de la persona que tome los cursos.',
      open: false
    },
    {
      question: '¿Cómo se valida que yo realicé los cursos, porque puedo inscribirme pero no hay un instructor que me dé seguimiento?',
      answer: 'Es muy cierto, se espera que el sistema le permita marcar como completado las lecciones o muestre un cuestionario evaluativo después de cada curso.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <Instructions/>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
