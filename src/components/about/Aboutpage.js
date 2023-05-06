import React from "react";
import { useNavigate } from "react-router-dom";
import {AboutContainerStyled, AboutParrafoStyled, AboutTitleStyled} from "./AboutpageStyles";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from "@mui/material";


const Aboutpage = () => {
  const navigate = useNavigate();

  return (
    <AboutContainerStyled>
      <AboutTitleStyled>Nosotros</AboutTitleStyled>
      <AboutParrafoStyled>Somos emprendedores de la ciudad de Capilla del Monte, Cordoba. Empezamos con esto hace casi un año, y estamos
        en pleno crecimiento. Cualquier critica constructiva es bienvenida para seguir creciendo!
        No esta el catalogo completo, pero vamos a ir subiendolo!
      </AboutParrafoStyled>
      <AboutTitleStyled>Contacto</AboutTitleStyled>
      <a href="https://www.instagram.com/3dart_cdm?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
      <Button variant="contained" color="secondary" startIcon={<InstagramIcon/>}
                  >
                    Instagram
                  </Button>
    </a>

    </AboutContainerStyled>



//     <AboutContainerStyled>
//       <SectionContactStyled>
//         <AboutSmallContainerStyled>
//           <BoldP>
//             SOLO <SpanStyled>VIRTOUS</SpanStyled>{" "}
//           </BoldP>
//           <p onClick={() => navigate("/productos")}>Productos</p>
//           <p onClick={() => navigate("/preguntasfrecuentes")}>
//             Preguntas frecuentes
//           </p>
//           <p onClick={() => navigate("/metodosdepago")}>Metodos de pago</p>
//           <p onClick={() => navigate("/formasdeenvio")}>Formas de envio</p>
//         </AboutSmallContainerStyled>
//         <AboutSmallContainerStyled>
//           <BoldP>Contacto / Agradecimiento</BoldP>
//           <p>
//             {" "}
//             <EmailIcon /> franciscolcersosimo14@gmail.com
//           </p>
//           <p>
//             {" "}
//             <PlaceIcon /> Todas las imagenes presentadas fueron gracias a{" "}
//             <a href="https://pixabay.com/es/">Pixabay</a>,{" "}
//             <a href="https://www.pexels.com/es-es/">Pexels</a>,{" "}
//             <a href="https://www.freepik.es/fotos-populares">FreePik </a> y{" "}
//             <a href="https://unsplash.com/es/images">UnSplash</a>{" "}
//           </p>
//         </AboutSmallContainerStyled>
//       </SectionContactStyled>

//       <SectionRedesStyled>
//         <AboutSmallContainerStyledd>
//           <BoldP>Sumate a nuestra comunidad</BoldP>

//           <RedesCtn>
//             <p>
//               {" "}
//               <a href="https://www.linkedin.com/in/francisco-cersosimo-5799731b8/">
//                 {" "}
//                 <TwitterIcon />{" "}
//               </a>{" "}
//             </p>
//             <p>
//               {" "}
//               <a href="https://www.linkedin.com/in/francisco-cersosimo-5799731b8/">
//                 {" "}
//                 <LinkedInIcon />
//               </a>
//             </p>
//             <p>
//               {" "}
//               <a href="https://www.instagram.com/3dart_cdm?igshid=NTc4MTIwNjQ2YQ==">
//                 {" "}
//                 <InstagramIcon />
//               </a>{" "}
//             </p>
//           </RedesCtn>
//         </AboutSmallContainerStyledd>
//       </SectionRedesStyled>
//     </AboutContainerStyled>
//   );
// };

  );
};

export default Aboutpage;
