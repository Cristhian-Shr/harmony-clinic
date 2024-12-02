// components/CallToAction.js
import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-brownBg text-brownBgNav p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Não perca nossas novidades!</h2>
      <p className="mb-6">Você quer transformar agora a sua vida, melhorar sua qualidade de vida e melhorar muito sua autoestima?</p>
      <p className="mb-6">Chame a nossa equipe agora!</p>
      <Link
         href="https://wa.me/5553999097340?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Harmony%20Clinic%20Bag%C3%A9..."
        className="bg-brownBgNav hover:border-2 hover:border-brownBgNav hover:text-brownBgNav hover:bg-brownBg text-brownBg font-semibold py-2 px-4 rounded hover:scale-105 transition duration-300"
      >
       Converse com a nossa atendente!
      </Link>
    </div>
  );
};

export default CallToAction;