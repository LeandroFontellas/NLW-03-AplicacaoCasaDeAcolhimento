import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Skeleton from '../../Skeleton';

const LoadingOrphanage: React.FC  = () => {
    
  return (
      <Container>
          <div className="fotosOrphanage">
              <Skeleton className="painel-fotos"/>
          </div>
          <div className="nomeOrphanage">
              <Skeleton className="Titulo-Orphanage"/>
              <Skeleton className="Descricao-Orphanage"/>
          </div>
          <div className="fotosOrphanage">
              <Skeleton className="localizacaoMapa"/>
          </div>
          <div className="instrucoesVisita">
              <Skeleton className="Titulo-Orphanage"/>
              <Skeleton className="Descricao-Orphanage"/>
              <div className="wrapper">
                <div className="horarioAberto">
                    <Skeleton className="Retangulo"/>
                </div>
                <div className="atendeFds">
                    <Skeleton className="Retangulo"/>
                </div>
              </div>
          </div>
          <Skeleton className="botaoWhatsApp"/>
      </Container>
  );
}

export default LoadingOrphanage;